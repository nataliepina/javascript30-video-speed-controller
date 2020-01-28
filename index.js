const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
    const y = e.pageY - this.offsetTop; // we can't assume that the bar is at the top of the page so we have to use the offset
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';  // to get a full percentage
    const playbackRate = percent * (max - min) + min; // playback rate lower and upper bounds calculation
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + '×';
    video.playbackRate = playbackRate;
  }

speed.addEventListener('mousemove', handleMove);