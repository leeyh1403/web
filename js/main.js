$(document).ready(function() {

	
$('.menu_btn>a').on('click', function(){
	$('.menu_bg').show(); 
	$('.sidebar_menu').show().animate({
		right:0
	});  
});
$('.close_btn>a').on('click', function(){
	$('.menu_bg').hide(); 
	$('.sidebar_menu').animate({
		right: '-' + 50 + '%'
				},function(){
					$('.sidebar_menu').hide();          
				});  
});
	
	
	
// 스크롤 이벤트	
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	//console.log(scroll);
	if (scroll >= 50) {
		//console.log('a');
		$("#section-01").addClass("change");
	} else {
		//console.log('a');
		$("#section-01").removeClass("change");
	}
});
	
	
let didScroll = false;
let paralaxTitles = document.querySelectorAll('.paralax-title');

const scrollInProgress = () => {
	didScroll = true
}
const raf = () => {
	if(didScroll) {
		paralaxTitles.forEach((element, index) => {
			element.style.transform = "translateX("+ window.scrollY / 10 + "%)"
		})
		didScroll = false;
	}
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)
	
	
	
//마우스커서 커스터마이징	
	
//선택자
const cursor = document.querySelector(".mouse__cursor"); //첫번째 커서
const cursor2 = document.querySelector(".mouse__cursor2"); //2번째 커서
const span = document.querySelectorAll(".cursor"); //오버 효과

//마우스가 윈도우 브라우저 내에서 움직일 경우 이벤트 발생시키기 (e는 마우스 요소를 의미)
window.addEventListener("mousemove", e => {
    // GSAP
    // 마우스 이벤트가 좀 더 부드럽고 섬세하게 작동되도록 함
    gsap.to(cursor, {duration: 0.15, left: e.pageX -5, top: e.pageY -5});
    gsap.to(cursor2, {duration: 0.5, left: e.pageX -15, top: e.pageY -15});

    //오버효과(화살표 함수 사용 : 화살표 함수에서는 this가 먹히지 않는다.
    // 즉 this를 쓰기 위해선 옛날 문법으로 짜야한다.(펑션)
    //mouseenter / mouseover => 자식요소에게 영향을 주는가 즉 이벤트 버블링에 차이가 있다.
    span.forEach(span => {
        //마우스가 영역 안으로 들어올 때 active 붙이기
        span.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
            cursor2.classList.add("active");
        });
        //마우스가 영역에서 떠났을 때
        span.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
            cursor2.classList.remove("active");
        });   
    });


});
	
	
	
	
	
	
});












                                         