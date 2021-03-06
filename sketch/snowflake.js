class SnowFlake {

    constructor() {
        let x = random(width);
        let y = random(-100, -10);
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector();
        this.radius = random(4,8);
    }

    applyForce(force) {
        this.acc.add(force);
    }
    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    render() {
        stroke(255);
        strokeWeight(this.radius);
        point(this.pos.x, this.pos.y);
    }

}