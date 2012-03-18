re.c('tile')
  .requires('sprite tileset_32px.png')
  .defines({})
  .init(function() {
    this.sizeX = re.tile.sizeX;
    this.sizeY = re.tile.sizeY;

    this.bodyX = re.tile.sizeX;
    this.bodyY = re.tile.sizeY;

    this.regX = this.sizeX * 0.5;
    this.regY = this.sizeY * 0.5;
  })
  .dispose(function() {})
;
