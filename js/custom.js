let from;
let to;

submit.addEventListener("click",(e)=>{
    getRoute(From.value, To.value);
    e.preventDefault();
    
})

const getRoute = (from,to) => {let route = [    
    {
      "t": ""
    },
    {
      "t": ""
    }
  ];

route[0].t=from;
route[1].t=to;
route = JSON.stringify(route)
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd650782490msh99fd64bed5c9badp125aacjsna7568fd3cad5',
		'X-RapidAPI-Host': 'distanceto.p.rapidapi.com'
	}
};
fetch(`https://distanceto.p.rapidapi.com/get?route=${route}`,options)
.then(response => response.json())
.then((response)=>{console.log(response.steps[0].distance);
  document.getElementById("distance").innerHTML=`Distance from ${From.value} to  ${To.value}: ${(Number((response.steps[0].distance.haversine).toFixed(2)) + Number((response.steps[0].distance.haversine)/10.1 )).toFixed(2)} Kilometers.` 
  let price=response.steps[0].distance.haversine;
  flightPrice.innerHTML=`Price: ${(price*12).toFixed(0)}`;
  trainPrice.innerHTML=`Price: ${(price*6).toFixed(0)}`;  
  cabPrice.innerHTML=`Price: ${(price*8).toFixed(0)}`;    
}).catch (console.error()); 
 }