/* function openTab(evt, cityName)
{
  
}NEED TO GET CSS AND PNG FILES IN THE GIT
*/
console.log(1);
const startB = document.getElementById("addItem");
startB.addEventListener("click", add); //on click it runs add
//set("amtUnit", "Enter an Amount");
var text = "";

function add() {
    const amount = document.querySelector(".amt").value;
    const measurement = document.querySelector(".amtUnit").value;
    const food = document.querySelector(".item").value;
    if (!amount || !measurement || !food) {
        exit; //want to also have a text with hidden and remove the hidden to say there was an error
    } //checks for bad inputs
    //also would want to try catch to make sure it wont mess with back end
    text = text + " " + amount + " " + measurement + " of " + food;
    document.getElementById("foodList").innerHTML = text;

    setText("amt", " ");
    setText("amtUnit", "Enter a unit");
    // setText("item", " ");
    //console.log(amount + " " + measurement);
}

function setText(piece, text) {
    document.querySelector("." + piece).value = text;
}