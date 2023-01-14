import{_ as e,c as a,o as t,a as i}from"./app.8cdd52a3.js";const _='{"title":"\u8BBE\u7F6E\u52A8\u6001\u6570\u636E","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u51C6\u5907\u9762\u677F","slug":"\u51C6\u5907\u9762\u677F"},{"level":2,"title":"\u6DFB\u52A0\u52A8\u6001\u6570\u636E","slug":"\u6DFB\u52A0\u52A8\u6001\u6570\u636E"},{"level":2,"title":"\u7ED1\u5B9A\u52A8\u6001\u6570\u636E","slug":"\u7ED1\u5B9A\u52A8\u6001\u6570\u636E"},{"level":2,"title":"\u8BBE\u7F6E\u52A8\u6001\u6570\u636E\u6539\u53D8\u4E8B\u4EF6","slug":"\u8BBE\u7F6E\u52A8\u6001\u6570\u636E\u6539\u53D8\u4E8B\u4EF6"},{"level":2,"title":"\u6267\u884C\u4E8B\u4EF6","slug":"\u6267\u884C\u4E8B\u4EF6"},{"level":2,"title":"\u8BBE\u7F6E\u8FDE\u63A5HTTP\u4E8B\u4EF6","slug":"\u8BBE\u7F6E\u8FDE\u63A5http\u4E8B\u4EF6"},{"level":2,"title":"\u4FEE\u6539\u6570\u636EID","slug":"\u4FEE\u6539\u6570\u636Eid"},{"level":2,"title":"\u6267\u884C\u4E8B\u4EF6","slug":"\u6267\u884C\u4E8B\u4EF6-1"},{"level":2,"title":"\u7ED3\u8BED","slug":"\u7ED3\u8BED"}],"relativePath":"3d/editor/guide/setDynamicDatas.md"}',r={},d=i('<h1 id="\u8BBE\u7F6E\u52A8\u6001\u6570\u636E" tabindex="-1">\u8BBE\u7F6E\u52A8\u6001\u6570\u636E <a class="header-anchor" href="#\u8BBE\u7F6E\u52A8\u6001\u6570\u636E" aria-hidden="true">#</a></h1><p>\u5728\u5B9E\u9645\u5E94\u7528\u573A\u666F\u4E2D\uFF0C\u6211\u4EEC\u7684\u5F88\u591A\u6570\u636E\u90FD\u4F1A\u5B9E\u65F6\u4EA7\u751F\u53D8\u5316\u3002\u6BD4\u5982\u6E29\u5EA6\u3001\u4F4D\u7F6E\u3001\u7EDF\u8BA1\u4FE1\u606F\u7B49\u7B49\uFF0C\u800C\u8FD9\u4E9B\u53D8\u5316\u9700\u8981\u5B9E\u65F6\u53CD\u6620\u5728\u573A\u666F\u4E2D\uFF0C\u4EC5\u901A\u8FC7\u5C5E\u6027\u7F16\u8F91\u663E\u7136\u662F\u65E0\u6CD5\u5B8C\u6210\u7684\u3002\u90A3\u4E48\u6211\u4EEC\u6709\u6CA1\u6709\u4EC0\u4E48\u529E\u6CD5\u53EF\u4EE5\u5FEB\u901F\u7684\u5C06\u4E00\u4E9B\u5C5E\u6027\u4E0E\u540E\u53F0\u6570\u636E\u7ED1\u5B9A\u8D77\u6765\uFF0C\u4F7F\u5F97\u540E\u53F0\u4EC5\u9700\u63A8\u9001\u5BF9\u5E94\u7684\u6570\u636E\uFF0C\u573A\u666F\u4E2D\u5C31\u53EF\u4EE5\u5B9E\u65F6\u7684\u53D8\u5316\u5462\uFF1F</p><p>\u7B54\u6848\u662F\u80AF\u5B9A\u7684\uFF0C\u8FD9\u9700\u8981\u901A\u8FC7\u52A8\u6001\u6570\u636E\u7CFB\u7EDF\u6765\u5B8C\u6210\u3002\u4E0B\u9762\u6211\u4EEC\u4F9D\u7136\u901A\u8FC7\u4E00\u4E2A\u7B80\u5355\u7684\u6848\u4F8B\u6765\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u52A8\u6001\u6570\u636E\u3002</p><p>\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u6E29\u63A7\u9762\u677F\uFF0C\u9762\u677F\u4E0A\u9700\u8981\u5C55\u793A\u673A\u5668\u7684\u5B9E\u65F6\u6E29\u5EA6\uFF0C\u73B0\u5728\uFF0C\u6211\u4EEC\u5C31\u6765\u4E00\u8D77\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\u3002</p><h2 id="\u51C6\u5907\u9762\u677F" tabindex="-1">\u51C6\u5907\u9762\u677F <a class="header-anchor" href="#\u51C6\u5907\u9762\u677F" aria-hidden="true">#</a></h2><p>\u5728\u57FA\u7840\u6A21\u578B\u4E2D\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A\u201C2D\u9762\u677F\u201D\uFF0C\u5728\u573A\u666F\u4E2D\u62D6\u5165\u4E00\u4E2A2D\u9762\u677F\uFF0C\u53CC\u51FB\u5B83\uFF0C\u955C\u5934\u4F1A\u81EA\u52A8\u62C9\u8FD1\u3002\u5728\u53F3\u4FA7\u5C5E\u6027\u9762\u677F\u4E2D\u5207\u6362\u81F3\u5185\u5BB9\u9009\u9879\u5361\uFF0C\u70B9\u51FB\u201C\u6587\u5B57\u5217\u8868\u201D\u540E\u7684\u201C+\u201D\u6309\u94AE\uFF0C2D\u9762\u677F\u4E2D\u4F1A\u81EA\u52A8\u6DFB\u52A0\u4E00\u6761\u6587\u672C\uFF0C\u4FEE\u6539\u6587\u672C\u4E3A\u201C\u6E29\u5EA6\uFF1A\u201D\u5E76\u5C06\u5B83\u79FB\u81F3\u5408\u9002\u7684\u4F4D\u7F6E\u3002\u518D\u6DFB\u52A0\u4E00\u6761\u6587\u672C\uFF0C\u5C06\u5B83\u79FB\u81F3\u201C\u6E29\u5EA6\uFF1A\u201D\u7684\u53F3\u4FA7\uFF0C\u4FEE\u6539\u6587\u672C\u4E3A\u201C0\u201D\uFF0C\u8868\u793A\u5F53\u524D\u7684\u6E29\u5EA6\u3002\u73B0\u5728\uFF0C\u4E00\u4E2A\u9759\u6001\u7684\u6E29\u63A7\u9762\u677F\u5C31\u5C55\u793A\u597D\u4E86\u3002</p><h2 id="\u6DFB\u52A0\u52A8\u6001\u6570\u636E" tabindex="-1">\u6DFB\u52A0\u52A8\u6001\u6570\u636E <a class="header-anchor" href="#\u6DFB\u52A0\u52A8\u6001\u6570\u636E" aria-hidden="true">#</a></h2><p>\u65E2\u7136\u8981\u7ED1\u5B9A\u52A8\u6001\u6570\u636E\uFF0C\u6211\u4EEC\u9996\u5148\u9700\u8981\u5B9A\u4E49\u4E00\u6761\u52A8\u6001\u6570\u636E\u3002\u70B9\u51FB\u4E0A\u65B9\u5DE5\u5177\u680F\u4E2D\u7684\u201C\u6570\u636E\u201D\u6309\u94AE\uFF0C\u5F39\u51FA\u52A8\u6001\u6570\u636E\u7F16\u8F91\u5F39\u7A97\u3002\u5728\u6DFB\u52A0\u4E00\u6761\u52A8\u6001\u6570\u636E\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u7B80\u5355\u4E86\u89E3\u4E0B\u52A8\u6001\u6570\u636E\u7684\u6784\u6210\u3002</p><p>\u4E00\u6761\u52A8\u6001\u6570\u636E\u662F\u7531\u6570\u636EID\u3001\u540D\u79F0\u3001\u7C7B\u578B\u3001\u503C\u56DB\u4E2A\u90E8\u5206\u7EC4\u6210\u7684\u3002\u5176\u4E2D\u6570\u636EID\u5728\u573A\u666F\u4E2D\u662F\u552F\u4E00\u7684\uFF0C\u901A\u8FC7\u5B83\u6765\u5173\u8054\u4E0D\u540C\u7684\u5C5E\u6027\uFF0C\u540E\u53F0\u63A8\u9001\u6570\u636E\u65F6\u4E5F\u9700\u8981\u5B83\u6765\u4F5C\u4E3A\u6807\u8BC6\u7B26\u3002\u6211\u4EEC\u53EF\u4EE5\u7ED9\u52A8\u6001\u6570\u636E\u8BBE\u7F6E\u6BD4\u8F83\u597D\u8BB0\u7684\u540D\u79F0\uFF0C\u65B9\u4FBF\u5728\u7ED1\u5B9A\u65F6\u9009\u62E9\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u5219\u9ED8\u8BA4\u663E\u793AID\u3002\u7C7B\u578B\u7528\u6765\u6307\u5B9A\u8BBE\u7F6E\u7684\u503C\u662F\u5B57\u7B26\u4E32\u3001\u6570\u503C\u8FD8\u662F\u5E03\u5C14\u503C\uFF08\u662F/\u5426\uFF09\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7ED9\u52A8\u6001\u6570\u636E\u8BBE\u7F6E\u4E00\u6761\u521D\u59CB\u503C\u3002</p><p>\u73B0\u5728\u6211\u4EEC\u70B9\u51FB\u53F3\u4FA7\u7684\u201C+ \u65B0\u589E\u201D\u6309\u94AE\uFF0C\u5728\u5F39\u7A97\u4E2D\u8F93\u5165\u6570\u636EID\u4E3A\u201Ctemp\u201D\uFF0C\u70B9\u51FB\u786E\u5B9A\uFF0C\u4E00\u6761ID\u4E3A\u201Ctemp\u201D\u7684\u52A8\u6001\u6570\u636E\u5C31\u6DFB\u52A0\u4E86\u3002\u4FEE\u6539\u5B83\u7684\u540D\u79F0\u4E3A\u201C\u6E29\u5EA6\u201D\uFF0C\u7C7B\u578B\u4E3A\u201C\u6570\u503C\u201D\uFF0C\u503C\u4E3A\u201C0\u201D\uFF0C\u5173\u95ED\u5F39\u7A97\u3002</p><h2 id="\u7ED1\u5B9A\u52A8\u6001\u6570\u636E" tabindex="-1">\u7ED1\u5B9A\u52A8\u6001\u6570\u636E <a class="header-anchor" href="#\u7ED1\u5B9A\u52A8\u6001\u6570\u636E" aria-hidden="true">#</a></h2><p>\u73B0\u5728\u6211\u4EEC\u628A\u52A8\u6001\u6570\u636E\u201Ctemp\u201D\u4E0E\u503C\u4E3A\u201C0\u201D\u7684\u201C\u6587\u672C\u201D\u5C5E\u6027\u8FDB\u884C\u7ED1\u5B9A\u3002</p><p>\u9F20\u6807\u79FB\u81F3\u201C\u6587\u672C\u201D\u5C5E\u6027\u4E0A\uFF0C\u6211\u4EEC\u4F1A\u53D1\u73B0\u540E\u9762\u4F1A\u51FA\u73B0\u4E00\u4E2A\u7C7B\u4F3C\u56DE\u5F62\u9488\u7684\u201C\u7ED1\u5B9A\u201D\u6309\u94AE\u3002\u70B9\u51FB\u6309\u94AE\uFF0C\u4F1A\u51FA\u73B0\u52A8\u6001\u6570\u636E\u5217\u8868\u9009\u9879\u6846\u3002\u70B9\u51FB\u9009\u9879\u201C\u6E29\u5EA6\u201D\uFF0C\u9009\u9879\u6846\u4F1A\u9690\u85CF\u5E76\u4E14\u6309\u94AE\u4F1A\u53D8\u4E3A\u84DD\u8272\u5E76\u5E38\u663E\uFF0C\u8FD9\u4EE3\u8868\u5C5E\u6027\u5DF2\u7ECF\u4E0E\u52A8\u6001\u6570\u636E\u201Ctemp\u201D\u7ED1\u5B9A\u8D77\u6765\u4E86\u3002</p><h2 id="\u8BBE\u7F6E\u52A8\u6001\u6570\u636E\u6539\u53D8\u4E8B\u4EF6" tabindex="-1">\u8BBE\u7F6E\u52A8\u6001\u6570\u636E\u6539\u53D8\u4E8B\u4EF6 <a class="header-anchor" href="#\u8BBE\u7F6E\u52A8\u6001\u6570\u636E\u6539\u53D8\u4E8B\u4EF6" aria-hidden="true">#</a></h2><p>\u60F3\u8981\u6539\u53D8\u52A8\u6001\u6570\u636E\u7684\u503C\u6709\u4E24\u79CD\u65B9\u6CD5\uFF0C\u73B0\u5728\u5148\u4ECB\u7ECD\u7B2C\u4E00\u79CD\uFF1A\u901A\u8FC7\u6267\u884C\u201C\u6539\u53D8\u52A8\u6001\u6570\u636E\u201D\u4E8B\u4EF6\u6765\u6539\u53D8\u201Ctemp\u201D\u7684\u503C\u3002\u5207\u6362\u5230\u4E8B\u4EF6\u9009\u9879\u5361\uFF0C\u9009\u62E9\u5E76\u6DFB\u52A0\u201C\u9F20\u6807\u5355\u51FB\u540E\u201D\u4E8B\u4EF6\uFF0C\u70B9\u51FB\u201C+ \u52A8\u4F5C\u201D\u6309\u94AE\uFF0C\u5728\u52A8\u4F5C\u7F16\u8F91\u5F39\u7A97\u4E2D\u9009\u62E9\u52A8\u4F5C\u201C\u6539\u53D8\u52A8\u6001\u6570\u636E\u201D\uFF0C\u9009\u62E9\u5E76\u6DFB\u52A0\u6570\u636E\u201C\u6E29\u5EA6\u201D\uFF0C\u8FD9\u91CC\u6211\u4EEC\u9009\u62E9\u201C\u52A0\u201D\uFF0C\u503C\u8BBE\u7F6E\u4E3A\u201C1\u201D\uFF0C\u8FD9\u6837\u6BCF\u6B21\u70B9\u51FB2D\u9762\u677F\u90FD\u4F1A\u8BA9\u6E29\u5EA6\u52A01\u3002\u8BBE\u7F6E\u5B8C\u6BD5\uFF0C\u70B9\u51FB\u786E\u5B9A\uFF0C\u53F3\u4FA7\u4F1A\u51FA\u73B0\u6539\u53D8\u52A8\u6001\u6570\u636E\u7684\u76F8\u5173\u63CF\u8FF0\u3002</p><h2 id="\u6267\u884C\u4E8B\u4EF6" tabindex="-1">\u6267\u884C\u4E8B\u4EF6 <a class="header-anchor" href="#\u6267\u884C\u4E8B\u4EF6" aria-hidden="true">#</a></h2><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u628A\u52A8\u6001\u6570\u636E\u201Ctemp\u201D\u4E0E2D\u9762\u677F\u6587\u672C\u7ED1\u5B9A\u8D77\u6765\u4E86\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u597D\u4E86\u4E8B\u4EF6\u4F7F\u201Ctemp\u201D\u5728\u6BCF\u6B21\u70B9\u51FB2D\u9762\u677F\u65F6\u52A01\u3002\u70B9\u51FB\u8FD0\u884C\u6309\u94AE\uFF0C\u8FDB\u5165\u8FD0\u884C\u72B6\u6001\uFF0C\u7136\u540E\u6211\u4EEC\u70B9\u51FB\u4E00\u4E0B2D\u9762\u677F\uFF0C\u4F1A\u53D1\u73B0\u6587\u672C\u7531\u201C0\u201D\u53D8\u6210\u4E86\u201C1\u201D\uFF0C\u518D\u6B21\u70B9\u51FB2D\u9762\u677F\uFF0C\u6587\u672C\u4F1A\u53D8\u6210\u201C2\u201D\uFF0C\u6BCF\u6B21\u70B9\u51FB\u90FD\u4F1A\u9012\u589E\u3002\u8FD9\u8868\u660E\u6587\u672C\u786E\u5B9E\u5DF2\u7ECF\u4E0E\u52A8\u6001\u6570\u636E\u5B9E\u73B0\u5173\u8054\uFF0C\u800C\u52A8\u6001\u6570\u636E\u7684\u6539\u53D8\u4F1A\u540C\u6B65\u66F4\u6539\u6587\u672C\u503C\u3002</p><p>\u4F46\u662F\u8FD9\u4ECD\u975E\u6211\u4EEC\u60F3\u8981\u7684\u7ED3\u679C\uFF0C\u52A8\u6001\u6570\u636E\u7684\u6539\u53D8\u5E94\u8BE5\u662F\u7531\u540E\u53F0\u63A8\u9001\u7684\u3002\u73B0\u5728\u6211\u4EEC\u5C31\u6765\u4ECB\u7ECD\u6539\u53D8\u52A8\u6001\u6570\u636E\u7684\u7B2C\u4E8C\u79CD\u65B9\u6CD5\u3002</p><h2 id="\u8BBE\u7F6E\u8FDE\u63A5http\u4E8B\u4EF6" tabindex="-1">\u8BBE\u7F6E\u8FDE\u63A5HTTP\u4E8B\u4EF6 <a class="header-anchor" href="#\u8BBE\u7F6E\u8FDE\u63A5http\u4E8B\u4EF6" aria-hidden="true">#</a></h2><p>\u540E\u53F0\u63A8\u9001\u6570\u636E\u9700\u8981\u7528\u5230\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u7F16\u8F91\u5668\u63D0\u4F9B\u4E86\u4E09\u79CD\u8FDE\u63A5\u65B9\u5F0F\uFF1AHTTP\u3001MQTT\u548CWebSocket\u3002\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u8FDE\u63A5HTTP\u3002\u70B9\u51FB\u573A\u666F\u7A7A\u767D\u4F4D\u7F6E\u6216\u8005\u6309ESC\u53D6\u6D88\u9009\u4E2D2D\u9762\u677F\uFF0C\u8FDB\u5165\u573A\u666F\u7684\u5C5E\u6027\u7F16\u8F91\u9762\u677F\u3002\u53F3\u4FA7\u5C5E\u6027\u680F\u5207\u6362\u81F3\u4E8B\u4EF6\u9009\u9879\u5361\uFF0C\u9009\u62E9\u5E76\u6DFB\u52A0\u201C\u573A\u666F\u6253\u5F00\u540E\u201D\u4E8B\u4EF6\uFF0C\u70B9\u51FB\u201C+ \u52A8\u4F5C\u201D\u6309\u94AE\uFF0C\u5728\u52A8\u4F5C\u7F16\u8F91\u5F39\u7A97\u4E2D\u9009\u62E9\u52A8\u4F5C\u201C\u8FDE\u63A5HTTP\u201D\uFF0C\u540D\u79F0\u53EF\u4EE5\u4E0D\u586B\uFF0C\u5730\u5740\u8F93\u5165\u201C/api/device/data?mock=1\u201D\uFF0C\u8FD9\u662F\u6211\u4EEC\u7684\u4E00\u4E2A\u6D4B\u8BD5\u5730\u5740\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u4E00\u4E9B\u6570\u636E\u70B9\u53F7\u4EE5\u53CA\u968F\u673A\u503C\uFF0C\u7C7B\u578B\u9ED8\u8BA4\u4E3A\u201Cget\u201D\uFF0C\u95F4\u9694\u8BBE\u7F6E\u4E3A2\u79D2\u3002\u7F16\u8F91\u5B8C\u6BD5\uFF0C\u70B9\u51FB\u786E\u5B9A\uFF0C\u53F3\u4FA7\u51FA\u73B0\u8FDE\u63A5HTTP\u7684\u76F8\u5173\u63CF\u8FF0\u3002</p><p>\u73B0\u5728\uFF0C\u5982\u679C\u6211\u4EEC\u8FD0\u884C\u9879\u76EE\uFF0C\u5728\u8FD9\u4E2A\u573A\u666F\u6253\u5F00\u540E\uFF0C\u4F1A\u81EA\u52A8\u6BCF2\u79D2\u8BF7\u6C42\u4E00\u6B21\u6D4B\u8BD5\u5730\u5740\uFF0C\u6B63\u5E38\u60C5\u51B5\u4E0B2D\u9762\u677F\u6570\u636E\u5E94\u8BE5\u4F1A\u663E\u793A\u540E\u53F0\u4EA7\u751F\u7684\u968F\u673A\u6570\u3002\u4F46\u662F\u56E0\u4E3A\u6211\u4EEC\u7684\u6570\u636EID\u201Ctemp\u201D\u5E76\u4E0D\u5728\u6D4B\u8BD5\u5730\u5740\u8FD4\u56DE\u7684\u6570\u636E\u70B9\u53F7\u96C6\u5408\u8303\u56F4\u5185\uFF0C\u56E0\u6B64\u5B9E\u9645\u4E0A\u9762\u677F\u4E0D\u4F1A\u53D1\u751F\u4EFB\u4F55\u53D8\u5316\u3002\u6240\u4EE5\uFF0C\u6211\u4EEC\u8981\u628A\u201Ctemp\u201D\u4FEE\u6539\u4E3A\u6D4B\u8BD5\u5730\u5740\u4E2D\u5DF2\u6709\u7684\u70B9\u53F7\u3002</p><h2 id="\u4FEE\u6539\u6570\u636Eid" tabindex="-1">\u4FEE\u6539\u6570\u636EID <a class="header-anchor" href="#\u4FEE\u6539\u6570\u636Eid" aria-hidden="true">#</a></h2><p>\u5728\u7F16\u8F91\u72B6\u6001\u4E0B\u70B9\u51FB\u9876\u90E8\u5DE5\u5177\u680F\u201C\u6570\u636E\u201D\u6309\u94AE\uFF0C\u6253\u5F00\u6570\u636E\u7F16\u8F91\u5F39\u7A97\uFF0C\u9F20\u6807\u79FB\u81F3\u201Ctemp\u201D\uFF0C\u540E\u9762\u4F1A\u591A\u51FA\u4E00\u4E2A\u201C\u7F16\u8F91\u201D\u56FE\u6807\u3002\u70B9\u51FB\u56FE\u6807\uFF0C\u6253\u5F00\u4FEE\u6539\u6570\u636EID\u5F39\u7A97\uFF0C\u8F93\u5165\u65B0ID\u201Cdevice-001\u201D\uFF0C\u70B9\u51FB\u786E\u5B9A\uFF0C\u6570\u636EID\u4F1A\u66F4\u65B0\uFF0C\u5173\u95ED\u5F39\u7A97\uFF0C\u8FD9\u6837\u6570\u636EID\u5C31\u4FEE\u6539\u5B8C\u6BD5\u4E86\u3002\u4FEE\u6539\u6570\u636EID\u65E0\u9700\u91CD\u65B0\u7ED1\u5B9A\u5C5E\u6027\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u5904\u7406\u65B0ID\u4E0E\u5BF9\u5E94\u7684\u7ED1\u5B9A\u5C5E\u6027\u7684\u5173\u7CFB\u3002</p><h2 id="\u6267\u884C\u4E8B\u4EF6-1" tabindex="-1">\u6267\u884C\u4E8B\u4EF6 <a class="header-anchor" href="#\u6267\u884C\u4E8B\u4EF6-1" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u518D\u6B21\u8FDB\u5165\u8FD0\u884C\u72B6\u6001\uFF0C\u4F1A\u53D1\u73B0\u6570\u636E\u5DF2\u7ECF\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u5E76\u4E14\u6BCF\u96942\u79D2\u66F4\u65B0\u4E00\u6B21\u3002\u81F3\u6B64\uFF0C\u6211\u4EEC\u7684\u9700\u6C42\u5DF2\u7ECF\u987A\u5229\u5B9E\u73B0\u3002</p><h2 id="\u7ED3\u8BED" tabindex="-1">\u7ED3\u8BED <a class="header-anchor" href="#\u7ED3\u8BED" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u603B\u7ED3\u4E00\u4E0B\u5982\u4F55\u901A\u8FC7\u52A8\u6001\u6570\u636E\u6765\u6539\u53D8\u89C6\u56FE\uFF1A</p><ol><li>\u6DFB\u52A0\u52A8\u6001\u6570\u636E\uFF0C\u5176\u4E2D\u6570\u636EID\u662F\u5217\u8868\u4E2D\u552F\u4E00\u7684\u3002</li><li>\u901A\u8FC7\u201C\u7ED1\u5B9A\u201D\u6309\u94AE\u5C06\u5C5E\u6027\u4E0E\u6307\u5B9A\u52A8\u6001\u6570\u636E\u5173\u8054\u3002</li><li>\u8BBE\u7F6E\u4E8B\u4EF6\uFF0C\u4E3B\u52A8\u6539\u53D8\u52A8\u6001\u6570\u636E\u4E0E\u540E\u53F0\u63A8\u9001\u4E24\u79CD\u65B9\u5F0F\u5747\u53EF\u3002</li><li>\u8FD0\u884C\u9879\u76EE\uFF0C\u5F53\u5BF9\u5E94\u4E8B\u4EF6\u53D1\u751F\u65F6\uFF0C\u52A8\u6001\u6570\u636E\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u5E76\u4E14\u540C\u6B65\u53CD\u9988\u5230\u89C6\u56FE\u4E2D\u3002</li></ol><p>\u901A\u8FC7\u52A8\u6001\u6570\u636E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u5B9E\u73B0\u7EDF\u8BA1\u4FE1\u606F\u7B49\u6570\u636E\u7684\u5B9E\u65F6\u53D8\u5316\u3002\u5173\u4E8E\u52A8\u6001\u6570\u636E\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u60A8\u53EF\u4EE5\u53C2\u9605\u6587\u6863<a href="https://www.yuque.com/u479944/afy6zg/ppf5so2xr52gi9le" target="_blank" rel="noopener noreferrer">\u52A8\u6001\u6570\u636E</a>\u3002</p>',29),h=[d];function l(p,s,n,c,o,D){return t(),a("div",null,h)}var f=e(r,[["render",l]]);export{_ as __pageData,f as default};