import{_ as n,c as a,o as s,a as p}from"./app.4d5ae0f8.js";const m='{"title":"\u81EA\u5B9A\u4E49\u56FE\u5F62\u5E93","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u5B9A\u4E49 Path2D \u56FE\u5F62\u5E93","slug":"\u81EA\u5B9A\u4E49-path2d-\u56FE\u5F62\u5E93"},{"level":2,"title":"\u81EA\u5B9A\u4E49 Canvas Context2D \u56FE\u5F62\u5E93","slug":"\u81EA\u5B9A\u4E49-canvas-context2d-\u56FE\u5F62\u5E93"},{"level":2,"title":"\u5176\u4ED6","slug":"\u5176\u4ED6"}],"relativePath":"tutorial/make-component.md","lastUpdated":1642053803784}',t={},o=p(`<h1 id="\u81EA\u5B9A\u4E49\u56FE\u5F62\u5E93" tabindex="-1">\u81EA\u5B9A\u4E49\u56FE\u5F62\u5E93 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u56FE\u5F62\u5E93" aria-hidden="true">#</a></h1><p>topology \u56FE\u5F62\u5E93\u662F\u4E00\u79CD\u53EF\u6269\u5C55\u3001\u5F00\u653E\u6027\u7684\u56FE\u5F62\u5E93\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u4EFB\u610F\u5B9A\u5236\u5F00\u53D1\u3002</p><p>\u5176\u4E2D\uFF0C\u56FE\u5F62\u5E93\u652F\u6301 Path2D \u7ED8\u753B\u548C CanvasRenderingContext2D \u4E24\u79CD\u65B9\u5F0F\uFF1A<br> \u7B80\u5355\u57FA\u672C\u56FE\u5F62\u63A8\u8350\u4F7F\u7528 Path2D\uFF0C\u6027\u80FD\u7565\u9AD8\uFF1B<br> \u590D\u6742\u573A\u666F\u9002\u5408\u7528 CanvasRenderingContext2D</p><h2 id="\u81EA\u5B9A\u4E49-path2d-\u56FE\u5F62\u5E93" tabindex="-1">\u81EA\u5B9A\u4E49 Path2D \u56FE\u5F62\u5E93 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49-path2d-\u56FE\u5F62\u5E93" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// 1. \u7F16\u5199\u56FE\u5F62\u7ED8\u753B\u51FD\u6570</span>
<span class="token comment">// \u5176\u4E2D\uFF0Ccalculative.worldRect\u4E3Acanvas\u7684\u4E16\u754C\u5750\u6807\u3002\u66F4\u591A\u4FE1\u606F\uFF0C\u53C2\u8003 \u201C\u67B6\u6784\u201D - \u201C\u6982\u8981\u201D \u548C Pen \u76F8\u5173\u6587\u6863</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">triangle</span><span class="token punctuation">(</span><span class="token parameter">pen<span class="token operator">:</span> Pen<span class="token punctuation">,</span> path<span class="token operator">?</span><span class="token operator">:</span> CanvasRenderingContext2D <span class="token operator">|</span> Path2D</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    path <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Path2D</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  path<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>x <span class="token operator">+</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
  path<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>
    pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>x <span class="token operator">+</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>width<span class="token punctuation">,</span>
    pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>y <span class="token operator">+</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>height
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  path<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>x<span class="token punctuation">,</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>y <span class="token operator">+</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
  path<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>x <span class="token operator">+</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>

  path<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> path<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. \u5982\u679C\u9700\u8981\uFF0C\u7F16\u5199\u951A\u70B9\u51FD\u6570\u3002\u901A\u5E38\uFF0C\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u951A\u70B9\uFF0C\u7136\u540E\u901A\u8FC7\u5FEB\u6377\u952E\u52A8\u6001\u6DFB\u52A0\u951A\u70B9</span>
<span class="token comment">// \u6CE8\u610F\uFF0C\u951A\u70B9\u5DE6\u8FB9\u4E3A\u76F8\u5BF9\u5BBD\u9AD8\u7684\u767E\u5206\u6BD4\u5C0F\u6570\uFF080-1\u4E4B\u95F4\u7684\u5C0F\u6570\uFF09</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">triangleAnchors</span><span class="token punctuation">(</span><span class="token parameter">pen<span class="token operator">:</span> Pen</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> anchors<span class="token operator">:</span> Point<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  anchors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
    penId<span class="token operator">:</span> pen<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    x<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  anchors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
    penId<span class="token operator">:</span> pen<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  anchors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
    penId<span class="token operator">:</span> pen<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  pen<span class="token punctuation">.</span>anchors <span class="token operator">=</span> anchors<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. \u6CE8\u518C\u56FE\u5F62</span>
<span class="token comment">// \u53C2\u6570 {key: fn}\u3002key\u4E3A\u56FE\u5F62\u552F\u4E00name\uFF0C\u5426\u5219\u8986\u76D6\u539F\u6765\u56FE\u5F62\uFF0Cfn\u4E3A\u76F8\u5173\u51FD\u6570</span>
topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">{</span> triangle <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">registerAnchors</span><span class="token punctuation">(</span><span class="token punctuation">{</span> triangle<span class="token operator">:</span> triangleAnchors <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4. \u5F00\u59CB\u4F7F\u7528</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;triangle&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;\u4E09\u89D2\u5F62&#39;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u81EA\u5B9A\u4E49-canvas-context2d-\u56FE\u5F62\u5E93" tabindex="-1">\u81EA\u5B9A\u4E49 Canvas Context2D \u56FE\u5F62\u5E93 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49-canvas-context2d-\u56FE\u5F62\u5E93" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// 1. \u7F16\u5199\u56FE\u5F62\u7ED8\u753B\u51FD\u6570</span>
<span class="token comment">// \u5176\u4E2D\uFF0Ccalculative.worldRect\u4E3Acanvas\u7684\u4E16\u754C\u5750\u6807\u3002\u66F4\u591A\u4FE1\u606F\uFF0C\u53C2\u8003 \u201C\u67B6\u6784\u201D - \u201C\u6982\u8981\u201D \u548C Pen \u76F8\u5173\u6587\u6863</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">triangle</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token operator">:</span> CanvasRenderingContext2D<span class="token punctuation">,</span> pen<span class="token operator">:</span> Pen</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>x <span class="token operator">+</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>
    pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>x <span class="token operator">+</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>width<span class="token punctuation">,</span>
    pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>y <span class="token operator">+</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>height
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>x<span class="token punctuation">,</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>y <span class="token operator">+</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span>pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>x <span class="token operator">+</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> pen<span class="token punctuation">.</span>calculative<span class="token punctuation">.</span>worldRect<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>

  ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2. \u5982\u679C\u9700\u8981\uFF0C\u7F16\u5199\u951A\u70B9\u51FD\u6570\u3002\u901A\u5E38\uFF0C\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u951A\u70B9\uFF0C\u7136\u540E\u901A\u8FC7\u5FEB\u6377\u952E\u52A8\u6001\u6DFB\u52A0\u951A\u70B9</span>
<span class="token comment">// \u6CE8\u610F\uFF0C\u951A\u70B9\u5DE6\u8FB9\u4E3A\u76F8\u5BF9\u5BBD\u9AD8\u7684\u767E\u5206\u6BD4\u5C0F\u6570\uFF080-1\u4E4B\u95F4\u7684\u5C0F\u6570\uFF09</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">triangleAnchors</span><span class="token punctuation">(</span><span class="token parameter">pen<span class="token operator">:</span> Pen</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> anchors<span class="token operator">:</span> Point<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  anchors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
    penId<span class="token operator">:</span> pen<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    x<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  anchors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
    penId<span class="token operator">:</span> pen<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  anchors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
    penId<span class="token operator">:</span> pen<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  pen<span class="token punctuation">.</span>anchors <span class="token operator">=</span> anchors<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 3. \u6CE8\u518C\u56FE\u5F62</span>
<span class="token comment">// \u53C2\u6570 {key: fn}\u3002key\u4E3A\u56FE\u5F62\u552F\u4E00name\uFF0C\u5426\u5219\u8986\u76D6\u539F\u6765\u56FE\u5F62\uFF0Cfn\u4E3A\u76F8\u5173\u51FD\u6570</span>
topology<span class="token punctuation">.</span><span class="token function">registerCanvasDraw</span><span class="token punctuation">(</span><span class="token punctuation">{</span> triangle <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">registerAnchors</span><span class="token punctuation">(</span><span class="token punctuation">{</span> triangle<span class="token operator">:</span> triangleAnchors <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4. \u5F00\u59CB\u4F7F\u7528</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;triangle&#39;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&#39;\u4E09\u89D2\u5F62&#39;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5176\u4ED6" tabindex="-1">\u5176\u4ED6 <a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a></h2><p>\u6587\u5B57\u3001\u989C\u8272\u3001\u5927\u5C0F\u3001\u52A8\u753B\u3001\u4E8B\u4EF6\u7B49\u5C5E\u6027\u662F\u901A\u7528\u7EE7\u627F\u7684\u5C5E\u6027\uFF0C\u9ED8\u8BA4\u4E0D\u9700\u8981\u5355\u72EC\u8BBE\u7F6E\u3002\u5177\u4F53\u53EF\u53C2\u8003 <a href="./../api/pen.html">pen</a></p>`,9),c=[o];function e(u,l,k,i,r,d){return s(),a("div",null,c)}var v=n(t,[["render",e]]);export{m as __pageData,v as default};
