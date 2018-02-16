webpackJsonp([0xb6e97fe17b44],{452:function(n,s){n.exports={data:{markdownRemark:{html:'<p>We have built this library keeping you, the developer, in mind. If you’re here, it is obvious that you want to create a custom component that is reactive in nature. Perhaps, you already have a component in your design kit and want it to work seamlessly with Reactivesearch.</p>\n<p>With <code>ReactiveComponent</code>, you can convert any React Component into a Reactivesearch component i.e. your react component will be able to talk to other Reactivesearch components and connect with your elasticsearch cluster seamlessly.</p>\n<blockquote>\n<p>How does this work?</p>\n<p><code>ReactiveComponent</code> is a wrapper component that allows you to connect custom component(s) (passed as children) with the Reactivesearch ecosystem.</p>\n</blockquote>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>\n<p>For example, let’s suppose that we are building an e-commerce store where we have a react component called <code>ColorPicker</code> which renders the <code>colors</code> passed to it as tiles, allowing us to filter the products by their colors.</p>\n<p><img src="https://i.imgur.com/wuKhCTT.png" alt="ColorPicker"></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span>\n<span class="gatsby-highlight-code-line">    <span class="token attr-name">colors</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'#000\'</span><span class="token punctuation">,</span> <span class="token string">\'#666\'</span><span class="token punctuation">,</span> <span class="token string">\'#fff\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n</span>    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleColorChange<span class="token punctuation">}</span></span>\n<span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Now, let’s assume that we have all these hex-codes stored as <code>keywords</code> in an Elasticsearch index. To display each unique color tile, we can run a <code>terms</code> aggregations query. The <code>defaultQuery</code> prop of ReactiveComponent allows us to do this and pass the results to a child component.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>ReactiveComponent\n    componentId<span class="token operator">=</span><span class="token string">"myColorPicker"</span>   <span class="token comment" spellcheck="true">// a unique id we will refer to later</span>\n    defaultQuery<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">(</span>\n        aggs<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            color<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                terms<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                    field<span class="token punctuation">:</span> <span class="token string">\'color\'</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPickerWrapper</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveComponent</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>The above snippet runs the <code>defaultQuery</code> passed to the ReactiveComponent when the component gets mounted and consequently pass the query results to the <code>ColorPickerWraper</code> component (i.e. child component of ReactiveComponent) as the following two props: <code>hits</code> and <code>aggregations</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">ColorPickerWrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>\n            <span class="token comment" spellcheck="true">// checking for when component gets the aggregation results</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>aggregations\n            <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>colors\n            <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>buckets<span class="token punctuation">.</span>length\n        <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            colors <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>color <span class="token operator">=></span> color<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>ColorPicker\n                colors<span class="token operator">=</span><span class="token punctuation">{</span>colors<span class="token punctuation">}</span>\n                onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n                    <span class="token comment" spellcheck="true">// handles color change</span>\n                    <span class="token comment" spellcheck="true">// we will define this in the next step</span>\n                <span class="token punctuation">}</span><span class="token punctuation">}</span>\n            <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Up until this point, we have figured out how to display the colored tiles by running an Elasticsearch query and passing the results to our <code>ColorPickerWrapper</code> component.</p>\n<p>But we also need to be able to filter the products by a color tile when selected by the end-user. This is where <code>setQuery()</code> prop comes in handy. It takes an object param of shape:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">{</span>\n    query<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\'</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>where,</p>\n<ul>\n<li><strong>query</strong> - is the query of the component,</li>\n<li><strong>value</strong> - can be an array, string or number (This will be shown in selected filters and URLParams if active. In our case, this is the hex-code of the selected color tile)</li>\n</ul>\n<p>In our current example, we would simply have to call <code>this.props.setQuery()</code> with the updated query and value of the component:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">ColorPickerWrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>\n            <span class="token comment" spellcheck="true">// checking for when component gets the aggregation results</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>aggregations\n            <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>colors\n            <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>buckets<span class="token punctuation">.</span>length\n        <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            colors <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>aggregations<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>color <span class="token operator">=></span> color<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>ColorPicker\n                colors<span class="token operator">=</span><span class="token punctuation">{</span>colors<span class="token punctuation">}</span>\n<span class="gatsby-highlight-code-line">                onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>newColor<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>     <span class="token comment" spellcheck="true">// handles color change</span>\n</span><span class="gatsby-highlight-code-line">                    <span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">                        query<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">                            term<span class="token punctuation">:</span> <span class="token punctuation">{</span> color<span class="token punctuation">:</span> newColor <span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">                        <span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">                    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">\n</span><span class="gatsby-highlight-code-line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">setQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">                        query<span class="token punctuation">,</span>\n</span><span class="gatsby-highlight-code-line">                        value<span class="token punctuation">:</span> newColor\n</span><span class="gatsby-highlight-code-line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</span><span class="gatsby-highlight-code-line">                <span class="token punctuation">}</span><span class="token punctuation">}</span>\n</span>            <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Now, the components which will have <code>myColorPicker</code> present in their <code>react</code> prop can react to the changes in the ColorPicker component based on the query passed to the setQuery method. You can check a <a href="https://github.com/appbaseio/reactivesearch/blob/dev/packages/web/examples/ReactiveComponent/src/index.js">similar example implementation here</a>.</p>\n<h3 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h3>\n<h4 id="child-component"><a href="#child-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Child Component</h4>\n<ul>\n<li><strong>hits</strong> <code>Array</code><br>\n<code>hits</code> prop is an array of results from the Elasticsearch query of the component.</li>\n<li><strong>aggregations</strong> <code>Object</code><br>\n<code>aggregations</code> prop contains the results from <code>aggs</code> Elasticsearch query of the component.</li>\n<li>\n<p><strong>setQuery</strong> <code>function</code><br>\n<code>setQuery</code> function sets the query of the component. It takes an object param of shape:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">{</span>\n    query<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// query of the component</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\'</span>  <span class="token comment" spellcheck="true">// value of the component</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n</li>\n<li><strong>selectedValue</strong> <code>any</code><br>\n<code>selectedValue</code> contains the current value of the component (which can be set via <code>setQuery()</code> function). This is used for URLParams and SelectedFilters.</li>\n</ul>\n<h4 id="reactivecomponent"><a href="#reactivecomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReactiveComponent</h4>\n<ul>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>style</strong> <code>Object</code><br>\nCSS styles to be applied to the <strong>DataSearch</strong> component.</li>\n<li><strong>defaultQuery</strong> <code>Function</code><br>\n<strong>returns</strong> the default query to be applied to the component, as defined in Elasticsearch Query DSL.</li>\n<li>\n<p><strong>react</strong> <code>Object</code>\n<code>react</code> prop is available in components whose data view should reactively update when on or more dependent components change their states, e.g. <a href="/reactive-manual/native/map-components/reactivemap.html"><code>ReactiveMap</code></a>, <a href="/reactive-manual/native/basic-components/reactivelist.html"><code>ReactiveList</code></a>.</p>\n<ul>\n<li>\n<p><strong>key</strong> <code>String</code>\none of <code>and</code>, <code>or</code>, <code>not</code> defines the combining clause.</p>\n<ul>\n<li><strong>and</strong> clause implies that the results will be filtered by matches from <strong>all</strong> of the associated component states.</li>\n<li><strong>or</strong> clause implies that the results will be filtered by matches from <strong>at least one</strong> of the associated component states.</li>\n<li><strong>not</strong> clause implies that the results will be filtered by an <strong>inverse</strong> match of the associated component states.</li>\n</ul>\n</li>\n<li>\n<p><strong>value</strong> <code>String or Array or Object</code></p>\n<ul>\n<li><code>String</code> is used for specifying a single component by its <code>componentId</code>.</li>\n<li><code>Array</code> is used for specifying multiple components by their <code>componentId</code>.</li>\n<li><code>Object</code> is used for nesting other key clauses.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h3 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h3>\n<br />\n<div data-snack-id="Sy0tN0K8f" data-snack-platform="ios" data-snack-preview="true" data-snack-theme="light" style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.16);border-radius:4px;height:505px;width:100%"></div>\n<p>See storybook for ReactiveComponent on playground.</p>\n<p><a href="https://opensource.appbase.io/playground/?selectedKind=Base%20components%2FReactiveComponent&selectedStory=A%20custom%20component" target="_blank">A custom component using ReactiveComponent</a></p>',frontmatter:{title:"Reactive Component",next:"advanced/performance.html",prev:"components/reactivelist.html",nextTitle:"Performance Tips",prevTitle:"ReactiveList"},fields:{path:"docs/advanced/ReactiveComponent.md",slug:"advanced/reactivecomponent.html"}}},pathContext:{slug:"advanced/reactivecomponent.html"}}}});
//# sourceMappingURL=path---advanced-reactivecomponent-html-f8ede1f2016788471ae5.js.map