$('img').css({ 'padding': '10px' })
function getGif(chosen) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + chosen + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        $(".gif-div").empty();

        for (var i = 0; i < results.length; i++) {
            // this gives me moving images
            var imgDiv = $('.gif-div')
            var picURL = results[i].images.downsized_medium.url
            var rating = $("<p>").text("Rating: " + results[i].rating)
            var image = $('<img>')
            image.attr('src', picURL)


            // console.log(rating)
            imgDiv.append(image)
            imgDiv.append(rating)


            $('.gif-div').append(imgDiv)


            // var testing = $('.gif-div').append(`<img src=${picURL} + />` + rating);









            // //this is for still images

            // var still = $(this).attr('still')
            // var picURL2 = results[i].images.original_still.url
            // // console.log(picURL2)

            // $('.gif-div').on('click', function () {

            //     if (still === 'still') {
            //         console.log('testing')
            //     } else {
            //         console.log('clicked')
            //         $('.gif-div').append(`<img src=${picURL} + />`);
            //     }

            // })

            // $('.gif-div').append(`<img src=${picURL2} + />`);


        }
    })



}

    // var newButton = $('<button>').addClass('button')

$('#select-gif').on('click', function (e) {
    e.preventDefault();
    var inputGif = $('#gif-input').val().trim();
    // $('.button-list').append(newButton)
    $('.gif-input').val('')
    getGif(inputGif)
})

$('.button').on('click', function (e) {
    var myGif = $(this).attr('my-gif')
    getGif(myGif)

})




// // this function will animate the 'still' gif
// $('.gif-div').on('click', function () {
//     // this gives you still image
//     var picURL = data.results[i].images.original_still.url
//         ('.gif-div').append(`<img src=${picURL} + />`);

//     console.log("testing")
// })
