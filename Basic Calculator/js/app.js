// A module pattern should be used here

var myBasicCalculator = (function() {


var valueBtn;
var resultado = 0;


$('.buttons, .cero').on('click', function(){
	
	var value = $(this).val();
	var span = document.createElement('span');
	span.append(value);
	$('#display').append(span);

});


$("#clear").on('click', function(){

	$('#display').empty();
	valueBtn = 0;
	resultado = 0;
})




//if($('#sum'.clicked))
$("#result").on('click', function(){

	//resultado = valueBtn + resultado;
	$('#display').empty().append(resultado);
	
	valueBtn = 0;
		
})


$('#sum').on('click', function(){

	$('#display').empty();
	resultado = valueBtn + resultado;
	
})

$('#rest').on('click', function(){

	$('#display').empty();
	resultado = valueBtn - resultado;
	
})


$(".num").on('click', function(){

	valueBtn = $(this).map(function() {
		return this.value;
	}).get().join();

	valueBtn = Number(valueBtn);

})



})();