module.exports = {
    base: '/blog/',         //站点根路径
    title: '李嘉诚的博客',  //网站标题
    dest: './dist',


    themeConfig: {
        repo: 'https://github.com/136917909/blog',
        //自定义仓库链接文字
        reppLabel: 'My GitHub',
  
        //导航栏
        nav: [
            { text: 'Home',link:'/' },
            { text: 'FirstBlog', link:'/blog/HTML.md'}
        ],
        sidebar: [
            ['/','首页'],
            ['blog/HTML.md','HTML'],
            ['blog/CSS.md','CSS']
        ]
      }
}