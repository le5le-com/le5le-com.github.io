import{_ as n,c as s,o as a,a as t}from"./app.9826698f.js";const d='{"title":"\u8868\u683C(\u4E0D\u518D\u7EF4\u62A4)","description":"","frontmatter":{},"headers":[],"relativePath":"tutorial/table.md"}',p={},o=t(`<h1 id="\u8868\u683C-\u4E0D\u518D\u7EF4\u62A4" tabindex="-1">\u8868\u683C(\u4E0D\u518D\u7EF4\u62A4) <a class="header-anchor" href="#\u8868\u683C-\u4E0D\u518D\u7EF4\u62A4" aria-hidden="true">#</a></h1><p>table \u7C7B\u578B\u63A7\u4EF6</p><ul><li><strong>\u6570\u636E</strong></li></ul><ol><li><p>table \u5B57\u6BB5</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>rowHight</td><td>number</td><td>\u884C\u9AD8\uFF0C\u9ED8\u8BA4 30</td></tr><tr><td>colWidth</td><td>number</td><td>\u5217\u5BBD\uFF0C\u9ED8\u8BA4 100</td></tr><tr><td>header</td><td>object</td><td>\u8868\u5934\u914D\u7F6E\uFF0C\u89C1\u4E0B\u65B9header\u914D\u7F6E\u3002</td></tr><tr><td>data</td><td>object[]|array</td><td>\u6570\u636E\u914D\u7F6E\u30021.\u5F53\u7C7B\u578B\u4E3Aobjec[]\u65F6\uFF0C\u89C1\u4E0B\u65B9data\u914D\u7F6E\uFF1B2.\u5F53\u6570\u636E\u7C7B\u578B\u4E3Aarray\u65F6\uFF0C\u53C2\u89C1\u4E0B\u65B9data\u914D\u7F6E\u4E2D\u7684data\u5C5E\u6027\u3002</td></tr></tbody></table></li><li><p>header\u914D\u7F6E</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>height</td><td>number</td><td>\u8868\u5934\u9AD8\u5EA6</td></tr><tr><td>show</td><td>boolean</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>fontWeight</td><td>string</td><td>\u6587\u5B57\u52A0\u7C97</td></tr><tr><td>data</td><td>object[]</td><td>\u8868\u5934\u5355\u5143\u683C\u6570\u636E\u6837\u5F0F\u914D\u7F6E\u3002<br>{<br>\xA0\xA0text:string,//\u5217\u540D<br>\xA0\xA0width:number//\u5217\u5BBD<br>}[]</td></tr></tbody></table></li><li><p>data\u914D\u7F6E</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>height</td><td>number</td><td>\u884C\u9AD8</td></tr><tr><td>data</td><td>(array|string|object)[]</td><td>\u884C\u6570\u636E\u30021.\u5F53\u7C7B\u578B\u4E3Astring\u65F6\uFF0C\u663E\u793A\u7EAF\u6587\u672C;2.\u5F53\u4E3Aobject\u65F6\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5355\u5143\u683C\u6837\u5F0F(\u80CC\u666F\u3001\u6587\u5B57\u548C\u7EBF\u6761\u989C\u8272)\uFF1B3.\u5F53\u4E3Aarray\u65F6\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u5B50\u8282\u70B9\uFF0C\u5B50\u8282\u70B9\u7684\u914D\u7F6E\u53EF\u53C2\u8003<a href="./../api/pen.html">Pen</a></td></tr></tbody></table></li></ol><p>\u6CE8\u610F\uFF1A1.\u5B50\u8282\u70B9\u7684\u5206\u5E03\uFF1Apadding\u9ED8\u8BA4\u4E3A10\uFF0C\u5F53\u5B50\u8282\u70B9\u5E03\u5C40\u8D85\u51FA\u5355\u5143\u683C\u5BBD\u5EA6\u65F6\u4F1A\u6362\u884C\uFF0C\u5F53\u5B50\u8282\u70B9\u5E03\u5C40\u9AD8\u5EA6\u5C0F\u4E8E\u5355\u5143\u683C\u9AD8\u5EA6\u65F6\u4F1A\u5C45\u4E2D\u5BF9\u9F50\u3002</p><ul><li><strong>\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code>    <span class="token keyword">let</span> table <span class="token operator">=</span> <span class="token punctuation">{</span>
          name<span class="token operator">:</span> <span class="token string">&#39;table&#39;</span><span class="token punctuation">,</span>
          x<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
          y<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
          width<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          height<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          specialProp<span class="token operator">:</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span>
          hideAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token comment">// background: &#39;#ffffff&#39;,//\u53EF\u914D\u7F6E\u4E00\u4E9B\u6837\u5F0F</span>
          table<span class="token operator">:</span> <span class="token punctuation">{</span>
            colWidth<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
            rowHeight<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
            header<span class="token operator">:</span> <span class="token punctuation">{</span>
              height<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
              fontWeight<span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span>
              <span class="token comment">// show: false,</span>
              data<span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                  text<span class="token operator">:</span> <span class="token string">&#39;\u8BBE\u5907 ID&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  text<span class="token operator">:</span> <span class="token string">&#39;\u8BBE\u5907\u540D\u79F0&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  text<span class="token operator">:</span> <span class="token string">&#39;\u6570\u636E\u534F\u8BAE&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  text<span class="token operator">:</span> <span class="token string">&#39;\u72B6\u6001&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  width<span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span>
                  text<span class="token operator">:</span> <span class="token string">&#39;\u64CD\u4F5C&#39;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            data<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;\u6E29\u5EA6\u4F20\u611F\u5668&#39;</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;MQTT&#39;</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    text<span class="token operator">:</span> <span class="token string">&#39;\u6B63\u5728\u8FD0\u884C&#39;</span><span class="token punctuation">,</span>
                    color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                      name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
                      width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                      height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                      text<span class="token operator">:</span> <span class="token string">&#39;\u7F16\u8F91&#39;</span><span class="token punctuation">,</span>
                      fontSize<span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                      hideAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                      activeBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      activeColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      background<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      color<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      hoverBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      hoverColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      textColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      hoverTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      activeTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      events<span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                          action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                          name<span class="token operator">:</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
                          value<span class="token operator">:</span> <span class="token string">&#39;alert(&quot;\u70B9\u51FB\u4E86\u7F16\u8F91&quot;)&#39;</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
                      width<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                      height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                      text<span class="token operator">:</span> <span class="token string">&#39;\u5B9E\u65F6\u6570\u636E&#39;</span><span class="token punctuation">,</span>
                      fontSize<span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                      hideAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                      activeBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      activeColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      background<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      color<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      hoverBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      hoverColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      textColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      hoverTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      activeTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      events<span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                          action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                          name<span class="token operator">:</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
                          value<span class="token operator">:</span> <span class="token string">&#39;alert(&quot;\u70B9\u51FB\u4E86\u5B9E\u65F6\u6570\u636E&quot;)&#39;</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">]</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;\u6E7F\u5EA6\u4F20\u611F\u5668&#39;</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;MQTT&#39;</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;\u6B63\u5728\u8FD0\u884C&#39;</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                      name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
                      width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                      height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                      text<span class="token operator">:</span> <span class="token string">&#39;\u7F16\u8F91&#39;</span><span class="token punctuation">,</span>
                      fontSize<span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                      hideAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                      activeBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      activeColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      background<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      color<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      hoverBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      hoverColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      textColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      hoverTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      activeTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      events<span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                          action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                          name<span class="token operator">:</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
                          value<span class="token operator">:</span> <span class="token string">&#39;alert(2)&#39;</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
                      width<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                      height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                      text<span class="token operator">:</span> <span class="token string">&#39;\u5B9E\u65F6\u6570\u636E&#39;</span><span class="token punctuation">,</span>
                      fontSize<span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                      hideAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                      activeBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      activeColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      background<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      color<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      hoverBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      hoverColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      textColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      hoverTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      activeTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      events<span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                          action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                          name<span class="token operator">:</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
                          value<span class="token operator">:</span> <span class="token string">&#39;console.log(pen)&#39;</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">]</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;\u7269\u8054\u7F51\u8BBE\u5907&#39;</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;MQTT&#39;</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;\u6B63\u5728\u8FD0\u884C&#39;</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                      name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
                      width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                      height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                      text<span class="token operator">:</span> <span class="token string">&#39;\u7F16\u8F91&#39;</span><span class="token punctuation">,</span>
                      fontSize<span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                      hideAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                      activeBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      activeColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      background<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      color<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      hoverBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      hoverColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      textColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      hoverTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      activeTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      events<span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                          action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                          name<span class="token operator">:</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
                          value<span class="token operator">:</span> <span class="token string">&#39;alert(3)&#39;</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
                      width<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                      height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                      text<span class="token operator">:</span> <span class="token string">&#39;\u5B9E\u65F6\u6570\u636E&#39;</span><span class="token punctuation">,</span>
                      fontSize<span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                      hideAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                      activeBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      activeColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      background<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      color<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      hoverBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      hoverColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      textColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      hoverTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      activeTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      events<span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                          action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                          name<span class="token operator">:</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
                          value<span class="token operator">:</span> <span class="token string">&#39;console.log(pen)&#39;</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">]</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                data<span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;\u7269\u8054\u7F51\u8BBE\u5907/\u667A\u80FD\u5BB6\u5C45/\u667A\u6167\u57CE\u5E02&#39;</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;MQTT&#39;</span><span class="token punctuation">,</span>
                  <span class="token string">&#39;\u6B63\u5728\u8FD0\u884C&#39;</span><span class="token punctuation">,</span>
                  <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                      name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
                      width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
                      height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                      text<span class="token operator">:</span> <span class="token string">&#39;\u7F16\u8F91&#39;</span><span class="token punctuation">,</span>
                      fontSize<span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                      hideAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                      activeBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      activeColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      background<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      color<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      hoverBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      hoverColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      textColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      hoverTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      activeTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      events<span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                          action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                          name<span class="token operator">:</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
                          value<span class="token operator">:</span> <span class="token string">&#39;alert(4)&#39;</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                      name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
                      width<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
                      height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
                      text<span class="token operator">:</span> <span class="token string">&#39;\u5B9E\u65F6\u6570\u636E&#39;</span><span class="token punctuation">,</span>
                      fontSize<span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
                      hideAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                      activeBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      activeColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      background<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      color<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
                      hoverBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      hoverColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
                      textColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      hoverTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      activeTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
                      events<span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                          action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                          name<span class="token operator">:</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
                          value<span class="token operator">:</span> <span class="token string">&#39;console.log(pen)&#39;</span>
                        <span class="token punctuation">}</span>
                      <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">]</span>
                <span class="token punctuation">]</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span>
</code></pre></div><ul><li><strong>\u6570\u636E\u66F4\u65B0</strong></li></ul><p>1.1.16\u7248\u672C\u4EE5\u540E\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u89C4\u5219\u6765\u66F4\u65B0\u4E00\u4E2A\u5355\u5143\u683C\u3002\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-js"><pre><code>topology<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span><span class="token string">&#39;table.id&#39;</span><span class="token punctuation">,</span><span class="token comment">//\u8868\u683Cid</span>
    row<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token comment">//\u7B2C\u51E0\u884C</span>
    col<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token comment">//\u7B2C\u51E0\u5217</span>
    value<span class="token operator">:</span><span class="token number">200</span> <span class="token comment">//\u65B0\u503C</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h1 id="\u8868\u683C2-0" tabindex="-1">\u8868\u683C2.0 <a class="header-anchor" href="#\u8868\u683C2-0" aria-hidden="true">#</a></h1><p>table \u7C7B\u578B\u63A7\u4EF6</p><ul><li><strong>\u6570\u636E</strong></li></ul><ol><li>data \u5B57\u6BB5</li></ol><p>\u5B58\u50A8\u6570\u636E\uFF0C\u4E8C\u7EF4\u6570\u7EC4\uFF0C\u6BCF\u4E2A\u5355\u5143\u683C\u6570\u636E\u4E3A\u57FA\u672C\u6570\u636E\u7C7B\u578B(symbol\u3001bigInt\u9664\u5916)\uFF0C\u914D\u7F6E\u5B50\u8282\u70B9\u7528&quot;{}&quot;\u4EE3\u66FF\u3002</p><ol start="2"><li>styles</li></ol><p>\u6837\u5F0F\u914D\u7F6E\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>row</td><td>number</td><td>\u7B2C\u51E0\u884C</td></tr><tr><td>col</td><td>number</td><td>\u7B2C\u51E0\u5217</td></tr><tr><td>height</td><td>number</td><td>\u884C\u9AD8(\u914D\u7F6Erow,col\u4E0D\u5141\u8BB8\u914D\u7F6E)</td></tr><tr><td>width</td><td>number</td><td>\u5217\u5BBD(\u914D\u7F6Ecol,row\u4E0D\u5141\u8BB8\u914D\u7F6E)</td></tr><tr><td>color</td><td>string</td><td>\u6587\u5B57\u989C\u8272(\u9488\u5BF9\u5355\u5143\u683C\uFF0Crow\u548Ccol\u90FD\u9700\u8981\u914D\u7F6E)</td></tr><tr><td>background</td><td>string</td><td>\u80CC\u666F\u989C\u8272(\u9488\u5BF9\u5355\u5143\u683C\uFF0Crow\u548Ccol\u90FD\u9700\u8981\u914D\u7F6E)</td></tr><tr><td>wheres</td><td>{<br>\xA0\xA0comparison: string;//\u6761\u4EF6<br>\xA0\xA0value:string;//\u6BD4\u8F83\u503C<br>}[]</td><td>\u6837\u5F0F\u6210\u7ACB\u6761\u4EF6(\u9488\u5BF9\u5355\u5143\u683C\uFF0Crow\u548Ccol\u90FD\u9700\u8981\u914D\u7F6E)</td></tr><tr><td>pens</td><td><a href="./pen.html">Pen</a>[]</td><td>\u5B50\u8282\u70B9\u6570\u636E(\u5BF9\u5E94\u6570\u636E(data)\u5217\u4E3A&#39;{}&#39;,col\u914D\u7F6E,row\u4E0D\u5141\u8BB8\u914D\u7F6E)</td></tr></tbody></table><ol start="3"><li><p>\u5176\u4ED6\u914D\u7F6E</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>colWidth</td><td>number</td><td>\u5217\u5BBD\uFF08\u9ED8\u8BA4150\uFF09</td></tr><tr><td>rowHeight</td><td>number</td><td>\u884C\u9AD8\uFF08\u9ED8\u8BA440\uFF09</td></tr></tbody></table></li></ol><ul><li><strong>\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code>  <span class="token keyword">const</span> table <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;table2&#39;</span><span class="token punctuation">,</span>
    x<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    y<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    height<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    colWidth<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
    rowHeight<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span><span class="token string">&#39;\u8BBE\u5907 ID&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u8BBE\u5907\u540D\u79F0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6570\u636E\u534F\u8BAE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u72B6\u6001&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u64CD\u4F5C&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MQTT&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6B63\u5728\u8FD0\u884C&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6E7F\u5EA6\u4F20\u611F\u5668&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MQTT&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6B63\u5728\u8FD0\u884C&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u7269\u8054\u7F51\u8BBE\u5907&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MQTT&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6B63\u5728\u8FD0\u884C&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u7269\u8054\u7F51\u8BBE\u5907/\u667A\u80FD\u5BB6\u5C45/\u667A\u6167\u57CE\u5E02&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MQTT&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6B63\u5728\u8FD0\u884C&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    styles<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        row<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        col<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        color<span class="token operator">:</span> <span class="token string">&#39;#ff0000&#39;</span><span class="token punctuation">,</span>
        background<span class="token operator">:</span> <span class="token string">&#39;#ffff00&#39;</span><span class="token punctuation">,</span>
        wheres<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">//\u89E6\u53D1\u6761\u4EF6 \u6210\u7ACB\u540E\u624D\u5141\u8BB8\u914D\u7F6E\u6837\u5F0F</span>
          <span class="token punctuation">{</span>
            comparison<span class="token operator">:</span> <span class="token string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span>
            value<span class="token operator">:</span> <span class="token string">&#39;123&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        row<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        height<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        col<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        width<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token comment">//\u4E3A\u8BE5\u5217\u8BBE\u7F6E\u989D\u5916\u7684\u8282\u70B9</span>
        pens<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
            height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            text<span class="token operator">:</span> <span class="token string">&#39;\u7F16\u8F91&#39;</span><span class="token punctuation">,</span>
            fontSize<span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
            disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            activeBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
            activeColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
            background<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
            hoverBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
            hoverColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
            textColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
            hoverTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
            activeTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
            events<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
                value<span class="token operator">:</span> <span class="token string">&#39;alert(&quot;\u70B9\u51FB\u4E86\u7F16\u8F91&quot;)&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">&#39;rectangle&#39;</span><span class="token punctuation">,</span>
            width<span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
            height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            text<span class="token operator">:</span> <span class="token string">&#39;\u5B9E\u65F6\u6570\u636E&#39;</span><span class="token punctuation">,</span>
            fontSize<span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
            disableAnchor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            activeBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
            activeColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
            background<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
            color<span class="token operator">:</span> <span class="token string">&#39;#1890ff&#39;</span><span class="token punctuation">,</span>
            hoverBackground<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
            hoverColor<span class="token operator">:</span> <span class="token string">&#39;#40a9ff&#39;</span><span class="token punctuation">,</span>
            textColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
            hoverTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
            activeTextColor<span class="token operator">:</span> <span class="token string">&#39;#ffffff&#39;</span><span class="token punctuation">,</span>
            events<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                action<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                name<span class="token operator">:</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
                value<span class="token operator">:</span> <span class="token string">&#39;alert(&quot;\u70B9\u51FB\u4E86\u5B9E\u65F6\u6570\u636E&quot;)&#39;</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  topology<span class="token punctuation">.</span><span class="token function">addPen</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li><strong>\u6570\u636E\u66F4\u65B0</strong></li></ul><p>\u66F4\u65B0\u4E00\u4E2A\u5355\u5143\u683C\u6570\u636E\u3002\u63D0\u4F9B\u5982\u4E0B\u89C4\u5219\uFF1A</p><div class="language-js"><pre><code>topology<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    id<span class="token operator">:</span><span class="token string">&#39;table.id&#39;</span><span class="token punctuation">,</span><span class="token comment">//\u8868\u683Cid</span>
    row<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token comment">//\u7B2C\u51E0\u884C</span>
    col<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token comment">//\u7B2C\u51E0\u5217</span>
    value<span class="token operator">:</span><span class="token number">200</span> <span class="token comment">//\u65B0\u503C</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u53EF\u4EE5\u76F4\u63A5\u66F4\u65B0data(\u6570\u636E)\u548Cstyles(\u6837\u5F0F),\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u5BFC\u81F4\u5B50\u8282\u70B9\u7684\u9500\u6BC1\u548C\u91CD\u65B0\u521B\u5EFA;</p>`,25),e=[o];function c(l,r,u,k,i,f){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{d as __pageData,h as default};
