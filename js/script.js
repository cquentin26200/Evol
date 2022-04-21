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

    const $li = $("<li></li>").appendTo("ul");
    $li.addClass("allLi");
    $li.css("padding", "2rem");
    $li.css("border", "1px solid black");

    const $secondUl = $("<ul></ul>").appendTo("li");
    $secondUl.addClass("secondUl");

    const $quote = $(`<li>${$sentence}</li>`).appendTo(".secondUl");
    $quote.addClass("quotes");

    const $thirstUl = $("<ul></ul>").appendTo(".allLi");
    $thirstUl.addClass("thirstUl");
    $thirstUl.css("display", "flex");
    $thirstUl.css("flexDirection", "column");
    $thirstUl.css("alignItems", "center");
    $thirstUl.css("marginLeft", "36.7rem");

    const $up = $(`<button>up</button>`).appendTo(".thirstUl");
    $up.addClass("allUp");

    const $down = $(`<button>down</button>`).appendTo(".thirstUl");
    $down.addClass("allUp");

    
}

useApi()