const myName = "Will";

let visits = 0;

console.log(visits, myName);

function showGreeting(){
    const elementChange = document.getElementById("greeting");
    elementChange.textContent = "Welcome " + myName;
}

showGreeting();

let date = new Date().getHours();

if(date < 12){
    console.log("Good morning " + myName);
}else if(date >= 12 && date < 18){
    console.log("Good afternoon " + myName);
}else{
    console.log("Good evening " + myName);
}

const features = ["Fast", "Simple", "Fun"];


features.forEach((feature) => {
    console.log(feature)
});

const themeChangeBtn = document.getElementById("themeBtn");
themeChangeBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = "lightblue";
}); 