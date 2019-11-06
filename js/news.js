$( document ).ready(function() {
    loadData();
});



function loadData(){

    $.ajax({
            type:"GET",
            url:"https://newsapi.org/v1/sources",
            dataType:"json",
            success: parseData
});


}

function parseData(data){
  console.log(data);

  var sources = [];

  var tempPath = data["sources"];

  var html = "";

  for (var i = 0, len = tempPath.length; i < len; ++i) {
    sources.push(tempPath[i]);
    console.log(sources[0]["name"]);

    html += '<li><a href="#" onclick="loadArticles(\''  + sources[i]["id"] + '\')">' + sources[i]["name"] + '</a></li>';

  }

$("#sources-area").html(html);

}

function loadArticles(source) {
  console.log(source);

  $.ajax({
    type: "GET",
    url: "https://newsapi.org/v1/articles?source=" + source + "&apiKey=08e18fce79144d9db58eebdd3b05e55b",
    dataType: "json",
    success: parseArticles
  });
}

function parseArticles(data) {
  console.log(data);

  var articles = [];

  var tempPath = data["articles"];

  var html = "";

  for (var i = 0, len = tempPath.length; i < len; ++i) {
    articles.push(tempPath[i]);
    console.log(articles[i]["title"]);
    console.log(tempPath[i]["title"])

    html += '<div><h3><a href="' + articles[i]["url"] + '">' + articles[i]["title"] + '</a></h3><div';
    html += '<p>' + articles[i]["description"] + '</p>';

  }

  $("#feed-area").html(html);
  console.log(html);
}
