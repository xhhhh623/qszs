//需要用到全局变量
// miniprogram/pages/a/a.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  thing: function (e) {
    app.globalData.thing = e.detail.value

  },
  day: function (e) {
    app.globalData.day = Number(e.detail.value)
  },
  hour: function (e) {
    app.globalData.hour = Number(e.detail.value)
  },
  
  sets: function () {
    var app = getApp()
   
    wx.requestSubscribeMessage({
      tmplIds: ['haKQ0XVV3M6CxIMPeBQzG8vP6fEjCDz48ZDd8IUP3C4'], 
      success(res) {
        if (res.errMsg =='requestSubscribeMessage:ok')
        {
          console.log('ok')
          wx.cloud.callFunction({
            name: 'subscribe',
            data:{
              data:{
                thing1:{value:app.globalData.thing},
                thing5:{value:"重要的事情我们也只重复一遍"}
                   },
                   day:app.globalData.day,
                   hour:app.globalData.hour,
              templateId: 'haKQ0XVV3M6CxIMPeBQzG8vP6fEjCDz48ZDd8IUP3C4'
              }
            
          }).then(() => {
            wx.showToast({
              title: '订阅成功',
              icon: 'success',
              duration: 2000,
            });
          })
            .catch(() => {
              wx.showToast({
                title: '订阅失败',
                icon: 'success',
                duration: 2000,
              });
            });
        }
        
      }
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