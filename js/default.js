$(document).ready(function() {

  // Hide the member Description
  $('.member-description').hide();


  $('.gallery-one').click(function(){
     var image = $(this).find('img');
     var imageSrc = image.attr('src')
     $('#sidebar-img').attr('src', imageSrc);

     var name = $(this).next('h5');
     var memberName = name.html();
     $('#displayName').html(memberName)

     var location = $(this).find('h6');
     var memberLocation = location.html();
     $('#displayLocation').show(memberLocation);

     

  })

})

