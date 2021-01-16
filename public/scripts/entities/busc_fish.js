class BuscFish extends GoFish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/buscFish.png';
    this.isTasty = false;
  }

  // onClick(event) {
  //   let nearbyFish = window.fishtank.getProximateDenizens(this.position, 100);
  //   if (nearbyFish.length > 1) {
  //     for (let i = 1; i < nearbyFish.length; i++) {
  //       nearbyFish[i].kill();
  //       this.width += 5;
  //       this.height += 5;
  //     }
  //   }
  // }
  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S * (4));
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
    this.surgeSecondsLeft = Math.max(0, this.surgeSecondsLeft - PHYSICS_TICK_SIZE_S);

    let nearbyFish = window.fishtank.getProximateDenizens(this.position, 100).slice(1);
    if (nearbyFish.length >= 1) {
      if (nearbyFish[0].isTasty) {
        nearbyFish[0].kill();
        this.width *= 1.5;
        this.height *= 1.5;
      }
    }
  }
}
