/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx7f93bf9a4750a279',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c04278315a321bfef4cb13e5d8ef9d11',

  PROVINCE: '北京市',
  CITY: '北京市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ocutv51b5pW_EbeEg3LIlFbLHlDQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'fTXdIVpx3J4uQdFPswDEV0tz0papRnXTgWcmXB8esfM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-14',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '老婆', year: '1996', date: '08-02',
        },
        {
          type: '*生日', name: '老公', year: '1996', date: '07-21',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-07' },     
      ],
      //天气
      weather: [
        // 天气
        { keyword: 'max_temperatyre' }, 
        { keyword: 'min_temperatyre' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ocutv50NtgQj0AFDy_MVUm0e7QO4',
    }
  ],

}

module.exports = USER_CONFIG

