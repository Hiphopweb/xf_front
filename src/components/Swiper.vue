<template>
  <div class="swiper">
    <div class="arrow">
      <img src="/static/dist/src/assets/arrow.png" alt="">
      <!-- <img src="/src/assets/arrow.png" alt=""> -->
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="flex bg-full one" style="background-image: url('/static/dist/src/assets/third.jpg')">
        <div class="center ">
          <p class="textCenter">你的学期账单</p>
          <img src="" alt="">
          <p class="textCenter">请上滑查看</p>
        </div>
      </swiper-slide>

      <swiper-slide class="bg-full" style="background-image: url('/static/dist/src/assets/second.jpg');font-size:18px">
        <div class="slide-sum">
          <p>时光总是偷偷流逝</p>
          <p>打开一卡通账单</p>
          <p>看看这一学期是不是过的不太一样</p>
          <p style="display:inline-block">总共花费</p>
          <span class="cost-num-x" style="font-size: 24px">{{costTotal}}元</span>
        </div>
      </swiper-slide>

      <!-- <swiper-slide class="bg-full" style="background-image: url('/src/assets/third.jpg');font-size:18px"> -->
      <swiper-slide class="bg-full" style="background-image: url('/static/dist/src/assets/third.jpg');font-size:18px">
        <div class="slide-detail">
          <p>{{restName}}得到你的青睐</p>
          <p style="display:inline-block">总共消费</p>
          <span class="cost-num-x" style="font-size: 24px">{{RestCost}}元</span>
          <p class="slide-tips" style="font-size: 16px">{{randomTipsOne}}</p>
        </div>

        <div class="talk-img-x">
          <img src="/static/dist/src/assets/talk.png" alt="">
          <p>你去征服世界</p>
          <p>我只想征服你的胃和心</p>
        </div>
        <!-- <div class="slide-bubble">
        </div> -->

      </swiper-slide>

      <swiper-slide class="bg-full" style="background-image: url('/static/dist/src/assets/third.jpg');font-size:18px">
        <div class="slide-detail">
          <p style="display:inline">你为{{mostExpenseName}}花费了</p>
          <span class="cost-num-x" style="font-size: 24px">{{mostCost}}元</span>
          <p>唯美食与爱不可辜负</p>
          <p>{{mostTimesName}}是你的最爱</p>
          <p style="display:inline-block">总共光顾</p>
          <span class="cost-num-x" style="font-size: 24px">{{mostTimes}}次</span>
        </div>

        <div class="slide-tips-y" style="font-size: 16px">
          <p>{{randomTipsSec}}</p>
          <p>{{randomTipsThi}}</p>
        </div>

      </swiper-slide>

      <swiper-slide class=" bg-full" style="background-image: url('/static/dist/src/assets/fourth.jpg');font-size:18px">
        <div class="slide-detail">
          <div>
            <p style="display:inline-block">光顾{{shopMostName}}</p>
            <span class="cost-num-x" style="font-size: 24px">{{shopMostTime}}次</span>
          </div>
          <div>
            <p style="display:inline-block">总共消费</p>
            <span class="cost-num-x" style="font-size: 24px">{{shopMostCost}}元</span>
          </div>
          <div>
            <p style="display:inline-block">奶茶店总共消费</p>
            <span class="cost-num-x" style="font-size: 24px">{{milkCost}}元</span>
          </div>
          <div>
            <p style="display:inline-block">总共光顾</p>
            <span class="cost-num-x" style="font-size: 24px">{{milkCostTimes}}次</span>
          </div>
          <div class="talk-img">
            <img src="/static/dist/src/assets/talk.png" alt="">
            <p>拿了我的东西</p>
            <p>以后就是我的人了</p>
          </div>
        </div>

      </swiper-slide>

      <swiper-slide class="flex bg-full" style="background-image: url('/static/dist/src/assets/first.jpg');">
        <div class="center" style="font-size:18px">
          <p class="textCenter">一卡通账单陪你度过了一学期的岁月</p>
          <p class="textCenter">
            <a style="color:#0000FF;text-decoration: none;" href="#">点击右上角分享</a>我的一卡通账单</p>
          <p class="textCenter">这学期还是你来买单我记录</p>
        </div>

      </swiper-slide>

      <swiper-slide class="flex bg-full" style="background-image: url('/static/dist/src/assets/first.jpg')">
        <!-- <swiper-slide class="flex bg-full" style="background-image: url('/src/assets/first.jpg')"> -->
        <div class="qr-code" style="font-size:18px">
          <p class="textCenter">扫描下方二维码生成你的学期账单</p>
          <img class="qr-code-img" src="/static/dist/src/assets/qrcode.jpg" alt="公众号二维码">
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
// import '..//static/dist/src/assets/js/rem.js'

const tipsSentence = ['美食，是可以吃下去的幸福回忆',
  '谁不眷恋一茶一饭的光辉，一口又一口的美食~',
  '胃觉得充实，心也感觉满满的',
  '既然生活就要有滋有味，那么美食就不可辜负',
  '想在有酒有肉的日子，款待没心没肺的自己']

