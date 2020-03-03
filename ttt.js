let currentCell; // number of the current cell, top-left is 1, bottom right is 9
let xo = true; // boolean variable, True = X, False = O

function setup() {
    canvas = createCanvas(700, 700);
    xos = []; // inserted Xs and Os go here
    occupied = [] // occupied cells go here
}

function draw() {
    background(255);

    strokeWeight(5);
    //grid
    line(width/3, 0, width/3, height);
    line(width/3*2, 0, width/3*2, height);
    line(0, height/3, width, height/3);
    line(0, height/3*2, width, height/3*2);

    for (let i = 0; i < xos.length; i++) {
        xos[i].show();
    }
}

function mouseClicked() {
    if (mouseX < width/3 && mouseX > 0) {
        if (mouseY < height/3 && mouseY > 0) {
            if (occupied.indexOf(1) == -1) {
                currentCell = 1;

                if (xo === true) {
                    xos.push(new X(currentCell));
                    xo = false;
                } else {
                    xos.push(new O(currentCell));
                    xo = true;
                }

                occupied.push(currentCell);
            }
        } else if (mouseY > height/3 && mouseY < height/3*2) {
            if (occupied.indexOf(4) == -1) {
                currentCell = 4;

                if (xo === true) {
                    xos.push(new X(currentCell));
                    xo = false;
                } else {
                    xos.push(new O(currentCell));
                    xo = true;
                }

                occupied.push(currentCell);
            }
        } else if (mouseY > height/3*2 && mouseY < height) {
            if (occupied.indexOf(7) == -1) {
                currentCell = 7;

                if (xo === true) {
                    xos.push(new X(currentCell));
                    xo = false;
                } else {
                    xos.push(new O(currentCell));
                    xo = false;
                }

                occupied.push(currentCell);
            }
        }
    } else if (mouseX < width/3*2 && mouseX > width/3) {
        if (mouseY < height/3) {
            if (occupied.indexOf(2) == -1) {
                currentCell = 2;

                if (xo === true) {
                    xos.push(new X(currentCell));
                    xo = false;
                } else {
                    xos.push(new O(currentCell));
                    xo = true;
                }

                occupied.push(currentCell);
            }
        } else if (mouseY < height/3*2 && mouseY > height/3) {
            if (occupied.indexOf(5) == -1) {
                currentCell = 5;

                if (xo === true) {
                    xos.push(new X(currentCell));
                    xo = false;
                } else {
                    xos.push(new O(currentCell));
                    xo = true;
                }

                occupied.push(currentCell);
            }
        } else if (mouseY > height/3*2 && mouseY < height) {
            if (occupied.indexOf(8) == -1) {
                currentCell = 8;

                if (xo === true) {
                    xos.push(new X(currentCell));
                    xo = false;
                } else {
                    xos.push(new O(currentCell));
                    xo = true;
                }

                occupied.push(currentCell);
            }
        }
    } else if (mouseX > width/3*2 && mouseX < width) {
        if (mouseY < height/3 && mouseY > 0) {
            if (occupied.indexOf(3) == -1) {
                currentCell = 3;

                if (xo === true) {
                    xos.push(new X(currentCell));
                    xo = false;
                } else {
                    xos.push(new O(currentCell));
                    xo = true;
                }

                occupied.push(currentCell);
            }
        } else if (mouseY > height/3 && mouseY < height/3*2) {
            if (occupied.indexOf(6) == -1) {
                currentCell = 6;

                if (xo === true) {
                    xos.push(new X(currentCell));
                    xo = false;
                } else {
                    xos.push(new O(currentCell));
                    xo = true;
                }

                occupied.push(currentCell);
            }
        } else if (mouseY > height/3*2 && mouseY < height) {
            if (occupied.indexOf(9) == -1) {
                currentCell = 9;

                if (xo === true) {
                    xos.push(new X(currentCell));
                    xo = false;
                } else {
                    xos.push(new O(currentCell));
                    xo = true;
                }

                occupied.push(currentCell);
            }
        }
    }
}

function X(cell) {

    this.show = function() {
        strokeWeight(5);

        if (cell === 1) {
            line(30, 30, width/3-30, height/3-30);
            line(width/3-30, 30, 30, height/3-30);
        } else if (cell === 2) {
            line(30+width/3, 30, width/3*2-30, height/3-30);
            line(width/3-30+width/3, 30, width/3+30, height/3-30);
        } else if (cell === 3) {
            line(width/3*2+30, 30, width/3*3-30, height/3-30);
            line(width/3*3-30, 30, width/3*2+30, height/3-30);
        } else if (cell === 4) {
            line(30, 30+height/3, width/3-30, height/3*2-30);
            line(width/3-30, 30+height/3, 30, height/3*2-30);
        } else if (cell === 5) {
            line(width/3+30, 30+height/3, width/3*2-30, height/3*2-30);
            line(width/3*2-30, 30+height/3, width/3+30, height/3*2-30);
        } else if (cell === 6) {
            line(width/3*2+30, 30+height/3, width/3*3-30, height/3*2-30);
            line(width/3*3-30, 30+height/3, width/3*2+30, height/3*2-30);
        } else if (cell === 7) {
            line(30, 30+height/3*2, width/3-30, height/3*3-30);
            line(width/3-30, height/3*2+30, 30, height/3*3-30);
        } else if (cell === 8) {
            line(width/3+30, 30+height/3*2, width/3*2-30, height/3*3-30);
            line(width/3*2-30, height/3*2+30, width/3+30, height/3*3-30);
        } else if (cell === 9) {
            line(width/3*2+30, 30+height/3*2, width/3*3-30, height/3*3-30);
            line(width/3*3-30, height/3*2+30, width/3*2+30, height/3*3-30);
        }
    }
}

function O(cell) {
    this.r = 190;

    this.show = function() {
        noFill();
        strokeWeight(5);

        if (cell === 1) {
            ellipse((width/3)/2, (height/3)/2, this.r);
        } else if (cell === 2) {
            ellipse((width/3)/2+width/3, (height/3)/2, this.r);
        } else if (cell === 3) {
            ellipse((width/3)/2+width/3*2, (height/3)/2, this.r);
        } else if (cell === 4) {
            ellipse((width/3)/2, (height/3)/2+height/3, this.r);
        } else if (cell === 5) {
            ellipse((width/3)/2+width/3, (height/3)/2+height/3, this.r);
        } else if (cell === 6) {
            ellipse((width/3)/2+width/3*2, (height/3)/2+height/3, this.r);
        } else if (cell === 7) {
            ellipse((width/3)/2, (height/3)/2+height/3*2, this.r);
        } else if (cell === 8) {
            ellipse((width/3)/2+width/3, (height/3)/2+height/3*2, this.r);
        } else if (cell === 9) {
            ellipse((width/3)/2+width/3*2, (height/3)/2+height/3*2, this.r);
        }
    }
}

function keyPressed() {
    if (keyCode === 32) {
        xos = [];
        occupied = [];
    }
}