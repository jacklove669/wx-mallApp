// page/component/new-pages/user/user.js
const app = getApp()
Page({
  data:{
    thumb:'',
    nickname:'',
    orders:[],
    hasAddress:false,
    address:{},
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    number: ['20192010390239203', '320930239023323', '3239203902323', '43094034903434', '320rier-023-323', '32090548', '903943894934']
  },
  onLoad(){
    var self = this;
    /**
     * 获取用户信息
     */
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    /**
     * 发起请求获取订单列表信息
     */
    if (wx.getStorageSync('products')) {
      var products = JSON.parse(wx.getStorageSync('products'))
      this.setData({
        orders: products
      })
    }
    // wx.request({
    //   url: 'http://rap2api.taobao.org/app/mock/238326/classification',
    //   header: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
    //   method: 'GET',
    //   success(res){
    //     self.setData({
    //       orders: res.data
    //     })
    //     console.log(self.data.orders)
    //   }
    // })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShow(){
    var self = this;
    /**
     * 获取本地缓存 地址信息
     */
    wx.getStorage({
      key: 'address',
      success: function(res){
        self.setData({
          hasAddress: true,
          address: res.data
        })
      }
    })
  },
  /**
   * 发起支付请求
   */
  payOrders(){
    wx.requestPayment({
      timeStamp: 'String1',
      nonceStr: 'String2',
      package: 'String3',
      signType: 'MD5',
      paySign: 'String4',
      success: function(res){
        console.log(res)
      },
      fail: function(res) {
        wx.showModal({
          title:'支付提示',
          content:'暂不支持此功能',
          showCancel: false
        })
      }
    })
  }
})