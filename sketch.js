//Create variables here
var dog , dogImg
var happyDog , happyDogImg
var milk
var database
var foodStock = 0

function preload()
{
  //load images here
  dogImg = loadImage("images/DogImg.png")
happyDogImg = loadImage("images/happydog.png")  
milk = loadImage("images/Milk.png")
}

function setup() {
  database = firebase.database()
  updateFood = createButton("Buy more food")
  reduceFood = createButton("Feed your pet Guru's Milk")
  updateFood.position(400,60)
  reduceFood.position(600,60)
  food = new Food()
  createCanvas(500,500);
  dog = createSprite(600,350,40,40)
  dog.addImage("dogImg", dogImg)
  dog.scale = 0.4
  food.lastFedTime(hour())
}


function draw() {  
  background("green")
  drawSprites()
  food.getFoodStock()
  food.display()

  updateFood.mousePressed(()=>{
    foodStock++
    food.updateFoodStock(foodStock)
  })

  reduceFood.mousePressed(()=>{
  food.deductFoodStock()
  food.updateFoodStock(Food.foodStock)
  food.lastFedTime(hour())
  })

  textSize(20)
  fill("black")
  text("Food Remaining",+food.foodStock,350,30)
  if(hour()>=12){
  time = "pm"
  }
  else if(hour()<=12){
  time = "am"
  }
  text("Last Fed At",+food.lastFed+time,550,30)
}
