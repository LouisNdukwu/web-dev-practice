console.log("Javascript is connected!");
console.log("Hello CSC 2001!");
console.log(5 + 5);
console.log("My JavaScript file works.")

const studentName = "Jordan";
let points = 10;
const submitted = true;
points = 15;

console.log(studentName);
console.log(points);
console.log(submitted);
console.log(points); 

const teacherName ="Dr Tawose";
let point = 20;
const submit = false;

console.log(teacherName);
console.log(point);
console.log(submit);


function welcomeUser(name){
    console.log("Welcome to the website, " + name + "!");
}
welcomeUser("Louis");
welcomeUser("Kingston");

const message =
    document.getElementById("message");

console.log(message);

message.textContent = "JavaScript Changed this!";



const button = document.getElementById("message-Button");

button.addEventListener("click", function(){
    message.textContent =
        "You're officially using JavaScript!";
});

const studentInfo =
    document.getElementById("studentInfo");

console.log(studentInfo);

studentInfo.textContent = "My name is Jordan and I am a student at Seneca College.";

