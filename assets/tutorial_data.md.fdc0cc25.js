import{_ as n,c as s,o as a,a as t}from"./app.3885cfa9.js";const m='{"title":"\u5B9E\u65F6\u6570\u636E\u76D1\u542C","description":"","frontmatter":{},"headers":[{"level":2,"title":"MQTT","slug":"mqtt"},{"level":2,"title":"Websocket","slug":"websocket"},{"level":2,"title":"http \u8F6E\u8BE2","slug":"http-\u8F6E\u8BE2"},{"level":2,"title":"\u89E3\u6790\u81EA\u5B9A\u4E49\u6570\u636E\u683C\u5F0F","slug":"\u89E3\u6790\u81EA\u5B9A\u4E49\u6570\u636E\u683C\u5F0F"},{"level":2,"title":"\u53D1\u9001\u6570\u636E","slug":"\u53D1\u9001\u6570\u636E"}],"relativePath":"tutorial/data.md","lastUpdated":1640085450839}',p={},o=t(`<h1 id="\u5B9E\u65F6\u6570\u636E\u76D1\u542C" tabindex="-1">\u5B9E\u65F6\u6570\u636E\u76D1\u542C <a class="header-anchor" href="#\u5B9E\u65F6\u6570\u636E\u76D1\u542C" aria-hidden="true">#</a></h1><p>topology \u652F\u6301 mqtt\u3001websocket \u548C http \u8F6E\u8BE2 3 \u79CD\u65B9\u5F0F\u8FDB\u884C\u5B9E\u65F6\u6570\u636E\u76D1\u542C\u3002</p><div style="color:#fa541c;">\u5982\u679C\u914D\u7F6E\u8FC7 mqtt \u6216 websocket\uFF0C\u4E0B\u6B21\u6253\u5F00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8FDE\u63A5\u3002</div><h2 id="mqtt" tabindex="-1">MQTT <a class="header-anchor" href="#mqtt" aria-hidden="true">#</a></h2><ol><li>\u8BBE\u7F6E mqtt \u8FDE\u63A5</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
  mqtt<span class="token operator">:</span> <span class="token string">&#39;url&#39;</span><span class="token punctuation">,</span>
  mqttTopics<span class="token operator">:</span> <span class="token string">&#39;topic1/#,topoc2&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u591A\u4E2A\u4E3B\u9898\u7528,\u5206\u5272</span>
  mqttOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      clientId<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span>
      username<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span>
      password<span class="token operator">:</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span>
      <span class="token comment">// \u5982\u679CclientId\u4E0D\u4E3A\u7A7A\uFF0C\u9ED8\u8BA4\u4F1A\u968F\u673A\u91CD\u65B0\u751F\u6210\u4E00\u4E2AclientId\uFF0C\u907F\u514D\u8FDE\u63A5\u51B2\u7A81</span>
      <span class="token comment">// \u5982\u679C\u8BBE\u7F6EcustomClientId=true\uFF0C\u4E0D\u968F\u673A\u751F\u6210\uFF0C\u4F7F\u7528\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u56FA\u5B9A\u7684clientId</span>
      customClientId<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F1</span>
topology<span class="token punctuation">.</span><span class="token function">connectMqtt</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F2</span>
topology<span class="token punctuation">.</span>store<span class="token punctuation">.</span>data<span class="token punctuation">.</span>mqtt <span class="token operator">=</span> params<span class="token punctuation">.</span>mqtt<span class="token punctuation">;</span>
topology<span class="token punctuation">.</span>store<span class="token punctuation">.</span>data<span class="token punctuation">.</span>mqttTopics <span class="token operator">=</span> params<span class="token punctuation">.</span>mqttTopics<span class="token punctuation">;</span>
topology<span class="token punctuation">.</span>store<span class="token punctuation">.</span>data<span class="token punctuation">.</span>mqttOptions <span class="token operator">=</span> params<span class="token punctuation">.</span>mqttOptions<span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">connectMqtt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>\u81EA\u52A8\u76D1\u542C mqtt \u6570\u636E</li></ol><p>topology \u5F15\u64CE\u4F1A\u81EA\u52A8\u76D1\u542C\u6570\u636E\u5E76\u5B9E\u65F6\u5237\u65B0\u3002\u53EA\u9700\u8981\u6309\u7167 <a href="/api/pen.html">Pen</a> \u6570\u636E\u683C\u5F0F\u53D1\u9001\u6570\u636E\u5373\u53EF\u3002</p><div style="color:#fa541c;">\u6CE8\u610F\uFF1A\u4EC5\u9700\u8981\u4F20\u9012 id \u6216 tag\uFF08\u67E5\u627E\u5B9A\u4F4D Pen\uFF09\u53CA\u9700\u8981\u66F4\u65B0\u7684\u5C5E\u6027\u3002</div><div class="language-js"><pre><code><span class="token comment">// \u4FEE\u6539text</span>
<span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&#39;pen1&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;new text&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4FEE\u6539\u6240\u6709tag\u4E3A&#39;tag&#39;\u7684\u989C\u8272</span>
<span class="token punctuation">{</span>
  tag<span class="token operator">:</span> <span class="token string">&#39;tag&#39;</span><span class="token punctuation">,</span>
  color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6279\u91CF\u4FEE\u6539</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&#39;pen1&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;new text&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
  tag<span class="token operator">:</span> <span class="token string">&#39;tag&#39;</span><span class="token punctuation">,</span>
  color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><p>\u5728\u7EBF\u4F53\u9A8C\uFF1A<a href="http://topology.le5le.com/workspace?id=5d4d72356025d7704b11323c" target="_blank" rel="noopener noreferrer">http://topology.le5le.com/workspace?id=5d4d72356025d7704b11323c</a></p><h2 id="websocket" tabindex="-1">Websocket <a class="header-anchor" href="#websocket" aria-hidden="true">#</a></h2><ol><li>\u8BBE\u7F6E websocket \u8FDE\u63A5</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&#39;url&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F1</span>
topology<span class="token punctuation">.</span><span class="token function">connectWebsocket</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F2</span>
topology<span class="token punctuation">.</span>store<span class="token punctuation">.</span>data<span class="token punctuation">.</span>websocket <span class="token operator">=</span> url<span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">connectWebsocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>\u81EA\u52A8\u76D1\u542C websocket \u6570\u636E</li></ol><p>topology \u5F15\u64CE\u4F1A\u81EA\u52A8\u76D1\u542C\u6570\u636E\u5E76\u5B9E\u65F6\u5237\u65B0\u3002\u53EA\u9700\u8981\u6309\u7167 <a href="/api/pen.html">Pen</a> \u6570\u636E\u683C\u5F0F\u53D1\u9001\u6570\u636E\u5373\u53EF\u3002</p><div style="color:#fa541c;">\u6CE8\u610F\uFF1A\u4EC5\u9700\u8981\u4F20\u9012 id \u6216 tag\uFF08\u67E5\u627E\u5B9A\u4F4D Pen\uFF09\u53CA\u9700\u8981\u66F4\u65B0\u7684\u5C5E\u6027\u3002</div><div class="language-js"><pre><code><span class="token comment">// \u4FEE\u6539text</span>
<span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&#39;pen1&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;new text&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4FEE\u6539\u6240\u6709tag\u4E3A&#39;tag&#39;\u7684\u989C\u8272</span>
<span class="token punctuation">{</span>
  tag<span class="token operator">:</span> <span class="token string">&#39;tag&#39;</span><span class="token punctuation">,</span>
  color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6279\u91CF\u4FEE\u6539</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&#39;pen1&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;new text&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
  tag<span class="token operator">:</span> <span class="token string">&#39;tag&#39;</span><span class="token punctuation">,</span>
  color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><p>\u672C\u5730\u642D\u5EFA node \u6D4B\u8BD5\u670D\u52A1\u5668\uFF1A<a href="https://github.com/le5le-com/websocket-test-node" target="_blank" rel="noopener noreferrer">https://github.com/le5le-com/websocket-test-node</a><br> \u5148 npm install\uFF0C\u518D\u8FD0\u884C\uFF1Anode index.js</p><h2 id="http-\u8F6E\u8BE2" tabindex="-1">http \u8F6E\u8BE2 <a class="header-anchor" href="#http-\u8F6E\u8BE2" aria-hidden="true">#</a></h2><p>http \u8F6E\u8BE2\u9700\u8981\u6267\u884C\u8BF7\u6C42 http \u6570\u636E\uFF0C\u7136\u540E\u8C03\u7528 topology.setValue(pen)\u66F4\u65B0\u6570\u636E</p><div class="language-js"><pre><code><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> pen <span class="token operator">=</span> data<span class="token punctuation">;</span>
      topology<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u89E3\u6790\u81EA\u5B9A\u4E49\u6570\u636E\u683C\u5F0F" tabindex="-1">\u89E3\u6790\u81EA\u5B9A\u4E49\u6570\u636E\u683C\u5F0F <a class="header-anchor" href="#\u89E3\u6790\u81EA\u5B9A\u4E49\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a></h2><p>\u5F53\u6570\u636E\u683C\u5F0F\u4E0D\u662F\u5F15\u64CE\u53EF\u8BC6\u522B\u7684 <a href="/api/pen.html">Pen</a> \u6570\u636E\u683C\u5F0F\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790</p><div class="language-js"><pre><code><span class="token comment">// \u65B9\u5F0F1\uFF1A\u76F4\u63A5\u8BBE\u7F6Esocket\u56DE\u8C03\u51FD\u6570</span>
topology<span class="token punctuation">.</span><span class="token function-variable function">socketFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do sth</span>

  topology<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F2\uFF1Asocket\u56DE\u8C03\u51FD\u6570js\u4FDD\u5B58\u5230\u56FE\u7EB8\u6570\u636E</span>
<span class="token comment">// data = {...}</span>
data<span class="token punctuation">.</span>socketCbJs <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  // params: e - the message
  constole.log(e);
  // Do sth.
  topology.setValue(pen);
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">// \u81EA\u52A8\u76D1\u542C</span>
topology<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6216</span>
topology<span class="token punctuation">.</span>store<span class="token punctuation">.</span>data<span class="token punctuation">.</span>socketCbJs <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  // params: e - the message
  constole.log(e);
  // Do sth.
  topology.setValue(pen);
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">// \u624B\u52A8\u76D1\u542C</span>
topology<span class="token punctuation">.</span><span class="token function">listenSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u53D1\u9001\u6570\u636E" tabindex="-1">\u53D1\u9001\u6570\u636E <a class="header-anchor" href="#\u53D1\u9001\u6570\u636E" aria-hidden="true">#</a></h2><p>\u5F53\u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u53EF\u4EE5\u83B7\u53D6 <a href="https://github.com/mqttjs/MQTT.js" target="_blank" rel="noopener noreferrer">mqtt.js</a> client \u6216 websocket \u5BA2\u6237\u7AEF</p><div class="language-js"><pre><code><span class="token comment">// \u4EC5\u8FDE\u63A5\u6210\u529F\u540E\u6709\u6548</span>

topology<span class="token punctuation">.</span>mqttClient<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,28),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
