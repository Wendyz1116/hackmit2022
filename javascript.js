/* function openTab(evt, cityName)
{
  
}NEED TO GET CSS AND PNG FILES IN THE GIT
*/
console.log(1);
const startB = document.getElementById("addItem");
startB.addEventListener("click", add); //on click it runs add
//set("amtUnit", "Enter an Amount");
var text = "";
const itemArray = [];
const amtArray = [];
const unitArray = [];

function add()
{
    const food = document.querySelector(".item").value;
    itemArray.push(food);
    const amount = document.querySelector(".amt").value;
    amtArray.push(amount);
    const unit = document.querySelector(".amtUnit").value;
    unitArray.push(unit);
    
    if (!amount || !unit || !food) {
        exit; //want to also have a text with hidden and remove the hidden to say there was an error
    } //checks for bad inputs
    //also would want to try catch to make sure it wont mess with back end
    text = text + "<br/>" + amount + " " + unit + " of " + food + "<br/>";
    document.getElementById("foodList").innerHTML = text;
    

    setText("item", "");
    setText("amt", "");
    console.log(itemArray);
    console.log(amtArray);
    console.log(unitArray);
    //console.log(amount + " " + measurement);
}

function setText(piece, text) {
    document.querySelector("." + piece).value = text;
}

