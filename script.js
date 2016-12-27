(function (){
    $('h2').on('mouseover', function(){
        $(this).css('cursor', 'pointer');
    });
    function clickSection (numSection){
        var clicks = true;
        $(numSection).on('click', function(){
            var myChild = $(numSection).children().last(); 
            if (clicks) {
                myChild.show();
                clicks = false;
            } else {
                myChild.hide();
                clicks = true;
            }
        });
    }
    clickSection('section:nth-of-type(2)');
    clickSection('section:nth-of-type(3)');
    clickSection('section:nth-of-type(4)');

    var fullWorkingSite = $('<a href="https://github.com/SashoPetkov/myProject"></a>').appendTo('section:nth-of-type(3) article');
    fullWorkingSite.css({
                            'display': 'block',
                            'text-align': 'center',
                            'margin': '20px 0',
                            'text-decoration': 'none',
                            'color': 'red'
                        });
    fullWorkingSite.text('click here to see full working site on gitHub (HTML + CSS + JavaScript(jQuery)');
})();