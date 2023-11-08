var snowfall = document.getElementById("snowfall");
var numFlakes = 50; // Số lượng tuyết rơi

// Tạo tuyết rơi
for (var i = 0; i < numFlakes; i++) {
  var snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.innerHTML="❄";
  snowflake.style.left = Math.random() * 100 + "%";
  snowflake.style.animationDuration = Math.random() * 10 + 10 + "s";
  snowfall.appendChild(snowflake);
}

var to = 'Sushi thúi!';
var gift_url='hoa.jpg';
var gift_image_url = 'chandoi.jpg';


var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() 
{
  var _giftLink, 
      _giftImg;
  if (gift_url) 
  {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  if (gift_image_url) 
  {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) 
	{
      _giftLink.appendChild(_giftImg);
    } else 
	{
      presentImage.appendChild(_giftImg);
    }
  }  
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
	document.getElementById('card').classList.add('cardshow');
  }, false);
  nametag.innerText = to;
}
init();