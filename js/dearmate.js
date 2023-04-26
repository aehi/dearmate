$(function(){

    /* event 메세지 모션 */
    
    function talkUp(ws,st){
        
        if(ws.scrollTop() >= st.offset().top - $(this).height()){
            st.addClass('talkUp');
        }else{
            st.removeClass('talkUp');
        }
   }

    $(window).scroll(function(){
        var win = $(this);
        
        talkUp(win,$('#event .imgWrap'));
    });
   

    /* FAQ 열림 */
			
    $('.faqWrap .question').click(function(){
        $(this).siblings().removeClass('open')
        $(this).toggleClass('open')
    })

    
});