# VIP影视解析

**最近在追一些电视剧，没办法 穷的买不起会员 只能利用在线接口来实现 满足自己的观影之爽**

**网上的接口都是一集一个URL来实现播放，感觉挺浪费时间的。干脆自己弄了一个**

```
/root/
|---- server                                   后端flask根目录
      |---- h5					     uniapp打包的h5程序（测试多主机访问）
|---- uniapp/free_vip_video                    uniapp代码根目录
      |---- App.vue				     主要配置的文件
      |---- ***
```

# 演示站

[local  ：  http://1ocalhost:8889](http://1ocalhost:8889)

[server  ：  http://110.42.177.170:8889](http://110.42.177.170:8889)

[pages ： https://lfj-free-vip.pages.dev/](https://lfj-free-vip.pages.dev/)

[pages ： https://zg10472580.github.io/free_vip_video/server/h5/](https://zg10472580.github.io/free_vip_video/server/h5/)

# 配置server api

![image-20230115184521294](image/image-20230115184521294.png)

- 主页

  ![image-20230115182523235](image/image-20230115182523235.png)

- 支持 爱奇艺/腾讯视频 列表播放

  ![image-20230115182558619](image/image-20230115182558619.png)

- 无法解析为目录 设置为单播放

  ![image-20230115182546389](image/image-20230115182546389.png)

- 采用 uniapp开发VUE 2实现

- 前后端分离
