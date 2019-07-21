function getGif(chosen) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + chosen + "&&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var i = 0; i < results.length; i++) {
            var picURL = results[i].images.downsized_medium.url
            $('#gif-div').append(`<img src=${picURL} + />`);
        }
    })
}


$('#select-gif').on('click', function (e) {
    e.preventDefault();

    var inputGif = $('#gif-input').val().trim();
    getGif(inputGif)
})



$('.button').on('click', function(e){
  var myGif = $(this).attr('my-gif')
  console.log(myGif)
getGif(myGif)
})


