$("h1").css("color","white");

$("h1").addClass("big-title");

$("button").text("Do not click me!");

$("img").attr("src","images/crash.png");
$("img").attr("alt","symbols");

$("a").attr("href", "https://www.yahoo.com");

$("h1").before("<button>New1</button>");
$("h1").after("<button>New2</button>");
$("h1").prepend("<button>New3</button>");
$("h1").append("<button>New4</button>");

$("button").click(function() {
  $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
  console.log(event.key);
});

$(document).keypress(function(event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover",function() {
  $("h1").css("color", "green");
});

$("button").click(function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
