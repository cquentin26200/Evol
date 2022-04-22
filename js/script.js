async function getApi () {
    return fetch("https://api.kanye.rest")
        .then(response => response.json())
        .then(data => data.quote)
}

getApi()

const $main = $("main");

const $ul = $("<ul></ul>").appendTo("main");
$ul.css("listStyle", "none");

async function useApi () {
    const $sentence = await getApi();

    const $li = $(`<li><span>${$sentence}</span></li>`).appendTo("ul");
    $li.addClass("allLi");
    $li.css("padding", "2rem");
    $li.css("border", "1px solid black");
    $li.css("textAlign", "center");
    $li.css("display", "flex");
    $li.css("flexDirection", "column");

    const $up = $(`<button>up</button>`)
    $up.addClass("allUp");
    $up.css("width", "2rem");
    $("li").last().append($up)

    
}

$("header button").on("click", useApi);
