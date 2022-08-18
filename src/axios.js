import axios from "axios";
const http =  axios.create({
    // baseURL: "http://192.168.16.38:8000",    //后端配置cors，直接写后端接口地址
    baseURL:"/api",  //后端没配cors，使用devserver，设置为proxy的前缀，后端接口地址写在devserver里面
})

http.interceptors.request.use(
    request => {
      return request;
    },
    error => {
        return Promise.reject(error);
    }
);
http.interceptors.response.use(
    response => {
      if(response.data.code == 200000){
        return response.data;
      } else {
        return Promise.reject(error);
      }
    },
    error => {
        return Promise.reject(error);
    }
);

export default http
