module.exports = {
    base: '/blog/',
    title: 'Hello VuePress',
    description: 'Just playing around'
}

module.exports = {
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