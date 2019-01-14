//console.log = function() {}

//  const $ = window.$;
// // const jQuery = window.jQuery;

//  $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();   
//  });
// 	$('body').click(function(){
// 		$('.nav-xbootstrap').toggleClass('visible');
// 		$('body').toggleClass('cover-bg');
// });

// 	var flipCard = $("#make-3D .tile");

// 	$("#make-3D .settings").click(function(){			

// 		$(flipCard).addClass('flip-10');
// 		setTimeout(function(){
// 			$(flipCard).removeClass('flip-10').addClass('flip90');
// 		}, 50);

// 		setTimeout(function(){
// 			$(flipCard).removeClass('flip90').addClass('flip190');
// 			$('#front').hide();	$('#back').show();		
// 			setTimeout(function(){				
// 				$(flipCard).removeClass('flip190').addClass('flip180');
// 				$('#back .cx, #back .cy').addClass('s1');
// 				setTimeout(function(){$('#back .cx, #back .cy').addClass('s2');}, 80);
// 				setTimeout(function(){$('#back .cx, #back .cy').addClass('s3');}, 150);							
// 				setTimeout(function(){
// 					$(flipCard).css('transition', '100ms ease-out');							
// 				}, 100);
// 			}, 100);			
// 		}, 150);					
// 	});
	
// 	$('#back .close').click(function(){		
				
// 		$('#back .cx, #back .cy').removeClass('s1 s2 s3');		
// 		$(flipCard).removeClass('flip180').addClass('flip190');

// 		setTimeout(function(){
// 			$(flipCard).removeClass('flip190').addClass('flip90');			
// 		}, 50);								

// 		setTimeout(function(){
// 			$('#front').show();	$('#back').hide();					
// 				$(flipCard).removeClass('flip90').addClass('flip-10');
				
// 			setTimeout(function(){						
// 			$(flipCard).removeClass('flip-10').css('transition', '100ms ease-out');								
// 			}, 100);			
// 		}, 150);			
		
// 	});	
	
// 	$('button').click(function(){return false;});


// 	$("#circle1").circliful({
// 		animation: 1,
//             animationStep: 6,
//             foregroundBorderWidth: 5,
//             backgroundBorderWidth: 1,
//             percent: 60,
// 			iconColor: 'var(--color-icon1)',
// 			foregroundColor:'var(--color-icon1)',
//             icon: 'f0e4',
//             iconSize: '60',
// 			iconPosition: 'middle',
// 			text:"ความเร็ว",
// 			percentageTextSize:12,
// 			replacePercentageByText:"60 ก.ม./ช.ม.",
// 			percentageTextSize:32,
// 			textY:140
// 	});

// 	$("#circle2").circliful({
// 		animation: 1,
//             animationStep: 6,
//             foregroundBorderWidth: 5,
//             backgroundBorderWidth: 1,
//             percent: 88,
// 			iconColor: 'var(--color-icon)',
// 			foregroundColor:'var(--color-icon)',
//             icon: 'f043',
//             iconSize: '60',
// 			iconPosition: 'middle',
// 			text:"น้ำมัน",
// 			percentageTextSize:12,
// 			// replacePercentageByText:"60 ก.ม./ช.ม.",
// 			percentageTextSize:32,
// 			textY:140
// 	});

	
// 	$("#1circle1").circliful({
// 		animation: 1,
//             animationStep: 6,
//             foregroundBorderWidth: 5,
//             backgroundBorderWidth: 1,
//             percent: 40,
// 			iconColor: 'var(--color-icon1)',
// 			foregroundColor:'var(--color-icon1)',
//             icon: 'f0e4',
//             iconSize: '60',
// 			iconPosition: 'middle',
// 			text:"ความเร็ว",
// 			percentageTextSize:12,
// 			replacePercentageByText:"40 ก.ม./ช.ม.",
// 			percentageTextSize:32,
// 			textY:140
// 	});

// 	$("#1circle2").circliful({
// 		animation: 1,
//             animationStep: 6,
//             foregroundBorderWidth: 5,
//             backgroundBorderWidth: 1,
//             percent: 75,
// 			iconColor: 'var(--color-icon)',
// 			foregroundColor:'var(--color-icon)',
//             icon: 'f043',
//             iconSize: '60',
// 			iconPosition: 'middle',
// 			text:"น้ำมัน",
// 			percentageTextSize:12,
// 			// replacePercentageByText:"60 ก.ม./ช.ม.",
// 			percentageTextSize:32,
// 			textY:140
// 	});
// 	$("#2circle1").circliful({
// 		animation: 1,
//             animationStep: 6,
//             foregroundBorderWidth: 5,
//             backgroundBorderWidth: 1,
//             percent: 90,
// 			iconColor: 'var(--color-icon1)',
// 			foregroundColor:'var(--color-icon1)',
//             icon: 'f0e4',
//             iconSize: '60',
// 			iconPosition: 'middle',
// 			text:"ความเร็ว",
// 			percentageTextSize:12,
// 			replacePercentageByText:"90 ก.ม./ช.ม.",
// 			percentageTextSize:32,
// 			textY:140
// 	});

