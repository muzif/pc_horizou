<template>
  <div class="hello">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div v-for="arr in state">
          <p>{{arr.name}}</p>
      </div>
      <button type="button" @click="fn">提交数据到父组件</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props:{
    state:{
      type:Array,
      required:true,
    }
  },
  data () {
    return {
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  },
  created(){
    this.$emit('showCityName',this.options)
  },
  methods:{
    fn(){
      this.$emit('showCityName',this.options)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {y
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.box{
  width: 100px;
  height: 100px;
  border:1px solid red;
  .fn{
    width: 10px;
  height: 10px;
  border:1px solid red;
  }
}
</style>
