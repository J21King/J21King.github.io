right = {
	'right': '-630px'
}
up = {
	'bottom': '0px'
}
enlarge = {
	'height': '500%',
	'marginLeft': '-100%',
	'marginTop': '-100%'
}
reset = function() {
	$('#pic1').css("right","998px");
	$('#pic2').css("right","998px");
	$('#pic3').css("bottom","-350px");
}
show1 = function() {
  $('#pic1').attr('src', 'img1.png')
  $('#pic1').animate(right,4000,reset);
  window.setTimeout(show2, 250)
}
show2 = function() {
  $('#pic1').attr('src', 'img2.png')
  window.setTimeout(show1, 250)
}
show3 = function() {
  $('#pic2').attr('src', 'img3.png')
  $('#pic2').animate(right,4000,reset);
  window.setTimeout(show4, 250)
}
show4 = function() {
  $('#pic2').attr('src', 'img4.png')
  window.setTimeout(show3, 250)
}
show5 = function() {
  $('#pic3').attr('src', 'img5.png')
  $('#pic3').animate(up,4000);
  window.setTimeout(show6, 700)
}
show6 = function() {
  $('#pic3').attr('src', 'img6.png')
  window.setTimeout(show5, 150)
}
show7 = function() {
  $('#pic4').attr('src', 'img5.png')
  window.setTimeout(show8, 2000)
}
show8 = function() {
  $('#pic4').attr('src', 'img7.png')
  $('#pic4').animate(enlarge,150);
}
page1 = function() {
	$('#page1').css("display","block");
	$('#page2').css("display","none");
	
	$('#prev').css({"opacity":"0.6","cursor":"not-allowed"});
	$('#next').off();
	$('#next').click(page2);
	
	show1();
}
page2 = function() {
	$('#page1').css("display","none");
	$('#page2').css("display","block");
	$('#page3').css("display","none");
	
	$('#prev').css({"opacity":"1","cursor":"default"});
	$('#next').off();
	$('#next').click(page3);
	$('#prev').off();
	$('#prev').click(page1);
	
	show3();
}
page3 = function() {
	$('#page2').css("display","none");
	$('#page3').css("display","block");
	$('#page4').css("display","none");
	
	$('#next').css({"opacity":"1","cursor":"default"});
	$('#next').off();
	$('#next').click(page4);
	$('#prev').off();
	$('#prev').click(page2);
	
	show5();
}
page4 = function() {
	$('#page3').css("display","none");
	$('#page4').css("display","block");
	
	$('#next').css({"opacity":"0.6","cursor":"not-allowed"})
	$('#prev').off();
	$('#prev').click(page3);
	
	show7();
}
$(document).ready(page1);