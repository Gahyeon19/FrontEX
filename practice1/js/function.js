function showImg(imgName){
  let images = document.getElementById("images");
  images.src="images/" + imgName;
}

function hideImg(){
  let images = document.getElementById("images");
  images.src="";
}