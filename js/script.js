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

const $main = $("<main></main>").appendTo("body");
$main.css("maxWidth", "700px");
$main.css("margin", "0 auto");

async function getApi () {
    return fetch("https://api.kanye.rest")
        .then(response => response.json())
        .then(data => data.quote)
}

getApi()

const $ul = $("<ul></ul>").appendTo("main");
$ul.css("listStyle", "none");

async function useApi () {
    const $sentence = await getApi();

    const $li = $(`<li>${$sentence}</li>`).appendTo("ul");
    $li.addClass("allLi");
    $li.css("padding", "2rem");
    $li.css("border", "1px solid black");
    $li.css("textAlign", "center");
    $li.css("display", "flex");
    $li.css("flexDirection", "column");

    const $up = $(`<button>up</button>`).appendTo("li");
    $up.addClass("allUp");
    $up.css("width", "2rem");
    $up.css("left", "38.2rem")
    $up.css("position", "relative");
    $up.css("bottom", "1rem");

    const $down = $(`<button>down</button>`).appendTo("li");
    $down.addClass("allUp");
    $down.css("width", "3rem");
    $down.css("left", "37.7rem")
    $down.css("position", "relative");
    $down.css("bottom", "1rem");

   $("ul").each(function() {
       $(this).css("listStyle", "none");
   });
}

useApi()