function Tile(title) {
  this.title = title;
  this.flipped = false;
}

Tile.prototype.flip = function() {
  this.flipped = !this.flipped;
}


function Game(tileNames) {
  var tileDeck = makeDeck(tileNames);

  this.grid = makeGrid(tileDeck);
  this.unmatchedPairs = tileNames.length;
  //kliknięcie na obrazek
  this.flipTile = function(tile) {
    if (tile.flipped) {
      return;
    }
    //przewrót
    tile.flip();
    if (!this.firstPick || this.secondPick) {
      //zla para
      if (this.secondPick) {
        this.firstPick.flip();
        this.secondPick.flip();
        this.firstPick = this.secondPick = undefined;
      }

      this.firstPick = tile;

    } else {
      // odgadnieta para
      if (this.firstPick.title === tile.title) {
        this.unmatchedPairs--;
        this.firstPick = this.secondPick = undefined;
      } else {
        this.secondPick = tile;
      }
    }
  }
}

function Timer() {
  const fps = 1000/60;
  let counter = true;
  let timecount;

  function start(){
    timecount = 30000;
    timer();
  }

  function timer(){
    timecount-=fps;
    let helper = Math.round(timecount/1000);
    let color = Math.round(255/helper);
    console.error(color)
    if(timecount>0)
      setTimeout(timer, fps);
    else
      return 0;
  }
}


//zapełnianie tablicy
function makeDeck(tileNames) {
  var tileDeck = [];
  tileNames.forEach(function(name) {
    tileDeck.push(new Tile(name));
    tileDeck.push(new Tile(name));
  });

  return tileDeck;
}

//tasowanie
function makeGrid(tileDeck) {
  var gridDimension = Math.sqrt(tileDeck.length),
      grid = [];

  for (var row = 0; row < gridDimension; row++) {
    grid[row] = [];
    for (var col = 0; col < gridDimension; col++) {
        grid[row][col] = removeRandomTile(tileDeck);
    }
  }

  return grid;
}

//wspomaganie tasowania
function removeRandomTile(tileDeck) {
  var i = Math.floor(Math.random()*tileDeck.length);
  return tileDeck.splice(i, 1)[0];
}

