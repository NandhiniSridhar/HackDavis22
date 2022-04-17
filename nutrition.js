//alert("hello");

"use: strict"
function getData(url){
    fetch(url)
	    .then(response => response.json())
	    //.then(response => console.log(response))
        .then(response => console.log(typeof response))
        .then(reponse => console.log(Object.keys(reponse)))
        .then(response => {return response})
        //.then(console.log(response.properties.uri))
        //.then(response => parseRes(response))
	    .catch(err => console.error(err));
}


function getInfo(){
    text = document.getElementById("text_input");
    console.log(text.value);
    url = 'https://api.edamam.com/api/nutrition-data?app_id=912b689e&app_key=%209398e2a012f26a313d77e69893220af0%09&nutrition-type=logging&ingr=' + text.value

    res = getData(url);
    //console.log(res);
    //console.log(Object.keys(res));
    document.getElementById("new_text").innerHTML = res;
    
}