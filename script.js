const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');


class item{
    constructor(itemName){
        this.createDiv(itemName);
    }
    createDiv(itemName){

        let input = document.createElement('input');
        input.value= itemName;
        input.classList.add('item_input')
        input.type= "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item')

        container.appendChild(itemBox);

        itemBox.appendChild(input);
       

        itemBox.addEventListener('click',() => this.remove(itemBox));
    }
    remove(item){
       container.removeChild(item);
    }
}

function check(){
        if(input.value !=""){
            new item(input.value);
            input.value = "";
        }
}
addButton.addEventListener('click', check);
