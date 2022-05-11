/* Apod GET https://api.nasa.gov/planetary/apod */
/* $ (“p”). click () */
$("#pesquisar").click(function () {
    const dia = $("#data").val();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=mAiNZGEMKAUK6JGFaiUXHQsvt37EAgf4iH13zPnQ&date=${dia}`,
        success: function (integrar) {
            console.log(integrar);
            /*  $("#titulo").text(integrar.title); */
        },
        error: function (erro) {
            console.log(erro);
        },
    });
});