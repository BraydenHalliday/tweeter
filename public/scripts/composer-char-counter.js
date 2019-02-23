// charector counter logic 
//( I would add adidtional comments to the block if the logic was more complicated)
$(document).ready(function() {
  let holder = 140
  $('.counter').html(holder)
  $('.textarea').on('keyup',function (evt) {
// referencing evt so the stack has time to assign the value before referencing it
    let textLength = evt.target.value.length
    let remainingText = holder - textLength;
      if(remainingText < 0) {
// red for when the client exceeds the charector limit 
        $('.counter').css('color', 'red')
      } else {
        $('.counter').css('color', 'black')
      }
    $('.counter').html(remainingText)
  })    
}); 
