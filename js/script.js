console.log('NPM-GRUNT');

$(document).ready(function(){
  $('body').click(function(){
    $(this).css('background','red');
  });
});

$(document).ready(function(){
	// accessing key from json file
	var myKey = JSON.parse(apiKey);
	console.log(myKey[0]);
	myKey = myKey[0].key;
	console.log(myKey);

//
	$.ajax({
	  url : `http://newsapi.org/v2/top-headlines?country=us&apiKey=${myKey}`,
		type :'GET',
		data :'json',
		success:function(data){
			console.log(data);

        var o = data.articles[0].title;
        var a = data.articles[0].author;
        console.log(o);
        console.log(a);

      var i;
      // for (i = 0; i < data.articles.length; i++) {
      //
      // document.getElementById('result').innerHTML +=
      // '<div class="col col-sm-6 col-md-3 col-lg-3">' +
      // '<img class="img-thumbnal w-50" src="' + data.photos[i].img_src + '"></img>' +
      // '<p>ID: ' + data.photos[i].id + '</p>' +
      // '<p>Date: ' + data.photos[i].earth_date + '</p>' +
      // '</div>'
      // for (i = 0; i < data.features.length; i++) {
      //   for (j = 0; j < data.features[i].geometry.coordinates.length; j++) {
      //     console.log(data.features[i].geometry.coordinates);
        // }
      // }
      // }
    },
    error:function(){
		console.log('error');
		}

	});//ajax
}); //document ready
