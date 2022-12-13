import{_ as l,c as i,o as e,a}from"./app.f037b965.js";const f='{"title":"\u5DE5\u5177\u680F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5DE5\u5177\u680F","slug":"\u5DE5\u5177\u680F"},{"level":2,"title":"\u8D44\u6E90\u7BA1\u7406\u680F","slug":"\u8D44\u6E90\u7BA1\u7406\u680F"},{"level":2,"title":"\u6838\u5FC3\u753B\u5E03","slug":"\u6838\u5FC3\u753B\u5E03"},{"level":2,"title":"\u5C5E\u6027\u680F","slug":"\u5C5E\u6027\u680F"},{"level":2,"title":"\u4FE1\u606F\u5C55\u793A\u680F","slug":"\u4FE1\u606F\u5C55\u793A\u680F"}],"relativePath":"3d/editor/guide/view.md"}',t={},u=a('<p>\u4E50\u543E\u4E503D\u53EF\u89C6\u5316\u7EC4\u6001\u5E73\u53F0\u754C\u9762\u4E3B\u8981\u7531\u4E94\u4E2A\u90E8\u5206\u7EC4\u6210\uFF1A</p><ul><li>\u9876\u90E8\u5DE5\u5177\u680F</li><li>\u5DE6\u4FA7\u8D44\u6E90\u7BA1\u7406\u680F</li><li>\u4E2D\u95F4\u6838\u5FC3\u5F15\u64CE\u753B\u5E03</li><li>\u53F3\u4FA7\u5C5E\u6027\u680F</li><li>\u5E95\u90E8\u4FE1\u606F\u5C55\u793A\u680F</li></ul><p>\u4E0B\u9762\u4F9D\u6B21\u4ECB\u7ECD\u5404\u90E8\u5206\u7684\u7EC4\u6210\u7ED3\u6784\u4EE5\u53CA\u5BF9\u5E94\u7684\u529F\u80FD\u3002</p><h2 id="\u5DE5\u5177\u680F" tabindex="-1">\u5DE5\u5177\u680F <a class="header-anchor" href="#\u5DE5\u5177\u680F" aria-hidden="true">#</a></h2><p>\u4E0B\u9762\u4ECE\u5DE6\u81F3\u53F3\u4F9D\u6B21\u4ECB\u7ECD\u4E0B\u5404\u6309\u94AE\u53CA\u4E0B\u62C9\u5217\u8868\u7684\u529F\u80FD\uFF1A</p><ul><li>\u9879\u76EE <ul><li>\u65B0\u9879\u76EE\uFF1A\u6E05\u7A7A\u5F53\u524D\u9879\u76EE\u6570\u636E\uFF0C\u91CD\u65B0\u521B\u5EFA\u65B0\u7A7A\u767D\u9879\u76EE</li><li>\u6253\u5F00\u9879\u76EEJSON\u6587\u4EF6\uFF1A\u6E05\u7A7A\u5F53\u524D\u9879\u76EE\u6570\u636E\uFF0C\u6253\u5F00\u4FDD\u5B58\u5728\u672C\u5730\u7684\u9879\u76EEJSON\u6587\u4EF6</li><li>\u5BFC\u51FA\u9879\u76EEJSON\u6587\u4EF6\uFF1A\u5C06\u5F53\u524D\u9879\u76EE\u6570\u636EJSON\u6587\u4EF6\u4E0B\u8F7D\u5230\u672C\u5730</li></ul></li><li>\u7F16\u8F91 <ul><li>\u590D\u5236\uFF1A\u5C06\u5F53\u524D\u573A\u666F\u4E2D\u88AB\u9009\u4E2D\u7684\u5143\u7D20\u52A0\u5165\u590D\u5236\u5217\u8868</li><li>\u7C98\u8D34\uFF1A\u514B\u9686\u5F53\u524D\u573A\u666F\u590D\u5236\u5217\u8868\u4E2D\u7684\u5143\u7D20\u5E76\u52A0\u5165\u5230\u573A\u666F\u4E2D</li><li>\u64A4\u9500\uFF1A\u64A4\u9500\u4E0A\u4E00\u6B65\u7684\u64CD\u4F5C</li><li>\u6062\u590D\uFF1A\u6062\u590D\u88AB\u64A4\u9500\u7684\u64CD\u4F5C</li></ul></li><li>\u4FDD\u5B58\uFF1A\u5C06\u5F53\u524D\u9879\u76EE\u6570\u636E\u4FDD\u5B58\u5230\u4E91\u7AEF\u3002\u7B2C\u4E00\u6B21\u4FDD\u5B58\u65F6\u9700\u8981\u9009\u62E9\u4FDD\u5B58\u7684\u6587\u4EF6\u5939\u3002\u6CE8\u610F\uFF1A\u53EA\u4F1A\u4FDD\u5B58\u7F16\u8F91\u65F6\u7684\u6570\u636E\uFF0C\u8FD0\u884C\u65F6\u4FEE\u6539\u7684\u6570\u636E\u4E0D\u4F1A\u88AB\u4FDD\u5B58</li><li>\u53E6\u5B58\u4E3A\uFF1A\u5C06\u5F53\u524D\u9879\u76EE\u6570\u636E\u53E6\u5B58\u5230\u4E91\u7AEF\u3002\u6CE8\u610F\uFF1A\u53EA\u4F1A\u4FDD\u5B58\u7F16\u8F91\u65F6\u7684\u6570\u636E\uFF0C\u8FD0\u884C\u65F6\u4FEE\u6539\u7684\u6570\u636E\u4E0D\u4F1A\u88AB\u4FDD\u5B58</li><li>\u573A\u666F\uFF1A\u4E0B\u62C9\u5217\u8868\u663E\u793A\u5F53\u524D\u9879\u76EE\u4E2D\u7684\u6240\u6709\u573A\u666F\uFF0C\u70B9\u51FB\u53EF\u5207\u6362\u81F3\u5BF9\u5E94\u573A\u666F\uFF0C\u4E5F\u53EF\u6DFB\u52A0\u573A\u666F\u3001\u5220\u9664\u573A\u666F</li><li>\u89C6\u89D2\uFF1A\u4E0B\u62C9\u5217\u8868\u663E\u793A\u5F53\u524D\u9879\u76EE\u4E2D\u5404\u573A\u666F\u4E2D\u4FDD\u5B58\u7684\u76F8\u673A\u89C6\u89D2\uFF0C\u70B9\u51FB\u53EF\u5207\u6362\u81F3\u5BF9\u5E94\u7684\u89C6\u89D2\uFF0C\u4E5F\u53EF\u4FDD\u5B58\u89C6\u89D2\u3001\u5220\u9664\u89C6\u89D2</li><li>\u4F4D\u7F6E/\u65CB\u8F6C/\u7F29\u653E\uFF1A\u663E\u793A\u5F53\u524D\u7684\u5143\u7D20\u64CD\u4F5C\u5668 <ul><li>\u4F4D\u7F6E\uFF1A\u53EF\u6539\u53D8\u5143\u7D20\u7684\u4F4D\u7F6E</li><li>\u65CB\u8F6C\uFF1A\u53EF\u6539\u53D8\u5143\u7D20\u7684\u65CB\u8F6C\u89D2\u5EA6</li><li>\u7F29\u653E\uFF1A\u53EF\u6539\u53D8\u5143\u7D20\u7684\u5927\u5C0F</li></ul></li><li>\u5DE5\u5177 <ul><li>\u4E16\u754C\u5750\u6807\uFF1A\u663E\u793A/\u9690\u85CF\u753B\u5E03\u5DE6\u4E0A\u89D2\u4E16\u754C\u5750\u6807\u7CFB</li><li>\u5438\u9644\uFF1A\u5F00\u542F/\u5173\u95ED\u79FB\u52A8\u5143\u7D20\u65F6\u7684\u81EA\u52A8\u5438\u9644\u5BF9\u9F50\u529F\u80FD</li><li>\u5BF9\u9F50\u7EBF\uFF1A\u5F00\u542F/\u5173\u95ED\u7EA2\u8272\u7684\u5BF9\u9F50\u53C2\u8003\u7EBF</li></ul></li><li>\u7EC4\u5408\uFF1A\u5F53\u9009\u4E2D\u4E24\u4E2A\u53CA\u4E24\u4E2A\u4EE5\u4E0A\u5143\u7D20\u65F6\uFF0C\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u7A7A\u8282\u70B9\uFF0C\u5E76\u5C06\u9009\u4E2D\u5143\u7D20\u4F5C\u4E3A\u5B83\u7684\u5B50\u8282\u70B9</li><li>\u62C6\u89E3\uFF1A\u79FB\u9664\u9009\u4E2D\u5143\u7D20\u7684\u6839\u8282\u70B9</li><li>\u5206\u79BB\uFF1A\u5C06\u9009\u4E2D\u7684\u5143\u7D20\u4ECE\u539F\u7ED3\u6784\u4E2D\u5206\u79BB\u51FA\u6765\uFF0C\u4F5C\u4E3A\u4E00\u4E2A\u65B0\u7684\u72EC\u7ACB\u5143\u7D20</li><li>\u8DEF\u5F84\uFF1A\u9009\u4E2D\u4E00\u4E2A\u5143\u7D20\u65F6\uFF0C\u70B9\u51FB\u8FDB\u5165/\u79BB\u5F00\u8DEF\u5F84\u7F16\u8F91\u72B6\u6001\uFF08\u5F00\u53D1\u4E2D\uFF09</li><li>\u8FD0\u884C\uFF1A\u8FDB\u5165\u9879\u76EE\u8FD0\u884C\u72B6\u6001\uFF0C\u53EF\u89E6\u53D1\u914D\u7F6E\u7684\u4E8B\u4EF6</li><li>\u90E8\u7F72\uFF1A\u4E0B\u8F7D\u9879\u76EE\u524D\u7AEF\u90E8\u7F72\u538B\u7F29\u5305\uFF0C\u5305\u542B\u9879\u76EE\u6570\u636E\u3001\u6838\u5FC3\u4EE3\u7801\u4EE5\u53CA\u4F9D\u8D56\u8D44\u6E90</li><li>English/\u4E2D\u6587\uFF1A\u5207\u6362\u7F16\u8F91\u5668\u663E\u793A\u8BED\u8A00</li><li>\u5E2E\u52A9\uFF1A\u6253\u5F00\u7F16\u8F91\u5668\u5E2E\u52A9\u6587\u6863</li><li>\u7528\u6237 <ul><li>\u9000\u51FA\uFF1A\u9000\u51FA\u767B\u5F55\u72B6\u6001\uFF0C\u8FD4\u56DE\u767B\u5F55\u754C\u9762</li></ul></li></ul><h2 id="\u8D44\u6E90\u7BA1\u7406\u680F" tabindex="-1">\u8D44\u6E90\u7BA1\u7406\u680F <a class="header-anchor" href="#\u8D44\u6E90\u7BA1\u7406\u680F" aria-hidden="true">#</a></h2><p>\u5206\u4E3A\u9879\u76EE\u3001\u7CFB\u7EDF\u6A21\u578B\u3001\u6211\u7684\u6A21\u578B\u4EE5\u53CA\u7ED3\u6784\u56DB\u90E8\u5206\uFF1A</p><ul><li>\u9879\u76EE <ul><li>\u641C\u7D22\u680F\uFF1A\u663E\u793A\u5305\u542B\u641C\u7D22\u5173\u952E\u5B57\u7684\u9879\u76EE</li><li>\u6587\u4EF6\u5939\uFF1A\u65B0\u5EFA\u6587\u4EF6\u5939\u3001\u7F16\u8F91\u6587\u4EF6\u5939 - \u91CD\u547D\u540D\u3001\u5220\u9664\u6587\u4EF6\u5939</li><li>\u9879\u76EE\u5217\u8868\uFF1A\u70B9\u51FB\u6253\u5F00\u9879\u76EE\u3001\u53F3\u952E\u83DC\u5355 - \u5220\u9664\u9879\u76EE</li></ul></li><li>\u7CFB\u7EDF\u6A21\u578B <ul><li>\u641C\u7D22\u680F\uFF1A\u663E\u793A\u5305\u542B\u641C\u7D22\u5173\u952E\u5B57\u7684\u6A21\u578B</li><li>\u6A21\u578B\u5217\u8868\uFF1A\u663E\u793A\u6240\u6709\u7684\u7CFB\u7EDF\u6A21\u578B\uFF0C\u53F3\u952E\u6A21\u578B\u56FE\u7247 - \u8BBE\u7F6E\u521D\u59CB\u5C3A\u5BF8</li></ul></li><li>\u6211\u7684\u6A21\u578B <ul><li>\u641C\u7D22\u680F\uFF1A\u663E\u793A\u5305\u542B\u641C\u7D22\u5173\u952E\u5B57\u7684\u6A21\u578B</li><li>\u6587\u4EF6\u5939\uFF1A \u65B0\u5EFA\u6587\u4EF6\u5939\u3001\u7F16\u8F91\u6587\u4EF6\u5939 - \u91CD\u547D\u540D\u3001\u5220\u9664\u6587\u4EF6\u5939</li><li>\u6A21\u578B\u5217\u8868\uFF1A\u5728\u6307\u5B9A\u6587\u4EF6\u5939\u4E2D\u4E0A\u4F20\u6A21\u578B\u3001\u53F3\u952E\u6A21\u578B\u56FE\u7247 - \u8BBE\u7F6E\u5C3A\u5BF8/\u7F16\u8F91\u6A21\u578B\u4FE1\u606F/\u5220\u9664\u6A21\u578B</li></ul></li><li>\u7ED3\u6784 <ul><li>\u641C\u7D22\u680F\uFF1A\u663E\u793A\u5305\u542B\u641C\u7D22\u5173\u952E\u5B57\u7684\u5143\u7D20</li><li>\u5143\u7D20\u5217\u8868\uFF1A\u4EE5\u6811\u578B\u7ED3\u6784\u663E\u793A\u5F53\u524D\u573A\u666F\u4E2D\u7684\u706F\u5149\u53CA\u6A21\u578B\u5143\u7D20\uFF0C\u5355\u51FB\u8282\u70B9\u53EF\u9009\u4E2D\u5BF9\u5E94\u5143\u7D20\uFF0C\u53CC\u51FB\u8282\u70B9\u5C06\u76F8\u673A\u4E2D\u5FC3\u70B9\u5B9A\u4F4D\u81F3\u5BF9\u5E94\u5143\u7D20\uFF0C\u70B9\u51FB\u5C0F\u56FE\u6807\u53EF\u5220\u9664\u5143\u7D20\u3001\u9690\u85CF\u5143\u7D20</li></ul></li></ul><h2 id="\u6838\u5FC3\u753B\u5E03" tabindex="-1">\u6838\u5FC3\u753B\u5E03 <a class="header-anchor" href="#\u6838\u5FC3\u753B\u5E03" aria-hidden="true">#</a></h2><p>\u57FA\u4E8EBabylonjs\u4E8C\u6B21\u5C01\u88C5\u76843D\u5F15\u64CEMeta3D\u63D0\u4F9B\u4E86\u89E3\u6790\u9879\u76EE\u6570\u636E\u3001\u5C55\u793A\u573A\u666F\u3001\u64CD\u4F5C\u4EA4\u4E92\u3001\u52A8\u6001\u6570\u636E\u7BA1\u7406\u3001\u573A\u666F\u7BA1\u7406\u7B49\u4E00\u7CFB\u5217\u529F\u80FD\uFF0C\u5B83\u662F\u6574\u4E2A\u7F16\u8F91\u5668\u7684\u6838\u5FC3\u3002</p><ul><li>\u8FD0\u884C\u4E2D\uFF1A\u5F53\u9879\u76EE\u8FDB\u5165\u8FD0\u884C\u72B6\u6001\u65F6\uFF0C\u753B\u5E03\u53F3\u4E0A\u89D2\u4F1A\u51FA\u73B0\u201C\u8FD0\u884C\u4E2D\u201D\u7684\u6807\u5FD7\uFF0C\u70B9\u51FB\u6536\u7F29/\u5C55\u5F00\u56FE\u6807\u53EF\u9000\u51FA/\u8FDB\u5165\u5168\u5C4F\u72B6\u6001\uFF0C\u70B9\u51FB\u7535\u6E90\u56FE\u6807\u53EF\u9000\u51FA\u8FD0\u884C\u72B6\u6001</li><li>\u8DEF\u5F84\u7F16\u8F91\u4E2D\uFF1A\u5728\u9879\u76EE\u8FDB\u5165\u8DEF\u5F84\u7F16\u8F91\u72B6\u6001\u65F6\uFF0C\u753B\u5E03\u53F3\u4E0A\u89D2\u4F1A\u51FA\u73B0\u201D\u8DEF\u5F84\u7F16\u8F91\u4E2D\u201C\u7684\u6807\u5FD7\uFF0C\u70B9\u51FB\u7535\u6E90\u56FE\u6807\u53EF\u9000\u51FA\u8DEF\u5F84\u7F16\u8F91\u72B6\u6001\uFF08\u5F00\u53D1\u4E2D\uFF09</li><li>\u7F16\u8F91\u4E2D\uFF1A\u975E\u8FD0\u884C/\u8DEF\u5F84\u7F16\u8F91\u65F6\u5373\u4E3A\u7F16\u8F91\u72B6\u6001\uFF0C\u53EF\u4F7F\u7528\u64CD\u4F5C\u5668\u3001\u53F3\u952E\u83DC\u5355\u3001\u62D6\u62FD\u751F\u6210\u6A21\u578B\u3001\u66F4\u6539\u6A21\u578B\u5C5E\u6027\u7B49\u64CD\u4F5C\u3002\u6CE8\u610F\uFF0C\u8FD0\u884C\u65F6\u867D\u7136\u4E5F\u53EF\u6539\u53D8\u6A21\u578B\u5C5E\u6027\uFF0C\u4F46\u662F\u6539\u53D8\u7684\u6570\u636E\u4E0D\u4F1A\u88AB\u4FDD\u5B58</li><li>\u62D6\u62FD\u751F\u6210\u6A21\u578B\uFF1A\u62D6\u62FD\u5DE6\u4FA7\u6A21\u578B\u56FE\u6807\u81F3\u753B\u5E03\u4E0A\uFF0C\u7136\u540E\u677E\u5F00\u9F20\u6807\uFF0C\u4F1A\u81EA\u52A8\u5728\u573A\u666F\u4E2D\u751F\u6210\u5BF9\u5E94\u6A21\u578B</li><li>\u53F3\u952E\u83DC\u5355\uFF1A\u7EC4\u5408/\u62C6\u89E3/\u5206\u79BB/\u590D\u5236/\u7C98\u8D34/\u64A4\u9500/\u6062\u590D</li><li>\u4E16\u754C\u5750\u6807\uFF1A\u4E16\u754C\u5750\u6807\u5DE5\u5177\u88AB\u542F\u52A8\u65F6\uFF0C\u5DE6\u4E0A\u89D2\u4F1A\u51FA\u73B0\u4E16\u754C\u5750\u6807\u7CFB\u4EE5\u4F9B\u53C2\u8003</li><li>\u64CD\u4F5C\u5668\uFF1A\u5728\u573A\u666F\u4E2D\u5DE6\u952E\u9009\u4E2D\u6A21\u578B\u53EF\u663E\u793A\u64CD\u4F5C\u5668</li></ul><h2 id="\u5C5E\u6027\u680F" tabindex="-1">\u5C5E\u6027\u680F <a class="header-anchor" href="#\u5C5E\u6027\u680F" aria-hidden="true">#</a></h2><p>\u5728\u6B64\u4FEE\u6539\u9009\u4E2D\u5143\u7D20\u7684\u5C5E\u6027\uFF0C\u5305\u62EC\u914D\u7F6E\u52A8\u753B\u3001\u4E8B\u4EF6\u3001\u81EA\u5B9A\u4E49\u6570\u636E\u3001\u7ED1\u5B9A\u52A8\u6001\u6570\u636E\u7B49\u3002\u9009\u4E2D\u5143\u7D20\u7C7B\u578B\u4E0D\u540C\uFF0C\u53EF\u914D\u7F6E\u7684\u5C5E\u6027\u5185\u5BB9\u4E5F\u4E0D\u540C\u3002</p><ul><li>\u5C5E\u6027\uFF1A\u6839\u636E\u5C5E\u6027\u503C\u7C7B\u578B\uFF0C\u663E\u793A\u4E0D\u540C\u7684\u8F93\u5165\u63A7\u4EF6\u3002\u5927\u81F4\u53EF\u5206\u4E3A\uFF1A\u8F93\u5165\u6846\u3001\u6570\u503C\u6846\u3001\u6570\u503C\u6ED1\u5757\u3001\u5F00\u5173\u3001\u989C\u8272\u9009\u62E9\u5668\u3001\u4E0B\u62C9\u9009\u62E9\u6846\u3001\u5217\u8868\u3001\u6807\u7B7E\u3001\u5F39\u7A97\u7B49</li></ul><h2 id="\u4FE1\u606F\u5C55\u793A\u680F" tabindex="-1">\u4FE1\u606F\u5C55\u793A\u680F <a class="header-anchor" href="#\u4FE1\u606F\u5C55\u793A\u680F" aria-hidden="true">#</a></h2><ul><li>\u5F53\u524D\u573A\u666F\uFF1A\u663E\u793A\u5F53\u524D\u6253\u5F00\u573A\u666F\u7684\u540D\u79F0</li><li>\u5143\u7D20\u5750\u6807\uFF1A\u663E\u793A\u88AB\u9009\u4E2D\u7684\u5143\u7D20\u7684\u4F4D\u7F6E\u5750\u6807</li><li>\u76F8\u673A\u4E2D\u5FC3\uFF1A\u663E\u793A\u5F53\u524D\u76F8\u673A\u7684\u4E2D\u5FC3\u70B9\u5750\u6807</li><li>\u534A\u5F84\uFF08\u65CB\u8F6C\u76F8\u673A\uFF09\uFF1A\u663E\u793A\u5F53\u524D\u76F8\u673A\u4F4D\u7F6E\u4E0E\u4E2D\u5FC3\u70B9\u7684\u8DDD\u79BB</li><li>\u6C34\u5E73\u89D2\u5EA6\uFF08\u65CB\u8F6C\u76F8\u673A\uFF09\uFF1A\u663E\u793A\u5F53\u524D\u76F8\u673A\u7684\u6C34\u5E73\u65CB\u8F6C\u89D2\u5EA6</li><li>\u5782\u76F4\u89D2\u5EA6\uFF08\u65CB\u8F6C\u76F8\u673A\uFF09\uFF1A\u663E\u793A\u5F53\u524D\u76F8\u673A\u7684\u5782\u76F4\u65CB\u8F6C\u89D2\u5EA6</li><li>\u76F8\u673A\u4F4D\u7F6E\uFF08\u6F2B\u6E38\u76F8\u673A\uFF09\uFF1A\u663E\u793A\u5F53\u524D\u76F8\u673A\u7684\u4F4D\u7F6E\u5750\u6807</li><li>\u5E27\u7387\uFF1A\u663E\u793A\u5F53\u524D\u573A\u666F\u6BCF\u79D2\u7684\u5E27\u7387</li></ul>',17),r=[u];function d(h,s,n,c,o,_){return e(),i("div",null,r)}var v=l(t,[["render",d]]);export{f as __pageData,v as default};
