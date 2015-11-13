$(document).ready(function() {
  $("form input#submit").on('click', function(event) {
    event.preventDefault();
    message="";
    if ($("form input.firstName").val().length < 1) {
      message = message + "Please enter a first name. ";
    }
    
    if ($("form input.lastName").val().length < 1) {
      message = message + "Please enter a last name";
    }

    formNotReady = message.length > 0;
    
    if (formNotReady) {
      alert(message); 
    } else {
      alert("Form submitted successfully");
    }
      });

    console.log($("form input.lastName").val());
  });


// alert('im ready!'); 
//   $( ".cross" ).hide();
//   $( ".menu" ).hide();

  if(navigator.appVersion.indexOf("Chrome/4") >= 0) {
    alert('Im on Chrome!');
  };

//   $( ".hamburger" ).click(function() {
//     $( ".menu" ).slideToggle( "slow", function() {
//       $( ".hamburger" ).hide();
//       $( ".cross" ).show();
//     });
//   });

//   $( ".cross" ).click(function() {
//     $( ".menu" ).slideToggle( "slow", function() {
//       $( ".cross" ).hide();
//       $( ".hamburger" ).show();
//     });
//   }
// );