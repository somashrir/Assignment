const card = document.querySelector('.card');
const follow = document.querySelector('.follow');

async function  apifetch(){
           let res=await fetch(
'https://jsonplaceholder.typicode.com/users/1');
res=await res.json();   
           console.log(res);
               document.getElementById('userd').innerHTML=(JSON.stringify(res))
                }


function ChangeColor()   
    {  
         document.getElementById('btn1').style.backgroundColor = 'blue';  
         
    }
    
card.addEventListener('click', apifetch);
follow.addEventListener('click',ChangeColor);

