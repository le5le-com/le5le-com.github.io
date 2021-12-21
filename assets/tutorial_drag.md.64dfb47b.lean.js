import{_ as n,c as a,o as s,a as t}from"./app.3885cfa9.js";const m='{"title":"\u62D6\u62FD","description":"","frontmatter":{},"relativePath":"tutorial/drag.md","lastUpdated":1640085450839}',p={},o=t(`__VP_STATIC_START__<h1 id="\u62D6\u62FD" tabindex="-1">\u62D6\u62FD <a class="header-anchor" href="#\u62D6\u62FD" aria-hidden="true">#</a></h1><p>topology \u652F\u6301\u4ECE\u5DE5\u5177\u680F\u62D6\u62FD\u56FE\u6807\u5230\u753B\u5E03\u3002</p><p>\u5DE5\u5177\u680F\u9700\u8981\u81EA\u5B9A\u4E49\u5B9E\u73B0\uFF0C\u652F\u6301 drag \u76F8\u5173\u5C5E\u6027\uFF1B\u5F15\u64CE\u5DF2\u652F\u6301 drop \u529F\u80FD\u3002</p><p><strong>1. \u521B\u5EFA\u56FE\u5F62\u5E93\u5DE5\u5177\u680F</strong><br> \u521B\u5EFA\u56FE\u5F62\u5E93\u5DE5\u5177\u680F html \u5143\u7D20\uFF0C\u7ED1\u5B9A\u62D6\u62FD\u4E8B\u4EF6\u6216 touch \u4E8B\u4EF6</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tools<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">draggable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">ondragstart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onDragstart($event, menu)<span class="token punctuation">&quot;</span></span>
    <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">onTouchstart</span><span class="token punctuation">(</span>$event<span class="token punctuation">,</span> menu<span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span>
    <span class="token attr-name">ontouchstart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onTouchstart($event, menu)<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Rectangle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>2. \u4F20\u9012\u6570\u636E</strong><br> \u5728\u5DE5\u5177\u680F\u76F8\u5E94\u4E8B\u4EF6\u51FD\u6570\u4E2D\uFF0C\u7ED9 topology \u4F20\u9012 pen \u5BF9\u8C61\u6570\u636E\u5373\u53EF</p><div class="language-js"><pre><code><span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;\u77E9\u5F62&#39;</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function-variable function">onDragstart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token string">&#39;Text&#39;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u652F\u6301\u9F20\u6807\u5355\u51FB\u6DFB\u52A0\u56FE\u5F62</span>
<span class="token function-variable function">onTouchstart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  topology<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>addCaches <span class="token operator">=</span> <span class="token punctuation">[</span>pen<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u53C2\u8003\u793A\u4F8B\uFF1A <a href="https://github.com/le5le-com/topology.js/tree/master/examples" target="_blank" rel="noopener noreferrer">https://github.com/le5le-com/topology.js/tree/master/examples</a></p>__VP_STATIC_END__`,8),e=[o];function c(u,l,k,r,i,g){return s(),a("div",null,e)}var v=n(p,[["render",c]]);export{m as __pageData,v as default};
