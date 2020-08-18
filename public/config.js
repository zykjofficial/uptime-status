// 配置
window.Config = {

  // 站点名
  SiteName: 'Flexiston 的网站状态',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm785780499-7f47f7a1ada2f15a77b799bf',
    'm785780472-7e4912db04850ad43cc0eeb9',
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
      text: '个人主页',
      url: 'https://zykjofficial.top/'
    },
    {
      text: '博客',
      url: 'https://blog.zykjofficial.top/'
    }
  ]
};
