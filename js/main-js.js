
$(document).ready(function(){
    $(".open").click(function(){
      $(".open").toggle();
	   $(".close").toggle();
	  $(".sidbar").toggleClass("active");
    });
});
$(document).ready(function(){
    $(".close").click(function(){
      $(".open").toggle();
	   $(".close").toggle();
	  $(".sidbar").toggleClass("active");
    });
});
$(document).ready(function(){
    $(".open1").click(function(){
      $(".open1").toggle();
	   $(".close1").toggle();
	  $(".sidbar1").toggleClass("active1");
    });
});
$(document).ready(function(){
    $(".close1").click(function(){
      $(".open1").toggle();
	   $(".close1").toggle();
	  $(".sidbar1").toggleClass("active1");
    });
});

$(".button").on("click", function(ev) {
  var currentQty = $('input[name="quantity"]').val();
  var qtyDirection = $(this).data("direction");
  var newQty = 0;
  
  if (qtyDirection == "1") {
    newQty = parseInt(currentQty) + 1;
  }
  else if (qtyDirection == "-1") {
    newQty = parseInt(currentQty) - 1;
  }

  // make decrement disabled at 1
  if (newQty == 1) {
    $(".decrement-quantity").attr("disabled", "disabled");
  }
  
  // remove disabled attribute on subtract
  if (newQty > 1) {
    $(".decrement-quantity").removeAttr("disabled");
  }
  
  if (newQty > 0) {
    newQty = newQty.toString();
    $('input[name="quantity"]').val(newQty);
  }
  else {
    $('input[name="quantity"]').val("1");
  }
});

// slider
$(document).ready(function(){
    $(".img1").click(function(){
         $(".item1").css("display", "block");
      $(".item2").css("display", "none");
	  $(".item3").css("display", "none");
         $(".item4").css("display", "none");
    });
});
$(document).ready(function(){
    $(".img2").click(function(){
         $(".item2").css("display", "block");
      $(".item1").css("display", "none");
	  $(".item3").css("display", "none");
         $(".item4").css("display", "none");
    });
});
$(document).ready(function(){
    $(".img3").click(function(){
         $(".item3").css("display", "block");
      $(".item2").css("display", "none");
	  $(".item1").css("display", "none");
         $(".item4").css("display", "none");
    });
});
$(document).ready(function(){
    $(".img4").click(function(){
         $(".item4").css("display", "block");
      $(".item2").css("display", "none");
	  $(".item3").css("display", "none");
         $(".item1").css("display", "none");
    });
});
