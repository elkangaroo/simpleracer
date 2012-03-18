re.scene('play')
  .enter(function(map) {
    re.log('Entering scene <play> <' + map + '>');

    this.map = re(map + '.tmx')[0];
    this.map.create();

    this.map.cars[0].comp('player');
  })
  .exit(function() {
    this.map.dispose();
  })
;
