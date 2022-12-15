window.onload = () => {
   
    // Show the loading screen
    
  
    // Hide the login page after login button is clicked
     

    const bg =document.createElement('div')
    bg.className='background-image'
     
    const page =document.getElementById ("login-screen")
    
    // log in 
    

    const form =document.createElement('form')
    page.append(form)

    const card= document.createElement('div')
    card.className = 'card'
     card.style='width: 35rem'
     form.appendChild(card)
 
 
     const cardBody = document.createElement('div')
     cardBody.className= 'card-body'
     card.appendChild(cardBody)
    const mb3= document.createElement('div')
    mb3.className='mb-3'
    cardBody.appendChild(mb3)

    const label = document.createElement('label')
    label.className='form-label' 
    label.textContent="Email address"
    label.style='width: 32rem'
    mb3.appendChild(label)


    const input= document.createElement('input')
    input.className='form-control'
    input.type='email'
    input.id='exampleInputEmail1'
    label.appendChild(input)

    const help=document.createElement('div')
    help.id='emailHelp'
    help.className='form-text'
    help.innerHTML=`We'll never share your email with anyone else.`
    cardBody.appendChild(help)

    // 
    const mb3_2 = document.createElement('div')
    mb3_2.className='mb-3'
    cardBody.appendChild(mb3_2)

    const label2 = document.createElement('label')
    label2.className='form-label'
    label2.textContent=`Password`
    label2.style='width: 32rem'
    mb3_2.appendChild(label2)

    const input2=document.createElement('input')
    input2.className='form-control'
    input2.id='exampleInputPassword1'
    input2.type ='password'
    label2.appendChild(input2)

    const checkbox= document.createElement('div')
    checkbox.className= 'mb-3 form-check'
    cardBody.appendChild(checkbox)

    const box= document.createElement('input')
    box.type ='checkbox'
    box.className='form-check-input'
    box.id='exampleCheck1'
    checkbox.appendChild(box)

    const lable3= document.createElement('lable')
    lable3.className='form-check-label'
    lable3.textContent=`i am not a robot`
    checkbox.appendChild(lable3)

    const button = document.createElement('a');
    button.className = 'btn btn-outline-dark';
    button.textContent = 'Login';
    button.style='width: 32rem'
    cardBody.appendChild(button)

    const content=document.getElementById('content')
    
    const h2 =document.createElement('h2')
    h2.textContent=`The best hotels from all part of Kenya, all in one place`
    content.appendChild(h2)
    
    const p1 = document.createElement('p')
    p1.textContent=`We believe finding a hotel should be easy. We’ve partnered with the top 
    sites to help you find the perfect hotel. We’ve designed VacationRenter from the ground up for the next generation of travelers.`
    content.appendChild(p1)

    const image = document.createElement('img')
    image.id='image'
    image.src='/image/Screenshot from 2022-12-14 23-32-45.png'
    content.appendChild(image)

    document.getElementById("login").style.display="block";
    document.getElementById("content").style.display="block";
    document.getElementById("login-screen").style.display = "block";
   
    button.addEventListener('click', () => {
    document.getElementById("login-screen").style.display = "none"; 
    document.getElementById("content").style.display="none";
    document.getElementById("login").style.display="none";
    document.getElementById("text").style.display="block"});

    
  } 

  
  