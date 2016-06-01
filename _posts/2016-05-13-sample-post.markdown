---
layout: post
title:  "About jekyll"
date:   2016-06-01 12:40:02 +0700
categories: jekyll update
---

# 什么是jekyll

> jekyll是一个基于ruby开发的，专用于构建静态网站的程序。它能够将一些动态的组件：模板、liquid代码等构建成静态的页面集合，Github-Page全面引入jekyll作为其构建引擎，这也是学习jekyll的主要动力。同时，除了jekyll引擎本身，它还提供一整套功能，比如web server。我们用jekyll –server启动本地调试就是此项功能。读者可能已经发现，在启动server后，之前我们的项目目录下会多出一个_site目录。jekyll默认将转化的静态页面保存在_site目录下，并以某种方式组织。使用jekyll构建博客是十分适合的，因为其内建的对象就是专门为blog而生的，在后面的逐步介绍中读者会体会到这一点。但是需要强调的是，jekyll并不是博客软件，跟workpress之类的完全两码事，它仅仅是个一次性的模板解析引擎，它不能像动态服务端脚本那样处理请求。


# jekyll安装

## Ruby安装

>jekyll本身基于Ruby开发，因此，想要在本地构建一个测试环境需要具有Ruby的开发和运行环境。
在windows下，可以使用$ Ruby install安装

ruby安装说明：
```html
http://www.ruby-lang.org/zh_cn/downloads/
```

ruby安装下载(windows)
```html
http://rubyinstaller.org/downloads/
```

## RubyDevKit安装

从这个页面下载DevKit：

```html
http://rubyinstaller.org/downloads/
```


>注意RubyDecKi安装需与ruby版本一致

解压完成之后，用cmd进入到刚才解压的目录下，运行下面命令。
$ruby dk.rb init
$ruby setup.rb
如果没有setup.rb的话，执行：
$ruby dk.rb install
>若没有FQ,需更换淘宝镜像。
$ gem sources --remove http://rubygems.org/
$ gem sources -a http://ruby.taobao.org/

## 最后，运行命令

$ gem install jekyll



目录
* _config.yml：保存配置，该配置将影响jekyll构造网站的各种行为。

* _includes：该目录下的文件可以用来作为公共的内容被其他文章引用，就跟C语言include头文件的机制完全一样，jekyll在解析时会对{ % include file.ext %}标记扩展成对应的在_includes文件夹中的文件

* _layouts：该目录下的文件作为主要的模板文件

* _posts：文章或网页应当放在这个目录中，但需要注意的是，文章的文件名必须是YYYY-MM-DD-title

* _site：上面提到过，这是jekyll默认的转化结果存放的目录

* images：这个目录没有强制的要求，主要目的是存放你的资源文件，图片、样式表、脚本等。
