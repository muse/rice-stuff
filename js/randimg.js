/* Author: <mvdw at airmail dot cc> */

"use strict";

(function() {
    var sources = [
    ];

    var Apply = function() {
        var fx = function() {
            return Math.floor(Math.random() * sources.length)
        };
        while (vx == old) {
            vx = fx();
            if (vx != old) {
                break;
            }
        }
        sl.src = sources[vx];
        old = vx;
    };

    var Reload = function() {
        var timeout = window.setTimeout(function(){
            Apply();
            Reload();
        }, (delay || 1000));
    };

    var sources;
    var delay = 1000;
    var old;
    var sl = document.createElement('img');
    var vx;

	sl.className = 'img-sticky';
	sl.alt = 'random image';

    // Apply the element to the body. You can have it appended to a custom
    // element by changing 'document.body' to the requested DOM element.
    document.body.appendChild(sl);

    // Apply onload.
    Apply();

    // If you only want a new one when you refresh your page you comment this.
    // Reload();
})();

