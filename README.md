# vue-xu-generate
A plugin for Vue to quick generate~


一个快速生成页面文件的插件，搭配vue模版使用。  [模版地址](https://github.com/xu455255849/vue-xu)

如果你对模版不是很满意，你完全可以fork一份改造成自己喜欢的模版～

## 项目结构


```javascript
.
├── bin           //命令配置
├── README.md     //说明文档
├── index.js      //主入口
├── src           //功能文件
├── package.json  //包信息
└── test          //测试用例
```

## Install 
  
  ```javascript
  $ npm i vue-xu-generate -g 


```

## Useage

xu g [type] [name]     

name为 你需要生成的文件名
   
   
   目前支持的type：
   
   * page
   * component
   * store
   
   
##  小甜点

这个插件，我写了一篇详细的教程，对npm包开发有兴趣，又没有经验的同学可以一看。

简书： http://www.jianshu.com/p/452a93dce46d

博客： http://pingshao.wang/home/59df084cc349c36b11af3849
  
##  License

Licensed under MIT

Copyright (c) 2011-2017 xu455255849