export default {
  data() {
    return {
      costTotal: 0,
      restName: '',
      RestCost: 0,
      mostExpenseName: '',
      mostCost: 0,
      mostTimesName: '',
      mostTimes: 0,
      randomTipsOne: '',
      randomTipsSec: '',
      randomTipsThi: '',
      milkCost: 0,
      milkCostTimes: 0,
      shopMostName: '',
      shopMostCost: 0,
      shopMostTime: 0,
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
    },

  },
  methods: {
    getInit() {
      let self = this;
      let restCost = {};
      let begindate = dayjs().format('2018-03-01');
      let enddate = dayjs().format('2018-08-30')
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
          let data = res.data;
          console.log(res.data);

          //总消费
          this.costTotal = Number((data.cost).toFixed(2));

          let restCost = data.dirlist[0];

          let restData = [];
          //比较出花费最多的餐厅
          Object.keys(restCost).forEach((key) => {
            restData.push(restCost[key]);
            let arr = restData.sort((a, b) => b - a);
            this.RestCost = Number((arr[0]).toFixed(1));
            if (arr[0] == restCost[key]) {
              this.restName = key;
              switch (key) {
                case 'dirx':
                  this.restName = '旭日苑餐厅';
                  break;
                case 'dird':
                  this.restName = '东升苑餐厅';
                  break;
                case 'dirm':
                  this.restName = '美广餐厅';
                  break;
                case 'dirs':
                  this.restName = '商店';
                  break;
                default:
                  this.restName = '未统计'
              }
            }
          });

          let topList = [];
          topList = data.toplist;
          let costArr = [];
          let timesArr = [];
          let shopArr = [];
          let milkArr = [];
          let shopObj = {
            "综合经营部（商店）": 0,
            "勤工助学商店": 0,
            "二楼商店": 0,
            "旭日院一楼商店": 0,
            "大学超市": 0,
            "商店": 0,
            "东区超市": 0,
            "东区生活服务中心": 0,
          }
          // console.log("123");

          topList.forEach((item, index) => {
            // console.log("1",item);
            if ((item.shopname != '商店') && (item.shopname != '东区超市') && (item.shopname != '一楼商店') && (item.shopname != '综合经营部（商店）') && (item.shopname != '勤工助学商店') && (item.shopname != '大学超市') && (item.shopname != '二楼商店')) {
              // 花费最多的档口和消费次数最多的地方
              // console.log("过滤",item);
              let sum = Number((item.sum).toFixed(2))
              costArr.push(sum);
              console.log(costArr);
              let compareArr = costArr.sort((a, b) => b - a)
              if (compareArr[0] == Number((item.sum).toFixed(2))) {
                this.mostCost = compareArr[0];
                this.mostExpenseName = item.shopname
              }
              //统计次数最多的消费地点
              timesArr.push(item.time);
              let cptimeArr = timesArr.sort((a, b) => b - a)
              if (cptimeArr[0] == item.time) {
                this.mostTimesName = item.shopname;
                this.mostTimes = cptimeArr[0];
              }
            }

            //统计次数最多的消费地点
            // if (item.shopname != '商店' && item.shopname != '东区超市' && item.shopname != '一楼商店' && item.shopname != '综合经营部（商店）' && item.shopname != '勤工助学商店' && item.shopname != '大学超市' && item.shopname != '二楼商店') {

            // }
            // 统计奶茶店的消费金额和次数
            if (item.shopname == "咪一咻" || item.shopname == "蜜雪冰城") {
              this.milkCost += Number((item.sum).toFixed(2))
              this.milkCostTimes += item.time
            }
            // 比较用户在哪家商店花销最多
            Object.keys(shopObj).forEach((key) => {
              if ((item.shopname != '旭日苑一楼商店') && (item.shopname != '二楼商店')) {
                if (key == item.shopname) {
                  let sum = Number((item.sum).toFixed(2))
                  shopObj[key] = {
                    time: item.time,
                    cost: sum
                  }
                }
                // console.log("各个商店消费", shopObj);
                shopArr.push(shopObj[key].time);
                let arr = shopArr.sort((a, b) => b - a)
                if (arr[0] == shopObj[key].time) {
                  if (key == '商店') {
                    this.shopMostName = '东区商店';
                  } else {
                    this.shopMostName = key;
                  }
                  this.shopMostCost = shopObj[key].cost;
                  this.shopMostTime = arr[0];
                }
              }
            })

          })

        })
    },
    randomTips() {
      //随机展示提示语
      let index = Math.floor(Math.random() * tipsSentence.length);
      //当index等于数组最后一个索引时
      if (index == tipsSentence.length - 1) {
        index--;
      } else if (index == 0) {
        index++;
      }
      this.randomTipsOne = tipsSentence[index];
      this.randomTipsSec = tipsSentence[index + 1];
      this.randomTipsThi = tipsSentence[index - 1];
    }
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
    this.getInit();
    this.randomTips();
  }
}
</script>
<style>
.talk-img {
    position: relative;
    left: 10%;
    padding-top: 35px;
}
.talk-img img {
    height: 195px;
    width: 240px;
    position: absolute;
    z-index: 1;
}
.talk-img p {
    font-size: 16px;
    position: relative;
    left: 10%;
    top: 26px;
}
.talk-img-x {
    position: relative;
    padding-top: 140px;
    padding-left: 10px;
}
.talk-img-x img {
    height: 195px;
    width: 240px;
    position: absolute;
    z-index: 1;
}
.talk-img-x p {
    font-size: 16px;
    position: relative;
    left: 10%;
    top: 26px;
}
.qr-code-img {
    width: 200px;
    height: 200px;
    margin-top: 20px;
}
.arrow {
    display: block;
    width: 100%;
    position: fixed;
    z-index: 9999;
    bottom: 5%;
    animation: move 1.5s infinite;
    text-align: center;
}
@keyframes move {
    from {
        bottom: 5%;
    }
    to {
        bottom: 10%;
    }
}
@-webkit-keyframes move /* Safari and Chrome */ {
    from {
        bottom: 5%;
    }
    to {
        bottom: 10%;
    }
}
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
/* .ovals {
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
} */
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