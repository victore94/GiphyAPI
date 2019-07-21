




function getGif(chosen) {
    // var testing = $("#form-value").val()
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + chosen + "&&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    // var queryURL = "https://api.giphy.com/v1/gifs/trending?q=&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var results = response.data
        for (var i = 0; i < results.length; i++) {

            var picURL = results[i].images.downsized_medium.url
            console.log(picURL)



            // $('#gif-div').empty();
            $('#gif-div').append(`<img src=${picURL} />`);

            // $('#gif-div').html(gifImage)



            // // var picture = response.data[i].images.downsized_medium.url



            // // var gifImage = $('<h1>').append(`<img src=${picture} />`)
            // $('#gif-div').html(gifImage)

            // pic = results[i].images.downsized_medium.url
            // var pic = response.data[0].images.downsized_medium.url



        }
        // $('#gif-div').empty()
        //  $('#gif-div').append(`<img src=${pic} />`)
        // $('#gif-div').empty()

    })
}


$('#select-gif').on('click', function (e) {
    e.preventDefault();

    var inputGif = $('#gif-input').val().trim();

    getGif(inputGif)

})




// $("#select-gif").on("click", function (e) {
//     e.preventDefault();

//     var testing = $('#gif-input').val()
//     console.log(testing)
// })


