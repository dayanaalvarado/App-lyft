$(document).ready(function(){
	$(".editar").on("click", function(e){
	  e.preventDefault();
		var dataset = $(this).prev(".informacion");
		var guardar = $(this).next(".guardar");
		var theid   = dataset.attr("id");
		var newid   = theid+"-form";
		var currval = dataset.text();
		
		dataset.empty();
		
		$('<input type="text" name="'+newid+'" id="'+newid+'" value="'+currval+'" class="hlite">').appendTo(dataset);
		
		$(this).css("display", "none");
		guardar.css("display", "block");
	});
	$(".guardar").on("click", function(e){
		e.preventDefault();
		var elink   = $(this).prev(".editar");
		var dataset = elink.prev(".informacion");
		var newid   = dataset.attr("id");
		
		var cinput  = "#"+newid+"-form";
		var einput  = $(cinput);
		var newval  = einput.attr("value");
		
		$(this).css("display", "none");
		einput.remove();
		dataset.html(newval);
		
		elink.css("display", "block");
	});
});