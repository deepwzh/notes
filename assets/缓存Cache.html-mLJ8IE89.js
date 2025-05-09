import{_ as s,c as a,a as n,o as i}from"./app-DbdC6nwX.js";const c={};function l(r,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h1 id="缓存-cache" tabindex="-1"><a class="header-anchor" href="#缓存-cache"><span>缓存 Cache</span></a></h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>要缓存作业的依赖项，可以使用 GitHub 的 <u>cache</u><u> 操作</u>。 该操作创建和还原由唯一键标识的缓存。</p><p>详细文档见：<a href="https://docs.github.com/zh/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows#matching-a-cache-key" target="_blank" rel="noopener noreferrer">https://docs.github.com/zh/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows#matching-a-cache-key</a></p><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h2><p>缓存主要由 cache 操作实现的，还有两个专门用还原和保存缓存的操作。</p><h3 id="cache" tabindex="-1"><a class="header-anchor" href="#cache"><span>cache</span></a></h3><p>此作允许缓存依赖项和构建输出，以缩短工作流程执行时间。</p><ul><li>path: 要缓存的路径，!表示排除</li><li>key: 缓存的 key</li></ul><h3 id="cache-restore" tabindex="-1"><a class="header-anchor" href="#cache-restore"><span>cache/restore</span></a></h3><p>restore 作将还原缓存。它的工作方式与 <code>cache</code> 作类似，不同之处在于它没有用于保存缓存的 post 步骤。此作提供了无需保存缓存即可恢复缓存的精细功能。它接受与 <code>cache</code> 作相同的输入集。</p><p>详细文档见：<a href="https://github.com/actions/cache/blob/main/restore/README.md" target="_blank" rel="noopener noreferrer">https://github.com/actions/cache/blob/main/restore/README.md</a></p><h3 id="cache-store" tabindex="-1"><a class="header-anchor" href="#cache-store"><span>cache/store</span></a></h3><p>save 作保存缓存。它的工作方式与 <code>cache</code> 作类似，不同之处在于它不会先执行还原。此作提供了精细的功能，无需恢复缓存即可保存缓存，或者在工作流作业的任何阶段执行保存 -- 而不仅仅是在后阶段。</p><p>详细文档见：<a href="https://github.com/actions/cache/blob/main/save/README.md" target="_blank" rel="noopener noreferrer">https://github.com/actions/cache/blob/main/save/README.md</a></p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><h3 id="restore-save-流程" tabindex="-1"><a class="header-anchor" href="#restore-save-流程"><span>restore-save 流程</span></a></h3><p>在任务开始载入缓存， 结束后保存缓存</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">jobs:</span>
<span class="line">  deploy-gh-pages:</span>
<span class="line">    runs-on: ubuntu-latest</span>
<span class="line">    steps:</span>
<span class="line">      # 加载已经存在的缓存</span>
<span class="line">      - name: 加载缓存</span>
<span class="line">        uses: actions/cache/restore@v4</span>
<span class="line">        id: restore-cache</span>
<span class="line">        with:</span>
<span class="line">          path: |</span>
<span class="line">            .</span>
<span class="line">            !.vuepress/dist</span>
<span class="line">            !node_modules</span>
<span class="line">          key: \${{ runner.os }}-project-notes</span>
<span class="line"></span>
<span class="line">      # 执行一个具体的任务</span>
<span class="line">      # ...</span>
<span class="line">      </span>
<span class="line">      # 如果缓存没命中，就根据当前内容生成缓存   </span>
<span class="line">      - name: 保存缓存</span>
<span class="line">        if: always() &amp;&amp; steps.restore-cache.outputs.cache-hit != &#39;true&#39;</span>
<span class="line">        uses: actions/cache/save@v4</span>
<span class="line">        with:</span>
<span class="line">          path: |</span>
<span class="line">            .</span>
<span class="line">            !.vuepress/dist</span>
<span class="line">            !node_modules</span>
<span class="line">          key: \${{ steps.restore-cache.outputs.cache-primary-key }}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)]))}const p=s(c,[["render",l]]),h=JSON.parse('{"path":"/Devops/Github/Github%20Action/%E7%BC%93%E5%AD%98Cache.html","title":"缓存 Cache","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[{"level":3,"title":"cache","slug":"cache","link":"#cache","children":[]},{"level":3,"title":"cache/restore","slug":"cache-restore","link":"#cache-restore","children":[]},{"level":3,"title":"cache/store","slug":"cache-store","link":"#cache-store","children":[]}]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[{"level":3,"title":"restore-save 流程","slug":"restore-save-流程","link":"#restore-save-流程","children":[]}]}],"git":{},"filePathRelative":"Devops/Github/Github Action/缓存Cache.md"}');export{p as comp,h as data};
