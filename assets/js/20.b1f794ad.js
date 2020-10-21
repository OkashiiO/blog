(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{358:function(t,r,s){"use strict";s.r(r);var e=s(43),_=Object(e.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"从输入url到页面加载发生了什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从输入url到页面加载发生了什么？"}},[t._v("#")]),t._v(" 从输入URL到页面加载发生了什么？")]),t._v(" "),s("h2",{attrs:{id:"_1-浏览器地址输入url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-浏览器地址输入url"}},[t._v("#")]),t._v(" 1.浏览器地址输入URL")]),t._v(" "),s("p",[t._v("url一般包含这几个部分.可以顺带提以下知识点")]),t._v(" "),s("p",[s("strong",[t._v("知识点:")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("协议：主要是HTTP协议，HTTPS协议，FTP协议，FILe协议")])]),t._v(" "),s("li",[s("p",[t._v("域名： 定义因特网"),s("strong",[t._v("域名")]),t._v("，比如 "),s("a",{attrs:{href:"http://google.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("google.com"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("端口号：通常默认都是隐藏的 "),s("strong",[t._v("http默认端口号为80 https默认端口号为443")])])]),t._v(" "),s("li",[s("p",[t._v("补充:  同源策略 - 在前端进行数据请求时，由于浏览器的同源策略，协议，域名，端口号有一个不同会存在跨域请求，需要进行跨域处理")])])]),t._v(" "),s("h2",{attrs:{id:"_2-浏览器查找当前url是否存在缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-浏览器查找当前url是否存在缓存"}},[t._v("#")]),t._v(" 2.浏览器查找当前URL是否存在缓存")]),t._v(" "),s("p",[t._v("浏览器首先查询当前URL是否有缓存,有的话,再查询是否过期,没过期则读缓存.过期了则访问web服务器.")]),t._v(" "),s("p",[s("strong",[t._v("知识点:")]),t._v(' 详细解释可以看本系列的"浏览器缓存"这节.')]),t._v(" "),s("h2",{attrs:{id:"_3-dns解析url对应ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-dns解析url对应ip"}},[t._v("#")]),t._v(" 3.DNS解析URL对应IP")]),t._v(" "),s("h4",{attrs:{id:"解析过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析过程"}},[t._v("#")]),t._v(" "),s("strong",[t._v("解析过程:")])]),t._v(" "),s("p",[t._v("1.首先浏览器会查看自己的DNS缓存是否存在.")]),t._v(" "),s("p",[t._v("2.如果没有找到,浏览器会"),s("strong",[t._v("先查找本地hosts文件是否有这个网址映射关系")]),t._v("，如果有就调用这个IP地址映射，完成域名解析。")]),t._v(" "),s("p",[t._v("3.如果没有找到,则会在操作系统缓存中查找本地的DNS解析器缓存，如果找到则返回。")]),t._v(" "),s("p",[t._v("4.如果没有找到,则会在路由器缓存中进行查找,如果找到则返回。")]),t._v(" "),s("p",[t._v("5.如果还是没有找到,则会按ISP(运营商)DNS缓存、根域名服务器、顶级域名服务器、主域名服务器的顺序，逐步读取缓存，直到拿到IP地址.")]),t._v(" "),s("h2",{attrs:{id:"_4-根据ip建立tcp连接-三次握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-根据ip建立tcp连接-三次握手"}},[t._v("#")]),t._v(" 4.根据IP建立TCP连接 ——三次握手")]),t._v(" "),s("h4",{attrs:{id:"三次握手的过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三次握手的过程"}},[t._v("#")]),t._v(" "),s("strong",[t._v("三次握手的过程:")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("客户端发送一个syn包:即带有 SYN=1，Seq=x 的数据包到服务器端口，并进入SYN_SENT状态，等待服务器确认；")]),t._v("（第一次握手，由浏览器发起，告诉服务器我要发送请求了）")]),t._v(" "),s("li",[s("strong",[t._v("服务器收到syn包，必须确认客户的SYN，同时发回一个带 SYN=1， ACK=x+1， Seq=y 的响应包以示传达确认信息,即SYN+ACK包，此时服务器进入SYN_RECV状态；")]),t._v("（第二次握手，由服务器发起，告诉浏览器我准备接受了，你赶紧发送吧）")]),t._v(" "),s("li",[s("strong",[t._v("客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK,即回传一个带 ACK=y+1， Seq=Z 的数据包，代表“握手结束”")]),t._v("（第三次握手，由浏览器发送，告诉服务器，我马上就发了，准备接受吧）")])]),t._v(" "),s("h2",{attrs:{id:"_5-http-https发起请求-6-服务器处理请求，浏览器接收http响应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-http-https发起请求-6-服务器处理请求，浏览器接收http响应"}},[t._v("#")]),t._v(" 5.HTTP/HTTPS发起请求&&6.服务器处理请求，浏览器接收HTTP响应")]),t._v(" "),s("ul",[s("li",[t._v("完整的HTTP请求包含请求起始行、请求头部、请求主体三部分。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/22/1691406a752c9a9b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),t._v(" "),s("ul",[s("li",[t._v("服务器在收到浏览器发送的HTTP请求之后，会将收到的HTTP报文封装成HTTP的Request对象，并通过不同的Web服务器进行处理，处理完的结果以HTTP的Response对象返回，主要包括状态码，响应头，响应报文三个部分。")]),t._v(" "),s("li",[t._v("综合起来,完整的HTTP请报文一般包括了："),s("strong",[t._v("通用头部")]),t._v("，"),s("strong",[t._v("请求/响应头部")]),t._v("，"),s("strong",[t._v("请求/响应体")])])]),t._v(" "),s("h2",{attrs:{id:"_7-浏览器解析渲染页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-浏览器解析渲染页面"}},[t._v("#")]),t._v(" 7.浏览器解析渲染页面")]),t._v(" "),s("p",[t._v("浏览器内核拿到内容后，渲染步骤大致可以分为以下几步：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. 解析HTML，构建DOM树\n\n2. 解析CSS，生成CSS规则树\n\n3. 合并DOM树和CSS规则，生成render树\n\n4. 布局render树（Layout/reflow），负责各元素尺寸、位置的计算\n\n5. 绘制render树（paint），绘制页面像素信息\n\n6. 浏览器会将各层的信息发送给GPU，GPU会将各层合成（composite），显示在屏幕上\n\nPS:\nreflow：也称作layout，中文叫回流，一般意味着元素的内容、结构、位置或尺寸发生了变化，需要重新计算样式和渲染树，这个过程称为reflow。\n\nrepaint：中文重绘，意味着元素发生的改变只是影响了元素的一些外观之类的时候(例如：背景色，边框颜色，文字颜色等)，此时只需要应用新样式绘制这个元素就可以了。\n")])])]),s("p",[s("strong",[t._v("预加载扫描器")])]),t._v(" "),s("p",[t._v("浏览器构建DOM树时，这个过程占用了主线程。当这种情况发生时，预加载扫描仪将解析可用的内容并请求高优先级资源，如CSS、JavaScript和web字体。多亏了预加载扫描器，我们不必等到解析器找到对外部资源的引用来请求它。它将在后台检索资源，以便在主HTML解析器到达请求的资源时，它们可能已经在运行，或者已经被下载。预加载扫描仪提供的优化减少了阻塞。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<link rel="stylesheet" src="styles.css"/>\n<script src="myscript.js" async><\/script>\n<img src="myimage.jpg" alt="image description"/>\n<script src="anotherscript.js" async><\/script>\n')])])]),s("p",[t._v("在这个例子中，当主线程在解析HTML和CSS时，预加载扫描器将找到脚本和图像，并开始下载它们。为了确保脚本不会阻塞进程，当JavaScript解析和执行顺序不重要时，可以添加async属性或defer属性。")]),t._v(" "),s("p",[s("strong",[t._v("等待获取CSS不会阻塞HTML的解析或者下载，但是它的确阻塞JavaScript，因为JavaScript经常用于查询元素的CSS属性。")])]),t._v(" "),s("p",[s("strong",[t._v("script中defer和async的区别")])]),t._v(" "),s("p",[t._v("​\t"),s("strong",[t._v("defer")]),t._v("，我们可以认为是将外链的js放在了页面底部。js的加载不会阻塞页面的渲染和资源的加载。不过defer会按照原本的js的顺序执行，所以如果前后有依赖关系的js可以放心使用。")]),t._v(" "),s("p",[t._v("​\t"),s("strong",[t._v("async")]),t._v("，这个是html5中新增的属性，它的作用是能够异步的加载和执行脚本，不因为加载脚本而阻塞页面的加载。一旦加载到就会立刻执行在有async的情况下，js一旦下载好了就会执行，所以很有可能不是按照原本的顺序来执行的。如果js前后"),s("strong",[t._v("有依赖性")]),t._v("，用async，就很有可能"),s("strong",[t._v("出错")]),t._v("。")]),t._v(" "),s("p",[t._v("简单的来说，使用这两个属性会有三种可能的情况")]),t._v(" "),s("ol",[s("li",[t._v("如果async为true，那么脚本在下载完成后异步执行。")]),t._v(" "),s("li",[t._v("如果async为false，defer为true，那么脚本会在页面解析完毕之后执行。")]),t._v(" "),s("li",[t._v("如果async和defer都为false，那么脚本会在页面解析中，停止页面解析，立刻下载并且执行。")])]),t._v(" "),s("h2",{attrs:{id:"_7-关闭tcp连接-四次挥手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-关闭tcp连接-四次挥手"}},[t._v("#")]),t._v(" 7.关闭TCP连接——四次挥手")]),t._v(" "),s("p",[t._v("通过四次挥手关闭连接(FIN ACK, ACK, FIN ACK, ACK)。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/2/22/169140a85c0fec37?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("第一次挥手：Client发送一个FIN，用来关闭Client到Server的数据传送，Client进入FIN_WAIT_1状态。(第一次挥手：由浏览器发起的，发送给服务器，我请求报文发送完了，你准备关闭吧)")]),t._v(" "),s("li",[t._v("第二次挥手：Server收到FIN后，发送一个ACK给Client，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号），Server进入CLOSE_WAIT状态。(第二次挥手：由服务器发起的，告诉浏览器，我请求报文接受完了，我准备关闭了，你也准备吧)")]),t._v(" "),s("li",[t._v("第三次挥手：Server发送一个FIN，用来关闭Server到Client的数据传送，Server进入LAST_ACK状态。(第三次挥手：由服务器发起，告诉浏览器，我响应报文发送完了，你准备关闭吧)")]),t._v(" "),s("li",[t._v("第四次挥手：Client收到FIN后，Client进入TIME_WAIT状态，接着发送一个ACK给Server，确认序号为收到序号+1，Server进入CLOSED状态，完成四次挥手。(第四次挥手：由浏览器发起，告诉服务器，我响应报文接受完了，我准备关闭了，你也准备吧)")])])])])}),[],!1,null,null,null);r.default=_.exports}}]);