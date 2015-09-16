/* Author: <mvdw at airmail dot cc> */

"use strict";

(function() {
    var sources = [
        "http://1339.cf/img/1.png",
        "http://1339.cf/img/2.png",
        "http://1339.cf/img/3.png",
        "http://1339.cf/img/4.png",
        "http://1339.cf/img/5.png",
        "http://1339.cf/img/6.png",
        "http://1339.cf/img/7.png",
        "http://1339.cf/img/8.png",
        "http://1339.cf/img/9.png",
        "http://1339.cf/img/10.png",
        "http://1339.cf/img/11.png",
        "http://1339.cf/img/12.png",
        "http://1339.cf/img/13.png",
        "http://1339.cf/img/14.png",
        "http://1339.cf/img/15.png",
        "http://1339.cf/img/16.png",
        "http://1339.cf/img/17.png",
        "http://1339.cf/img/18.png",
        "http://1339.cf/img/19.png",
        "http://1339.cf/img/20.png"
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

	sl.className = 'gril';
	sl.alt = 'qtgril';

    // Apply the element to the body. You can have it appended to a custom
    // element by changing 'document.body' to the requested DOM element.
    document.body.appendChild(sl);

    // Apply onload.
    Apply();

    // If you only want a new one when you refresh your page you comment this.
    // Reload();
})();

