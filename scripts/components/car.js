re.c('car')
  .requires('sprite sprite_racing_cars.png flicker body force')
  .namespaces({
    animations: {
      driveDown:  [1],
      driveUp:    [3],
      driveLeft:  [0],
      driveRight: [2]
    },

    initAnimations: function() {
      this.addFlicker('driveDown' , -1, 500, this.car_animations['driveDown'] );
      this.addFlicker('driveUp'   , -1, 500, this.car_animations['driveUp']   );
      this.addFlicker('driveLeft' , -1, 500, this.car_animations['driveLeft'] );
      this.addFlicker('driveRight', -1, 500, this.car_animations['driveRight']);
    }
  })
  .defines({
    sizeX:  32,
    sizeY:  32,

    bodyX:  32,
    bodyY:  32
  })
  .init(function() {
    this.regX = this.sizeX * 0.5;
    this.regY = this.sizeY * 0.5;

    this.car_initAnimations();
  })
  .dispose(function() {})
;
