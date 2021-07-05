$.ajax({
    url: "https://api.unsplash.com/search/photos?query=business&per_page=6&page=1&client_id=DmW72FElDGtoxWmNPLUnGV_Lfoxj3HWrdIA8gVFGTgc",
    type: 'GET',
    success: function(res) {

        var imageList = res.results;

        $.each(imageList, function (i, val) {
            var imageURL = val.urls.regular;
                $('.photos').append(
                    '<img src="' + imageURL + '">'
                );
        });
    }
});