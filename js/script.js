
"use strict";

class Rectangle {
    
    width = 0;
     height = 0;


    constructor (height,width) {
      this.height = height
      this.width =width
    }
    getwidth(){
        return this.width
        console.log(this.width);
    }
    get height(){
        return this.heigth
        console.log(this.height);
    }
    setwidth(b){
        this.width = b
    }

    set height(h){
        this.height = h
    }

    get area (){
        return this.calcArea()
    }

    get perimetro(){
        return this.perim()
    }


    calcArea(){
        return (this.width * this. height)
        
    }

    
    perim(){
        return (this.height + this.width) *2
    }

    

}

class parall extends Rectangle {

    deep = 0

    constructor(width,height , deep){
       super(width,height);
        this.deep = deep;
    }

    calcVolume(){
        return this.area*this.deep
    }

    get volume() {
        return this.calcVolume()
    }
}




const rettangolo = new Rectangle(100,20)
rettangolo.calcArea()
console.log(rettangolo.area)
console.log(rettangolo.perimetro)  
console.log(rettangolo)

const chilly = new parall(20, 20, 10)
console.log(chilly.volume)