// 	$("#2circle2").circliful({
// 		animation: 1,
//             animationStep: 6,
//             foregroundBorderWidth: 5,
//             backgroundBorderWidth: 1,
//             percent: 20,
// 			iconColor: 'var(--color-icon)',
// 			foregroundColor:'var(--color-icon)',
//             icon: 'f043',
//             iconSize: '60',
// 			iconPosition: 'middle',
// 			text:"น้ำมัน",
// 			percentageTextSize:12,
// 			// replacePercentageByText:"60 ก.ม./ช.ม.",
// 			percentageTextSize:32,
// 			textY:140
// 	});

// 	$("#3circle1").circliful({
// 		animation: 1,
//             animationStep: 6,
//             foregroundBorderWidth: 5,
//             backgroundBorderWidth: 1,
//             percent: 20,
// 			iconColor: 'var(--color-icon1)',
// 			foregroundColor:'var(--color-icon1)',
//             icon: 'f0e4',
//             iconSize: '60',
// 			iconPosition: 'middle',
// 			text:"ความเร็ว",
// 			percentageTextSize:12,
// 			replacePercentageByText:"40 ก.ม./ช.ม.",
// 			percentageTextSize:32,
// 			textY:140
// 	});

// 	$("#3circle2").circliful({
// 		animation: 1,
//             animationStep: 6,
//             foregroundBorderWidth: 5,
//             backgroundBorderWidth: 1,
//             percent: 50,
// 			iconColor: 'var(--color-icon)',
// 			foregroundColor:'var(--color-icon)',
//             icon: 'f043',
//             iconSize: '60',
// 			iconPosition: 'middle',
// 			text:"น้ำมัน",
// 			percentageTextSize:12,
// 			// replacePercentageByText:"60 ก.ม./ช.ม.",
// 			percentageTextSize:32,
// 			textY:140
// 	});

// 	$("#4circle1").circliful({
// 		animation: 1,
//             animationStep: 6,
//             foregroundBorderWidth: 5,
//             backgroundBorderWidth: 1,
//             percent: 70,
// 			iconColor: 'var(--color-icon1)',
// 			foregroundColor:'var(--color-icon1)',
//             icon: 'f0e4',
//             iconSize: '60',
// 			iconPosition: 'middle',
// 			text:"ความเร็ว",
// 			percentageTextSize:12,
// 			replacePercentageByText:"80 ก.ม./ช.ม.",
// 			percentageTextSize:32,
// 			textY:140
// 	});

// 	$("#4circle2").circliful({
// 		animation: 1,
//             animationStep: 6,
//             foregroundBorderWidth: 5,
//             backgroundBorderWidth: 1,
//             percent: 100,
// 			iconColor: 'var(--color-icon)',
// 			foregroundColor:'var(--color-icon)',
//             icon: 'f043',
//             iconSize: '60',
// 			iconPosition: 'middle',
// 			text:"น้ำมัน",
// 			percentageTextSize:12,
// 			// replacePercentageByText:"60 ก.ม./ช.ม.",
// 			percentageTextSize:32,
// 			textY:140
// 	});

// 	$("#5circle1").circliful({
// 		animation: 1,
//             animationStep: 6,
//             foregroundBorderWidth: 5,
//             backgroundBorderWidth: 1,
//             percent: 10,
// 			iconColor: 'var(--color-icon1)',
// 			foregroundColor:'var(--color-icon1)',
//             icon: 'f0e4',
//             iconSize: '60',
// 			iconPosition: 'middle',
// 			text:"ความเร็ว",
// 			percentageTextSize:12,
// 			replacePercentageByText:"10 ก.ม./ช.ม.",
// 			percentageTextSize:32,
// 			textY:140
// 	});

// 	$("#5circle2").circliful({
// 		animation: 1,
//             animationStep: 6,
//             foregroundBorderWidth: 5,
//             backgroundBorderWidth: 1,
//             percent: 50,
// 			iconColor: 'var(--color-icon)',
// 			foregroundColor:'var(--color-icon)',
//             icon: 'f043',
//             iconSize: '60',
// 			iconPosition: 'middle',
// 			text:"น้ำมัน",
// 			percentageTextSize:12,
// 			// replacePercentageByText:"60 ก.ม./ช.ม.",
// 			percentageTextSize:32,
// 			textY:140
// 	});

// });