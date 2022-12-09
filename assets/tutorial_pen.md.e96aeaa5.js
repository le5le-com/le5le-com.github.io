import{_ as n,c as s,o as a,a as t}from"./app.6101a799.js";const h='{"title":"\u753B\u7B14","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7C7B\u578B type","slug":"\u7C7B\u578B-type"},{"level":2,"title":"\u540D\u79F0 name","slug":"\u540D\u79F0-name"},{"level":2,"title":"\u521B\u5EFA","slug":"\u521B\u5EFA"},{"level":2,"title":"\u67E5\u627E","slug":"\u67E5\u627E"},{"level":2,"title":"\u66F4\u65B0","slug":"\u66F4\u65B0"},{"level":2,"title":"\u5220\u9664","slug":"\u5220\u9664"},{"level":2,"title":"\u9009\u4E2D\u9AD8\u4EAE","slug":"\u9009\u4E2D\u9AD8\u4EAE"},{"level":2,"title":"\u662F\u5426\u9009\u4E2D\u9AD8\u4EAE","slug":"\u662F\u5426\u9009\u4E2D\u9AD8\u4EAE"},{"level":2,"title":"\u4EA4\u4E92\u4E8B\u4EF6","slug":"\u4EA4\u4E92\u4E8B\u4EF6"},{"level":2,"title":"\u6587\u672C","slug":"\u6587\u672C"},{"level":3,"title":"\u6587\u672C\u533A\u57DF","slug":"\u6587\u672C\u533A\u57DF"},{"level":3,"title":"\u6362\u884C\u4E0E\u8D85\u51FA\u7701\u7565","slug":"\u6362\u884C\u4E0E\u8D85\u51FA\u7701\u7565"},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"}],"relativePath":"tutorial/pen.md"}',p={},o=t(`<h1 id="\u753B\u7B14" tabindex="-1">\u753B\u7B14 <a class="header-anchor" href="#\u753B\u7B14" aria-hidden="true">#</a></h1><p>\u753B\u7B14\u662F meta2d \u7684\u7ED8\u753B\u5355\u5143\u3002\u8BE6\u60C5\u53EF\u53C2\u8003\uFF1A <a href="./../api/pen.html">Pen API</a></p><h2 id="\u7C7B\u578B-type" tabindex="-1">\u7C7B\u578B type <a class="header-anchor" href="#\u7C7B\u578B-type" aria-hidden="true">#</a></h2><p>\u753B\u7B14\u5206\u4E3A\u8282\u70B9 Node \u548C\u8FDE\u7EBF Line \u4E24\u79CD\u3002<br> \u7528 <strong>pen.type</strong> \u533A\u5206:<br> 0 - Node\uFF08\u9ED8\u8BA4\uFF0C\u53EF\u4E3A\u7A7A\uFF09<br> 1 - Line</p><p>Node\uFF1A\u901A\u5E38\u662F\u7531\u8FB9\u6846\u5F62\u72B6\uFF08\u7279\u6709\u7ED8\u753B\u51FD\u6570\uFF09 + \u951A\u70B9 anchors \u7EC4\u6210\u3002\u951A\u70B9\u7528\u4E8E\u5173\u8054\u8FDE\u7EBF\uFF1B<br> Line\uFF1A\u901A\u5E38\u662F\u7531\u951A\u70B9 anchors \u7EC4\u6210\u3002\u951A\u70B9\u7528\u4E8E\u8FDE\u7EBF\u3002</p><h2 id="\u540D\u79F0-name" tabindex="-1">\u540D\u79F0 name <a class="header-anchor" href="#\u540D\u79F0-name" aria-hidden="true">#</a></h2><p><a href="http://pen.name" target="_blank" rel="noopener noreferrer">pen.name</a> \u7528\u4E8E\u533A\u5206\u56FE\u5F62\u5F62\u72B6\u7684\u4E0D\u540C\u3002\u4F8B\u5982\u6B63\u65B9\u5F62\u3001\u5706\u3001\u4E09\u89D2\u5F62\u7B49</p><p><strong>\u5176\u4E2D</strong>\uFF1Aname=&#39;line&#39;\u65F6\uFF0C\u8868\u793A\u8FDE\u7EBF\u753B\u7B14\u3002\u901A\u5E38\uFF0C\u8FDE\u7EBF\u7684 type=1\u3002<br> \u4F46\u662F name=&#39;line&#39;\u65F6\uFF0Ctype \u4E5F\u53EF\u4EE5 = 0\uFF0C\u7528\u4E8E\u8868\u793A\u201C\u8FDE\u7EBF\u5F62\u72B6\u201D\u7684\u8282\u70B9\u3002\u4F8B\u5982\uFF0C\u7528\u94A2\u7B14\u53EF\u4EE5\u8868\u793A\u591A\u7AEF\u66F2\u7EBF\uFF0C\u53EF\u4EE5\u8868\u793A\u753B\u4E86\u4E00\u4E2A\u81EA\u5B9A\u4E49\u56FE\u5F62\u3002<br> \u867D\u7136\u4ED6\u4EEC\u5F62\u72B6\u76F8\u540C\uFF0C\u4F46\u903B\u8F91\u4E0D\u5B8C\u5168\u76F8\u540C\uFF0C\u7279\u522B\u662F\u52A8\u753B\u3002</p><div class="language-js"><pre><code><span class="token comment">// \u6211\u662F\u4E00\u4E2Anode\u5C5E\u6027\u7684pen\uFF0C\u5F62\u72B6\u662Fline</span>
<span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span> anchors<span class="token operator">:</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u6211\u662F\u4E00\u4E2Aline\u5C5E\u6027\u7684pen\uFF0C\u5F62\u72B6\u662Fline</span>
<span class="token keyword">const</span> line <span class="token operator">=</span> <span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span> anchors<span class="token operator">:</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u521B\u5EFA" tabindex="-1">\u521B\u5EFA <a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a></h2><p>\u7B26\u5408\u753B\u7B14\u683C\u5F0F\u7684 json \u6570\u636E\u5373\u753B\u7B14\u3002\u4F8B\u5982\uFF1A</p><p><strong>\u4EE5\u4E0B\u4EE3\u7801\uFF0C\u5747\u53EF\u76F4\u63A5\u5728 <a href="http://2ds.le5le.com" target="_blank" rel="noopener noreferrer">2ds.le5le.com</a> \u5B98\u7F51\u5728\u7EBF\u7F16\u8F91\u5668\u6216 meta2d \u5B9E\u4F8B\u9875\u9762\u7684\u63A7\u5236\u53F0\u6267\u884C</strong></p><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u77E9\u5F62&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F\u4E00\uFF1Aopen\u52A0\u8F7D\uFF0C\u5C06\u6E05\u9664\u4E4B\u524D\u6570\u636E</span>
meta2d<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span> pens<span class="token operator">:</span> <span class="token punctuation">[</span>pen<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F\u4E8C\uFF1A\u6DFB\u52A0\u5230\u753B\u5E03\uFF0C\u5E76\u9009\u4E2D\uFF0C\u4F1A\u89E6\u53D1\u751F\u547D\u5468\u671F\u51FD\u6570beforeAddPen</span>
meta2d<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u5F0F\u4E09\uFF1A\u4EC5\u6DFB\u52A0\u753B\u7B14\uFF0C\u4E0D\u9009\u4E2D\uFF0C\u4E0D\u89E6\u53D1\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u4E0D\u91CD\u7ED8\uFF08\u4E0D\u7ACB\u523B\u663E\u793A\uFF09\uFF0C\u53EF\u7528\u4E8E\u6279\u91CF\u6DFB\u52A0\u540E\uFF0C\u4E00\u6B21\u91CD\u7ED8</span>
meta2d<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span><span class="token function">makePen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u9009\u4E2D\u9AD8\u4EAE</span>
meta2d<span class="token punctuation">.</span><span class="token function">active</span><span class="token punctuation">(</span><span class="token punctuation">[</span>pen<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u91CD\u7ED8\u663E\u793A</span>
meta2d<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u67E5\u627E" tabindex="-1">\u67E5\u627E <a class="header-anchor" href="#\u67E5\u627E" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u77E9\u5F62&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
meta2d<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u67E5\u627E\u65B9\u5F0F\u4E00\uFF1Aid\u67E5\u627E\uFF0C\u8FD4\u56DE\u7684\u662F\u6570\u7EC4</span>
<span class="token keyword">const</span> pens1 <span class="token operator">=</span> meta2d<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u67E5\u627E\u65B9\u5F0F\u4E8C\uFF1Atag\u67E5\u627E\uFF0C\u8FD4\u56DE\u7684\u662F\u6570\u7EC4</span>
<span class="token keyword">const</span> pens2 <span class="token operator">=</span> meta2d<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u66F4\u65B0" tabindex="-1">\u66F4\u65B0 <a class="header-anchor" href="#\u66F4\u65B0" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u77E9\u5F62&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
meta2d<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u67E5\u627Eid = pen.id\u7684\u753B\u7B14\uFF0C</span>
meta2d<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> pen<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;le5le&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u67E5\u627Eid = pen.id\u7684\u753B\u7B14\uFF0C\u4FEE\u6539id\u4E3A111</span>
meta2d<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> pen<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  newId<span class="token operator">:</span> <span class="token string">&quot;111&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5220\u9664" tabindex="-1">\u5220\u9664 <a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u77E9\u5F62&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
meta2d<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5220\u9664</span>
meta2d<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>meta2d<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u9009\u4E2D\u9AD8\u4EAE" tabindex="-1">\u9009\u4E2D\u9AD8\u4EAE <a class="header-anchor" href="#\u9009\u4E2D\u9AD8\u4EAE" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u77E9\u5F62&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
meta2d<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u9AD8\u4EAE</span>
meta2d<span class="token punctuation">.</span><span class="token function">active</span><span class="token punctuation">(</span>meta2d<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6E05\u7A7A\u9AD8\u4EAE\u3002\u5982\u679C\u9700\u8981\u53D6\u6D88\u90E8\u5206\u9AD8\u4EAE\uFF0C\u76F4\u63A5\u8C03\u7528active()\u8D4B\u6700\u65B0\u503C\u5373\u53EF</span>
meta2d<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u662F\u5426\u9009\u4E2D\u9AD8\u4EAE" tabindex="-1">\u662F\u5426\u9009\u4E2D\u9AD8\u4EAE <a class="header-anchor" href="#\u662F\u5426\u9009\u4E2D\u9AD8\u4EAE" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u77E9\u5F62&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  tag<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
meta2d<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6253\u5370\u662F\u5426\u9009\u4E2D\u9AD8\u4EAE</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>active<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4EA4\u4E92\u4E8B\u4EF6" tabindex="-1">\u4EA4\u4E92\u4E8B\u4EF6 <a class="header-anchor" href="#\u4EA4\u4E92\u4E8B\u4EF6" aria-hidden="true">#</a></h2><ul><li>\u9F20\u6807\u8FDB\u5165 enter</li><li>\u9F20\u6807\u79BB\u5F00 leave</li><li>\u9009\u4E2D active</li><li>\u53D6\u6D88\u9009\u4E2D inactive</li><li>\u5355\u51FB click</li><li>\u53CC\u51FB dblclick</li><li>\u9F20\u6807\u6309\u4E0B mousedown</li><li>\u9F20\u6807\u62AC\u8D77 mouseup</li><li>\u6570\u636E\u66F4\u65B0 valueUpdate</li></ul><p>\u89E6\u53D1 pen \u7684\u4E0A\u8FF0\u884C\u4E3A\u65F6\uFF0C\u53EF\u914D\u7F6E\u6267\u884C\u7684\u52A8\u4F5C<br> \u9501\u753B\u5E03\u540E(meta2d.store.data.locked = 1 or 2)\uFF0C\u53EF\u89E6\u53D1\u4EA4\u4E92\u4E8B\u4EF6\u3002<br> \u4E8B\u4EF6\u91C7\u7528\u5192\u6CE1\u673A\u5236\uFF0C\u5148\u6267\u884C\u5B50\u8282\u70B9\uFF0C\u540E\u6267\u884C\u7236\u8282\u70B9\u3002<br> \u4E8B\u4EF6\u914D\u7F6E\u53C2\u8003\uFF1A</p><ol><li>\u5728 <a href="http://t.le5le.com/" target="_blank" rel="noopener noreferrer">\u5B98\u7F51</a> \u62D6\u62FD\u4E00\u4E2A\u8282\u70B9\uFF0C\u914D\u7F6E\u9700\u8981\u7684\u4E8B\u4EF6\u3002</li><li>\u9009\u4E2D\u8282\u70B9\uFF0C\u5728\u63A7\u5236\u53F0\u8F93\u5165 <code>meta2d.store.active[0].events</code> , \u5982\u679C\u62A5\u9519\uFF0C\u786E\u4FDD\u5DF2\u7ECF\u9009\u4E2D\u8BE5\u8282\u70B9\u3002</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u77E9\u5F62&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  events<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
      action<span class="token operator">:</span> EventAction<span class="token punctuation">.</span>Link<span class="token punctuation">,</span> <span class="token comment">// \u6267\u884C\u52A8\u4F5C</span>
      where<span class="token operator">:</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span> comparison<span class="token operator">:</span> <span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;\u77E9\u5F62&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u89E6\u53D1\u6761\u4EF6</span>
      value<span class="token operator">:</span> <span class="token string">&quot;2ds.le5le.com&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
meta2d<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> IValue<span class="token punctuation">,</span> Pen <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../pen&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u4E24\u4E2A\u7C7B\u578B\u65E0\u9700\u5173\u6CE8</span>

<span class="token keyword">type</span> <span class="token class-name">EventValue</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> IValue <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E8B\u4EF6\u884C\u4E3A</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">EventName</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;enter&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;leave&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;active&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;inactive&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;click&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;mousedown&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;mouseup&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;dblclick&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;valueUpdate&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> EventName<span class="token punctuation">;</span>
  action<span class="token operator">:</span> EventAction<span class="token punctuation">;</span> <span class="token comment">// \u4E8B\u4EF6\u52A8\u4F5C</span>
  where<span class="token operator">?</span><span class="token operator">:</span> Where<span class="token punctuation">;</span> <span class="token comment">// \u82E5\u65E0\u6761\u4EF6\uFF0C\u5FC5\u987B\u4E3A undefined or null\uFF0C\u4E0D\u53EF\u4E3A\u7A7A\u5BF9\u8C61</span>
  value<span class="token operator">?</span><span class="token operator">:</span> EventValue<span class="token punctuation">;</span> <span class="token comment">// \u4E0D\u540C action \u4E0B\uFF0C\u8BE5\u503C\u542B\u4E49\u4E0D\u540C\uFF0C\u4F8B\u5982\uFF1A\u52A8\u753B\u76F8\u5173\u7684\uFF0C\u5373\u4E3A \u8282\u70B9 tag; Function \u7C7B\u578B\u5373\u4E3A \u5B57\u7B26\u4E32\u51FD\u6570</span>
  params<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  fn<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>pen<span class="token operator">:</span> Pen<span class="token punctuation">,</span> params<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

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
  comparison<span class="token operator">?</span><span class="token operator">:</span> Comparison<span class="token punctuation">;</span>
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
  fn<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>pen<span class="token operator">:</span> Pen<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// \u6761\u4EF6\u51FD\u6570\uFF0C\u6700\u9AD8\u4F18\u5148\u7EA7</span>
  fnJs<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// \u6761\u4EF6\u51FD\u6570js\u4EE3\u7801\uFF0C\u6B21\u9AD8\u4F18\u5148\u7EA7</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u89E6\u53D1\u5668\u4E2D\u7684\u7B26\u53F7
 */</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Comparison</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&quot;=&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;==&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;!=&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;&gt;&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;&lt;&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;&gt;=&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;&lt;=&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;[)&quot;</span> <span class="token comment">// \u4ECB\u4E8E\uFF0C\u6570\u5B66\u4E2D\u7684\u5F00\u95ED\u533A\u95F4</span>
  <span class="token operator">|</span> <span class="token string">&quot;![)&quot;</span> <span class="token comment">// \u975E\u4ECB\u4E8E\uFF0C\u4E0E\u4E0A\u4E00\u4E2A\u76F8\u53CD</span>
  <span class="token comment">/**
   * \u5C5E\u4E8E\uFF0C\u7C7B\u4F3C\u4E8E \u6570\u7EC4\u7684 includes
   * .. \u5C5E\u4E8E\u8303\u56F4\u8BED\u6CD5\uFF0C30..50 \u7B49\u4EF7\u4E8E \u4ECB\u4E8E\u7684 [30, 50]
   * [1, 2, 3]  2 // true  1.5 // false
   * [1,20,30..50,65] 1 // true 20 // true 30 // true 30.1 // true
   */</span>
  <span class="token operator">|</span> <span class="token string">&quot;[]&quot;</span>
  <span class="token operator">|</span> <span class="token string">&quot;![]&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u975E\u5C5E\u4E8E\uFF0C\u4E0E\u4E0A\u4E00\u4E2A\u76F8\u53CD</span>
</code></pre></div><h2 id="\u6587\u672C" tabindex="-1">\u6587\u672C <a class="header-anchor" href="#\u6587\u672C" aria-hidden="true">#</a></h2><p>\u6587\u5B57\u662F\u4E00\u4E2A\u5F88\u590D\u6742\u7684\u573A\u666F\uFF0C\u4E2D\u82F1\u6587\u5BBD\u5EA6\u4E0D\u4E00\u81F4\uFF1B\u9ED8\u8BA4\u6362\u884C\uFF0C\u56DE\u8F66\u6362\u884C\uFF0C\u4E0D\u6362\u884C\uFF0C\u6C38\u8FDC\u6362\u884C\uFF1B\u8D85\u51FA\u7701\u7565\u7B49\u3002<br> \u5982\u4F55\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E9B\u7B80\u5355\u7684\u914D\u7F6E\u6765\u8FBE\u5230\u7528\u6237\u901A\u5E38\u60F3\u8981\u7684\u6548\u679C\uFF0C\u4EE5\u4E0B\u662F\u5236\u5B9A\u7684\u4E00\u4E9B\u89C4\u5219\uFF0C\u6B22\u8FCE\u8BA8\u8BBA\uFF01</p><h3 id="\u6587\u672C\u533A\u57DF" tabindex="-1">\u6587\u672C\u533A\u57DF <a class="header-anchor" href="#\u6587\u672C\u533A\u57DF" aria-hidden="true">#</a></h3><h4 id="worldtextrect" tabindex="-1">worldTextRect <a class="header-anchor" href="#worldtextrect" aria-hidden="true">#</a></h4><ul><li><p>\u5F71\u54CD<br> \u8BE5\u533A\u57DF\u662F\u6587\u5B57\u7684\u533A\u57DF\uFF0C\u5B83\u7684\u6539\u53D8\u4F1A\u5F71\u54CD\u53CC\u51FB\u5C55\u793A\u8F93\u5165\u6846\u7684\u5927\u5C0F\uFF1B\u4F1A\u5F71\u54CD\u6587\u5B57\u7684\u6362\u884C\u60C5\u51B5\uFF0C\u5373\u6A2A\u5411\u8D85\u51FA\uFF1B\u4F1A\u5F71\u54CD\u6587\u5B57\u884C\u6570\u8D85\u51FA\u7684\u7701\u7565\u53F7\uFF0C\u5373\u7EB5\u5411\u8D85\u51FA\u3002</p></li><li><p>\u53D7\u5F71\u54CD<br> \u8BE5\u533A\u57DF\u5728 worldRect \u533A\u57DF\u7684\u57FA\u7840\u4E0A\uFF0C\u53D7\u5230 padding\uFF0CtextLeft\uFF0CtextTop\uFF0CtextWidth\uFF0CtextHeight, textAlign, textBaseline \u5C5E\u6027\u7684\u5F71\u54CD\u3002<br> \u800C textAlign \u4E0E textBaseline \u5F71\u54CD\u8BE5\u533A\u57DF worldTextRect \u5728 worldRect \u4E2D\u7684\u4F4D\u7F6E\u3002</p></li><li><p>\u67E5\u770B\u533A\u57DF \u63A7\u5236\u53F0\u8BBE\u7F6E\uFF1A</p><div class="language-js"><pre><code>meta2d<span class="token punctuation">.</span>store<span class="token punctuation">.</span>fillWorldTextRect <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
meta2d<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><h4 id="textdrawrect" tabindex="-1">textDrawRect <a class="header-anchor" href="#textdrawrect" aria-hidden="true">#</a></h4><p>\u8BE5\u533A\u57DF\u662F\u6587\u5B57\u7684\u5B9E\u9645\u7ED8\u5236\u6240\u5360\u7684\u533A\u57DF\uFF0C\u5B83\u7684\u5BBD\u5EA6\u4E3A\u591A\u884C\u6587\u672C\u4E2D\u6700\u5927\u7684\u5BBD\u5EA6\uFF0C\u9AD8\u5EA6\u4E3A <code>\u884C\u6570 * lineHeight * fontSize</code>\u3002<br> \u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E textBackground \u5C5E\u6027\u6765\u67E5\u770B\u5F53\u524D textDrawRect \u7684\u533A\u57DF\u5927\u5C0F\u3002</p><h3 id="\u6362\u884C\u4E0E\u8D85\u51FA\u7701\u7565" tabindex="-1">\u6362\u884C\u4E0E\u8D85\u51FA\u7701\u7565 <a class="header-anchor" href="#\u6362\u884C\u4E0E\u8D85\u51FA\u7701\u7565" aria-hidden="true">#</a></h3><p>\u6362\u884C\u4E2D\u7684\u4E0D\u6362\u884C\u4E0E\u56DE\u8F66\u6362\u884C\u90FD\u6BD4\u8F83\u597D\u7406\u89E3\uFF0C\u6B64\u5904\u4E0D\u8D58\u8FF0\u4E86\u3002</p><p>\u9ED8\u8BA4\u6362\u884C\uFF1A\u6BCF\u4E2A\u5355\u8BCD\u5373\u8BA4\u4E3A\u662F\u4E00\u7EC4\u7684\uFF0C\u540C\u4E00\u4E2A\u5355\u8BCD\u662F\u4F1A\u5728\u540C\u4E00\u884C\u7684\uFF0C\u4E00\u4E2A\u5355\u8BCD\u6307\u7684\u662F\u4E00\u4E2A\u4E2D\u6587\u6216\u4E00\u4E2A\u82F1\u6587\u5355\u8BCD\uFF0C\u4F8B\u5982\u8BF4\uFF1A&#39;\u4E50&#39; \u662F\u4E00\u4E2A\u5355\u8BCD\uFF0C\u2019\u4E50\u543E\u4E50&#39; \u662F\u4E09\u4E2A\u5355\u8BCD\uFF0C&#39;word word&#39;\u662F\u4E24\u4E2A\u5355\u8BCD\uFF0C&#39;mmmmmmmmmm&#39;\u662F\u4E00\u4E2A\u5355\u8BCD\uFF0C\u5373\u82F1\u6587\u4F7F\u7528\u7A7A\u683C\u5206\u5272\u5355\u8BCD\u7684\u3002</p><p>\u6C38\u8FDC\u6362\u884C\uFF1A\u6BCF\u4E2A\u5B57\u6BCD\u4E00\u7EC4\uFF0C\u53EA\u8981\u5BBD\u5EA6\u8D85\u4E86\u5C31\u6362\u884C\u3002</p><p>\u8D85\u51FA\u7701\u7565\u5728\u4E0D\u540C\u7684\u6362\u884C\u4E0B\u662F\u4E0D\u540C\u7684\uFF1A</p><ol><li>\u4E0D\u6362\u884C</li></ol><p>\u5224\u65AD\u5BBD\u5EA6\u662F\u5426\u8D85\u51FA\uFF0C\u5BBD\u5EA6\u8D85\u51FA\u5219\u5220\u9664\u8D85\u51FA\u90E8\u5206\uFF0C\u672B\u5C3E\u6DFB\u52A0 ...</p><ol start="2"><li>\u56DE\u8F66\u6362\u884C\u3001\u9ED8\u8BA4\u3001\u6C38\u8FDC\u6362\u884C</li></ol><p>\u5224\u65AD\u9AD8\u5EA6\u662F\u5426\u8D85\u51FA\uFF0C\u82E5\u884C\u6570\u8D85\u8FC7\u6700\u5927\u53EF\u5C55\u793A\u884C\u6570\uFF0C\u6700\u540E\u4E00\u884C\u6DFB\u52A0 ...</p><h3 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h3><p>\u4EE5\u4E0B\u793A\u4F8B\u53EA\u4ECB\u7ECD\u4E86\u4E00\u4E9B\u573A\u666F\uFF0C\u540E\u7EED\u4F1A\u8FDB\u884C\u66F4\u591A\u7684\u8865\u5145\uFF0C\u4E5F\u6B22\u8FCE\u5B8C\u5584\u3002</p><ol><li>\u53EA\u9700\u8981\u4E00\u884C\u6587\u672C\uFF0C\u8D85\u51FA\u7684\u90E8\u5206\u7701\u7565\u3002</li></ol><div class="language-ts"><pre><code><span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u957F\u6587\u672C\u957F\u6587\u672C\u957F\u6587\u672C\u957F\u6587\u672C\u957F\u6587\u672C\u957F\u6587\u672C&quot;</span><span class="token punctuation">,</span>
  whiteSpace<span class="token operator">:</span> <span class="token string">&quot;nowrap&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
meta2d<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>\u6700\u5927\u4E24\u884C\u6587\u672C\uFF0C\u6C38\u8FDC\u6362\u884C\uFF0C\u8D85\u51FA\u7701\u7565</li></ol><p>\u5F53\u4E00\u5B9A\u662F\u4E24\u884C\u6587\u672C\u65F6\uFF0C\u9700\u8981\u8BBE\u7F6E textHeight \uFF0C\u5927\u4E8E\u4E24\u884C\u7684\u9AD8\u5EA6\uFF0C\u5C0F\u4E8E\u4E09\u884C\u7684\u9AD8\u5EA6\u3002<br><code>2 * fontSize * lineHeight &lt;= textHeight &lt;= 3 * fontSize * lineHeight</code>\u3002<br> fontSize \u9ED8\u8BA4 12 , lineHeight \u9ED8\u8BA4 1.5. \u5373 <code>36 &lt;= textHeight &lt;= 54</code><br> \u7531\u4E8E\u8BA1\u7B97\u8BEF\u5DEE\uFF0C\u5C3D\u53EF\u80FD\u7684\u4E0D\u8981\u8BBE\u7F6E\u7B49\u4E8E\u7684\u503C<br> \u591A\u884C\u6587\u672C\u540C\u7406</p><div class="language-ts"><pre><code><span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u957F\u6587\u672C\u957F\u6587\u672C\u957F\u6587\u672C\u957F\u6587\u672C\u957F\u6587\u672C\u957F\u6587\u672C&quot;</span><span class="token punctuation">,</span>
  textHeight<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  whiteSpace<span class="token operator">:</span> <span class="token string">&quot;break-all&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
meta2d<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,52),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};
