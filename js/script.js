$(document).ready(function () {
	$(".searchBox .icon").click(function() {
		$(".searchBox").toggleClass("isOpen");
		setTimeout(function() {$(".searchBox.isOpen input[type=text]").focus();},300);
	});
});