//Create variables here
var dog;
var happyDog;
var database;
var foodStock;
var foodS;
var addFood;
var feedPet;
var fedTime, lastFed;
var foodObj;
var fedLast;

function preload()
{
  //load images here
  dogimg = loadImage("images/dogImg.png")
  dog2img = loadImage("images/dogImg1.png")
  MilkIMG = loadImage("images/Milk.png")
}

function setup() {
  database = firebase.database();
  createCanvas(700, 500);
  dog = createSprite(350,250,50,50)
  dog.addImage("img",dogimg)
  dog.scale = 0.2
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  fedLast = database.ref('FeedTime')
  fedLast.on("value",function(data){
    lastFed = data.val();
  })
feedPet = createButton("Feed the Dog")
feedPet.position(700,95)
feedPet.mousePressed(feedDog)

addFood = createButton("Add Food")
addFood.position(800,95)
addFood.mousePressed(foodAdd)
  foodObj = new Food(80,400,50,50)
}


function draw() {  
background(46, 139, 87)

foodObj.display();
  drawSprites();
  //add styles here
  textSize(30)
  fill("red")
text("Food Remaining: " + foodS,220,400)
textSize(30)
fill("white")
if(lastFed>= 12){
  text("Last Feed: "+lastFed%12+" PM",100,60)
}else if(lastFed === 0){
  text("Last Feed: 12 AM",100,60)
}else{
  text("Last Feed: "+lastFed + "AM",100,60)
}

}

function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }
database.ref('/').update({
  Food:x,
  FeedTime:hour()
})

}

function readStock(data){
foodS = data.val();
}
function feedDog(){
  //if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage("img",dog2img)
    
  //}
}

function addStock(x){
x = x+1;
database.ref('/').update({
  Food:x
})
}
function foodAdd(){
  addStock(foodS)
}

function fed(data){
  lastFed = data.val();
}