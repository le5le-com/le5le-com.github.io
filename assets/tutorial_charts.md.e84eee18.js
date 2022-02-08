import{_ as n,c as s,o as a,a as t}from"./app.4d5ae0f8.js";const m='{"title":"\u56FE\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"lineChart \u6298\u7EBF\u56FE","slug":"linechart-\u6298\u7EBF\u56FE"},{"level":2,"title":"histogram \u67F1\u72B6\u56FE","slug":"histogram-\u67F1\u72B6\u56FE"},{"level":2,"title":"pieChart \u997C\u56FE","slug":"piechart-\u997C\u56FE"},{"level":2,"title":"gauge \u4EEA\u8868\u76D8","slug":"gauge-\u4EEA\u8868\u76D8"},{"level":2,"title":"\u6570\u636E\u5B9E\u65F6\u66F4\u65B0","slug":"\u6570\u636E\u5B9E\u65F6\u66F4\u65B0"}],"relativePath":"tutorial/charts.md","lastUpdated":1644306234061}',p={},o=t(`<h1 id="\u56FE\u8868" tabindex="-1">\u56FE\u8868 <a class="header-anchor" href="#\u56FE\u8868" aria-hidden="true">#</a></h1><p>\u539F\u751F topology \u56FE\u8868\u63A7\u4EF6\uFF0C\u66F4\u65B9\u4FBF\u7684\u652F\u6301\u539F\u751F\u4EA4\u4E92\u4E8B\u4EF6\u548C\u56FE\u5C42\u3002\u5305\u542B\uFF1A\u6298\u7EBF\u56FE\u3001\u67F1\u72B6\u56FE\u3001\u997C\u56FE\u3001\u4EEA\u8868\u76D8\u7B49\uFF0C\u66F4\u591A\u6B22\u8FCE\u8054\u7CFB\u6211\u4EEC\u3002</p><p>\u6CE8\u610F\uFF1Ale5le charts\u5BF9echarts\u683C\u5F0F\u6570\u636E\u505A\u4E86\u517C\u5BB9\u6027\u5904\u7406\uFF08\u4EC5\u63D0\u53D6\u4E00\u4E9B\u6709\u6548\u6570\u636E\uFF09\u3002</p><h2 id="linechart-\u6298\u7EBF\u56FE" tabindex="-1">lineChart \u6298\u7EBF\u56FE <a class="header-anchor" href="#linechart-\u6298\u7EBF\u56FE" aria-hidden="true">#</a></h2><ul><li><strong>\u6570\u636E</strong></li></ul><p>\u5F53\u524D\u652F\u6301\u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>chartsColor</td><td>string[]</td><td>\u8C03\u8272\u76D8\u989C\u8272\u5217\u8868</td></tr><tr><td>xAxisData</td><td>string[]</td><td>\u6A2A\u5750\u6807\u503C</td></tr><tr><td>data</td><td>number[]</td><td>\u7EB5\u5750\u6807\u6570\u636E\u503C</td></tr><tr><td>smooth</td><td>boolean</td><td>\u6298\u7EBF\u56FE\u662F\u5426\u5E73\u6ED1</td></tr></tbody></table><ul><li><strong>\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> linechart <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;lineChart&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  chartsColor<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#2FC25B&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#FACC14&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#c23531&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#2f4554&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#61a0a8&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#d48265&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  xAxisData<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  smooth<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">1820</span><span class="token punctuation">,</span> <span class="token number">1932</span><span class="token punctuation">,</span> <span class="token number">1901</span><span class="token punctuation">,</span> <span class="token number">1934</span><span class="token punctuation">,</span> <span class="token number">1990</span><span class="token punctuation">,</span> <span class="token number">1830</span><span class="token punctuation">,</span> <span class="token number">1920</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1710</span><span class="token punctuation">,</span> <span class="token number">1932</span><span class="token punctuation">,</span> <span class="token number">1901</span><span class="token punctuation">,</span> <span class="token number">1834</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">,</span> <span class="token number">1830</span><span class="token punctuation">,</span> <span class="token number">1720</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>linechart<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u4F7F\u7528echarts\u683C\u5F0F</span>
<span class="token keyword">const</span> linechart <span class="token operator">=</span><span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;lineChart&#39;</span><span class="token punctuation">,</span>
    x<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    echarts<span class="token operator">:</span> <span class="token punctuation">{</span>
      option<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#2FC25B&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#FACC14&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#c23531&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#2f4554&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#61a0a8&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#d48265&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
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
<span class="token punctuation">}</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>linechart<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="histogram-\u67F1\u72B6\u56FE" tabindex="-1">histogram \u67F1\u72B6\u56FE <a class="header-anchor" href="#histogram-\u67F1\u72B6\u56FE" aria-hidden="true">#</a></h2><ul><li><p><strong>\u6570\u636E</strong></p><p>\u5F53\u524D\u652F\u6301\u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>chartsColor</td><td>string[]</td><td>\u8C03\u8272\u76D8\u989C\u8272\u5217\u8868</td></tr><tr><td>xAxisData</td><td>string[]</td><td>\u6A2A\u5750\u6807\u503C</td></tr><tr><td>data</td><td>number[]</td><td>\u7EB5\u5750\u6807\u6570\u636E\u503C</td></tr></tbody></table></li><li><p><strong>\u4F7F\u7528</strong></p></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> histogram <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;histogram&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  specialProp<span class="token operator">:</span> <span class="token string">&#39;charts&#39;</span><span class="token punctuation">,</span>
  chartsColor<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#2FC25B&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#FACC14&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#c23531&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#2f4554&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#61a0a8&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#d48265&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  xAxisData<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">140</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>histogram<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//echarts\u683C\u5F0F</span>
<span class="token keyword">const</span> histogram <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;histogram&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  echarts<span class="token operator">:</span> <span class="token punctuation">{</span>
      option<span class="token operator">:</span> <span class="token punctuation">{</span>
         color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        yAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        series<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            type<span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>histogram<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="piechart-\u997C\u56FE" tabindex="-1">pieChart \u997C\u56FE <a class="header-anchor" href="#piechart-\u997C\u56FE" aria-hidden="true">#</a></h2><ul><li><p><strong>\u6570\u636E</strong></p><p>\u5F53\u524D\u652F\u6301\u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>chartsColor</td><td>string[]</td><td>\u8C03\u8272\u76D8\u989C\u8272\u5217\u8868</td></tr><tr><td>chartsRadius[i]</td><td>string[]</td><td>\u997C\u56FE\u7684\u534A\u5F84\u8303\u56F4</td></tr><tr><td>data[i][j].name</td><td>string</td><td>\u6570\u636E\u540D</td></tr><tr><td>series[i][j].value</td><td>number</td><td>\u6570\u636E\u503C</td></tr></tbody></table></li><li><p><strong>\u4F7F\u7528</strong></p></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> pie <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;pieChart&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  chartsColor<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#36CBCB&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#2FC25B&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#FACC14&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#F2637B&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#fc8452&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#9a60b4&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;#ea7ccc&#39;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">1048</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Search Engine&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">735</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Direct&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">580</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Email&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">484</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Union Ads&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Video Ads&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">1548</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Search&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">775</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Direct&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">679</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Market&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  chartsRadius<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;60%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;70%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;0%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pie<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//echarts\u683C\u5F0F</span>

<span class="token keyword">const</span> pie <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;pieChart&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
   echarts<span class="token operator">:</span> <span class="token punctuation">{</span>
      option<span class="token operator">:</span> <span class="token punctuation">{</span>
        color<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#2FC25B&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#FACC14&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#c23531&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#2f4554&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#61a0a8&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#d48265&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#fc8452&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#9a60b4&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;#ea7ccc&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        series<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;60%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            label<span class="token operator">:</span> <span class="token punctuation">{</span>
              position<span class="token operator">:</span> <span class="token string">&#39;inner&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            labelLine<span class="token operator">:</span> <span class="token punctuation">{</span>
              show<span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">1548</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Search Engine&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">775</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Direct&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">679</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Marketing&#39;</span><span class="token punctuation">,</span> selected<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;80%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;90%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">1048</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Baidu&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">335</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Direct&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">310</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Email&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">251</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Google&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">234</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Union Ads&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">147</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Bing&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">135</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Video Ads&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">102</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;Others&#39;</span> <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pie<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="gauge-\u4EEA\u8868\u76D8" tabindex="-1">gauge \u4EEA\u8868\u76D8 <a class="header-anchor" href="#gauge-\u4EEA\u8868\u76D8" aria-hidden="true">#</a></h2><ul><li><p><strong>\u6570\u636E</strong></p></li><li><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>startAngle</td><td>number</td><td>\u8D77\u59CB\u89D2\uFF0C\u9ED8\u8BA4225</td></tr><tr><td>endAngle</td><td>number</td><td>\u7ED3\u675F\u89D2\uFF0C\u9ED8\u8BA4-45</td></tr><tr><td>min</td><td>number</td><td>\u91CF\u7A0B\u6700\u5C0F\u503C\uFF0C\u9ED8\u8BA40</td></tr><tr><td>max</td><td>number</td><td>\u91CF\u7A0B\u6700\u5927\u503C\uFF0C\u9ED8\u8BA4100</td></tr><tr><td>axisLine</td><td>number</td><td>\u8F74\u7EBF\u5206\u6BB5\u6BD4\u4F8B\u53CA\u6570\u503C</td></tr><tr><td>unit</td><td>string</td><td>\u5355\u4F4D</td></tr><tr><td>value</td><td>number</td><td>\u5F53\u524D\u503C</td></tr><tr><td>splitNumber</td><td>number</td><td>\u4E3B\u7B49\u5206\u7EBF\uFF0C\u9ED8\u8BA410</td></tr><tr><td>isClock</td><td>boolean</td><td>\u662F\u5426\u4E3A\u65F6\u949F</td></tr><tr><td>splitNumber</td><td>number</td><td>\u4E3B\u7B49\u5206\u7EBF\uFF0C\u9ED8\u8BA410</td></tr></tbody></table></li><li><p><strong>\u4F7F\u7528</strong></p></li></ul><ol><li>\u9636\u6BB5\u901F\u5EA6\u4EEA\u8868\u76D8</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> gauge <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;gauge&#39;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  value<span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
  unit<span class="token operator">:</span> <span class="token string">&#39;m/s&#39;</span><span class="token punctuation">,</span>
  axisLine<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token string">&#39;#67e0e3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">0.7</span><span class="token punctuation">,</span> <span class="token string">&#39;#37a2da&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;#fd666d&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  animateCycle<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  keepAnimateState<span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>gauge<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//echarts \u683C\u5F0F</span>

<span class="token keyword">const</span> gauge<span class="token operator">=</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;gauge&#39;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  echarts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
       series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;gauge&#39;</span><span class="token punctuation">,</span>
          axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              width<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
              color<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span><span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token string">&#39;#67e0e3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span><span class="token number">0.7</span><span class="token punctuation">,</span> <span class="token string">&#39;#37a2da&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;#fd666d&#39;</span><span class="token punctuation">]</span>
              <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          pointer<span class="token operator">:</span> <span class="token punctuation">{</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              color<span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            distance<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">30</span><span class="token punctuation">,</span>
            length<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
              width<span class="token operator">:</span> <span class="token number">2</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            distance<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">30</span><span class="token punctuation">,</span>
            length<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              color<span class="token operator">:</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">,</span>
              width<span class="token operator">:</span> <span class="token number">4</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
            distance<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
            fontSize<span class="token operator">:</span> <span class="token number">20</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          detail<span class="token operator">:</span> <span class="token punctuation">{</span>
            valueAnimation<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            formatter<span class="token operator">:</span> <span class="token string">&#39;{value} km/h&#39;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              value<span class="token operator">:</span> <span class="token number">70</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>gauge<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>\u65F6\u949F</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> clock <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;gauge&#39;</span><span class="token punctuation">,</span>
    x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    isClock<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    startAngle<span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
    endAngle<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">270</span><span class="token punctuation">,</span>
    min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    max<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    splitNumber<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    background<span class="token operator">:</span> <span class="token string">&#39;#3A3A3A&#39;</span><span class="token punctuation">,</span>
    color<span class="token operator">:</span> <span class="token string">&#39;#C0911F&#39;</span>
<span class="token punctuation">}</span>
topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>clock<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6570\u636E\u5B9E\u65F6\u66F4\u65B0" tabindex="-1">\u6570\u636E\u5B9E\u65F6\u66F4\u65B0 <a class="header-anchor" href="#\u6570\u636E\u5B9E\u65F6\u66F4\u65B0" aria-hidden="true">#</a></h2><ol><li>\u901A\u8FC7setValue\u65B9\u5F0F</li></ol><div class="language-js"><pre><code><span class="token comment">//1. echarts/highCharts\u56FE\u5143</span>
<span class="token comment">//\u8FD9\u91CC\u4EE5echarts\u7684\u6298\u7EBF\u56FE\u4E3A\u4F8B</span>
<span class="token comment">//\u2460 \u9009\u4E2D\u6298\u7EBF\u56FE\u8282\u70B9</span>
<span class="token comment">//\u2461 \u63A7\u5236\u53F0\u6572\u5982\u4E0B\u4EE3\u7801</span>
topology<span class="token punctuation">.</span>store<span class="token punctuation">.</span>active<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>echarts<span class="token punctuation">.</span>option<span class="token punctuation">.</span>series<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">932</span><span class="token punctuation">,</span> <span class="token number">901</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">1290</span><span class="token punctuation">,</span> <span class="token number">1330</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
topology<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>topology<span class="token punctuation">.</span>store<span class="token punctuation">.</span>active<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>\u901A\u8FC7mqtt\u7B49\u534F\u8BAE\u901A\u4FE1\u65B9\u5F0F</li></ol><ul><li><p>\u5173\u4E8E\u914D\u7F6E\u901A\u4FE1\u534F\u8BAE\u53EF\u4EE5\u53C2\u8003<a href="./../tutorial/data.html#\u6D88\u606F\u901A\u4FE1">\u6D88\u606F\u901A\u4FE1</a></p></li><li><p>\u8FD9\u91CC\u4EE5echarts\u4E2D\u7684\u6298\u7EBF\u56FE\u4E3A\u4F8B\uFF0C\u53D1\u9001\u7684\u6570\u636E\u683C\u5F0F\u5982\u4E0B\uFF1A</p></li></ul><div class="language-json"><pre><code><span class="token punctuation">{</span>
<span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;topology&quot;</span><span class="token punctuation">,</span> 
<span class="token property">&quot;echarts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token property">&quot;option&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;xAxis&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;category&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;yAxis&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;value&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;series&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
          <span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">932</span><span class="token punctuation">,</span> <span class="token number">901</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token number">1290</span><span class="token punctuation">,</span> <span class="token number">1330</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;line&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,27),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var b=n(p,[["render",c]]);export{m as __pageData,b as default};
