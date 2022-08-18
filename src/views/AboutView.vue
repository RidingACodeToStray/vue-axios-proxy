<template>
  <div class="about">
    post
  </div>
</template>
<script>
export default {
  created() {
    this.pData()
  },
  methods: {
    pData(){
      //post请求使用axios.post方法post的参数放到第二个参数上，使用axios方法参数放到data对象上
      /**
       * 后端开启cors，则不用配置devServer跨域，若后端不开启cors，则需要配置devServer
       */
      this.$axios({
        url:"/test/postdata",
        method:"post",
        data:{
          a:"post请求",
        }
      })
    }
  },
}
</script>