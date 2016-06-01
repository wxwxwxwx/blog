---
layout: post
title:  "about jekyll"
date:   2016-06-01 19:40:02 +0700
categories: jekyll update
---
# 关于在windows上搭建jekyll

### 安装rubu
```html
http://rubyinstaller.org/downloads/
```
$ ruby -v
$ ruby dk.rb init

>最后安装 DevKit

$ ruby dk.rb install

### 更改gem镜像到 taobao网，可以改善国内Ruby安装的速度
gem sources --remove https://rubygems.org/
gem sources -a https://ruby.taobao.org/
gem sources -l         #查看是否只有taobao镜像
gem update --system    #更新RubyGems软件


### 安装jekyll
gem install jekyll
