class SadFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/sadFish.png';
    this.maxSwimSpeed = 1;
  }
  onClick(event) {
    setTimeout(()=> {
      this.imageUri = '/images/explo.jpg';
    }, 1000);

    setTimeout(()=> {
      this.kill();
    }, 6000);
  }
}

