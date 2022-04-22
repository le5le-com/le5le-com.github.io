import{_ as n,c as s,o as a,a as t}from"./app.13afece5.js";var p="/img/worldTextRect.png";const h='{"title":"\u753B\u7B14","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7C7B\u578B type","slug":"\u7C7B\u578B-type"},{"level":2,"title":"\u540D\u79F0 name","slug":"\u540D\u79F0-name"},{"level":2,"title":"\u521B\u5EFA","slug":"\u521B\u5EFA"},{"level":2,"title":"\u67E5\u627E","slug":"\u67E5\u627E"},{"level":2,"title":"\u66F4\u65B0","slug":"\u66F4\u65B0"},{"level":2,"title":"\u5220\u9664","slug":"\u5220\u9664"},{"level":2,"title":"\u9009\u4E2D\u9AD8\u4EAE","slug":"\u9009\u4E2D\u9AD8\u4EAE"},{"level":2,"title":"\u662F\u5426\u9009\u4E2D\u9AD8\u4EAE","slug":"\u662F\u5426\u9009\u4E2D\u9AD8\u4EAE"},{"level":2,"title":"\u4EA4\u4E92\u4E8B\u4EF6","slug":"\u4EA4\u4E92\u4E8B\u4EF6"},{"level":2,"title":"\u6587\u672C\u533A\u57DF","slug":"\u6587\u672C\u533A\u57DF"},{"level":3,"title":"worldTextRect","slug":"worldtextrect"},{"level":3,"title":"textDrawRect","slug":"textdrawrect"}],"relativePath":"tutorial/pen.md","lastUpdated":1650622602765}',o={},e=t(`<h1 id="\u753B\u7B14" tabindex="-1">\u753B\u7B14 <a class="header-anchor" href="#\u753B\u7B14" aria-hidden="true">#</a></h1><p>\u753B\u7B14\u662F topology \u7684\u7ED8\u753B\u5355\u5143\u3002\u8BE6\u60C5\u53EF\u53C2\u8003\uFF1A <a href="./../api/pen.html">Pen API</a></p><h2 id="\u7C7B\u578B-type" tabindex="-1">\u7C7B\u578B type <a class="header-anchor" href="#\u7C7B\u578B-type" aria-hidden="true">#</a></h2><p>\u753B\u7B14\u5206\u4E3A\u8282\u70B9 Node \u548C\u8FDE\u7EBF Line \u4E24\u79CD\u3002<br> \u7528 <strong>pen.type</strong> \u533A\u5206:<br> 0 - Node\uFF08\u9ED8\u8BA4\uFF0C\u53EF\u4E3A\u7A7A\uFF09<br> 1 - Line</p><p>Node\uFF1A\u901A\u5E38\u662F\u7531\u8FB9\u6846\u5F62\u72B6\uFF08\u7279\u6709\u7ED8\u753B\u51FD\u6570\uFF09 + \u951A\u70B9 anchors \u7EC4\u6210\u3002\u951A\u70B9\u7528\u4E8E\u5173\u8054\u8FDE\u7EBF\uFF1B<br> Line\uFF1A\u901A\u5E38\u662F\u7531\u951A\u70B9 anchors \u7EC4\u6210\u3002\u951A\u70B9\u7528\u4E8E\u8FDE\u7EBF\u3002</p><h2 id="\u540D\u79F0-name" tabindex="-1">\u540D\u79F0 name <a class="header-anchor" href="#\u540D\u79F0-name" aria-hidden="true">#</a></h2><p><a href="http://pen.name" target="_blank" rel="noopener noreferrer">pen.name</a> \u7528\u4E8E\u533A\u5206\u56FE\u5F62\u5F62\u72B6\u7684\u4E0D\u540C\u3002\u4F8B\u5982\u6B63\u65B9\u5F62\u3001\u5706\u3001\u4E09\u89D2\u5F62\u7B49</p><p><strong>\u5176\u4E2D</strong>\uFF1Aname=&#39;line&#39;\u65F6\uFF0C\u8868\u793A\u8FDE\u7EBF\u753B\u7B14\u3002\u901A\u5E38\uFF0C\u8FDE\u7EBF\u7684 type=1\u3002<br> \u4F46\u662F name=&#39;line&#39;\u65F6\uFF0Ctype \u4E5F\u53EF\u4EE5 = 0\uFF0C\u7528\u4E8E\u8868\u793A\u201C\u8FDE\u7EBF\u5F62\u72B6\u201D\u7684\u8282\u70B9\u3002\u4F8B\u5982\uFF0C\u7528\u94A2\u7B14\u53EF\u4EE5\u8868\u793A\u591A\u7AEF\u66F2\u7EBF\uFF0C\u53EF\u4EE5\u8868\u793A\u753B\u4E86\u4E00\u4E2A\u81EA\u5B9A\u4E49\u56FE\u5F62\u3002<br> \u867D\u7136\u4ED6\u4EEC\u5F62\u72B6\u76F8\u540C\uFF0C\u4F46\u903B\u8F91\u4E0D\u5B8C\u5168\u76F8\u540C\uFF0C\u7279\u522B\u662F\u52A8\u753B\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u6211\u662F\u4E00\u4E2Anode\u5C5E\u6027\u7684pen\uFF0C\u5F62\u72B6\u662Fline</span>
<span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span> anchors<span class="token operator">:</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u6211\u662F\u4E00\u4E2Aline\u5C5E\u6027\u7684pen\uFF0C\u5F62\u72B6\u662Fline</span>
<span class="token keyword">const</span> line <span class="token operator">=</span> <span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span> anchors<span class="token operator">:</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u521B\u5EFA" tabindex="-1">\u521B\u5EFA <a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a></h2><p>\u7B26\u5408\u753B\u7B14\u683C\u5F0F\u7684 json \u6570\u636E\u5373\u753B\u7B14\u3002\u4F8B\u5982\uFF1A</p><p><strong>\u4EE5\u4E0B\u4EE3\u7801\uFF0C\u5747\u53EF\u76F4\u63A5\u5728 <a href="http://topology.le5le.com" target="_blank" rel="noopener noreferrer">topology.le5le.com</a> \u5B98\u7F51\u5728\u7EBF\u7F16\u8F91\u5668\u6216 topology \u5B9E\u4F8B\u9875\u9762\u7684\u63A7\u5236\u53F0\u6267\u884C</strong></p><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;\u77E9\u5F62&#39;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F\u4E00\uFF1Aopen\u52A0\u8F7D\uFF0C\u5C06\u6E05\u9664\u4E4B\u524D\u6570\u636E</span>
topology<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span> pens<span class="token operator">:</span> <span class="token punctuation">[</span>pen<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F\u4E8C\uFF1A\u6DFB\u52A0\u5230\u753B\u5E03\uFF0C\u5E76\u9009\u4E2D\uFF0C\u4F1A\u89E6\u53D1\u751F\u547D\u5468\u671F\u51FD\u6570beforeAddPen</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F\u4E09\uFF1A\u4EC5\u6DFB\u52A0\u753B\u7B14\uFF0C\u4E0D\u9009\u4E2D\uFF0C\u4E0D\u89E6\u53D1\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u4E0D\u91CD\u7ED8\uFF08\u4E0D\u7ACB\u523B\u663E\u793A\uFF09\uFF0C\u53EF\u7528\u4E8E\u6279\u91CF\u6DFB\u52A0\u540E\uFF0C\u4E00\u6B21\u91CD\u7ED8</span>
topology<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span><span class="token function">makePen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u9009\u4E2D\u9AD8\u4EAE</span>
topology<span class="token punctuation">.</span><span class="token function">active</span><span class="token punctuation">(</span><span class="token punctuation">[</span>pen<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u91CD\u7ED8\u663E\u793A</span>
topology<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u67E5\u627E" tabindex="-1">\u67E5\u627E <a class="header-anchor" href="#\u67E5\u627E" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;\u77E9\u5F62&#39;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u67E5\u627E\u65B9\u5F0F\u4E00\uFF1Aid\u67E5\u627E\uFF0C\u8FD4\u56DE\u7684\u662F\u6570\u7EC4</span>
<span class="token keyword">const</span> pens1 <span class="token operator">=</span> topology<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u67E5\u627E\u65B9\u5F0F\u4E8C\uFF1Atag\u67E5\u627E\uFF0C\u8FD4\u56DE\u7684\u662F\u6570\u7EC4</span>
<span class="token keyword">const</span> pens2 <span class="token operator">=</span> topology<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u66F4\u65B0" tabindex="-1">\u66F4\u65B0 <a class="header-anchor" href="#\u66F4\u65B0" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;\u77E9\u5F62&#39;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u67E5\u627Eid = pen.id\u7684\u753B\u7B14\uFF0C</span>
topology<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> pen<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;le5le&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u67E5\u627Eid = pen.id\u7684\u753B\u7B14\uFF0C\u4FEE\u6539id\u4E3A111</span>
topology<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> pen<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  newId<span class="token operator">:</span> <span class="token string">&#39;111&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5220\u9664" tabindex="-1">\u5220\u9664 <a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;\u77E9\u5F62&#39;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5220\u9664</span>
topology<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>topology<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u9009\u4E2D\u9AD8\u4EAE" tabindex="-1">\u9009\u4E2D\u9AD8\u4EAE <a class="header-anchor" href="#\u9009\u4E2D\u9AD8\u4EAE" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;\u77E9\u5F62&#39;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u9AD8\u4EAE</span>
topology<span class="token punctuation">.</span><span class="token function">active</span><span class="token punctuation">(</span>topology<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6E05\u7A7A\u9AD8\u4EAE\u3002\u5982\u679C\u9700\u8981\u53D6\u6D88\u90E8\u5206\u9AD8\u4EAE\uFF0C\u76F4\u63A5\u8C03\u7528active()\u8D4B\u6700\u65B0\u503C\u5373\u53EF</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u662F\u5426\u9009\u4E2D\u9AD8\u4EAE" tabindex="-1">\u662F\u5426\u9009\u4E2D\u9AD8\u4EAE <a class="header-anchor" href="#\u662F\u5426\u9009\u4E2D\u9AD8\u4EAE" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;\u77E9\u5F62&#39;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6253\u5370\u662F\u5426\u9009\u4E2D\u9AD8\u4EAE</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>active<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4EA4\u4E92\u4E8B\u4EF6" tabindex="-1">\u4EA4\u4E92\u4E8B\u4EF6 <a class="header-anchor" href="#\u4EA4\u4E92\u4E8B\u4EF6" aria-hidden="true">#</a></h2><ul><li>\u9F20\u6807\u8FDB\u5165 enter</li><li>\u9F20\u6807\u79BB\u5F00 leave</li><li>\u9009\u4E2D active</li><li>\u53D6\u6D88\u9009\u4E2D inactive</li><li>\u5355\u51FB click</li><li>\u53CC\u51FB dblclick</li><li>\u9F20\u6807\u6309\u4E0B mousedown</li><li>\u9F20\u6807\u62AC\u8D77 mouseup</li><li>\u6570\u636E\u66F4\u65B0 valueUpdate</li></ul><p>\u89E6\u53D1 pen \u7684\u4E0A\u8FF0\u884C\u4E3A\u65F6\uFF0C\u53EF\u914D\u7F6E\u6267\u884C\u7684\u52A8\u4F5C<br> \u9501\u753B\u5E03\u540E(topology.store.data.locked = 1 or 2)\uFF0C\u53EF\u89E6\u53D1\u4EA4\u4E92\u4E8B\u4EF6\u3002<br> \u4E8B\u4EF6\u91C7\u7528\u5192\u6CE1\u673A\u5236\uFF0C\u5148\u6267\u884C\u5B50\u8282\u70B9\uFF0C\u540E\u6267\u884C\u7236\u8282\u70B9\u3002<br> \u4E8B\u4EF6\u914D\u7F6E\u53C2\u8003\uFF1A</p><ol><li>\u5728 <a href="http://t.le5le.com/" target="_blank" rel="noopener noreferrer">\u5B98\u7F51</a> \u62D6\u62FD\u4E00\u4E2A\u8282\u70B9\uFF0C\u914D\u7F6E\u9700\u8981\u7684\u4E8B\u4EF6\u3002</li><li>\u9009\u4E2D\u8282\u70B9\uFF0C\u5728\u63A7\u5236\u53F0\u8F93\u5165 <code>topology.store.active[0].events</code> , \u5982\u679C\u62A5\u9519\uFF0C\u786E\u4FDD\u5DF2\u7ECF\u9009\u4E2D\u8BE5\u8282\u70B9\u3002</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;\u77E9\u5F62&#39;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  events<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
      action<span class="token operator">:</span> EventAction<span class="token punctuation">.</span>Link<span class="token punctuation">,</span> <span class="token comment">// \u6267\u884C\u52A8\u4F5C</span>
      where<span class="token operator">:</span> <span class="token punctuation">{</span>key<span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span> comparison<span class="token operator">:</span><span class="token string">&#39;==&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&#39;\u77E9\u5F62&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u89E6\u53D1\u6761\u4EF6</span>
      value<span class="token operator">:</span> <span class="token string">&#39;topology.le5le.com&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>   <span class="token comment">// \u4E8B\u4EF6\u884C\u4E3A\uFF0C\u4F8B\u5982 &#39;click&#39;\uFF0C&#39;dblclick&#39; \u7B49 \u53C2\u7167\u4E0A\u9762\u3002</span>
  action<span class="token operator">:</span> EventAction<span class="token punctuation">;</span>  <span class="token comment">// \u4E8B\u4EF6\u52A8\u4F5C</span>
  where<span class="token operator">?</span><span class="token operator">:</span> Where<span class="token punctuation">;</span>  <span class="token comment">// \u82E5\u65E0\u6761\u4EF6\uFF0C\u5FC5\u987B\u4E3A undefined or null\uFF0C\u4E0D\u53EF\u4E3A\u7A7A\u5BF9\u8C61</span>
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>   <span class="token comment">// \u4E0D\u540C action \u4E0B\uFF0C\u8BE5\u503C\u542B\u4E49\u4E0D\u540C\uFF0C\u4F8B\u5982\uFF1A\u52A8\u753B\u76F8\u5173\u7684\uFF0C\u5373\u4E3A \u8282\u70B9 tag; Function \u7C7B\u578B\u5373\u4E3A \u5B57\u7B26\u4E32\u51FD\u6570 </span>
  params<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  fn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// @topology/core \u5185\u7F6Eaction\uFF1A</span>
<span class="token keyword">enum</span> EventAction <span class="token punctuation">{</span>
  Link<span class="token punctuation">,</span>
  SetProps<span class="token punctuation">,</span>
  StartAnimate<span class="token punctuation">,</span>
  PauseAnimate<span class="token punctuation">,</span>
  StopAnimate<span class="token punctuation">,</span>
  <span class="token builtin">Function</span><span class="token punctuation">,</span>
  WindowFn<span class="token punctuation">,</span>
  Emit<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Where</span> <span class="token punctuation">{</span>
  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  comparison<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>  <span class="token comment">// \u6BD4\u8F83\u6761\u4EF6\uFF1A &gt;,&gt;=,&lt;,&lt;=,==,!=\u3002\u4F8B\u5982\uFF1Apen[key] == value</span>
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  fn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">;</span>    <span class="token comment">// \u6761\u4EF6\u51FD\u6570\uFF0C\u6700\u9AD8\u4F18\u5148\u7EA7</span>
  fnJs<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>    <span class="token comment">// \u6761\u4EF6\u51FD\u6570js\u4EE3\u7801\uFF0C\u6B21\u9AD8\u4F18\u5148\u7EA7</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6587\u672C\u533A\u57DF" tabindex="-1">\u6587\u672C\u533A\u57DF <a class="header-anchor" href="#\u6587\u672C\u533A\u57DF" aria-hidden="true">#</a></h2><h3 id="worldtextrect" tabindex="-1">worldTextRect <a class="header-anchor" href="#worldtextrect" aria-hidden="true">#</a></h3><ul><li>\u5F71\u54CD<br> \u8BE5\u533A\u57DF\u662F\u6587\u5B57\u7684\u533A\u57DF\uFF0C\u5B83\u7684\u6539\u53D8\u4F1A\u5F71\u54CD\u53CC\u51FB\u5C55\u793A\u8F93\u5165\u6846\u7684\u5927\u5C0F\uFF1B\u4F1A\u5F71\u54CD\u6587\u5B57\u7684\u6362\u884C\u60C5\u51B5\uFF0C\u5373\u6A2A\u5411\u8D85\u51FA\uFF1B\u4F1A\u5F71\u54CD\u6587\u5B57\u884C\u6570\u8D85\u51FA\u7684\u7701\u7565\u53F7\uFF0C\u5373\u7EB5\u5411\u8D85\u51FA\u3002</li><li>\u53D7\u5F71\u54CD<br> \u8BE5\u533A\u57DF\u5728 worldRect \u533A\u57DF\u7684\u57FA\u7840\u4E0A\uFF0C\u53D7\u5230 padding\uFF0CtextLeft\uFF0CtextTop\uFF0CtextWidth\uFF0CtextHeight \u5C5E\u6027\u7684\u5F71\u54CD\u3002</li><li>\u56FE\u793A <img src="`+p+'" alt="worldTextRect"></li></ul><h3 id="textdrawrect" tabindex="-1">textDrawRect <a class="header-anchor" href="#textdrawrect" aria-hidden="true">#</a></h3><p>\u8BE5\u533A\u57DF\u662F\u6587\u5B57\u7684\u5B9E\u9645\u7ED8\u5236\u6240\u5360\u7684\u533A\u57DF\uFF0C\u5B83\u7684\u5BBD\u5EA6\u4E3A\u591A\u884C\u6587\u672C\u4E2D\u6700\u5927\u7684\u5BBD\u5EA6\uFF0C\u9AD8\u5EA6\u4E3A <code>\u884C\u6570 * lineHeight * fontSize</code>\u3002<br> \u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E textBackground \u5C5E\u6027\u6765\u67E5\u770B\u5F53\u524D textDrawRect \u7684\u533A\u57DF\u5927\u5C0F\u3002</p>',34),c=[e];function l(u,i,k,r,d,m){return a(),s("div",null,c)}var b=n(o,[["render",l]]);export{h as __pageData,b as default};
