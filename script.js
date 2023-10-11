var xhr = new XMLHttpRequest();
var url = "https://archive.org/advancedsearch.php?q=%22beat+generation%22++mediatype%3Atexts&fl%5B%5D=creator&fl%5B%5D=description&fl%5B%5D=identifier&fl%5B%5D=publisher&fl%5B%5D=title&sort%5B%5D=&sort%5B%5D=&sort%5B%5D=&rows=500&page=1&output=json&callback=?";
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState == 4){
        console.log(xhr.response);
    }
};
xhr.open("GET", url);
xhr.send();
console.log(xhr);
