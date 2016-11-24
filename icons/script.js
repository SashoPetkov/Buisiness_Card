$('section:nth-of-type(2)').click(function(){
    $('.drop1').toggle(1000);  
} );
$('section:nth-of-type(3)').click(function(){
    $('.drop2').toggle(1000);  
} );
$('section:nth-of-type(4)').click(function(){
    $('.drop3').toggle(1000);  
} );
// $('section:nth-of-type(4)').click(function () {
//     $('.drop3').css('display', 'block'); 
// });


// CREATE class and USE it
//$('article:first-of-type').addClass('myArticle');
//$('.myArticle').css('color', 'red');


// ADD attribute and USE it 
// var aSocial = $('.social, a');
// $(aSocial).attr('target', '_blank');
$('social, a').attr('target', '_blank');


// ADD class to ALL elements (section)
// $("section").attr("class", function(nomer) {
//     return "section" + nomer;
//   });

// $("article").attr("class", function(nomer) {
//     return "article_" + nomer;
//   });

// attr. vs. PROP


