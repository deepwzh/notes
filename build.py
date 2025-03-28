#!/usr/bin/env python3

import json
import os
import pathlib
import sys
import re
import traceback
import shutil

class WikiGenerator:
    def __init__(self, root_dir):
        self.root_dir = root_dir
        # self.wiki_dir = os.path.join(root_dir, ".wiki")
        self.vuepress_dir = os.path.join(root_dir, ".vuepress")
        self.static_base_dir = os.path.join(self.vuepress_dir, "public", "wiki")

        self.roadmap_lists = []
        self.max_depth = 10

    
    def get_realtive_path_of_wiki(self, wiki_name, path: dict):
        base_path = self.get_wiki_dir(wiki_name)
        return str(pathlib.Path(os.path.join(self.root_dir, path)).relative_to(base_path))
    
    def _generate_roadmap_siderbar(self, wiki_name: str, data: dict, depth: int):
        res = []
        item_m = {}
        for item in data["md_files"]:
            key = item["path"][:-3] + ".dir"
            p = self.get_realtive_path_of_wiki(wiki_name, item["path"])
            if item["is_leaf"]:
                res.append([p, item["name"]])
            else:
                item_m.setdefault(key, {
                    "title": item["name"],
                    "collapsable": False,
                    "children": [],
                })["children"].append(
                    [p, "概述"]
                )
        for item in data["subdirs"]:
            children = item_m.setdefault(item["key"], {
                "title": item["name"],
                "collapsable": False,
                "children": [],
            })["children"]
            if depth >= self.max_depth:
                children.extend([
                    [self.get_realtive_path_of_wiki(wiki_name, item["path"]), item["name"]]
                    for item in item["md_files"]
                ])
            else:
                children.extend(self._generate_roadmap_siderbar(wiki_name, item, depth + 1)) 
        
        for key, value in item_m.items():
            res.append(value)
        return res
    
    def generate_roadmap_siderbar(self, wiki_name: str, data: dict):
        # res = [
        #     "",
        #     {
        #         "title": wiki_name,
        #         "collapsable": False,
        #         "children": self._generate_roadmap_siderbar(wiki_name, data, 1)
        #     }
        # ]
        res = [""] + self._generate_roadmap_siderbar(wiki_name, data, 1)

        ts_code = f"export default {json.dumps(res, indent=4, ensure_ascii=False)};"

        # print(ts_code)
        file_path = os.path.join(self.vuepress_dir, 'sidebars', f"{wiki_name}Siderbar.ts")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(ts_code)
        self.roadmap_lists.append({
            "name": wiki_name,
            "key": wiki_name,
        })
        return res

    def generate_sidebar(self):
        import_str = ""
        items_str = ""
        for item in self.roadmap_lists:
            items_str += f"""
        "/{item["name"]}/": {item["key"]}Siderbar,
    """
            import_str += f"""import {item["key"]}Siderbar from "./sidebars/{item["key"]}Siderbar";\n"""
        data = f"""
    import {{SidebarConfig4Multiple}} from "vuepress/config";
    {import_str}
    // @ts-ignore
    export default {{
    {items_str}
        // 降级，默认根据文章标题渲染侧边栏
        "/": "auto",
    }} as SidebarConfig4Multiple;
    """
        file_path = os.path.join(self.vuepress_dir, "sidebar.ts")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(data)

    def get_wiki_dir(self, wiki_name: str):
        return os.path.join(self.root_dir, wiki_name)
    
    def download_wiki(self, wiki_name: str, wiki_url: str):
        """
        下载wiki
        """
        shutil.rmtree(self.get_wiki_dir(wiki_name), ignore_errors=True)
        os.system(f"""feishu2md dl --wiki -o output_directory "{wiki_url}" """)

    def generate_wiki(self, wiki_name: str, wiki_url: str):
        """
        生成一个wiki页面
        """
        wiki_dir = self.get_wiki_dir(wiki_name)

        self.download_wiki(wiki_name, wiki_url)

        self.change_directory_name(wiki_dir)

        data = self.generate_directory_listing(wiki_name, wiki_dir, 0)
        print(data)
        self.generate_roadmap_siderbar(wiki_name, data)

        self.move_static_directory(wiki_name)
    

    def move_static_directory(self, wiki_name: str):
        """
        遍历所有子目录的static目录，将其按原本的结构拷贝到.vuepress/public下
        """
        static_base_dir = os.path.join(self.static_base_dir, wiki_name)
        os.makedirs(static_base_dir, exist_ok=True)
        target_static_dir = os.path.join(static_base_dir, "static")
        source_static_dir = os.path.join(self.get_wiki_dir(wiki_name), "static")
        if os.path.exists(source_static_dir):
            if os.path.exists(target_static_dir):
                # 如果static目录已经存在，先删除
                shutil.rmtree(target_static_dir)
            os.rename(source_static_dir, target_static_dir)

    def get_realname_dir_name(self: str, directory: str):
        """
        Get the name of the directory, excluding the ".dir" suffix.
        """
        directory_name = os.path.basename(directory)
        if directory_name.endswith(".dir"):
            directory_name = directory_name[:-4]
        return directory_name

    def change_directory_name(self, directory: str):
        """
        遍历所有的目录，将所有的目录名加一个.dir后缀
        """
        # 先收集所有需要重命名的目录，并按路径深度排序（从深到浅）
        dirs_to_rename = []
        for root, dirs, files in os.walk(directory):
            for dir_name in dirs:
                if dir_name.endswith(".dir") or dir_name == "static":
                    continue
                full_path = os.path.join(root, dir_name)
                # 计算路径深度
                depth = full_path.count(os.sep)
                dirs_to_rename.append((depth, root, dir_name))
        
        # 按深度降序排序，确保先处理深层目录
        dirs_to_rename.sort(reverse=True, key=lambda x: x[0])
        
        # 然后统一重命名
        for depth, root, dir_name in dirs_to_rename:
            old_dir_path = os.path.join(root, dir_name)
            new_dir_path = os.path.join(root, dir_name + ".dir")
            print(f"  Renaming: {old_dir_path} -> {new_dir_path}")  # 调试输出
            try:
                os.rename(old_dir_path, new_dir_path)
            except FileNotFoundError as e:
                print(f"  Warning: Failed to rename {old_dir_path}: {e}")

    def generate_directory_listing(self, wiki_name: str, directory: str, depth: int):
        """
        Generate directory listings for README.md files in the given directory and its subdirectories.
        """
        dir_name = self.get_realname_dir_name(directory)
        try:
            # Skip hidden directories and static directory
            if os.path.basename(directory).startswith('.') or '/static/' in directory:
                return

            print(f"Processing directory: {directory}")
            readme_path = os.path.join(directory, 'README.md')
            
            # Read existing README content if it exists
            existing_content = ""
            if os.path.exists(readme_path):
                try:
                    with open(readme_path, 'r', encoding='utf-8') as f:
                        existing_content = f.read()
                    print(f"  Found existing README.md: {len(existing_content)} bytes")
                        
                    # Remove any existing directory listing section if it exists (modified regex to capture optional newline)
                    pattern = r"(?:\n)?## 目录内容[\s\S]*?(?=\n##|\Z)"
                    existing_content = re.sub(pattern, "", existing_content)
                    existing_content = existing_content.rstrip() + "\n\n"
                except Exception as e:
                    print(f"  Error reading README.md: {e}")
                    # Create a simple header if we can't read the file
                    dir_name = self.get_realname_dir_name(directory)
                    existing_content = f"# {dir_name}\n\n"
            else:
                # If README doesn't exist, create basic header
                dir_name = self.get_realname_dir_name(directory)
                existing_content = f"# {dir_name}\n\n"
                print(f"  No README.md found, will create one with title: {dir_name}")

            # Get directory content
            try:
                dir_content = os.listdir(directory)
            except Exception as e:
                print(f"  Error listing directory contents: {e}")
                return

            # Start building directory listing
            content_listing = f"## 概述\n\n"
            # List subdirectories
            subdirs = []
            for item in dir_content:
                item_path = os.path.join(directory, item)
                if os.path.isdir(item_path) and not item.startswith('.') and item != 'static':
                    subdirs.append(item)
            
            # if subdirs:
            #     content_listing += "### 子目录\n\n"
            #     for subdir in sorted(subdirs):
            #         content_listing += f"- [{subdir}](./{subdir}/)\n"
            #     content_listing += "\n"
            #     print(f"  Found {len(subdirs)} subdirectories")
            
            # List markdown files
            md_files = []
            for item in dir_content:
                if item.endswith('.md') and item != 'README.md':
                    md_files.append(item)
            
            if md_files:
                content_listing += "### 文档\n\n"
                for md_file in sorted(md_files):
                    title = os.path.splitext(md_file)[0]
                    content_listing += f"- [{title}](./{md_file})\n"
                content_listing += "\n"
                print(f"  Found {len(md_files)} markdown files")
            
            # If no items found, add a default message.
            # if not (subdirs or md_files):
            #     content_listing += "暂无内容\n\n"
            
            # Always update README.md file
            try:
                with open(readme_path, 'w', encoding='utf-8') as f:
                    final_content = existing_content + content_listing
                    f.write(final_content)
                print(f"  Updated {readme_path} ({len(final_content)} bytes written)")
            except Exception as e:
                print(f"  Error writing to README.md: {e}")
            
            res = {
                "subdirs": [],
                "key": directory,
                "name": os.path.basename(directory)[:-4],
                "md_files": [{"path": os.path.join(directory, md_file), "name": md_file[:-3], "is_leaf": md_file[:-3] + ".dir" not in subdirs } for md_file in md_files],
            }
            # Process subdirectories recursively
            for subdir in subdirs:
                subres = self.generate_directory_listing(wiki_name, os.path.join(directory, subdir), depth=1)
                res["subdirs"].append(subres)
        
            return res
        except Exception as e:
            print(f"Error processing directory {directory}: {e}")
            traceback.print_exc()

def read_config():
    config_path = os.path.join(os.path.dirname(__file__), "config.json")
    with open(config_path, 'r', encoding='utf-8') as f:
        config = json.load(f)
    return config

if __name__ == "__main__":
    if len(sys.argv) > 1:
        root_dir = sys.argv[1]
    else:
        root_dir = "."
    config = read_config()
    generator = WikiGenerator(root_dir)
    for item in config["wiki"]:
        wiki_name, wiki_url = item["name"], item["url"]
        generator.generate_wiki(wiki_name, wiki_url)
    generator.generate_sidebar()
