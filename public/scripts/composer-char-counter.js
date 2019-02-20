$(document).ready(function() {



        let holder = 140
        $('.counter').html(holder)
        $('.textarea').on("keydown", function (evt) {
        let textlength = $('.textarea').val().length + 1
        let remainingtext = holder - textlength 

        if(remainingtext < 0) {
            $('.counter').css('color', 'red')
        } else {
            $('.counter').css('color', 'black')
        }
       $('.counter').html(remainingtext)
    })    
    
}); 
