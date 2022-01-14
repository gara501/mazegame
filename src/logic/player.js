export const player = function (ctx, x, y, image) {
  this.x = x;
  this.y = y;
  this.ctx = ctx;
  this.height = 50;
  this.width = 50;
  this.right = true;
  this.image = image;
  this.speed = 10;

  this.print = () => {
    this.ctx.drawImage(this.image, this.x, this.y);
  }

  this.up = () => {
    this.y -= this.speed;
  }

  this.down = () => {
    this.y += this.speed;
  }

  this.left = () => {
    this.x -= this.speed;
  }

  this.right = () => {
    this.x += this.speed;
  }
}