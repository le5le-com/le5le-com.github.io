import{_ as n,c as s,o as a,a as t}from"./app.7371c559.js";var p="/img/image_bottom.png";const h='{"title":"\u9ED8\u8BA4\u56FE\u5F62\u5E93","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u56FE\u5F62","slug":"\u57FA\u7840\u56FE\u5F62"},{"level":3,"title":"\u7EA6\u5B9A\u56FE\u5F62","slug":"\u7EA6\u5B9A\u56FE\u5F62"},{"level":3,"title":"\u56FE\u7247\u5C42\u7EA7","slug":"\u56FE\u7247\u5C42\u7EA7"},{"level":2,"title":"\u6D41\u7A0B\u56FE","slug":"\u6D41\u7A0B\u56FE"},{"level":2,"title":"\u6D3B\u52A8\u56FE","slug":"\u6D3B\u52A8\u56FE"},{"level":2,"title":"\u65F6\u5E8F\u56FE","slug":"\u65F6\u5E8F\u56FE"},{"level":2,"title":"\u7C7B\u56FE","slug":"\u7C7B\u56FE"},{"level":2,"title":"Echarts \u56FE\u8868","slug":"echarts-\u56FE\u8868"},{"level":2,"title":"highcharts \u56FE\u8868","slug":"highcharts-\u56FE\u8868"},{"level":2,"title":"LightningChart \u56FE\u8868","slug":"lightningchart-\u56FE\u8868"}],"relativePath":"tutorial/pens.md"}',o={},e=t(`<h1 id="\u9ED8\u8BA4\u56FE\u5F62\u5E93" tabindex="-1">\u9ED8\u8BA4\u56FE\u5F62\u5E93 <a class="header-anchor" href="#\u9ED8\u8BA4\u56FE\u5F62\u5E93" aria-hidden="true">#</a></h1><p>topology \u6240\u6709\u56FE\u5F62\u5E93\u90FD\u662F\u52A8\u6001\u6269\u5C55\u7684\uFF0C\u4E3A\u4E86\u4F7F\u7528\u65B9\u4FBF\uFF0C\u5F15\u64CE\u76F4\u63A5\u5185\u7F6E\u4E86\u4E00\u4E9B\u57FA\u7840\u56FE\u5F62\u5E93\uFF0C\u63D0\u4F9B\u4E86\u6D41\u7A0B\u56FE\u76F8\u5173\u7684\u6269\u5C55\u5E93\uFF0C\u6309\u9700\u5BFC\u5165\u4F7F\u7528\u5373\u53EF\u3002</p><h2 id="\u57FA\u7840\u56FE\u5F62" tabindex="-1">\u57FA\u7840\u56FE\u5F62 <a class="header-anchor" href="#\u57FA\u7840\u56FE\u5F62" aria-hidden="true">#</a></h2><p>\u76F4\u63A5\u4F7F\u7528</p><table><thead><tr><th>name</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>rectangle</td><td>\u77E9\u5F62</td></tr><tr><td>circle</td><td>\u5706</td></tr><tr><td>triangle</td><td>\u4E09\u89D2\u5F62</td></tr><tr><td>diamond</td><td>\u83F1\u5F62</td></tr><tr><td>pentagon</td><td>\u4E94\u8FB9\u5F62</td></tr><tr><td>pentagram</td><td>\u4E94\u89D2\u661F</td></tr><tr><td>hexagon</td><td>\u516D\u8FB9\u5F62</td></tr><tr><td>leftArrow</td><td>\u5DE6\u7BAD\u5934</td></tr><tr><td>rightArrow</td><td>\u53F3\u7BAD\u5934</td></tr><tr><td>twowayArrow</td><td>\u53CC\u5411\u7BAD\u5934</td></tr><tr><td>message</td><td>\u6D88\u606F\u6846</td></tr><tr><td>cloud</td><td>\u4E91</td></tr><tr><td>file</td><td>\u6587\u4EF6</td></tr><tr><td>cube</td><td>\u7ACB\u65B9\u4F53</td></tr><tr><td>people</td><td>\u4EBA</td></tr><tr><td>line</td><td>\u7EBF</td></tr><tr><td>iframe</td><td>\u7F51\u9875</td></tr><tr><td>video</td><td>\u97F3\u89C6\u9891</td></tr><tr><td>gif</td><td>gif \u52A8\u753B</td></tr><tr><td>svgPath</td><td>svg path</td></tr></tbody></table><div class="language-js"><pre><code><span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">,</span> <span class="token comment">// name \u4E3A\u4E0A\u9762\u8868\u683C\u4E2Dname</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u77E9\u5F62&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u7EA6\u5B9A\u56FE\u5F62" tabindex="-1">\u7EA6\u5B9A\u56FE\u5F62 <a class="header-anchor" href="#\u7EA6\u5B9A\u56FE\u5F62" aria-hidden="true">#</a></h3><p>\u7EA6\u5B9A\u5982\u6B64\uFF0C\u5E76\u975E\u5F3A\u5236\u8981\u6C42\u3002</p><table><thead><tr><th>name</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>text</td><td>\u7EAF\u6587\u672C</td></tr><tr><td>image</td><td>\u7EAF\u56FE\u7247\uFF0C\u7EAF icon</td></tr></tbody></table><h3 id="\u56FE\u7247\u5C42\u7EA7" tabindex="-1">\u56FE\u7247\u5C42\u7EA7 <a class="header-anchor" href="#\u56FE\u7247\u5C42\u7EA7" aria-hidden="true">#</a></h3><p>@topology/core 1.1.0 \u7248\u672C\u540E\uFF0C\u4E3A\u4E86\u63D0\u5347\u6027\u80FD\uFF0C\u989D\u5916\u521B\u5EFA\u4E86\u4E24\u4E2A canvas \u7528\u6765\u7ED8\u5236\u56FE\u7247\uFF0C\u4E00\u4E2A\u5728\u539F\u753B\u5E03\u7684\u5E95\u4E0B\uFF0C\u4E00\u4E2A\u5728\u539F\u753B\u5E03\u7684\u4E0A\u9762\u3002<br> \u5E26\u56FE\u7247\u7684\u753B\u7B14\u7684\u56FE\u7247\u9ED8\u8BA4\u662F\u5728\u4E0A\u5C42\u7684 canvas \u7684\uFF0C\u5B83\u4F1A\u906E\u4F4F\u6240\u6709\u7684\u975E\u56FE\u7247\u753B\u7B14\uFF0C\u5E76\u4E14\u4F7F\u7528\u7F6E\u9876\uFF0C\u7F6E\u5E95\u662F\u6CA1\u6709\u4F5C\u7528\u7684\uFF0C\u65B0\u589E\u4E86\u4E00\u4E2A isBottom \u7684\u5C5E\u6027\uFF0C\u5C06\u8BE5\u753B\u7B14\u79FB\u52A8\u5230\u4E0B\u5C42\u7684 canvas \uFF0C\u4ECE\u800C\u5B9E\u73B0\u975E\u56FE\u7247\u753B\u7B14\u906E\u4F4F\u8BE5\u56FE\u7247\u3002</p><div class="language-ts"><pre><code>topology<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;le5le&quot;</span><span class="token punctuation">,</span> isBottom<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5B98\u7F51\u8BBE\u7F6E \u5C06\u56FE\u7247\u7F6E\u5230\u6587\u5B57\u7684\u5E95\u4E0B <img src="`+p+`" alt=""></p><h2 id="\u6D41\u7A0B\u56FE" tabindex="-1">\u6D41\u7A0B\u56FE <a class="header-anchor" href="#\u6D41\u7A0B\u56FE" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> flowPens <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@topology/flow-diagram&quot;</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">flowPens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><table><thead><tr><th>name</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>flowData</td><td>\u6570\u636E</td></tr><tr><td>flowSubprocess</td><td>\u5B50\u6D41\u7A0B</td></tr><tr><td>flowDb</td><td>\u6570\u636E\u5E93</td></tr><tr><td>flowDocument</td><td>\u6587\u6863</td></tr><tr><td>flowInternalStorage</td><td>\u5185\u90E8\u5B58\u50A8</td></tr><tr><td>flowQueue</td><td>\u961F\u5217</td></tr><tr><td>flowManually</td><td>\u624B\u52A8\u8F93\u5165</td></tr><tr><td>flowDisplay</td><td>\u5C55\u793A</td></tr><tr><td>flowParallel</td><td>\u5E76\u884C\u6A21\u5F0F</td></tr><tr><td>flowComment</td><td>\u6CE8\u91CA</td></tr></tbody></table><h2 id="\u6D3B\u52A8\u56FE" tabindex="-1">\u6D3B\u52A8\u56FE <a class="header-anchor" href="#\u6D3B\u52A8\u56FE" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  activityDiagram<span class="token punctuation">,</span>
  activityDiagramByCtx<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@topology/activity-diagram&quot;</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">activityDiagram</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u539F\u751Fcanvas\u7ED8\u753B\u7684\u56FE\u5E93\uFF0C\u652F\u6301\u903B\u8F91\u590D\u6742\u7684\u9700\u6C42</span>
topology<span class="token punctuation">.</span><span class="token function">registerCanvasDraw</span><span class="token punctuation">(</span><span class="token function">activityDiagramByCtx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><table><thead><tr><th>name</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>activityFinal</td><td>\u7ED3\u675F</td></tr><tr><td>swimlaneV</td><td>\u5782\u76F4\u6CF3\u9053</td></tr><tr><td>swimlaneH</td><td>\u6C34\u5E73\u6CF3\u9053</td></tr><tr><td>forkV</td><td>\u5782\u76F4\u5206\u5C94/\u6C47\u5408</td></tr><tr><td>forkH</td><td>\u6C34\u5E73\u5206\u5C94/\u6C47\u5408</td></tr></tbody></table><h2 id="\u65F6\u5E8F\u56FE" tabindex="-1">\u65F6\u5E8F\u56FE <a class="header-anchor" href="#\u65F6\u5E8F\u56FE" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sequencePens<span class="token punctuation">,</span> sequencePensbyCtx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@topology/sequence-diagram&quot;</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">sequencePens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">registerCanvasDraw</span><span class="token punctuation">(</span><span class="token function">sequencePensbyCtx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><table><thead><tr><th>name</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>lifeline</td><td>\u751F\u547D\u7EBF</td></tr><tr><td>sequenceFocus</td><td>\u6FC0\u6D3B</td></tr></tbody></table><h2 id="\u7C7B\u56FE" tabindex="-1">\u7C7B\u56FE <a class="header-anchor" href="#\u7C7B\u56FE" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> classPens <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@topology/class-diagram&quot;</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">classPens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><table><thead><tr><th>name</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>simpleClass</td><td>\u7B80\u5355\u7C7B\u56FE</td></tr><tr><td>interfaceClass</td><td>\u666E\u901A\u7C7B\u56FE</td></tr></tbody></table><h2 id="echarts-\u56FE\u8868" tabindex="-1">Echarts \u56FE\u8868 <a class="header-anchor" href="#echarts-\u56FE\u8868" aria-hidden="true">#</a></h2><ul><li>\u5F15\u5165</li></ul><p>\u5728 html \u4E2D\u5F15\u5165 echarts</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/echarts.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- &lt;script src=&quot;https://cdn.bootcdn.net/ajax/libs/echarts/5.1.2/echarts.min.js&quot;&gt;&lt;/script&gt; --&gt;</span>
</code></pre></div><ul><li>\u6CE8\u518C</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> register <span class="token keyword">as</span> registerEcharts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@topology/chart-diagram&quot;</span><span class="token punctuation">;</span>

<span class="token function">registerEcharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u4F7F\u7528</li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;echarts&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  echarts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">820</span><span class="token punctuation">,</span> <span class="token number">932</span><span class="token punctuation">,</span> <span class="token number">901</span><span class="token punctuation">,</span> <span class="token number">934</span><span class="token punctuation">,</span> <span class="token number">1290</span><span class="token punctuation">,</span> <span class="token number">1330</span><span class="token punctuation">,</span> <span class="token number">1320</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u6570\u636E\u66F4\u65B0 \u901A\u5E38\u6765\u8BB2\uFF0Cecharts \u62D6\u62FD\u5230\u753B\u5E03\u540E\uFF0C\u53EA\u5173\u6CE8\u5B83\u7684\u6570\u636E\u53D8\u5316\uFF0C\u5373 x \u8F74\u7684\u53D8\u5316\uFF0C\u5355\u6761\u7EBF\uFF08\u6216\u591A\u6761\u7EBF\uFF09\u503C\u7684\u53D8\u5316\u3002<br> \u800C setValue \u5904\u7406\u8D77\u6765\uFF0C\u6BCF\u6B21\u90FD\u9700\u8981\u66F4\u6539 echarts.options \u4E0B\u7684\u5168\u90E8\u503C\uFF0C\u5BF9\u4E8E\u7528\u6237\u6765\u8BF4\uFF0C\u8FC7\u4E8E\u590D\u6742\uFF0C\u4E8E\u662F\u63D0\u4F9B\u4E86\u4E00\u79CD\u56FA\u5B9A\u7684\u89C4\u5219\u5904\u7406\u3002<br> mqtt \u4E0E ws \u7684\u9ED8\u8BA4\u5904\u7406\u4E5F\u662F\u901A\u8FC7 setValue \u7684\uFF0C\u6EE1\u8DB3\u4E0B\u9762\u6761\u4EF6\uFF0C\u53EF\u53EA\u5173\u6CE8\u6570\u636E\u7684\u53D8\u5316\u3002</li></ul><div class="language-ts"><pre><code><span class="token comment">/**
 * \u56FE\u8868\u8FFD\u52A0\u6216\u66FF\u6362\u6570\u636E\uFF0C\u53EA\u5173\u6CE8\u6570\u636E
 */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ChartData</span> <span class="token punctuation">{</span>
  dataX<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">|</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// x \u8F74\u6570\u636E\u53D8\u5316</span>
  dataY<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">|</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// y \u8F74\u6570\u636E\u53D8\u5316</span>
  <span class="token comment">/**
   * @deprecated \u5728 1.1.14 \u7248\u672C\u540E\u79FB\u9664
   * */</span>
  overwrite<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// \u8FFD\u52A0 or \u66FF\u6362 \uFF0C false \u8FFD\u52A0</span>
<span class="token punctuation">}</span>

<span class="token comment">// id: &#39;le5le&#39; x \u8F74\u8FFD\u52A0 \u4E24\u4E2A\u503C\uFF0C y \u8F74\u8FFD\u52A0\u4E24\u4E2A\u503C</span>
topology<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&quot;le5le&quot;</span><span class="token punctuation">,</span>
  dataX<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;eight&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nine&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  dataY<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// overwrite: true   // \u82E5\u9700\u8981\u8986\u76D6\uFF0C\u4F7F\u7528 true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u591A\u6761\u7EBF\u7684\u573A\u666F\u4F7F\u7528\uFF0C\u987A\u5E8F\u4E0E option.series \u76F8\u540C</span>
topology<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&quot;le5le&quot;</span><span class="token punctuation">,</span>
  dataX<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;eight&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nine&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  dataY<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">700</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">1200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">1200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//\u4E94\u7EC4\u6570\u636E</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><p>1.1.14 \u7248\u672C\u540E</p><p>\u4ECD\u57FA\u4E8E\u4E4B\u524D\u7684\u6570\u636E\u66F4\u65B0\uFF0C\u53EA\u662F\u8FFD\u52A0\uFF0C\u66FF\u6362\uFF0C\u8986\u76D6\u4E0D\u518D\u7531\u53C2\u6570\u51B3\u5B9A\u4E86\uFF0C\u53D6\u51B3\u4E8E\u5F53\u524D echarts \u753B\u7B14\u7684\u5C5E\u6027 echarts.replaceMode \u6765\u51B3\u5B9A\uFF0C\u5373\u4E00\u4E2A echarts \u753B\u7B14\u8BBE\u7F6E\u597D\u4EE5\u540E\uFF0C\u6570\u636E\u66F4\u65B0\u7684\u66FF\u6362\u6A21\u5F0F\u662F\u4E0D\u518D\u6539\u53D8\u7684\u3002<br> \u6839\u636E\u539F\u6765\u7684\u8FFD\u52A0\u4EE5\u53CA\u8986\u76D6\uFF0C\u65B0\u589E\u4E86\u4E00\u79CD\u90E8\u5206\u66FF\u6362 Replace \uFF0C\u5E38\u7528\u4E8E\u997C\u56FE\u6570\u636E\u7684\u53D8\u5316\u3002</p></li></ul><div class="language-ts"><pre><code><span class="token comment">// \u4E0A\u6587\u4E2D\u7684 overwrite \u4E0D\u518D\u53EF\u4EE5\u51B3\u5B9A\u8FFD\u52A0\u6216\u8986\u76D6\uFF0C\u9700\u8981\u63D0\u524D\u4E3A echarts \u753B\u7B14\u914D\u7F6E echarts.replaceMode \u5C5E\u6027</span>
<span class="token keyword">export</span> <span class="token keyword">enum</span> ReplaceMode <span class="token punctuation">{</span>
  Add<span class="token punctuation">,</span>
  Replace<span class="token punctuation">,</span>
  ReplaceAll<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ChartPen</span> <span class="token keyword">extends</span> <span class="token class-name">Pen</span> <span class="token punctuation">{</span>
  echarts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span> <span class="token comment">// echarts \u53C2\u6570</span>
    max<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// \u6700\u5927\u6570\u636E\u91CF</span>
    replaceMode<span class="token operator">:</span> ReplaceMode<span class="token punctuation">;</span> <span class="token comment">// \u66FF\u6362\u6A21\u5F0F</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1. \u997C\u56FE\u793A\u4F8B</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;echarts&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  echarts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      tooltip<span class="token operator">:</span> <span class="token punctuation">{</span>
        trigger<span class="token operator">:</span> <span class="token string">&quot;item&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Access From&quot;</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">&quot;pie&quot;</span><span class="token punctuation">,</span>
          radius<span class="token operator">:</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;\u6237\u6570&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;\u7535\u538B&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;\u7535\u6D41&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          emphasis<span class="token operator">:</span> <span class="token punctuation">{</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              shadowBlur<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
              shadowOffsetX<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              shadowColor<span class="token operator">:</span> <span class="token string">&quot;rgba(0, 0, 0, 0.5)&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    max<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
    replaceMode<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// \u90E8\u5206\u66FF\u6362</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> pen<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  <span class="token comment">// \u997C\u56FE\uFF0CdataY \u4E2D\u7684 name \u51B3\u5B9A\u66FF\u6362\u997C\u56FE\u4E2D\u7684\u54EA\u4E00\u90E8\u5206</span>
  dataY<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">88</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;\u6237\u6570&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. \u6298\u7EBF\u56FE\u793A\u4F8B</span>
<span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;echarts&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  echarts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u7535\u6D41&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6237\u6570&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7535\u538B&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">820</span><span class="token punctuation">,</span> <span class="token number">932</span><span class="token punctuation">,</span> <span class="token number">901</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    max<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
    replaceMode<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> pen<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  <span class="token comment">// \u6298\u7EBF\u56FE dataX \u6807\u8BC6\u66FF\u6362\u54EA\u4E2A category \u6240\u5BF9\u5E94\u7684 \u503C</span>
  dataX<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u7535\u538B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u7535\u6D41&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  dataY<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="highcharts-\u56FE\u8868" tabindex="-1">highcharts \u56FE\u8868 <a class="header-anchor" href="#highcharts-\u56FE\u8868" aria-hidden="true">#</a></h2><ul><li>\u5F15\u5165</li></ul><p>\u5728 html \u4E2D\u5F15\u5165 highcharts , cdn \u82E5\u6302\u4E86\uFF0C\u4E0B\u8F7D\u5230\u672C\u5730</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://cdn.highcharts.com.cn/highcharts/highcharts.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.highcharts.com.cn/highcharts/highcharts-more.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>\u6CE8\u518C</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> registerHighcharts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@topology/chart-diagram&quot;</span><span class="token punctuation">;</span>

<span class="token function">registerHighcharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u4F7F\u7528</li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;highcharts&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  highcharts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      chart<span class="token operator">:</span> <span class="token punctuation">{</span>
        backgroundColor<span class="token operator">:</span> <span class="token string">&quot;#ffffff00&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      credits<span class="token operator">:</span> <span class="token punctuation">{</span>
        enabled<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">820</span><span class="token punctuation">,</span> <span class="token number">932</span><span class="token punctuation">,</span> <span class="token number">901</span><span class="token punctuation">,</span> <span class="token number">934</span><span class="token punctuation">,</span> <span class="token number">1290</span><span class="token punctuation">,</span> <span class="token number">1330</span><span class="token punctuation">,</span> <span class="token number">1320</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          type<span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u6570\u636E\u66F4\u65B0</li></ul><p>\u540C <a href="./pens.html#echarts\u56FE\u8868">echarts \u6570\u636E\u66F4\u65B0</a></p><h2 id="lightningchart-\u56FE\u8868" tabindex="-1">LightningChart \u56FE\u8868 <a class="header-anchor" href="#lightningchart-\u56FE\u8868" aria-hidden="true">#</a></h2><p>\u53C2\u8003 echarts \u7684\u914D\u7F6E\u683C\u5F0F\uFF0C\u5728 lightningCharts \u5E93\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u5C01\u88C5\uFF0C\u76EE\u524D\u652F\u6301\u7684\u5C5E\u6027\u914D\u7F6E\uFF08lightningCharts.option\uFF09\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>\u56FE\u8868\u7C7B\u578B\u3002\u53EF\u9009&#39;line&#39;|&#39;bar&#39;|&#39;pie&#39;|&#39;gauge&#39;</td></tr><tr><td>theme</td><td>string</td><td>\u4E3B\u9898\u3002\u53C2\u8003 <a href="https://www.arction.com/lightningchart-js-api-documentation/v3.4.0/interfaces/themes.html" target="_blank" rel="noopener noreferrer">\u9ED8\u8BA4\u5E93\u989C\u8272\u4E3B\u9898</a></td></tr><tr><td>data</td><td>any</td><td>\u6570\u636E</td></tr><tr><td>title</td><td>string</td><td>\u56FE\u8868\u6807\u9898</td></tr><tr><td>groups</td><td>string[]</td><td>&#39;bar&#39;\u7C7B\u578B\u5206\u7EC4</td></tr><tr><td>categories</td><td>string[]</td><td>&#39;bar&#39;\u7C7B\u578B\u5206\u7C7B</td></tr><tr><td>yTitle</td><td>string</td><td>&#39;bar&#39;\u7C7B\u578B y \u8F74\u6807\u9898</td></tr><tr><td>innerRadius</td><td>number</td><td>&#39;pie&#39;\u7C7B\u578B\u5185\u5706\u5360\u6BD4</td></tr><tr><td>startAngle</td><td>string</td><td>&#39;gauge&#39;\u7C7B\u578B\u8D77\u59CB\u89D2\u5EA6\uFF0C\u9ED8\u8BA4 225</td></tr><tr><td>endAngle</td><td>string</td><td>&#39;gauge&#39;\u7C7B\u578B\u7ED3\u675F\u89D2\u5EA6\uFF0C\u9ED8\u8BA4-45</td></tr><tr><td>min</td><td>number</td><td>&#39;gauge&#39;\u7C7B\u578B\u6700\u5C0F\u503C\uFF0C\u9ED8\u8BA4 0</td></tr><tr><td>max</td><td>number</td><td>&#39;gauge&#39;\u7C7B\u578B\u6700\u5927\u503C\uFF0C\u9ED8\u8BA4 100</td></tr><tr><td>background</td><td>string</td><td>&#39;gauge&#39;\u7C7B\u578B\u586B\u5145\u989C\u8272</td></tr></tbody></table><ul><li>\u6CE8\u518C</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> registerLightningChart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@topology/chart-diagram&quot;</span><span class="token punctuation">;</span>

<span class="token function">registerLightningChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u4F7F\u7528</li></ul><div class="language-js"><pre><code><span class="token comment">//\u6298\u7EBF\u56FE</span>
<span class="token keyword">const</span> line <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;lightningCharts&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  lightningCharts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
      theme<span class="token operator">:</span> <span class="token string">&quot;darkGreen&quot;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Sports Car&quot;</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">40</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">230</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">60</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">290</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">70</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Family Car&quot;</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">230</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">390</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">470</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">40</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">540</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">60</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">70</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Pick-up Car&quot;</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">230</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">40</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">380</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">450</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">60</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">580</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">70</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u67F1\u72B6\u56FE</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;lightningCharts&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  lightningCharts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
      theme<span class="token operator">:</span> <span class="token string">&quot;darkGreen&quot;</span><span class="token punctuation">,</span>
      groups<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Finland&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Germany&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;UK&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      categories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Engineers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sales&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Marketing&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">62</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      title<span class="token operator">:</span> <span class="token string">&quot;My first chart&quot;</span><span class="token punctuation">,</span>
      yTitle<span class="token operator">:</span> <span class="token string">&quot;\u7EB5\u5750\u6807&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u997C\u56FE</span>
<span class="token keyword">const</span> pie <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;lightningCharts&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  lightningCharts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;pie&quot;</span><span class="token punctuation">,</span>
      innerRadius<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Planning&quot;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Development&quot;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Testing&quot;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Review&quot;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Bug Fixing&quot;</span><span class="token punctuation">,</span>
          value<span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pie<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u8FDB\u5EA6\u6761</span>
<span class="token keyword">const</span> gauge <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;lightningCharts&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  lightningCharts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;gauge&quot;</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
      <span class="token comment">// title: &#39;\u8FDB\u5EA6\u6761&#39;,</span>
      <span class="token comment">// startAngle: 90,</span>
      <span class="token comment">// endAngle: -270,</span>
      background<span class="token operator">:</span> <span class="token string">&quot;#0000ff&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>gauge<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,54),c=[e];function u(l,k,r,i,d,g){return a(),s("div",null,c)}var b=n(o,[["render",u]]);export{h as __pageData,b as default};
