
let result;
const e = document.getElementById("result");

let time = document.getElementById("inputDate").value;
const urlKey = "https://api.nasa.gov/planetary/apod?api_key=41GRPyfbdyTdk4nZ0VUBeQh8c3yRSfdnw6QdktVw";
const url = urlKey + "&&date=" + "2019-03-04";
// "2019-03-04" is kind of a placeholder to test the fetch API since I haven't figured out 
// a way to get the input from the users to automatically append it to the urlKey every 
// time they type the date in the Input.

fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        const titleData = document.createTextNode(data.title);
        const dateData = document.createTextNode(data.date);
        const explainData = document.createTextNode(data.explanation);
        document.getElementById("name").appendChild(titleData); 
        document.getElementById("time").appendChild(dateData);
        document.getElementById("pic").src = data.url;       
        document.getElementById("explain").appendChild(explainData);
        // result = data;
        // display();
    })
    .catch(function(error){
        console.log(error);
    });

function display(){
    if (e.style.display == 'block'){
        e.style.display = 'none';
    }
    //To do: make this function display the result every time users click on the Button.

    updateDisplay();
    console.log(result);
}

function updateDisplay(){
    if (result.length == 0){

    } else {
        let name = document.createElement("h2");
        let date = document.createElement("h3");
        let image = document.createElement("img");
        let explanation = document.createElement("p");
    }

    //To do: create HTML elements to put in "result" div
}

function toggleVisibility() {
    
    if (e.style.display == 'block'){
        e.style.display = 'none';
    } else {
        e.style.display = 'block';
    }
}

// function getValue(){
//     const dateInput = document.getElementById("input").value;
//     time = dateInput;
//     console.log(dateInput);
    
// }






// var req = new XMLHttpRequest();


// req.open("GET", url + apiKey);
// req.responseType = "json";
// req.onload = e => console.log(e.target.response);
// req.send();

// var response = await fetch(url + apiKey);
// const data = await response.json();
// console.log(data);

// req.addEventListener("load", function() {
//     if (req.status == 200 && req.readyState == 4){
        
//         document.getElementsByClassName("name").textContent = response.title;
//         document.getElementsByClassName("time").textContent = response.date;
//         document.getElementsByClassName("pic").src = response.hdurl;
//         document.getElementsByClassName("explain").textContent = response.explanation;
//     }
// })
// let res = JSON.parse(response);
// console.log(res)
// if (xhr.readyState == 4 && xhr.status == 200){

// }

