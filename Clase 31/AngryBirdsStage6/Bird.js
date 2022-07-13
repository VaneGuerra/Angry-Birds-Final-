class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.trayectoria = [];
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
   
    super.display();
    if (this.body.position.x > 200 && this.body.velocity.x > 10 ){
      var posicion = [this.body.position.x, this.body.position.y];
      this.trayectoria.push(posicion);
    }

    for (var i = 0; i< this.trayectoria.length; i++){
      image(this.smoke, this.trayectoria[i][0], this.trayectoria[i][1]);
    }
  }
}
