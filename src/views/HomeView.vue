<template>
  <div>
    get
  </div>
</template>
<script>
export default {
  created() {
    this.getData()
  },
  methods: {
    getData(){
      // get请求，使用axios.get方法，url后面拼接参数；使用axios方法参数放到params对象上，后端使用query获取
      /**
       * 后端开启cors，则不用配置devServer跨域，若后端不开启cors，则需要配置devServer
       */
      this.$axios({
        url:"/test/getdata",
        method:"get",
        params:{
          a:"get请求",
        }
      })
    }
  },
}
</script>