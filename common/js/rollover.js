$(document).ready(
	function(){
		$("#nav a img").hover(function(){
			$(this).fadeTo("normal", 0); //マウスオーバーで透明度を70%にする
		},function(){
			$(this).fadeTo("normal", 1.0); //マウスアウトで透明度を100%にする
		},
		$("#headerLeft li a img").hover(function(){
			$(this).fadeTo("fast", 0.7); //マウスオーバーで透明度を70%にする
			$(this).css("background-color","#ffffff");
		},function(){
			$(this).fadeTo("normal", 1.0); //マウスアウトで透明度を100%にする
			$(this).css("background-color","#ffffff");
		}
	)
	)
}
)