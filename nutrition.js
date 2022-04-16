alert("hello");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
		'X-RapidAPI-Key': '2a1ad55898msha28ae10339ee171p12f459jsn10d1955ad4ad'
	}
};

fetch('https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=1%20large%20apple', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));