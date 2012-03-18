re.scene('load')
  .enter(function() {
    re.log('Entering scene <load>');

    re.tile.sizeX = 32;
    re.tile.sizeY = 32;

    re.load(re.assets)
      .complete(function() {
        re.log('Finished loading assets');

        // align screen top/left
        re.screen.posX -= re.tile.sizeX * 0.5;
        re.screen.posY -= re.tile.sizeY * 0.5;

        re.e('text align keyboard')
          .text('Press space to start!')
          .alignHor(-80)
          .alignVer(-20)
          .on('keyup:space', function() {
            re.scene('play').enter('map01');
          })
        ;
      })
      .error(function(e) {
        re.log('Error loading asset: ' + e);
      })
      .progress(function(e) {})
  })
  .exit(function() {
    re('draw').dispose();
  })
;
