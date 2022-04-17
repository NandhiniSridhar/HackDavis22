//alert("hello");

"use: strict"

function getInfo(){
    text = document.getElementById("text_input");
    console.log(text.value);
    url = 'https://api.edamam.com/api/nutrition-data?app_id=912b689e&app_key=%209398e2a012f26a313d77e69893220af0%09&nutrition-type=logging&ingr=' + text.value

    res = getData(url);
    //console.log(res);
    document.getElementById("new_text").innerHTML = res;
    

}

function getData(url){
    fetch(url)
	    .then(response => response.json())
	    .then(response => console.log(response))
        .then(response => {return response})
        //.then(console.log(response.properties.uri))
        //.then(response => parseRes(response))
	    .catch(err => console.error(err));
}


/*const options = {
	method: 'GET',
	headers: {
        'app-id': '79ca7dc5',
        'app-key' : '11cf3e5c5d24b265ac3610e11916ba75',
        'ingr': 'apple'
        //id: 912b689e
        //key: 9398e2a012f26a313d77e69893220af0	
        
        
		
	}
};

fetch('https://api.edamam.com/api/nutrition-data?app_id=912b689e&app_key=%209398e2a012f26a313d77e69893220af0%09&nutrition-type=logging&ingr=peanut%20butter', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

*/    