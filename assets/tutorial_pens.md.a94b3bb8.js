import{_ as n,c as s,o as a,a as t}from"./app.30d56312.js";const h='{"title":"\u9ED8\u8BA4\u56FE\u5F62\u5E93","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u56FE\u5F62","slug":"\u57FA\u7840\u56FE\u5F62"},{"level":2,"title":"\u6D41\u7A0B\u56FE","slug":"\u6D41\u7A0B\u56FE"},{"level":2,"title":"\u6D3B\u52A8\u56FE","slug":"\u6D3B\u52A8\u56FE"},{"level":2,"title":"\u65F6\u5E8F\u56FE","slug":"\u65F6\u5E8F\u56FE"},{"level":2,"title":"\u7C7B\u56FE","slug":"\u7C7B\u56FE"},{"level":2,"title":"Echarts\u56FE\u8868","slug":"echarts\u56FE\u8868"},{"level":2,"title":"highcharts\u56FE\u8868","slug":"highcharts\u56FE\u8868"},{"level":2,"title":"LightningChart\u56FE\u8868","slug":"lightningchart\u56FE\u8868"}],"relativePath":"tutorial/pens.md","lastUpdated":1646274078302}',p={},o=t(`<h1 id="\u9ED8\u8BA4\u56FE\u5F62\u5E93" tabindex="-1">\u9ED8\u8BA4\u56FE\u5F62\u5E93 <a class="header-anchor" href="#\u9ED8\u8BA4\u56FE\u5F62\u5E93" aria-hidden="true">#</a></h1><p>topology \u6240\u6709\u56FE\u5F62\u5E93\u90FD\u662F\u52A8\u6001\u6269\u5C55\u7684\uFF0C\u4E3A\u4E86\u4F7F\u7528\u65B9\u4FBF\uFF0C\u5F15\u64CE\u76F4\u63A5\u5185\u7F6E\u4E86\u4E00\u4E9B\u57FA\u7840\u56FE\u5F62\u5E93\uFF0C\u63D0\u4F9B\u4E86\u6D41\u7A0B\u56FE\u76F8\u5173\u7684\u6269\u5C55\u5E93\uFF0C\u6309\u9700\u5BFC\u5165\u4F7F\u7528\u5373\u53EF\u3002</p><h2 id="\u57FA\u7840\u56FE\u5F62" tabindex="-1">\u57FA\u7840\u56FE\u5F62 <a class="header-anchor" href="#\u57FA\u7840\u56FE\u5F62" aria-hidden="true">#</a></h2><p>\u76F4\u63A5\u4F7F\u7528</p><table><thead><tr><th>name</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>rectangle</td><td>\u77E9\u5F62</td></tr><tr><td>circle</td><td>\u5706</td></tr><tr><td>triangle</td><td>\u4E09\u89D2\u5F62</td></tr><tr><td>diamond</td><td>\u83F1\u5F62</td></tr><tr><td>pentagon</td><td>\u4E94\u8FB9\u5F62</td></tr><tr><td>pentagram</td><td>\u4E94\u89D2\u661F</td></tr><tr><td>hexagon</td><td>\u516D\u8FB9\u5F62</td></tr><tr><td>leftArrow</td><td>\u5DE6\u7BAD\u5934</td></tr><tr><td>rightArrow</td><td>\u53F3\u7BAD\u5934</td></tr><tr><td>twowayArrow</td><td>\u53CC\u5411\u7BAD\u5934</td></tr><tr><td>message</td><td>\u6D88\u606F\u6846</td></tr><tr><td>cloud</td><td>\u4E91</td></tr><tr><td>file</td><td>\u6587\u4EF6</td></tr><tr><td>cube</td><td>\u7ACB\u65B9\u4F53</td></tr><tr><td>people</td><td>\u4EBA</td></tr><tr><td>line</td><td>\u7EBF</td></tr><tr><td>iframe</td><td>\u7F51\u9875</td></tr><tr><td>video</td><td>\u97F3\u89C6\u9891</td></tr><tr><td>gif</td><td>gif \u52A8\u753B</td></tr><tr><td>svgPath</td><td>svg path</td></tr></tbody></table><div class="language-js"><pre><code><span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span> <span class="token comment">// name \u4E3A\u4E0A\u9762\u8868\u683C\u4E2Dname</span>
  text<span class="token operator">:</span> <span class="token string">&#39;\u77E9\u5F62&#39;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6D41\u7A0B\u56FE" tabindex="-1">\u6D41\u7A0B\u56FE <a class="header-anchor" href="#\u6D41\u7A0B\u56FE" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> flowPens <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/flow-diagram&#39;</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">flowPens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><table><thead><tr><th>name</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>flowData</td><td>\u6570\u636E</td></tr><tr><td>flowSubprocess</td><td>\u5B50\u6D41\u7A0B</td></tr><tr><td>flowDb</td><td>\u6570\u636E\u5E93</td></tr><tr><td>flowDocument</td><td>\u6587\u6863</td></tr><tr><td>flowInternalStorage</td><td>\u5185\u90E8\u5B58\u50A8</td></tr><tr><td>flowQueue</td><td>\u961F\u5217</td></tr><tr><td>flowManually</td><td>\u624B\u52A8\u8F93\u5165</td></tr><tr><td>flowDisplay</td><td>\u5C55\u793A</td></tr><tr><td>flowParallel</td><td>\u5E76\u884C\u6A21\u5F0F</td></tr><tr><td>flowComment</td><td>\u6CE8\u91CA</td></tr></tbody></table><h2 id="\u6D3B\u52A8\u56FE" tabindex="-1">\u6D3B\u52A8\u56FE <a class="header-anchor" href="#\u6D3B\u52A8\u56FE" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> activityDiagram<span class="token punctuation">,</span> activityDiagramByCtx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/activity-diagram&#39;</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">activityDiagram</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u539F\u751Fcanvas\u7ED8\u753B\u7684\u56FE\u5E93\uFF0C\u652F\u6301\u903B\u8F91\u590D\u6742\u7684\u9700\u6C42</span>
topology<span class="token punctuation">.</span><span class="token function">registerCanvasDraw</span><span class="token punctuation">(</span><span class="token function">activityDiagramByCtx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><table><thead><tr><th>name</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>activityFinal</td><td>\u7ED3\u675F</td></tr><tr><td>swimlaneV</td><td>\u5782\u76F4\u6CF3\u9053</td></tr><tr><td>swimlaneH</td><td>\u6C34\u5E73\u6CF3\u9053</td></tr><tr><td>forkV</td><td>\u5782\u76F4\u5206\u5C94/\u6C47\u5408</td></tr><tr><td>forkH</td><td>\u6C34\u5E73\u5206\u5C94/\u6C47\u5408</td></tr></tbody></table><h2 id="\u65F6\u5E8F\u56FE" tabindex="-1">\u65F6\u5E8F\u56FE <a class="header-anchor" href="#\u65F6\u5E8F\u56FE" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sequencePens<span class="token punctuation">,</span> sequencePensbyCtx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/sequence-diagram&#39;</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">sequencePens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">registerCanvasDraw</span><span class="token punctuation">(</span><span class="token function">sequencePensbyCtx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><table><thead><tr><th>name</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>lifeline</td><td>\u751F\u547D\u7EBF</td></tr><tr><td>sequenceFocus</td><td>\u6FC0\u6D3B</td></tr></tbody></table><h2 id="\u7C7B\u56FE" tabindex="-1">\u7C7B\u56FE <a class="header-anchor" href="#\u7C7B\u56FE" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> classPens <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/class-diagram&#39;</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token function">classPens</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><table><thead><tr><th>name</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>simpleClass</td><td>\u7B80\u5355\u7C7B\u56FE</td></tr><tr><td>interfaceClass</td><td>\u666E\u901A\u7C7B\u56FE</td></tr></tbody></table><h2 id="echarts\u56FE\u8868" tabindex="-1">Echarts\u56FE\u8868 <a class="header-anchor" href="#echarts\u56FE\u8868" aria-hidden="true">#</a></h2><ul><li>\u6CE8\u518C</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> register <span class="token keyword">as</span> registerEcharts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/chart-diagram&#39;</span><span class="token punctuation">;</span>

<span class="token function">registerEcharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u4F7F\u7528</li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;echarts&#39;</span><span class="token punctuation">,</span>
    x<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    echarts<span class="token operator">:</span> <span class="token punctuation">{</span>
      option<span class="token operator">:</span> <span class="token punctuation">{</span>
        xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        series<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">820</span><span class="token punctuation">,</span> <span class="token number">932</span><span class="token punctuation">,</span> <span class="token number">901</span><span class="token punctuation">,</span> <span class="token number">934</span><span class="token punctuation">,</span> <span class="token number">1290</span><span class="token punctuation">,</span> <span class="token number">1330</span><span class="token punctuation">,</span> <span class="token number">1320</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="highcharts\u56FE\u8868" tabindex="-1">highcharts\u56FE\u8868 <a class="header-anchor" href="#highcharts\u56FE\u8868" aria-hidden="true">#</a></h2><ul><li>\u6CE8\u518C</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> registerHighcharts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/chart-diagram&#39;</span><span class="token punctuation">;</span>

<span class="token function">registerHighcharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u4F7F\u7528</li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> pen <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;highcharts&#39;</span><span class="token punctuation">,</span>
    x<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    highcharts<span class="token operator">:</span> <span class="token punctuation">{</span>
      option<span class="token operator">:</span> <span class="token punctuation">{</span>
        chart<span class="token operator">:</span> <span class="token punctuation">{</span>
          backgroundColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff00&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        credits<span class="token operator">:</span> <span class="token punctuation">{</span>
          enabled<span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        series<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">820</span><span class="token punctuation">,</span> <span class="token number">932</span><span class="token punctuation">,</span> <span class="token number">901</span><span class="token punctuation">,</span> <span class="token number">934</span><span class="token punctuation">,</span> <span class="token number">1290</span><span class="token punctuation">,</span> <span class="token number">1330</span><span class="token punctuation">,</span> <span class="token number">1320</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pen<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="lightningchart\u56FE\u8868" tabindex="-1">LightningChart\u56FE\u8868 <a class="header-anchor" href="#lightningchart\u56FE\u8868" aria-hidden="true">#</a></h2><p>\u53C2\u8003echarts\u7684\u914D\u7F6E\u683C\u5F0F\uFF0C\u5728lightningCharts\u5E93\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u5C01\u88C5\uFF0C\u76EE\u524D\u652F\u6301\u7684\u5C5E\u6027\u914D\u7F6E\uFF08lightningCharts.option\uFF09\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>\u56FE\u8868\u7C7B\u578B\u3002\u53EF\u9009&#39;line&#39;|&#39;bar&#39;|&#39;pie&#39;|&#39;gauge&#39;</td></tr><tr><td>theme</td><td>string</td><td>\u4E3B\u9898\u3002\u53C2\u8003 <a href="https://www.arction.com/lightningchart-js-api-documentation/v3.4.0/interfaces/themes.html" target="_blank" rel="noopener noreferrer">\u9ED8\u8BA4\u5E93\u989C\u8272\u4E3B\u9898</a></td></tr><tr><td>data</td><td>any</td><td>\u6570\u636E</td></tr><tr><td>title</td><td>string</td><td>\u56FE\u8868\u6807\u9898</td></tr><tr><td>groups</td><td>string[]</td><td>&#39;bar&#39;\u7C7B\u578B\u5206\u7EC4</td></tr><tr><td>categories</td><td>string[]</td><td>&#39;bar&#39;\u7C7B\u578B\u5206\u7C7B</td></tr><tr><td>yTitle</td><td>string</td><td>&#39;bar&#39;\u7C7B\u578By\u8F74\u6807\u9898</td></tr><tr><td>innerRadius</td><td>number</td><td>&#39;pie&#39;\u7C7B\u578B\u5185\u5706\u5360\u6BD4</td></tr><tr><td>startAngle</td><td>string</td><td>&#39;gauge&#39;\u7C7B\u578B\u8D77\u59CB\u89D2\u5EA6\uFF0C\u9ED8\u8BA4225</td></tr><tr><td>endAngle</td><td>string</td><td>&#39;gauge&#39;\u7C7B\u578B\u7ED3\u675F\u89D2\u5EA6\uFF0C\u9ED8\u8BA4-45</td></tr><tr><td>min</td><td>number</td><td>&#39;gauge&#39;\u7C7B\u578B\u6700\u5C0F\u503C\uFF0C\u9ED8\u8BA40</td></tr><tr><td>max</td><td>number</td><td>&#39;gauge&#39;\u7C7B\u578B\u6700\u5927\u503C\uFF0C\u9ED8\u8BA4100</td></tr><tr><td>background</td><td>string</td><td>&#39;gauge&#39;\u7C7B\u578B\u586B\u5145\u989C\u8272</td></tr></tbody></table><ul><li>\u6CE8\u518C</li></ul><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> registerLightningChart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@topology/chart-diagram&#39;</span><span class="token punctuation">;</span>

<span class="token function">registerLightningChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u4F7F\u7528</li></ul><div class="language-js"><pre><code><span class="token comment">//\u6298\u7EBF\u56FE</span>
<span class="token keyword">const</span> line <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;lightningCharts&#39;</span><span class="token punctuation">,</span>
    x<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    lightningCharts<span class="token operator">:</span> <span class="token punctuation">{</span>
      option<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&#39;line&#39;</span><span class="token punctuation">,</span>
        theme<span class="token operator">:</span> <span class="token string">&#39;darkGreen&#39;</span><span class="token punctuation">,</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;Sports Car&#39;</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">40</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">230</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">60</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">290</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">70</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;Family Car&#39;</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">230</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">390</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">470</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">40</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">540</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">60</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">70</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;Pick-up Car&#39;</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">230</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">40</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">380</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">450</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">60</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">580</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">70</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">&#39;title&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u67F1\u72B6\u56FE</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;lightningCharts&#39;</span><span class="token punctuation">,</span>
    x<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    lightningCharts<span class="token operator">:</span> <span class="token punctuation">{</span>
        option<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
          theme<span class="token operator">:</span> <span class="token string">&#39;darkGreen&#39;</span><span class="token punctuation">,</span>
          groups<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Finland&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Germany&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;UK&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          categories<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Engineers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sales&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Marketing&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">[</span><span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">62</span><span class="token punctuation">]</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          title<span class="token operator">:</span> <span class="token string">&#39;My first chart&#39;</span><span class="token punctuation">,</span>
          yTitle<span class="token operator">:</span> <span class="token string">&#39;\u7EB5\u5750\u6807&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u997C\u56FE</span>
<span class="token keyword">const</span> pie <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;lightningCharts&#39;</span><span class="token punctuation">,</span>
    x<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    lightningCharts<span class="token operator">:</span> <span class="token punctuation">{</span>
          option<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
            innerRadius<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                name<span class="token operator">:</span> <span class="token string">&#39;Planning&#39;</span><span class="token punctuation">,</span>
                value<span class="token operator">:</span> <span class="token number">40</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                name<span class="token operator">:</span> <span class="token string">&#39;Development&#39;</span><span class="token punctuation">,</span>
                value<span class="token operator">:</span> <span class="token number">120</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                name<span class="token operator">:</span> <span class="token string">&#39;Testing&#39;</span><span class="token punctuation">,</span>
                value<span class="token operator">:</span> <span class="token number">60</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                name<span class="token operator">:</span> <span class="token string">&#39;Review&#39;</span><span class="token punctuation">,</span>
                value<span class="token operator">:</span> <span class="token number">24</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                name<span class="token operator">:</span> <span class="token string">&#39;Bug Fixing&#39;</span><span class="token punctuation">,</span>
                value<span class="token operator">:</span> <span class="token number">90</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pie<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u8FDB\u5EA6\u6761</span>
<span class="token keyword">const</span> gauge <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;lightningCharts&#39;</span><span class="token punctuation">,</span>
    x<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    externElement<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    lightningCharts<span class="token operator">:</span> <span class="token punctuation">{</span>
          option<span class="token operator">:</span> <span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&#39;gauge&#39;</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
            <span class="token comment">// title: &#39;\u8FDB\u5EA6\u6761&#39;,</span>
            <span class="token comment">// startAngle: 90,</span>
            <span class="token comment">// endAngle: -270,</span>
            background<span class="token operator">:</span> <span class="token string">&#39;#0000ff&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>gauge<span class="token punctuation">)</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">inactive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,35),e=[o];function c(u,l,r,k,i,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{h as __pageData,m as default};