function sum(){
		var firstNumber = document.getElementById("fnumber").value;
		var secondNumber = document.getElementById("snumber").value;
		document.getElementById("result").value = +firstNumber + +secondNumber;
		}
		
		function difference(){
		var firstNumber = document.getElementById("fnumber").value;
		var secondNumber = document.getElementById("snumber").value;
		document.getElementById("result").value = +firstNumber - +secondNumber;
		}
		
		function product(){
		var firstNumber = document.getElementById("fnumber").value;
		var secondNumber = document.getElementById("snumber").value;
		document.getElementById("result").value = +firstNumber * +secondNumber;
		}
		
		function quotient(){
		var firstNumber = document.getElementById("fnumber").value;
		var secondNumber = document.getElementById("snumber").value;
		document.getElementById("result").value = +firstNumber / +secondNumber;
		}