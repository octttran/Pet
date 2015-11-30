$(document).ready(function() {

  $('.gallery-one').on('click', function(){
     var image = $(this).find('img');
     var imageSrc = image.attr('src')
     $('#sidebar-img').attr('src', imageSrc)

     var name = $(this).next('h5');
     var membername = name.html();
     $('#displayName').html(membername);
  })

})

// .next('h5')
//.html([the name variable you want here])