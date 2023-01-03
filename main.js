
function preload() {
    img_orig =
      loadImage("https://th.bing.com/th/id/OIP.knKH5EP0FoRnBr85JNugaAHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7");

}
function setup() {
    createCanvas(1500, 1500);
  }
  
  function draw() {

          
    background(220);
      
    // Use color() function
    let c = color('pink');
    image(img_orig, 535, 345, 200, 100);
    // Use fill() function to fill color
    fill(c);
    
    // Draw a circle 
    circle(100, 100, 150); 
    circle(1375, 100, 150);
    circle(100, 500, 150); 
    circle(1375, 500, 150); 
    strokeWeight(10);
    line(200, 100, 1275, 100);
    line(200, 500, 1275, 500);
    line(95, 394, 95, 199)
    line(1365,394 , 1365, 199)
    console.log(mouseX, mouseY);
  }