import{_ as n,c as s,o as a,a as t}from"./app.8f626b93.js";const g='{"title":"\u56FE\u8868","description":"","frontmatter":{},"headers":[{"level":2,"title":"lineChart \u6298\u7EBF\u56FE","slug":"linechart-\u6298\u7EBF\u56FE"},{"level":2,"title":"histogram \u67F1\u72B6\u56FE","slug":"histogram-\u67F1\u72B6\u56FE"},{"level":2,"title":"pieChart \u997C\u56FE","slug":"piechart-\u997C\u56FE"},{"level":2,"title":"gauge \u4EEA\u8868\u76D8","slug":"gauge-\u4EEA\u8868\u76D8"}],"relativePath":"tutorial/charts.md","lastUpdated":1640856795742}',p={},o=t(`<h1 id="\u56FE\u8868" tabindex="-1">\u56FE\u8868 <a class="header-anchor" href="#\u56FE\u8868" aria-hidden="true">#</a></h1><p>\u539F\u751F topology \u56FE\u8868\u63A7\u4EF6\uFF0C\u66F4\u65B9\u4FBF\u7684\u652F\u6301\u539F\u751F\u4EA4\u4E92\u4E8B\u4EF6\u548C\u56FE\u5C42\u3002\u5305\u542B\uFF1A\u6298\u7EBF\u56FE\u3001\u67F1\u72B6\u56FE\u3001\u997C\u56FE\u3001\u4EEA\u8868\u76D8\u7B49\uFF0C\u66F4\u591A\u6B22\u8FCE\u8054\u7CFB\u6211\u4EEC\u3002</p><p>\u6570\u636E\u683C\u5F0F\u53C2\u8003\uFF1Aecharts\u3002</p><h2 id="linechart-\u6298\u7EBF\u56FE" tabindex="-1">lineChart \u6298\u7EBF\u56FE <a class="header-anchor" href="#linechart-\u6298\u7EBF\u56FE" aria-hidden="true">#</a></h2><ul><li><strong>\u6570\u636E</strong></li></ul><p>\u5F53\u524D\u652F\u6301\u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>color</td><td>string[]</td><td>\u8C03\u8272\u76D8\u989C\u8272\u5217\u8868</td></tr><tr><td>xAxis.data</td><td>string[]</td><td>\u6A2A\u5750\u6807\u503C</td></tr><tr><td>series[i].data</td><td>number[]</td><td>\u7EB5\u5750\u6807\u6570\u636E\u503C</td></tr><tr><td>series[i].smooth</td><td>boolean</td><td>\u6298\u7EBF\u56FE\u662F\u5426\u5E73\u6ED1</td></tr></tbody></table><ul><li><strong>\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> linechart <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;lineChart&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  charts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      color<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;#1890ff&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#2FC25B&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#FACC14&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#c23531&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#2f4554&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#61a0a8&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#d48265&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Email&quot;</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1820</span><span class="token punctuation">,</span> <span class="token number">1932</span><span class="token punctuation">,</span> <span class="token number">1901</span><span class="token punctuation">,</span> <span class="token number">1934</span><span class="token punctuation">,</span> <span class="token number">1990</span><span class="token punctuation">,</span> <span class="token number">1830</span><span class="token punctuation">,</span> <span class="token number">1920</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          smooth<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Video Ads&quot;</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1710</span><span class="token punctuation">,</span> <span class="token number">1932</span><span class="token punctuation">,</span> <span class="token number">1901</span><span class="token punctuation">,</span> <span class="token number">1834</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">,</span> <span class="token number">1830</span><span class="token punctuation">,</span> <span class="token number">1720</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>linechart<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u4FEE\u6539\u6570\u636E</span>
topology<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token string">&quot;\u6298\u7EBF\u56FE\u8282\u70B9id&quot;</span><span class="token punctuation">,</span>
  charts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      color<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;#1890ff&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#2FC25B&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#FACC14&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#c23531&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#2f4554&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#61a0a8&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#d48265&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Email&quot;</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">1932</span><span class="token punctuation">,</span> <span class="token number">1901</span><span class="token punctuation">,</span> <span class="token number">1934</span><span class="token punctuation">,</span> <span class="token number">190</span><span class="token punctuation">,</span> <span class="token number">1830</span><span class="token punctuation">,</span> <span class="token number">1920</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          smooth<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;Video Ads&quot;</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1710</span><span class="token punctuation">,</span> <span class="token number">192</span><span class="token punctuation">,</span> <span class="token number">1901</span><span class="token punctuation">,</span> <span class="token number">1834</span><span class="token punctuation">,</span> <span class="token number">1700</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">1720</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          smooth<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="histogram-\u67F1\u72B6\u56FE" tabindex="-1">histogram \u67F1\u72B6\u56FE <a class="header-anchor" href="#histogram-\u67F1\u72B6\u56FE" aria-hidden="true">#</a></h2><ul><li><p><strong>\u6570\u636E</strong></p><p>\u5F53\u524D\u652F\u6301\u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>color</td><td>string[]</td><td>\u8C03\u8272\u76D8\u989C\u8272\u5217\u8868</td></tr><tr><td>xAxis.data</td><td>string[]</td><td>\u6A2A\u5750\u6807\u503C</td></tr><tr><td>series[i].data</td><td>number[]</td><td>\u7EB5\u5750\u6807\u6570\u636E\u503C</td></tr></tbody></table></li><li><p><strong>\u4F7F\u7528</strong></p></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> histogram <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;histogram&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  charts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      color<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;#1890ff&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#2FC25B&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#FACC14&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#c23531&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#2f4554&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#61a0a8&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#d48265&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      xAxis<span class="token operator">:</span> <span class="token punctuation">{</span>
        data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Mon&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Tue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Wed&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Thu&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Fri&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sat&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Sun&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">140</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>histogram<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="piechart-\u997C\u56FE" tabindex="-1">pieChart \u997C\u56FE <a class="header-anchor" href="#piechart-\u997C\u56FE" aria-hidden="true">#</a></h2><ul><li><p><strong>\u6570\u636E</strong></p><p>\u5F53\u524D\u652F\u6301\u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>color</td><td>string[]</td><td>\u8C03\u8272\u76D8\u989C\u8272\u5217\u8868</td></tr><tr><td>series[i].radius</td><td>string[]</td><td>\u997C\u56FE\u7684\u534A\u5F84\u8303\u56F4</td></tr><tr><td>series[i].itemStyle.borderColor</td><td>string</td><td>\u997C\u56FE\u63CF\u8FB9\u989C\u8272</td></tr><tr><td>series[i].itemStyle.borderWidth</td><td>number</td><td>\u63CF\u8FB9\u7EBF\u5BBD</td></tr><tr><td>series[i].label.show</td><td>boolean</td><td>\u662F\u5426\u663E\u793A\u6587\u672C\u6807\u7B7E</td></tr><tr><td>series[i].label.position</td><td>number</td><td>\u6587\u672C\u6807\u7B7E\u4F4D\u7F6E(&#39;outside&#39;/&#39;inside&#39;)</td></tr><tr><td>series[i].labelLine.show</td><td>boolean</td><td>\u6587\u672C\u6807\u7B7E\u5F15\u5BFC\u7EBF\u662F\u5426\u663E\u793A</td></tr><tr><td>series[i].data[j].name</td><td>string</td><td>\u6570\u636E\u540D</td></tr><tr><td>series[i].data[j].value</td><td>number</td><td>\u6570\u636E\u503C</td></tr></tbody></table></li><li><p><strong>\u4F7F\u7528</strong></p></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> pie <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;pieChart&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  charts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      color<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;#1890ff&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#36CBCB&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#2FC25B&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#FACC14&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#F2637B&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#fc8452&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#9a60b4&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;#ea7ccc&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;60%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;70%&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            borderColor<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
            borderWidth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            position<span class="token operator">:</span> <span class="token string">&quot;outside&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          labelLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">1048</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;Search Engine&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">735</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;Direct&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">580</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;Email&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">484</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;Union Ads&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;Video Ads&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          radius<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;50%&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
            borderColor<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
            borderWidth<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          label<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            position<span class="token operator">:</span> <span class="token string">&quot;inside&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          labelLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">1548</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;Search&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">775</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;Direct&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">679</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&quot;Market&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>pie<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="gauge-\u4EEA\u8868\u76D8" tabindex="-1">gauge \u4EEA\u8868\u76D8 <a class="header-anchor" href="#gauge-\u4EEA\u8868\u76D8" aria-hidden="true">#</a></h2><ul><li><p><strong>\u6570\u636E</strong></p><p>series \u7684\u53EF\u7528\u5C5E\u6027\u914D\u7F6E\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>startAngle</td><td>number</td><td>\u4EEA\u8868\u76D8\u8D77\u59CB\u89D2\u5EA6\u3002\u5706\u5FC3 \u6B63\u53F3\u624B\u4FA7\u4E3A 0 \u5EA6\uFF0C\u6B63\u4E0A\u65B9\u4E3A 90 \u5EA6\uFF0C\u6B63\u5DE6\u624B\u4FA7\u4E3A 180 \u5EA6\u3002\u9ED8\u8BA4 225\u3002</td></tr><tr><td>endAngle</td><td>number</td><td>\u4EEA\u8868\u76D8\u7ED3\u675F\u89D2\u5EA6\u3002\u9ED8\u8BA4-45\u3002</td></tr><tr><td>min</td><td>number</td><td>\u6700\u5927\u503C\uFF0C\u9ED8\u8BA4 100\u3002</td></tr><tr><td>max</td><td>number</td><td>\u6700\u5C0F\u503C\uFF0C\u9ED8\u8BA4 0\u3002</td></tr><tr><td>splitNumber</td><td>number</td><td>\u4EEA\u8868\u76D8\u523B\u5EA6\u7684\u5206\u5272\u6BB5\u6570\u3002\u9ED8\u8BA4\u503C\u4E3A 10\u3002</td></tr><tr><td>radius</td><td>number</td><td>\u4EEA\u8868\u76D8\u534A\u5F84\u76F8\u5BF9\u4E8E min(width,hight)/2 \u7684\u767E\u5206\u6BD4\uFF0C\u9ED8\u8BA4&#39;75%&#39;\u3002</td></tr><tr><td>axisLine.show</td><td>boolean</td><td>\u662F\u5426\u663E\u793A\u4EEA\u8868\u76D8\u8F74\u7EBF(\u5305\u62EC\u4E86\u523B\u5EA6\u7EBF\u3001\u5206\u9694\u7EBF\u3001\u523B\u5EA6\u6807\u7B7E\u7684\u663E\u793A)</td></tr><tr><td>axisLine.lineStyle.width</td><td>number</td><td>\u4EEA\u8868\u76D8\u8F74\u7EBF\u5BBD\u5EA6</td></tr><tr><td>axisLine.lineStyle.color</td><td>string[][]</td><td>\u4EEA\u8868\u76D8\u7684\u8F74\u7EBF\u5206\u6BB5\u6BD4\u4F8B\u53CA\u6570\u503C</td></tr><tr><td>pointer.itemStyle.color</td><td>string</td><td>\u6307\u9488\u989C\u8272\uFF0C\u4E3A&#39;auto&#39;\u65F6\u6839\u636E\u5F53\u524D\u503C\u6240\u5728\u8F74\u7EBF\u5206\u6BB5\u989C\u8272\u786E\u5B9A\u3002</td></tr><tr><td>pointer.show</td><td>boolean</td><td>\u662F\u5426\u663E\u793A\u6307\u9488</td></tr><tr><td>pointer.length</td><td>string</td><td>\u6307\u9488\u957F\u5EA6\u76F8\u5BF9\u534A\u5F84\u957F\u5EA6\u7684\u767E\u5206\u6BD4</td></tr><tr><td>pointer.width</td><td>number</td><td>\u6307\u9488\u5BBD\u5EA6</td></tr><tr><td>axisTick.distance</td><td>number</td><td>\u523B\u5EA6\u7EBF\u4E0E\u8F74\u7EBF\u7684\u8DDD\u79BB\u3002</td></tr><tr><td>axisTick.length</td><td>number</td><td>\u523B\u5EA6\u7EBF\u957F\u5EA6</td></tr><tr><td>axisTick.lineStyle.color</td><td>string</td><td>\u523B\u5EA6\u7EBF\u957F\u5EA6</td></tr><tr><td>axisTick.lineStyle.width</td><td>number</td><td>\u523B\u5EA6\u7EBF\u7EBF\u5BBD</td></tr><tr><td>splitLine.distance</td><td>number</td><td>\u5206\u9694\u7EBF\u4E0E\u8F74\u7EBF\u7684\u8DDD\u79BB\u3002</td></tr><tr><td>splitLine.length</td><td>number</td><td>\u5206\u9694\u7EBF\u957F\u5EA6</td></tr><tr><td>splitLine.lineStyle.color</td><td>string</td><td>\u5206\u9694\u7EBF\u957F\u5EA6</td></tr><tr><td>splitLine.lineStyle.width</td><td>number</td><td>\u5206\u9694\u7EBF\u7EBF\u5BBD</td></tr><tr><td>splitLine.distance</td><td>number</td><td>\u5206\u9694\u7EBF\u4E0E\u8F74\u7EBF\u7684\u8DDD\u79BB\u3002</td></tr><tr><td>axisLabel.color</td><td>string</td><td>\u523B\u5EA6\u6807\u7B7E\u989C\u8272</td></tr><tr><td>axisLabel.distance</td><td>number</td><td>\u6807\u7B7E\u4E0E\u523B\u5EA6\u7EBF\u7684\u8DDD\u79BB</td></tr><tr><td>axisLabel.fontSize</td><td>number</td><td>\u523B\u5EA6\u6807\u7B7E\u6587\u5B57\u5927\u5C0F</td></tr><tr><td>detail.show</td><td>boolean</td><td>\u662F\u5426\u663E\u793A\u7EC6\u8282</td></tr><tr><td>detail.formatter</td><td>string</td><td>\u4EEA\u8868\u76D8\u8BE6\u60C5\uFF0C\u663E\u793A\u6570\u636E\u7684\u683C\u5F0F\u3002</td></tr><tr><td>detail.color</td><td>string</td><td>\u663E\u793A\u6570\u636E\u7684\u989C\u8272\uFF0C\u4E3A&#39;auto&#39;\u65F6\u6839\u636E\u5F53\u524D\u503C\u6240\u5728\u8F74\u7EBF\u5206\u6BB5\u989C\u8272\u786E\u5B9A\u3002</td></tr><tr><td>detail.offsetCenter</td><td>string[]</td><td>\u76F8\u5BF9\u4E8E\u4EEA\u8868\u76D8\u4E2D\u5FC3\u7684\u504F\u79FB\u4F4D\u7F6E\uFF0C\u6570\u7EC4\u7B2C\u4E00\u9879\u662F\u6C34\u5E73\u65B9\u5411\u76F8\u5BF9\u534A\u5F84\u7684\u504F\u79FB\u767E\u5206\u6BD4\uFF0C\u7B2C\u4E8C\u9879\u662F\u5782\u76F4\u65B9\u5411\u76F8\u5BF9\u534A\u5F84\u7684\u504F\u79FB\u767E\u5206\u6BD4\u3002</td></tr><tr><td>series[j].name+&#39;value&#39;</td><td>number</td><td>\u5F53\u524D\u503C\u3002</td></tr></tbody></table></li><li><p><strong>\u4F7F\u7528</strong></p></li></ul><ol><li>\u9636\u6BB5\u901F\u5EA6\u4EEA\u8868\u76D8</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> gauge <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;gauge&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  animateCycle<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">//\u52A8\u753B\u6267\u884C\u4E00\u6B21</span>
  value<span class="token operator">:</span><span class="token number">70</span><span class="token punctuation">,</span>
  charts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&quot;gauge&quot;</span><span class="token punctuation">,</span>
          axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              width<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
              color<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span><span class="token number">0.3</span><span class="token punctuation">,</span> <span class="token string">&quot;#67e0e3&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span><span class="token number">0.7</span><span class="token punctuation">,</span> <span class="token string">&quot;#37a2da&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;#fd666d&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          pointer<span class="token operator">:</span> <span class="token punctuation">{</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              color<span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            length<span class="token operator">:</span> <span class="token string">&quot;60%&quot;</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            distance<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">30</span><span class="token punctuation">,</span>
            length<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
              width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            distance<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">30</span><span class="token punctuation">,</span>
            length<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              color<span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>
              width<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
            distance<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
            fontSize<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          detail<span class="token operator">:</span> <span class="token punctuation">{</span>
            formatter<span class="token operator">:</span> <span class="token string">&quot;{value} km/h&quot;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
            offsetCenter<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;40%&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              value<span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>gauge<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="2"><li>\u65F6\u949F</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> clock <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;gauge&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  animateCycle<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  chartsType<span class="token operator">:</span> <span class="token string">&quot;clock&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u65F6\u949F\u6548\u679C</span>
  charts<span class="token operator">:</span> <span class="token punctuation">{</span>
    option<span class="token operator">:</span> <span class="token punctuation">{</span>
      series<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;hour&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u56FA\u5B9A\u503C</span>
          type<span class="token operator">:</span> <span class="token string">&quot;gauge&quot;</span><span class="token punctuation">,</span>
          startAngle<span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
          endAngle<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">270</span><span class="token punctuation">,</span>
          min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          max<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
          splitNumber<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
          axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              width<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
              color<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;rgba(0,0,0,0.7)&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          pointer<span class="token operator">:</span> <span class="token punctuation">{</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              color<span class="token operator">:</span> <span class="token string">&quot;#C0911F&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            length<span class="token operator">:</span> <span class="token string">&quot;40%&quot;</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          axisTick<span class="token operator">:</span> <span class="token punctuation">{</span>
            distance<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            length<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              color<span class="token operator">:</span> <span class="token string">&quot;#63677A&quot;</span><span class="token punctuation">,</span>
              width<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            distance<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            length<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              color<span class="token operator">:</span> <span class="token string">&quot;#63677A&quot;</span><span class="token punctuation">,</span>
              width<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>
            color<span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
            distance<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
            fontSize<span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          detail<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            formatter<span class="token operator">:</span> <span class="token string">&quot;{value} km/h&quot;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
            offsetCenter<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0%&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;40%&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              value<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;minute&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u56FA\u5B9A\u503C</span>
          type<span class="token operator">:</span> <span class="token string">&quot;gauge&quot;</span><span class="token punctuation">,</span>
          startAngle<span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
          endAngle<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">270</span><span class="token punctuation">,</span>
          min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          max<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
          splitNumber<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
          axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          pointer<span class="token operator">:</span> <span class="token punctuation">{</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              color<span class="token operator">:</span> <span class="token string">&quot;#C0911F&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            length<span class="token operator">:</span> <span class="token string">&quot;70%&quot;</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          detail<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              value<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;second&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u56FA\u5B9A\u503C</span>
          type<span class="token operator">:</span> <span class="token string">&quot;gauge&quot;</span><span class="token punctuation">,</span>
          startAngle<span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
          endAngle<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">270</span><span class="token punctuation">,</span>
          min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          max<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
          splitNumber<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
          axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          pointer<span class="token operator">:</span> <span class="token punctuation">{</span>
            itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
              color<span class="token operator">:</span> <span class="token string">&quot;#C0911F&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            length<span class="token operator">:</span> <span class="token string">&quot;90%&quot;</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          detail<span class="token operator">:</span> <span class="token punctuation">{</span>
            show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          data<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              value<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>clock<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,21),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var q=n(p,[["render",c]]);export{g as __pageData,q as default};
