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
		'X-RapidAPI-Key': 'ae1bbe7891msh2cd635a1a5633d5p1fd007jsnbc7e4e6a0088',
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