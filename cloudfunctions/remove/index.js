const cloud = require('wx-server-sdk')
cloud.init({
  env: 'text-2n2in'
})


const db = cloud.database()

exports.main = async (event, context) => {
  class util {
    static formatTime(date) {

      let day = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();
      return { day, hour, minute }
    }
  }
  var day = util.formatTime(new Date()).day;
  //构建查询条件   当done为true时删除字段

  try {
    return await db.collection('memorandum').where({
      done:true
    }).remove()
  } catch (e) {
    console.error(e)
  }
}