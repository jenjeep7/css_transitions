
// console.log("client");

//modal pop up functionality//
$(function(){

  $(".btn").on("click", function(){
    $(".modal, .modal-overlay").addClass("active");
    console.log("this works");
  });

  $(".modal-close").on("click", function(){
    $(".modal, .modal-overlay").removeClass("active");
  });
});
