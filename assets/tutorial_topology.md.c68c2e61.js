import{_ as t,c as a,o as n,a as d}from"./app.3885cfa9.js";const g='{"title":"\u753B\u5E03","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u753B\u5E03","slug":"\u521B\u5EFA\u753B\u5E03"},{"level":2,"title":"\u62D6\u62FD\u56FE\u5F62\u5E93","slug":"\u62D6\u62FD\u56FE\u5F62\u5E93"},{"level":2,"title":"Options \u9009\u9879","slug":"options-\u9009\u9879"},{"level":2,"title":"\u6587\u4EF6\u6570\u636E","slug":"\u6587\u4EF6\u6570\u636E"},{"level":2,"title":"\u6210\u5458\u5C5E\u6027","slug":"\u6210\u5458\u5C5E\u6027"},{"level":3,"title":"TopologyStore","slug":"topologystore"},{"level":2,"title":"Function \u51FD\u6570","slug":"function-\u51FD\u6570"}],"relativePath":"tutorial/topology.md","lastUpdated":1640085450843}',e={},s=d(`<h1 id="\u753B\u5E03" tabindex="-1">\u753B\u5E03 <a class="header-anchor" href="#\u753B\u5E03" aria-hidden="true">#</a></h1><p>\u753B\u5E03\u662F topology \u7684\u6838\u5FC3\uFF0C\u6240\u6709\u5C55\u793A\u548C\u4EA4\u4E92\u90FD\u5728\u753B\u5E03\u4E0A\u5448\u73B0\u3002</p><h2 id="\u521B\u5EFA\u753B\u5E03" tabindex="-1">\u521B\u5EFA\u753B\u5E03 <a class="header-anchor" href="#\u521B\u5EFA\u753B\u5E03" aria-hidden="true">#</a></h2><ol><li>\u6307\u5B9A html \u7684\u7236 Element</li></ol><div class="language-html"><pre><code>// \u63D0\u524D\u8BBE\u7F6E\u597Dcss\u6837\u5F0F\uFF0C\u7279\u522B\u662F\u5927\u5C0F\u4F4D\u7F6E
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>topology<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol start="2"><li>\u5728 js \u4E2D\u521B\u5EFA\u5B9E\u4F8B</li></ol><div class="language-js"><pre><code><span class="token comment">// &#39;topology&#39;\u4E3Aid\u6216Element\u5B9E\u4F8B\uFF1Boptions\u53EF\u9009</span>
<span class="token keyword">var</span> topology <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Topology</span><span class="token punctuation">(</span><span class="token string">&quot;topology&quot;</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6838\u5FC3\u5E93\u5C06\u81EA\u52A8\u6DFB\u52A0</span>
<span class="token comment">// window.topology = topology;</span>
</code></pre></div><ol start="3"><li>\u6839\u636E\u4E1A\u52A1\uFF0C\u8C03\u7528 topology api \u5F00\u59CB\u4F7F\u7528</li></ol><div class="language-js"><pre><code><span class="token comment">// \u4F8B\u5982\uFF1A\u6253\u5F00\u4E00\u4E2Atopology\u683C\u5F0F\u6587\u4EF6</span>
topology<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u83B7\u53D6\u6587\u4EF6\u6570\u636E</span>
<span class="token keyword">const</span> json <span class="token operator">=</span> topology<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u62D6\u62FD\u56FE\u5F62\u5E93" tabindex="-1">\u62D6\u62FD\u56FE\u5F62\u5E93 <a class="header-anchor" href="#\u62D6\u62FD\u56FE\u5F62\u5E93" aria-hidden="true">#</a></h2><p><strong>1. \u521B\u5EFA\u56FE\u5F62\u5E93\u5DE5\u5177\u680F</strong><br> \u521B\u5EFA\u56FE\u5F62\u5E93\u5DE5\u5177\u680F html \u5143\u7D20\uFF0C\u7ED1\u5B9A\u62D6\u62FD\u4E8B\u4EF6\u6216 touch \u4E8B\u4EF6</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tools<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
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
  name<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u77E9\u5F62&quot;</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function-variable function">onDragstart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token string">&quot;Text&quot;</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u652F\u6301\u9F20\u6807\u5355\u51FB\u6DFB\u52A0\u56FE\u5F62</span>
<span class="token function-variable function">onTouchstart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  topology<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>addCaches <span class="token operator">=</span> <span class="token punctuation">[</span>pen<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="options-\u9009\u9879" tabindex="-1">Options \u9009\u9879 <a class="header-anchor" href="#options-\u9009\u9879" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>color</td><td>string</td><td>\u753B\u7B14\u9ED8\u8BA4\u989C\u8272\uFF0C\u5982\u679C\u6CA1\u7279\u522B\u8BBE\u7F6E\uFF0C\u989C\u8272\u5305\u62EC\uFF1A\u6587\u5B57\u548C\u8FB9\u6846</td></tr><tr><td>activeColor</td><td>string</td><td>\u753B\u7B14\u9009\u4E2D\u989C\u8272</td></tr><tr><td>activeBackground</td><td>string</td><td>\u753B\u7B14\u9009\u4E2D\u80CC\u666F\u989C\u8272</td></tr><tr><td>hoverColor</td><td>string</td><td>\u9F20\u6807\u79FB\u52A8\u5230\u753B\u7B14\u4E0A\u7684\u989C\u8272</td></tr><tr><td>hoverBackground</td><td>string</td><td>\u9F20\u6807\u79FB\u52A8\u5230\u753B\u7B14\u4E0A\u7684\u80CC\u666F\u989C\u8272</td></tr><tr><td>anchorColor</td><td>string</td><td>\u951A\u70B9\u989C\u8272</td></tr><tr><td>anchorRadius</td><td>number</td><td>\u951A\u70B9\u534A\u5F84</td></tr><tr><td>anchorBackground</td><td>string</td><td>\u951A\u70B9\u80CC\u666F\u989C\u8272</td></tr><tr><td>dockColor</td><td>string</td><td>\u8F85\u52A9\u7EBF\u989C\u8272</td></tr><tr><td>dragColor</td><td>string</td><td>\u9F20\u6807\u6846\u9009\u591A\u4E2A\u8282\u70B9\u65F6\uFF0C\u8FB9\u6846\u989C\u8272</td></tr><tr><td>animateColor</td><td>string</td><td>\u8FDE\u7EBF\u52A8\u753B\u989C\u8272</td></tr><tr><td>textColor</td><td>string</td><td>\u6587\u5B57\u989C\u8272</td></tr><tr><td>fontFamily</td><td>string</td><td>\u6587\u5B57\u5B57\u4F53</td></tr><tr><td>fontSize</td><td>number</td><td>\u6587\u5B57\u5927\u5C0F</td></tr><tr><td>lineHeight</td><td>number</td><td>\u6587\u5B57\u884C\u9AD8</td></tr><tr><td>textAlign</td><td>string</td><td>\u6587\u5B57\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</td></tr><tr><td>textBaseline</td><td>string</td><td>\u6587\u5B57\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F</td></tr><tr><td>rotateCursor</td><td>string</td><td>\u65CB\u8F6C\u63A7\u5236\u70B9\u7684\u9F20\u6807\u6837\u5F0F</td></tr><tr><td>hoverCursor</td><td>string</td><td>\u9F20\u6807\u7ECF\u8FC7\u753B\u7B14\u7684\u6837\u5F0F</td></tr><tr><td>disableInput</td><td>boolean</td><td>\u7981\u7528\u53CC\u51FB\u5F39\u51FA\u8F93\u5165\u6846</td></tr><tr><td>disableRotate</td><td>boolean</td><td>\u7981\u6B62\u65CB\u8F6C</td></tr><tr><td>disableAnchor</td><td>boolean</td><td>\u7981\u6B62\u8BBE\u7F6E\u951A\u70B9</td></tr><tr><td>alwaysAnchor</td><td>boolean</td><td>\u9ED8\u8BA4\u663E\u793A\u951A\u70B9</td></tr><tr><td>autoAnchor</td><td>boolean</td><td>\u8FDE\u7EBF\u65F6\uFF0C\u81EA\u52A8\u9009\u4E2D\u8282\u70B9\u951A\u70B9</td></tr><tr><td>disableEmptyLine</td><td>boolean</td><td>\u7981\u6B62\u5B58\u5728\u4E24\u7AEF\u5173\u8054\u7F3A\u5C11\u7684\u8FDE\u7EBF</td></tr><tr><td>disableRepeatLine</td><td>boolean</td><td>\u7981\u6B62\u5B58\u5728\u5173\u8054\u91CD\u590D\u7684\u8FDE\u7EBF</td></tr><tr><td>disableScale</td><td>boolean</td><td>\u7981\u6B62\u753B\u5E03\u7F29\u653E</td></tr><tr><td>disableTranslate</td><td>boolean</td><td>\u7981\u6B62\u753B\u5E03\u79FB\u52A8</td></tr><tr><td>disableDockLine</td><td>boolean</td><td>\u53D6\u6D88\u8F85\u52A9\u7EBF</td></tr><tr><td>rightMouseTranslate</td><td>boolean</td><td>\u7981\u6B62\u53F3\u952E\u62D6\u62FD\u753B\u5E03</td></tr><tr><td>minScale</td><td>number</td><td>\u753B\u5E03\u6700\u5C0F\u7F29\u653E\u6BD4\u4F8B</td></tr><tr><td>maxScale</td><td>number</td><td>\u753B\u5E03\u6700\u5927\u7F29\u653E\u6BD4\u4F8B</td></tr><tr><td>keydown</td><td>KeydownType</td><td>\u5FEB\u6377\u952E\u76D1\u542C\u5BF9\u8C61\uFF0C\u9ED8\u8BA4 canvas</td></tr><tr><td>grid</td><td>boolean</td><td>\u662F\u5426\u663E\u793A\u7F51\u683C</td></tr><tr><td>gridColor</td><td>string</td><td>\u7F51\u683C\u989C\u8272</td></tr><tr><td>gridSize</td><td>number</td><td>\u7F51\u683C\u5927\u5C0F</td></tr><tr><td>rule</td><td>boolean</td><td>\u662F\u5426\u663E\u793A\u6807\u5C3A</td></tr><tr><td>ruleColor</td><td>string</td><td>\u6807\u5C3A\u989C\u8272</td></tr><tr><td>drawingLineName</td><td>string</td><td>\u9ED8\u8BA4\u8FDE\u7EBF\u7C7B\u578B\u540D\u79F0</td></tr><tr><td>fromArrow</td><td>string</td><td>\u9ED8\u8BA4\u8FDE\u7EBF\u8D77\u59CB\u7BAD\u5934</td></tr><tr><td>toArrow</td><td>string</td><td>\u9ED8\u8BA4\u8FDE\u7EBF\u7EC8\u70B9\u7BAD\u5934</td></tr><tr><td>autoPolyline</td><td>boolean</td><td>\u662F\u5426\u81EA\u52A8\u8BA1\u7B97\u591A\u7EBF\u6BB5\u951A\u70B9</td></tr><tr><td>interval</td><td>number</td><td>\u7ED8\u753B\u5E27\u65F6\u957F</td></tr><tr><td>animateInterval</td><td>number</td><td>\u52A8\u753B\u5E27\u65F6\u957F</td></tr><tr><td>dragAllIn</td><td>boolean</td><td>\u6846\u9009\u753B\u7B14\u65F6\uFF0C\u662F\u5426\u9700\u8981\u5168\u90E8\u5728\u6846\u9009\u533A\u57DF\u5185</td></tr><tr><td>scroll</td><td>boolean</td><td>\u9ED8\u8BA4\u662F\u5426\u663E\u793A\u6EDA\u52A8\u6761\u3002\u4E0E\u9ED8\u8BA4\u7F29\u653E\u4E92\u65A5</td></tr></tbody></table><h2 id="\u6587\u4EF6\u6570\u636E" tabindex="-1">\u6587\u4EF6\u6570\u636E <a class="header-anchor" href="#\u6587\u4EF6\u6570\u636E" aria-hidden="true">#</a></h2><p>\u901A\u8FC7 topology.data()\u51FD\u6570\u83B7\u53D6\uFF0C\u8FD4\u56DE\u6570\u636E\u683C\u5F0F\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>color</td><td>string</td><td>\u753B\u7B14\u9ED8\u8BA4\u989C\u8272\uFF0C\u5982\u679C\u6CA1\u7279\u522B\u8BBE\u7F6E\uFF0C\u989C\u8272\u5305\u62EC\uFF1A\u6587\u5B57\u548C\u8FB9\u6846</td></tr><tr><td>activeColor</td><td>string</td><td>\u753B\u7B14\u9009\u4E2D\u989C\u8272</td></tr><tr><td>activeBackground</td><td>string</td><td>\u753B\u7B14\u9009\u4E2D\u80CC\u666F\u989C\u8272</td></tr><tr><td>pens</td><td><a href="/tutorial/pen.html">Pen[]</a></td><td>\u753B\u7B14\u6570\u7EC4</td></tr><tr><td>x</td><td>number</td><td>\u753B\u5E03 x \u504F\u79FB</td></tr><tr><td>y</td><td>number</td><td>\u753B\u5E03 y \u504F\u79FB</td></tr><tr><td>scale</td><td>number</td><td>\u753B\u5E03\u7F29\u653E\u6BD4\u4F8B</td></tr><tr><td>origin</td><td>Point</td><td>\u753B\u5E03\u539F\u70B9</td></tr><tr><td>center</td><td>Point</td><td>\u753B\u5E03\u7F29\u653E\u4E2D\u5FC3\u70B9</td></tr><tr><td>locked</td><td><a href="/api/pen.html#locked">LockState</a></td><td>\u753B\u5E03\u9501\u5B9A</td></tr><tr><td>websocket</td><td>string</td><td>websocket \u901A\u4FE1\u5730\u5740</td></tr><tr><td>mqtt</td><td>string</td><td>mqtt \u901A\u4FE1\u5730\u5740</td></tr><tr><td>mqttTopics</td><td>string</td><td>mqtt \u8BA2\u9605\u4E3B\u9898</td></tr><tr><td>background</td><td>string</td><td>\u753B\u5E03\u80CC\u666F\u989C\u8272</td></tr><tr><td>socketCbJs</td><td>string</td><td>\u6D88\u606F\u901A\u4FE1\u56DE\u8C03\u51FD\u6570 js \u4EE3\u7801</td></tr><tr><td>socketCbFn</td><td>Function</td><td>\u6D88\u606F\u901A\u4FE1\u56DE\u8C03\u51FD\u6570\u540D</td></tr><tr><td>initJs</td><td>string</td><td>\u6253\u5F00\u56FE\u7EB8\u540E\uFF0C\u6267\u884C\u7684\u521D\u59CB\u811A\u672C</td></tr><tr><td>grid</td><td>boolean</td><td>\u662F\u5426\u663E\u793A\u7F51\u683C</td></tr><tr><td>gridColor</td><td>string</td><td>\u7F51\u683C\u989C\u8272</td></tr><tr><td>gridSize</td><td>number</td><td>\u7F51\u683C\u5927\u5C0F</td></tr><tr><td>rule</td><td>boolean</td><td>\u662F\u5426\u663E\u793A\u6807\u5C3A</td></tr><tr><td>ruleColor</td><td>string</td><td>\u6807\u5C3A\u989C\u8272</td></tr><tr><td>fromArrow</td><td>string</td><td>\u9ED8\u8BA4\u8D77\u59CB\u7BAD\u5934</td></tr><tr><td>toArrow</td><td>string</td><td>\u9ED8\u8BA4\u7EC8\u70B9\u7BAD\u5934</td></tr><tr><td>lineWidth</td><td>number</td><td>\u9ED8\u8BA4\u7EBF\u5BBD</td></tr></tbody></table><h2 id="\u6210\u5458\u5C5E\u6027" tabindex="-1">\u6210\u5458\u5C5E\u6027 <a class="header-anchor" href="#\u6210\u5458\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>canvas</td><td><a href="/api/canvas.html">Canvas</a></td><td>\u7ED8\u753B\u753B\u677F</td></tr><tr><td>store</td><td><a href="#topologystore">TopologyStore</a></td><td>\u7ED8\u753B\u6570\u636E\u3002\u5305\u62EC\u6587\u4EF6\u6570\u636E\u548C\u5404\u79CD\u72B6\u6001\u6570\u636E\u7B49</td></tr><tr><td>websocket</td><td>WebSocket</td><td>\u539F\u751F WebSocket \u5BA2\u6237\u7AEF\u3002\u4EC5\u8FDE\u63A5\u6210\u529F\u624D\u6709\u5B9E\u4F8B</td></tr><tr><td>mqttClient</td><td>Mqtt.Client</td><td>mqtt.js \u901A\u4FE1\u5BA2\u6237\u7AEF</td></tr></tbody></table><h3 id="topologystore" tabindex="-1">TopologyStore <a class="header-anchor" href="#topologystore" aria-hidden="true">#</a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>id</td><td>string</td><td>\u5F53\u524D\u5F15\u64CE\u5B9E\u4F8B id\u3002\u4E00\u4E2A\u9875\u9762\u53EF\u4EE5\u6709\u591A\u4E2A\u53EF\u89C6\u5316\u5F15\u64CE\u5B9E\u4F8B</td></tr><tr><td>data</td><td>TopologyData</td><td>\u7ED8\u753B\uFF08\u56FE\u7EB8\uFF09\u6570\u636E\u3002\u5305\u542B\u81EA\u52A8\u8BA1\u7B97\u7684\u4E34\u65F6\u53D8\u91CF</td></tr><tr><td>pens</td><td>Object\uFF08id: pen\uFF09</td><td>\u753B\u7B14 map\u3002\u65B9\u4FBF\u68C0\u7D22 pen</td></tr><tr><td>active</td><td>Pen[]</td><td>\u9009\u4E2D\u7684\u753B\u7B14\u3002\u6570\u7EC4</td></tr><tr><td>hover</td><td>Pen</td><td>\u9F20\u6807\u7ECF\u8FC7\u6D3B\u52A8\u7684\u753B\u7B14\u3002\u5355 Pen</td></tr><tr><td>activeAnchor</td><td>Point</td><td>\u9009\u4E2D\u7684\u951A\u70B9</td></tr><tr><td>hoverAnchor</td><td>Point</td><td>\u9F20\u6807\u7ECF\u8FC7\u6D3B\u52A8\u7684\u951A\u70B9</td></tr><tr><td>animates</td><td>Set</td><td>\u6B63\u5728\u64AD\u653E\u52A8\u753B\u7684 pen</td></tr><tr><td>dpiRatio</td><td>number</td><td>\u9AD8\u6E05\u5C4F\u6BD4\u4F8B\u3002\u4E00\u822C\u7528\u6237\u4E0D\u7528\u4FEE\u6539\u6B64\u503C</td></tr><tr><td>clipboard</td><td>Pen[]</td><td>\u526A\u8D34\u677F\u5185\u5BB9</td></tr><tr><td>histories</td><td>EditAction[]</td><td>\u64A4\u6D88\u91CD\u505A\u5185\u5BB9</td></tr><tr><td>historyIndex</td><td>number</td><td>\u64A4\u6D88\u91CD\u505A\u6E38\u6807</td></tr><tr><td>options</td><td><a href="#options-%E9%80%89%E9%A1%B9">Options</a></td><td>\u53EF\u89C6\u5316\u5F15\u64CE\u9009\u9879</td></tr></tbody></table><h2 id="function-\u51FD\u6570" tabindex="-1">Function \u51FD\u6570 <a class="header-anchor" href="#function-\u51FD\u6570" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><a href="/api/core.html#constructor">constructor</a></td><td>\u53EF\u89C6\u5316\u5F15\u64CE\u6784\u9020\u51FD\u6570</td></tr><tr><td><a href="/api/core.html#setOptions">setOptions</a></td><td>\u8BBE\u7F6E\u5F15\u64CE\u9009\u9879</td></tr><tr><td><a href="/api/core.html#getOptions">getOptions</a></td><td>\u83B7\u53D6\u5F15\u64CE\u9009\u9879</td></tr><tr><td><a href="/api/core.html#resize">resize</a></td><td>\u91CD\u7F6E\u753B\u5E03\u5927\u5C0F</td></tr><tr><td><a href="/api/core.html#addPen">addPen</a></td><td>\u6DFB\u52A0\u5355\u4E2A\u753B\u7B14</td></tr><tr><td><a href="/api/core.html#addPens">addPens</a></td><td>\u6279\u91CF\u6DFB\u52A0\u753B\u7B14</td></tr><tr><td><a href="/api/core.html#render">render</a></td><td>\u6E32\u67D3\uFF08\u91CD\u7ED8\uFF09</td></tr><tr><td><a href="/api/core.html#open">open</a></td><td>\u6253\u5F00\u56FE\u7EB8</td></tr><tr><td><a href="/api/core.html#connectSocket">connectSocket</a></td><td>\u6D88\u606F\u901A\u4FE1\u91CD\u8FDE\uFF08\u9ED8\u8BA4\u81EA\u52A8\u8FDE\u63A5\uFF09</td></tr><tr><td><a href="/api/core.html#drawLine">drawLine</a></td><td>\u5F00\u59CB\u94A2\u7B14\u7ED8\u753B</td></tr><tr><td><a href="/api/core.html#drawingPencil">drawingPencil</a></td><td>\u5F00\u59CB\u94C5\u7B14\u7ED8\u753B</td></tr><tr><td><a href="/api/core.html#finishDrawLine">finishDrawLine</a></td><td>\u5B8C\u6210\u94A2\u7B14\u7ED8\u753B</td></tr><tr><td><a href="/api/core.html#finishPencil">finishPencil</a></td><td>\u5B8C\u6210\u94C5\u7B14\u7ED8\u753B</td></tr><tr><td><a href="/api/core.html#updateLineType">updateLineType</a></td><td>\u4FEE\u6539\u8FDE\u7EBF\u7C7B\u578B</td></tr><tr><td><a href="/api/core.html#addDrawLineFn">addDrawLineFn</a></td><td>\u6DFB\u52A0\u81EA\u5B9A\u4E49\u8FDE\u7EBF\u7ED8\u753B\u51FD\u6570</td></tr><tr><td><a href="/api/core.html#removeDrawLineFn">removeDrawLineFn</a></td><td>\u79FB\u9664\u81EA\u5B9A\u4E49\u8FDE\u7EBF\u7ED8\u753B\u51FD\u6570</td></tr><tr><td><a href="/api/core.html#showMagnifier">showMagnifier</a></td><td>\u663E\u793A\u653E\u5927\u955C</td></tr><tr><td><a href="/api/core.html#hideMagnifier">hideMagnifier</a></td><td>\u9690\u85CF\u653E\u5927\u955C</td></tr><tr><td><a href="/api/core.html#toggleMagnifier">toggleMagnifier</a></td><td>\u663E\u793A\u6216\u9690\u85CF\u653E\u5927\u955C</td></tr><tr><td><a href="/api/core.html#clear">clear</a></td><td>\u6E05\u7A7A\u753B\u5E03\u8D44\u6E90\u3002\u6253\u5F00\u7A7A\u767D\u56FE\u7EB8\u7528 open()</td></tr><tr><td><a href="/api/core.html#emit">emit</a></td><td>\u53D1\u9001\u81EA\u5B9A\u4E49\u6D88\u606F</td></tr><tr><td><a href="/api/core.html#on">on</a></td><td>\u76D1\u542C\u6D88\u606F</td></tr><tr><td><a href="/api/core.html#off">off</a></td><td>\u53D6\u6D88\u76D1\u542C\u6D88\u606F</td></tr><tr><td><a href="/api/core.html#register">register</a></td><td>\u6CE8\u518C\u753B\u7B14(Path2D \u7C7B\u578B)</td></tr><tr><td><a href="/api/core.html#registerCanvasDraw">registerCanvasDraw</a></td><td>\u6CE8\u518C\u539F\u751F canvas \u4E0A\u4E0B\u6587\u753B\u7B14</td></tr><tr><td><a href="/api/core.html#registerAnchors">registerAnchors</a></td><td>\u6CE8\u518C\u753B\u7B14\u951A\u70B9\u51FD\u6570</td></tr><tr><td><a href="/api/core.html#registerDock">registerDock</a></td><td>\u6CE8\u518C\u8F85\u52A9\u7EBF\u7B97\u6CD5</td></tr><tr><td><a href="/api/core.html#find">find</a></td><td>\u67E5\u627E\u753B\u7B14</td></tr><tr><td><a href="/api/core.html#getPenRect">getPenRect</a></td><td>\u83B7\u53D6\u753B\u7B14\u533A\u57DF\u4F4D\u7F6E</td></tr><tr><td><a href="/api/core.html#setPenRect">setPenRect</a></td><td>\u8BBE\u7F6E\u753B\u7B14\u533A\u57DF\u4F4D\u7F6E</td></tr><tr><td><a href="/api/core.html#startAnimate">startAnimate</a></td><td>\u5F00\u59CB\u64AD\u653E\u52A8\u753B</td></tr><tr><td><a href="/api/core.html#pauseAnimate">pauseAnimate</a></td><td>\u6682\u505C\u52A8\u753B</td></tr><tr><td><a href="/api/core.html#stopAnimate">stopAnimate</a></td><td>\u7ED3\u675F\u52A8\u753B</td></tr><tr><td><a href="/api/core.html#calcAnimateDuration">calcAnimateDuration</a></td><td>\u8BA1\u7B97\u52A8\u753B\u65F6\u957F</td></tr><tr><td><a href="/api/core.html#combine">combine</a></td><td>\u7EC4\u5408</td></tr><tr><td><a href="/api/core.html#uncombine">uncombine</a></td><td>\u53D6\u6D88\u7EC4\u5408</td></tr><tr><td><a href="/api/core.html#active">active</a></td><td>\u9AD8\u4EAE\u9009\u4E2D\u753B\u7B14</td></tr><tr><td><a href="/api/core.html#inactive">inactive</a></td><td>\u53D6\u6D88\u9AD8\u4EAE\u9009\u4E2D\u753B\u7B14</td></tr><tr><td><a href="/api/core.html#delete">delete</a></td><td>\u5220\u9664\u753B\u7B14</td></tr><tr><td><a href="/api/core.html#scale">scale</a></td><td>\u7F29\u653E\u753B\u5E03</td></tr><tr><td><a href="/api/core.html#translate">translate</a></td><td>\u5E73\u79FB\u753B\u5E03</td></tr><tr><td><a href="/api/core.html#translatePens">translatePens</a></td><td>\u5E73\u79FB\u753B\u7B14</td></tr><tr><td><a href="/api/core.html#getParent">getParent</a></td><td>\u83B7\u53D6\u753B\u7B14\u7236\u5BF9\u8C61</td></tr><tr><td><a href="/api/core.html#data">data</a></td><td>\u56FE\u7EB8\u6570\u636E</td></tr><tr><td><a href="/api/core.html#copy">copy</a></td><td>\u590D\u5236</td></tr><tr><td><a href="/api/core.html#cut">cut</a></td><td>\u526A\u5207</td></tr><tr><td><a href="/api/core.html#paste">paste</a></td><td>\u7C98\u8D34</td></tr><tr><td><a href="/api/core.html#undo">undo</a></td><td>\u64A4\u6D88</td></tr><tr><td><a href="/api/core.html#redo">redo</a></td><td>\u6062\u590D</td></tr><tr><td><a href="/api/core.html#connectWebsocket">connectWebsocket</a></td><td>\u624B\u52A8\u8FDE\u63A5 websocket\u3002\u9ED8\u8BA4\u81EA\u52A8\u8FDE\u63A5</td></tr><tr><td><a href="/api/core.html#closeWebsocket">closeWebsocket</a></td><td>\u5173\u95ED websocket \u8FDE\u63A5</td></tr><tr><td><a href="/api/core.html#connectMqtt">connectMqtt</a></td><td>\u624B\u52A8\u8FDE\u63A5 mqtt \u3002\u9ED8\u8BA4\u81EA\u52A8\u8FDE\u63A5</td></tr><tr><td><a href="/api/core.html#closeMqtt">closeMqtt</a></td><td>\u5173\u95ED mqtt \u8FDE\u63A5</td></tr><tr><td><a href="/api/core.html#setValue">setValue</a></td><td>\u8BBE\u7F6E\u4FEE\u6539\u753B\u7B14\u6570\u636E</td></tr><tr><td><a href="/api/core.html#pushHistory">pushHistory</a></td><td>\u6DFB\u52A0\u4E00\u4E2A\u7F16\u8F91\u5386\u53F2\u5230\u961F\u5217</td></tr><tr><td><a href="/api/core.html#showInput">showInput</a></td><td>\u663E\u793A\u6587\u5B57\u8F93\u5165\u6846</td></tr><tr><td><a href="/api/core.html#hideInput">hideInput</a></td><td>\u9690\u85CF\u6587\u5B57\u8F93\u5165\u6846</td></tr><tr><td><a href="/api/core.html#clearDropdownList">clearDropdownList</a></td><td>\u6E05\u9664\u753B\u7B14\u4E0B\u62C9\u5217\u8868\u9009\u9879</td></tr><tr><td><a href="/api/core.html#pushChildren">pushChildren</a></td><td>\u7ED9\u753B\u7B14\u6DFB\u52A0\u5B50\u5BF9\u8C61</td></tr><tr><td><a href="/api/core.html#toPng">toPng</a></td><td>\u751F\u6210 png \u56FE\u50CF</td></tr><tr><td><a href="/api/core.html#downloadPng">downloadPng</a></td><td>\u4E0B\u8F7D png</td></tr><tr><td><a href="/api/core.html#getRect">getRect</a></td><td>\u83B7\u53D6\u56FE\u7EB8\u533A\u57DF</td></tr><tr><td><a href="/api/core.html#fitView">fitView</a></td><td>\u81EA\u9002\u5E94\u5C4F\u5E55\u663E\u793A</td></tr><tr><td><a href="/api/core.html#gotoView">gotoView</a></td><td>\u5B9A\u4F4D\u753B\u7B14\u5230\u5C4F\u5E55\u4E2D\u5FC3\u663E\u793A</td></tr><tr><td><a href="/api/core.html#centerView">centerView</a></td><td>\u5C45\u4E2D\u663E\u793A\u53EF\u89C6\u533A\u57DF</td></tr><tr><td><a href="/api/core.html#hasView">hasView</a></td><td>\u753B\u5E03\u662F\u5426\u6709\u5185\u5BB9</td></tr><tr><td><a href="/api/core.html#alignNodes">alignNodes</a></td><td>\u8282\u70B9\u5BF9\u9F50</td></tr><tr><td><a href="/api/core.html#spaceBetween">spaceBetween</a></td><td>\u6C34\u5E73\u7B49\u5206\u5BF9\u9F50</td></tr><tr><td><a href="/api/core.html#spaceBetweenColumn">spaceBetweenColumn</a></td><td>\u5782\u76F4\u7B49\u5206\u5BF9\u9F50</td></tr><tr><td><a href="/api/core.html#layout">layout</a></td><td>\u5747\u5300\u5206\u5E03\u6392\u7248</td></tr><tr><td><a href="/api/core.html#showMap">showMap</a></td><td>\u663E\u793A\u9E70\u773C\u5730\u56FE</td></tr><tr><td><a href="/api/core.html#hideMap">hideMap</a></td><td>\u9690\u85CF\u9E70\u773C\u5730\u56FE</td></tr><tr><td><a href="/api/core.html#toggleAnchorMode">toggleAnchorMode</a></td><td>\u5207\u6362\u951A\u70B9\u6A21\u5F0F</td></tr><tr><td><a href="/api/core.html#addAnchorHand">addAnchorHand</a></td><td>\u6DFB\u52A0\u951A\u70B9\u624B\u67C4</td></tr><tr><td><a href="/api/core.html#removeAnchorHand">removeAnchorHand</a></td><td>\u79FB\u9664\u951A\u70B9\u624B\u67C4</td></tr><tr><td><a href="/api/core.html#toggleAnchorHand">toggleAnchorHand</a></td><td>\u6DFB\u52A0\u6216\u79FB\u9664\u951A\u70B9\u624B\u67C4</td></tr><tr><td><a href="/api/core.html#top">top</a></td><td>\u7F6E\u9876\u753B\u7B14</td></tr><tr><td><a href="/api/core.html#bottom">bottom</a></td><td>\u7F6E\u5E95\u753B\u7B14</td></tr><tr><td><a href="/api/core.html#up">up</a></td><td>\u5411\u4E0A\u79FB\u52A8\u753B\u7B14\u56FE\u5C42</td></tr><tr><td><a href="/api/core.html#down">down</a></td><td>\u5411\u4E0B\u79FB\u52A8\u753B\u7B14\u56FE\u5C42</td></tr><tr><td><a href="/api/core.html#setLayer">setLayer</a></td><td>\u6307\u5B9A\u753B\u7B14\u56FE\u5C42</td></tr><tr><td><a href="/api/core.html#changePenId">changePenId</a></td><td>\u4FEE\u6539\u753B\u7B14 id</td></tr><tr><td><a href="/api/core.html#getLines">getLines</a></td><td>\u83B7\u53D6\u5173\u8054\u8FDE\u7EBF</td></tr><tr><td><a href="/api/core.html#nextNode">nextNode</a></td><td>\u83B7\u53D6\u4E0B\u4E00\u4E2A\u8282\u70B9</td></tr><tr><td><a href="/api/core.html#previousNode">previousNode</a></td><td>\u83B7\u53D6\u524D\u4E00\u4E2A\u8282\u70B9</td></tr><tr><td><a href="/api/core.html#toComponent">toComponent</a></td><td>\u751F\u6210\u81EA\u5B9A\u4E49\u7EC4\u4EF6</td></tr><tr><td><a href="/api/core.html#destroy">destroy</a></td><td>\u9500\u6BC1\u753B\u5E03\uFF0C\u6E05\u7406\u8D44\u6E90\u5185\u5B58\u3002\u63A8\u8350\u8C03\u7528</td></tr></tbody></table>`,25),r=[s];function o(p,c,l,i,h,u){return n(),a("div",null,r)}var m=t(e,[["render",o]]);export{g as __pageData,m as default};
