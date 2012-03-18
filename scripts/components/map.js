re.c('map')
  .requires('')
  .namespaces({
    layers: [
      'map',
      'hitmap',
      'decoration'
    ],

    placeTiles: function(layer) {
      var tiles = layer.data.$;

      for(var y = 0; y < tiles.length; y++) {
        for(var x = 0; x < tiles[0].length; x++) {
          var tile = tiles[y][x];

          if(tile == 0) {
            continue;
          }

          re.e('tile')
            .tile(x, y)
            .frame(tile - 1)
          ;

          if(layer.name == 'hitmap') {
            re.hitmap.automap(x, y, 1);
          }
        }
      }
    },

    placeCars: function() {
      var cars = this.objectgroup.object;

      if(!cars.length) {
        this.map_addCar(cars);
        return;
      }

      for(var i = 0; i < cars.length; i++) {
        this.map_addCar(cars[i]);
      }
    },

    addCar: function(car) {
      this.cars.push(
        re.e('car ' + car.name).attr({
          posX: car.x,
          posY: car.y - re.tile.sizeY
        })
      );
    }
  })
  .defines({
    cars: [],

    create: function() {
      re.hitmap = re.entity('hitmap');

      var layers = this.layer;

      for(var i = 0; i < layers.length; i++) {
        this.map_placeTiles(layers[i]);
      }

      this.map_placeCars();
    }
  })
  .init(function() {})
  .dispose(function() {
    re('tile').dispose();
    re('car').dispose();
    re.hitmap.dispose();
  })
;
