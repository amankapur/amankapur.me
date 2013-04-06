$(function(){
	$("#rails").on('click', function(e){
		e.preventDefault();
		console.log('hi');
		$('#rails_projects').toggle('slow');
	});
});	

