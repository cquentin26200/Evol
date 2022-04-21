$("body").css("margin", "0");

const $header = $("<header></header>").appendTo('body');
$header.css("background", "#40a0ff");
$header.css("textAlign", "center");
$header.css("padding", "2rem");
$header.css("textTransform", "uppercase");

const $title = $("<h1>kanye west</h1>").appendTo('header')
$title.css("marginTop", "0");

const $paragraphInHeader = $("<p>welcome to the best quote app</p>").appendTo('header');

const $buttonInHeader = $("<button>add quote</button>").appendTo('header');
$buttonInHeader.css("textTransform", "uppercase");