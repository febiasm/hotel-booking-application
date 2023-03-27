window.onload = () => {
  // URL for the hotel data
  const url = "https://api.jsonbin.io/v3/b/6421a35eebd26539d09e0100";
  // Fetch the hotel data from the URL
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Get the hotels from the data
      const hotel = data.record.hotels;
      // Loop through each hotel
      hotel.forEach((hotel) => {
        // Get the hotel's name, rating, class, description, additional information, price, and image
        const name = hotel.name;
        const rating = hotel.rating;
        const Hotelclass = hotel.class;
        const description = hotel.description;
        const additional = hotel.additional;
        const price = hotel.price;
        const image = hotel.image;
        // Get the cardContent element
        const cardContent = document.querySelector(".cardContent");
        // Display the cardContent element as a flex container
        cardContent.style.display = "flex";

        const card = document.createElement("div");

        // Create a new card element
        card.className = "car";
        card.id = "hotelCards";
        card.style.width = "20.2rem";
        card.style.margin = "14px";
        // Append the card element to the cardContent element
        cardContent.appendChild(card);
        // Create an image element
        const img = document.createElement("img");
        img.src = image;
        img.className = "card-img-top";
        // Append the image element to the card element
        card.appendChild(img);
        // Create a new div element
        const div2 = document.createElement("div");
        // Set the class for the div element
        div2.className = "like";
        // Append the div element to the cardContent element
        cardContent.appendChild(div2);

        // the like button
        const i = document.createElement("i");
        i.className = "fas fa-heart";
        i.addEventListener("click", () => {
          i.classList.toggle("active");
        });
        div2.appendChild(i);
        // Create a new card body element that contains the fetched data
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        // Append the card body element to the card element
        card.appendChild(cardBody);
        const h4 = document.createElement("h4");
        h4.className = "card-title";
        h4.innerHTML = name;
        cardBody.appendChild(h4);

        // Create a paragraph element with the class "card-text"
        const p = document.createElement("p");
        p.className = "card-text";
        // Set the innerHTML of the paragraph element to a string containing the rating and class of the hotel
        p.innerHTML = `⭐ ${rating} ${Hotelclass}`;
        // Append the paragraph element to the card body
        cardBody.appendChild(p);

        // Create another paragraph element with that contains the hotel description
        const p3 = document.createElement("p");
        p3.className = "card-text";
        // Set the innerHTML of the paragraph element to the description of the hotel
        p3.innerHTML = description;
        // Append the paragraph element to the card body
        cardBody.appendChild(p3);

        // Create another paragraph element that containes the additional hotel information
        const p4 = document.createElement("p");
        p4.className = "card-text";
        p4.innerHTML = additional;
        cardBody.appendChild(p4);
        // Create another paragraph element with the hotel prices
        const p5 = document.createElement("p");
        p5.className = "card-text";
        p5.innerHTML = `<b>${price}</b> / night`;
        cardBody.appendChild(p5);

        // creates a button element for booking hotels
        const button = document.createElement("button");
        button.textContent = "Book";
        button.className = "btn btn-outline-primary";
        cardBody.appendChild(button);

        // event listener for when button is clicked
        button.addEventListener("click", () => {
          alert(`${name} has been successfully booked`);
          button.textContent = "Booked";
          button.className = "btn btn-outline-danger";
        });
      });
    });
  initMap();

  function initMap() {
    // The location of Nairobi
    var options = {
      zoom: 13,
      center: { lat: -1.291926, lng: 36.81923 },
    };
    // The map, centered at   Nairobi
    var map = new google.maps.Map(document.getElementById("map"), options);

    // add marker function
    const urrl = "https://api.jsonbin.io/v3/b/63a238d3dfc68e59d56d4d87";

    fetch(urrl)
      .then((response) => response.json())
      .then((data) => {
        const hotels = data.record.hotels;
        hotels.forEach((hotel) => {
          addMarker(hotel, map);
        });
      });

    function addMarker(hotel, map) {
      var marker = new google.maps.Marker({
        position: hotel.coords, // use the coords property from the hotel object as the position for the marker
        map: map,
      });

      // add an info window to the marker
      if (hotel.name) {
        const infowindow = new google.maps.InfoWindow({
          content:
            // content inside the info window
            `
        
          <img src="${hotel.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${hotel.name}</h5>
            <p class="card-text">⭐ ${hotel.rating} ${hotel.class}</p>
          </div>
        </div>`,
          // sets a width for the info windows
          maxWidth: 250,
        });
        marker.addListener("mouseover", function () {
          infowindow.open(map, marker);
        });
        marker.addListener("mouseout", function () {
          infowindow.close();
        });
      }
    }
  }

  // Create a nav element
  const header = document.createElement("nav");

  // Set the ID and style for the nav element
  header.id = "header";
  header.style.display = "none";

  // Append the nav element to the mainContent element
  mainContent.appendChild(header);

  // Create an anchor element for the logo
  const logo = document.createElement("a");

  // Set the href and class for the anchor element
  logo.href = "#";
  logo.className = "logo";

  // Set the text content for the anchor element
  logo.textContent = `Febias-Travels`;

  // Append the anchor element to the nav element
  header.appendChild(logo);

  // Create an unordered list element
  const list = document.createElement("ul");

  // Append the unordered list element to the nav element
  header.appendChild(list);

  // Create a list item element
  const li = document.createElement("li");

  // Append the list item element to the unordered list element
  list.appendChild(li);

  // Create an anchor element
  const a = document.createElement("a");

  // Set the href and text content for the anchor element
  a.href = "/index.html";
  a.textContent = `home`;

  // Append the anchor element to the list item element
  li.appendChild(a);

  // Create another list item element
  const li2 = document.createElement("li");

  // Append the list item element to the unordered list element
  list.appendChild(li2);

  // Create another anchor element
  const a2 = document.createElement("a");

  // Set the href and text content for the anchor element
  a2.href = "#";
  a2.textContent = `About`;

  // Append the anchor element to the list item element
  li2.appendChild(a2);

  // Create another list item element
  const li3 = document.createElement("li");

  // Append the list item element to the unordered list element
  list.appendChild(li3);

  // Create another anchor element
  const a3 = document.createElement("a");

  // Set the href and text content for the anchor element
  a3.href = "#";
  a3.textContent = `Services`;

  // Append the anchor element to the list item element
  li3.appendChild(a3);

  // Create another list item element
  const li4 = document.createElement("li");

  // Append the list item element to the unordered list element
  list.appendChild(li4);

  // Create another anchor element
  const a4 = document.createElement("a");

  // Set the href and text content for the anchor element
  a4.href = "#";
  a4.textContent = `Portfolio`;

  // Append the anchor element to the list item element
  li4.appendChild(a4);

  const li5 = document.createElement("li");
  list.appendChild(li5);

  const a5 = document.createElement("a");
  a5.href = "#";
  a5.textContent = `Team`;
  li5.appendChild(a5);

  const li6 = document.createElement("li");
  list.appendChild(li6);

  const a6 = document.createElement("a");
  a6.href = "#";
  a6.textContent = `Contact`;
  li6.appendChild(a6);

  window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  window.addEventListener("scroll", function () {
    const header = document.querySelector("#header");
    const logo = document.querySelector(".logo");

    // Add the header-scroll class to the header element when the user starts scrolling
    if (window.scrollY > 0) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }

    // Add the logo-scroll class to the logo element when the user starts scrolling
    if (window.scrollY > 0) {
      logo.classList.add("logo-scroll");
    } else {
      logo.classList.remove("logo-scroll");
    }
  });

  // get the login-screen element and store it in a variable
  const page = document.getElementById("login-screen");

  // create a form element and give it an id
  const form = document.createElement("form");
  form.id = "login";

  // add the form element to the page
  page.append(form);

  // create a login form element and add it to the page
  const loginForm = document.createElement("form");
  loginForm.className = "loginForm";
  page.appendChild(loginForm);

  // create a card element and add it to the login form
  const card = document.createElement("div");
  card.className = "card";
  card.id = "card";
  card.style = "width: 35rem";
  loginForm.appendChild(card);

  // create a card body element and add it to the card
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  card.appendChild(cardBody);
  const mb3 = document.createElement("div");
  mb3.className = "mb-3";
  cardBody.appendChild(mb3);

  // create a login element and add it to the mb3 element
  const login = document.createElement("p");
  login.className = "login";
  login.textContent = ` Login `;
  mb3.appendChild(login);

  // create a label element and add it to the mb3 element
  const label = document.createElement("label");
  label.className = "form-label";
  label.textContent = "Email address";
  label.style = "width: 32rem";
  mb3.appendChild(label);

  // create an input element and add it to the label element
  const input = document.createElement("input");
  input.className = "form-control";
  input.type = "email";
  input.id = "exampleInputEmail1";
  label.appendChild(input);

  // create a help element and add it to the card body
  const help = document.createElement("div");
  help.id = "emailHelp";
  help.className = "form-text";
  help.innerHTML = `We'll never share your email with anyone else.`;
  cardBody.appendChild(help);

  // create an mb3_2 element and add it to the card body
  const mb3_2 = document.createElement("div");
  mb3_2.className = "mb-3";
  cardBody.appendChild(mb3_2);

  // create a label2 element and add it to the mb3_2 element

  const label2 = document.createElement("label");
  label2.className = "form-label";
  label2.textContent = `Password`;
  label2.style = "width: 32rem";
  mb3_2.appendChild(label2);

  // create an input element for the password and add it to the label2 element
  const input2 = document.createElement("input");
  input2.className = "form-control";
  input2.id = "exampleInputPassword1";
  input2.type = "password";
  label2.appendChild(input2);

  // create a checkbox element and add it to the card body
  const checkbox = document.createElement("div");
  checkbox.className = "mb-3 form-check";
  cardBody.appendChild(checkbox);

  // create a box element and add it to the checkbox
  const box = document.createElement("input");
  box.type = "checkbox";
  box.className = "form-check-input";
  box.id = "exampleCheck1";
  checkbox.appendChild(box);

  // create a lable3 element and add it to the checkbox
  const lable3 = document.createElement("lable");
  lable3.className = "form-check-label";
  lable3.textContent = `i am not a robot`;
  checkbox.appendChild(lable3);

  // create a button element and add it to the card body
  const button = document.createElement("a");
  button.className = "btn btn-outline-dark";
  button.textContent = "Login";
  button.style = "width: 32rem";
  cardBody.appendChild(button);

  // create a link element and add it to the card body
  const link = document.createElement("a");
  link.className = "dontHaveAccount";
  link.textContent = "Do not have an account?";
  link.style = "width: 32rem";
  cardBody.appendChild(link);

  // create a sign up card element and hide it
  const signUpcard = document.getElementById("signupCard");
  signUpcard.style.display = "none";
  // add an event listener to the link element to display the sign up card when clicked
  link.addEventListener("click", () => {
    document.getElementById("card").style.zIndex = "0";
    signUpcard.style.display = "block";
  });
  // get the content element from the DOM
  const content = document.getElementById("content");

  // create an h2 element and set its text content
  const h2 = document.createElement("h2");
  h2.textContent = `The best hotels from all part of Kenya, all in one place`;
  // add the h2 element to the content element
  content.appendChild(h2);

  // create a p element and set its text content
  const p1 = document.createElement("p");
  p1.textContent = `We believe finding a hotel should be easy. We’ve partnered with the top 
sites to help you find the perfect hotel. We’ve designed VacationRenter from the ground up for the next generation of travelers.`;
  // add the p element to the content element
  content.appendChild(p1);

  // create an image element and set its src attribute
  const image = document.createElement("img");
  image.id = "image";
  image.src = "/image/Screenshot from 2022-12-14 23-32-45.png";
  // add the image element to the content element
  content.appendChild(image);

  // create an img element and set its src attribute
  const bg = document.createElement("img");
  bg.id = "background-image";
  bg.src = "/image/login.jpg";
  // add the img element to the page element
  page.appendChild(bg);

  // get the cardContent element from the DOM

  const cardContent = document.querySelector(".cardContent");
  cardContent.style.display = "none";

  const map = document.getElementById("map");
  map.style.display = "none";
  const main = document.querySelector("main");
  main.style.display = "none";
  const cardContainer = document.querySelector(".card-container");
  cardContainer.style.display = "none";

  const navbar = document.getElementById("navbar");
  document.getElementById("content").style.display = "block";
  document.getElementById("login-screen").style.display = "block";

  const button2 = document.getElementById("btn");
  button2.addEventListener("click", () => {
    main.style.display = "block";

    //hide the font logo element
    document.querySelector(".fontLogo").style.display = "none";
    //display the header element if it is not already displayed
    if (header.style.display === "none") {
      header.style.display = "block";
    }
    //display the cardContent element if it is not already displayed
    if (cardContent.style.display === "none") {
      cardContent.style.display = "block";
    }
    //display the map element if it is not already displayed
    if (map.style.display === "none") {
      map.style.display = "block";
    }
    //display the cardContainer element if it is not already displayed
    if (cardContainer.style.display === "none") {
      cardContainer.style.display = "block";
    }
    //hide the navbar element
    else {
      navbar.style.display = "none";
    }
    //hide the login screen
    document.getElementById("login-screen").style.display = "none";
    //hide the content element
    document.getElementById("content").style.display = "none";
    //hide the sign up card element
    document.getElementById("signupCard").style.display = "none";
  });
  //get the login button
  button.addEventListener("click", () => {
    //display the main element
    main.style.display = "block";
    //hide the font logo element
    document.querySelector(".fontLogo").style.display = "none";

    //display the header element if it is not already displayed
    if (header.style.display === "none") {
      header.style.display = "block";
    }
    //display the cardContent element if it is not already displayed
    if (cardContent.style.display === "none") {
      cardContent.style.display = "block";
    }
    //display the map element if it is not already displayed
    if (map.style.display === "none") {
      map.style.display = "block";
    }
    //display the cardContainer element if it is not already displayed
    if (cardContainer.style.display === "none") {
      cardContainer.style.display = "block";
    }
    //hide the navbar element
    else {
      navbar.style.display = "none";
    }
    //hide the login screen
    document.getElementById("login-screen").style.display = "none";
    //hide the content element
    document.getElementById("content").style.display = "none";
  });
};
