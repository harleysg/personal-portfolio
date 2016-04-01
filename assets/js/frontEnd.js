$(document).ready(function() {
    $('.navDown a').hover(function() {
        $(this).addClass('animated');
    }, function() {
        /* Stuff to do when the mouse leaves the element */
    });

        $('.bxslider').bxSlider({
            slideWidth: 300,
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            slideMargin: 20,
            nextSelector: '.btnNext',
            prevSelector: '.btnPrev',
            nextText: 'next',
            prevText: 'prev'
          });
    /* menu responsive */

$(".btnMenuSm").click( function(event){
    event.preventDefault();
    if ($('.menuLat').hasClass("isLeft") ) {
        $('.menuLat').animate({left:"0px"}, 200);
        $('.menuLat').removeClass("isLeft");
    } else {
        $('.menuLat').animate({left:"-130px"}, 200);
        $('.menuLat').addClass("isLeft");
    }
    return false;
});
//stop carrusel

    $('.carousel').carousel({
          interval: 0
        });

});

    /* POP - UP */

        $(document).ready(function(){
            $(".infoBtn").click(function(){
               $(".popUp").toggle("fast");
            });
        });

     /* POP -UP */





/*Underline-Titulos*/

$(document).ready(function() {

        var ancho_title = $(".mainTitles").find("h2").width();
        $(".lineTit").css("width", ancho_title);

        $('.carousel').on('slid.bs.carousel', function (e) {
            var ancho = $(this);
            var ancho_title = $(e.relatedTarget).find("h2").width();
            //alert(ancho_title);
            $(".lineTit").css("width", ancho_title);
    });
    });


    /*SLIDE IMG TEXT*/
    $(function(){
    var cant = $(".oct").length;
    var num = cant;
    var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for(var i=0; i<num; i++){
      $(".btnOption").append("<a id='"+(i+1)+"'>"+abc[i]+"</a>");
    }
    $(".btnOption").find("a").eq(0).addClass("active");
    $(".btnOption a").click(function(){
      $(".oct").css('display', 'none');
      var num = $(this).attr("id");
      console.log(num);
      $(".hidden"+num).css('display', 'block');
    });

    $(".btnOption a").click(function() {
        $(".btnOption").find('.active').removeClass('active');
        $(this).addClass('active');
    });

  });
/*Underline-Titulos*/

/* boton notice kids */

$(document).ready(function() {

      $('.infoBtn').click(function() {
         $(this).toggleClass('activeNoti');
      });

      $('.btnTop').eq(0).click(function(event) {
        $('.topSub').eq(0).toggleClass('disBlo animated fadeInDown');
        $('.topSub').eq(1).toggleClass('disBlo animated fadeInDown');
        $(this).toggleClass('btnTopHover');
        $('.btnTop div').eq(0).toggleClass('triguleUp');
      });



      $('.btnTop').eq(1).click(function(event) {
        $('.topSub').eq(2).toggleClass('disBlo animated fadeInDown');
        $('.topSub').eq(3).toggleClass('disBlo animated fadeInDown');
        $(this).toggleClass('btnTopHover');
        $('.btnTop div').eq(1).toggleClass('triguleUp');
      });

      $('.btnTop').eq(2).click(function(event) {
        $('.topSub').eq(4).toggleClass('disBlo animated fadeInDown');
        $('.topSub').eq(5).toggleClass('disBlo animated fadeInDown');
        $(this).toggleClass('btnTopHover');
        $('.btnTop div').eq(2).toggleClass('triguleUp');
      });


      $('.btnTop').eq(3).click(function(event) {
        $('.topSub').eq(6).toggleClass('disBlo animated fadeInDown');
        $('.topSub').eq(7).toggleClass('disBlo animated fadeInDown');
        $(this).toggleClass('btnTopHover');
        $('.btnTop div').eq(3).toggleClass('triguleUp');
      });



      $('.btnTop').eq(4).click(function(event) {
        $('.topSub').eq(8).toggleClass('disBlo animated fadeInDown');
        $('.topSub').eq(9).toggleClass('disBlo animated fadeInDown');
        $(this).toggleClass('btnTopHover');
        $('.btnTop div').eq(4).toggleClass('triguleUp');
      });

    // menu a b ejercicio
    $('.topSub').eq(0).click(function(event) {
      $('.clickA').toggle('fast')
      $('.clickB').css('display', 'none');
    });

    $('.topSub').eq(1).click(function(event) {
      $('.clickB').toggle('fast');
      $('.clickA').css('display', 'none');

    });


    $('.topSub').eq(2).click(function(event) {
      $('.clickC').toggle('fast')
      $('.clickD').css('display', 'none');
    });


    $('.topSub').eq(3).click(function(event) {
      $('.clickD').toggle('fast');
      $('.clickC').css('display', 'none');

    });


    $('.topSub').eq(4).click(function(event) {
      $('.clickE').toggle('fast')
      $('.clickF').css('display', 'none');
    });

    $('.topSub').eq(5).click(function(event) {
      $('.clickF').toggle('fast');
      $('.clickE').css('display', 'none');

    });


    $('.topSub').eq(6).click(function(event) {
      $('.clickG').toggle('fast')
      $('.clickH').css('display', 'none');
    });


    $('.topSub').eq(7).click(function(event) {
      $('.clickH').toggle('fast');
      $('.clickG').css('display', 'none');

    });


    $('.topSub').eq(8).click(function(event) {
      $('.clickI').toggle('fast')
      $('.clickJ').css('display', 'none');
    });


    $('.topSub').eq(9).click(function(event) {
      $('.clickJ').toggle('fast');
      $('.clickI').css('display', 'none');

    });



  });

// Materialice initiation

// Modal
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});
// DropDown
$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
// Carousel
$(document).ready(function(){
      $('.carousel').carousel();
    });
// Slider
$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
