$(document).ready(function() {
	$('form').submit(function() {
		var value = parseInt($("#number").val());
		if(isNaN(value)) {
			alert('Please enter an integer between 1 and 1000');
			$('#number').val('');
			return false;
		}
		else if(value > 1000) {
			alert('Please enter an integer between 1 and 1000');
			$('#number').val('');
			return false;
		}
		else {
			$('#number').val('');
			fizzbuzz(value);
			return false;
		}
	});

	
});

function fizzbuzz(number) {
	for(var i=1;i<=number;i++) {
		if(i%3 == 0 && i%5 == 0) {
					$('body').append('FizzBuzz' + '<br>');
		}
		else if(i%3 == 0) {
			$('body').append('Fizz' + '<br>');
		}
		else if(i%5 == 0) {
			$('body').append('Buzz' + '<br>');
		}
		else {
			$('body').append(i + '<br>');
		}
	}
} 