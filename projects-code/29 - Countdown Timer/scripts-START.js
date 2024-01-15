let countdown;
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')


function timer(seconds){

    clearInterval(countdown) // to clear the existing timers

    const now = Date.now()
    const then = now + (seconds * 1000) //because now will be in milliseconds
    displayTimeLeft(seconds) //we are running because if we input 3 seconds then it wont diplay 3 directly after a seconds it willl display 2 so to display the cureent number first we did this

    displayEndTime(then)

    countdown = setInterval(()=>{
        const secondsLeft = Math.round( (then - Date.now()) / 1000 )
        if(secondsLeft < 0){
            clearInterval(countdown)
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000)
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = ( (seconds % 60) <  10 ) ? `0${Math.floor(seconds % 60)}` : Math.floor(seconds % 60)

    const display = `${minutes}:${remainderSeconds}`
    document.title = display
    timerDisplay.textContent = display
    
}

function displayEndTime(timestamp){
    const end = new Date(timestamp)
    const hour = end.getHours()
    const minutes = end.getMinutes()

    endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0': ''}${minutes}`

}

function startTimer(){
    const seconds = Number(this.dataset.time)
    // console.log(seconds)
    timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', function(e){
    e.preventDefault()
    const mins = (this.minutes.value) * 60 // we can also excess the element even with his name tag like how we did here in .minutes
    
    timer(mins)

    this.reset()
})  