const bgimg = ["0.jpg", 
               "1.jpg", 
               "2.jpg",
               "3.jpg", 
               "4.jpg",
               "5.jpg", 
               "6.jpg", 
              
]

const changeBgImg = bgimg[Math.floor(Math.random()*bgimg.length)];

const addImg = document.createElement("img");

addImg.classList.add("bagImg");

addImg.src = `img/${changeBgImg}`;

document.body.appendChild(addImg);

