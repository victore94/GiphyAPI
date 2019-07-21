




function getGif(chosen) {
    // var testing = $("#form-value").val()
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + chosen + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    // var queryURL = "https://api.giphy.com/v1/gifs/trending?q=&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // var results = response.data
        // for (var i = 0; i < results.length; i++) {

        // pic = results[i].images.downsized_medium.url
        // var pic = response.data[0].images.downsized_medium.url

        // $('#imghere').append(`<img src=${pic} />`)

        // }
        var gifImage = $('<h1>').append(`<img src=${response.data[3].images.downsized_medium.url} />`)


        // $('#gif-div').empty()
        $('#gif-div').html(gifImage)

    })
}


$('#select-gif').on('click', function(e){
    e.preventDefault();

    var inputGif = $('#gif-input').val().trim();

    console.log(e)
    getGif(inputGif)

})




// $("#select-gif").on("click", function (e) {
//     e.preventDefault();

//     var testing = $('#gif-input').val()
//     console.log(testing)
// })


