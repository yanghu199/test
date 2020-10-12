var img;
function preload() {
  //img = loadImage('data/mirror2.png');
}


function setup() {
//image(img, 0,0,200,400);
 //img.size(500,500);
 //img.width = 120;
 //img.height = 120;
 //console.log(img);
 //img.resize(500,500);
 
   let inp = createInput('');
  inp.input(myInputEvent);
}

function myInputEvent() {
  var fileName = this.value();
  img = loadImage('data/' + fileName + '.png');
  setTimeout(() => {
    image(img,20,20,60,60);  
  },2000);
  
  //console.log('you are typing: ', this.value());

}


function draw() {

}




///**
//* @description Open a new window.
//*/
//function openNewWindow(){
//  window.open("//www.baidu.com"); 
//}


//function onTextChange(){
//  // Change image.
//  const imgElement = document.getElementById('img1');
//  imgElement.setAttribute('src','//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png');
//}
