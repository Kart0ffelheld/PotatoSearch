var Liquid = function(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
};
// Is the Mover in the Liquid?
Liquid.prototype.contains = function(m) {
    var p = m.position;
    return p.x < this.x + this.w / 2 && p.x > this.x - this.w / 2 && p.y < this.y + this.h / 2 && p.y > this.y - this.h / 2
};
// Calculate drag force
Liquid.prototype.calculateDrag = function(m) {
    // Magnitude is coefficient * speed squared
    var speed = m.velocity.mag();
    var dragMagnitude = this.c * speed * speed;
    // Direction is inverse of velocity
    var dragForce = m.velocity.copy();
    dragForce.mult(-1);
    // Scale according to magnitude
    // dragForce.setMag(dragMagnitude);
    dragForce.normalize();
    dragForce.mult(dragMagnitude);
    return dragForce;
};
Liquid.prototype.display = function() {
    noStroke();
    fill(liquidC);
    rect(this.x, this.y, this.w, this.h);
};