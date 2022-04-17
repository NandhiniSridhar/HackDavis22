//alert("hello");

"use: strict"

function getInfo(){
    text = document.getElementById("text_input");
    console.log(text.value);

    fetch('https://api.edamam.com/api/nutrition-data?app_id=912b689e&app_key=%209398e2a012f26a313d77e69893220af0%09&nutrition-type=logging&ingr=' + text.value)
	    .then(response => response.json())
	    .then(response => console.log(response))
        .then(function(response){
            console.log(response.calories)
            //JSON.parse(response)
        })
        //.then(console.log(response))
        //.then(response => parseRes(response))
	    .catch(err => console.error(err));

}

function display(jsonRes){
    console.log(jsonRes.totalDaily[0]);
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