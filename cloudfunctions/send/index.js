// 云函数入口文件
const cloud = require('wx-server-sdk')





cloud.init({ env: 'text-2n2in' }); const db = cloud.database();

// 云函数入口函数
exports.main = async (event, context) => {
  
  try {
    //定义一个日期对象
   var mydate=new Date()
   //由于微信云端获取时间   与   北京时间相差八小时   if语句下为换算的程序
   var hour=mydate.getHours()+8
   var day=mydate.getDate()
   if(hour>23)
   {
     hour=hour-24;
     day=day+1;
   }
   //构建查询条件  获取需要发送的订阅消息  获取到的是新集合的引用
    const message = await db
      .collection('memorandum')
      .where({
        done: false,
        day:day,
        hour:hour
        
      })
      .get();
      //给用户发送订阅消息  并发送后将  done字段置为true  以便后续删除使逻辑完整
    const sendPromises = message.data.map(async message => {

      try {

        await cloud.openapi.subscribeMessage.send({
          touser: message._openid,
          data: message.data,
          templateId: message.templateId,
        });
        return db
          .collection('memorandum')
          .doc(message._id)
          .update({
            data: {
              done: true,
            },
          });
      } catch (e) {
        return e;
      }
    });

    return Promise.all(sendPromises);
  } catch (err) {
    console.log(err);
    return err;
  }
}