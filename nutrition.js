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

    document.getElementById("calories").innerHTML = "Calories:" + Number( res.calories.toPrecision(3) );
    document.getElementById("fat").innerHTML = "Fat: " + Number( res.totalDaily.FAT.quantity.toPrecision(3) );
    document.getElementById("carbs").innerHTML = "Carbs:" + Number( res.totalDaily.CHOCDF.quantity.toPrecision(3) );
    document.getElementById("proteins").innerHTML = "Protein: " + Number( res.totalNutrients.PROCNT.quantity.toPrecision(3) );
    document.getElementById("fiber").innerHTML = "Fiber: " + Number( res.totalNutrients.FIBTG.quantity.toPrecision(3) );


    //console.log(Object.keys(res));
    // document.getElementById("new_text").value = "";

    // let calories = document.createElement('p')
    // let cal= Number( res.calories.toPrecision(3) );
    // calories.innerHTML = "calories: " + cal;

    // let fat = document.createElement('p');
    // let f= Number( res.totalDaily.FAT.quantity.toPrecision(3) );
    // fat.innerHTML = "fat: " + f;

    // let carbs = document.createElement('p')
    // let carb = Number( res.totalDaily.CHOCDF.quantity.toPrecision(3) );
    // carbs.innerHTML = "carbs: " + carb;



    // document.getElementById("new_text").appendChild(calories);
    // document.getElementById("new_text").appendChild(fat);
    // document.getElementById("new_text").appendChild(carbs);
    


    
    
}
