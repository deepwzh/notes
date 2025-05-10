import{_ as n,c as a,a as i,o as e}from"./app-Bli_YVjf.js";const l={};function d(c,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="友元" tabindex="-1"><a class="header-anchor" href="#友元"><span>友元</span></a></h1><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2><ul><li>友元可以是一个函数，类，或者类的成员函数</li><li>友元声明在类的内部，但不受访问控制符（public/private/protected)的影响</li><li>友元关系是单向的，不具有传递性</li></ul><h2 id="友元的形式" tabindex="-1"><a class="header-anchor" href="#友元的形式"><span>友元的形式</span></a></h2><h3 id="友元函数" tabindex="-1"><a class="header-anchor" href="#友元函数"><span>友元函数</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class MyClass {</span>
<span class="line">private:</span>
<span class="line">    int privateData;</span>
<span class="line">public:</span>
<span class="line">    friend void friendFunction(MyClass&amp; obj); // 声明友元函数</span>
<span class="line">};</span>
<span class="line"></span>
<span class="line">void friendFunction(MyClass&amp; obj) {</span>
<span class="line">    obj.privateData = 10; // 可以访问私有成员</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="友元类" tabindex="-1"><a class="header-anchor" href="#友元类"><span>友元类</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class FriendClass; // 前向声明</span>
<span class="line"></span>
<span class="line">class MyClass {</span>
<span class="line">private:</span>
<span class="line">    int privateData;</span>
<span class="line">public:</span>
<span class="line">    friend class FriendClass; // 声明为友元类</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">class FriendClass {</span>
<span class="line">public:</span>
<span class="line">    void accessPrivate(MyClass&amp; obj) {</span>
<span class="line">        obj.privateData = 20; // 可以访问其私有成员</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="友元成员函数" tabindex="-1"><a class="header-anchor" href="#友元成员函数"><span>友元成员函数</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class FriendClass; // 前向声明</span>
<span class="line"></span>
<span class="line">class MyClass {</span>
<span class="line">private:</span>
<span class="line">    int privateData;</span>
<span class="line">public:</span>
<span class="line">    friend class FriendClass::specificFunction(MyClass&amp; obj); // 声明为友元成员函数</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">class FriendClass {</span>
<span class="line">public:</span>
<span class="line">    void specificFunction(MyClass&amp; obj) {</span>
<span class="line">        obj.privateData = 20; // 可以访问其私有成员</span>
<span class="line">    }</span>
<span class="line">};</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const r=n(l,[["render",d]]),v=JSON.parse('{"path":"/Cpp/%E7%B1%BB/%E5%8F%8B%E5%85%83.html","title":"友元","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"友元的形式","slug":"友元的形式","link":"#友元的形式","children":[{"level":3,"title":"友元函数","slug":"友元函数","link":"#友元函数","children":[]},{"level":3,"title":"友元类","slug":"友元类","link":"#友元类","children":[]},{"level":3,"title":"友元成员函数","slug":"友元成员函数","link":"#友元成员函数","children":[]}]}],"git":{},"filePathRelative":"Cpp/类/友元.md"}');export{r as comp,v as data};
