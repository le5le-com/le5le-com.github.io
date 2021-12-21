import{_ as n,c as s,o as a,a as t}from"./app.3885cfa9.js";const q='{"title":"\u8868\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"button \u6309\u94AE","slug":"button-\u6309\u94AE"},{"level":2,"title":"radio \u5355\u9009\u6846","slug":"radio-\u5355\u9009\u6846"},{"level":2,"title":"checkbox \u590D\u9009\u6846","slug":"checkbox-\u590D\u9009\u6846"},{"level":2,"title":"switch \u5F00\u5173","slug":"switch-\u5F00\u5173"},{"level":2,"title":"slider \u6ED1\u52A8\u8F93\u5165\u6761","slug":"slider-\u6ED1\u52A8\u8F93\u5165\u6761"},{"level":2,"title":"\u8F93\u5165\u6846","slug":"\u8F93\u5165\u6846"},{"level":2,"title":"\u9009\u62E9\u5668","slug":"\u9009\u62E9\u5668"}],"relativePath":"tutorial/forms.md","lastUpdated":1640085450839}',o={},p=t(`<h1 id="\u8868\u5355" tabindex="-1">\u8868\u5355 <a class="header-anchor" href="#\u8868\u5355" aria-hidden="true">#</a></h1><p>\u8868\u5355\u63A7\u4EF6\u5305\u542B\uFF1A\u6309\u94AE\u3001\u5355\u9009\u6846\u3001\u591A\u9009\u6846\u3001\u5F00\u5173\u3001\u6ED1\u52A8\u8F93\u5165\u6761\u3001\u8F93\u5165\u6846\u548C\u9009\u62E9\u5668\u3002</p><h2 id="button-\u6309\u94AE" tabindex="-1">button \u6309\u94AE <a class="header-anchor" href="#button-\u6309\u94AE" aria-hidden="true">#</a></h2><ul><li><strong>\u6570\u636E</strong></li></ul><p>\u6309\u94AE\u672C\u8D28\u4E0A\u548C rectangle \u4E00\u6837\uFF0C\u4F46\u4E3A\u4E86\u8FBE\u5230\u6309\u94AE\u7684\u6548\u679C\uFF0C\u6211\u4EEC\u9700\u8981\u914D\u7F6E\u4E00\u4E9B\u6837\u5F0F\u5C5E\u6027\u3002</p><ul><li><strong>\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;button&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
  borderRadius<span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u6309\u94AE&quot;</span><span class="token punctuation">,</span>
  background<span class="token operator">:</span> <span class="token string">&quot;#1890ff&quot;</span><span class="token punctuation">,</span>
  color<span class="token operator">:</span> <span class="token string">&quot;#1890ff&quot;</span><span class="token punctuation">,</span>
  textColor<span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
  activeBackground<span class="token operator">:</span> <span class="token string">&quot;#40a9ff&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u9009\u4E2D</span>
  activeColor<span class="token operator">:</span> <span class="token string">&quot;#40a9ff&quot;</span><span class="token punctuation">,</span>
  activeTextColor<span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
  hoverBackground<span class="token operator">:</span> <span class="token string">&quot;#40a9ff&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u9F20\u6807\u7ECF\u8FC7</span>
  hoverColor<span class="token operator">:</span> <span class="token string">&quot;#40a9ff&quot;</span><span class="token punctuation">,</span>
  hoverTextColor<span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="radio-\u5355\u9009\u6846" tabindex="-1">radio \u5355\u9009\u6846 <a class="header-anchor" href="#radio-\u5355\u9009\u6846" aria-hidden="true">#</a></h2><ul><li><strong>\u6570\u636E</strong></li></ul><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>direction</td><td>string</td><td>\u5355\u9009\u6846\u7684\u6392\u5217\u65B9\u5411(&#39;vertical&#39;|&#39;horizontal&#39;)</td></tr><tr><td>interval</td><td>number</td><td>\u5355\u9009\u6846\u9009\u9879\u95F4\u7684\u95F4\u8DDD\uFF08\u9ED8\u8BA4 20\uFF0C\u4EC5\u9488\u5BF9\u5782\u76F4\u5206\u5E03\uFF09</td></tr><tr><td>options</td><td>string[] | object[]</td><td>\u9009\u9879\u503C</td></tr><tr><td>selection</td><td>string</td><td>\u9009\u4E2D\u503C</td></tr><tr><td>forbiddens</td><td>string[]</td><td>\u7981\u7528\u9009\u9879</td></tr></tbody></table><ul><li><strong>\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> radio <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  direction<span class="token operator">:</span> <span class="token string">&quot;vertical&quot;</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u6C34\u679C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u852C\u83DC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u8C37\u7269&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/*
  options: [
    { text: &quot;\u6C34\u679C&quot;, background: &quot;#ff0000&quot; },
    { text: &quot;\u852C\u83DC&quot;, background: &quot;#00ff00&quot; },
    { text: &quot;\u8C37\u7269&quot;, background: &quot;#0000ff&quot; },
  ],*/</span>
  selection<span class="token operator">:</span> <span class="token string">&quot;\u6C34\u679C&quot;</span><span class="token punctuation">,</span>
  forbiddens<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u852C\u83DC&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPens</span><span class="token punctuation">(</span><span class="token punctuation">[</span>radio<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="checkbox-\u590D\u9009\u6846" tabindex="-1">checkbox \u590D\u9009\u6846 <a class="header-anchor" href="#checkbox-\u590D\u9009\u6846" aria-hidden="true">#</a></h2><ul><li><strong>\u6570\u636E</strong></li></ul><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>direction</td><td>string</td><td>\u590D\u9009\u6846\u7684\u6392\u5217\u65B9\u5411(&#39;vertical&#39;|&#39;horizontal&#39;)</td></tr><tr><td>interval</td><td>number</td><td>\u590D\u9009\u6846\u9009\u9879\u95F4\u7684\u95F4\u8DDD\uFF08\u9ED8\u8BA4 20\uFF0C\u4EC5\u9488\u5BF9\u5782\u76F4\u5206\u5E03\uFF09</td></tr><tr><td>options</td><td>string[]| object[]</td><td>\u9009\u9879\u503C</td></tr><tr><td>selections</td><td>string[]</td><td>\u9009\u4E2D\u9009\u9879</td></tr><tr><td>forbiddens</td><td>string[]</td><td>\u7981\u7528\u9009\u9879</td></tr></tbody></table><ul><li><strong>\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> checkbox <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;checkbox&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  direction<span class="token operator">:</span> <span class="token string">&quot;vertical&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// options: [&quot;\u6C34\u679C&quot;, &quot;\u852C\u83DC&quot;, &quot;\u8C37\u7269&quot;],</span>
  options<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;\u6C34\u679C&quot;</span><span class="token punctuation">,</span> background<span class="token operator">:</span> <span class="token string">&quot;#ff0000&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;\u852C\u83DC&quot;</span><span class="token punctuation">,</span> background<span class="token operator">:</span> <span class="token string">&quot;#00ff00&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;\u8C37\u7269&quot;</span><span class="token punctuation">,</span> background<span class="token operator">:</span> <span class="token string">&quot;#0000ff&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  selections<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u852C\u83DC&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  forbiddens<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u6C34\u679C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPens</span><span class="token punctuation">(</span><span class="token punctuation">[</span>checkbox<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="switch-\u5F00\u5173" tabindex="-1">switch \u5F00\u5173 <a class="header-anchor" href="#switch-\u5F00\u5173" aria-hidden="true">#</a></h2><ul><li><strong>\u6570\u636E</strong></li></ul><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>isOpen</td><td>boolean</td><td>\u662F\u5426\u6253\u5F00</td></tr><tr><td>offColor</td><td>string</td><td>\u5173\u95ED\u65F6\u80CC\u666F\u989C\u8272</td></tr><tr><td>onColor</td><td>string</td><td>\u6253\u5F00\u65F6\u80CC\u666F\u989C\u8272</td></tr><tr><td>isForbidden</td><td>boolean</td><td>\u662F\u5426\u7981\u7528</td></tr><tr><td>forbidOffColor</td><td>string</td><td>\u5173\u95ED\u65F6\u7981\u7528\u80CC\u666F\u989C\u8272</td></tr><tr><td>forbidOnColor</td><td>string</td><td>\u6253\u5F00\u65F6\u7981\u7528\u80CC\u666F\u989C\u8272</td></tr></tbody></table><ul><li><strong>\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> lSwitch <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;switch&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
  isOpen<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  offColor<span class="token operator">:</span> <span class="token string">&quot;#BFBFBF&quot;</span><span class="token punctuation">,</span>
  onColor<span class="token operator">:</span> <span class="token string">&quot;#1890ff&quot;</span><span class="token punctuation">,</span>
  forbidOffColor<span class="token operator">:</span> <span class="token string">&quot;#E5E5E5&quot;</span><span class="token punctuation">,</span>
  forbidOnColor<span class="token operator">:</span> <span class="token string">&quot;#A3D3FF&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">//isForbidden: true,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>lSwitch<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="slider-\u6ED1\u52A8\u8F93\u5165\u6761" tabindex="-1">slider \u6ED1\u52A8\u8F93\u5165\u6761 <a class="header-anchor" href="#slider-\u6ED1\u52A8\u8F93\u5165\u6761" aria-hidden="true">#</a></h2><p>\u3010\u6CE8\u610F\u3011\u5F53\u6ED1\u52A8\u6761\u7981\u6B62\u79FB\u52A8\u65F6(locked=1)\uFF0C\u624D\u5141\u8BB8\u62D6\u52A8\u6ED1\u5757\u3002</p><ul><li><strong>\u6570\u636E</strong></li></ul><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>sliderRadio</td><td>number</td><td>\u6ED1\u52A8\u6761\u5360\u6574\u4E2A\u56FE\u5143\u5BBD\u5EA6\u7684\u6BD4\u4F8B(\u9760\u5DE6\u5BF9\u9F50)</td></tr><tr><td>inputRadio</td><td>number</td><td>\u6587\u5B57\u8F93\u5165\u90E8\u5206\u5360\u6574\u4E2A\u56FE\u5143\u5BBD\u5EA6\u7684\u6BD4\u4F8B(\u9760\u53F3\u5BF9\u9F50)</td></tr><tr><td>min</td><td>number</td><td>\u6700\u5C0F\u503C</td></tr><tr><td>max</td><td>number</td><td>\u6700\u5927\u503C</td></tr><tr><td>unit</td><td>string</td><td>\u5355\u4F4D</td></tr><tr><td>slider</td><td>boolean</td><td>\u662F\u5426\u6B63\u5728\u6267\u884C\u6ED1\u52A8\u64CD\u4F5C</td></tr></tbody></table><ul><li><strong>\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> slider <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&quot;slider&quot;</span><span class="token punctuation">,</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;10%&quot;</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
  sliderRadio<span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span>
  inputRadio<span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span>
  min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  max<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  textLeft<span class="token operator">:</span> <span class="token number">240</span><span class="token punctuation">,</span> <span class="token comment">//\u6839\u636E\u5C5E\u6027inputRadio\u8BA1\u7B97</span>
  background<span class="token operator">:</span> <span class="token string">&quot;#69c0ff&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u6A2A\u6761\u586B\u5145\u989C\u8272</span>
  color<span class="token operator">:</span> <span class="token string">&quot;#1890ff&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u5C0F\u5706\u5708\u6ED1\u5757\u7EBF\u6761\u989C\u8272</span>
  textColor<span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span>
  hoverTextColor<span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u7528\u4E8E\u5C4F\u853D\u5168\u5C40\u9F20\u6807\u7ECF\u8FC7\u548C\u9009\u4E2D\u7684\u6587\u5B57\u989C\u8272</span>
  activeTextColor<span class="token operator">:</span> <span class="token string">&quot;#000000&quot;</span><span class="token punctuation">,</span>
  unit<span class="token operator">:</span> <span class="token string">&quot;%&quot;</span><span class="token punctuation">,</span>
  slider<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>slider<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u8F93\u5165\u6846" tabindex="-1">\u8F93\u5165\u6846 <a class="header-anchor" href="#\u8F93\u5165\u6846" aria-hidden="true">#</a></h2><ul><li><strong>\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> input <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  input<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">,</span>
  borderRadius<span class="token operator">:</span> <span class="token number">0.05</span><span class="token punctuation">,</span>
  ellipsis<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u8F93\u5165\u6570\u636E&quot;</span><span class="token punctuation">,</span>
  textAlign<span class="token operator">:</span> <span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span>
  color<span class="token operator">:</span> <span class="token string">&quot;#D9D9D9FF&quot;</span><span class="token punctuation">,</span>
  textColor<span class="token operator">:</span> <span class="token string">&quot;#000000FF&quot;</span><span class="token punctuation">,</span>
  hoverTextColor<span class="token operator">:</span> <span class="token string">&quot;#000000FF&quot;</span><span class="token punctuation">,</span>
  activeTextColor<span class="token operator">:</span> <span class="token string">&quot;#000000FF&quot;</span><span class="token punctuation">,</span>
  textLeft<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u9009\u62E9\u5668" tabindex="-1">\u9009\u62E9\u5668 <a class="header-anchor" href="#\u9009\u62E9\u5668" aria-hidden="true">#</a></h2><ul><li><strong>\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> select <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  height<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  width<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&quot;rectangle&quot;</span><span class="token punctuation">,</span>
  borderRadius<span class="token operator">:</span> <span class="token number">0.05</span><span class="token punctuation">,</span>
  ellipsis<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  text<span class="token operator">:</span> <span class="token string">&quot;\u9009\u98791&quot;</span><span class="token punctuation">,</span>
  textAlign<span class="token operator">:</span> <span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span>
  color<span class="token operator">:</span> <span class="token string">&quot;#D9D9D9FF&quot;</span><span class="token punctuation">,</span>
  textColor<span class="token operator">:</span> <span class="token string">&quot;#000000FF&quot;</span><span class="token punctuation">,</span>
  hoverTextColor<span class="token operator">:</span> <span class="token string">&quot;#000000FF&quot;</span><span class="token punctuation">,</span>
  activeTextColor<span class="token operator">:</span> <span class="token string">&quot;#000000FF&quot;</span><span class="token punctuation">,</span>
  textLeft<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token comment">// dropdownList: [&quot;\u9009\u98791&quot;, &quot;\u9009\u98792&quot;, &quot;\u9009\u98793&quot;],</span>
  dropdownList<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;\u9009\u98791&quot;</span><span class="token punctuation">,</span> background<span class="token operator">:</span> <span class="token string">&quot;#ff0000&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;\u9009\u98792&quot;</span><span class="token punctuation">,</span> background<span class="token operator">:</span> <span class="token string">&quot;#00ff00&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&quot;\u9009\u98793&quot;</span><span class="token punctuation">,</span> background<span class="token operator">:</span> <span class="token string">&quot;#0000ff&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,34),e=[p];function c(u,l,r,i,k,d){return a(),s("div",null,e)}var h=n(o,[["render",c]]);export{q as __pageData,h as default};
