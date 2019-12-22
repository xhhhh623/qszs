Page({
  
  data: {
    v1: '',
    v2: '',
    v3: '',
    v4: '',
    v5: '',
  },
  //问题一的答案输入，下面相同
  right1: function (e) {
    this.data.v1 = e.detail.value;
  },
  right2: function (e) {
    this.setData({
      v2: e.detail.value
    })

  },
  right3: function (e) {
    this.setData({
      v3: e.detail.value
    })

  },
  right4: function (e) {
    this.setData({
      v4: e.detail.value
    })
  },
  right5: function (e) {
    this.setData({
      v5: e.detail.value
    })
  },
  //确认答案的函数，当答案都对时发送数据到onenet用于关闭闹钟
  send: function () {
    if (this.data.v1 == '10') {
      wx.request({
        url: 'http://api.heclouds.com/devices/563610788/datapoints',
        method: 'POST',
        header: {
          'content-type': 'application/json',
          'api-key': 'hImO60NaKFwUUWYvy2wIUpdBcyY=',
        },
        data: {
          "datastreams": [{
            "id": "number1",
            "datapoints": [{
              "value": "4"
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
        },

      })
    }
  }


})



