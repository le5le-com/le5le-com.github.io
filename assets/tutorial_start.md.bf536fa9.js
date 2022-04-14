import{_ as n,c as s,o as a,a as t}from"./app.d493b7ab.js";const m='{"title":"\u5FEB\u901F\u4E0A\u624B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5982\u4F55\u5B66\u4E60","slug":"\u5982\u4F55\u5B66\u4E60"},{"level":2,"title":"\u5728 ES5 \u4E2D\u4F7F\u7528","slug":"\u5728-es5-\u4E2D\u4F7F\u7528"},{"level":2,"title":"\u5728 Vue3 \u4E2D\u4F7F\u7528","slug":"\u5728-vue3-\u4E2D\u4F7F\u7528"},{"level":2,"title":"\u5728 React \u4E2D\u4F7F\u7528","slug":"\u5728-react-\u4E2D\u4F7F\u7528"}],"relativePath":"tutorial/start.md","lastUpdated":1649903246346}',p={},o=t(`<h1 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1">\u5FEB\u901F\u4E0A\u624B <a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a></h1><h2 id="\u5982\u4F55\u5B66\u4E60" tabindex="-1">\u5982\u4F55\u5B66\u4E60 <a class="header-anchor" href="#\u5982\u4F55\u5B66\u4E60" aria-hidden="true">#</a></h2><ol><li><p>\u8DDF\u7740<a href="./start.html">\u5FEB\u901F\u4E0A\u624B</a>\u505A\u4E00\u904D\uFF0C\u5148\u6709\u4E2A\u603B\u4F53\u8BA4\u77E5</p></li><li><p>\u770B\u4E00\u904D\u6211\u4EEC\u7684<a href="./../awesome/home.html#\u89C6\u9891\u6559\u7A0B">\u89C6\u9891\u6559\u7A0B</a>\uFF0C\u6709\u4E2A\u5168\u9762\u8BA4\u8BC6</p></li><li><p>\u591A\u5B66\u4E60<a href="./../awesome/home.html#\u5B98\u65B9\u793A\u4F8B">\u5B98\u65B9\u793A\u4F8B</a>\u6559\u7A0B\u3001\u793A\u4F8B\u7B49</p></li></ol><br><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u521D\u59CB\u5316\u5F15\u64CE\u540E\uFF0C\u4F1A\u5728 window \u4E0B\u6CE8\u5165 topology \u5BF9\u8C61\uFF08\u5373 window.topology\uFF09\u3002</p><p>\u9ED8\u8BA4\u4EFB\u4F55\u76F8\u5173\u6587\u6863\u63D0\u5230\u7684 topology \u5747\u6307 window.topology\uFF08\u5B9E\u4F8B\u5316\u5F15\u64CE\u5BF9\u8C61\uFF09\u3002</p></div><div class="tip custom-block"><p class="custom-block-title">\u5212\u91CD\u70B9</p><p>\u6240\u6709\u6807\u51C6 js \u8BED\u6CD5\u5747\u53EF\u6253\u5F00 <a href="http://t.le5le.com" target="_blank" rel="noopener noreferrer">topology \u5B98\u7F51\u7F16\u8F91\u5668</a> \uFF0C\u5728\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u76F4\u63A5\u8FD0\u884C\u67E5\u770B\u6548\u679C</p></div><p>\u4F8B\u5982\uFF0C\u5728<a href="http://t.le5le.com/" target="_blank" rel="noopener noreferrer">topology \u5B98\u7F51\u7F16\u8F91\u5668</a> \u9875\u9762\u7684\u63A7\u5236\u53F0\u8FD0\u884C\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2Apen\uFF0C\u77E9\u5F62</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
    text<span class="token operator">:</span> <span class="token string">&#39;\u77E9\u5F62&#39;</span><span class="token punctuation">,</span>
    x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u9700\u8981\u7F16\u8BD1\u548C\u4F9D\u8D56\u73AF\u5883\u7684\u4EE3\u7801\u9664\u5916\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
    Topology
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/core&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Topology</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u672C\u6559\u7A0B\u4E0B\u5217\u4EE3\u7801\u4E0D\u53EF\u5728 topology \u5B98\u7F51\u7F16\u8F91\u5668\u8FD0\u884C\u3002\u5176\u4ED6\u9875\u9762\u6559\u7A0B\u7684\u6807\u51C6 js \u8BED\u6CD5\u5927\u591A\u53EF\u4EE5\u3002</p><hr><h2 id="\u5728-es5-\u4E2D\u4F7F\u7528" tabindex="-1">\u5728 ES5 \u4E2D\u4F7F\u7528 <a class="header-anchor" href="#\u5728-es5-\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h2><ol><li>\u83B7\u53D6 topology.js</li></ol><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> topology.js --save
</code></pre></div><ol start="2"><li><p>\u62F7\u8D1D node_modules/topology.js/topology.js \u5230\u9759\u6001\u8D44\u6E90\u76EE\u5F55\uFF08\u6BD4\u4F8B index.html \u6240\u5728\u76EE\u5F55\uFF09</p></li><li><p>\u7F16\u5199 index.html</p></li></ol><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span> <span class="token attr-name">i18n</span><span class="token punctuation">&gt;</span></span>\u4E50\u543E\u4E50 Topology<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>topology<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>topology.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol start="4"><li>\u7F16\u5199 index.js \u52A0\u8F7D topology.js</li></ol><div class="language-js"><pre><code><span class="token keyword">var</span> topology <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Topology</span><span class="token punctuation">(</span><span class="token string">&#39;topology&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Get the json data</span>
<span class="token comment">// ...</span>
<span class="token comment">// Open the json</span>
topology<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u53C2\u8003\u4F8B\u5B50\uFF1A</strong> <a href="https://github.com/le5le-com/topology.js/tree/master/examples/es5" target="_blank" rel="noopener noreferrer">https://github.com/le5le-com/topology.js/tree/master/examples/es5</a></p><h2 id="\u5728-vue3-\u4E2D\u4F7F\u7528" tabindex="-1">\u5728 Vue3 \u4E2D\u4F7F\u7528 <a class="header-anchor" href="#\u5728-vue3-\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h2><ol><li>\u83B7\u53D6 @topology/core \u7B49\u5E93</li></ol><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> @topology/core --save

// Option
<span class="token function">npm</span> <span class="token function">install</span> @topology/activity-diagram --save
<span class="token function">npm</span> <span class="token function">install</span> @topology/chart-diagram --save
<span class="token function">npm</span> <span class="token function">install</span> @topology/class-diagram --save
<span class="token function">npm</span> <span class="token function">install</span> @topology/flow-diagram --save
<span class="token function">npm</span> <span class="token function">install</span> @topology/sequence-diagram --save
// <span class="token punctuation">..</span>.
<span class="token comment"># \u65B0\u7248\u672C\u5C1A\u672A\u53D1\u5E03\uFF0C\u5F85</span>
<span class="token comment"># npm install @topology/layout --save</span>

</code></pre></div><ol start="2"><li>\u7F16\u5199 Vue HTML Element</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>topology<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ol start="3"><li>\u7F16\u5199 js \u52A0\u8F7D topology</li></ol><div class="language-js"><pre><code><span class="token operator">&lt;</span> script lang <span class="token operator">=</span> <span class="token string">&quot;ts&quot;</span> <span class="token operator">&gt;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span>
        Options<span class="token punctuation">,</span>
        Topology
    <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    flowPens
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/flow-diagram&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    activityDiagram
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/activity-diagram&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    classPens
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/class-diagram&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    sequencePens<span class="token punctuation">,</span>
    sequencePensbyCtx
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/sequence-diagram&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    defineComponent<span class="token punctuation">,</span>
    onMounted<span class="token punctuation">,</span>
    onUnmounted<span class="token punctuation">,</span>
    ref
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

declare <span class="token keyword">const</span> window<span class="token operator">:</span> any<span class="token punctuation">;</span>
declare <span class="token keyword">const</span> topology<span class="token operator">:</span> Topology<span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;TopologyCanvas&#39;</span><span class="token punctuation">,</span>
    components<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> topologyOptions<span class="token operator">:</span> Options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token class-name">Topology</span><span class="token punctuation">(</span><span class="token string">&#39;topology&#39;</span><span class="token punctuation">,</span> topologyOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
            topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">flowPens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">activityDiagram</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">classPens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">sequencePens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            topology<span class="token punctuation">.</span><span class="token function">registerCanvasDraw</span><span class="token punctuation">(</span><span class="token function">sequencePensbyCtx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// \u76D1\u542C\u6D88\u606F\u4E8B\u4EF6</span>
            topology<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;contextmenu&#39;</span><span class="token punctuation">,</span> contextmenu<span class="token punctuation">)</span><span class="token punctuation">;</span>
            topology<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> click<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// \u6253\u5F00\u6587\u4EF6</span>
            topology<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>topology<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                topology<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;contextmenu&#39;</span><span class="token punctuation">,</span> contextmenu<span class="token punctuation">)</span><span class="token punctuation">;</span>
                topology<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> click<span class="token punctuation">)</span><span class="token punctuation">;</span>
                topology<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> contextMenuVisible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">function</span> <span class="token function">contextmenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            contextMenuVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">function</span> <span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            contextMenuVisible<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            contextMenuVisible<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>
<span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><p><strong>\u53C2\u8003\u4F8B\u5B50\uFF1A</strong> <a href="https://github.com/le5le-com/topology.js/tree/master/examples/vue" target="_blank" rel="noopener noreferrer">https://github.com/le5le-com/topology.js/tree/master/examples/vue</a></p><h2 id="\u5728-react-\u4E2D\u4F7F\u7528" tabindex="-1">\u5728 React \u4E2D\u4F7F\u7528 <a class="header-anchor" href="#\u5728-react-\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h2><ol><li>\u83B7\u53D6 @topology/core \u7B49\u5E93</li></ol><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> @topology/core --save

// Option
<span class="token function">npm</span> <span class="token function">install</span> @topology/activity-diagram --save
<span class="token function">npm</span> <span class="token function">install</span> @topology/chart-diagram --save
<span class="token function">npm</span> <span class="token function">install</span> @topology/class-diagram --save
<span class="token function">npm</span> <span class="token function">install</span> @topology/flow-diagram --save
<span class="token function">npm</span> <span class="token function">install</span> @topology/sequence-diagram --save
// <span class="token punctuation">..</span>.
<span class="token comment"># \u65B0\u7248\u672C\u5C1A\u672A\u53D1\u5E03\uFF0C\u5F85</span>
<span class="token comment"># npm install @topology/layout --save</span>

</code></pre></div><ol start="2"><li>\u7F16\u5199 React jsx</li></ol><div class="language-js"><pre><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    useEffect
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    Options<span class="token punctuation">,</span>
    Topology
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    flowPens
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/flow-diagram&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    activityDiagram
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/activity-diagram&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    classPens
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/class-diagram&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    sequencePens<span class="token punctuation">,</span>
    sequencePensbyCtx
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/sequence-diagram&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">TopologyContainer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span>topology <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Topology</span><span class="token punctuation">(</span><span class="token string">&#39;topology&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">flowPens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">activityDiagram</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">classPens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">sequencePens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        topology<span class="token punctuation">.</span><span class="token function">registerCanvasDraw</span><span class="token punctuation">(</span><span class="token function">sequencePensbyCtx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u6253\u5F00\u6587\u4EF6</span>
        topology<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span> <span class="token operator">&lt;</span>
        div className <span class="token operator">=</span> <span class="token string">&#39;main&#39;</span> <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>
        div className <span class="token operator">=</span> <span class="token string">&#39;topology&#39;</span>
        id <span class="token operator">=</span> <span class="token string">&#39;topology&#39;</span> <span class="token operator">&gt;</span> <span class="token operator">&lt;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">div&gt; &lt; </span><span class="token regex-delimiter">/</span></span>
        div <span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> TopologyContainer<span class="token punctuation">;</span>
</code></pre></div><p><strong>\u53C2\u8003\u4F8B\u5B50\uFF1A</strong> <a href="https://github.com/le5le-com/topology.js/tree/master/examples/react" target="_blank" rel="noopener noreferrer">https://github.com/le5le-com/topology.js/tree/master/examples/react</a></p>`,34),e=[o];function c(l,u,i,k,r,g){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{m as __pageData,y as default};
