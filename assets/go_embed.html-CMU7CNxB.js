import{_ as s,c as a,a as e,o as p}from"./app-IvRFt9fL.js";const l="/wiki/Golang/%E8%AF%AD%E8%A8%80/static/WKzKwaxEnhen8TbYLpRcsVIjnmg.png",t={};function i(c,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h1 id="go-embed" tabindex="-1"><a class="header-anchor" href="#go-embed"><span>go:embed</span></a></h1><h2 id="嵌入-go-embed" tabindex="-1"><a class="header-anchor" href="#嵌入-go-embed"><span>嵌入 go:embed</span></a></h2><p>以下是几个使用 go:embed 指令的例子：</p><ol><li>嵌入一个文本文件：</li></ol><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">package main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> _ <span class="token string">&quot;embed&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">//</span>go<span class="token punctuation">:</span>embed hello<span class="token punctuation">.</span>txt</span>
<span class="line">var hello string</span>
<span class="line"></span>
<span class="line">func main<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    fmt<span class="token punctuation">.</span>Println<span class="token punctuation">(</span>hello<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个程序会将 hello.txt 文件的内容嵌入到程序中。在运行时，可以直接通过变量 <code>hello</code> 访问文件内容，无需从磁盘中读取。</p><ol><li>嵌入一个目录中的所有文件：</li></ol><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">package main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> _ <span class="token string">&quot;embed&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">//</span>go<span class="token punctuation">:</span>embed static<span class="token operator">/</span><span class="token operator">*</span></span>
<span class="line">var staticFS embed<span class="token punctuation">.</span>FS</span>
<span class="line"></span>
<span class="line">func main<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    files<span class="token punctuation">,</span> err <span class="token operator">:=</span> staticFS<span class="token punctuation">.</span>ReadDir<span class="token punctuation">(</span><span class="token string">&quot;static&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> err <span class="token operator">!=</span> nil <span class="token punctuation">{</span></span>
<span class="line">        log<span class="token punctuation">.</span>Fatal<span class="token punctuation">(</span>err<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">for</span> _<span class="token punctuation">,</span> <span class="token builtin">file</span> <span class="token operator">:=</span> <span class="token builtin">range</span> files <span class="token punctuation">{</span></span>
<span class="line">        fmt<span class="token punctuation">.</span>Println<span class="token punctuation">(</span><span class="token builtin">file</span><span class="token punctuation">.</span>Name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个程序会将 static 目录中的所有文件嵌入到程序中，并将它们作为一个文件系统（embed.FS）使用。在运行时，可以通过 embed.FS 的方法访问目录中的所有文件。</p><ol><li>嵌入多个文件：</li></ol><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">package main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> _ <span class="token string">&quot;embed&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">//</span>go<span class="token punctuation">:</span>embed foo<span class="token punctuation">.</span>txt bar<span class="token punctuation">.</span>txt</span>
<span class="line">var files embed<span class="token punctuation">.</span>FS</span>
<span class="line"></span>
<span class="line">func main<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    foo<span class="token punctuation">,</span> err <span class="token operator">:=</span> files<span class="token punctuation">.</span>ReadFile<span class="token punctuation">(</span><span class="token string">&quot;foo.txt&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> err <span class="token operator">!=</span> nil <span class="token punctuation">{</span></span>
<span class="line">        log<span class="token punctuation">.</span>Fatal<span class="token punctuation">(</span>err<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    bar<span class="token punctuation">,</span> err <span class="token operator">:=</span> files<span class="token punctuation">.</span>ReadFile<span class="token punctuation">(</span><span class="token string">&quot;bar.txt&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> err <span class="token operator">!=</span> nil <span class="token punctuation">{</span></span>
<span class="line">        log<span class="token punctuation">.</span>Fatal<span class="token punctuation">(</span>err<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    fmt<span class="token punctuation">.</span>Println<span class="token punctuation">(</span>string<span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    fmt<span class="token punctuation">.</span>Println<span class="token punctuation">(</span>string<span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个程序会将 foo.txt 和 bar.txt 两个文件嵌入到程序中，并将它们作为一个文件系统（embed.FS）使用。在运行时，可以通过 embed.FS 的方法访问这两个文件的内容。</p><p><img src="`+l+'" alt=""></p>',13)]))}const u=s(t,[["render",i]]),r=JSON.parse('{"path":"/Golang/%E8%AF%AD%E8%A8%80/go_embed.html","title":"go:embed","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"嵌入 go:embed","slug":"嵌入-go-embed","link":"#嵌入-go-embed","children":[]}],"git":{},"filePathRelative":"Golang/语言/go_embed.md"}');export{u as comp,r as data};
