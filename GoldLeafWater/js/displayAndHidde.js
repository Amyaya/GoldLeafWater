// JavaScript Document

$(document).ready(function(){
		$("#btn1").click(function(){
			$("#btn1").fadeOut("fast");
			$("#btn2").fadeOut("fast");
			$("#springul").fadeOut("fast");
			$("p.text1").fadeIn(1000);
			$("ul.text1").fadeIn(1000);
			$("#btn6").fadeIn(1000);
			});
	
		$("#btn6").click(function(){
			$("p.text1").css('display','none');
			$("ul.text1").css('display','none');
			$("#btn6").css('display','none');
			$("#btn1").fadeIn(1000);
			$("#btn2").fadeIn(1000);
			$("#springul").fadeIn(1000);
			});
			
			
		$("#btn3").click(function(){
			$("#btn3").fadeOut("fast");
			$("#cupul").fadeOut("fast");
			$("p.text2").fadeIn(1000);
			$("#btn7").fadeIn(1000);
			
		});
		
		$("#btn7").click(function(){
			$("p.text2").css('display','none');
			$("#btn7").css('display','none');
			$("#btn3").fadeIn(1000);
			$("#cupul").fadeIn(1000);
			});
			
		$("#btn4").click(function(){
			$("#btn4").fadeOut("fast");
			$("#sparklingul").fadeOut("fast");
			$("p.text3").fadeIn(1000);
			$("#btn8").fadeIn(1000);
			
		});
		
		$("#btn8").click(function(){
			$("p.text3").css('display','none');
			$("#btn8").css('display','none');
			$("#btn4").fadeIn(1000);
			$("#sparklingul").fadeIn(1000);
			});
			
		$("#btn5").click(function(){
			$("#btn5").fadeOut("fast");
			$("#vitaminul").fadeOut("fast");
			$("p.text4").fadeIn(1000);
			$("#btn9").fadeIn(1000);
			
		});
		
		$("#btn9").click(function(){
			$("p.text4").css('display','none');
			$("#btn9").css('display','none');
			$("#btn5").fadeIn(1000);
			$("#vitaminul").fadeIn(1000);
			});			
		
});