# horizou

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader)

1.项目使用功能插件介绍：
    a）webpack  ------------打包工具
    b）vue-cli2.0  ---------脚手架
    c）Element-ui  ---------组件库
    d）Less  ---------------css预处理
    e）Axios  --------------基于 promise 的 HTTP 库
2.页面数据存值
    a) 存值: sessionStorage.setItem("key","data") 
    b) 取值：sessionStorage.getItem("key") 
3.组件介绍：
    a) 公共组件---全部写在src-->common文件夹中
    b) 局部组件---写在当前目录下的components文件夹中 src--> pages --> 页面名称 --> components文件夹中
4.vue-router页面路由
    a)页面中路由配置在 src --> router -->index.js
    b)在src --> main.js中我引用了router的beforeEach() 全局守卫，用来配置 页面跳转前处理逻辑如：用户是否登录，是否有权限访问当前页面，更改title
5.Axios http请求
    a)封装的Axios src --> Axios --> axios 
         if(sessionStorage.getItem("token")){
            config.headers['Authorization'] = sessionStorage.getItem("token")
        } 
        在axios拦截器中验证并赋值token

        axios.defaults.baseURL = 'https://h5.horizou.cn/'配置服务器地址

        在response响应拦截器中，能拿到数据，进行数据处理加工，判断code返回值，做出处理逻辑

    b)请求方式和接口管理 src --> Axios --> Http 文件
         请求方式 fetchPost,fetchGet
         export const add = p => fetchPost('h5api/V1/index/homePage1', p,"add");
                    add == 接口名称  p == 入参  fetchPost == 请求方式 “add” 当前接口存在session里面的key值名称
6.静态地址
    a)地址 src --> assets 文件夹下面  根据页面新建文件夹存放图片资源
7.打包文件，执行完npm run build命令之后打包文件存放在dist文件夹中