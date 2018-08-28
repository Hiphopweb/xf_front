<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="flex bg-full one" style="background-image: url('/src/assets/first.jpg')">
        <div class="center ">
          <p class="textCenter">你的学期账单</p>
          <p class="textCenter">请上滑查看</p>
        </div>
      </swiper-slide>

      <swiper-slide class="bg-full" style="background-image: url('/src/assets/second.jpg');font-size:18px">
        <div class="slide-sum">
          <p>时光总是偷偷流逝</p>
          <p>打开一卡通账单</p>
          <p>看看这一学期是不是过的不太一样</p>
          <p style="display:inline-block">总共花费</p>
          <span class="cost-num-x" style="font-size: 24px">2500元</span>
        </div>
      </swiper-slide>

      <swiper-slide class="bg-full" style="background-image: url('/src/assets/third.jpg');font-size:18px">
        <div class="slide-detail">
          <p>{{"旭日苑"}}餐厅得到你的青睐</p>
          <p style="display:inline-block">总共消费</p>
          <span class="cost-num-x" style="font-size: 24px">{{1589}}元</span>
          <p class="slide-tips" style="font-size: 16px">{{"解衣宽带终不恼，吃完记得，擦擦嘴"}}</p>
        </div>

        <div class="ovals">
          <p>你去征服世界</p>
          <p>我只想征服你的胃和心</p>
        </div>
        <!-- <div class="slide-bubble">
        </div> -->

      </swiper-slide>

      <swiper-slide class="bg-full" style="background-image: url('/src/assets/third.jpg');font-size:18px">
        <div class="slide-detail">
          <p style="display:inline">你为{{"黄焖鸡米饭"}}花费了</p>
          <span class="cost-num-x" style="font-size: 24px">{{589}}元</span>
          <p>唯美食与爱不可辜负</p>
          <p>{{"木桶饭"}}是你的最爱</p>
          <p style="display:inline-block">总共光顾</p>
          <span class="cost-num-x" style="font-size: 24px">{{22}}次</span>
        </div>

        <div class="slide-tips-y" style="font-size: 16px">
          <p>{{"发际线越来越高，天花板越来越低"}}</p>
          <p>{{"只要吃一口美食，就像回到了十八岁"}}</p>
        </div>

      </swiper-slide>

      <swiper-slide class=" bg-full" style="background-image: url('/src/assets/fourth.jpg');font-size:18px">
        <div class="slide-detail">
          <div>
            <p style="display:inline-block">光顾{{"图书馆二楼超市"}}</p>
            <span class="cost-num-x" style="font-size: 24px">{{20}}次</span>
          </div>
          <div>
            <p style="display:inline-block">{{"总共消费"}}</p>
            <span class="cost-num-x" style="font-size: 24px">{{388}}元</span>
          </div>
          <div>
            <p style="display:inline-block">{{"咪一咻"}}总共消费</p>
            <span class="cost-num-x" style="font-size: 24px">{{125}}元</span>
          </div>
          <div>
            <p style="display:inline-block">总共光顾</p>
            <span class="cost-num-x" style="font-size: 24px">{{23}}次</span>
          </div>
        </div>

      </swiper-slide>

      <swiper-slide class="flex bg-full" style="background-image: url('/src/assets/first.jpg');">
        <div class="center" style="font-size:18px">
          <p class="textCenter">一卡通账单陪你度过了一学期的岁月</p>
          <p class="textCenter">这学期还是你来买单我记录</p>
          <p class="textCenter">
            <a style="color:#0000FF;text-decoration: none;" href="#">点击分享</a>我的一卡通账单</p>
        </div>

      </swiper-slide>

      <swiper-slide class="flex bg-full" style="background-image: url('/src/assets/first.jpg')">
        <div class="qr-code" style="font-size:18px">
          <p class="textCenter">扫描下方二维码生成你的学期账单</p>

        </div>
      </swiper-slide>

      <!-- Optional controls -->
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>
<script>
import axios from 'axios'
import dayjs from 'dayjs'
// import '../../assets/js/rem.js'


export default {
  data() {
    return {
      costTotal: 5800,
      costRes: 66666,
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        observer: true,
        observeParents: true,
        autoHeight: true,
        direction: 'vertical',
        fade: 'true',
        autoplay: false,
        // speed: 1000,
        height: window.innerHeight,
        width: window.innerWidth,

      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    getInit() {
      let self = this;
      let begindate = dayjs().format('2018-03-04');
      let enddate = dayjs().format('2018-07-12')
      axios.get('/api/getNewData', {
        params: {
          begindate,
          enddate,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      })
        .then((res) => {
          console.log(res);
        })
    }
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
    this.getInit()
  }
}
</script>
<style>
.slide-bubble {
    width: 0;
    height: 0;
    border-width: 50px;
    border-style: solid;
    border-color: #ffeb3b transparent transparent;
    position: absolute;
    bottom: 150px;
    left: 80px;
}
.qr-code {
    width: 100%;
    font-size: 18px;
    position: relative;
    color: black;
    top: 30%;
    font-weight: bold;
}
.ovals {
    position: relative;
    left: 10%;
    top: 20%;
    width: 55%;
    height: 14%;
    border-width: 10px;
    border-style: solid;
    border-color: #ffeb3b;
    border-radius: 15px;
}
.ovals:before,
.ovals:after {
    content: '';
    display: block;
    border-width: 19px;
    position: absolute;
    bottom: -40px;
    left: 100px;
    border-style: solid dashed dashed;
    border-color: #ffeb3b transparent transparent;
    font-size: 0;
    line-height: 0;
}
.ovals:after {
    bottom: -33px;
    border-color: #fff transparent transparent;
}
.cost-num-x {
    display: inline-block;
    font-size: 24px;
    color: #0000ff;
}
.slide-sum {
    margin-left: 28px;
    margin-top: 182px;
}
.slide-detail {
    margin-left: 28px;
    margin-top: 182px;
}
.slide-tips {
    margin-top: 0.5rem;
    font-weight: bold;
    color: #000000cc;
}
.slide-tips-y {
    position: relative;
    top: 15%;
    left: 10%;
    font-weight: bold;
    color: #000000cc;
}
.flex {
    display: flex;
    text-align: center;
}
.swiper_bottom {
    position: absolute;
    bottom: 1rem;
    text-align: center;
    width: 100%;
    font-size: 0.9rem;
}
.center {
    /* background: aqua; */
    font-size: 24px;
    text-align: center;
    margin: auto;
    font-weight: bold;
}
.textCenter {
    text-align: center;
}

.fontSize {
    width: 100%;
    position: absolute;
    text-align: center;
    top: 25%;
    font-size: 1.5rem;
}
.firImg {
    /* background-size: cover; */
}
.bg-full {
    background-size: cover !important;
    -webkit-background-size: cover !important;
    -o-background-size: cover !important;
    background-position: center 0;
    background-repeat: no-repeat !important;
    height: auto;
}
p {
    padding-top: 18px;
}
</style>