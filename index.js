/* Apod GET https://api.nasa.gov/planetary/apod */
/* $ (“p”). click () */
$("#pesquisar").click(function () {
    const dia = $("#data").val();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=mAiNZGEMKAUK6JGFaiUXHQsvt37EAgf4iH13zPnQ&date=${dia}`,
        success: function (integrar) {
            console.log(integrar)
            $("#titulo").text(integrar.title)
            $("#descri").text(integrar.explanation)
            if (integrar.media_type === "imagem") {
                $("#imagem").attr("src", integrar.url);
                $("#imagen").show();
            } else {
                $("#video").attr("src", integrar.url);
                $("#video").show();
            }
        },
        error: function (erro) {
            console.log(erro);
        },
    });
});