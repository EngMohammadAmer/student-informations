'use strict';
const id = [];
function List(id,name,email,age,mobile,tuition){
    this.id= id;
    this.name=name;
    this.email=email;
    this.age=0;
    this.mobile=mobile;
    this.tuition=tuition;
    List.all.push(this);
}
List.all=[];
console.log(List.all);

addEventListener('submit', handleSubmit);

this.List.push(new List(id,name,email,age,mobile,tuition));

List.prototype.calcId = function (){
    let x=0;
    for(i=0, i < id.length , i++ )
    x=x+1;
    this.id=x;
}

List.prototype.calcAge = getRandomInt(18,24){
    return this.age;
}
List.prototype.render= function(){
    let tableEl =document.createElement('tr');
    let tdEl = document.createElement('td');
    tdEl.textContent = this.List;
    tableEl.appendChild(tdEl);
}
let container = document.getElementById('table');



localStorage.setItem('key',JSON.stringify(this.List));



// helper function

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

