export const character = function (ctx, x, y) {
  this.x = x;
  this.y = y;
  this.ctx = ctx;
  this.height = 50;
  this.width = 50;
  this.right = true;

  this.print = () => {
    this.ctx.fillStyle = '#ff0000';
    this.ctx.fillRect(this.x, this.y, this.height, this.width);
  }

  this.move = (speed) => {
    if (this.right) {
      if (this.x < 800 - this.width) {
        this.x+=speed;
      } else {
        this.right = false;
      }
    } else {
      if (this.x > 0) {
        this.x-=speed;
      } else {
        this.right = true;
      }
    }
  
  }
}