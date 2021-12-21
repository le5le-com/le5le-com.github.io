import{_ as n,c as s,o as a,a as p}from"./app.3885cfa9.js";const g='{"title":"\u751F\u547D\u5468\u671F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5168\u5C40\u751F\u547D\u5468\u671F\u51FD\u6570","slug":"\u5168\u5C40\u751F\u547D\u5468\u671F\u51FD\u6570"},{"level":2,"title":"\u753B\u7B14\u76F8\u5173\u51FD\u6570","slug":"\u753B\u7B14\u76F8\u5173\u51FD\u6570"}],"relativePath":"tutorial/lifecycle.md","lastUpdated":1640085450839}',t={},o=p(`<h1 id="\u751F\u547D\u5468\u671F" tabindex="-1">\u751F\u547D\u5468\u671F <a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h1><p>\u753B\u7B14\u7684\u6DFB\u52A0\u548C\u5220\u9664\u524D\uFF0C\u5F15\u64CE\u4F1A\u6267\u884C\u5168\u5C40\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u8FD4\u56DE true \u7EE7\u7EED\uFF0C\u5426\u5219\u7EC8\u6B62\u64CD\u4F5C\u3002</p><p>\u540C\u65F6\uFF0C\u753B\u7B14\u6DFB\u52A0\u540E\uFF0C\u6DFB\u52A0\u548C\u9500\u6BC1\u4F1A\u6267\u884C\u753B\u7B14\u7684 onAdd \u548C onDestroy \u76F8\u5173\u51FD\u6570\u3002</p><h2 id="\u5168\u5C40\u751F\u547D\u5468\u671F\u51FD\u6570" tabindex="-1">\u5168\u5C40\u751F\u547D\u5468\u671F\u51FD\u6570 <a class="header-anchor" href="#\u5168\u5C40\u751F\u547D\u5468\u671F\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4\u65E0\u3002\u53EF\u4EE5\u5982\u4E0B\u8BBE\u7F6E\u5373\u53EF\uFF1A</p><div class="language-js"><pre><code>topolog<span class="token punctuation">.</span><span class="token function-variable function">beforeAddPen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">pen<span class="token operator">:</span> Pen</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;addPen&#39;</span><span class="token punctuation">,</span> pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8FD4\u56DE true \u5141\u8BB8add</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topolog<span class="token punctuation">.</span><span class="token function-variable function">beforeRemovePen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">pen<span class="token operator">:</span> Pen</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;removePen&#39;</span><span class="token punctuation">,</span> pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8FD4\u56DE true \u5141\u8BB8remove</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topolog<span class="token punctuation">.</span><span class="token function-variable function">beforeAddAnchor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">pen<span class="token operator">:</span> Pen</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;addAnchor&#39;</span><span class="token punctuation">,</span> pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8FD4\u56DE true \u5141\u8BB8add</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topolog<span class="token punctuation">.</span><span class="token function-variable function">beforeRemoveAnchor</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">pen<span class="token operator">:</span> Pen</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;removeAnchor&#39;</span><span class="token punctuation">,</span> pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8FD4\u56DE true \u5141\u8BB8remove</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
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
<span class="token comment">// print: addPen, pen</span>
</code></pre></div><h2 id="\u753B\u7B14\u76F8\u5173\u51FD\u6570" tabindex="-1">\u753B\u7B14\u76F8\u5173\u51FD\u6570 <a class="header-anchor" href="#\u753B\u7B14\u76F8\u5173\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u9ED8\u8BA4\u65E0\u3002\u53EF\u4EE5\u5728\u81EA\u5B9A\u4E49\u56FE\u5F62\u5E93\u7684\u65F6\u5019\u8BBE\u7F6E\uFF0C\u6216\u4E34\u65F6\u8BBE\u7F6E\u3002\u751F\u547D\u5468\u671F\u51FD\u6570\u7C7B\u578B\u5747\u4E3A\uFF1A(pen: Pen) =&gt; void</p><ul><li>onAdd \u753B\u7B14\u6DFB\u52A0\u5230\u753B\u5E03\u540E</li><li>onDestroy \u753B\u7B14\u88AB\u5220\u9664\u540E</li></ul><p>\u5176\u4ED6\u76F8\u5173\u51FD\u6570\uFF1A</p><ul><li>onValue \u5C5E\u6027\u503C\u53D1\u751F\u4FEE\u6539</li><li>onMove \u88AB\u79FB\u52A8\u62D6\u62FD</li><li>onResize \u4FEE\u6539\u5927\u5C0F</li><li>onRotate \u65CB\u8F6C</li><li>onClick \u5355\u51FB</li><li>onMouseDown \u9F20\u6807\u6309\u4E0B</li><li>onMouseMove \u9F20\u6807\u7ECF\u8FC7</li><li>onMouseUp \u9F20\u6807\u62AC\u8D77</li></ul><p>\u4E34\u65F6\u8BBE\u7F6E\u51FD\u6570\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">onAddPen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">pen<span class="token operator">:</span> Pen</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;onAddPen&#39;</span><span class="token punctuation">,</span> pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;\u77E9\u5F62&#39;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  onAdd<span class="token operator">:</span> onAddPen<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// print: onAddPen, pen</span>
</code></pre></div><p>\u81EA\u5B9A\u4E49\u56FE\u5F62\u5E93\u8BBE\u7F6E onAdd \u76F8\u5173\u51FD\u6570\uFF0C\u53C2\u8003\uFF1A<a href="https://github.com/le5le-com/topology.js/blob/master/packages/chart-diagram/src/echarts.ts" target="_blank" rel="noopener noreferrer">\u81EA\u5B9A\u4E49\u56FE\u5F62\u5E93\u793A\u4F8B</a></p>`,14),e=[o];function c(l,u,r,k,i,d){return a(),s("div",null,e)}var h=n(t,[["render",c]]);export{g as __pageData,h as default};
