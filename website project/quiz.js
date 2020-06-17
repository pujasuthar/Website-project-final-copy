//Event Listener
document.getElementById('submitbtn').addEventListener ('click', mark);
//Event function
let results=7
function mark(){ 
    let input1 = document.getElementById('answerone').value;
    input1 = input1.toLowerCase();
if(input1 == "toronto") { 
    console.log('right 1');
}else{ 
    console.log('wrong 1');
    results--;
}

   let input2 = document.getElementById('answertwo').value;
   input2 = input2.toLowerCase();
if(input2 == "asia") { 
    console.log('right 2');
}else{ 
    console.log('wrong 2');
    results--;
  }
  let input3 = document.getElementById('answerthree').value;
  input3= input3.toLowerCase();
if(input3 == 'mariana trench'){ 
      console.log('right 3');
}else { 
    console.log('wrong 3');
    results--;
}

  let input4 = document.getElementById('answerfour').value;
  input4 == input4.toLowerCase();
if(input4 == "africa"){
  console.log('right 4');
} else{
    console.log('wrong 4');
    results--;
}

  let input5= Number(document.getElementById('answerfive').value);
if(input5 == '54'){
  console.log('right 5');
}else{ 
    console.log ('wrong5');
    results--;
}
  let input6= document.getElementById('answersix').value;
  input6 == input6.toLowerCase();
if(input6 == "arizona"){
    console.log('right 6');
}else{ 
    console.log('wrong 6');
    results--;
}

  let input7= document.getElementById('answerseven').value;
  input7 == input7.toLowerCase();
if(input7== "mount everest"){
    console.log('right 7');
}else{ 
    console.log('wrong 7');
    results--;
}
document.getElementById("results").innerHTML = results;
let percent= (results/7) * 100
document.getElementById('percent').innerHTML = percent;
}
