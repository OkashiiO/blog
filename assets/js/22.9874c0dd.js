(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{363:function(v,_,t){"use strict";t.r(_);var a=t(43),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"前端性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化"}},[v._v("#")]),v._v(" 前端性能优化")]),v._v(" "),t("p",[v._v("不管是应付前端面试还是改进产品体验,性能优化都是躲不开的话题。这里我们就简单聊一聊\n性能优化。")]),v._v(" "),t("h2",{attrs:{id:"传输快vs体验快"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传输快vs体验快"}},[v._v("#")]),v._v(" 传输快Vs体验快")]),v._v(" "),t("p",[v._v('优化的目的是让用户有"快” 的感受,那如何让用户感受到快呢?\n1.加载速度真的很快，驴打开输入网址按下回车立即看到了页面\n2.加载速度并没有变快,但用户感觉你的网站很快')]),v._v(" "),t("h2",{attrs:{id:"传输快"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传输快"}},[v._v("#")]),v._v(" 传输快")]),v._v(" "),t("p",[v._v("所谓的真快就是网站资源以最快的速度到达用户浏览器,那如何去做呢?我们先粗略定一些原则")]),v._v(" "),t("ul",[t("li",[v._v("传输的内容体积要小")]),v._v(" "),t("li",[v._v("传输的内容数量要少")]),v._v(" "),t("li",[v._v("网速要足够快")]),v._v(" "),t("li",[v._v("服务器响应要及时")]),v._v(" "),t("li",[v._v("能重复利用的资源要利用好")]),v._v(" "),t("li",[v._v("暂时不需要的资源先不要")]),v._v(" "),t("li",[v._v("将来需要的资源抽空要")])]),v._v(" "),t("p",[v._v("下面就能顺藤摸瓜,做个细化")]),v._v(" "),t("h3",{attrs:{id:"传输的内容体积要小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传输的内容体积要小"}},[v._v("#")]),v._v(" 传输的内容体积要小")]),v._v(" "),t("ul",[t("li",[v._v("图要压缩")]),v._v(" "),t("li",[v._v("图片根据支持情况选择体积更小的格式(如webp)")]),v._v(" "),t("li",[v._v("css、js内容压缩")]),v._v(" "),t("li",[v._v("服务端开启Gzip,在传输数据之前再次压缩")])]),v._v(" "),t("h3",{attrs:{id:"传输的内容数量要少"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传输的内容数量要少"}},[v._v("#")]),v._v(" 传输的内容数量要少")]),v._v(" "),t("ul",[t("li",[v._v("图片图标合并(CSs sprite)、svg 图标合并(svg sprite)")]),v._v(" "),t("li",[v._v("css、js文件打包合并")])]),v._v(" "),t("h3",{attrs:{id:"网速要足够快"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网速要足够快"}},[v._v("#")]),v._v(" 网速要足够快")]),v._v(" "),t("ul",[t("li",[v._v("服务器出口带宽要够")]),v._v(" "),t("li",[v._v("考虑到南北差异、运营商差异,在不同地区部署服务器")]),v._v(" "),t("li",[v._v("静态资源放CDN")])]),v._v(" "),t("h3",{attrs:{id:"服务器响应要及时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器响应要及时"}},[v._v("#")]),v._v(" 服务器响应要及时")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("接口响应速度要快(数据库优化、查询优化、算法优化)")])]),v._v(" "),t("li",[t("p",[v._v("cpu、内存、硬盘读写不要成为瓶颈;多加几台机器")])]),v._v(" "),t("li",[t("p",[v._v("重要页面(首页)静态化。服务端提前渲染后首页生成静态页面,用户访问首页直接返回静态页面，不需要像其他页面那样还需加载css、js再获取数据渲染展示")])])]),v._v(" "),t("h3",{attrs:{id:"能重复利用的资源要利用好"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#能重复利用的资源要利用好"}},[v._v("#")]),v._v(" 能重复利用的资源要利用好")]),v._v(" "),t("ul",[t("li",[v._v("服务器设置合适的静态资源缓存时间")]),v._v(" "),t("li",[v._v("前端文件打包时做合理的分块，让公共的资源缓存后能被多个页面复用")])]),v._v(" "),t("h3",{attrs:{id:"暂时不需要的资源先不要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#暂时不需要的资源先不要"}},[v._v("#")]),v._v(" 暂时不需要的资源先不要")]),v._v(" "),t("ul",[t("li",[v._v("图片懒加载")]),v._v(" "),t("li",[v._v("功能、模块、组件按需加载")])]),v._v(" "),t("h3",{attrs:{id:"将来需要的资源抽空先拿到"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将来需要的资源抽空先拿到"}},[v._v("#")]),v._v(" 将来需要的资源抽空先拿到")]),v._v(" "),t("ul",[t("li",[v._v("DNS预解析"),t("code",[v._v('<link rel= "dns-prefetch" href= "//baidu.com">')])]),v._v(" "),t("li",[v._v("预连接"),t("code",[v._v('<link rel="preconnect" href-=//baidu.com">')])]),v._v(" "),t("li",[v._v("预获取"),t("code",[v._v('<link rel= "prefetch" href="image.png">')])]),v._v(" "),t("li",[v._v("预渲染"),t("code",[v._v('<link rel= "prerender" href= //baidu.com" >')])])]),v._v(" "),t("h2",{attrs:{id:"体验快"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#体验快"}},[v._v("#")]),v._v(" 体验快")]),v._v(" "),t("p",[v._v('所谓的体验快就是让用户觉得网站的交互是"流畅的”、”舒适的” 。比如')]),v._v(" "),t("h3",{attrs:{id:"滚动页面不要有迟滞感"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#滚动页面不要有迟滞感"}},[v._v("#")]),v._v(" 滚动页面不要有迟滞感")]),v._v(" "),t("ul",[t("li",[v._v("对于短时连续大量触发的操作要做节流")])]),v._v(" "),t("h3",{attrs:{id:"一些常见操作不要感觉拖泥带水"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些常见操作不要感觉拖泥带水"}},[v._v("#")]),v._v(" 一些常见操作不要感觉拖泥带水")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("DOM的操作不要过于频繁（使用事件委托等）")])]),v._v(" "),t("li",[t("p",[v._v("不要出现内存泄露")])]),v._v(" "),t("li",[t("p",[v._v("优化复杂运算")])])]),v._v(" "),t("h3",{attrs:{id:"动画不要卡顿"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动画不要卡顿"}},[v._v("#")]),v._v(" 动画不要卡顿")]),v._v(" "),t("ul",[t("li",[v._v("多用CSS动画，少用JS动画")]),v._v(" "),t("li",[v._v("开启硬件加速")]),v._v(" "),t("li",[v._v("不要用setTimeout/setInterval去模拟动画")]),v._v(" "),t("li",[v._v("动画或者过渡的执行时间不要太久")])]),v._v(" "),t("h2",{attrs:{id:"性能优化的建议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能优化的建议"}},[v._v("#")]),v._v(" 性能优化的建议")]),v._v(" "),t("p",[v._v('​\t臆想的优化不是优化，无明显成效的优化不是优化。浏览器的性能E经足够快,不要因为"过\n渡优化”牺牲代码的可读性。\n​\t先做简单见效快的优化,再做复见效慢的优化。一张未压缩的大图片 可能抵消辛辛苦苦做的\n全部其他技术优化')])])}),[],!1,null,null,null);_.default=s.exports}}]);