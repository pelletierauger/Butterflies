var x, y, r, n, da, xOffSpeed;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
    // noStroke();
    fill(255, 25);
    strokeWeight(1);
    stroke(255, 10);
    da = PI / 300;
    xOffSpeed = 0.05;
}

function draw() {
    translate(width / 2, height / 2);
    background(0);
    var xOff = 0;
    for (var i = 0.1; i < 1; i += 0.05) {
        beginShape();
        for (var a = -PI / 2; a <= PI / 2; a += da) {
            n = noise(xOff);
            n = lerp(i, n, i);
            r = map(n, 0, 1, 50, 625);
            x = r * cos(a) * i;
            y = r * sin(a) * i;
            xOff += xOffSpeed;
            // ellipse(x, y, 10, 10);
            vertex(x, y);
        }
        for (var a = PI / 2; a <= 3 * PI / 2; a += da) {

            n = noise(xOff);
            n = lerp(i, n, i);
            r = map(n, 0, 1, 50, 625);
            x = r * cos(a) * i;
            y = r * sin(a) * i;
            xOff -= xOffSpeed;
            // ellipse(x, y, 10, 10);
            vertex(x, y);
        }
        endShape(CLOSE);
    }
}
