$(document).ready(function() {

//here the variable is taking the api key from the JSON file in order to use it later to get data.
  var myKey = JSON.parse(apiKey);
  myKey = myKey[0].key;



  // #submit is the ID taken from index.html file for the submit  button
  $('#submit').on('click', function(e) {
    // created a variable for country and catergory the
    var country = $('#country option:selected').val();
    var category = $('#category option:selected').val();
    var searchTerm = $('#search-term').val();
    showNewsArticles(country, category, searchTerm);
  });

  function showNewsArticles(country,category, searchTerm) {
    // Url from NewsAPI.org - specifically targeted country and category to get the specific data
    var url;
    if(searchTerm !== '') {
      url = `http://newsapi.org/v2/top-headlines?q=${searchTerm}&country=${country}&category=${category}&apiKey=${myKey}`;
    } else {
      url = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${myKey}`;
    }

    console.log('The url is %s', url);


    // ajax method is used to call the requested data from the newaAPI URL.
    $.ajax({
      url : url,

      type :'GET',
      data :'json',
      success:function(data){
        $('#api-results').empty();

        // here we are targeting the data and pulling from it are the articlesrelated to the chosen results from the country and catergory chosen..
        if(data.articles.length > 0) {
          $('#api-results').html(`<div class="mt-2 my-5">`);

          // styled data on bootstrap card
          for(var i = 0; i < data.articles.length; i++) {
            $('#api-results').append(
              '<div class="card col col col-sm-6 col-md-3 col-lg-3 mt-3 mx-3">'+
                `<img src="` + data.articles[i].urlToImage + `" class="card-img-top" alt="...">`+
                '<div class="card-body">'+
                  `<h5 class="card-title">` + data.articles[i].title + `</h5>`+
                  `<p class="card-text">` + data.articles[i].description + `</p>`+
                '</div>'+
              '</div>'
            );
          }
          $('#api-results').append('</div>');
        } else {
          $('#api-results').html('There are no results.');
        }
      }
    });
  }
});
