function setup() {
  createCanvas(400, 400);
  tiles = []
  for (var i = 0; i < 200; i++) {
    for (var j = 0; j < 200; j++) {
      tiles.push(new Tile(i * 40, j * 40))
    }
  }
}
var k = 1

var coordsx = []
var coordsy = []
function draw() {

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (j % 2 == 0) {
        if (i % 2 == 0) {
          fill(0, 0, 0);
        }
        else {
          fill(255, 0, 0);
        }
      }
      else {
        if (i % 2 == 0) {
          fill(255, 0, 0);
        }
        else {
          fill(0, 0, 0);
        }
      }
      rect(i * 40, j * 40, 40, 40);

      console.log(i, j)
      coordsx.push(i * 40)
      coordsy.push(j * 40)
      k = k + 1

        ;
    }
  }
  console.log(coordsx[6])

  for (let e = 0; e < 40; e++) {
    var o = Math.floor(Math.random() * (100 - 1) + 1)
    console.log(o)
    fill('rgb(0,255,0)');
    rect(coordsx[o], coordsy[o], 40, 40).color(4, 0, 0);
    console.log(coordsx[o], coordsy[o])

  }


  noLoop();
}

class Tile {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  render() {
    rect(this.x, this.y, 40, 40)
  }
}
//tiles.push(i = 0;) 
console.log("Hello world!");


