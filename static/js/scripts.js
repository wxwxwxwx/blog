---
layout: null
---
var menu=function($){
    $(".menu-icon").click(function(){
        $("body").toggleClass("exp");
    });
}(jQuery);jQuery(document).ready(menu);
$(function() {
  SimpleJekyllSearch.init({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    dataSource: "{{ site.baseurl }}/search.json",fuzzy: true});
  });
var tg=function($){
  $(".toggle-search").click(function(){
    $(".search").toggleClass("open");
  });
}(jQuery);jQuery(document).ready(tg);
