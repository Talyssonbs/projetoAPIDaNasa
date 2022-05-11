/* Apod GET https://api.nasa.gov/planetary/apod */
/* $ (“p”). click () */
$("#pesquisar").click(function () {
    const data = $("data").val()
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=dwlJTi9HjQnBiFakRKDldBivQUBi2gQax7v0929X&date=${data}`,
        success: function (integrar) {
            $
        }
    })
})