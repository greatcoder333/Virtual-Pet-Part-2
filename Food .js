class Food{

constructor(){

this.foodStock = 0

this.Lastfed = null
}
getFoodStock(){

database.ref('FoodStock').on("value", (data) => {

this.foodStock = data.val()

FoodStock = this.foodStock
})
}

updateFoodStock(foodStock){

database.ref('/').update({

FoodStock:foodStock

})
FoodStock = this.foodStock
}
 
deductFoodStock() {
if(this.foodStock>0){
this.foodStock = this.foodStock -1
}
}
lastFedTime (lastFed){

database.ref('/').update({

lastFed:lastFed
})
}
display (){

var x=50, y=200

if(this.foodStock>0){

for(var m =0; m<this.foodStock;m++)

image(milk,x,y,50,50)

x+=30

if(x >= 390){

x = 50

y=y+50
}
}
}
}