// page/component/list/list.js
Page({
  data:{
    products: [{
      id: 1,
      img: '/image/s4.png',
      title: '瓜子 100g',
      num: 1,
      price: 10,
      detail: '香甜可口的瓜子，真好吃',
      parameter: '100g/个',
      service: '七天内支持退货'
    }, {
        id: 2,
        img: '/image/s5.png',
        title: '芹菜 500g',
        num: 1,
        price: 20,
        num: 1,
        detail: '纯天然无污染的，大芹菜',
        parameter: '200g/个',
        service: '十五天内支持退货'
      }, {
        id: 3,
        img: '/image/s6.png',
        title: '素米 1kg',
        num: 1,
        price: 30,
        detail: '又香又甜的麦米',
        parameter: '300g/个',
        service: '七天内支持退货'
      }, {
        id: 3,
        img: '/image/s6.png',
        title: '素米 1kg',
        num: 1,
        price: 30,
        detail: '又香又甜的麦米',
        parameter: '300g/个',
        service: '七天内支持退货'
      }]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})