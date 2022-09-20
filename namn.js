


const name1= document.querySelector('#input-field');
const button = document.querySelector('button');
const messageBox = document.querySelector('#message-box');

button.addEventListener('click', () => {

    const name = name1.value;
   
     console.log(name)

    for (let i = 0; i < name.length; i++) ;
        const element = name [i];
      
        console.log(element)
       
    
});