class Stopwatch{
    constructor(){
        this.startTime=null;
        this.stopTime=0;
        this.isRunning=false;
    }
    start(){
        if(this.isRunning){
            alert('Stopwatch alredy Running');
            return;
        }
        else{
            this.startTime=Date.now();
            this.isRunning=true;
        }
    }
    stop(){
        if(!this.isRunning){
            alert('Stopwatch not Running');
            return;
        }
        this.stopTime +=Date.now()-this.startTime;
        this.isRunning=false;
    }
    duration(){
        if(this.isRunning){
            return (this.stopTime+(Date.now() - this.startTime) )/ 1000;
        }
        return this.stopTime/1000;
    }
}

const stopwatch= new Stopwatch();
const start=document.getElementById('start-time');
const stop = document.getElementById('stop-time');
const duration=document.getElementById('duration-btn');
const durationDisplay=document.getElementById('show-time');

start.addEventListener('click',()=>stopwatch.start());
stop.addEventListener('click',()=>stopwatch.stop());
duration.addEventListener('click',()=>{
    durationDisplay.textContent = 'Duration' + stopwatch.duration().toFixed(2) + ' seconds';
});
