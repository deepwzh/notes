import{_ as n,c as a,a as e,o as i}from"./app-CDWhkXlS.js";const l={};function c(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="触发方式" tabindex="-1"><a class="header-anchor" href="#触发方式"><span>触发方式</span></a></h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>流水线支持的触发方式：</p><ul><li>push</li><li>定时触发</li><li>通过回调触发</li><li>手动触发</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">name: 部署文档</span>
<span class="line"></span>
<span class="line">on:</span>
<span class="line">  # 手动触发</span>
<span class="line">  workflow_dispatch: {}</span>
<span class="line">  # push的时触发 </span>
<span class="line">  push:</span>
<span class="line">    branches:</span>
<span class="line">      - main</span>
<span class="line">  # 定时触发</span>
<span class="line">  schedule:</span>
<span class="line">    - cron: &#39;0 0 * * *&#39;  # 每小时运行一次，根据需求调整</span>
<span class="line">  # webhook触发</span>
<span class="line">  repository_dispatch:</span>
<span class="line">      types: [feishu]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const r=n(l,[["render",c]]),t=JSON.parse('{"path":"/Devops/Github/Github%20Action/%E8%A7%A6%E5%8F%91%E6%96%B9%E5%BC%8F.html","title":"触发方式","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{},"filePathRelative":"Devops/Github/Github Action/触发方式.md"}');export{r as comp,t as data};
