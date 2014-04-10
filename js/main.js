$(function(){
	$(".calender").hide()
	// $("#rails").on('click', function(e){
	// 	e.preventDefault();
	// 	console.log('hi');
	// 	$('#rails_projects').toggle('slow');
	// });
	

	var hash = window.location.hash;
	console.log(hash);
	if (hash.indexOf("calendar") > 0){
		$(".calender").show();
		$(".mainrow").hide();
		console.log("showing calender");
	}
	else {
		$(".calender").hide();
		$(".mainrow").show();
	}
	

});	

