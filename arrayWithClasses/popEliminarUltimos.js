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
    pop(){ //siempre borra el ultimo elemento 
        const lastItem = this.data[this.length-1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index]
        this.shiftIndex(index);
        
        return item;
    }
    shiftIndex(index){
        for(let i = index; i < this.lwngth -1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

//creando un objeto de la clase 
const myArray = new MyArray();

//llamando methodos del myArray 
myArray.push("Camilo");
myArray.push("Sergio");
myArray.push("Juana");
myArray.get(1);
