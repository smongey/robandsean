$(document).ready(function(){$("body").hide();$("body").delay(500).fadeIn(400);$(function(){$("#intro, #skills, #contact").css({height:$(window).height()});$("#intro h1").css({top:$(window).height()/2-140}).css({left:$(window).width()/2-300});$(window).bind("resize",function(){$("#intro, #skills, #contact").css({height:$(window).height()});$("#intro h1").css({top:$(window).height()/2-140}).css({left:$(window).width()/2-300})})});$.localScroll({duration:400});$(function(){$(".project").hover(function(){$(this).children(".info").fadeIn(300)},function(){$(this).children(".info").fadeOut(300)})})});