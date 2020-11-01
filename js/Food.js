class Food{
    constructor(food){
        this.food  = database.ref('Food')
    }
    
    getFoodStock(){

    }
    updateFoodStock(){

    }
    deductFood(){

    }
    display(){
        var x = 80
        var y = 100;

        imageMode(CENTER)
        image(MilkIMG,720,220,70,70)

        if(this.food!==0){
   for(var i = 0;i<this.food;i++){
       if(x%10===0){
           x = 80;
           y = y +50;
       }
       image(MilkIMG,x,y,50,50)
       x= x+30;
   }
        }
    }
}