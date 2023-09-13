// // load-templates.js
$(document).ready(function () {
    $("#header-placeholder").load("header.html");
    $("#footer-placeholder").load("footer.html");

  // // Get the class name of the current page's <body> element
    var currentPageClass = $('body').attr('class');
    console.log("Current page is:", currentPageClass)

  // // Remove "active" class from all navigation links
  //   $('.nav-link').removeClass('active');

  // // Add "active" class to the link associated with the current page
    var specificLink = $('#home_id')
    console.log("Selected nav content:", specificLink)

    $('.nav-link[data-page="' + currentPageClass + '"]').addClass('active');

  });


