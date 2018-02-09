webpackJsonp([74841069873382],{460:function(n,a){n.exports={data:{markdownRemark:{html:'<p><img src="https://imgur.com/i9GNHTD.png" alt="Image to be displayed"></p>\n<p><code>ReactiveList</code> creates a data-driven result list UI component. This list can reactively update itself based on changes in other components or changes in the database itself.</p>\n<p>Example uses:</p>\n<ul>\n<li>showing a feed of results based on the applied search criteria.</li>\n<li>streaming realtime feed updates based on applied criteria like in a newsfeed.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveList</span>\n  <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    <span class="token string">"and"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"CitySensor"</span><span class="token punctuation">,</span> <span class="token string">"SearchSensor"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">onData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveList</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchResult<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ratings<span class="token punctuation">"</span></span>\n  <span class="token attr-name">stream</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">pagination</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">paginationAt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span>\n  <span class="token attr-name">pages</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">sortBy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>desc<span class="token punctuation">"</span></span>\n  <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">showResultStats</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">onData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">onResultStats</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>total<span class="token punctuation">,</span> took<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">"found "</span> <span class="token operator">+</span> total <span class="token operator">+</span> <span class="token string">" results in "</span> <span class="token operator">+</span> took <span class="token operator">+</span> <span class="token string">"ms."</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n    and<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"CitySensor"</span><span class="token punctuation">,</span> <span class="token string">"SearchSensor"</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</li>\n<li><strong>dataField</strong> <code>String</code><br>\ndata field to be connected to the component’s UI view. It is useful for providing a sorting context.</li>\n<li><strong>stream</strong> <code>Boolean</code> [optional]<br>\nwhether to stream new result updates in the UI. Defaults to <code>false</code>. <code>stream: true</code> is appended to the streaming hit objects, which can be used to selectively react to streaming changes (eg. showing fade in animation on new streaming hits, Twitter/Facebook like streams, showing the count of new feed items available like <em>2 New Tweets</em>)</li>\n<li><strong>pagination</strong> <code>Boolean</code> [optional]<br>\npagination &#x3C;> infinite scroll switcher. Defaults to <code>false</code>, i.e. an infinite scroll based view. When set to <code>true</code>, a pagination based list view with page numbers will appear.</li>\n<li><strong>paginationAt</strong> <code>String</code> [optional]<br>\nDetermines the position where to show the pagination, only applicable when <strong>pagination</strong> prop is set to <code>true</code>. Accepts one of <code>top</code>, <code>bottom</code> or <code>both</code> as valid values. Defaults to <code>bottom</code>.</li>\n<li><strong>pages</strong> <code>Number</code> [optional]<br>\nnumber of user selectable pages to be displayed when pagination is enabled. Defaults to 5.</li>\n<li><strong>sortBy</strong> <code>String</code> [optional]<br>\nsort the results by either <code>asc</code> or <code>desc</code> order. It is an alternative to <code>sortOptions</code>, both can’t be used together.</li>\n<li><strong>size</strong> <code>Number</code> [optional]<br>\nnumber of results to show per view. Defaults to 10.</li>\n<li><strong>showResultStats</strong> <code>Boolean</code> [optional]<br>\nwhether to show result stats in the form of results found and time taken. Defaults to <code>true</code>.</li>\n<li><strong>onResultStats</strong> <code>Function</code> [optional]<br>\nshow custom result stats using a function that takes two parameters for <code>time_taken</code> and <code>total_results</code> and returns a string.</li>\n<li><strong>react</strong> <code>Object</code> [optional]<br>\na dependency object defining how this component should react based on the state changes in the sensor components.</li>\n<li>\n<p><strong>onData</strong> <code>Function</code> [optional]<br>\nreturns a list element object to be rendered based on the <code>res</code> data object. This callback function prop is called for each data item rendered in the <strong>ReactiveList</strong> component’s view. For example,</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>onData<span class="token operator">=</span><span class="token punctuation">{</span>\n  <span class="token keyword">function</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">(</span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>tilte<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>description<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n\t\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li><strong>onAllData</strong> <code>Function</code> [optional]<br>\nworks like <strong>onData</strong> prop but all the data objects are passed to the callback function.</li>\n<li><strong>innerProps</strong> <code>Object</code> [optional]<br>\nspecifies additional props for the internal components. Accepts an object with the specified keys. Read more about the usage <a href="/advanced/innerprops.html">here</a></li>\n</ul>\n<br />\n<table>\n<thead>\n<tr>\n<th align="right"><strong>Key</strong></th>\n<th align="center"><strong>Explaination</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="right"><code>icon</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#icon-def-headref">Icon</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>button</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#button-def-headref">Button</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>spinner</code></td>\n<td align="center"><a href="http://docs.nativebase.io/Components.html#Spinner">Spinner</a>\n component from \n<strong>native-base</strong></td>\n</tr>\n<tr>\n<td align="right"><code>text</code></td>\n<td align="center"><a href="http://facebook.github.io/react-native/docs/text.html">Text</a>\n component from \n<strong>react-native</strong></td>\n</tr>\n</tbody>\n</table>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<p><a href="https://expo.io/@dhruvdutt/reactivelist-demo">Try the demo</a> instantly.</p>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>ReactiveList</code> component supports <code>style</code> prop. Read more about it <a href="/advanced/style.html">here</a>.</p>\n<p>It also supports an <code>innerStyle</code> prop with the following keys:</p>\n<ul>\n<li><code>label</code></li>\n<li><code>button</code></li>\n<li><code>icon</code></li>\n</ul>\n<p>Read more about it <a href="/advanced/style.html#innerstyle">here</a></p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>ReactiveList</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>style</code>,</li>\n<li>render individual result data items using <code>onData</code>,</li>\n<li>render the entire result data using <code>onAllData</code>.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveList</span>\n  <span class="token attr-name">...</span>\n  <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> paddingBottom<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n  <span class="token attr-name">onData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>data<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>style</strong> <code>Object</code><br>\nCSS styles to be applied to the <strong>ReactiveList</strong> component.</li>\n<li><strong>onData</strong> <code>Function</code> [optional]<br>\na callback function where user can define how to render the view based on the data changes.</li>\n<li><strong>onAllData</strong> <code>Function</code> [optional]<br>\nan alternative callback function to <code>onData</code>, where user can define how to render the view based on all the data changes. It accepts three parameters, <code>results</code>, <code>streamResults</code> and a <strong>callback</strong> function which should be called when the results reach the end (on scroll).</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">onAllData</span><span class="token punctuation">(</span>results<span class="token punctuation">,</span> streamReasults<span class="token punctuation">,</span> loadMoreData<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment" spellcheck="true">// return the list to render</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',frontmatter:{title:"ReactiveList",next:"advanced/reactivecomponent.html",prev:"components/daterange.html",nextTitle:"ReactiveComponent",prevTitle:"DateRange"},fields:{path:"docs/components/ReactiveList.md",slug:"components/reactivelist.html"}}},pathContext:{slug:"components/reactivelist.html"}}}});
//# sourceMappingURL=path---components-reactivelist-html-fcafc15e479a16d51d29.js.map