// Create a promise that resolves after 2 seconds and log a message when it’s done.
const promiseOne= new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("Work is Done");
        resolve();
    },2000)
});
promiseOne.then(()=>{
    console.log("Promise resolved after 2 seconds");
});


// Use async and await to handle the promise in an asynchronous function.
const promiseTwo=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("This is async await Example");
    },2000)
})

async function consumePromise(){
    const respones = await promiseTwo;
    console.log(respones); 
}
consumePromise();


//Experiment with setTimeout to log a message after a delay and setInterval to log a message repeatedly every second.
setTimeout(()=>{
    console.log("This message is logged after 3 seconds.");
},3000);

const interval=setInterval(()=>{
    console.log("This message is logged every seconds.");
},1000);

setTimeout(()=>{
    clearInterval(interval);
    console.log('Stopped logging every second.');
},10000);