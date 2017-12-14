var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;
//hardcode target as center
//randomize later
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;

var lam = document.createElement("div");
lam.id = "lamb";
lam.style.position = "absolute";
lam.style.x = targetX;
lam.style.y = targetY;
lam.style.height = 100+"px";
lam.style.width = 100+"px";
lam.style.display = "none";
lam.style.backgroundColor = "white";
box.appendChild(lam)
var lamb = document.getElementById("lamb");

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );
//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return Math.sqrt((x0 - x1)**2 + (y0 - y1)**2);
};

var scalar = function(x, y){
  return Math.sqrt(((x) ** 2) + ((y) ** 2))
}

var findIt = function(e) {
  //console.log(e);
  //console.log("" + distance(targetX, targetY, e.x, e.y));
  box.style.backgroundColor = "rgb(" + distance(targetX, targetY, e.x, e.y) * (256/scalar(Math.abs(targetX), Math.abs(targetY)  )) + ", 0, 0)";
}

var foundIt = function(e) {
  if(distance(targetX, targetY, e.x, e.y) <= 50){
    lamb.style.display = "inline";
  }
}
/*
your OTHER FXNS
*/
box.addEventListener("onclick", foundIt);
box.addEventListener("mousemove", findIt);
