// 配置
window.Config = {

  // 站点名
  SiteName: 'Flexiston 的网站状态',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm785779108-9b23975e428afe17fd83ec42',
    'm785780051-3f993672ec1607542cb3f386',
    'm785780048-b5bce3098d41a8ac7acb2e65'
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Home Page',
      url: 'https://i.flexiston.com/'
    },
    {
      text: 'Blog',
      url: 'https://flexiston.com/'
    }
  ]
};
