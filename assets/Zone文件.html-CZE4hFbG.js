import{_ as e,c as s,a,o as l}from"./app-D8xE9Rmf.js";const i="/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/DNS/static/Kbscb6O1PocTmJxW5JqcZz4XnMd.png",c={};function p(d,n){return l(),s("div",null,n[0]||(n[0]=[a(`<h1 id="zone-文件" tabindex="-1"><a class="header-anchor" href="#zone-文件"><span>Zone 文件</span></a></h1><h2 id="dns-zone-文件" tabindex="-1"><a class="header-anchor" href="#dns-zone-文件"><span>DNS zone 文件</span></a></h2><p>以下是一个示例的 DNS Zone 文件，您可以将其用作参考：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">$ORIGIN example.com.</span>
<span class="line">$TTL 3600</span>
<span class="line">@       IN SOA  ns1.example.com. admin.example.com. (</span>
<span class="line">                        2021081001  ; Serial</span>
<span class="line">                        3600        ; Refresh</span>
<span class="line">                        1800        ; Retry</span>
<span class="line">                        604800      ; Expire</span>
<span class="line">                        3600 )      ; Minimum TTL</span>
<span class="line"></span>
<span class="line">; Name Servers</span>
<span class="line">example.com.    IN  NS  ns1.example.com.</span>
<span class="line">example.com.    IN  NS  ns2.example.com.</span>
<span class="line"></span>
<span class="line">; A Records</span>
<span class="line">ns1.example.com.    IN  A   192.0.2.1</span>
<span class="line">ns2.example.com.    IN  A   198.51.100.1</span>
<span class="line">www.example.com.    IN  A   203.0.113.1</span>
<span class="line"></span>
<span class="line">; CNAME Records</span>
<span class="line">mail.example.com.   IN  CNAME   www.example.com.</span>
<span class="line">ftp.example.com.    IN  CNAME   www.example.com.</span>
<span class="line"></span>
<span class="line">; MX Records</span>
<span class="line">example.com.        IN  MX  10 mail.example.com.</span>
<span class="line">example.com.        IN  MX  20 backup-mail.example.com.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中：</p><ul><li><code>$ORIGIN</code> 定义了该区域中所有相对名称的前缀。</li><li><code>$TTL</code> 指定了所有条目的默认生存时间（TTL）。</li><li><code>SOA</code> 定义了该区域的 Start of Authority 记录。</li><li><code>NS</code> 记录定义了主域名服务器的名称服务器。</li><li><code>A</code> 记录定义了主机名与 IPv4 地址之间的映射。</li><li><code>CNAME</code> 记录定义了一个别名，指向其他主机名。</li><li><code>MX</code> 记录定义了邮件交换器的优先级和域名。</li></ul><p>注意:</p><ul><li>每个域名都有一个 DNS 服务器管理记录 <ul><li>一般设置为公有的 DNS 服务器提供商，如腾讯云 DNS，阿里云 DNS 等等</li><li>内网则可以设置为本地的 DNS 地址，如 192.168.1.169</li></ul></li></ul><p><a href="https://www.cloudflare.com/zh-cn/learning/dns/dns-records/dns-soa-record/" target="_blank" rel="noopener noreferrer">什么是 DNS SOA 记录？</a></p><h2 id="查询一个域名解析过程中的过程" tabindex="-1"><a class="header-anchor" href="#查询一个域名解析过程中的过程"><span>查询一个域名解析过程中的过程</span></a></h2><p>dig +trace _acme-challenge.xgjoy.org TXT</p><p><img src="`+i+'" alt=""></p><h2 id="查询域名解析的记录" tabindex="-1"><a class="header-anchor" href="#查询域名解析的记录"><span>查询域名解析的记录</span></a></h2><p>nslookup -q=ns gateway.xgjoy.org</p><p>-q=ns 查询 ns 解析记录</p><p>--auth 查看权威解析记录（如果有的话）</p>',16)]))}const o=e(c,[["render",p]]),m=JSON.parse('{"path":"/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/DNS/Zone%E6%96%87%E4%BB%B6.html","title":"Zone 文件","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"DNS zone 文件","slug":"dns-zone-文件","link":"#dns-zone-文件","children":[]},{"level":2,"title":"查询一个域名解析过程中的过程","slug":"查询一个域名解析过程中的过程","link":"#查询一个域名解析过程中的过程","children":[]},{"level":2,"title":"查询域名解析的记录","slug":"查询域名解析的记录","link":"#查询域名解析的记录","children":[]}],"git":{},"filePathRelative":"计算机网络/DNS/Zone文件.md"}');export{o as comp,m as data};
