//alert("hello");

"use: strict"


function getData(url){
    return fetch(url)
	    .then(response => response.json())
	    // .then(response => console.log(response))
        // .then(response => console.log(typeof response))
        // .then(reponse => console.log(Object.keys(reponse)))
        //.then(response => {return response})
        //.then(console.log(response.properties.uri))
        //.then(response => parseRes(response))
	    .catch(err => console.error(err));
}


async function getInfo(){
    text = document.getElementById("text_input");
    console.log(text.value);
    url = 'https://api.edamam.com/api/nutrition-data?app_id=912b689e&app_key=%209398e2a012f26a313d77e69893220af0%09&nutrition-type=logging&ingr=' + text.value

    // getData(url).then((res) => {
    //     console.log(res);
    //     //console.log(Object.keys(res));
    //     document.getElementById("new_text").innerHTML = res.healthLabels;
    // });

    res = await getData(url);
    console.log(res);
    //console.log(Object.keys(res));

    let fat = document.createElement('p');
    fat.innerHTML = "fat: " + res.totalDaily.FAT.quantity;

    let carbs = document.createElement('p')
    carbs.innerHTML = "carbs: " + res.totalDaily.CHOCDF.quantity;

    document.getElementById("new_text").appendChild(fat);
    document.getElementById("new_text").appendChild(carbs);

    
    
}