let date = new Date();
let months = new Array('января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря');

document.getElementById('actual-date').textContent = date.getDate() + ' ' + months[date.getMonth()];

$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true
    })
  });
      
$(document).ready(function(){
    $('.single-item').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
    })
});
      