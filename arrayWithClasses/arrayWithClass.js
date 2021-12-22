const array = ["Camilo", "Sergio", "Juana"];
array.push("Ana"); //agregar elemento al final

class MyArray{

    constructor(){
        this.length = 0;
        this.data = {};
    }
    //pedir un elemento 
    get(index){
        return TouchList.data[index];
    }
    //regresar 
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
}

const myArray = new MyArray();

myArray.push("Camilo");
myArray.push("Sergio");
myArray.push("Juana");
myArray.get(1);
