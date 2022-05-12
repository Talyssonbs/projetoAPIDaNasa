$("#pesquisar").click(function (event) {
    event.preventDefault(event);
    const dia = $("#data").val();
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=mAiNZGEMKAUK6JGFaiUXHQsvt37EAgf4iH13zPnQ&date=${dia}`,
        success: function (integrar) {
            console.log(integrar)
            $("#titulo").text(integrar.title)
            $("#descri").text(integrar.explanation)
            if (integrar.media_type === "image") {
                $("#imagem").attr("src", integrar.url);
                $("#imagem").show();
                $("#video").hide();

            } else {
                $("#video").attr("src", integrar.url);
                $("#video").show();
                $("#imagem").hide();
            }
        },
        error: function (erro) {
            console.log(erro);
        },
    });
});