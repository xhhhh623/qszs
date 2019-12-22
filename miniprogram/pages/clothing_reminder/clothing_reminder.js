// miniprogram/pages/clothing_reminder/clothing_reminder.js
Page({

  /**
   * 页面的初始数据
   */
  //data中的数据用于数据绑定，显示到wxml页面
  data: {
    array: ''
  },

  weather: function () {
    var that = this;
    //调用百度天气的api，获取今天的穿衣提醒
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather?location=北京&output=json&ak=rt6oGc2clZkyh5LM194MqXWfsA7mHlyD',
      method: 'GET',
      success: function (res) {
        that.setData({
          array: res.data.results[0].index[0].des
        })
        console.log('success')
        console.log(res.data.results[0].index[0].des)

      },
      fail: function (res) {
        console.log('fail')
        console.log(res)
      },

    })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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