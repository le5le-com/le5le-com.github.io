import{_ as a,c as n,o as s,a as e}from"./app.9ad7f790.js";const k='{"title":"Canvas","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":3,"title":"addCaches","slug":"addcaches"},{"level":2,"title":"\u51FD\u6570","slug":"\u51FD\u6570"},{"level":3,"title":"makePen","slug":"makepen"},{"level":3,"title":"loadImage","slug":"loadimage"},{"level":3,"title":"updatePenRect","slug":"updatepenrect"}],"relativePath":"api/canvas.md"}',t={},p=e(`<h1 id="canvas" tabindex="-1">Canvas <a class="header-anchor" href="#canvas" aria-hidden="true">#</a></h1><h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><h3 id="addcaches" tabindex="-1">addCaches <a class="header-anchor" href="#addcaches" aria-hidden="true">#</a></h3><p>\u5F85\u6DFB\u52A0\u7684\u753B\u7B14\u6570\u7EC4\u3002\u5B58\u5728\u6B64\u7F13\u5B58\u6570\u7EC4\u65F6\uFF0C\u70B9\u51FB\u753B\u5E03\uFF0C\u5C06\u5728\u5F53\u524D\u4F4D\u7F6E\u6DFB\u52A0\u753B\u7B14\u3002</p><p><strong>\u6570\u636E\u7C7B\u578B\uFF1A</strong> Pen[]</p><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><pre><code>topology<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span>addCaches <span class="token operator">=</span> <span class="token punctuation">[</span>pen1<span class="token punctuation">,</span> pen2<span class="token punctuation">,</span> pen3<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u51FD\u6570" tabindex="-1">\u51FD\u6570 <a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a></h2><h3 id="makepen" tabindex="-1">makePen <a class="header-anchor" href="#makepen" aria-hidden="true">#</a></h3><p>\u521D\u59CB\u5316 pen \u5BF9\u8C61\u5E76\u6DFB\u52A0\u5230\u753B\u5E03\uFF0C\u4E0D\u9AD8\u4EAE\uFF0C\u4E0D\u9009\u4E2D\u3002\u6DFB\u52A0 pen \u5E76\u9009\u4E2D\uFF0C\u63A8\u8350\u7528 core.addPen \u65B9\u6CD5\u3002</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li>pen: Pen</li></ul><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li>void</li></ul><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><pre><code>topology<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span><span class="token function">makePen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="loadimage" tabindex="-1">loadImage <a class="header-anchor" href="#loadimage" aria-hidden="true">#</a></h3><p>\u52A0\u8F7D pen \u7684\u56FE\u7247\u3002\u4EC5\u5F53\u7B2C\u4E00\u6B21\u52A0\u8F7D\u6216\u8005 image \u5C5E\u6027\u6709\u53D8\u5316\u6709\u6548\u3002pen \u7684 image \u5C5E\u6027\u6709\uFF1A\u663E\u793A\u56FE\u7247\uFF0C\u80CC\u666F\u56FE\u7247\uFF0C\u8FB9\u6846\u586B\u5145\u56FE\u7247 3 \u79CD</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li>pen: Pen</li></ul><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li>void</li></ul><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><pre><code>topology<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span><span class="token function">loadImage</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="updatepenrect" tabindex="-1">updatePenRect <a class="header-anchor" href="#updatepenrect" aria-hidden="true">#</a></h3><p>pen \u7684 rect \u6709\u66F4\u65B0\uFF0C\u91CD\u65B0\u8BA1\u7B97\u76F8\u5173 rect\u3002 (\u6CE8\uFF1A1.1.34\u7248\u672C\u4E4B\u524D\u4E3AdirtyPenRect)</p><p><strong>\u53C2\u6570\uFF1A</strong></p><ul><li><p>pen: Pen</p></li><li><p>worldRectIsReady?: boolean<br> \u4E16\u754C\u5750\u6807\u533A\u57DF\u662F\u5426\u6B63\u786E\u3002\u662F - \u8BA1\u7B97\u76F8\u5BF9\u5750\u6807\uFF1B\u5426 - \u8BA1\u7B97\u4E16\u754C\u5750\u6807</p></li><li><p>playingAnimate?: boolean \u662F\u5426\u52A8\u753B\u64AD\u653E\u3002\u662F - \u4E0D\u8BA1\u7B97\u5B57\u4F53\u3001\u56FE\u6807\u7B49\u4F4D\u7F6E\uFF0C\u7531\u52A8\u753B\u5E27\u8BA1\u7B97\uFF1B\u5426 - \u8BA1\u7B97\u5B57\u4F53\u3001\u56FE\u6807\u7B49\u4F4D\u7F6E</p></li></ul><p><strong>\u8FD4\u56DE\uFF1A</strong></p><ul><li>void</li></ul><p><strong>\u793A\u4F8B\uFF1A</strong></p><div class="language-js"><pre><code>topology<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span><span class="token function">updatePenRect</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span>canvas<span class="token punctuation">.</span><span class="token function">updatePenRect</span><span class="token punctuation">(</span>pen<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,32),o=[p];function c(l,i,u,r,d,h){return s(),n("div",null,o)}var v=a(t,[["render",c]]);export{k as __pageData,v as default};
