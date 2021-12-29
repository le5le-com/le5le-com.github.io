import{_ as n,c as s,o as a,a as p}from"./app.f92dd97e.js";const g='{"title":"\u52A8\u753B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8282\u70B9\u52A8\u753B","slug":"\u8282\u70B9\u52A8\u753B"},{"level":2,"title":"\u8FDE\u7EBF\u52A8\u753B","slug":"\u8FDE\u7EBF\u52A8\u753B"},{"level":2,"title":"\u4E0B\u4E00\u4E2A\u52A8\u753B","slug":"\u4E0B\u4E00\u4E2A\u52A8\u753B"}],"relativePath":"tutorial/animate.md","lastUpdated":1640774076103}',t={},o=p(`<h1 id="\u52A8\u753B" tabindex="-1">\u52A8\u753B <a class="header-anchor" href="#\u52A8\u753B" aria-hidden="true">#</a></h1><p>topology \u52A8\u753B\u5206\u4E3A 2 \u79CD\uFF1A\u8282\u70B9\u52A8\u753B\u3001\u8FDE\u7EBF\u52A8\u753B</p><h2 id="\u8282\u70B9\u52A8\u753B" tabindex="-1">\u8282\u70B9\u52A8\u753B <a class="header-anchor" href="#\u8282\u70B9\u52A8\u753B" aria-hidden="true">#</a></h2><p>\u8282\u70B9\u52A8\u753B\u5C5E\u4E8E<strong>\u5E27\u52A8\u753B</strong>\uFF0C\u9010\u5E27\u6267\u884C\u3002\u4E3B\u8981\u5305\u542B\uFF1A<strong>\u5E27\u65F6\u957F</strong> + <strong>\u53D8\u5316\u5C5E\u6027</strong> 2 \u90E8\u5206\u7EC4\u6210</p><ol><li>\u8BBE\u7F6E\u52A8\u753B\u5E27</li></ol><p>\u652F\u6301\u8BBE\u7F6E Pen \u5BF9\u8C61\u7684\u4EFB\u610F\u5C5E\u6027\u53D8\u5316</p><div class="language-js"><pre><code><span class="token comment">// \u73AF\u5883\u51C6\u5907</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;\u77E9\u5F62&#39;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8BBE\u7F6E\u52A8\u753B\u5E27</span>

<span class="token comment">// \u5DE6\u53F3\u504F\u79FB20\u79FB\u52A8</span>
pen<span class="token punctuation">.</span>frames <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    duration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    x<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    duration<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
    x<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E0A\u4E0B\u504F\u79FB20\u79FB\u52A8</span>
pen<span class="token punctuation">.</span>frames <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    duration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    duration<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u5DE6\u53F3\u504F\u79FB20\u65CB\u8F6C</span>
pen<span class="token punctuation">.</span>frames <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    duration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    rotate<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    duration<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
    rotate<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u7F29\u653E</span>
pen<span class="token punctuation">.</span>frames <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    duration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    scale<span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    duration<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
    scale<span class="token operator">:</span> <span class="token number">1.2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u4E0A\u8FF0\u52A8\u753B\u6240\u5217\u5C5E\u6027\u662F\u76F8\u5BF9\u53D8\u5316</span>

<span class="token comment">// \u5176\u4ED6\u6570\u5B57\u5C5E\u6027\u5300\u901F\u6E10\u53D8</span>
<span class="token comment">// \u8FDB\u5EA6\u53D8\u5316</span>
pen<span class="token punctuation">.</span>frames <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    duration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    process<span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    duration<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
    process<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// \u975E\u6570\u5B57\u7C7B\u578B\uFF0C\u76F4\u63A5\u53D8\u5316</span>
pen<span class="token punctuation">.</span>frames <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    duration<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    duration<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u5176\u4ED6\u5C5E\u6027\u8BBE\u7F6E</span>
pen<span class="token punctuation">.</span>animateCycle <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// \u52A8\u753B\u64AD\u653E3\u6B21\u3002\u9ED8\u8BA4\u65E0\u9650\u5FAA\u73AF\u64AD\u653E</span>
pen<span class="token punctuation">.</span>keepAnimateState <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \u52A8\u753B\u64AD\u653E\uFF08\u6B21\u6570\uFF09\u7ED3\u675F\uFF0C\u662F\u5426\u56DE\u5230\u521D\u59CB\u72B6\u6001\uFF0C\u9ED8\u8BA4\u662F\u3002</span>
</code></pre></div><ol start="2"><li>\u64AD\u653E\u52A8\u753B</li></ol><div class="language-js"><pre><code>topology<span class="token punctuation">.</span><span class="token function">startAnimate</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6216</span>
topology<span class="token punctuation">.</span><span class="token function">startAnimate</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">startAnimate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>pen<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="3"><li>\u6682\u505C\u52A8\u753B</li></ol><div class="language-js"><pre><code>topology<span class="token punctuation">.</span><span class="token function">pauseAnimate</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6216</span>
topology<span class="token punctuation">.</span><span class="token function">pauseAnimate</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">pauseAnimate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>pen<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="4"><li>\u7ED3\u675F\u52A8\u753B</li></ol><div class="language-js"><pre><code>topology<span class="token punctuation">.</span><span class="token function">stopAnimate</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6216</span>
topology<span class="token punctuation">.</span><span class="token function">stopAnimate</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">stopAnimate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>pen<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u8FDE\u7EBF\u52A8\u753B" tabindex="-1">\u8FDE\u7EBF\u52A8\u753B <a class="header-anchor" href="#\u8FDE\u7EBF\u52A8\u753B" aria-hidden="true">#</a></h2><p>\u8FDE\u7EBF\u52A8\u753B\u5C5E\u4E8E<strong>\u8F68\u8FF9\u52A8\u753B</strong></p><ol><li>\u8BBE\u7F6E\u52A8\u753B\u5C5E\u6027</li></ol><div class="language-js"><pre><code><span class="token comment">// \u73AF\u5883\u51C6\u5907</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
  anchors<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8BBE\u7F6E\u52A8\u753B\u5C5E\u6027</span>
<span class="token comment">// \u52A8\u753B\u7C7B\u578B\uFF1A\u9ED8\u8BA4 - \u6C34\u6D41\uFF1B 1 - \u865A\u7EBF\u6BB5\uFF1B2 - \u5706\u70B9</span>
pen<span class="token punctuation">.</span>lineAnimateType <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// \u8F68\u8FF9\u901F\u5EA6\uFF0C\u9ED8\u8BA41</span>
pen<span class="token punctuation">.</span>animateSpan <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// \u8F68\u8FF9\u989C\u8272</span>
pen<span class="token punctuation">.</span>animateColor <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u865A\u7EBF\u6BB5\uFF0Cpen.lineAnimateType = 1 \u6709\u6548</span>
pen<span class="token punctuation">.</span>animateLineDash <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// \u53CD\u5411\u64AD\u653E</span>
pen<span class="token punctuation">.</span>animateReverse <span class="token operator">=</span> fasle<span class="token punctuation">;</span>

<span class="token comment">// \u5176\u4ED6\u5C5E\u6027\u8BBE\u7F6E</span>
pen<span class="token punctuation">.</span>animateCycle <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// \u52A8\u753B\u64AD\u653E3\u6B21\u3002\u9ED8\u8BA4\u65E0\u9650\u5FAA\u73AF\u64AD\u653E</span>
</code></pre></div><ol start="2"><li>\u64AD\u653E\u52A8\u753B</li></ol><div class="language-js"><pre><code>topology<span class="token punctuation">.</span><span class="token function">startAnimate</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6216</span>
topology<span class="token punctuation">.</span><span class="token function">startAnimate</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">startAnimate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>pen<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="3"><li>\u6682\u505C\u52A8\u753B</li></ol><div class="language-js"><pre><code>topology<span class="token punctuation">.</span><span class="token function">pauseAnimate</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6216</span>
topology<span class="token punctuation">.</span><span class="token function">pauseAnimate</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">pauseAnimate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>pen<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="4"><li>\u7ED3\u675F\u52A8\u753B</li></ol><div class="language-js"><pre><code>topology<span class="token punctuation">.</span><span class="token function">stopAnimate</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6216</span>
topology<span class="token punctuation">.</span><span class="token function">stopAnimate</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">stopAnimate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>pen<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4E0B\u4E00\u4E2A\u52A8\u753B" tabindex="-1">\u4E0B\u4E00\u4E2A\u52A8\u753B <a class="header-anchor" href="#\u4E0B\u4E00\u4E2A\u52A8\u753B" aria-hidden="true">#</a></h2><p>\u5F53\u8BBE\u7F6E <a href="http://pen.nextAnimate=nextPen.id/nextPen.tag" target="_blank" rel="noopener noreferrer">pen.nextAnimate=nextPen.id/nextPen.tag</a> \u65F6\uFF0C\u5F53\u524D pen \u64AD\u653E\u52A8\u753B\u7ED3\u675F\uFF0C\u81EA\u52A8\u64AD\u653E\u4E0B\u4E00\u4E2A\u52A8\u753B\u3002</p><p>\u624B\u52A8\u64AD\u653E\u5F53\u524D pen.nextAnimate \u7684\u52A8\u753B\uFF1Atopology.nextAnimate(pen)</p>`,26),e=[o];function c(u,l,k,i,r,m){return a(),s("div",null,e)}var b=n(t,[["render",c]]);export{g as __pageData,b as default};
