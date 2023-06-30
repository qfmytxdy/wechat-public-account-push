/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxbad919fb241e98d1',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e148abfb19a3eecf44dcb169a6991e47',

  PROVINCE: '江苏',
  CITY: '苏州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '凤梨罐罐',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ouqxS6aLJaEMC5G6R9lRbsJAA5_8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'pJycSUFbeiJw42_F5ed0YygAw0lPLND43NFETsuLAkE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '3-14',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '凤梨罐罐', year: '2002', date: '02-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '凤梨罐罐', year: '2002', date: '03-14',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '05-16',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'yVxgKpMA7ao1MA-GYRTJPJ95T4papLjI07qbH75SNIE',

  CALLBACK_USERS: [
    {
      name: 'qfmy',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ouqxS6QkCRucTROEDrcH8Fvz0hu4',
    }
  ],

}

module.exports = USER_CONFIG

