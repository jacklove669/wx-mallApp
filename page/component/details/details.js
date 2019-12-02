// page/component/details/details.js
Page({
  data:{
    goods: {},
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },
  onLoad: function(options){
    this.setData({
      goods: {
        id: options.id,
        image: options.img,
        title: options.title,
        price: options.price,
        num: options.num,
        stock: '有货',
        detail: options.detail,
        parameter: options.parameter,
        service: options.service
      }
    })
    this.setData({
      num: options.num - 0
    })
  },
  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num : num
    })
  },
 subCount() {
    let num = this.data.num;
    if(num>0){
      num--;
    }
    this.setData({
      num: num
    })
  },

  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;

    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true,
          totalNum: num + total
        })
      }, 200)
    }, 300)

    var products = []
    if (wx.getStorageSync('products')) {
      products = JSON.parse(wx.getStorageSync('products'))
    }
    var product = {
      id: this.data.goods.id,
      title: this.data.goods.title,
      image: this.data.goods.image,
      num: this.data.num,
      price: this.data.goods.price,
      detail: this.data.goods.detail,
      parameter: this.data.goods.parameter,
      service: this.data.goods.service,
      selected: true
    }
    if (products.find(v => v.id == product.id)) {
      var index = products.findIndex(v => v.id == product.id)
      products[index] = product
    } else {
      products.push(product)
    }
    wx.setStorageSync('products', JSON.stringify(products));
  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})