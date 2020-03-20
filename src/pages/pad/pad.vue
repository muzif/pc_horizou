<template>
  <div class="pad">
      <el-row>
        <el-col :span="24">
          <h1>第二个页面</h1>
        </el-col>
      </el-row>
      <bob></bob>
  </div>
</template>

<script>
import bob from "../../Common/bob"
export default {
  name: 'pad',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
      bob
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
</style>
