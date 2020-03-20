<template>
  <div class="hello1">
      <el-row>
        <el-col :span="24">
          <h1>首页</h1>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <!-- 公共组件 -->
      <bob></bob>
      <!-- 局部组件 -->
      <indexcom :state = arr_for @showCityName = unp></indexcom>
      <el-button @click="fn">123123213</el-button>


      <el-input placeholder="请输入内容" v-model="input" clearable >
</el-input>
  </div>
</template>

<script>
import indexcom from "../index/components/indexcom"
import bob from "../../Common/bob"
import {add,fn} from '../../Axios/Http'
import {phone,identity,Email} from '../../public/index'
export default {
  name: 'hello1',
  components:{
      indexcom ,bob
  },
  data () {
    return {
      // loading:false,
      arr_for:[
        {name:"李文亮",age:45,fmals:"武汉"},
        {name:"郭某亮",age:25,fmals:"郑州"}
      ],
      input:""
    }
  },
  watch:{
    input(lod,nlod){
      console.log(this.input)
    }
  },
  created(){
    add().then(res=>{
      console.log(res)
    })
    fn()
  },
  methods:{
    fn(){

      Email(this.input)

    },
    unp(val){
      console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
