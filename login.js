function student(){
   
        $('.parent').hide();
        $('.teacher').hide();
        $('.student').slideDown(1500);
    
    
}
function teacher(){
 
        $('.parent').hide();
        $('.student').hide();
        $('.teacher').slideDown(1500);
    
    
 
}
function parents(){
 
    $('.teacher').hide()
    $('.student').hide();
    $('.parent').slideDown(1500);
    
   
    
}

function registerion(){
    $('.login').hide()
    $('.registerion').slideDown(1000);
    window.scrollTo(0, 0)
}
