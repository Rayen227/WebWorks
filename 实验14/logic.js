window.onload = function () {
    var controlPanel = document.getElementById("controlPanel");
    var video = document.getElementById("video");
    var play = document.getElementById("play");
    var progress = document.getElementById("progress");
    var progressDone = document.getElementById("progressDone");
    var progressDot = document.getElementById("progressDot");
    var silence = document.getElementById("silence");
    var sound = document.getElementById("sound");
    var soundDot = document.getElementById("soundDot");
    var soundDone = document.getElementById("soundDone");
    var full = document.getElementById("full");
    // console.log(video.volume)
    soundDone.style.width = video.volume * 100 + '%';
    soundDot.style.left = video.volume * 100 - 3 + '%';

    play.onclick = function () {
        if (video.paused) {
            video.play();
            play.className = "pause";
        }
        else {
            video.pause();
            play.className = "play";
        }
    }

    silence.onclick = function () {
        if (video.muted) {
            video.muted = false;
            silence.className = "silenceOn";
        } else {
            video.muted = true;
            silence.className = "silenceOff";
        }
    }

    full.onclick = function () {
        video.requestFullscreen();
    }

    video.ontimeupdate = function () {
        var curTime = video.currentTime;
        var duration = video.duration;
        var scale = curTime / duration;
        progressDone.style.width = scale * 100 + "%";
        progressDot.style.left = scale * 100 - 0.5 + "%";
    }

    progressDot.onmousedown = function () {
        video.pause();
        var curTime;
        document.onmousemove = function (e) {
            var left = e.clientX - controlPanel.offsetLeft - progress.offsetLeft;
            if (left <= 0) left = 0;
            else if (left >= progress.offsetWidth) left = progress.offsetWidth;
            // console.log(left);
            progressDone.style.width = left + 'px';
            progressDot.style.left = left - 5 + 'px';
            var scale = left / progress.offsetWidth;
            curTime = scale * video.duration;
        }
        document.onmouseup = function (e) {
            if (curTime) {
                video.currentTime = curTime;
            }
            video.play();
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

    soundDot.onmousedown = function () {
        var curVolume;
        document.onmousemove = function (e) {
            var left = e.clientX - controlPanel.offsetLeft - sound.offsetLeft;

            if (left <= 0) left = 0;
            else if (left >= sound.offsetWidth) left = sound.offsetWidth;
            // console.log(left);
            soundDone.style.width = left + 'px';
            soundDot.style.left = left - 3 + 'px';
            var scale = left / sound.offsetWidth;
            console.log(scale);
            curVolume = scale * 1;
        }
        document.onmouseup = function (e) {
            if (curVolume) {
                video.volume = curVolume;
            }
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
}