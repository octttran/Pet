$(document).ready(function() {

  // Hide the member Description
  $('.member-description').hide();
  $('.member-location').hide();


  $('.gallery-one').click(function(){
     var image = $(this).find('img');
     var imageSrc = image.attr('src')
     $('#sidebar-img').attr('src', imageSrc);

     var name = $(this).next('h5');
     var memberName = name.html();
     $('#displayName').html(memberName)

     var location = $(this).siblings('h6');
     var memberLocation = location.html();
     $('#displayLocation').html(memberLocation);

     var description = $(this).siblings('p');
     var memberDescription = description.html();
     $('#displayDescription').html(memberDescription);

     

  })

})

