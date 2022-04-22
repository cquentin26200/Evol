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

    $up.on("click", function () {
        const $tmp = $(this).parent().children().html();
        console.log($(this).parent().children().eq(0).text($(this).parent().prev().children().html()))
        console.log($(this).parent().prev().children().eq(0).text($tmp))
    })

   

    const $down = $(`<button>down</button>`)
    $down.addClass("allUp");
    $down.css("width", "3rem");
    $("li").last().append($down)

   $("ul").each(function() {
       $(this).css("listStyle", "none");
   });

   $("main button").each(function() {
       $(this).css("position", "relative");
       $(this).css("bottom", "1rem")
       $(this).css("left", "37.7rem");
   })   
}

$("header button").on("click", useApi);
