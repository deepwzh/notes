import{_ as n,c as l,a,o as e}from"./app-BBT4NOYz.js";const i={};function d(c,s){return e(),l("div",null,s[0]||(s[0]=[a(`<h1 id="动态链接库" tabindex="-1"><a class="header-anchor" href="#动态链接库"><span>动态链接库</span></a></h1><h2 id="相关的段" tabindex="-1"><a class="header-anchor" href="#相关的段"><span>相关的段</span></a></h2><p>啊对,我之前的解释有误,让我重新详细解释一下 <code>.plt</code>、<code>.got.plt</code> 和 <code>.rela.plt</code> 的关系：</p><ol><li><code>.plt</code> (Procedure Linkage Table):</li></ol><ul><li>是一个代码段，包含了跳转指令</li><li>每个动态链接的函数在 <code>.plt</code> 中都有一个对应的条目</li><li>第一次调用时，会跳转到动态链接器进行符号解析</li><li>解析完成后，会跳转到 <code>.got.plt</code> 中存储的地址</li></ul><ol><li><code>.got.plt</code> (Global Offset Table for PLT):</li></ol><ul><li>是一个数据段，存储了函数地址</li><li>初始时存储的是 <code>.plt</code> 中解析函数的代码地址</li><li>动态链接器解析完符号后，会将实际函数地址写入这里</li><li>后续调用时，<code>.plt</code> 会直接跳转到 <code>.got.plt</code> 中存储的地址</li></ul><ol><li><code>.rela.plt</code> (Relocation Table for PLT):</li></ol><ul><li>是一个重定位表，包含了重定位信息</li><li>存储了 <code>.got.plt</code> 中需要重定位的条目的信息</li><li>动态链接器使用这些信息来解析符号地址</li></ul><p>工作流程：</p><ol><li><p>第一次调用动态链接函数时：</p><ul><li><code>.plt</code> 跳转到动态链接器</li><li>动态链接器使用 <code>.rela.plt</code> 中的信息解析符号地址</li><li>将解析后的地址写入 <code>.got.plt</code> 中</li><li>跳转到实际函数地址</li></ul></li><li><p>后续调用时：</p><ul><li><code>.plt</code> 直接跳转到 <code>.got.plt</code> 中存储的地址</li><li>不需要再次进行符号解析</li></ul></li></ol><p>你可以使用以下命令查看这些段的内容：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">readelf <span class="token parameter variable">-S</span> your_program    <span class="token comment"># 查看段信息</span></span>
<span class="line">objdump <span class="token parameter variable">-d</span> <span class="token parameter variable">-j</span> .plt your_program    <span class="token comment"># 查看 .plt 段内容</span></span>
<span class="line">objdump <span class="token parameter variable">-s</span> <span class="token parameter variable">-j</span> .got.plt your_program    <span class="token comment"># 查看 .got.plt 段内容</span></span>
<span class="line">readelf <span class="token parameter variable">-r</span> your_program    <span class="token comment"># 查看重定位表内容</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种设计的主要优点是：</p><ul><li>实现了延迟绑定，提高了程序启动速度</li><li>只有实际使用的函数才会被解析</li><li>减少了内存占用和启动时间</li><li>支持动态加载和卸载共享库</li><li>.rela.dyn 和 .rela.plt 是重定位信息表</li></ul><p>typedef struct {</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">Elf64_Addr r_offset;    // 需要重定位的位置（相对于段基址的偏移）</span>
<span class="line"></span>
<span class="line">Elf64_Xword r_info;     // 重定位类型和符号表索引</span>
<span class="line"></span>
<span class="line">Elf64_Sxword r_addend;  // 重定位的加数</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>} Elf64_Rela;</p><ul><li>查看重定位表</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">readelf -r -C HelloWorld </span>
<span class="line"></span>
<span class="line">Relocation section &#39;.rela.dyn&#39; at offset 0x7e0 contains 10 entries:</span>
<span class="line">  Offset          Info           Type           Sym. Value    Sym. Name + Addend</span>
<span class="line">000000003d98  000000000008 R_X86_64_RELATIVE                    1160</span>
<span class="line">000000003da0  000000000008 R_X86_64_RELATIVE                    1120</span>
<span class="line">000000004008  000000000008 R_X86_64_RELATIVE                    4008</span>
<span class="line">000000003fd0  000a00000006 R_X86_64_GLOB_DAT 0000000000000000 __cxa_finalize@GLIBC_2.2.5 + 0</span>
<span class="line">000000003fd8  000100000006 R_X86_64_GLOB_DAT 0000000000000000 std::basic_ostrea[...]@GLIBCXX_3.4 + 0</span>
<span class="line">000000003fe0  000200000006 R_X86_64_GLOB_DAT 0000000000000000 __libc_start_main@GLIBC_2.34 + 0</span>
<span class="line">000000003fe8  000600000006 R_X86_64_GLOB_DAT 0000000000000000 _ITM_deregisterTM[...] + 0</span>
<span class="line">000000003ff0  000700000006 R_X86_64_GLOB_DAT 0000000000000000 __gmon_start__ + 0</span>
<span class="line">000000003ff8  000800000006 R_X86_64_GLOB_DAT 0000000000000000 _ITM_registerTMCl[...] + 0</span>
<span class="line">000000004040  001200000005 R_X86_64_COPY     0000000000004040 std::cout@GLIBCXX_3.4 + 0</span>
<span class="line"></span>
<span class="line">Relocation section &#39;.rela.plt&#39; at offset 0x8d0 contains 2 entries:</span>
<span class="line">  Offset          Info           Type           Sym. Value    Sym. Name + Addend</span>
<span class="line">000000003fc0  000300000007 R_X86_64_JUMP_SLO 0000000000000000 std::basic_ostrea[...]@GLIBCXX_3.4 + 0</span>
<span class="line">000000003fc8  000400000007 R_X86_64_JUMP_SLO 0000000000000000 std::ostream::operator@GLIBCXX_3.4 + 0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看动态重定位表</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">objdump -R HelloWorld </span>
<span class="line"></span>
<span class="line">HelloWorld:     file format elf64-x86-64</span>
<span class="line"></span>
<span class="line">DYNAMIC RELOCATION RECORDS</span>
<span class="line">OFFSET           TYPE              VALUE</span>
<span class="line">0000000000003d98 R_X86_64_RELATIVE  *ABS*+0x0000000000001160</span>
<span class="line">0000000000003da0 R_X86_64_RELATIVE  *ABS*+0x0000000000001120</span>
<span class="line">0000000000004008 R_X86_64_RELATIVE  *ABS*+0x0000000000004008</span>
<span class="line">0000000000003fd0 R_X86_64_GLOB_DAT  __cxa_finalize@GLIBC_2.2.5</span>
<span class="line">0000000000003fd8 R_X86_64_GLOB_DAT  _ZSt4endlIcSt11char_traitsIcEERSt13basic_ostreamIT_T0_ES6_@GLIBCXX_3.4</span>
<span class="line">0000000000003fe0 R_X86_64_GLOB_DAT  __libc_start_main@GLIBC_2.34</span>
<span class="line">0000000000003fe8 R_X86_64_GLOB_DAT  _ITM_deregisterTMCloneTable@Base</span>
<span class="line">0000000000003ff0 R_X86_64_GLOB_DAT  __gmon_start__@Base</span>
<span class="line">0000000000003ff8 R_X86_64_GLOB_DAT  _ITM_registerTMCloneTable@Base</span>
<span class="line">0000000000004040 R_X86_64_COPY     _ZSt4cout@GLIBCXX_3.4</span>
<span class="line">0000000000003fc0 R_X86_64_JUMP_SLOT  _ZStlsISt11char_traitsIcEERSt13basic_ostreamIcT_ES5_PKc@GLIBCXX_3.4</span>
<span class="line">0000000000003fc8 R_X86_64_JUMP_SLOT  _ZNSolsEPFRSoS_E@GLIBCXX_3.4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看-plt-与-got-相关的信息" tabindex="-1"><a class="header-anchor" href="#查看-plt-与-got-相关的信息"><span>查看 plt 与 got 相关的信息</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">objdump -d -j .plt.got HelloWorld </span>
<span class="line"></span>
<span class="line">HelloWorld:     file format elf64-x86-64</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Disassembly of section .plt.got:</span>
<span class="line"></span>
<span class="line">0000000000001050 &lt;__cxa_finalize@plt&gt;:</span>
<span class="line">    1050:       f3 0f 1e fa             endbr64</span>
<span class="line">    1054:       ff 25 76 2f 00 00       jmp    *0x2f76(%rip)        # 3fd0 &lt;__cxa_finalize@GLIBC_2.2.5&gt;</span>
<span class="line">    105a:       66 0f 1f 44 00 00       nopw   0x0(%rax,%rax,1)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">objdump -d -j .plt HelloWorld </span>
<span class="line"></span>
<span class="line">HelloWorld:     file format elf64-x86-64</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Disassembly of section .plt:</span>
<span class="line"></span>
<span class="line">0000000000001020 &lt;.plt&gt;:</span>
<span class="line">    1020:       ff 35 8a 2f 00 00       push   0x2f8a(%rip)        # 3fb0 &lt;_GLOBAL_OFFSET_TABLE_+0x8&gt;</span>
<span class="line">    1026:       ff 25 8c 2f 00 00       jmp    *0x2f8c(%rip)        # 3fb8 &lt;_GLOBAL_OFFSET_TABLE_+0x10&gt;</span>
<span class="line">    102c:       0f 1f 40 00             nopl   0x0(%rax)</span>
<span class="line">    1030:       f3 0f 1e fa             endbr64</span>
<span class="line">    1034:       68 00 00 00 00          push   $0x0</span>
<span class="line">    1039:       e9 e2 ff ff ff          jmp    1020 &lt;_init+0x20&gt;</span>
<span class="line">    103e:       66 90                   xchg   %ax,%ax</span>
<span class="line">    1040:       f3 0f 1e fa             endbr64</span>
<span class="line">    1044:       68 01 00 00 00          push   $0x1</span>
<span class="line">    1049:       e9 d2 ff ff ff          jmp    1020 &lt;_init+0x20&gt;</span>
<span class="line">    104e:       66 90                   xchg   %ax,%ax</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看动态符号</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">objdump -R -C HelloWorld </span>
<span class="line"></span>
<span class="line">HelloWorld:     file format elf64-x86-64</span>
<span class="line"></span>
<span class="line">DYNAMIC RELOCATION RECORDS</span>
<span class="line">OFFSET           TYPE              VALUE</span>
<span class="line">0000000000003d98 R_X86_64_RELATIVE  *ABS*+0x0000000000001160</span>
<span class="line">0000000000003da0 R_X86_64_RELATIVE  *ABS*+0x0000000000001120</span>
<span class="line">0000000000004008 R_X86_64_RELATIVE  *ABS*+0x0000000000004008</span>
<span class="line">0000000000003fd0 R_X86_64_GLOB_DAT  __cxa_finalize@GLIBC_2.2.5</span>
<span class="line">0000000000003fd8 R_X86_64_GLOB_DAT  std::basic_ostream&lt;char, std::char_traits&lt;char&gt; &gt;&amp; std::endl&lt;char, std::char_traits&lt;char&gt; &gt;(std::basic_ostream&lt;char, std::char_traits&lt;char&gt; &gt;&amp;)@GLIBCXX_3.4</span>
<span class="line">0000000000003fe0 R_X86_64_GLOB_DAT  __libc_start_main@GLIBC_2.34</span>
<span class="line">0000000000003fe8 R_X86_64_GLOB_DAT  _ITM_deregisterTMCloneTable@Base</span>
<span class="line">0000000000003ff0 R_X86_64_GLOB_DAT  __gmon_start__@Base</span>
<span class="line">0000000000003ff8 R_X86_64_GLOB_DAT  _ITM_registerTMCloneTable@Base</span>
<span class="line">0000000000004040 R_X86_64_COPY     std::cout@GLIBCXX_3.4</span>
<span class="line">0000000000003fc0 R_X86_64_JUMP_SLOT  std::basic_ostream&lt;char, std::char_traits&lt;char&gt; &gt;&amp; std::operator&lt;&lt; &lt;std::char_traits&lt;char&gt; &gt;(std::basic_ostream&lt;char, std::char_traits&lt;char&gt; &gt;&amp;, char const*)@GLIBCXX_3.4</span>
<span class="line">0000000000003fc8 R_X86_64_JUMP_SLOT  std::ostream::operator&lt;&lt;(std::ostream&amp; (*)(std::ostream&amp;))@GLIBCXX_3.4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27)]))}const r=n(i,[["render",d]]),t=JSON.parse('{"path":"/Cpp/%E9%93%BE%E6%8E%A5%E5%BA%93/%E5%8A%A8%E6%80%81%E9%93%BE%E6%8E%A5%E5%BA%93.html","title":"动态链接库","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"相关的段","slug":"相关的段","link":"#相关的段","children":[]},{"level":2,"title":"查看 plt 与 got 相关的信息","slug":"查看-plt-与-got-相关的信息","link":"#查看-plt-与-got-相关的信息","children":[]}],"git":{},"filePathRelative":"Cpp/链接库/动态链接库.md"}');export{r as comp,t as data};
