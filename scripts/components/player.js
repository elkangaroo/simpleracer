re.c('player')
  .requires('car')
  .namespaces({
    driveDown: function() {
      this.posY += this.speed;
      this.velY += this.speed;

      this.flicker('driveDown');
    },
    driveUp: function() {
      this.posY -= this.speed;
      this.velY -= this.speed;

       this.flicker('driveUp');
    },
    driveLeft: function() {
      this.posX -= this.speed;
      this.velX -= this.speed;

      this.flicker('driveLeft');
    },
    driveRight: function() {
      this.posX += this.speed;
      this.velX += this.speed;

      this.flicker('driveRight');
    },
    idle: function() {

    }
  })
  .defines({
    speed:  5,

    update: function() {
      if(re.pressed('w', 'up')) {
        this.player_driveUp();
      } else if(re.pressed('s', 'down')) {
        this.player_driveDown();
      } else if(re.pressed('a', 'left')) {
        this.player_driveLeft();
      } else if(re.pressed('d', 'right')) {
        this.player_driveRight();
      } else {
        this.player_idle();
      }
    }
  })
  .init(function() {
    re.log('new component <player>');

    this.on({
      'update': this.update
    });
  })
  .dispose(function() {})
;
