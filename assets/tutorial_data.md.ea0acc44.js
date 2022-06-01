import{_ as n,c as s,o as a,a as t}from"./app.9826698f.js";var p="/img/huabuCommunication.png",o="/img/nodeData.png",e="/img/EMQoperationPage.png",c="/img/realUpdate/zuheweizhuangtai.png",l="/img/realUpdate/zuhezhuangtaihou.png",u="/img/realUpdate/gifCombine.gif",r="/img/realUpdate/add-form-item.png",i="/img/realUpdate/bind-prop.png",k="/img/realUpdate/one-line-bind.png";const x='{"title":"\u5B9E\u65F6\u6570\u636E\u76D1\u542C","description":"","frontmatter":{},"headers":[{"level":2,"title":"MQTT","slug":"mqtt"},{"level":2,"title":"Websocket","slug":"websocket"},{"level":2,"title":"http \u8F6E\u8BE2","slug":"http-\u8F6E\u8BE2"},{"level":2,"title":"\u89E3\u6790\u81EA\u5B9A\u4E49\u6570\u636E\u683C\u5F0F","slug":"\u89E3\u6790\u81EA\u5B9A\u4E49\u6570\u636E\u683C\u5F0F"},{"level":2,"title":"\u53D1\u9001\u6570\u636E","slug":"\u53D1\u9001\u6570\u636E"},{"level":2,"title":"\u6D88\u606F\u901A\u4FE1","slug":"\u6D88\u606F\u901A\u4FE1"},{"level":2,"title":"\u72B6\u6001","slug":"\u72B6\u6001"},{"level":2,"title":"\u7ED1\u5B9A\u53D8\u91CF","slug":"\u7ED1\u5B9A\u53D8\u91CF"},{"level":3,"title":"\u5355\u5C5E\u6027\u7ED1\u5B9A\u5355\u53D8\u91CF","slug":"\u5355\u5C5E\u6027\u7ED1\u5B9A\u5355\u53D8\u91CF"},{"level":3,"title":"\u5355\u5C5E\u6027\u7ED1\u5B9A\u591A\u53D8\u91CF","slug":"\u5355\u5C5E\u6027\u7ED1\u5B9A\u591A\u53D8\u91CF"},{"level":3,"title":"\u5B98\u7F51\u4F7F\u7528","slug":"\u5B98\u7F51\u4F7F\u7528"}],"relativePath":"tutorial/data.md"}',d={},m=t(`<h1 id="\u5B9E\u65F6\u6570\u636E\u76D1\u542C" tabindex="-1">\u5B9E\u65F6\u6570\u636E\u76D1\u542C <a class="header-anchor" href="#\u5B9E\u65F6\u6570\u636E\u76D1\u542C" aria-hidden="true">#</a></h1><p>topology \u652F\u6301 mqtt\u3001websocket \u548C http \u8F6E\u8BE2 3 \u79CD\u65B9\u5F0F\u8FDB\u884C\u5B9E\u65F6\u6570\u636E\u76D1\u542C\u3002</p><div style="color:#fa541c;">\u5982\u679C\u914D\u7F6E\u8FC7 mqtt \u6216 websocket \u6216 http\uFF0C\u4E0B\u6B21\u6253\u5F00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8FDE\u63A5\u3002</div><h2 id="mqtt" tabindex="-1">MQTT <a class="header-anchor" href="#mqtt" aria-hidden="true">#</a></h2><ol><li>\u8BBE\u7F6E mqtt \u8FDE\u63A5</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre></div><ol start="2"><li>\u81EA\u52A8\u76D1\u542C mqtt \u6570\u636E</li></ol><p>topology \u5F15\u64CE\u4F1A\u81EA\u52A8\u76D1\u542C\u6570\u636E\u5E76\u5B9E\u65F6\u5237\u65B0\u3002\u53EA\u9700\u8981\u6309\u7167 <a href="./../api/pen.html">Pen</a> \u6570\u636E\u683C\u5F0F\u53D1\u9001\u6570\u636E\u5373\u53EF\u3002</p><div style="color:#fa541c;">\u6CE8\u610F\uFF1A\u4EC5\u9700\u8981\u4F20\u9012 id \u6216 tag\uFF08\u67E5\u627E\u5B9A\u4F4D Pen\uFF09\u53CA\u9700\u8981\u66F4\u65B0\u7684\u5C5E\u6027\u3002</div><div class="language-js"><pre><code><span class="token comment">// \u4FEE\u6539text</span>
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
</code></pre></div><p>\u5728\u7EBF\u4F53\u9A8C\uFF1A<a href="http://t.le5le.com/?id=5d4d72356025d7704b11323c" target="_blank" rel="noopener noreferrer">http://t.le5le.com/?id=5d4d72356025d7704b11323c</a></p><h2 id="websocket" tabindex="-1">Websocket <a class="header-anchor" href="#websocket" aria-hidden="true">#</a></h2><ol><li>\u8BBE\u7F6E websocket \u8FDE\u63A5</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&quot;url&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F1</span>
topology<span class="token punctuation">.</span><span class="token function">connectWebsocket</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F2</span>
topology<span class="token punctuation">.</span>store<span class="token punctuation">.</span>data<span class="token punctuation">.</span>websocket <span class="token operator">=</span> url<span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">connectWebsocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>\u81EA\u52A8\u76D1\u542C websocket \u6570\u636E</li></ol><p>topology \u5F15\u64CE\u4F1A\u81EA\u52A8\u76D1\u542C\u6570\u636E\u5E76\u5B9E\u65F6\u5237\u65B0\u3002\u53EA\u9700\u8981\u6309\u7167 <a href="./../api/pen.html">Pen</a> \u6570\u636E\u683C\u5F0F\u53D1\u9001\u6570\u636E\u5373\u53EF\u3002</p><div style="color:#fa541c;">\u6CE8\u610F\uFF1A\u4EC5\u9700\u8981\u4F20\u9012 id \u6216 tag\uFF08\u67E5\u627E\u5B9A\u4F4D Pen\uFF09\u53CA\u9700\u8981\u66F4\u65B0\u7684\u5C5E\u6027\u3002</div><div class="language-js"><pre><code><span class="token comment">// \u4FEE\u6539text</span>
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
</code></pre></div><p>\u672C\u5730\u642D\u5EFA node \u6D4B\u8BD5\u670D\u52A1\u5668\uFF1A<a href="https://github.com/le5le-com/websocket-test-node" target="_blank" rel="noopener noreferrer">https://github.com/le5le-com/websocket-test-node</a><br> \u5148 npm install\uFF0C\u518D\u8FD0\u884C\uFF1Anode index.js</p><h2 id="http-\u8F6E\u8BE2" tabindex="-1">http \u8F6E\u8BE2 <a class="header-anchor" href="#http-\u8F6E\u8BE2" aria-hidden="true">#</a></h2><p>\u91C7\u7528 http \u8F6E\u8BE2\u7684\u65B9\u5F0F\u662F\u53CA\u5176\u4E0D\u5EFA\u8BAE\u7684\uFF0C\u53CD\u590D\u7684\u8F6E\u8BE2\u4F1A\u5BFC\u81F4\u6D41\u91CF\u4E0E\u6027\u80FD\u635F\u8017\u3002<br> \u8BF7\u6C42\u65B9\u5F0F\u56FA\u5B9A\u4E3A get \uFF1B\u82E5\u60F3\u8981\u4F20\u53C2\u7ED9\u540E\u7AEF\uFF0C\u81EA\u884C\u8FDB\u884C url \u62FC\u63A5\u7136\u540E\u8D4B\u503C\u7ED9 http \u5C5E\u6027\u3002</p><ol><li>\u8BBE\u7F6E url , \u6253\u5F00\u8FDE\u63A5</li></ol><div class="language-ts"><pre><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">&quot;/test&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u53EF\u8BBF\u95EE\u7684 http</span>
topology<span class="token punctuation">.</span>store<span class="token punctuation">.</span>data<span class="token punctuation">.</span>http <span class="token operator">=</span> url<span class="token punctuation">;</span>
topology<span class="token punctuation">.</span>store<span class="token punctuation">.</span>data<span class="token punctuation">.</span>httpTimeInterval <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span> <span class="token comment">// \u8F6E\u8BE2\u95F4\u9694\u65F6\u95F4, \u9ED8\u8BA4 1000</span>
topology<span class="token punctuation">.</span><span class="token function">connectHttp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>\u81EA\u52A8\u76D1\u542C http \u6570\u636E<br> topology \u5F15\u64CE\u4F1A\u81EA\u52A8\u76D1\u542C\u6570\u636E\u5E76\u5B9E\u65F6\u5237\u65B0\u3002\u53EA\u9700\u8981\u6309\u7167 <a href="./../api/pen.html">Pen</a> \u6570\u636E\u683C\u5F0F\u53D1\u9001\u6570\u636E\u5373\u53EF\u3002<br> \u6570\u636E\u683C\u5F0F\u53C2\u7167\u4E0A\u65B9 mqtt \u6216 ws\u3002</li></ol><div style="color:#fa541c;">\u6CE8\u610F\uFF1A\u4EC5\u9700\u8981\u4F20\u9012 id \u6216 tag\uFF08\u67E5\u627E\u5B9A\u4F4D Pen\uFF09\u53CA\u9700\u8981\u66F4\u65B0\u7684\u5C5E\u6027\u3002</div><p>\u793A\u4F8B json (\u4E0E http \u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u683C\u5F0F\u76F8\u540C)\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;le5le&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;background&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#f40&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="\u89E3\u6790\u81EA\u5B9A\u4E49\u6570\u636E\u683C\u5F0F" tabindex="-1">\u89E3\u6790\u81EA\u5B9A\u4E49\u6570\u636E\u683C\u5F0F <a class="header-anchor" href="#\u89E3\u6790\u81EA\u5B9A\u4E49\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a></h2><p>\u5F53\u6570\u636E\u683C\u5F0F\u4E0D\u662F\u5F15\u64CE\u53EF\u8BC6\u522B\u7684 <a href="./../api/pen.html">Pen</a> \u6570\u636E\u683C\u5F0F\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790</p><div class="language-js"><pre><code><span class="token comment">// \u65B9\u5F0F1\uFF1A\u76F4\u63A5\u8BBE\u7F6Esocket\u56DE\u8C03\u51FD\u6570</span>
topology<span class="token punctuation">.</span><span class="token function-variable function">socketFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> topic</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do sth</span>

  topology<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F2\uFF1Asocket\u56DE\u8C03\u51FD\u6570js\u4FDD\u5B58\u5230\u56FE\u7EB8\u6570\u636E</span>
<span class="token comment">// data = {...}</span>
data<span class="token punctuation">.</span>socketCbJs <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  // params: e - the message
  // params: topic - mqtt \u6709\uFF0Cws \u548C http \u662F\u7A7A\u4E32
  constole.log(e, topic);
  // Do sth.
  topology.setValue(pen);
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">// \u81EA\u52A8\u76D1\u542C</span>
topology<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6216</span>
topology<span class="token punctuation">.</span>store<span class="token punctuation">.</span>data<span class="token punctuation">.</span>socketCbJs <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  // params: e - the message
  // params: topic - mqtt \u6709\uFF0Cws \u548C http \u662F\u7A7A\u4E32
  constole.log(e, topic);
  // Do sth.
  topology.setValue(pen);
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">// \u624B\u52A8\u76D1\u542C</span>
topology<span class="token punctuation">.</span><span class="token function">listenSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u53D1\u9001\u6570\u636E" tabindex="-1">\u53D1\u9001\u6570\u636E <a class="header-anchor" href="#\u53D1\u9001\u6570\u636E" aria-hidden="true">#</a></h2><p>\u5F53\u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u53EF\u4EE5\u83B7\u53D6 <a href="https://github.com/mqttjs/MQTT.js" target="_blank" rel="noopener noreferrer">mqtt.js</a> client \u6216 websocket \u5BA2\u6237\u7AEF</p><div class="language-js"><pre><code><span class="token comment">// \u4EC5\u8FDE\u63A5\u6210\u529F\u540E\u6709\u6548</span>

topology<span class="token punctuation">.</span>mqttClient<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&quot;event&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span>websocket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6D88\u606F\u901A\u4FE1" tabindex="-1">\u6D88\u606F\u901A\u4FE1 <a class="header-anchor" href="#\u6D88\u606F\u901A\u4FE1" aria-hidden="true">#</a></h2><ol><li><p>\u914D\u7F6E websocket \u6216 mqtt \u534F\u8BAE</p><p>\u8FD9\u91CC\u4EE5 mqtt \u534F\u8BAE\u4E3A\u4F8B\uFF0C\u5728 topology \u7F16\u8F91\u5668\u753B\u5E03\u7684\u901A\u4FE1\u9762\u677F\u4E2D\u586B\u5199 MQTT \u7684 url \u5730\u5740\u548C Topics,\u5176\u4ED6\u53EF\u6309\u9700\u914D\u7F6E\u3002</p></li></ol><p><img src="`+p+'" alt=""></p><ol start="2"><li>\u9009\u62E9\u56FE\u5143\uFF0C\u83B7\u53D6\u56FE\u5143\u7684 id \u6216\u6807\u7B7E</li></ol><p>\u9009\u4E2D\u8282\u70B9\uFF0C\u70B9\u51FB\u6570\u636E\u9762\u677F\uFF0C\u590D\u5236\u8282\u70B9\u7684 id/tag\u3002</p><ul><li>id\uFF1A\u552F\u4E00\uFF1B</li><li>tag\uFF1A\u7528\u4E8E\u4E00\u7EC4\u56FE\u5143\u7684\u5C5E\u6027\u6279\u91CF\u4FEE\u6539\u3002</li></ul><p><img src="'+o+`" alt=""></p><ol start="3"><li>\u670D\u52A1\u5668\u53D1\u9001\u6570\u636E</li></ol><ul><li><p>\u8FD9\u91CC\u63A8\u8350\u4F7F\u7528\u56FD\u4EA7\u5F00\u6E90 <a href="http://tools.emqx.io/" target="_blank" rel="noopener noreferrer">emqx mqtt \u670D\u52A1\u5668</a>,MQTT url \u5730\u5740\u53EF\u586B\u5199\uFF1Aws://broker.emqx.io:8083/mqtt</p></li><li><p><a href="https://github.com/le5le-com/websocket-test-node" target="_blank" rel="noopener noreferrer">websocket \u7B80\u5355\u6D4B\u8BD5\u670D\u52A1\u5668</a></p></li></ul><p>\u53D1\u9001\u5E26\u6709 id/tag \u7684 json \u6570\u636E\uFF0C\u5176\u4ED6\u5C5E\u6027\u6309\u9700\u6DFB\u52A0\u3002</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;73c3bcdb&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;hello topology!&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6216</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;topology&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span><span class="token string">&quot;hello topology!&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+e+`" alt=""></p><h2 id="\u72B6\u6001" tabindex="-1">\u72B6\u6001 <a class="header-anchor" href="#\u72B6\u6001" aria-hidden="true">#</a></h2><p>\u591A\u4E2A\u72B6\u6001\u7684\u81EA\u7531\u5207\u6362\u3002<br> \u9002\u7528\u573A\u666F\uFF1A\u5F00\u5173\u7684\u65AD\u5F00\uFF0C\u95ED\u5408\uFF1B\u56FE\u7247\u7684\u5207\u6362\uFF0C\u52A8\u53D8\u9759\uFF0C\u9759\u53D8\u52A8\u7B49\u3002</p><ol><li>\u5C06\u591A\u4E2A\u72B6\u6001\u7EC4\u5408\u6210\u4E00\u4E2A\u7EC4\u5408\u3002</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> showChild <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">combine</span><span class="token punctuation">(</span>pens<span class="token punctuation">,</span> showChild<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u82E5\u7EC4\u5408\u6210\u72B6\u6001\uFF0CshowChild \u5FC5\u586B</span>
</code></pre></div><p>\u5B98\u7F51\u793A\u4F8B:</p><p><img src="`+c+'" alt=""> \u7EC4\u5408\u6210\u529F\u540E\uFF0C\u53EA\u663E\u793A\u5176\u4E2D\u4E00\u4E2A\u5B50\u8282\u70B9 <img src="'+l+'" alt=""></p><ul><li><strong>\u56FE\u7247\u529F\u80FD\u793A\u4F8B</strong><img src="'+u+`" alt=""></li></ul><ol start="2"><li>\u6D88\u606F\u901A\u4FE1\u66F4\u6539\u72B6\u6001 \u5728\u524D\u4E00\u5C0F\u8282\u6D88\u606F\u901A\u4FE1\u7684\u57FA\u7840\u4E0A\uFF0C\u670D\u52A1\u5668\u53D1\u9001\u5982\u4E0B\u7684 json.</li></ol><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6e402f9c&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;showChild&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u793A\u4F8B\u56FE\u7EB8\uFF1A<a href="http://t.le5le.com/?id=620215dad84658ad4f8c07e5" target="_blank" rel="noopener noreferrer">http://t.le5le.com/?id=620215dad84658ad4f8c07e5</a></p><p>\u6F14\u793A\u89C6\u9891\u3010\u5F00\u5173\u7684\u65AD\u5F00\u4E0E\u95ED\u5408\u5982\u4F55\u5FEB\u901F\u5B9E\u73B0\u3011\uFF1A<a href="https://www.bilibili.com/video/BV1i44y1376U?spm_id_from=333.999.0.0" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1i44y1376U?spm_id_from=333.999.0.0</a></p><h2 id="\u7ED1\u5B9A\u53D8\u91CF" tabindex="-1">\u7ED1\u5B9A\u53D8\u91CF <a class="header-anchor" href="#\u7ED1\u5B9A\u53D8\u91CF" aria-hidden="true">#</a></h2><p>@topology/core 1.1.14 @topology/chart-dirgram 1.0.10</p><p>\u5BF9\u4E8E\u5B9E\u9645\u7684\u573A\u666F\u800C\u8A00\uFF0C\u540E\u7AEF\u901A\u5E38\u662F\u4E0D\u77E5\u9053\u753B\u7B14\u7684 id \u6216 tag \u7684\uFF0C\u5B83\u4EEC\u53EA\u5173\u6CE8\u4E8E\u67D0\u4E2A\u53D8\u91CF\u7684\u503C\u53D8\u5316\uFF0C\u90A3\u4E48\u524D\u7AEF\u53EF\u4EE5\u5C06\u67D0\u4E2A\u5C5E\u6027\u7ED1\u5B9A\u5728\u67D0\u4E2A\u53D8\u91CF\u4E0A\uFF0C\u540E\u7AEF\u53D1\u8FC7\u6765\u53D8\u91CF\u7684\u503C\u65F6\uFF0C\u518D\u53BB\u66F4\u6539\u7ED1\u5B9A\u4E86\u8BE5\u53D8\u91CF\u7684\u753B\u7B14\u7684\u5BF9\u5E94\u5C5E\u6027\u5373\u53EF\u3002<br> \u8FD9\u5957\u65B0\u89C4\u5219\u4E0E\u9ED8\u8BA4\u89C4\u5219\u540C\u65F6\u5B58\u5728\uFF0C\u800C <a href="./data.html#\u89E3\u6790\u81EA\u5B9A\u4E49\u6570\u636E\u683C\u5F0F">\u89E3\u6790\u81EA\u5B9A\u4E49\u6570\u636E\u683C\u5F0F</a> \u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF0C\u5B83\u5B58\u5728\u7684\u8BDD\uFF0C\u5373\u9ED8\u8BA4\u89C4\u5219\u4E0E\u7ED1\u5B9A\u53D8\u91CF\u5747\u5931\u6548\u3002</p><h3 id="\u5355\u5C5E\u6027\u7ED1\u5B9A\u5355\u53D8\u91CF" tabindex="-1">\u5355\u5C5E\u6027\u7ED1\u5B9A\u5355\u53D8\u91CF <a class="header-anchor" href="#\u5355\u5C5E\u6027\u7ED1\u5B9A\u5355\u53D8\u91CF" aria-hidden="true">#</a></h3><p>\u901A\u5E38\u6765\u8BF4\uFF0C\u5355\u5C5E\u6027\u7ED1\u5B9A\u5355\u53D8\u91CF\u7684\u573A\u666F\u5DF2\u7ECF\u8DB3\u591F\u4E86\uFF0C\u6838\u5FC3\u5E93\u4E5F\u53EA\u5BF9\u8FD9\u79CD\u60C5\u51B5\u7684\u573A\u666F\u505A\u4E86\u7279\u6B8A\u5904\u7406\u3002<br> \u91CD\u70B9\u5728\u4E8E pen.form \u5C5E\u6027\u7684\u914D\u7F6E\u4F7F\u7528\uFF0C key \u5373\u7ED1\u5B9A\u7684\u753B\u7B14\u5C5E\u6027\u540D\uFF0C dataIds \u4E2D\u7684 dataId \u5373\u4E0E\u540E\u7AEF\u7ED1\u5B9A\u7684\u53D8\u91CF id \uFF0C\u7528\u6765\u6807\u8BC6\u540E\u7AEF\u53D1\u8FC7\u6765\u7684\u6570\u636E\u3002<strong>\u6CE8\u610F\uFF1A\u5355\u5C5E\u6027\u7ED1\u5B9A\u5355\u53D8\u91CF\uFF0CdataIds \u4E00\u5B9A\u662F\u4E2A\u5BF9\u8C61\uFF0C\u4E0D\u53EF\u662F\u957F\u5EA6\u4E3A 1 \u7684\u6570\u7EC4</strong></p><p>\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u77E9\u5F62&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  form<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      key<span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
      dataIds<span class="token operator">:</span> <span class="token punctuation">{</span>
        dataId<span class="token operator">:</span> <span class="token string">&quot;d-3-a-001&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// name: &quot;\u6237\u6570&quot;,   // \u975E\u5FC5\u8981</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// ... \u5B98\u7F51\u8FD8\u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u4E1A\u52A1\u5C5E\u6027\uFF0C\u65E0\u987B\u5173\u6CE8</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// topology.doSocket(</span>
<span class="token comment">//   JSON.stringify([</span>
<span class="token comment">//     {</span>
<span class="token comment">//       dataId: &quot;d-3-a-001&quot;, // \u53D8\u91CF\u6807\u8BC6</span>
<span class="token comment">//       value: 80, // \u503C</span>
<span class="token comment">//     },</span>
<span class="token comment">//   ])</span>
<span class="token comment">// );</span>
</code></pre></div><p>\u6570\u636E\u793A\u4F8B</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dataId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;d-3-a-001&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u53D8\u91CF\u6807\u8BC6</span>
  <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">80</span> <span class="token comment">// \u503C</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5355\u5C5E\u6027\u7ED1\u5B9A\u591A\u53D8\u91CF" tabindex="-1">\u5355\u5C5E\u6027\u7ED1\u5B9A\u591A\u53D8\u91CF <a class="header-anchor" href="#\u5355\u5C5E\u6027\u7ED1\u5B9A\u591A\u53D8\u91CF" aria-hidden="true">#</a></h3><p>\u8FD9\u79CD\u573A\u666F\u4F7F\u7528\u8F83\u5C11\uFF0C\u9700\u8981\u81EA\u884C\u5B9E\u73B0 pen.onBinds \u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u76EE\u524D\u5B98\u65B9\u4EC5\u4EC5\u5B9E\u73B0\u4E86 echarts \u4E2D dataY \u5355\u5C5E\u6027\u5BF9\u4E8E\u591A\u53D8\u91CF\u7684\u7ED1\u5B9A\uFF0C\u5373 echarts \u7C7B\u578B\u7684\u753B\u7B14\u5DF2\u7ECF\u5B9E\u73B0\u4E86 onBinds \u751F\u547D\u5468\u671F\u51FD\u6570\u3002<br> \u5173\u4E8E echarts \u6570\u636E\u66F4\u65B0\uFF0C\u53EF\u67E5\u9605<a href="./pens.html#echarts-\u56FE\u8868">\u6587\u6863</a><br> echarts \u7684\u53D8\u91CF\u7ED1\u5B9A\uFF0C\u867D\u6838\u5FC3\u5E93\u6CA1\u6709\u4E25\u683C\u63A7\u5236 key \uFF0C\u4F46\u5B98\u7F51\u4E25\u683C\u8981\u6C42 key \u662F dataY \u3002dataIds \u5728\u5355\u5C5E\u6027\u7ED1\u5B9A\u591A\u53D8\u91CF\u7684\u60C5\u51B5\u4E0B\uFF0C\u4E00\u5B9A\u662F\u6570\u7EC4\uFF1BdataId \u6807\u8BC6\u540E\u7AEF\u53D8\u91CF\uFF0Cname \u6807\u8BC6 echarts.option \u7684\u5177\u4F53\u67D0\u4E2A\u5206\u7C7B\uFF0C\u6216\u65F6\u95F4\u8F74\u60C5\u51B5\u4E0B\u7684\u67D0\u6761\u7EBF\u3002</p><p>\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;echarts&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  echarts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u7535\u6D41&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6237\u6570&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7535\u538B&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">820</span><span class="token punctuation">,</span> <span class="token number">932</span><span class="token punctuation">,</span> <span class="token number">901</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    max<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
    replaceMode<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  form<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      key<span class="token operator">:</span> <span class="token string">&quot;dataY&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u987B\u662F dataY</span>
      dataIds<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          dataId<span class="token operator">:</span> <span class="token string">&quot;d-3-b-001&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6807\u8BC6\u540E\u7AEF\u53D8\u91CF</span>
          name<span class="token operator">:</span> <span class="token string">&quot;\u6237\u6570&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6807\u8BC6 echarts \u7684\u67D0\u6761\u7EBF\u6216\u67D0\u4E2A\u5206\u7C7B</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> dataId<span class="token operator">:</span> <span class="token string">&quot;d-3-b-002&quot;</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;\u7535\u538B&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> dataId<span class="token operator">:</span> <span class="token string">&quot;d-3-b-003&quot;</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;\u7535\u6D41&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6570\u636E\u793A\u4F8B</p><div class="language-json"><pre><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token property">&quot;dataId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;d-3-b-001&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">80</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;dataId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;d-3-b-002&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">60</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><h3 id="\u5B98\u7F51\u4F7F\u7528" tabindex="-1">\u5B98\u7F51\u4F7F\u7528 <a class="header-anchor" href="#\u5B98\u7F51\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5B98\u7F51\u7684\u4F7F\u7528\u5728\u9009\u4E2D\u5355\u753B\u7B14\uFF0C\u53F3\u4FA7\u6570\u636E\u9762\u677F\uFF0C\u6570\u636E Tab \u4E0B\uFF0C<a href="./service-data.html">\u6570\u636E</a>\u6A21\u5757\u3002</p><ol><li>\u53EF\u65B0\u589E\u4E00\u4E2A\u8868\u5355\u9879\uFF0C\u4E5F\u53EF\u4EE5\u5728\u73B0\u6709\u8868\u5355\u9879\u4E0A\u8FDB\u884C\u7ED1\u5B9A\u53D8\u91CF\u3002<strong>\u6CE8\u610F\uFF1A\u5C5E\u6027\u540D\u5373 key\uFF0C\u5173\u8054\u753B\u7B14\u7684\u67D0\u4E2A\u5C5E\u6027</strong></li></ol><p><img src="`+r+'" alt=""></p><p><img src="'+i+'" alt=""></p><ol start="2"><li>\u7ED1\u5B9A\u53D8\u91CF\u540E\uFF0C\u4F1A\u6253\u5F00\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF0C\u901A\u8FC7 <a href="./data.html#http-\u8F6E\u8BE2">http \u8F6E\u8BE2</a>\u7684\u65B9\u5F0F\u5B9A\u65F6\u8BF7\u6C42\uFF0C\u7528\u6765\u505A\u5230\u5B9E\u65F6\u6570\u636E\u76D1\u542C\u53D8\u5316\u3002</li></ol><h4 id="echarts-\u7ED1\u5B9A\u591A\u53D8\u91CF" tabindex="-1">Echarts \u7ED1\u5B9A\u591A\u53D8\u91CF <a class="header-anchor" href="#echarts-\u7ED1\u5B9A\u591A\u53D8\u91CF" aria-hidden="true">#</a></h4><p>\u6B64\u5904\u4EC5\u5206\u6790\u51E0\u79CD\u60C5\u51B5\uFF0C\u82E5\u6709\u66F4\u591A\u60C5\u51B5\uFF0C\u6B22\u8FCE\u8BA8\u8BBA\uFF01<br> \u6298\u7EBF\u56FE\u4E0E\u67F1\u72B6\u56FE\u7C7B\u4F3C\uFF0C\u4E0B\u6587\u8BA8\u8BBA\u7684\u6298\u7EBF\u56FE\u4E5F\u9002\u7528\u4E8E\u67F1\u72B6\u56FE\u3002</p><ol><li>\u5355\u6298\u7EBF\u56FE\uFF0C\u5206\u7C7B\u503C\u5C40\u90E8\u66FF\u6362\uFF0C\u5373 x \u8F74\u6570\u91CF\u662F\u6C38\u8FDC\u4E0D\u53D8\u7684\u3002<br> \u5373 x \u8F74\u7684\u6BCF\u4E2A\u5206\u7C7B\u7ED1\u5B9A\u4E00\u4E2A\u53D8\u91CF\uFF0C\u4F46 x \u8F74\u7684\u503C\u663E\u7136\u662F\u4E0D\u53EF\u91CD\u590D\u7684\uFF0C\u7528 name \u4F5C\u4E3A\u5206\u7C7B\u7684\u552F\u4E00\u6807\u8BC6\u3002</li></ol><p><img src="'+k+'" alt=""></p><ol start="2"><li><p>\u591A\u6298\u7EBF\u56FE\uFF0Cx \u8F74\u662F\u65F6\u95F4\u7C7B\u578B\uFF0C\u4E00\u6761\u7EBF\u4EE3\u8868\u4E00\u79CD\u5206\u7C7B\uFF0C\u5B9E\u65F6\u6570\u636E\u5411\u540E\u8FFD\u52A0\u3002<br> \u4E0E\u5355\u6298\u7EBF\u56FE\u7684\u64CD\u4F5C\u7C7B\u4F3C\uFF0C\u4EC5\u4EC5\u9700\u8981\u52FE\u9009\u5BF9\u8BDD\u6846\u6807\u9898\u5904\u7684\u5B9E\u65F6\u6570\u636E\u5373\u53EF\u3002</p></li><li><p>\u5355\u997C\u56FE\uFF0C\u4E0E\u5355\u6298\u7EBF\u56FE\u7C7B\u4F3C\uFF0C\u5B83\u4E0D\u5B58\u5728 x \u8F74\u662F\u65F6\u95F4\u7C7B\u578B\u7684\u60C5\u51B5\uFF0C\u53EA\u6709\u5206\u7C7B\u3002<br> \u4E0E\u5355\u6298\u7EBF\u56FE\u7684\u64CD\u4F5C\u7C7B\u4F3C\uFF0C\u5F00\u59CB\u65F6\u62D6\u5165\u4E00\u4E2A\u997C\u56FE\u5373\u53EF\u3002</p></li></ol><p>\u793A\u4F8B\u56FE\u7EB8\uFF1A<a href="http://t.le5le.com/?id=629038410d3f8c6ce36e9955" target="_blank" rel="noopener noreferrer">http://t.le5le.com/?id=629038410d3f8c6ce36e9955</a></p><p>\u6F14\u793A\u89C6\u9891\u3010\u7ED1\u5B9A\u53D8\u91CF\u3011\uFF1A<a href="https://www.bilibili.com/video/BV13a411j7hK" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV13a411j7hK</a></p>',84),g=[m];function h(q,b,f,v,y,_){return a(),s("div",null,g)}var I=n(d,[["render",h]]);export{x as __pageData,I as default};
