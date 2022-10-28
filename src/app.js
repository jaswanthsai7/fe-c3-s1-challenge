//Declare global container constant to represent <div> container
var div = document.querySelector(".container");
//Define Fruit Object type with required properties
var Fruit = /** @class */ (function () {
    function Fruit(id, name, price, image, unit) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.unit = unit;
    }
    return Fruit;
}());
//Fetch data from server using getFruits() method
function getFruits() {
    fetch('http://localhost:3000/fruits/')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        transform(data);
    });
}
//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 
function transform(data1) {
    data1.forEach(function (element) {
        var fruit = new Fruit(element.id, element.name, element.price, element.image, element.unit);
        showFruit(fruit);
    });
}
//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container
function showFruit(fruit1) {
    // let div=document.createElement("div")
    // div.setAttribute("class","container")
    var div = document.querySelector(".row");
    // let div1=document.createElement("div")
    // div1.setAttribute("class","row")
    // div?.appendChild(div1);
    var div2 = document.createElement("div");
    div2.setAttribute("class", "col");
    div === null || div === void 0 ? void 0 : div.appendChild(div2);
    var div3 = document.createElement("div");
    div3.setAttribute("class", "card mt-4");
    div3.innerHTML = "<img src=\"../".concat(fruit1.image, "\">");
    div2.appendChild(div3);
    var div4 = document.createElement("div");
    div4.setAttribute("class", "card-body");
    div4.innerHTML = "<p class=\"thick ml-3\"><b>".concat(fruit1.name, "</b><br><p style=\"color:gray;\"> price :").concat(fruit1.price, "\n    per :").concat(fruit1.unit, "</p></p>\n   ");
    div3.appendChild(div4);
}
//Call getFruits() method globally
getFruits();
