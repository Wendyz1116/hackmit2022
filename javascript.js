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
const carbonArray = [];
const waterArray = [];
const inRecipe = [];
var listInd = 0;
var totalW = 0;
var totalC = 0;

const foodData = [{
        item: "Acorn Squash",
        water: 336.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Almonds (shelled or peeled)",
        water: 16095.0,
        carbon: 1.89,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Almonds (with shell)",
        water: 8040.0,
        carbon: 1.89,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Animal Fats",
        water: null,
        carbon: 38.0,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Anise (seeds)",
        water: 8280.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Apple Juice",
        water: 1141.0,
        carbon: null,
        UnitWeight: null,
        Density: 1048.0,
    },
    {
        item: "Apples",
        water: 822.0,
        carbon: 0.55,
        UnitWeight: 6.8,
        Density: null,
    },
    {
        item: "Apricots",
        water: 1287.0,
        carbon: 0.23,
        UnitWeight: 1.2,
        Density: null,
    },
    {
        item: "Aquatic Plants",
        water: null,
        carbon: 0.0,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Arctic Char (fish)",
        water: null,
        carbon: 18.39,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Artichokes",
        water: 818.0,
        carbon: 0.26,
        UnitWeight: 13.0,
        Density: null,
    },
    {
        item: "Asparagus",
        water: 2150.0,
        carbon: 0.88,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Avocados",
        water: 1981.0,
        carbon: null,
        UnitWeight: 6.0,
        Density: null,
    },
    {
        item: "Baby Back Ribs",
        water: 5990.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Bacon",
        water: 6238.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Bananas",
        water: 790.0,
        carbon: 0.27,
        UnitWeight: 4.2,
        Density: null,
    },
    {
        item: "Barley",
        water: 1423.0,
        carbon: 3.8,
        UnitWeight: null,
        Density: 600.0,
    },
    {
        item: "Basil",
        water: 322.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Beans",
        water: 561.0,
        carbon: 0.8,
        UnitWeight: null,
        Density: 700.0,
    },
    {
        item: "Beans (dry)",
        water: 5053.0,
        carbon: null,
        UnitWeight: null,
        Density: 700.0,
    },
    {
        item: "Beef",
        water: 15414.0,
        carbon: 27.0,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Beef (Bovine Meat)",
        water: 15415.0,
        carbon: 68.8,
        UnitWeight: null,
        Density: null,
    },
    { item: "Beer", water: 298.0, carbon: 0.38, UnitWeight: null, Density: null },
    {
        item: "Craft Beer",
        water: null,
        carbon: 3.8,
        UnitWeight: null,
        Density: null,
    },
    { item: "Beets", water: null, carbon: 0.05, UnitWeight: 4.0, Density: 760.0 },
    {
        item: "Bell Peppers",
        water: 379.0,
        carbon: 0.26,
        UnitWeight: 6.0,
        Density: null,
    },
    {
        item: "Bitter Melon",
        water: null,
        carbon: 0.12,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Black Beans",
        water: 5053.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Black-Eyed Peas (Cowpeas)",
        water: 6906.0,
        carbon: 0.56,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Blackberries",
        water: 962.0,
        carbon: 0.28,
        UnitWeight: 0.09,
        Density: null,
    },
    {
        item: "Blood Oranges",
        water: null,
        carbon: 0.17,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Blueberries",
        water: 845.0,
        carbon: 0.78,
        UnitWeight: 0.02,
        Density: null,
    },
    {
        item: "Bok Choy",
        water: 280.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Boysenberries",
        water: null,
        carbon: 0.2,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Bread",
        water: 1608.0,
        carbon: 0.83,
        UnitWeight: 16.0,
        Density: null,
    },
    {
        item: "Broad Beans",
        water: 2018.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Broccoli",
        water: 285.0,
        carbon: 2.0,
        UnitWeight: 8.0,
        Density: null,
    },
    {
        item: "Brown Rice",
        water: null,
        carbon: 2.16,
        UnitWeight: null,
        Density: 580.0,
    },
    {
        item: "Brussels Sprouts",
        water: 285.0,
        carbon: 0.26,
        UnitWeight: 0.5,
        Density: null,
    },
    {
        item: "Buckwheat",
        water: 3142.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Butter",
        water: 5553.0,
        carbon: 1.17,
        UnitWeight: 4.0,
        Density: 911.0,
    },
    {
        item: "Buttermilk",
        water: 1599.0,
        carbon: null,
        UnitWeight: null,
        Density: 1031.0,
    },
    {
        item: "Butternut Squash",
        water: 336.0,
        carbon: null,
        UnitWeight: 40.0,
        Density: null,
    },
    {
        item: "Cabbage",
        water: 280.0,
        carbon: 0.12,
        UnitWeight: 16.0,
        Density: null,
    },
    {
        item: "Canola Oil / Rapeseed Oil",
        water: 4301.0,
        carbon: 1.7,
        UnitWeight: null,
        Density: 920.0,
    },
    {
        item: "Cantaloupe",
        water: 962.0,
        carbon: 0.14,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Cardamom",
        water: 34319.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Carob",
        water: 5594.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Carp (fish)",
        water: null,
        carbon: 5.3,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Carrots",
        water: 195.0,
        carbon: 0.11,
        UnitWeight: 2.1,
        Density: null,
    },
    {
        item: "Cashews",
        water: 14218.0,
        carbon: 2.0,
        UnitWeight: null,
        Density: 560.0,
    },
    {
        item: "Castor Oil",
        water: 24740.0,
        carbon: null,
        UnitWeight: null,
        Density: 961.0,
    },
    {
        item: "Catfish",
        water: null,
        carbon: 9.34,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Catfish (fish)",
        water: null,
        carbon: 4.7,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Cauliflower",
        water: 285.0,
        carbon: 0.31,
        UnitWeight: 17.6,
        Density: null,
    },
    {
        item: "Celery",
        water: null,
        carbon: 0.12,
        UnitWeight: 16.0,
        Density: null,
    },
    {
        item: "Cephalopods (Squid)",
        water: null,
        carbon: 5.4,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Cereal",
        water: 1644.0,
        carbon: 1.8,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Cheese",
        water: 5060.0,
        carbon: 13.5,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Cherries",
        water: 1411.0,
        carbon: 0.78,
        UnitWeight: 0.18,
        Density: null,
    },
    {
        item: "Chestnuts",
        water: 2750.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Chicken",
        water: 4325.0,
        carbon: 6.9,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Chickpeas (Garbanzo Beans)",
        water: 4177.0,
        carbon: 0.64,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Chinese Cabbage",
        water: null,
        carbon: 0.09,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Chocolate",
        water: 17196.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Cilantro",
        water: null,
        carbon: 0.2,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Cinnamon",
        water: 15526.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    { item: "Citrus", water: null, carbon: 0.7, UnitWeight: null, Density: null },
    {
        item: "Cloves",
        water: 61205.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Cocoa Beans",
        water: null,
        carbon: 0.57,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Cocoa Butter",
        water: null,
        carbon: 1.13,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Cocoa Powder",
        water: 15636.0,
        carbon: 0.2,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Coconut Oil",
        water: 4490.0,
        carbon: 2.1,
        UnitWeight: null,
        Density: 946.79,
    },
    {
        item: "Coconuts",
        water: 2687.0,
        carbon: 2.1,
        UnitWeight: 24.0,
        Density: 330.0,
    },
    {
        item: "Cod (fish)",
        water: null,
        carbon: 5.25,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Coffee Beans",
        water: 18925.0,
        carbon: 1.66,
        UnitWeight: null,
        Density: 368.0,
    },
    {
        item: "Coriander (seeds)",
        water: 8280.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    { item: "Corn", water: 1222.0, carbon: 0.38, UnitWeight: 6.3, Density: null },
    {
        item: "Corn (kernels)",
        water: 1314.0,
        carbon: null,
        UnitWeight: null,
        Density: 720.0,
    },
    {
        item: "Corn Flour",
        water: 1253.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Corn Oil",
        water: 2575.0,
        carbon: 0.25,
        UnitWeight: null,
        Density: 946.79,
    },
    {
        item: "Corn Syrup",
        water: null,
        carbon: 0.33,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Cottage Cheese",
        water: null,
        carbon: 0.26,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Cranberries",
        water: 276.0,
        carbon: null,
        UnitWeight: 0.04,
        Density: null,
    },
    { item: "Cream", water: null, carbon: 0.14, UnitWeight: null, Density: null },
    {
        item: "Crustaceans (Crab)",
        water: null,
        carbon: 5.4,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Cucumbers",
        water: 353.0,
        carbon: 0.14,
        UnitWeight: 8.8,
        Density: null,
    },
    {
        item: "Dates",
        water: 2277.0,
        carbon: 1.1,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Demersal Fish",
        water: null,
        carbon: 5.4,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Duck",
        water: 4325.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Eggplant",
        water: 362.0,
        carbon: 0.51,
        UnitWeight: 3.0,
        Density: null,
    },
    {
        item: "Eggplant (Asian)",
        water: 362.0,
        carbon: 0.09,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Eggs",
        water: 3265.0,
        carbon: 2.38,
        UnitWeight: 1.75,
        Density: null,
    },
    {
        item: "Evaporated Milk",
        water: null,
        carbon: 2.52,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Fava Beans",
        water: 5053.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Fennel (seeds)",
        water: 8280.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Figs",
        water: 3350.0,
        carbon: 1.54,
        UnitWeight: 1.76,
        Density: null,
    },
    { item: "Fish", water: null, carbon: 1.12, UnitWeight: null, Density: null },
    {
        item: "Flatfish",
        water: null,
        carbon: 3.06,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Wheat Flour",
        water: 1849.0,
        carbon: 0.58,
        UnitWeight: null,
        Density: 600.0,
    },
    {
        item: "Freshwater Fish",
        water: null,
        carbon: 5.4,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Fruits",
        water: 967.0,
        carbon: 0.9,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Garlic",
        water: 589.0,
        carbon: 0.95,
        UnitWeight: 0.18,
        Density: null,
    },
    {
        item: "Garlic Powder",
        water: 2265.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Gherkins",
        water: 353.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Ginger",
        water: 1657.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Goat Meat (Mutton)",
        water: 8763.0,
        carbon: 64.2,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Goose",
        water: 4325.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Gooseberries",
        water: 526.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Gourds",
        water: 336.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Grapefruit",
        water: 506.0,
        carbon: 0.8,
        UnitWeight: 8.7,
        Density: null,
    },
    {
        item: "Grapes",
        water: 608.0,
        carbon: 0.82,
        UnitWeight: 0.18,
        Density: null,
    },
    {
        item: "Green Beans",
        water: 561.0,
        carbon: 0.44,
        UnitWeight: 0.18,
        Density: null,
    },
    {
        item: "Green Onions",
        water: 272.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Buckwheat Groats Meal",
        water: 2536.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Groundnut Oil",
        water: null,
        carbon: 0.9,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Groundnuts (Shelled)",
        water: null,
        carbon: 1.4,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Guava",
        water: 1800.0,
        carbon: 0.15,
        UnitWeight: 7.0,
        Density: null,
    },
    { item: "Ham", water: 5677.0, carbon: 9.31, UnitWeight: null, Density: null },
    {
        item: "Hash Browns/Fried Potatoes",
        water: null,
        carbon: 3.95,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Hazelnuts (shelled or peeled)",
        water: 10515.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Hazelnuts (with shell)",
        water: 5258.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Hempseed",
        water: 3685.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Herring",
        water: null,
        carbon: 1.23,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Honey",
        water: null,
        carbon: 1.0,
        UnitWeight: null,
        Density: 1420.0,
    },
    {
        item: "Honeydew Melon",
        water: null,
        carbon: 0.14,
        UnitWeight: 64.0,
        Density: null,
    },
    {
        item: "Hop Extract",
        water: 16259.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Horse Meat",
        water: 51779.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Ice Cream",
        water: null,
        carbon: 1.82,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Jalapeno Peppers",
        water: 379.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Jalape\u00f1o Peppers",
        water: 379.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    { item: "Kale", water: 322.0, carbon: null, UnitWeight: null, Density: null },
    {
        item: "Kefir",
        water: 1599.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Ketchup",
        water: 534.0,
        carbon: 2.3145,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Kidney Beans",
        water: 5053.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    { item: "Kiwi", water: 514.0, carbon: null, UnitWeight: 2.65, Density: null },
    {
        item: "Lamb",
        water: 5301.0,
        carbon: 39.2,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Lemongrass",
        water: null,
        carbon: 0.07,
        UnitWeight: null,
        Density: null,
    },
    { item: "Lemons", water: 642.0, carbon: 0.6, UnitWeight: 3.5, Density: null },
    {
        item: "Lentils",
        water: 5874.0,
        carbon: 0.7,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Lettuce",
        water: 237.0,
        carbon: 0.18,
        UnitWeight: 28.8,
        Density: null,
    },
    {
        item: "Lettuce (romaine hearts)",
        water: null,
        carbon: 0.92,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Lima Beans",
        water: null,
        carbon: 1.14,
        UnitWeight: null,
        Density: null,
    },
    { item: "Limes", water: 642.0, carbon: 0.6, UnitWeight: 1.7, Density: null },
    {
        item: "Lobster",
        water: null,
        carbon: 5.37,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Mackerel",
        water: null,
        carbon: 1.14,
        UnitWeight: null,
        Density: null,
    },
    { item: "Maize", water: null, carbon: 0.7, UnitWeight: null, Density: null },
    {
        item: "Maize Germ Oil",
        water: null,
        carbon: 0.4,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Malt (not roasted)",
        water: 1950.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Malt (roasted)",
        water: 2437.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Malt Whiskey",
        water: null,
        carbon: 2.73,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Malted Barley",
        water: null,
        carbon: 0.87,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Mandarin Oranges / Tangerines / Clementines",
        water: 748.0,
        carbon: 0.21,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Mangos",
        water: 1800.0,
        carbon: 0.07,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Margarine",
        water: null,
        carbon: 1.77,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Marinara Sauce",
        water: null,
        carbon: 0.83,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Marine Fish",
        water: null,
        carbon: 5.4,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Mashed Potato Flakes",
        water: null,
        carbon: 4.51,
        UnitWeight: null,
        Density: null,
    },
    { item: "Meat", water: null, carbon: 35.8, UnitWeight: null, Density: null },
    {
        item: "Melons",
        water: null,
        carbon: 0.14,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Milk",
        water: 1020.0,
        carbon: 0.79,
        UnitWeight: null,
        Density: 1026.0,
    },
    {
        item: "Milk Powder",
        water: 4345.0,
        carbon: 9.71,
        UnitWeight: null,
        Density: 320.0,
    },
    {
        item: "Millet",
        water: 4478.0,
        carbon: null,
        UnitWeight: null,
        Density: 640.0,
    },
    { item: "Mint", water: 288.0, carbon: null, UnitWeight: null, Density: null },
    {
        item: "Mollusks",
        water: null,
        carbon: 0.0,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Mullet (fish)",
        water: null,
        carbon: 5.3,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Mushrooms",
        water: 322.0,
        carbon: 0.0,
        UnitWeight: 0.53,
        Density: null,
    },
    {
        item: "Mussels",
        water: null,
        carbon: 0.53,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Mustard Seeds",
        water: 2809.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Nectarines",
        water: 910.0,
        carbon: 0.22,
        UnitWeight: 5.3,
        Density: null,
    },
    {
        item: "Nutmeg",
        water: 34319.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    { item: "Nuts", water: 9063.0, carbon: 2.3, UnitWeight: null, Density: null },
    {
        item: "Oat Bran",
        water: null,
        carbon: 0.49,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Oatmeal, groats",
        water: 2536.0,
        carbon: 0.49,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Oats",
        water: 1788.0,
        carbon: 0.31,
        UnitWeight: null,
        Density: 410.0,
    },
    {
        item: "Oats (rolled or flaked grains)",
        water: 2416.0,
        carbon: null,
        UnitWeight: null,
        Density: 410.0,
    },
    {
        item: "Offals (internal organs)",
        water: null,
        carbon: 35.9,
        UnitWeight: null,
        Density: null,
    },
    { item: "Okra", water: 576.0, carbon: 0.25, UnitWeight: null, Density: null },
    {
        item: "Olive Oil (refined)",
        water: 14726.0,
        carbon: 4.5,
        UnitWeight: null,
        Density: 911.0,
    },
    {
        item: "Olive Oil (virgin)",
        water: 14431.0,
        carbon: 4.5,
        UnitWeight: null,
        Density: 911.0,
    },
    {
        item: "Olives",
        water: 3015.0,
        carbon: 4.5,
        UnitWeight: 0.18,
        Density: null,
    },
    { item: "Onions", water: 272.0, carbon: 0.5, UnitWeight: 5.6, Density: null },
    {
        item: "Orange Juice",
        water: 1018.0,
        carbon: 2.14,
        UnitWeight: null,
        Density: 1048.0,
    },
    {
        item: "Oranges",
        water: 560.0,
        carbon: 0.13,
        UnitWeight: 4.6,
        Density: null,
    },
    {
        item: "Oysters",
        water: null,
        carbon: 11.41,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Palm Kernel Oil",
        water: null,
        carbon: 0.91,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Palm Oil",
        water: 4971.0,
        carbon: 0.44,
        UnitWeight: null,
        Density: 896.0,
    },
    {
        item: "Papaya",
        water: 460.0,
        carbon: null,
        UnitWeight: 16.0,
        Density: null,
    },
    {
        item: "Parsley",
        water: null,
        carbon: 0.15,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Pasta",
        water: 1849.0,
        carbon: 1.24,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Peaches",
        water: 910.0,
        carbon: 0.22,
        UnitWeight: 5.3,
        Density: null,
    },
    {
        item: "Peanut Butter",
        water: null,
        carbon: 1.53,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Peanut Oil",
        water: null,
        carbon: 3.89,
        UnitWeight: null,
        Density: 950.0,
    },
    {
        item: "Peanuts",
        water: null,
        carbon: 0.57,
        UnitWeight: null,
        Density: 650.0,
    },
    { item: "Pears", water: 922.0, carbon: 0.34, UnitWeight: 6.3, Density: null },
    { item: "Peas", water: 595.0, carbon: 1.2, UnitWeight: 0.01, Density: null },
    {
        item: "Pecans",
        water: null,
        carbon: 1.61,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Pelagic Fish",
        water: null,
        carbon: 5.4,
        UnitWeight: null,
        Density: null,
    },
    { item: "Pepper", water: null, carbon: 2.5, UnitWeight: null, Density: null },
    {
        item: "Peppermint",
        water: 288.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Pepperoni",
        water: null,
        carbon: 13.06,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Pig Meat",
        water: 5988.0,
        carbon: 7.9,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Pimento",
        water: null,
        carbon: 3.2,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Pineapple",
        water: 255.0,
        carbon: 1.9,
        UnitWeight: 56.0,
        Density: null,
    },
    {
        item: "Pineapple Juice",
        water: 1273.0,
        carbon: null,
        UnitWeight: null,
        Density: 1048.0,
    },
    {
        item: "Pinto Beans",
        water: 5053.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Pistachios",
        water: 11363.0,
        carbon: 1.11,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Plantains",
        water: 1602.0,
        carbon: 1.6,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Plums",
        water: 2180.0,
        carbon: 0.22,
        UnitWeight: 2.3,
        Density: null,
    },
    {
        item: "Pomegranates",
        water: null,
        carbon: 0.45,
        UnitWeight: 9.0,
        Density: null,
    },
    {
        item: "Pomelo",
        water: null,
        carbon: 0.22,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Poppy Seeds",
        water: 2188.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Pork",
        water: 5990.0,
        carbon: 5.45,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Potato Chips",
        water: null,
        carbon: 3.43,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Potato Starch",
        water: 1512.0,
        carbon: null,
        UnitWeight: null,
        Density: 812.0,
    },
    {
        item: "Potatoes",
        water: 287.0,
        carbon: 0.4,
        UnitWeight: 6.5,
        Density: null,
    },
    {
        item: "Poultry Meat",
        water: null,
        carbon: 5.4,
        UnitWeight: null,
        Density: null,
    },
    { item: "Prunes", water: null, carbon: 0.5, UnitWeight: null, Density: null },
    {
        item: "Pulses",
        water: 4055.0,
        carbon: 3.3,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Pumpkins",
        water: 336.0,
        carbon: 0.14,
        UnitWeight: 160.0,
        Density: null,
    },
    {
        item: "Radishes",
        water: null,
        carbon: 0.16,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Mustard Oil",
        water: null,
        carbon: 2.9,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Rapeseed and Mustard Seed",
        water: null,
        carbon: 2.9,
        UnitWeight: null,
        Density: 720.0,
    },
    {
        item: "Raspberries",
        water: 413.0,
        carbon: 0.27,
        UnitWeight: 0.18,
        Density: null,
    },
    {
        item: "Red Cabbage",
        water: 280.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Red Currants",
        water: 499.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Rice",
        water: 2172.0,
        carbon: 4.0,
        UnitWeight: null,
        Density: 750.0,
    },
    {
        item: "Rice Bran",
        water: null,
        carbon: 0.46,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Rice Flour",
        water: 2628.0,
        carbon: null,
        UnitWeight: null,
        Density: 800.0,
    },
    {
        item: "Rolled Flaked Grains",
        water: 2416.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Rye",
        water: 1544.0,
        carbon: 0.25,
        UnitWeight: null,
        Density: 720.0,
    },
    {
        item: "Rye Flour",
        water: 1930.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Sale",
        water: null,
        carbon: 0.2845,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Salmon",
        water: null,
        carbon: 2.88,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Sauerkraut",
        water: 280.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Sausage",
        water: null,
        carbon: 9.34,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Savoy Cabbage",
        water: 280.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Sea Bass",
        water: null,
        carbon: 5.23,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Sesame Oil",
        water: 21793.0,
        carbon: 4.2,
        UnitWeight: null,
        Density: 947.0,
    },
    {
        item: "Sesame Seeds",
        water: 9371.0,
        carbon: 4.2,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Shallots",
        water: 272.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Shortening",
        water: null,
        carbon: 1.8,
        UnitWeight: null,
        Density: 867.0,
    },
    {
        item: "Shrimp",
        water: null,
        carbon: 7.05,
        UnitWeight: null,
        Density: null,
    },
    { item: "Prawn", water: null, carbon: 4.57, UnitWeight: null, Density: null },
    {
        item: "Silver Carp (fish)",
        water: null,
        carbon: 5.3,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Soft Drinks",
        water: null,
        carbon: 1.72,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Sorghum",
        water: 3048.0,
        carbon: 0.28,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Sour Cream",
        water: null,
        carbon: 0.22,
        UnitWeight: null,
        Density: 1014.0,
    },
    {
        item: "Soy Milk",
        water: 3763.0,
        carbon: 0.69,
        UnitWeight: null,
        Density: 1031.0,
    },
    {
        item: "Soy Sauce",
        water: 613.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Soybean Oil",
        water: null,
        carbon: 1.48,
        UnitWeight: null,
        Density: 921.0,
    },
    {
        item: "Soybeans",
        water: 2145.0,
        carbon: 2.0,
        UnitWeight: null,
        Density: 770.0,
    },
    {
        item: "Spices",
        water: 7048.0,
        carbon: 1.6,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Spinach",
        water: 292.0,
        carbon: 0.34,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Squash",
        water: 336.0,
        carbon: 0.34,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Starchy Roots (Parsnips)",
        water: 387.0,
        carbon: 0.4,
        UnitWeight: 4.0,
        Density: null,
    },
    {
        item: "Strawberries",
        water: 347.0,
        carbon: 0.25,
        UnitWeight: 0.4,
        Density: null,
    },
    {
        item: "String Beans",
        water: 547.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Sugar",
        water: 1666.0,
        carbon: 3.93,
        UnitWeight: null,
        Density: 800.0,
    },
    {
        item: "Sugar (raw)",
        water: 1666.0,
        carbon: 0.1,
        UnitWeight: null,
        Density: 960.0,
    },
    {
        item: "Sugarcane",
        water: 210.0,
        carbon: 0.04,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Sunflower Oil",
        water: 6792.0,
        carbon: 1.48,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Sunflower Seeds",
        water: 3366.0,
        carbon: 0.88,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Sweet Potatoes",
        water: 383.0,
        carbon: 0.43,
        UnitWeight: 4.0,
        Density: null,
    },
    {
        item: "Taro Root",
        water: 606.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Tea (including Black, Green)",
        water: 8856.0,
        carbon: 1.9,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Tempeh",
        water: 2145.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Tilapia",
        water: null,
        carbon: 5.3,
        UnitWeight: null,
        Density: null,
    },
    { item: "Tofu", water: 2145.0, carbon: 2.0, UnitWeight: null, Density: null },
    {
        item: "Tomato Paste",
        water: 855.0,
        carbon: 1.8845,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Tomatoes",
        water: 214.0,
        carbon: 1.3,
        UnitWeight: 6.0,
        Density: null,
    },
    {
        item: "Trout (fish)",
        water: null,
        carbon: 2.51,
        UnitWeight: null,
        Density: null,
    },
    { item: "Tuna", water: null, carbon: 6.1, UnitWeight: null, Density: null },
    {
        item: "Skipjack or Yellowfin Tuna",
        water: null,
        carbon: 1.97,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Turkey",
        water: 4325.0,
        carbon: 10.9,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Turnips",
        water: 195.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Vanilla Beans",
        water: 126505.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Vegetable Oil",
        water: null,
        carbon: 1.79,
        UnitWeight: null,
        Density: 920.0,
    },
    {
        item: "Vegetable Oil (Hydrogenated)",
        water: null,
        carbon: 3.2,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Vegetables",
        water: 322.0,
        carbon: 1.6,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Walnuts",
        water: 5293.0,
        carbon: 0.76,
        UnitWeight: null,
        Density: 650.0,
    },
    {
        item: "Watermelon",
        water: 235.0,
        carbon: 0.14,
        UnitWeight: 320.0,
        Density: null,
    },
    {
        item: "Wheat",
        water: 1827.0,
        carbon: 1.0,
        UnitWeight: null,
        Density: 770.0,
    },
    {
        item: "Wheat Bran",
        water: null,
        carbon: 0.56,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Wheat Germ",
        water: null,
        carbon: 0.56,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Wheat Gluten",
        water: 4189.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    { item: "Whey", water: 647.0, carbon: 2.03, UnitWeight: null, Density: null },
    {
        item: "White Currants",
        water: 499.0,
        carbon: null,
        UnitWeight: null,
        Density: null,
    },
    { item: "Wine", water: null, carbon: 1.04, UnitWeight: null, Density: null },
    {
        item: "Red wine",
        water: null,
        carbon: 0.43,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "White wine",
        water: null,
        carbon: 0.44,
        UnitWeight: null,
        Density: null,
    },
    { item: "Yams", water: 343.0, carbon: null, UnitWeight: null, Density: null },
    {
        item: "Yellow Mustard",
        water: null,
        carbon: 1.0,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Yellow Squash",
        water: 336.0,
        carbon: null,
        UnitWeight: 7.0,
        Density: null,
    },
    {
        item: "Yogurt",
        water: 1186.0,
        carbon: 0.9,
        UnitWeight: null,
        Density: null,
    },
    {
        item: "Zucchini",
        water: 336.0,
        carbon: null,
        UnitWeight: 7.0,
        Density: null,
    },
];
const pbo = "c";
if (typeof pbo !== "string") console.log("KFKJFKFJKJF");

function add() {
    const food = document.querySelector(".item").value;
    const amount = document.querySelector(".amt").value;
    const unit = document.querySelector(".amtUnit").value;
    //console.log("\n\n");
    //console.log(amount);
    //console.log("\n\n");
    //hasError(food, amount, unit);
    if (hasError(food, amount, unit)) {
      return;
    }

    //also would want to try catch to make sure it wont mess with back end
    scores(food, amount, unit);

    itemArray.push(food);
    amtArray.push(amount);
    unitArray.push(unit);
    inRecipe.push(1);
    text = document.getElementById("foodList").innerHTML;

    if (waterArray[waterArray.length - 1] == "unknown")
        text =
        text +
        "<li id = '" + listInd +"' onclick = 'removeItem("+listInd+")'>" +
        amount +
        " " +
        unit +
        " of " +
        food +
        ", which uses about " +
        waterArray[waterArray.length - 1] +
        " liters of water and generates " +
        Math.round(carbonArray[carbonArray.length - 1]) +
        " kg of CO2 equivalent </li>";
    else if (carbonArray[carbonArray.length - 1] == "unknown")
        text =
        text +
        "<li id = '" + listInd +"' onclick = 'removeItem("+listInd+")'>" +
        amount +
        " " +
        unit +
        " of " +
        food +
        ", which uses about " +
        Math.round(waterArray[waterArray.length - 1]) +
        " liters of water and generates " +
        carbonArray[carbonArray.length - 1] +
        " kg of CO2 equivalent </li>";
    else
        text =
        text +
        "<li id = '" + listInd +"' onclick = 'removeItem("+listInd+")'>" +
        amount +
        " " +
        unit +
        " of " +
        food +
        ", which uses about " +
        Math.round(waterArray[waterArray.length - 1]) +
        " liters of water and generates " +
        Math.round(carbonArray[carbonArray.length - 1]) +
        " kg of CO2 equivalent </li>";
    document.getElementById("foodList").innerHTML = text;
    listInd ++;

    setText("item", "");
    setText("amt", "");
    console.log(itemArray);
    console.log(amtArray);
    console.log(unitArray);

    //console.log(amount + " " + measurement);
}

function removeItem(itemID){
  var e = document.getElementById(itemID.toString());
  e.parentNode.removeChild(e);
  inRecipe[itemID] = 0;
  if(waterArray[itemID] != "unknown") totalW -= waterArray[itemID];
  if(carbonArray[itemID] != "unknown") totalC -= carbonArray[itemID];
  document.getElementById("totalWater").innerHTML = Math.round(totalW);
  document.getElementById("totalCarbon").innerHTML = Math.round(totalC);
  return false;
}

function hasError(fod, amt, unt) {
    document.getElementById("errors").innerHTML = " ";
    if (fod === "" || amt === "" || unt === "") {
        document.getElementById("errors").innerHTML = "Please fill in all the text boxes and select a unit.";
        console.log("Unfilled");
        return true;
    } //checks if value is empty

    let foodRow = [foodData.length];
    for (let i = 0; i < foodData.length; i++) {
        foodRow[i] = foodData[i].item;
    }
    if (!foodRow.includes(fod)) {
        document.getElementById("errors").innerHTML = "No such food on list. Please select a food item from the dropdown.";
        console.log("BAD FOOD");
        return true;
    } //checks if food is in list

    if (isNaN(amt)) {
        document.getElementById("errors").innerHTML = "Please enter a number for units.";
        console.log("NOT A NUMBER");
        return true;
    } //checks if the amount is a numnber
        
    if (amt <= 0){
      document.getElementById("errors").innerHTML = "Please enter a number greater than 0.";
      console.log("SMALL NUMBER");
      return true;
    } // non negative

    let index = 0;
    for (let j = 0; j < foodData.length; j++) {
        //console.log(foodData[j].item);
        if (fod === foodData[j].item) {
            index = j;
            break;
        }
    }
    userData = foodData[index];
    //console.log(userData);
    //console.log(!userData.Density);
    if (!userData.Density && unt === "cups") {
        document.getElementById("errors").innerHTML = "We do not have data on cups for this item. Please try a different unit. (Grams, pounds, and ounces work for all foods.)";
        console.log("YOU PUT CUPS");
        return true;
    }
    if (!userData.UnitWeight && unt === "units") {
        document.getElementById("errors").innerHTML = "We do not have data on single units for this item. Please try a different unit. (Grams, pounds, and ounces work for all foods.)";
        console.log("STOP IT YOU PUT UNITS");
        return true;
    }
    console.log("YESSIR");
    return false;
} //gives error messages depending on which error is caused, need to display messages in html :)

function setText(piece, text) {
    document.querySelector("." + piece).value = text;
}

function convert_oz_to_kg(oz) {
    return 0.02834952 * oz;
}

function convert_lbs_to_kg(lbs) {
    return 0.4535924 * lbs;
}

function convert_cups_to_kg(cups, p) {
    //assuming p in kg/m^3
    return convert_oz_to_kg(p * cups * 0.00023658823648491);
}

function convert_unit_to_kg(unit, weight) {
    //assuming weight in oz
    return unit * convert_oz_to_kg(weight);
}

function convert_g_to_kg(g) {
    return g / 1000;
}

function scores(food, amount, unit) {
    indx = 0;

    for (i = 0; i < foodData.length; i++) {
        if (food == foodData[i].item) {
            indx = i;
        }
    }

    console.log(foodData[indx].item);
    carbon_per_kg = foodData[indx].carbon;
    water_per_kg = foodData[indx].water;
    console.log(water_per_kg);

    a = 0;
    if (unit == "ounces") {
        a = convert_oz_to_kg(amount);
    } else if (unit == "pounds") {
        a = convert_lbs_to_kg(amount);
    } else if (unit == "cups") {
        //PLACEHOLDER - find density
        density = foodData[indx].Density;
        a = convert_cups_to_kg(amount, density);
    } else if (unit == "units") {
        //PLACEHOLDER - find weight
        weight = foodData[indx].UnitWeight;
        a = convert_cups_to_kg(amount, weight);
    } else if (unit == "grams") {
        a = convert_g_to_kg(amount);
    } else {
        console.log("Unit Error");
        return "Unit Error";
    }

    console.log(a);
    c = 0;
    w = 0;

    if(carbon_per_kg== null){
      c = "unknown";
    } else {
      c = carbon_per_kg*a;
      totalC += c;
    }

    if(water_per_kg== null){
      w = "unknown";
    } else {
      w = water_per_kg*a;
      totalW += w;
    }

    carbonArray.push(c);
    waterArray.push(w);

    document.getElementById("totalWater").innerHTML = Math.round(totalW);
    document.getElementById("totalCarbon").innerHTML = Math.round(totalC);
}

console.log(scores("Avadoes", 1, "unit"));
