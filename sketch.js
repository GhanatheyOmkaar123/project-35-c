//Create variables here
var dog,database,foodS,foodStock;
var dogIMG,happyDogIMG;

function preload(){
	//load images here
  dogIMG=loadImage("images/dogImg.png");
  happyDogIMG=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog = createSprite(250,250,100,100);
  dog.addImage(dogIMG);
  dog.scale=0.08;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogIMG);
}

  //add styles here
  textSize(15);
  fill("blue");
  stroke(5)
text("Food remaining :"+foodS,200,200);
text("Press UP_ARROW Key To Feed Drago Milk!",130,20);
drawSprites();
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
   if(x<=0) { 
    x=0;
    }else {
    x=x-1;
   } 

database.ref('/').update({
   Food:x
   })
   } 



