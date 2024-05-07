import React, { useEffect } from 'react';

export const HeroSection = () => {
    useEffect(() => {
        function starWars() {
            var _speed = 500,
                _intensity = 200,
                _fps = 30,
                _width = window.innerWidth,
                _height = window.innerHeight,
                _halfWidth = _width / 2,
                _halfHeight = _height / 4,
                canvas = document.getElementById("space"),
                canvas2d = canvas.getContext("2d");

            canvas.width = _width;
            canvas.height = _height;

            function drawPath(b) {
                var d = b[0],
                    g = b[1],
                    h = b[2],
                    i = _speed / (_speed + h),
                    j = d * i + _halfWidth,
                    k = g * i + _halfHeight,
                    _alpha = Math.random();
                canvas2d.fillStyle = "rgba(255,255,255," + _alpha + ")";
                canvas2d.beginPath();
                canvas2d.arc(j + i, k, i, 0, 2 * Math.PI, false);
                canvas2d.fill();
            }

            function renderStars() {
                var j = [];
                for (var a = 0; a < _intensity; a++) {
                    var b = [400 * Math.random() - 200, 400 * Math.random() - 200, 400 * Math.random() - 200];
                    j.push(b);
                }
                return j;
            }

            function starAnims(j) {
                canvas2d.fillStyle = "#000000";
                canvas2d.globalAlpha = 0.8;
                canvas2d.fillRect(0, 0, _width, _height);
                for (var e = 0; e < _intensity; e++) {
                    var f = j[e],
                        i = f[2];
                    i -= 4;
                    if (i < -_speed) {
                        i += 400;
                    }
                    f[2] = i;
                    drawPath(f);
                }
            }

            var j = renderStars();

            setInterval(() => starAnims(j), _fps);
        }

        starWars();

        return () => {
            clearInterval();
        };
    }, []);

    return (
        <section className='relative w-full min-h-screen'>
            <canvas id="space" className='absolute top-0 left-0 w-full h-full'></canvas>
            <div className="content">
                <h1>
                    Hello there!
                    <span>I'm Romichis</span>
                </h1>
                <h2>
                    A Frontend Developer.
                </h2>
            </div>
        </section>
    );
};
