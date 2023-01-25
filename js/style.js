var defaultHeight = 20; // height when "closed"
var text = $(".text");
var textHeight = text[0].scrollHeight; // the real height of the element
var button = $(".button");

text.css({"max-height": defaultHeight, "overflow": "hidden"});

button.on("click", function(){
  var newHeight = 0;
  if (text.hasClass("active")) {
    newHeight = defaultHeight;
    text.removeClass("active");
  } else {
    newHeight = textHeight;
    text.addClass("active");
  }
  text.animate({
    "max-height": newHeight
  }, 500);
});