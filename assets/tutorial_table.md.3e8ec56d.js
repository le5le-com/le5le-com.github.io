import{_ as n,c as s,o as a,a as t}from"./app.30d56312.js";const d='{"title":"\u8868\u683C","description":"","frontmatter":{},"relativePath":"tutorial/table.md","lastUpdated":1646377844221}',p={},o=t(`<h1 id="\u8868\u683C" tabindex="-1">\u8868\u683C <a class="header-anchor" href="#\u8868\u683C" aria-hidden="true">#</a></h1><p>table \u7C7B\u578B\u63A7\u4EF6</p><ul><li><strong>\u6570\u636E</strong></li></ul><ol><li><p>table \u5B57\u6BB5</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>cellHight</td><td>number</td><td>\u884C\u9AD8\uFF0C\u9ED8\u8BA4 30</td></tr><tr><td>cellWidth</td><td>number</td><td>\u5217\u5BBD\uFF0C\u9ED8\u8BA4 100</td></tr><tr><td>header</td><td>object</td><td>\u8868\u5934\u914D\u7F6E\uFF0C\u89C1\u4E0B\u65B9header\u914D\u7F6E\u3002</td></tr><tr><td>data</td><td>object[]|array</td><td>\u6570\u636E\u914D\u7F6E\u30021.\u5F53\u7C7B\u578B\u4E3Aobjec[]\u65F6\uFF0C\u89C1\u4E0B\u65B9data\u914D\u7F6E\uFF1B2.\u5F53\u6570\u636E\u7C7B\u578B\u4E3Aarray\u65F6\uFF0C\u53C2\u89C1\u4E0B\u65B9data\u914D\u7F6E\u4E2D\u7684data\u5C5E\u6027\u3002</td></tr></tbody></table></li><li><p>header\u914D\u7F6E</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>height</td><td>number</td><td>\u8868\u5934\u9AD8\u5EA6</td></tr><tr><td>show</td><td>boolean</td><td>\u662F\u5426\u663E\u793A</td></tr><tr><td>fontWeight</td><td>string</td><td>\u6587\u5B57\u52A0\u7C97</td></tr><tr><td>data</td><td>object[]</td><td>\u8868\u5934\u5355\u5143\u683C\u6570\u636E\u6837\u5F0F\u914D\u7F6E\u3002<br>{<br>\xA0\xA0text:string,//\u5217\u540D<br>\xA0\xA0width:number//\u5217\u5BBD<br>}[]</td></tr></tbody></table></li><li><p>data\u914D\u7F6E</p><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>height</td><td>number</td><td>\u884C\u9AD8</td></tr><tr><td>data</td><td>(array|string|object)[]</td><td>\u884C\u6570\u636E\u30021.\u5F53\u7C7B\u578B\u4E3Astring\u65F6\uFF0C\u663E\u793A\u7EAF\u6587\u672C;2.\u5F53\u4E3Aobject\u65F6\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5355\u5143\u683C\u6837\u5F0F(\u80CC\u666F\u3001\u6587\u5B57\u548C\u7EBF\u6761\u989C\u8272)\uFF1B3.\u5F53\u4E3Aarray\u65F6\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u5B50\u8282\u70B9\uFF0C\u5B50\u8282\u70B9\u7684\u914D\u7F6E\u53EF\u53C2\u8003<a href="./../api/pen.html">Pen</a></td></tr></tbody></table></li></ol><p>\u6CE8\u610F\uFF1A1.\u5B50\u8282\u70B9\u7684\u5206\u5E03\uFF1Apadding\u9ED8\u8BA4\u4E3A10\uFF0C\u5F53\u5B50\u8282\u70B9\u5E03\u5C40\u8D85\u51FA\u5355\u5143\u683C\u5BBD\u5EA6\u65F6\u4F1A\u6362\u884C\uFF0C\u5F53\u5B50\u8282\u70B9\u5E03\u5C40\u9AD8\u5EA6\u5C0F\u4E8E\u5355\u5143\u683C\u9AD8\u5EA6\u65F6\u4F1A\u5C45\u4E2D\u5BF9\u9F50\u3002</p><ul><li><strong>\u4F7F\u7528</strong></li></ul><div class="language-js"><pre><code>    <span class="token keyword">let</span> table <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,7),e=[o];function c(l,r,k,u,i,f){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{d as __pageData,h as default};
