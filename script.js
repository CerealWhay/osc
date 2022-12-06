new Vue({
    el: '#app',
    data: {
        c: null,

        x: 100, 
        y: 100,

        direction: 0,
    }, 
    computed: {
    },
    methods: {
        drawCube() {
            this.c.fillStyle = "rgba(200,0,0, 0.7)";
            this.c.fillRect(100, 100, 100, 100);
    
            this.c.fillStyle = "rgba(0,200,0, 0.7)"
            this.c.beginPath();
            this.c.moveTo(200, 100);
            this.c.lineTo(250, 75);
            this.c.lineTo(250, 175);
            this.c.lineTo(200, 200);
            this.c.fill();
    
            this.c.fillStyle = "rgba(0,0,200, 0.7)"
            this.c.beginPath();
            this.c.moveTo(100, 100);
            this.c.lineTo(150, 75);
            this.c.lineTo(250, 75);
            this.c.lineTo(200, 100);
            this.c.fill();
        },
        drawDino(x, y) {
            this.c.fillStyle = "rgba(100,100,100, 1)"

            this.c.beginPath();
            this.c.moveTo(x, y + 60);

            this.c.lineTo(x, y + 120);

            this.c.lineTo(x + 10, y + 120);

            this.c.lineTo(x + 10, y + 130);

            this.c.lineTo(x + 20, y + 130);
            this.c.lineTo(x + 20, y + 140);
            this.c.lineTo(x + 30, y + 140);
            this.c.lineTo(x + 30, y + 150);
            this.c.lineTo(x + 40, y + 150);
            this.c.lineTo(x + 40, y + 160);
            this.c.lineTo(x + 50, y + 160);
            this.c.lineTo(x + 50, y + 170);
            this.c.lineTo(x + 60, y + 170);
            this.c.lineTo(x + 60, y + 210);

            this.c.lineTo(x + 470 - 390, y + 210);
            this.c.lineTo(x + 470 - 390, y + 200);
            
            this.c.lineTo(x + 460 - 390, y + 200);
            this.c.lineTo(x + 460 - 390, y + 190);
            this.c.lineTo(x + 470 - 390, y + 190);
            this.c.lineTo(x + 470 - 390, y + 180);
            this.c.lineTo(x + 480 - 390, y + 180);
            this.c.lineTo(x + 480 - 390, y + 170);
            this.c.lineTo(x + 490 - 390, y + 170);
            this.c.lineTo(x + 490 - 390, y + 180);
            this.c.lineTo(x + 500 - 390, y + 180);

            this.c.lineTo(x + 500 - 390, y + 210);
            this.c.lineTo(x + 520 - 390, y + 210);
            this.c.lineTo(x + 520 - 390, y + 200);
            this.c.lineTo(x + 510 - 390, y + 200);
            this.c.lineTo(x + 510 - 390, y + 160);

            this.c.lineTo(x + 520 - 390, y + 160);
            this.c.lineTo(x + 520 - 390, y + 150);
            this.c.lineTo(x + 530 - 390, y + 150);
            this.c.lineTo(x + 530 - 390, y + 140);
            this.c.lineTo(x + 540 - 390, y + 140);

            this.c.lineTo(x + 540 - 390, y + 110);
            this.c.lineTo(x + 550 - 390, y + 110);
            this.c.lineTo(x + 550 - 390, y + 120);
            this.c.lineTo(x + 560 - 390, y + 120);
            this.c.lineTo(x + 560 - 390, y + 100);
            this.c.lineTo(x + 540 - 390, y + 100);
            this.c.lineTo(x + 540 - 390, y + 80);

            this.c.lineTo(x + 580 - 390, y + 80);
            this.c.lineTo(x + 580 - 390, y + 70);
            this.c.lineTo(x + 550 - 390, y + 70);
            this.c.lineTo(x + 550 - 390, y + 60);
            this.c.lineTo(x + 600 - 390, y + 60);
            this.c.lineTo(x + 600 - 390, y + 10);
            this.c.lineTo(x + 590 - 390, y + 10);
            this.c.lineTo(x + 590 - 390, y);

            this.c.lineTo(x + 510 - 390, y);
            this.c.lineTo(x + 510 - 390, y + 10);
            this.c.lineTo(x + 500 - 390, y + 10);
            this.c.lineTo(x + 500 - 390, y + 80);

            this.c.lineTo(x + 490 - 390, y + 80);
            this.c.lineTo(x + 490 - 390, y + 90);
            this.c.lineTo(x + 470 - 390, y + 90);
            this.c.lineTo(x + 470 - 390, y + 100);
            this.c.lineTo(x + 450 - 390, y + 100);
            this.c.lineTo(x + 450 - 390, y + 110);
            this.c.lineTo(x + 440 - 390, y + 110);
            this.c.lineTo(x + 440 - 390, y + 120);

            this.c.lineTo(x + 420 - 390, y + 120);

            this.c.lineTo(x + 420 - 390, y + 110);
            this.c.lineTo(x + 410 - 390, y + 110);
            this.c.lineTo(x + 410 - 390, y + 100);
            this.c.lineTo(x + 400 - 390, y + 100);

            this.c.lineTo(x + 400 - 390, y + 60);
            this.c.lineTo(x + 390 - 390, y + 60);
            this.c.fill();

            this.c.fillStyle = 'white';
            this.c.fillRect(x + 520 - 390, y + 10, 10, 10);
        },
        keyDown(e) {

            switch(e.keyCode) {
                case 38:
                    this.c.clearRect(0, 0, 900, 500);
                    this.c.save();
                    this.y -= 5;
                    this.drawDino(this.x, this.y)
                    this.c.restore();
                    break;
                case 39:
                    this.c.clearRect(0, 0, 900, 500);
                    this.c.save();
                    this.x += 5;
                    this.drawDino(this.x, this.y)
                    this.c.restore();
                    break;
                case 40:
                    this.c.clearRect(0, 0, 900, 500);
                    this.c.save();
                    this.y += 5;
                    this.drawDino(this.x, this.y)
                    this.c.restore();
                    break;
                case 37:
                    this.c.clearRect(0, 0, 900, 500);
                    this.c.save();
                    this.x -= 5;
                    this.drawDino(this.x, this.y)
                    this.c.restore();
                    break;
            }
        },
        clear() {
            this.c.clearRect(0, 0, 900, 500);
        },
        drawCircle() {
            this.c.fillStyle = "rgba(100,100,100, 1)"
            this.c.arc(300, 300, 100, 0, 6, true);
            this.c.stroke();
        }
    },
    mounted() {
        const canvas = document.getElementById("canvas")
        this.c = canvas.getContext("2d"); 
        document.onkeydown = this.keyDown;

        this.drawCircle()

    },
})