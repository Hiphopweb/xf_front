<template>
    <div class="item-choose bg-full" style="background-image: url('/static/dist/src/assets/third.jpg');height: 100%;">
        <div>
            <el-row>
                <el-button type="primary" style="font-size: 20px;" plain @click="skip('recent')">查看消费账单
                </el-button> <br>
                <el-button type="success" style="font-size: 20px;margin-top: 30px;" plain @click="skip('sumup')">学期账单总结</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {


    data() {
        return {
        }
    },


    methods: {
        skip(value) {
            if (value == 'recent') {
                this.$router.push('/index')
            } else {
                this.$router.push('/swiper')
            }
        }
    },

}
</script>
<style lang="scss">
.item-choose {
    
    display: flex;
    justify-content: center;
    align-items: center;
}
.bg-full {
    background-size: cover !important;
    -webkit-background-size: cover !important;
    -o-background-size: cover !important;
    background-position: center 0;
    background-repeat: no-repeat !important;
    height: auto;
}
</style>