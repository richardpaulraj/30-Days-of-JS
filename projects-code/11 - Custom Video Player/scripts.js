const player = document.querySelector('.player')
const video = player.querySelector('.viewer')

const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip')
const ranges = player.querySelectorAll('.player__slider')




function togglePlay(){
    const method = video.paused ? 'play' : 'pause'
    video[method]()
}

function updateButton(){
   this.paused ? toggle.textContent = "▶" : toggle.textContent = "⏸"
}

function skip(){
    video.currentTime += Number(this.dataset.skip)
}

function handleRangeUpdate(){
    video[this.name] = this.value
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime 
}



toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

let flag = false
document.addEventListener('mousedown',()=> flag = true )
document.addEventListener('mouseup',()=> flag = false )


skipButtons.forEach(btn=> btn.addEventListener('click', skip))
ranges.forEach(range=> range.addEventListener("change", handleRangeUpdate))
ranges.forEach(range=> range.addEventListener("mousemove", handleRangeUpdate))

progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e)=> flag && scrub(e))

