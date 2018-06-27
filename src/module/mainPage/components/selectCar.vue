<template>
    <div>
        <van-steps :active="1">
            <van-step>用户须知</van-step>
            <van-step>选择机动车</van-step>
            <van-step>选择违法记录</van-step>
            <van-step>生成订单</van-step>
            <van-step>支付</van-step>
        </van-steps>
        <div>
            <van-radio-group v-model="radio">
                <van-cell-group>
                    <van-cell title="苏E55P23" clickable @click="radio = '1'">
                        <van-radio name="1" />
                    </van-cell>
                    <van-cell title="苏E31Q99" clickable @click="radio = '2'">
                        <van-radio name="2" />
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </div>
        <van-submit-bar button-text="下一步" button-type="primary" @submit="next" />
    </div>
</template>
<script>
export default {
  name: "selectCar",
  data() {
    return {
      radio: "1"
    };
  },
  methods: {
    next() {
      console.log("bbc");
    }
  }
};
</script>
<style scoped>
</style>