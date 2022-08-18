# vue2cli

# 跨域配置
## 1，后端使用了cors  
前端不需要配置devServer  
axios的baseUrl直接写后端地址  

## 2，后端没有使用cors  
前端需要配置devServer  
axios的baseUrl设置为devServer的proxy的前缀  

