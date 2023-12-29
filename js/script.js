$('nav ul li.btn span').click(function(){
    $('nav ul div.items').toggleClass("show");
    $('nav ul li.btn span').toggleClass("show");
});


var typed = new Typed('#typed',{
    strings : ['&nbsp; Web Developer ^500','&nbsp; Web Designer ^500','&nbsp; Freelancer ^500'],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true
});

var typed = new Typed('#typedName',{
    strings : ['&nbsp; Freelancer ^500'],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true
});