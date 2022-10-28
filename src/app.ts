//Declare global container constant to represent <div> container
var div=document.querySelector(".container")
//Define Fruit Object type with required properties

class Fruit{
            id: number;
            name: string;
            price: string;
            image: string;
            unit: string;

            constructor(id:number,name:string,price:string,image:string,unit:string){
                this.id=id;
                this.name=name;
                this.price=price;
                this.image=image;
                this.unit=unit
            }
}
//Fetch data from server using getFruits() method
function getFruits(){


fetch('http://localhost:3000/fruits/')
         .then(response => response.json())
         .then((data:any)=>{
            transform(data)})
         }    
    


//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 
function transform(data1:any){
    data1.forEach((element:any) => {
        let fruit:Fruit=new Fruit(<number>element.id,<string>element.name,<string>element.price,<string>element.image,<string>element.unit,)
        showFruit(fruit);
    });
  
}

//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container
function showFruit(fruit1:any){
    // let div=document.createElement("div")
    // div.setAttribute("class","container")
    var div=document.querySelector(".row")
    // let div1=document.createElement("div")
    // div1.setAttribute("class","row")
    // div?.appendChild(div1);
    let div2=document.createElement("div")
    div2.setAttribute("class","col")
    div?.appendChild(div2)
    let div3=document.createElement("div")
    div3.setAttribute("class","card mt-4")
    div3.innerHTML=`<img src="../${fruit1.image}">`
    div2.appendChild(div3)
    let div4 =document.createElement("div")   
    div4.setAttribute("class","card-body");
    div4.innerHTML=`<p class="thick ml-3"><b>${fruit1.name}</b><br><p style="color:gray;"> price :${fruit1.price}
    per :${fruit1.unit}</p></p>
   `
    div3.appendChild(div4)

}

//Call getFruits() method globally
getFruits();