window.onload = () => {
   
    // Show the loading screen
    
  
    // Hide the login page after login button is clicked
     
   
    
   

    const header= document.createElement('header')
    header.id='header'
    header.style.display='none'
    mainContent.appendChild(header)

    const logo =document.createElement('a')
    logo.href="#"
    logo.className='logo'
    logo.textContent=`Febias-Travels`
    header.appendChild(logo )

    const list= document.createElement('ul')
    header.appendChild(list)

    const li = document.createElement('li')
    list.appendChild(li)

    const a =document.createElement('a')
    a.href='#'
    a.textContent=`home`
    li.appendChild(a)

    const li2 = document.createElement('li');
    list.appendChild(li2);

    const a2 =document.createElement('a')
    a2.href='#'
    a2.textContent=`About`
    li2.appendChild(a2)

    const li3 = document.createElement('li');
    list.appendChild(li3);

    const a3 =document.createElement('a')
    a3.href='#'
    a3.textContent=`Services`
    li3.appendChild(a3)


    const li4 = document.createElement('li');
    list.appendChild(li4);

    const a4 =document.createElement('a')
    a4.href='#'
    a4.textContent=`Portfolio`
    li4.appendChild(a4)

    const li5 = document.createElement('li');
    list.appendChild(li5);

    const a5 =document.createElement('a')
    a5.href='#'
    a5.textContent=`Team`
    li5.appendChild(a5)

    const li6 = document.createElement('li');
    list.appendChild(li6);

    const a6 =document.createElement('a')
    a6.href='#'
    a6.textContent=`Contact`
    li6.appendChild(a6)

    window.addEventListener("scroll", function(){
        var header = document.getElementById("header");
        header.classList.toggle("sticky", window.scrollY > 0)
    })
    
  
     
    const page =document.getElementById ("login-screen")
    
    // log in 
    

    const form =document.createElement('form')
    page.append(form)

    const card= document.createElement('div')
    card.className = 'card'
     card.style='width: 35rem'
     page.appendChild(card)
 
 
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

    const bg =document.createElement('img')
    bg.id='background-image'
    bg.src='/image/login.jpg'
    page.appendChild(bg)
     
    const navbar = document.getElementById('navbar');
    document.getElementById("content").style.display="block";
    document.getElementById("login-screen").style.display = "block";
   
    button.addEventListener('click', () => {
        
          if (header.style.display==='none') {
            header.style.display='block'
            
          }
          else {
            navbar.style.display = 'none';
          }
    document.getElementById("login-screen").style.display = "none"; 
    document.getElementById("content").style.display="none";
     
    
    // page Main Content
    
    




     
    

     });
     
      }
    
 