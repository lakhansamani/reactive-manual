webpackJsonp([0x6d2303377df5],{414:function(e,a){e.exports={data:{markdownRemark:{html:'<h2 id="beforevaluechange"><a href="#beforevaluechange" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>beforeValueChange</h2>\n<p>Most components in ReactiveSearch provides a <code>beforeValueChange</code> prop. It is a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called everytime before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</p>\n<blockquote>\n<p>Note</p>\n<p>Most of the time your needs can be solved using <code>valueChange</code> event. If you absolutely need <code>beforeValueChange</code> you should ensure that you don’t pass a function which takes a very long time to resolve the promise. The component goes in a <strong>locked</strong> state when using <code>beforeValueChange</code> and before the promise is resolved. This means all the state updates are suspended for the component.</p>\n</blockquote>\n<h2 id="handling-stream-updates"><a href="#handling-stream-updates" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Handling stream updates</h2>\n<p>The result components also allow streaming updates if you’re using <a href="https://appbase.io/">appbase.io</a> to host your Elasticsearch cluster. You can enable this with the <code>stream</code> prop.</p>\n<p>If you’re using streaming you can use <code>onAllData</code> which receives three parameters <code>onAllData(results, streamResults, loadMoreData)</code>. The initial results from the query are received in the first paramter <code>results</code>. The <code>streamResults</code> parameter receives an array of objects when they’re created, deleted, or updated. If an object is updated, it contains a <code>_updated</code> key set to <code>true</code>. Similarly, if an object is deleted, it contains a <code>_deleted</code> key set to <code>true</code>. If an object is created, it contains neither of the two. This provides you with all the necessary information to handle streaming in your app suited to your needs. For example, we can utilize this to continuosly handle streaming updates and merge new data with the existing:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">onAllData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> results<span class="token punctuation">,</span> streamResults <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// generate an array of ids of streamResults</span>\n    <span class="token keyword">const</span> streamResultsIds <span class="token operator">=</span> streamResults<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>data <span class="token operator">=></span> data<span class="token punctuation">.</span>_id<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      data\n        <span class="token comment">// consider streamResults as the source of truth</span>\n        <span class="token comment">// first take existing data which is not present in stream data</span>\n        <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> _id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>streamResultsIds<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>_id<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token comment">// then add data from stream data</span>\n        <span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>streamResults<span class="token punctuation">)</span>\n        <span class="token comment">// remove data which is deleted in stream data</span>\n        <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>results <span class="token operator">=></span> <span class="token operator">!</span>results<span class="token punctuation">.</span>_deleted<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',frontmatter:{title:"Advanced Guides",next:"advanced/analytics.html",prev:"advanced/writingdata.html",nextTitle:"Analytics",prevTitle:"Writing and Editing Data"},fields:{path:"docs/advanced/Guides.md",slug:"advanced/guides.html"}}},pathContext:{slug:"advanced/guides.html"}}}});
//# sourceMappingURL=path---advanced-guides-html-f42e1fc94bf88340d201.js.map