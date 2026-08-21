import{_ as t,c as i,a as c,d as s,b as e,w as p,r as u,o,e as l}from"./app-CVinGRqi.js";const k={};function r(d,n){const a=u("RouteLink");return o(),i("div",null,[n[2]||(n[2]=c(`<h1 id="github-action" tabindex="-1"><a class="header-anchor" href="#github-action"><span>Github Action</span></a></h1><h2 id="一个基本的流水线示例" tabindex="-1"><a class="header-anchor" href="#一个基本的流水线示例"><span>一个基本的流水线示例</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> 部署</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment"># 支持手动触发</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> main <span class="token comment"># main分支上运行</span></span>
<span class="line">  <span class="token key atrule">schedule</span><span class="token punctuation">:</span></span>
<span class="line">     <span class="token punctuation">-</span> <span class="token key atrule">cron</span><span class="token punctuation">:</span> <span class="token string">&#39;0 */2 * * *&#39;</span>  <span class="token comment"># 每两小时运行一次，根据需求调整</span></span>
<span class="line">  <span class="token key atrule">repository_dispatch</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>feishu<span class="token punctuation">]</span> <span class="token comment"># 可以通过名为feishu的webhook发起</span></span>
<span class="line"><span class="token key atrule">permissions</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">contents</span><span class="token punctuation">:</span> write</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 定义具体执行步骤</span></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># 检出代码</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment"># 使用docker步骤</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> docker<span class="token punctuation">:</span>//library/python<span class="token punctuation">:</span><span class="token number">3.13</span></span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> /bin/sh</span>
<span class="line">          <span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>c &quot;python3 build.py <span class="token important">&amp;&amp;</span> echo &quot;成果&quot;</span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">20</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> npm</span>
<span class="line">      </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装依赖</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建文档</span>
<span class="line">        <span class="token comment"># 不要使用 Jekyll 处理该目录的内容，从而保留所有文件（例如以 _ 开头的文件）。</span></span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span></span>
<span class="line">          npm run docs<span class="token punctuation">:</span>build</span>
<span class="line">          <span class="token punctuation">&gt;</span> .vuepress/dist/.nojekyll</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># 这是文档部署到的分支名称</span></span>
<span class="line">          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages</span>
<span class="line">          <span class="token key atrule">folder</span><span class="token punctuation">:</span> .vuepress/dist</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="子文档" tabindex="-1"><a class="header-anchor" href="#子文档"><span>子文档</span></a></h2>`,4)),s("ul",null,[s("li",null,[e(a,{to:"/Devops/Github/Github%20Action/%E7%BC%93%E5%AD%98Cache.html"},{default:p(()=>n[0]||(n[0]=[l("缓存Cache")])),_:1})]),s("li",null,[e(a,{to:"/Devops/Github/Github%20Action/%E8%A7%A6%E5%8F%91%E6%96%B9%E5%BC%8F.html"},{default:p(()=>n[1]||(n[1]=[l("触发方式")])),_:1})])])])}const m=t(k,[["render",r]]),b=JSON.parse('{"path":"/Devops/Github/Github%20Action/","title":"Github Action","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"一个基本的流水线示例","slug":"一个基本的流水线示例","link":"#一个基本的流水线示例","children":[]},{"level":2,"title":"子文档","slug":"子文档","link":"#子文档","children":[]}],"git":{},"filePathRelative":"Devops/Github/Github Action/README.md"}');export{m as comp,b as data};
