window.addEventListener("load", function(){
    fetch('data.json')
    .then((res) => res.json())
    .then(createHTML)
  });
  // console.dir(window);


// const hamB = document.getElementById('burger');
// const cross = document.getElementById('close');
// const nav = document.getElementById('nav');
// hamB.addEventListener('click', function(e) {
//   hamB.style.display = 'none';
//   cross.style.display = 'inline';
//   nav.style.display = 'flex';
// });
// cross.addEventListener('click', function(e){
// cross.style.display = 'none';
// nav.style.display = 'none';
// hamB.style.display = 'block';
// });


if (window.location.pathname === "/starter-code/destination-moon.html"){
  function createHTML(json){
    const moon = document.getElementById('moon');
    const para = document.getElementById('para-1');
    const travel = document.getElementById('time');
    const distance = document.getElementById('distance');
    const image1 = document.getElementById('image');
    moon.addEventListener('click', function() {
      image1.src =`${json.destinations[0].images.png}`;
      title.textContent = `${json.destinations[0].name}`;
      para.textContent = `${json.destinations[0].description}`
      distance.textContent = `${json.destinations[0].distance}`;
      travel.textContent = `${json.destinations[0].travel}`;

    });
    const mars = document.getElementById('mars');
    mars.addEventListener('click', function() {
      image1.src=`${json.destinations[1].images.png}`;
      title.textContent = `${json.destinations[1].name}`;
      para.textContent = `${json.destinations[1].description}`
      distance.textContent = `${json.destinations[1].distance}`;
      travel.textContent = `${json.destinations[1].travel}`;
    });
    const europa = document.getElementById('europa');
    europa.addEventListener('click', function() {
      image1.src=`${json.destinations[2].images.png}`;
      title.textContent = `${json.destinations[2].name}`;
      para.textContent = `${json.destinations[2].description}`
      distance.textContent = `${json.destinations[2].distance}`;
      travel.textContent = `${json.destinations[2].travel}`;
    });
    const titan = document.getElementById('titan');
    titan.addEventListener('click', function() {
      image1.src =`${json.destinations[3].images.png}`;
      title.textContent = `${json.destinations[3].name}`;
      para.textContent = `${json.destinations[3].description}`
      distance.textContent = `${json.destinations[3].distance}`;
      travel.textContent = `${json.destinations[3].travel}`;
    });
  }
};

if (window.location.pathname === "/starter-code/crew-commander.html"){
  function createHTML(json){
    let btn1, btn2, btn3, btn4, imageC, role, bio, name;
    with(document){
      btn1 = getElementById('cir-1');
      btn2 = getElementById('cir-2');
      btn3 = getElementById('cir-3');
      btn4 = getElementById('cir-4');
      role = getElementById('role');
      bio = getElementById('bio');
      name = getElementById('name');
      imageC = getElementsByClassName('i');
    }
    btn1.addEventListener('click', function(){
      imageC[0].src =`${json.crew[0].images.png}`;
      imageC[1].src =`${json.crew[0].images.png}`;
      name.textContent = `${json.crew[0].name}`;
      role.textContent = `${json.crew[0].role}`
      bio.textContent = `${json.crew[0].bio}`;
      console.dir(imageC)
    });
    btn2.addEventListener('click', function(){
      imageC[0].src =`${json.crew[1].images.png}`;
      imageC[1].src =`${json.crew[1].images.png}`;
      name.textContent = `${json.crew[1].name}`;
      role.textContent = `${json.crew[1].role}`
      bio.textContent = `${json.crew[1].bio}`;
      console.dir(imageC)
    });
    btn3.addEventListener('click', function(){
      imageC[0].src =`${json.crew[2].images.png}`;
      imageC[1].src =`${json.crew[2].images.png}`;
      name.textContent = `${json.crew[2].name}`;
      role.textContent = `${json.crew[2].role}`
      bio.textContent = `${json.crew[2].bio}`;
    });
    btn4.addEventListener('click', function(){
      imageC[0].src =`${json.crew[3].images.png}`;
      imageC[1].src =`${json.crew[3].images.png}`;
      name.textContent = `${json.crew[3].name}`;
      role.textContent = `${json.crew[3].role}`
      bio.textContent = `${json.crew[3].bio}`;
    });
  };
};

if (window.location.pathname === "/starter-code/technology-capsule.html"){
  console.dir(window.location)
  function createHTML(json){
    let btnOne, btnTwo, btnThree, name, description, imageT;
    with (document){
      btnOne = getElementById('btn-1');
      btnTwo = getElementById('btn-2');
      btnThree = getElementById('btn-3');
      name = getElementById('capsule');
      description = getElementById('description')
      imageT =getElementsByClassName('p')
    }
    btnOne.addEventListener('click', function(){
      name.textContent = `${json.technology[0].name}`;
      description.textContent = `${json.technology[0].description}`;
      imageT[0].src = `${json.technology[0].images.landscape}`
      imageT[1].src = `${json.technology[0].images.portrait}`;
    });
    btnTwo.addEventListener('click', function(){
      name.textContent = `${json.technology[1].name}`
      description.textContent = `${json.technology[1].description}`;
      imageT[0].src = `${json.technology[1].images.landscape}`
      imageT[1].src = `${json.technology[1].images.portrait}`;
    });
    btnThree.addEventListener('click', function(){
      name.textContent = `${json.technology[2].name}`;
      description.textContent = `${json.technology[2].description}`;
      imageT[0].src = `${json.technology[2].images.landscape}`;
      imageT[1].src = `${json.technology[2].images.portrait}`;
    });
  }
}
