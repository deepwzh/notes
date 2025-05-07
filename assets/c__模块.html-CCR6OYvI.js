import{_ as n,c as a,a as e,o as l}from"./app-BNx8wf2R.js";const i={};function c(p,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="c-模块" tabindex="-1"><a class="header-anchor" href="#c-模块"><span>c++ 模块</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import std;</span>
<span class="line"></span>
<span class="line">auto main() -&gt; int {</span>
<span class="line">    std::println(&quot;Hello World!&quot;);</span>
<span class="line">    return 0;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">wget</span> https://ftp.gnu.org/gnu/gcc/gcc-15.1.0/gcc-15.1.0.tar.gz</span>
<span class="line"><span class="token function">tar</span> xf gcc-15.1.0.tar.gz</span>
<span class="line"><span class="token builtin class-name">cd</span> gcc-15.1.0</span>
<span class="line">./contrib/download_prerequisites</span>
<span class="line"><span class="token function">mkdir</span> build</span>
<span class="line"><span class="token builtin class-name">cd</span> build</span>
<span class="line"><span class="token punctuation">..</span>/configure <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/usr/local/gcc-15.1.0 <span class="token punctuation">\\</span></span>
<span class="line">    --program-suffix<span class="token operator">=</span>-15 <span class="token punctuation">\\</span></span>
<span class="line">    --enable-languages<span class="token operator">=</span>c,c++ <span class="token punctuation">\\</span></span>
<span class="line">    --disable-multilib <span class="token punctuation">\\</span></span>
<span class="line">    --disable-bootstrap</span>
<span class="line"><span class="token function">make</span> -j<span class="token variable"><span class="token variable">$(</span>nproc<span class="token variable">)</span></span>  _<span class="token comment"># 使用所有CPU核心加速编译_</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/gcc-15.1.0/bin:<span class="token variable">$PATHexport</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span>/usr/local/gcc-15.1.0/lib64:<span class="token variable">$LD_LIBRARY_PATH</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">g++-15 -std=c++23 -fmodules -c -fmodule-only -fsearch-include-path bits/std.cc</span>
<span class="line">g++-15 --std=c++23 -fmodules  main.cc -o test -Wall</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=n(i,[["render",c]]),o=JSON.parse('{"path":"/Cpp/c__%E6%A8%A1%E5%9D%97.html","title":"c++ 模块","lang":"zh-CN","frontmatter":{},"headers":[],"git":{},"filePathRelative":"Cpp/c++模块.md"}');export{r as comp,o as data};
