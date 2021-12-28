import{_ as n,c as s,o as a,a as t}from"./app.f92dd97e.js";const g='{"title":"\u8868\u683C","description":"","frontmatter":{},"relativePath":"tutorial/table.md","lastUpdated":1640677606243}',p={},o=t(`<h1 id="\u8868\u683C" tabindex="-1">\u8868\u683C <a class="header-anchor" href="#\u8868\u683C" aria-hidden="true">#</a></h1><p>table \u7C7B\u578B\u63A7\u4EF6</p><ul><li><strong>\u6570\u636E</strong></li></ul><ol><li><p>\u6837\u5F0F\u914D\u7F6E\uFF0Ctable \u5B57\u6BB5\u4E0B</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>cellHight</td><td>number</td><td>\u884C\u9AD8\uFF0C\u9ED8\u8BA4 30</td></tr><tr><td>cellWidth</td><td>number</td><td>\u5217\u5BBD\uFF0C\u9ED8\u8BA4 100</td></tr><tr><td>activeCellStyle</td><td>string</td><td>\u9009\u4E2D\u6846\u989C\u8272</td></tr><tr><td>header</td><td>object</td><td>\u8868\u5934\u6837\u5F0F\u914D\u7F6E\u3002\u53EF\u914D\u7F6E\u6837\u5F0F\u53C2\u8003\u884C\u6837\u5F0F\u914D\u7F6E</td></tr><tr><td>col</td><td>{<br> name:string,//\u5217\u540D <br>width?:number//\u5217\u5BBD <br>}[]</td><td>\u5217\u914D\u7F6E\uFF0C\u957F\u5EA6\u5373\u4E3A\u5217\u7684\u4E2A\u6570</td></tr></tbody></table></li><li><p>\u6570\u636E\u914D\u7F6E\uFF0Cdata \u5B57\u6BB5\u4E0B</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>data</td><td>object[]| array[]</td><td>\u4E3A object \u65F6\uFF0C\u53EF\u914D\u7F6E\u6570\u636E\u548C\u6837\u5F0F\uFF0C\u4E3A array \u65F6\uFF0C\u53EA\u80FD\u914D\u7F6E\u6570\u636E \u3002\u6BCF\u4E2A\u5355\u5143\u683C\u6570\u636E\u6709\u4E09\u79CD\u7C7B\u578B\uFF0C\u57FA\u672C\u6570\u636E\u7C7B\u578B\u3001\u5BF9\u8C61\u548C\u6570\u7EC4\uFF0C\u5206\u522B\u5BF9\u5E94\u6587\u672C\u3001\u5355\u4E2A\u5B50\u8282\u70B9\u548C\u591A\u4E2A\u5B50\u8282\u70B9</td></tr></tbody></table></li><li><p>\u884C\u6837\u5F0F\u914D\u7F6E</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>background</td><td>number</td><td>\u80CC\u666F\u989C\u8272</td></tr><tr><td>textColor</td><td>number</td><td>\u6587\u672C\u989C\u8272</td></tr><tr><td>fontWeight</td><td>number</td><td>\u6587\u672C\u52A0\u7C97</td></tr><tr><td>fontStyle</td><td>number</td><td>\u6587\u672C\u98CE\u683C</td></tr><tr><td>fontSize</td><td>number</td><td>\u6587\u5B57\u5927\u5C0F</td></tr><tr><td>fontFamily</td><td>number</td><td>\u6587\u672C\u5B57\u4F53</td></tr></tbody></table></li></ol><ul><li><strong>\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> table <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;table&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">250</span><span class="token punctuation">,</span>
  table<span class="token operator">:</span> <span class="token punctuation">{</span>
    cellWidth<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
    cellHeight<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
    activeCellStyle<span class="token operator">:</span> <span class="token string">&quot;#1890ff&quot;</span><span class="token punctuation">,</span>
    col<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&quot;\u5E8F\u53F7&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&quot;\u5217A&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&quot;\u5217B&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&quot;\u5217C&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        width<span class="token operator">:</span> <span class="token number">130</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&quot;\u64CD\u4F5C&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    header<span class="token operator">:</span> <span class="token punctuation">{</span>
      fontWeight<span class="token operator">:</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  data<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token comment">// \u53EF\u914D\u7F6E\u884C\u6837\u5F0F</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\u7B2C\u4E00\u884C \u7B2C\u4E00\u5217&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\u7B2C\u4E00\u884C \u7B2C\u4E8C\u5217&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\u7B2C\u4E00\u884C \u7B2C\u4E09\u5217&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">[</span>
          <span class="token comment">//\u6DFB\u52A0\u591A\u4E2A\u5B50\u8282\u70B9</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
            height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            text<span class="token operator">:</span> <span class="token string">&quot;\u63D0\u4EA4&quot;</span><span class="token punctuation">,</span>
            events<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
                value<span class="token operator">:</span> <span class="token string">&quot;console.log(pen.dataSet)&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
            height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            text<span class="token operator">:</span> <span class="token string">&quot;\u63D0\u4EA4&quot;</span><span class="token punctuation">,</span>
            events<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
                value<span class="token operator">:</span> <span class="token string">&quot;console.log(pen.dataSet)&quot;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\u7B2C\u4E8C\u884C \u7B2C\u4E00\u5217&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\u7B2C\u4E8C\u884C \u7B2C\u4E8C\u5217&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\u7B2C\u4E8C\u884C \u7B2C\u4E09\u5217&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
          width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
          height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          text<span class="token operator">:</span> <span class="token string">&quot;\u63D0\u4EA4&quot;</span><span class="token punctuation">,</span>
          events<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
              value<span class="token operator">:</span> <span class="token string">&quot;console.log(pen.dataSet)&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\u7B2C\u4E09\u884C \u7B2C\u4E00\u5217&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\u7B2C\u4E09\u884C \u7B2C\u4E8C\u5217&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\u7B2C\u4E09\u884C \u7B2C\u4E09\u5217&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token comment">//\u5355\u4E2A\u5B50\u8282\u70B9</span>
          name<span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
          width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
          height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          text<span class="token operator">:</span> <span class="token string">&quot;\u63D0\u4EA4&quot;</span><span class="token punctuation">,</span>
          events<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
              value<span class="token operator">:</span> <span class="token string">&quot;console.log(pen.dataSet)&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      data<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\u7B2C\u56DB\u884C \u7B2C\u4E00\u5217&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\u7B2C\u56DB\u884C \u7B2C\u4E8C\u5217&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\u7B2C\u56DB\u884C \u7B2C\u4E09\u5217&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
          width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
          height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
          text<span class="token operator">:</span> <span class="token string">&quot;\u63D0\u4EA4&quot;</span><span class="token punctuation">,</span>
          events<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span>
              value<span class="token operator">:</span> <span class="token string">&quot;console.log(pen.dataSet)&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  events<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//\u9ED8\u8BA4\u914D\u7F6E\u4E8B\u4EF6</span>
    <span class="token punctuation">{</span>
      action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&quot;leave&quot;</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
              pen.calculative.canvas.parent.setValue({
                id:pen.id,
                mousePos:null,
              });
              </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/*
  data: [
    [
      &quot;1&quot;,
      &quot;\u7B2C\u4E00\u884C \u7B2C\u4E00\u5217&quot;,
      &quot;\u7B2C\u4E00\u884C \u7B2C\u4E8C\u5217&quot;,
      &quot;\u7B2C\u4E00\u884C \u7B2C\u4E09\u5217&quot;,
      {
        name: &quot;button&quot;,
        width: 50,
        height: 20,
        text: &quot;\u63D0\u4EA4&quot;,
      },
    ],
    [&quot;2&quot;, &quot;\u7B2C\u4E8C\u884C \u7B2C\u4E00\u5217&quot;, &quot;\u7B2C\u4E8C\u884C \u7B2C\u4E8C\u5217&quot;, &quot;\u7B2C\u4E8C\u884C \u7B2C\u4E09\u5217&quot;],
    [
      &quot;3&quot;,
      &quot;\u7B2C\u4E09\u884C \u7B2C\u4E00\u5217&quot;,
      &quot;\u7B2C\u4E09\u884C \u7B2C\u4E8C\u5217&quot;,
      &quot;\u7B2C\u4E09\u884C \u7B2C\u4E09\u5217&quot;,
      [
        {
          name: &quot;button&quot;,
          width: 50,
          height: 20,
          text: &quot;\u63D0\u4EA4&quot;,
        },
        {
          name: &quot;button&quot;,
          width: 50,
          height: 20,
          text: &quot;\u63D0\u4EA4&quot;,
        },
        {
          name: &quot;button&quot;,
          width: 50,
          height: 20,
          text: &quot;\u63D0\u4EA4&quot;,
        },
      ],
    ],
  ],*/</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPens</span><span class="token punctuation">(</span><span class="token punctuation">[</span>table<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><strong>\u529F\u80FD</strong></li></ul><ol><li>\u53CC\u51FB\u7F16\u8F91\u5355\u5143\u683C;</li><li>\u975E\u6587\u672C\u5355\u5143\u683C\uFF08\u5373\u5B50\u8282\u70B9\uFF09\u7684 dataSet \u5B57\u6BB5\u4E0B\u4FDD\u5B58\u4E86\u6539\u884C\u7684\u6570\u636E\u3002</li></ol>`,8),e=[o];function c(u,l,k,i,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
