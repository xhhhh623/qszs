// miniprogram/pages/function/function.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //备忘录功能，点击跳转备忘录功能页面
  memorandum: function () {
    
    wx.navigateTo({
      url: '/pages/memorandum_a/memorandum_a',
    })
  },
  //点击跳转到查询穿衣提醒功能
  clothing_reminder:function()
  {
wx.navigateTo({
  url: '/pages/clothing_reminder/clothing_reminder',
})
  },
  alarmset:function()
  {
    wx.navigateTo({
      url: '/pages/alarmset/alarmset',
    })
  },

  //空调遥控器功能，点击跳转空调遥控器页面
  ktset: function () {
    wx.navigateTo({
      url: '/pages/ktset/ktset',
    })
  },
  //夜灯功能  点击跳转
  ledswitch:function()
  {
    wx.navigateTo({
      url: '/pages/led/led',
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