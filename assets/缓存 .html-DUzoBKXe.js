import{_ as n,c as e,a,o as i}from"./app-jQSDyg8q.js";const l={};function c(d,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存"><span>缓存</span></a></h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>要缓存作业的依赖项，可以使用 GitHub 的 <u>cache</u><u> 操作</u>。 该操作创建和还原由唯一键标识的缓存。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">jobs:</span>
<span class="line">  deploy-gh-pages:</span>
<span class="line">    runs-on: ubuntu-latest</span>
<span class="line">    steps:</span>
<span class="line">      </span>
<span class="line">      # 加载已经存在的缓存</span>
<span class="line">      - name: 加载缓存</span>
<span class="line">        uses: actions/cache@v4</span>
<span class="line">        id: restore-cache</span>
<span class="line">        with:</span>
<span class="line">          path: |</span>
<span class="line">            .</span>
<span class="line">            !.vuepress/dist</span>
<span class="line">            !node_modules</span>
<span class="line">          # 每次执行任务的缓存key都是不同（因为不可以重复使用） </span>
<span class="line">          key: \${{ runner.os }}-project-\${{ hashFiles(&#39;**&#39;) }}</span>
<span class="line">          # 如果缓存key不存在，要从哪些键或者键前缀中去搜索</span>
<span class="line">          restore-keys: |</span>
<span class="line">            \${{ runner.os }}-project-</span>
<span class="line"></span>
<span class="line">      # 执行一个具体的任务</span>
<span class="line">      # ...</span>
<span class="line">      </span>
<span class="line">      # 如果缓存没命中，就根据当前内容生成缓存   </span>
<span class="line">      - name: 保存缓存</span>
<span class="line">        if: steps.restore-cache.outputs.cache-hit != &#39;true&#39;</span>
<span class="line">        uses: actions/cache@v4</span>
<span class="line">        with:</span>
<span class="line">          path: |</span>
<span class="line">            .</span>
<span class="line">            !.vuepress/dist</span>
<span class="line">            !node_modules</span>
<span class="line">          key: \${{ runner.os }}-project-\${{ hashFiles(&#39;**&#39;) }}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档"><span>参考文档</span></a></h2><p><a href="https://docs.github.com/zh/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows#matching-a-cache-key" target="_blank" rel="noopener noreferrer">https://docs.github.com/zh/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows#matching-a-cache-key</a></p>`,7)]))}const r=n(l,[["render",c]]),t=JSON.parse('{"path":"/Devops/Github/Github%20Action/%E7%BC%93%E5%AD%98%20.html","title":"缓存","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{},"filePathRelative":"Devops/Github/Github Action/缓存 .md"}');export{r as comp,t as data};
