/* function openTab(evt, cityName)
{
  
}
*/

const startB = document.getElementById("addItem");
startB.addEventListener("click", add); //on click it runs add

function add() {
    amount = document.querySelector(".amt").value;
    measurement = document.querySelector(".amtUnit").value;
    food = documet.querySelector(".item").value;
    document.getElementById("foodList").innerHTML =
        amount + " " + measurement + " of " + food;
}