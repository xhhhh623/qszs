// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({env:'text-2n2in'})
const db=cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    //获取用户openid
    const {OPENID} = cloud.getWXContext()
    //构建查询条件  如果得到了新的集合  说明已经设置过该订阅，不再设置  避免重复
    let message = await db
      .collection('memorandum')
      .where({
        day:event.day,
        _openid: OPENID,
        hour:event.hour,
      })
      .get();

    if (message.data.length) {
      return message;
    }
//如果得到新的集合为空  则添加新的字段  作为订阅消息
    const result = await db.collection('memorandum').add({
      data: {
        _openid:OPENID,
        templateId: event.templateId,
        data:event.data,
        day: event.day,
        hour: event.hour,
        done: false, // 消息发送状态设置为 false
      },
    });
    return result;}catch(err){
console.log(err)
return err
    }


}