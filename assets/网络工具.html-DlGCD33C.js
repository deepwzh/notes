import{_ as n,c as a,a as e,o as l}from"./app-BKDfXaZz.js";const p={};function i(c,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="网络工具" tabindex="-1"><a class="header-anchor" href="#网络工具"><span>网络工具</span></a></h1><h2 id="查看接口表" tabindex="-1"><a class="header-anchor" href="#查看接口表"><span>查看接口表</span></a></h2><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre><code><span class="line">netstat <span class="token operator">-</span>i</span>
<span class="line"></span>
<span class="line">Kernel Interface table</span>
<span class="line">Iface      MTU    RX-OK RX-ERR RX-DRP RX-OVR    TX-OK TX-ERR TX-DRP TX-OVR Flg</span>
<span class="line">br-774b7  1500        4      0      0 0             4      0      0      0 BMU</span>
<span class="line">br-b862c  1500  4923530      0      0 0       7183807      0      0      0 BMRU</span>
<span class="line">br-da011  1500 64977274      0      0 0      69630761      0      0      0 BMRU</span>
<span class="line">docker0   1500 21735567      0      0 0      42604103      0      0      0 BMRU</span>
<span class="line">ens192    1500 271099665      0   1688 0      230410104      0      0      0 BMRU</span>
<span class="line">lo       65536 45954311      0      0 0      45954311      0      0      0 LRU</span>
<span class="line">tun0      1500 12195288      0      0 0      17625345      0  18745      0 MOPRU</span>
<span class="line">veth053d  1500    17265      0      0 0         15687      0      0      0 BMRU</span>
<span class="line">veth3064  1500 14258104      0      0 0      11737730      0      0      0 BMRU</span>
<span class="line">veth6101  1500   101678      0      0 0        100146      0      0      0 BMRU</span>
<span class="line">veth6b42  1500   224127      0      0 0        442841      0      0      0 BMRU</span>
<span class="line">veth719d  1500 12578201      0      0 0      24700846      0      0      0 BMRU</span>
<span class="line">veth9634  1500  5359419      0      0 0       9985099      0      0      0 BMRU</span>
<span class="line">veth96c0  1500 59343712      0      0 0      63301700      0      0      0 BMRU</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://unix.stackexchange.com/questions/109251/understand-netstat-i-flgs" target="_blank" rel="noopener noreferrer">Understand netstat -i flgs</a></p><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre><code><span class="line">sudo ifconfig</span>
<span class="line">br-774b76b46142: flags=4099&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>MULTICAST&gt;  mtu 1500</span>
<span class="line">        inet 172<span class="token punctuation">.</span>21<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1  netmask 255<span class="token punctuation">.</span>255<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0  broadcast 172<span class="token punctuation">.</span>21<span class="token punctuation">.</span>255<span class="token punctuation">.</span>255</span>
<span class="line">        ether 02:42:05:5b:5f:17  txqueuelen 0  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span></span>
<span class="line">        RX packets 4  bytes 224 <span class="token punctuation">(</span>224<span class="token punctuation">.</span>0 B<span class="token punctuation">)</span></span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 4  bytes 430 <span class="token punctuation">(</span>430<span class="token punctuation">.</span>0 B<span class="token punctuation">)</span></span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span>
<span class="line">br-b862c865cf21: flags=4163&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>MULTICAST&gt;  mtu 1500</span>
<span class="line">        inet 172<span class="token punctuation">.</span>18<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1  netmask 255<span class="token punctuation">.</span>255<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0  broadcast 172<span class="token punctuation">.</span>18<span class="token punctuation">.</span>255<span class="token punctuation">.</span>255</span>
<span class="line">        ether 02:42:bb:5c:3b:73  txqueuelen 0  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span></span>
<span class="line">        RX packets 4923846  bytes 791737192 <span class="token punctuation">(</span>755<span class="token punctuation">.</span>0 MiB<span class="token punctuation">)</span></span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 7184265  bytes 1223306426 <span class="token punctuation">(</span>1<span class="token punctuation">.</span>1 GiB<span class="token punctuation">)</span></span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span>
<span class="line">br-da01119a1af0: flags=4163&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>MULTICAST&gt;  mtu 1500</span>
<span class="line">        inet 172<span class="token punctuation">.</span>20<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1  netmask 255<span class="token punctuation">.</span>255<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0  broadcast 172<span class="token punctuation">.</span>20<span class="token punctuation">.</span>255<span class="token punctuation">.</span>255</span>
<span class="line">        ether 02:42:54:2c:52:4f  txqueuelen 0  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span></span>
<span class="line">        RX packets 64985636  bytes 75500339843 <span class="token punctuation">(</span>70<span class="token punctuation">.</span>3 GiB<span class="token punctuation">)</span></span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 69639888  bytes 74419789810 <span class="token punctuation">(</span>69<span class="token punctuation">.</span>3 GiB<span class="token punctuation">)</span></span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span>
<span class="line">docker0: flags=4163&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>MULTICAST&gt;  mtu 1500</span>
<span class="line">        inet 172<span class="token punctuation">.</span>17<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1  netmask 255<span class="token punctuation">.</span>255<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0  broadcast 172<span class="token punctuation">.</span>17<span class="token punctuation">.</span>255<span class="token punctuation">.</span>255</span>
<span class="line">        ether 02:42:dd:70:ec:35  txqueuelen 0  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span></span>
<span class="line">        RX packets 21737017  bytes 1333712084 <span class="token punctuation">(</span>1<span class="token punctuation">.</span>2 GiB<span class="token punctuation">)</span></span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 42606938  bytes 6922022067 <span class="token punctuation">(</span>6<span class="token punctuation">.</span>4 GiB<span class="token punctuation">)</span></span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span>
<span class="line">ens192: flags=4163&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>MULTICAST&gt;  mtu 1500</span>
<span class="line">        inet 192<span class="token punctuation">.</span>168<span class="token punctuation">.</span>1<span class="token punctuation">.</span>111  netmask 255<span class="token punctuation">.</span>255<span class="token punctuation">.</span>255<span class="token punctuation">.</span>0  broadcast 192<span class="token punctuation">.</span>168<span class="token punctuation">.</span>1<span class="token punctuation">.</span>255</span>
<span class="line">        ether 00:50:56:aa:9c:b9  txqueuelen 1000  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span></span>
<span class="line">        RX packets 271117458  bytes 143191307939 <span class="token punctuation">(</span>133<span class="token punctuation">.</span>3 GiB<span class="token punctuation">)</span></span>
<span class="line">        RX errors 0  dropped 1688  overruns 0  frame 0</span>
<span class="line">        TX packets 230425325  bytes 133872654754 <span class="token punctuation">(</span>124<span class="token punctuation">.</span>6 GiB<span class="token punctuation">)</span></span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span>
<span class="line">lo: flags=73&lt;UP<span class="token punctuation">,</span>LOOPBACK<span class="token punctuation">,</span>RUNNING&gt;  mtu 65536</span>
<span class="line">        inet 127<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>1  netmask 255<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0<span class="token punctuation">.</span>0</span>
<span class="line">        loop  txqueuelen 1000  <span class="token punctuation">(</span>Local Loopback<span class="token punctuation">)</span></span>
<span class="line">        RX packets 45956510  bytes 8025669401 <span class="token punctuation">(</span>7<span class="token punctuation">.</span>4 GiB<span class="token punctuation">)</span></span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 45956510  bytes 8025669401 <span class="token punctuation">(</span>7<span class="token punctuation">.</span>4 GiB<span class="token punctuation">)</span></span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span>
<span class="line">tun0: flags=4305&lt;UP<span class="token punctuation">,</span>POINTOPOINT<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>NOARP<span class="token punctuation">,</span>MULTICAST&gt;  mtu 1500</span>
<span class="line">        inet 192<span class="token punctuation">.</span>168<span class="token punctuation">.</span>255<span class="token punctuation">.</span>1  netmask 255<span class="token punctuation">.</span>255<span class="token punctuation">.</span>255<span class="token punctuation">.</span>255  destination 192<span class="token punctuation">.</span>168<span class="token punctuation">.</span>255<span class="token punctuation">.</span>2</span>
<span class="line">        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 100  <span class="token punctuation">(</span>UNSPEC<span class="token punctuation">)</span></span>
<span class="line">        RX packets 12195288  bytes 2414058764 <span class="token punctuation">(</span>2<span class="token punctuation">.</span>2 GiB<span class="token punctuation">)</span></span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 17625345  bytes 18031744355 <span class="token punctuation">(</span>16<span class="token punctuation">.</span>7 GiB<span class="token punctuation">)</span></span>
<span class="line">        TX errors 0  dropped 18745 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span>
<span class="line">veth053d082: flags=4163&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>MULTICAST&gt;  mtu 1500</span>
<span class="line">        ether a6:7d:3b:7a:a8:2c  txqueuelen 0  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span></span>
<span class="line">        RX packets 17265  bytes 3561993 <span class="token punctuation">(</span>3<span class="token punctuation">.</span>3 MiB<span class="token punctuation">)</span></span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 15688  bytes 3599580 <span class="token punctuation">(</span>3<span class="token punctuation">.</span>4 MiB<span class="token punctuation">)</span></span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span>
<span class="line">veth3064aa5: flags=4163&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>MULTICAST&gt;  mtu 1500</span>
<span class="line">        ether 76:a6:4d:e6:87:f0  txqueuelen 0  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span></span>
<span class="line">        RX packets 14259158  bytes 3631191257 <span class="token punctuation">(</span>3<span class="token punctuation">.</span>3 GiB<span class="token punctuation">)</span></span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 11738581  bytes 3209074686 <span class="token punctuation">(</span>2<span class="token punctuation">.</span>9 GiB<span class="token punctuation">)</span></span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span>
<span class="line">veth61016dc: flags=4163&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>MULTICAST&gt;  mtu 1500</span>
<span class="line">        ether fa:10:42:b3:90:bb  txqueuelen 0  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span></span>
<span class="line">        RX packets 101678  bytes 72346824 <span class="token punctuation">(</span>68<span class="token punctuation">.</span>9 MiB<span class="token punctuation">)</span></span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 100146  bytes 10932480 <span class="token punctuation">(</span>10<span class="token punctuation">.</span>4 MiB<span class="token punctuation">)</span></span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span>
<span class="line">veth6b42532: flags=4163&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>MULTICAST&gt;  mtu 1500</span>
<span class="line">        ether ca:c4:0d:11:1c:1c  txqueuelen 0  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span></span>
<span class="line">        RX packets 224127  bytes 16225430 <span class="token punctuation">(</span>15<span class="token punctuation">.</span>4 MiB<span class="token punctuation">)</span></span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 442841  bytes 76546942 <span class="token punctuation">(</span>73<span class="token punctuation">.</span>0 MiB<span class="token punctuation">)</span></span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span>
<span class="line">veth719df73: flags=4163&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>MULTICAST&gt;  mtu 1500</span>
<span class="line">        ether 0a:e8:c9:48:72:6c  txqueuelen 0  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span></span>
<span class="line">        RX packets 12579651  bytes 909893850 <span class="token punctuation">(</span>867<span class="token punctuation">.</span>7 MiB<span class="token punctuation">)</span></span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 24703681  bytes 3892088947 <span class="token punctuation">(</span>3<span class="token punctuation">.</span>6 GiB<span class="token punctuation">)</span></span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span>
<span class="line">veth9634e8a: flags=4163&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>MULTICAST&gt;  mtu 1500</span>
<span class="line">        ether 6a:e2:9f:77:d7:86  txqueuelen 0  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span></span>
<span class="line">        RX packets 5359812  bytes 2149311232 <span class="token punctuation">(</span>2<span class="token punctuation">.</span>0 GiB<span class="token punctuation">)</span></span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 9985837  bytes 2884764390 <span class="token punctuation">(</span>2<span class="token punctuation">.</span>6 GiB<span class="token punctuation">)</span></span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span>
<span class="line">veth96c0f59: flags=4163&lt;UP<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>RUNNING<span class="token punctuation">,</span>MULTICAST&gt;  mtu 1500</span>
<span class="line">        ether 92:9c:5c:72:1c:bb  txqueuelen 0  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span></span>
<span class="line">        RX packets 59352074  bytes 69785863213 <span class="token punctuation">(</span>64<span class="token punctuation">.</span>9 GiB<span class="token punctuation">)</span></span>
<span class="line">        RX errors 0  dropped 0  overruns 0  frame 0</span>
<span class="line">        TX packets 63310827  bytes 67982895759 <span class="token punctuation">(</span>63<span class="token punctuation">.</span>3 GiB<span class="token punctuation">)</span></span>
<span class="line">        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre><code><span class="line">sudo ip <span class="token operator">-</span>s link</span>
<span class="line">1: lo: &lt;LOOPBACK<span class="token punctuation">,</span>UP<span class="token punctuation">,</span>LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT <span class="token function">group</span> default qlen 1000</span>
<span class="line">    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00</span>
<span class="line">    RX: bytes  packets  errors  dropped missed  mcast</span>
<span class="line">    8025681965 45956723 0       0       0       0</span>
<span class="line">    TX: bytes  packets  errors  dropped carrier collsns</span>
<span class="line">    8025681965 45956723 0       0       0       0</span>
<span class="line">2: ens192: &lt;BROADCAST<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">,</span>UP<span class="token punctuation">,</span>LOWER_UP&gt; mtu 1500 qdisc mq state UP mode DEFAULT <span class="token function">group</span> default qlen 1000</span>
<span class="line">    link/ether 00:50:56:aa:9c:b9 brd ff:ff:ff:ff:ff:ff</span>
<span class="line">    RX: bytes  packets  errors  dropped missed  mcast</span>
<span class="line">    143191531060 271118567 0       1688    0       0</span>
<span class="line">    TX: bytes  packets  errors  dropped carrier collsns</span>
<span class="line">    133872803305 230426392 0       0       0       0</span>
<span class="line">    altname enp11s0</span>
<span class="line">4: br-774b76b46142: &lt;NO-CARRIER<span class="token punctuation">,</span>BROADCAST<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">,</span>UP&gt; mtu 1500 qdisc noqueue state DOWN mode DEFAULT <span class="token function">group</span> default</span>
<span class="line">    link/ether 02:42:05:5b:5f:17 brd ff:ff:ff:ff:ff:ff</span>
<span class="line">    RX: bytes  packets  errors  dropped missed  mcast</span>
<span class="line">    224        4        0       0       0       0</span>
<span class="line">    TX: bytes  packets  errors  dropped carrier collsns</span>
<span class="line">    430        4        0       0       0       0</span>
<span class="line">5: br-b862c865cf21: &lt;BROADCAST<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">,</span>UP<span class="token punctuation">,</span>LOWER_UP&gt; mtu 1500 qdisc noqueue state UP mode DEFAULT <span class="token function">group</span> default</span>
<span class="line">    link/ether 02:42:bb:5c:3b:73 brd ff:ff:ff:ff:ff:ff</span>
<span class="line">    RX: bytes  packets  errors  dropped missed  mcast</span>
<span class="line">    791743058  4923880  0       0       0       0</span>
<span class="line">    TX: bytes  packets  errors  dropped carrier collsns</span>
<span class="line">    1223315055 7184315  0       0       0       0</span>
<span class="line">6: docker0: &lt;BROADCAST<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">,</span>UP<span class="token punctuation">,</span>LOWER_UP&gt; mtu 1500 qdisc noqueue state UP mode DEFAULT <span class="token function">group</span> default</span>
<span class="line">    link/ether 02:42:dd:70:ec:35 brd ff:ff:ff:ff:ff:ff</span>
<span class="line">    RX: bytes  packets  errors  dropped missed  mcast</span>
<span class="line">    1333722079 21737190 0       0       0       0</span>
<span class="line">    TX: bytes  packets  errors  dropped carrier collsns</span>
<span class="line">    6922074950 42607275 0       0       0       0</span>
<span class="line">10: veth6b42532@if9: &lt;BROADCAST<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">,</span>UP<span class="token punctuation">,</span>LOWER_UP&gt; mtu 1500 qdisc noqueue master br-b862c865cf21 state UP mode DEFAULT <span class="token function">group</span> default</span>
<span class="line">    link/ether ca:c4:0d:11:1c:1c brd ff:ff:ff:ff:ff:ff link-netnsid 0</span>
<span class="line">    RX: bytes  packets  errors  dropped missed  mcast</span>
<span class="line">    16225430   224127   0       0       0       0</span>
<span class="line">    TX: bytes  packets  errors  dropped carrier collsns</span>
<span class="line">    76546942   442841   0       0       0       0</span>
<span class="line">12: veth61016dc@if11: &lt;BROADCAST<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">,</span>UP<span class="token punctuation">,</span>LOWER_UP&gt; mtu 1500 qdisc noqueue master docker0 state UP mode DEFAULT <span class="token function">group</span> default</span>
<span class="line">    link/ether fa:10:42:b3:90:bb brd ff:ff:ff:ff:ff:ff link-netnsid 6</span>
<span class="line">    RX: bytes  packets  errors  dropped missed  mcast</span>
<span class="line">    72346824   101678   0       0       0       0</span>
<span class="line">    TX: bytes  packets  errors  dropped carrier collsns</span>
<span class="line">    10932480   100146   0       0       0       0</span>
<span class="line">16: veth9634e8a@if15: &lt;BROADCAST<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">,</span>UP<span class="token punctuation">,</span>LOWER_UP&gt; mtu 1500 qdisc noqueue master br-b862c865cf21 state UP mode DEFAULT <span class="token function">group</span> default</span>
<span class="line">    link/ether 6a:e2:9f:77:d7:86 brd ff:ff:ff:ff:ff:ff link-netnsid 1</span>
<span class="line">    RX: bytes  packets  errors  dropped missed  mcast</span>
<span class="line">    2149328541 5359854  0       0       0       0</span>
<span class="line">    TX: bytes  packets  errors  dropped carrier collsns</span>
<span class="line">    2884787666 9985916  0       0       0       0</span>
<span class="line">27: veth3064aa5@if26: &lt;BROADCAST<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">,</span>UP<span class="token punctuation">,</span>LOWER_UP&gt; mtu 1500 qdisc noqueue master br-b862c865cf21 state UP mode DEFAULT <span class="token function">group</span> default</span>
<span class="line">    link/ether 76:a6:4d:e6:87:f0 brd ff:ff:ff:ff:ff:ff link-netnsid 3</span>
<span class="line">    RX: bytes  packets  errors  dropped missed  mcast</span>
<span class="line">    3631220875 14259271 0       0       0       0</span>
<span class="line">    TX: bytes  packets  errors  dropped carrier collsns</span>
<span class="line">    3209100624 11738673 0       0       0       0</span>
<span class="line">45: br-da01119a1af0: &lt;BROADCAST<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">,</span>UP<span class="token punctuation">,</span>LOWER_UP&gt; mtu 1500 qdisc noqueue state UP mode DEFAULT <span class="token function">group</span> default</span>
<span class="line">    link/ether 02:42:54:2c:52:4f brd ff:ff:ff:ff:ff:ff</span>
<span class="line">    RX: bytes  packets  errors  dropped missed  mcast</span>
<span class="line">    75500377222 64985897 0       0       0       501</span>
<span class="line">    TX: bytes  packets  errors  dropped carrier collsns</span>
<span class="line">    74419831692 69640130 0       0       0       0</span>
<span class="line">93: veth053d082@if92: &lt;BROADCAST<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">,</span>UP<span class="token punctuation">,</span>LOWER_UP&gt; mtu 1500 qdisc noqueue master br-da01119a1af0 state UP mode DEFAULT <span class="token function">group</span> default</span>
<span class="line">    link/ether a6:7d:3b:7a:a8:2c brd ff:ff:ff:ff:ff:ff link-netnsid 4</span>
<span class="line">    RX: bytes  packets  errors  dropped missed  mcast</span>
<span class="line">    3561993    17265    0       0       0       0</span>
<span class="line">    TX: bytes  packets  errors  dropped carrier collsns</span>
<span class="line">    3599580    15688    0       0       0       0</span>
<span class="line">95: veth96c0f59@if94: &lt;BROADCAST<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">,</span>UP<span class="token punctuation">,</span>LOWER_UP&gt; mtu 1500 qdisc noqueue master br-da01119a1af0 state UP mode DEFAULT <span class="token function">group</span> default</span>
<span class="line">    link/ether 92:9c:5c:72:1c:bb brd ff:ff:ff:ff:ff:ff link-netnsid 7</span>
<span class="line">    RX: bytes  packets  errors  dropped missed  mcast</span>
<span class="line">    69785904246 59352335 0       0       0       0</span>
<span class="line">    TX: bytes  packets  errors  dropped carrier collsns</span>
<span class="line">    67982937641 63311069 0       0       0       0</span>
<span class="line">103: veth719df73@if102: &lt;BROADCAST<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">,</span>UP<span class="token punctuation">,</span>LOWER_UP&gt; mtu 1500 qdisc noqueue master docker0 state UP mode DEFAULT <span class="token function">group</span> default</span>
<span class="line">    link/ether 0a:e8:c9:48:72:6c brd ff:ff:ff:ff:ff:ff link-netnsid 2</span>
<span class="line">    RX: bytes  packets  errors  dropped missed  mcast</span>
<span class="line">    909906267  12579824 0       0       0       0</span>
<span class="line">    TX: bytes  packets  errors  dropped carrier collsns</span>
<span class="line">    3892141830 24704018 0       0       0       0</span>
<span class="line">108: tun0: &lt;POINTOPOINT<span class="token punctuation">,</span>MULTICAST<span class="token punctuation">,</span>NOARP<span class="token punctuation">,</span>UP<span class="token punctuation">,</span>LOWER_UP&gt; mtu 1500 qdisc pfifo_fast state UNKNOWN mode DEFAULT <span class="token function">group</span> default qlen 100</span>
<span class="line">    link/none</span>
<span class="line">    RX: bytes  packets  errors  dropped missed  mcast</span>
<span class="line">    2414058764 12195288 0       0       0       0</span>
<span class="line">    TX: bytes  packets  errors  dropped carrier collsns</span>
<span class="line">    18031744355 17625345 0       18745   0       0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看网卡的一些情况" tabindex="-1"><a class="header-anchor" href="#查看网卡的一些情况"><span>查看网卡的一些情况</span></a></h2><p>网络接口的 ring buffer</p><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre><code><span class="line">sudo ethtool <span class="token operator">-</span>g ens192</span>
<span class="line">Ring parameters <span class="token keyword">for</span> ens192:</span>
<span class="line">Pre-<span class="token function">set</span> maximums:</span>
<span class="line">RX:             4096</span>
<span class="line">RX Mini:        2048</span>
<span class="line">RX Jumbo:       4096</span>
<span class="line">TX:             4096</span>
<span class="line">Current hardware settings:</span>
<span class="line">RX:             1024</span>
<span class="line">RX Mini:        128</span>
<span class="line">RX Jumbo:       256</span>
<span class="line">TX:             512</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>网络接口的开关</p><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre><code><span class="line">sudo ethtool <span class="token operator">-</span>k ens192</span>
<span class="line">Features <span class="token keyword">for</span> ens192:</span>
<span class="line">rx-checksumming: on</span>
<span class="line">tx-checksumming: on</span>
<span class="line">        tx-checksum-ipv4: off <span class="token namespace">[fixed]</span></span>
<span class="line">        tx-checksum-ip-generic: on</span>
<span class="line">        tx-checksum-ipv6: off <span class="token namespace">[fixed]</span></span>
<span class="line">        tx-checksum-fcoe-crc: off <span class="token namespace">[fixed]</span></span>
<span class="line">        tx-checksum-sctp: off <span class="token namespace">[fixed]</span></span>
<span class="line">scatter-gather: on</span>
<span class="line">        tx-scatter-gather: on</span>
<span class="line">        tx-scatter-gather-fraglist: off <span class="token namespace">[fixed]</span></span>
<span class="line">tcp-segmentation-offload: on</span>
<span class="line">        tx-tcp-segmentation: on</span>
<span class="line">        tx-tcp-ecn-segmentation: off <span class="token namespace">[fixed]</span></span>
<span class="line">        tx-tcp-mangleid-segmentation: off</span>
<span class="line">        tx-tcp6-segmentation: on</span>
<span class="line">generic-segmentation-offload: on</span>
<span class="line">generic-<span class="token function">receive-offload</span>: on</span>
<span class="line">large-<span class="token function">receive-offload</span>: off</span>
<span class="line">rx-vlan-offload: on</span>
<span class="line">tx-vlan-offload: on</span>
<span class="line">ntuple-filters: off <span class="token namespace">[fixed]</span></span>
<span class="line"><span class="token function">receive-hashing</span>: on</span>
<span class="line">highdma: on</span>
<span class="line">rx-vlan-<span class="token keyword">filter</span>: on <span class="token namespace">[fixed]</span></span>
<span class="line">vlan-challenged: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-lockless: off <span class="token namespace">[fixed]</span></span>
<span class="line">netns-local: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-gso-robust: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-fcoe-segmentation: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-gre-segmentation: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-gre-csum-segmentation: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-ipxip4-segmentation: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-ipxip6-segmentation: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-udp_tnl-segmentation: on</span>
<span class="line">tx-udp_tnl-csum-segmentation: on</span>
<span class="line">tx-gso-partial: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-tunnel-remcsum-segmentation: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-sctp-segmentation: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-esp-segmentation: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-udp-segmentation: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-gso-list: off <span class="token namespace">[fixed]</span></span>
<span class="line">fcoe-mtu: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-nocache-<span class="token function">copy</span>: off</span>
<span class="line">loopback: off <span class="token namespace">[fixed]</span></span>
<span class="line">rx-fcs: off <span class="token namespace">[fixed]</span></span>
<span class="line">rx-all: off <span class="token namespace">[fixed]</span></span>
<span class="line">tx-vlan-stag-hw-insert: off <span class="token namespace">[fixed]</span></span>
<span class="line">rx-vlan-stag-hw-parse: off <span class="token namespace">[fixed]</span></span>
<span class="line">rx-vlan-stag-<span class="token keyword">filter</span>: off <span class="token namespace">[fixed]</span></span>
<span class="line">l2-fwd-offload: off <span class="token namespace">[fixed]</span></span>
<span class="line">hw-tc-offload: off <span class="token namespace">[fixed]</span></span>
<span class="line">esp-hw-offload: off <span class="token namespace">[fixed]</span></span>
<span class="line">esp-tx-csum-hw-offload: off <span class="token namespace">[fixed]</span></span>
<span class="line">rx-udp_tunnel-port-offload: off <span class="token namespace">[fixed]</span></span>
<span class="line">tls-hw-tx-offload: off <span class="token namespace">[fixed]</span></span>
<span class="line">tls-hw-rx-offload: off <span class="token namespace">[fixed]</span></span>
<span class="line">rx-gro-hw: off <span class="token namespace">[fixed]</span></span>
<span class="line">tls-hw-record: off <span class="token namespace">[fixed]</span></span>
<span class="line">rx-gro-list: off</span>
<span class="line">macsec-hw-offload: off <span class="token namespace">[fixed]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>网络接口上的各个 RX, TX 队列统计数据</p><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre><code><span class="line">sudo ethtool <span class="token operator">-</span>S ens192  <span class="token punctuation">|</span> grep err</span>
<span class="line">  pkts tx err: 0</span>
<span class="line">          hdr err: 0</span>
<span class="line">       pkts tx err: 0</span>
<span class="line">          hdr err: 0</span>
<span class="line">       pkts tx err: 0</span>
<span class="line">          hdr err: 0</span>
<span class="line">       pkts tx err: 0</span>
<span class="line">          hdr err: 0</span>
<span class="line">       pkts rx err: 0</span>
<span class="line">          err: 0</span>
<span class="line">       pkts rx err: 0</span>
<span class="line">          err: 0</span>
<span class="line">       pkts rx err: 0</span>
<span class="line">          err: 0</span>
<span class="line">       pkts rx err: 0</span>
<span class="line">          err: 0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看错误统计</p><div class="language-powershell line-numbers-mode" data-highlighter="prismjs" data-ext="powershell"><pre><code><span class="line">sudo netstat <span class="token operator">-</span>s <span class="token punctuation">|</span> grep error</span>
<span class="line">    0 packet receive errors</span>
<span class="line">    0 receive buffer errors</span>
<span class="line">    0 send buffer errors</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const o=n(p,[["render",i]]),u=JSON.parse('{"path":"/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E7%BD%91%E7%BB%9C%E5%B7%A5%E5%85%B7.html","title":"网络工具","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"查看接口表","slug":"查看接口表","link":"#查看接口表","children":[]},{"level":2,"title":"查看网卡的一些情况","slug":"查看网卡的一些情况","link":"#查看网卡的一些情况","children":[]}],"git":{},"filePathRelative":"计算机网络/网络工具.md"}');export{o as comp,u as data};
