import{_ as s,c as a,a as e,o as i}from"./app-B2W6m6qX.js";const l="/wiki/Golang/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%A1%86%E6%9E%B6/Kratos/static/Aw3IbiH1Eo7MDIxUvdzcJO0pnPe.png",p="/wiki/Golang/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%A1%86%E6%9E%B6/Kratos/static/AKZqbTAgmoKb7xxZfdEcPSx8nCf.png",t="/wiki/Golang/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%A1%86%E6%9E%B6/Kratos/static/VSAabDZDVoEKyDxhZXnctScBnFe.png",c="/wiki/Golang/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%A1%86%E6%9E%B6/Kratos/static/TOq1bI7XxoXsPexAHBhcHamhnqd.png",o="/wiki/Golang/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%A1%86%E6%9E%B6/Kratos/static/SqNRbmfiVowiPVxY631csSC3nMe.png",u="/wiki/Golang/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%A1%86%E6%9E%B6/Kratos/static/PzQRbpE9PorXj4xDecGcWgHhnPc.png",r="/wiki/Golang/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%A1%86%E6%9E%B6/Kratos/static/TXRYbp9uCoZUapxJ9SbctoUQngc.png",d={};function m(v,n){return i(),a("div",null,n[0]||(n[0]=[e('<h1 id="项目结构体系" tabindex="-1"><a class="header-anchor" href="#项目结构体系"><span>项目结构体系</span></a></h1><h2 id="关于-kratos" tabindex="-1"><a class="header-anchor" href="#关于-kratos"><span>关于 Kratos</span></a></h2><p>Kratos 是 B 站开源的一款轻量型微服务框架。包含<strong>大量微服务相关框架及工具</strong>。</p><p>整套 Kratos 框架也是不错的学习仓库，可以了<strong>解和参考到微服务方面的技术积累和经验</strong>。</p><p>Kratos 有较为丰富的组件和抽象层次；</p><p>自己感觉的比较好的点如下：</p><ul><li><p>结合了依赖注入框架 Wire, 实际体验会让代码可维护性更好一些</p></li><li><p>抽象出了 Transport 层，便于自己替换其他的 Web 服务器实现，如 Gin, <strong>hertz</strong>**, fiber 等等**</p></li><li><p>一些丰富的中间件，如</p><ul><li>logger，支持自动 reload, 从多个源（文件，配置中心，环境遍历）读取配置并合并</li><li>Tracing，支持集成了 OpenTelemetry</li><li>Monitor，暴露 prometheus 接口</li></ul></li><li><p>支持丰富的中间件</p><ul><li>服务发现: etcd, k8s, consul；</li><li>以及一些限流，熔断算法等等</li></ul></li><li><p>方便的代码生成，可以通过定义 proto 的方式，自动生成 client 和 Service 层代码，并能直接导出 openapi 文件</p></li><li><p>提供了较为丰富的 example 和一个默认的 Layout 文件，里面大多参照 DDD 领域驱动设计，结构良好</p></li></ul><p>架构图如下</p><p><img src="'+l+`" alt=""></p><p>框架包含的主要特性:</p><ul><li><strong>APIs</strong>：协议通信以 HTTP/gRPC 为基础，通过 Protobuf 进行定义；</li><li><strong>Errors</strong>：通过 Protobuf 的 Enum 作为错误码定义，以及工具生成判定接口；</li><li><strong>Metadata</strong>：在协议通信 HTTP/gRPC 中，通过 Middleware 规范化服务元信息传递；</li><li><strong>Config</strong>：支持多数据源方式，进行配置合并铺平，通过 Atomic 方式支持动态配置；</li><li><strong>Logger</strong>：标准日志接口，可方便集成三方 log 库，并可通过 fluentd 收集日志；</li><li><strong>Metrics</strong>：统一指标接口，可以实现各种指标系统，默认集成 Prometheus；</li><li><strong>Tracing</strong>：遵循 OpenTelemetry 规范定义，以实现微服务链路追踪；</li><li><strong>Encoding</strong>：支持 Accept 和 Content-Type 进行自动选择内容编码；</li><li><strong>Transport</strong>：通用的 HTTP/gRPC 传输层，实现统一的 Middleware 插件支持；</li><li><strong>Registry</strong>：实现统一注册中心接口，可插件化对接各种注册中心；</li></ul><h2 id="自己做的一些实践" tabindex="-1"><a class="header-anchor" href="#自己做的一些实践"><span>自己做的一些实践</span></a></h2><h3 id="工具方面" tabindex="-1"><a class="header-anchor" href="#工具方面"><span>工具方面</span></a></h3><p>简单封了相关 kratos 和 protoc 的接口，搞了个 flowgame-ctl 命令行</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">.PHONY</span><span class="token punctuation">:</span> all user<span class="token punctuation">-</span>private gorm<span class="token punctuation">-</span>gen gen<span class="token punctuation">-</span>config</span>
<span class="line"><span class="token key atrule">game-name</span><span class="token punctuation">:</span></span>
<span class="line">    go run ./cmd/name</span>
<span class="line"><span class="token key atrule">gen-gorm</span><span class="token punctuation">:</span></span>
<span class="line">    go run ./cmd/gorm<span class="token punctuation">-</span>generator</span>
<span class="line"><span class="token key atrule">gen-proto</span><span class="token punctuation">:</span></span>
<span class="line">    ../flowgame<span class="token punctuation">-</span>ctl/flowgame<span class="token punctuation">-</span>ctl service gen</span>
<span class="line"><span class="token key atrule">gen-config</span><span class="token punctuation">:</span></span>
<span class="line">    protoc <span class="token punctuation">-</span><span class="token punctuation">-</span>proto_path=./internal             <span class="token punctuation">-</span><span class="token punctuation">-</span>proto_path=/data/game/common/flowgame<span class="token punctuation">-</span>apis            <span class="token punctuation">-</span><span class="token punctuation">-</span>go_out=paths=source_relative<span class="token punctuation">:</span>./internal internal/conf/<span class="token important">*.proto</span></span>
<span class="line"><span class="token key atrule">gen-client</span><span class="token punctuation">:</span></span>
<span class="line">    ../flowgame<span class="token punctuation">-</span>ctl/flowgame<span class="token punctuation">-</span>ctl service server</span>
<span class="line"><span class="token key atrule">migrate</span><span class="token punctuation">:</span></span>
<span class="line">    go run ./cmd/gorm<span class="token punctuation">-</span>migrate <span class="token punctuation">-</span><span class="token punctuation">-</span>dsn &#39;$(DSN)&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目结构方面-以-flowgame-game-name-为例" tabindex="-1"><a class="header-anchor" href="#项目结构方面-以-flowgame-game-name-为例"><span>项目结构方面（以 flowgame-game-name 为例）</span></a></h3><p><img src="`+p+'" alt=""></p><h4 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h4><ul><li>存放本项目的接口</li><li>参照了 googleapis 的规范 <a href="https://cloud.google.com/apis/design/standard_methods?hl=zh-cn" target="_blank" rel="noopener noreferrer">https://cloud.google.com/apis/design/standard_methods?hl=zh-cn</a></li></ul><p><img src="'+t+'" alt=""></p><ul><li>如果这个项目被其他项目调用，会将 api 目录拷贝到公共的 flowgame-apis 仓库</li></ul><p><img src="'+c+`" alt=""></p><p>代码示例如下:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line">syntax = &quot;proto3&quot;;</span>
<span class="line"></span>
<span class="line">package flowgame.game.name.v1;</span>
<span class="line"></span>
<span class="line">import &quot;google/api/annotations.proto&quot;;</span>
<span class="line"></span>
<span class="line">option go_package = &quot;gitlab.xgjoy.org/flowgame/flowgame<span class="token punctuation">-</span>game<span class="token punctuation">-</span>name/api/name/v1;v1&quot;;</span>
<span class="line"></span>
<span class="line">service NameRandLibService <span class="token punctuation">{</span></span>
<span class="line">    rpc ListNameRandLib (ListNameRandLibRequest) returns (ListNameRandLibReply)  <span class="token punctuation">{</span></span>
<span class="line">        option (google.api.http) = <span class="token punctuation">{</span></span>
<span class="line">            <span class="token key atrule">get</span><span class="token punctuation">:</span> <span class="token string">&quot;name/randlib&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span>;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    rpc GetNameRandLib (GetNameRandLibRequest) returns (GetNameRandLibReply)  <span class="token punctuation">{</span></span>
<span class="line">        option (google.api.http) = <span class="token punctuation">{</span></span>
<span class="line">            <span class="token key atrule">get</span><span class="token punctuation">:</span> <span class="token string">&quot;name/randlib/{id}&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span>;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    rpc CreateNameRandLib (CreateNameRandLibRequest) returns (CreateNameRandLibReply)  <span class="token punctuation">{</span></span>
<span class="line">        option (google.api.http) = <span class="token punctuation">{</span></span>
<span class="line">            <span class="token key atrule">post</span><span class="token punctuation">:</span> <span class="token string">&quot;name/randlib&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token key atrule">body</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span>;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    rpc DeleteNameRandLib (DeleteNameRandLibRequest) returns (DeleteNameRandLibReply) <span class="token punctuation">{</span></span>
<span class="line">        option (google.api.http) = <span class="token punctuation">{</span></span>
<span class="line">            <span class="token key atrule">delete</span><span class="token punctuation">:</span> <span class="token string">&quot;name/randlib/{id}&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span>;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    rpc UpdateNameRandLib (UpdateNameRandLibRequest) returns (UpdateNameRandLibReply) <span class="token punctuation">{</span></span>
<span class="line">        option (google.api.http) = <span class="token punctuation">{</span></span>
<span class="line">            <span class="token key atrule">put</span><span class="token punctuation">:</span> <span class="token string">&quot;name/randlib/{id}&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token key atrule">body</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span>;</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">message ListNameRandLibItemRequest <span class="token punctuation">{</span></span>
<span class="line">    int32 lib_id = 1; // 随机库id</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">message ListNameRandLibItemReply <span class="token punctuation">{</span></span>
<span class="line">    repeated NameRandLibItem items = 1;</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">message GetNameRandLibItemRequest <span class="token punctuation">{</span></span>
<span class="line">    int32 lib_id = 1; // 随机库id</span>
<span class="line">    int32 item_id = 2; // 名字id</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">message GetNameRandLibItemReply <span class="token punctuation">{</span></span>
<span class="line">    NameRandLibItem item = 1;</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">message NameRandLibItem <span class="token punctuation">{</span></span>
<span class="line">    int32 id = 1;       // 项id</span>
<span class="line">    int64 name_id = 2; // 名字id</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cmd-目录" tabindex="-1"><a class="header-anchor" href="#cmd-目录"><span>cmd 目录</span></a></h4><ul><li>项目入口</li><li>包含 orm 生成工具，迁移工具和项目本身</li></ul><h4 id="internal" tabindex="-1"><a class="header-anchor" href="#internal"><span>Internal</span></a></h4><ul><li>存放具体的代码</li><li>Biz 领域层，被 Service 调用，他会调用 data 层</li><li>Conf 配置，里面包含配置定义</li><li>Data 数据层，包含对数据库的操作，对其他服务的操作等等</li><li>Server 单独的传输层，包含各种 HTTP 或者 GRPC 服务</li><li>Service 工具自动生成的，是请求的入口，会调用 biz 层的逻辑</li></ul><p>原本的框架示例是上边的层次，集成 gorm-gen 后，我又加了两层</p><ul><li>Model 单独存放模型，解决循环依赖问题</li><li>Query gorm-gen 生成的代码</li></ul><h5 id="conf" tabindex="-1"><a class="header-anchor" href="#conf"><span>Conf</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line">syntax = &quot;proto3&quot;;</span>
<span class="line">package conf;</span>
<span class="line"></span>
<span class="line">option go_package = &quot;gitlab.xgjoy.org/flowgame/flowgame<span class="token punctuation">-</span>game<span class="token punctuation">-</span>name/internal/conf;conf&quot;;</span>
<span class="line"></span>
<span class="line">import &quot;flowgame<span class="token punctuation">-</span>apis<span class="token punctuation">-</span>common/api/conf/v1/conf.proto&quot;;</span>
<span class="line"></span>
<span class="line">message Bootstrap <span class="token punctuation">{</span></span>
<span class="line">  flowgame.common.api.conf.Server server = 1;</span>
<span class="line">  Data data = 2;</span>
<span class="line">  flowgame.common.api.conf.Trace trace = 3;</span>
<span class="line">  flowgame.common.api.conf.Registry registry = 4;</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">message Data <span class="token punctuation">{</span></span>
<span class="line">  message Database <span class="token punctuation">{</span></span>
<span class="line">    string driver = 1;</span>
<span class="line">    string source = 2;</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  message Redis <span class="token punctuation">{</span></span>
<span class="line">    string host = 1;</span>
<span class="line">    int32 port = 2;</span>
<span class="line">    string password = 3;</span>
<span class="line">    int32 db = 4;</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  Database database = 1;</span>
<span class="line">  Redis redis = 2;</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示，用 proto 定义配置格式，同时从公共仓库引用了公共配置项，更具有复用性</p><h5 id="data-层" tabindex="-1"><a class="header-anchor" href="#data-层"><span>Data 层</span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line">package data</span>
<span class="line"></span>
<span class="line">import (</span>
<span class="line">    &quot;github.com/go<span class="token punctuation">-</span>kratos/kratos/contrib/registry/etcd/v2&quot;</span>
<span class="line">    &quot;github.com/go<span class="token punctuation">-</span>kratos/kratos/v2/registry&quot;</span>
<span class="line">    &quot;github.com/go<span class="token punctuation">-</span>redis/redis&quot;</span>
<span class="line">    &quot;github.com/google/wire&quot;</span>
<span class="line">    commonConf &quot;gitlab.xgjoy.org/flowgame/flowgame<span class="token punctuation">-</span>apis<span class="token punctuation">-</span>common/api/conf/v1&quot;</span>
<span class="line">    &quot;gitlab.xgjoy.org/flowgame/flowgame<span class="token punctuation">-</span>game<span class="token punctuation">-</span>name/internal/conf&quot;</span>
<span class="line">    &quot;gitlab.xgjoy.org/flowgame/flowgame<span class="token punctuation">-</span>game<span class="token punctuation">-</span>name/internal/pkg/util&quot;</span>
<span class="line">    &quot;gitlab.xgjoy.org/flowgame/flowgame<span class="token punctuation">-</span>game<span class="token punctuation">-</span>name/internal/query&quot;</span>
<span class="line">    clientv3 &quot;go.etcd.io/etcd/client/v3&quot;</span>
<span class="line">)</span>
<span class="line"></span>
<span class="line">type Data struct <span class="token punctuation">{</span></span>
<span class="line">    query <span class="token important">*query.Query</span></span>
<span class="line">    rdb   <span class="token important">*redis.Client</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">func NewData(data <span class="token important">*conf.Data)</span> <span class="token important">*Data</span> <span class="token punctuation">{</span></span>
<span class="line">    return <span class="token important">&amp;Data</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token key atrule">query</span><span class="token punctuation">:</span> query.Use(util.GetDBClient(data.Database.Source))<span class="token punctuation">,</span></span>
<span class="line">        <span class="token key atrule">rdb</span><span class="token punctuation">:</span>   util.GetRedisClient(data.Redis.Host<span class="token punctuation">,</span> int(data.Redis.Port)<span class="token punctuation">,</span> data.Redis.Password<span class="token punctuation">,</span> int(data.Redis.Db))<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">func NewDiscovery(conf <span class="token important">*commonConf.Registry)</span> registry.Discovery <span class="token punctuation">{</span></span>
<span class="line">    // new etcd client</span>
<span class="line">    client<span class="token punctuation">,</span> err <span class="token punctuation">:</span>= clientv3.New(clientv3.Config<span class="token punctuation">{</span></span>
<span class="line">        <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span> conf.GetEtcd().GetEndpoints()<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span>)</span>
<span class="line">    if err <span class="token tag">!=</span> nil <span class="token punctuation">{</span></span>
<span class="line">        panic(err)</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    // new reg with etcd client</span>
<span class="line">    reg <span class="token punctuation">:</span>= etcd.New(client)</span>
<span class="line">    return reg</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">func NewRegistrar(conf <span class="token important">*commonConf.Registry)</span> registry.Registrar <span class="token punctuation">{</span></span>
<span class="line">    // new etcd client</span>
<span class="line">    client<span class="token punctuation">,</span> err <span class="token punctuation">:</span>= clientv3.New(clientv3.Config<span class="token punctuation">{</span></span>
<span class="line">        <span class="token key atrule">Endpoints</span><span class="token punctuation">:</span> conf.GetEtcd().GetEndpoints()<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span>)</span>
<span class="line">    if err <span class="token tag">!=</span> nil <span class="token punctuation">{</span></span>
<span class="line">        panic(err)</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    reg <span class="token punctuation">:</span>= etcd.New(client)</span>
<span class="line">    return reg</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">var (</span>
<span class="line">    ProviderSet = wire.NewSet(</span>
<span class="line">        NewData<span class="token punctuation">,</span></span>
<span class="line">        NewDiscovery<span class="token punctuation">,</span></span>
<span class="line">        NewRegistrar<span class="token punctuation">,</span></span>
<span class="line">        NewNameGroupRepo<span class="token punctuation">,</span></span>
<span class="line">        NewNameItemRepo<span class="token punctuation">,</span></span>
<span class="line">        NewNameMapRepo<span class="token punctuation">,</span></span>
<span class="line">        NewNameRandLibRepo<span class="token punctuation">,</span></span>
<span class="line">        NewNameRandLibItemRepo<span class="token punctuation">,</span></span>
<span class="line">    )</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了服务注册和发现，以及一个公共的数据源 Data，这个 Data 接收 conf.Data, 据此创建数据库链接</p><p>借助 wire，实现各种对象的自动注入</p><h5 id="pkg" tabindex="-1"><a class="header-anchor" href="#pkg"><span>Pkg</span></a></h5><p>存放一些公共逻辑，工具函数之类的</p><h5 id="query" tabindex="-1"><a class="header-anchor" href="#query"><span>Query</span></a></h5><p>gorm-gen 自动生成的</p><p>关于 gorm-gen</p><ul><li>支持根据 sql 生成方法</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line">type NameGroupQuerier interface <span class="token punctuation">{</span></span>
<span class="line">    // SELECT * FROM @@table WHERE name = @name<span class="token punctuation">{</span><span class="token punctuation">{</span>if role <span class="token tag">!=</span>&quot;&quot;<span class="token punctuation">}</span><span class="token punctuation">}</span> AND role = @role<span class="token punctuation">{</span><span class="token punctuation">{</span>end<span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">    FilterWithNameAndRole(name<span class="token punctuation">,</span> role string) (<span class="token punctuation">[</span><span class="token punctuation">]</span>gen.T<span class="token punctuation">,</span> error)</span>
<span class="line"></span>
<span class="line">    // UPDATE @@table SET realname = @realname<span class="token punctuation">,</span> id_card = @idcard where uid = @uid</span>
<span class="line">    UpdateRealnameByUID(uid uint64<span class="token punctuation">,</span> realname<span class="token punctuation">,</span> idcard string) error</span>
<span class="line">    // UPDATE @@table SET phone = @phone where uid = @uid</span>
<span class="line">    UpdatePhoneByUID(uid uint64<span class="token punctuation">,</span> phone string) error</span>
<span class="line"></span>
<span class="line">    // UPDATE @@table SET phone = NULL where uid = @uid</span>
<span class="line">    DeletePhoneByUID(uid uint64) error</span>
<span class="line">    // UPDATE @@table SET phone = NULL where phone = @phone</span>
<span class="line">    DeletePhoneByPhone(phone string) error</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>支持如下的写法</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line">func (repo <span class="token important">*NameMapRepo)</span> GetName(ctx context.Context<span class="token punctuation">,</span> nameID int64) (string<span class="token punctuation">,</span> error) <span class="token punctuation">{</span></span>
<span class="line">    q <span class="token punctuation">:</span>= repo.Data.query.NameMap</span>
<span class="line">    item<span class="token punctuation">,</span> err <span class="token punctuation">:</span>= repo.Data.query.NameMap.WithContext(ctx).Where(q.ID.Eq(int(nameID))).First()</span>
<span class="line">    if err <span class="token tag">!=</span> nil <span class="token punctuation">{</span></span>
<span class="line">        return &quot;&quot;<span class="token punctuation">,</span> err</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    return item.Name<span class="token punctuation">,</span> nil</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="server-层" tabindex="-1"><a class="header-anchor" href="#server-层"><span>server 层</span></a></h5><p><img src="`+o+'" alt=""></p><h5 id="service-层" tabindex="-1"><a class="header-anchor" href="#service-层"><span>service 层</span></a></h5><p>自动生成的入口</p><h4 id="有关链路追踪和监控" tabindex="-1"><a class="header-anchor" href="#有关链路追踪和监控"><span>有关链路追踪和监控</span></a></h4><p>只需要如下一些代码实现就好了，非常方便</p><p><img src="'+u+'" alt=""></p><p>主流的 redis-go 和 gorm 都支持 OpenTel 的集成，可以方便的监控到他们的 Trace 数据，便于查看整个请求的耗时情况</p><h4 id="有关-wire" tabindex="-1"><a class="header-anchor" href="#有关-wire"><span>有关 wire</span></a></h4><p><img src="'+r+'" alt=""></p><p>在 wire 中定义相关需要注入的函数，执行 wire 就可以自动注入了</p><p>wire 自动识别依赖关系，wireApp 的参数列表，将与 wire.Build 的参数一起，传递到需要该参数的对象中去</p><h4 id="有关-openapi-yaml" tabindex="-1"><a class="header-anchor" href="#有关-openapi-yaml"><span>有关 openapi.yaml</span></a></h4><p>直接自动或者手动导入到 apifox 或者 postman，便于共享 API 和调试</p>',60)]))}const g=s(d,[["render",m]]),k=JSON.parse('{"path":"/Golang/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%A1%86%E6%9E%B6/Kratos/%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84%E4%BD%93%E7%B3%BB.html","title":"项目结构体系","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"关于 Kratos","slug":"关于-kratos","link":"#关于-kratos","children":[]},{"level":2,"title":"自己做的一些实践","slug":"自己做的一些实践","link":"#自己做的一些实践","children":[{"level":3,"title":"工具方面","slug":"工具方面","link":"#工具方面","children":[]},{"level":3,"title":"项目结构方面（以 flowgame-game-name 为例）","slug":"项目结构方面-以-flowgame-game-name-为例","link":"#项目结构方面-以-flowgame-game-name-为例","children":[]}]}],"git":{},"filePathRelative":"Golang/微服务框架/Kratos/项目结构体系.md"}');export{g as comp,k as data};
