$(document).ready(function() {

  // Hide these Divs
  $('.member-description').hide();
  $('.member-location').hide();
  $('.registration').hide();

  // Show image click on sidebar image box
  $('.gallery-one').click(function(){
     var image = $(this).find('img');
     var imageSrc = image.attr('src')
     $('#sidebar-img').attr('src', imageSrc);

  // Show member name on Sidebar when click on gallery
     var name = $(this).next('h5');
     var memberName = name.html();
     $('#displayName').html(memberName)

  // Show member location on Sidebar when click on gallery
     var location = $(this).siblings('h6');
     var memberLocation = location.html();
     $('#displayLocation').html(memberLocation);

  // Show member description on Sidebar when click on gallery
     var description = $(this).siblings('p');
     var memberDescription = description.html();
     $('#displayDescription').html(memberDescription);   

  })
  // Hide homepage and show Sign-up page when click on sign-up button
  $('.action-one-button').click(function() {
    $('.homepage').hide();
    $('.registration').show();

  }) 

})

