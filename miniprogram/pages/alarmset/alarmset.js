//定义一个类，用于获取当前时间，返回值经过计算
class util {
  static formatTime(date) {
    let hour = date.getHours();
    let minute = date.getMinutes();
    if (hour >= 12)
      return (24 - hour) * 60 - minute;
    else
      return -1 * (hour * 60 + minute);

  }
}
Page({

//需要的数据
  data: {
    currentTime: '',
    hour: '0',
    min: '0',
    delay: ''

  },
  //设置闹钟的“时”
  set_the_hour: function (e) {
    this.data.hour = e.detail.value;
  },
  //设置闹钟的“分”
  set_the_min: function (e) {
    this.data.min = e.detail.value;
  },
  //确认设置完成，发送数据到onenet
  set_is_ok: function () {

    this.data.delay = (this.data.hour*60+this.data.min)*60+this.data.currentTime*60;
   
    wx.request({
      url: 'https://api.heclouds.com/devices/563610788/datapoints',
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'api-key': 'hImO60NaKFwUUWYvy2wIUpdBcyY=',
      },
      data: {
        "datastreams": [{
          "id": "number1",
          "datapoints": [{
            "value":this.data.delay
          }]
        }]
      },


      success: function (res) {
        console.log('success')
        console.log(res)

      },
      fail: function (res) {
        console.log('fail')
        console.log(res)
      }

    })

  },





  /**
   * 生命周期函数--监听页面加载
   */
  //页面加载时获取当前时间
  onLoad: function (options) {
    var currentTime = util.formatTime(new Date());
    this.setData({
      currentTime: ''
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})