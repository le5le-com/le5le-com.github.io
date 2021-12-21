import{_ as n,c as a,o as s,a as t}from"./app.3885cfa9.js";const h='{"title":"\u81EA\u5B9A\u4E49\u8FDE\u7EBF\u7B97\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u5B9A\u4E49\u66F2\u7EBF\u951A\u70B9\u7B97\u6CD5","slug":"\u81EA\u5B9A\u4E49\u66F2\u7EBF\u951A\u70B9\u7B97\u6CD5"},{"level":2,"title":"\u5185\u7F6E\u66F2\u7EBF\u7B97\u6CD5","slug":"\u5185\u7F6E\u66F2\u7EBF\u7B97\u6CD5"}],"relativePath":"tutorial/line-ai.md","lastUpdated":1640085450839}',e={},p=t(`<h1 id="\u81EA\u5B9A\u4E49\u8FDE\u7EBF\u7B97\u6CD5" tabindex="-1">\u81EA\u5B9A\u4E49\u8FDE\u7EBF\u7B97\u6CD5 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u8FDE\u7EBF\u7B97\u6CD5" aria-hidden="true">#</a></h1><p>\u8FDE\u7EBF\u662F\u8FDE\u63A5 pen.anchors \u7EC4\u6210\u7684\u591A\u7EBF\u6BB5\u3002</p><p>\u5176\u4E2D\uFF0C\u951A\u70B9\u7C7B\u578B\u4E3A<a href="/api/point.html">Point</a>\u3002</p><p>\u5F53\u4E24\u4E2A\u951A\u70B9\u90FD\u6CA1\u6709 prev \u548C next \u65F6\uFF0C\u8868\u793A\u76F4\u7EBF\u7AEF\u3002</p><p>\u5F53\u951A\u70B9\u5B58\u5728 prev \u548C next \u65F6\uFF0C\u8868\u793A\u8D1D\u585E\u5C14\u66F2\u7EBF\u3002prev \u8868\u793A\u4E0A\u4E00\u4E2A\u66F2\u7EBF\u7684\u63A7\u5236\u70B9\uFF1Bnext \u8868\u793A\u4E0B\u4E00\u4E2A\u66F2\u7EBF\u7684\u63A7\u5236\u70B9\u3002\u5373\u8D1D\u585E\u5C14\u66F2\u7EBF\u7EC4\u6210\u4E3A\uFF1Afrom, from.next, to.prev, to</p><p>\u672C\u8282\u81EA\u5B9A\u4E49\u8FDE\u7EBF\u7B97\u6CD5\u662F\u6307\uFF0C\u5728\u66F2\u7EBF\u7ED8\u753B\u8FC7\u7A0B\u4E2D\uFF0C\u81EA\u52A8\u8BA1\u7B97\u951A\u70B9\u4F4D\u7F6E\u7684\u7B97\u6CD5</p><h2 id="\u81EA\u5B9A\u4E49\u66F2\u7EBF\u951A\u70B9\u7B97\u6CD5" tabindex="-1">\u81EA\u5B9A\u4E49\u66F2\u7EBF\u951A\u70B9\u7B97\u6CD5 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u66F2\u7EBF\u951A\u70B9\u7B97\u6CD5" aria-hidden="true">#</a></h2><ol><li>\u5B9E\u73B0\u7B97\u6CD5</li></ol><div class="language-js"><pre><code><span class="token comment">// store - \u8868\u793A\u5F15\u64CE\u6570\u636E\u5B58\u50A8</span>
<span class="token comment">// pen - \u5F53\u524D\u7ED8\u753B\u7684\u8FDE\u7EBF</span>
<span class="token comment">// mousedwon - \u9F20\u6807\u6309\u4E0B\u7684\u521D\u59CB\u4F4D\u7F6E</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myLineFn</span><span class="token punctuation">(</span><span class="token parameter">store<span class="token operator">:</span> TopologyStore<span class="token punctuation">,</span> pen<span class="token operator">:</span> Pen<span class="token punctuation">,</span> mousedwon<span class="token operator">?</span><span class="token operator">:</span> Point</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldAnchors<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldAnchors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u4FEE\u6539\u8BBE\u7F6Epen.calculative.worldAnchors\u951A\u70B9\u5373\u53EF</span>
  <span class="token comment">// \u8FD9\u91CC\u7684\u951A\u70B9\u4E3A\u4E16\u754C\u5750\u6807 - canvas\u7684\u7ED8\u753B\u5750\u6807</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u6CE8\u518C\u51FD\u6570</li></ol><div class="language-js"><pre><code>topology<span class="token punctuation">.</span><span class="token function">addDrawLineFn</span><span class="token punctuation">(</span><span class="token string">&#39;newLineName&#39;</span><span class="token punctuation">,</span> myLineFn<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="3"><li>\u4F7F\u7528</li></ol><div class="language-js"><pre><code><span class="token comment">// \u5F00\u59CB\u7ED8\u753B\u66F2\u7EBF\uFF0C\u4F7F\u7528newLineName\u5BF9\u5E94\u7684myLineFn\u51FD\u6570\u81EA\u52A8\u8BA1\u7B97\u951A\u70B9</span>
topology<span class="token punctuation">.</span><span class="token function">drawLine</span><span class="token punctuation">(</span><span class="token string">&#39;newLineName&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5185\u7F6E\u66F2\u7EBF\u7B97\u6CD5" tabindex="-1">\u5185\u7F6E\u66F2\u7EBF\u7B97\u6CD5 <a class="header-anchor" href="#\u5185\u7F6E\u66F2\u7EBF\u7B97\u6CD5" aria-hidden="true">#</a></h2><ul><li>curve\uFF1A\u8D1D\u585E\u5C14\u66F2\u7EBF</li><li>polyline\uFF1A\u591A\u7EBF\u6BB5</li><li>line\uFF1A\u76F4\u7EBF</li><li>mind\uFF1A\u8111\u56FE\u66F2\u7EBF</li></ul>`,15),o=[p];function c(l,i,r,u,d,k){return s(),a("div",null,o)}var _=n(e,[["render",c]]);export{h as __pageData,_ as default};
