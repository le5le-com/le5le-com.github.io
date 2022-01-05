import{_ as n,c as s,o as a,a as t}from"./app.8f626b93.js";const m='{"title":"Point","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"\u51FD\u6570","slug":"\u51FD\u6570"},{"level":3,"title":"hitPoint","slug":"hitpoint"},{"level":3,"title":"rotatePoint","slug":"rotatepoint"},{"level":3,"title":"scalePoint","slug":"scalepoint"},{"level":3,"title":"translatePoint","slug":"translatepoint"},{"level":3,"title":"samePoint","slug":"samepoint"},{"level":3,"title":"distance","slug":"distance"},{"level":3,"title":"calcRotate","slug":"calcrotate"},{"level":3,"title":"facePoint","slug":"facepoint"}],"relativePath":"api/point.md","lastUpdated":1641370832815}',p={},o=t(`<h1 id="point" tabindex="-1">Point <a class="header-anchor" href="#point" aria-hidden="true">#</a></h1><p>\u70B9\u3002</p><h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> number<span class="token punctuation">;</span>
  y<span class="token operator">:</span> number<span class="token punctuation">;</span>
  radius<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>  <span class="token comment">// \u9F20\u6807\u547D\u4E2D\u70B9\u7684\u534A\u5F84\uFF0C\u9ED8\u8BA44</span>
  color<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  background<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  id<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  penId<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>     <span class="token comment">// \uFF08\u951A\uFF09\u70B9\u6240\u5C5Epen\u7684id</span>
  connectTo<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span> <span class="token comment">// \u4F5C\u4E3A\u8FDE\u7EBF\u4E0A\u7684\u70B9\u65F6\uFF0C\u8FDE\u63A5pen\u7684id</span>
  anchorId<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>  <span class="token comment">// \u4F5C\u4E3A\u8FDE\u7EBF\u4E0A\u7684\u70B9\u65F6\uFF0C\u8FDE\u63A5pen\u7684\u951A\u70B9id</span>
  twoWay<span class="token operator">?</span><span class="token operator">:</span> TwoWay<span class="token punctuation">;</span>    <span class="token comment">// \u4F5C\u4E3A\u951A\u70B9\u65F6\uFF0C\u5141\u8BB8\u8FDE\u7EBF\u7684\u65B9\u5411</span>
  prev<span class="token operator">?</span><span class="token operator">:</span> Point<span class="token punctuation">;</span>       <span class="token comment">// \u4F5C\u4E3A\u8FDE\u7EBF\u4E0A\u7684\u70B9\u65F6\uFF0C\u524D\u4E00\u4E2Acurve\u7684\u63A7\u5236\u70B92\u3002\u53EF\u4EE5\u4E3A\u7A7A\uFF0C\u8868\u793A\u524D\u4E00\u4E2Acurve\u53EA\u6709\u4E00\u4E2A\u63A7\u5236\u70B9\uFF0C\u6216\u4E3A\u76F4\u7EBF</span>
  next<span class="token operator">?</span><span class="token operator">:</span> Point<span class="token punctuation">;</span>       <span class="token comment">// \u4F5C\u4E3A\u8FDE\u7EBF\u4E0A\u7684\u70B9\u65F6\uFF0C\u5F53\u524Dcurve\u7684\u63A7\u5236\u70B91\u3002\u53EF\u4EE5\u4E3A\u7A7A\uFF0C\u8868\u793A\u524D\u4E00\u4E2Acurve\u53EA\u6709\u4E00\u4E2A\u63A7\u5236\u70B9\uFF0C\u6216\u4E3A\u76F4\u7EBF</span>
  prevNextType<span class="token operator">?</span><span class="token operator">:</span> PrevNextType<span class="token punctuation">;</span>  <span class="token comment">// \u5F53\u5B58\u5728prev\u548Cnext\u65F6\uFF0C\u624B\u67C4\u7C7B\u578B\uFF1A\u955C\u50CF\u3001\u5BF9\u79F0\u3001\u81EA\u7531</span>
  start<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>       <span class="token comment">// \u662F\u5426\u8FDE\u7EBF\u8D77\u70B9\u3002\u81EA\u52A8\u8BA1\u7B97</span>
  lineLength<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>   <span class="token comment">// \u8F85\u52A9\u53D8\u91CF</span>
  step<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>         <span class="token comment">// \u8F85\u52A9\u53D8\u91CF</span>
  curvePoints<span class="token operator">?</span><span class="token operator">:</span> Point<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u8F85\u52A9\u53D8\u91CF</span>
  rotate<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>       <span class="token comment">// \u8F85\u52A9\u53D8\u91CF</span>
  hidden<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>      <span class="token comment">// \u662F\u5426\u9690\u85CF\uFF0C=== false \u9690\u85CF</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> PrevNextType <span class="token punctuation">{</span>
  Mirror<span class="token punctuation">,</span>
  Bilateral<span class="token punctuation">,</span>
  Free<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">enum</span> TwoWay <span class="token punctuation">{</span>
  Default<span class="token punctuation">,</span>
  In<span class="token punctuation">,</span>
  Out<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u51FD\u6570" tabindex="-1">\u51FD\u6570 <a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u7684\u51FD\u6570\u4E3A\u76F8\u5173\u51FD\u6570</p><h3 id="hitpoint" tabindex="-1">hitPoint <a class="header-anchor" href="#hitpoint" aria-hidden="true">#</a></h3><p>\u9F20\u6807\u662F\u5426\u547D\u4E2D\u70B9</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><p>pt: Point<br> \u9F20\u6807</p></li><li><p>target: Point<br> \u76EE\u6807\u70B9</p></li><li><p>radius<br> \u547D\u4E2D\u534A\u5F84\u3002\u9ED8\u8BA4 5</p></li></ul><p><strong>\u8FD4\u56DE\uFF1A</strong><br> boolean</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> hitPoint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/core&#39;</span><span class="token punctuation">;</span>

<span class="token function">hitPoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// return true</span>
</code></pre></div><h3 id="rotatepoint" tabindex="-1">rotatePoint <a class="header-anchor" href="#rotatepoint" aria-hidden="true">#</a></h3><p>\u65CB\u8F6C\u70B9</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><p>pt: Point<br> \u70B9</p></li><li><p>angle: number<br> \u65CB\u8F6C\u89D2\u5EA6\u3002\u5355\u4F4D\u5EA6 \xB0</p></li><li><p>center: Point<br> \u65CB\u8F6C\u4E2D\u5FC3\u70B9</p></li></ul><p><strong>\u8FD4\u56DE\uFF1A</strong><br> void</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> rotatePoint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/core&#39;</span><span class="token punctuation">;</span>

<span class="token function">rotatePoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="scalepoint" tabindex="-1">scalePoint <a class="header-anchor" href="#scalepoint" aria-hidden="true">#</a></h3><p>\u53C2\u8003\u4E2D\u5FC3\u7684 center\uFF0C\u7F29\u653E\u70B9</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><p>pt: Point<br> \u70B9</p></li><li><p>scale: number<br> \u7F29\u653E\u6BD4\u4F8B</p></li><li><p>center: Point<br> \u53C2\u8003\u4E2D\u5FC3\u70B9</p></li></ul><p><strong>\u8FD4\u56DE\uFF1A</strong><br> void</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> scalePoint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/core&#39;</span><span class="token punctuation">;</span>

<span class="token function">scalePoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1.2</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="translatepoint" tabindex="-1">translatePoint <a class="header-anchor" href="#translatepoint" aria-hidden="true">#</a></h3><p>\u5E73\u79FB\u70B9</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><p>pt: Point<br> \u70B9</p></li><li><p>x: number</p></li><li><p>y: number</p></li></ul><p><strong>\u8FD4\u56DE\uFF1A</strong><br> void</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> translatePoint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/core&#39;</span><span class="token punctuation">;</span>

<span class="token function">translatePoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="samepoint" tabindex="-1">samePoint <a class="header-anchor" href="#samepoint" aria-hidden="true">#</a></h3><p>\u4E24\u4E2A\u70B9\u662F\u5426\u76F8\u540C\u3002\u4F9D\u636E\uFF1AanchorId \u548C connectTo \u76F8\u540C</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><p>pt1: Point<br> \u70B9</p></li><li><p>pt2: Point<br> \u70B9</p></li></ul><p><strong>\u8FD4\u56DE\uFF1A</strong><br> boolean</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> samePoint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/core&#39;</span><span class="token punctuation">;</span>

<span class="token function">samePoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span> anchorId<span class="token punctuation">,</span> connectTo <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> anchorId<span class="token punctuation">,</span> connectTo <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="distance" tabindex="-1">distance <a class="header-anchor" href="#distance" aria-hidden="true">#</a></h3><p>\u4E24\u70B9\u8DDD\u79BB</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><p>pt1: Point<br> \u70B9</p></li><li><p>pt2: Point<br> \u70B9</p></li></ul><p><strong>\u8FD4\u56DE\uFF1A</strong><br> number</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> distance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/core&#39;</span><span class="token punctuation">;</span>

<span class="token function">distance</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="calcrotate" tabindex="-1">calcRotate <a class="header-anchor" href="#calcrotate" aria-hidden="true">#</a></h3><p>\u4E24\u70B9\u504F\u79FB\u65CB\u8F6C\u89D2\u5EA6</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><p>pt1: Point<br> \u70B9</p></li><li><p>pt2: Point<br> \u70B9</p></li></ul><p><strong>\u8FD4\u56DE\uFF1A</strong><br> number</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> calcRotate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/core&#39;</span><span class="token punctuation">;</span>

<span class="token function">calcRotate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="facepoint" tabindex="-1">facePoint <a class="header-anchor" href="#facepoint" aria-hidden="true">#</a></h3><p>\u70B9 source \u76F8\u5BF9\u70B9 target \u7684\u4E0A\u4E0B\u5DE6\u53F3\u65B9\u5411</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><p>source: Point<br> \u70B9</p></li><li><p>target: Point<br> \u70B9</p></li></ul><p><strong>\u8FD4\u56DE\uFF1A</strong><br> Direction\uFF1A\u65B9\u5411</p><div class="language-js"><pre><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  None <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
  Up<span class="token punctuation">,</span>
  Right<span class="token punctuation">,</span>
  Bottom<span class="token punctuation">,</span>
  Left<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> calcRotate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/core&#39;</span><span class="token punctuation">;</span>

<span class="token function">facePoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,63),e=[o];function c(l,r,i,u,k,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};