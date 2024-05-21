//how js andle operations that take time to complete

console.log('this is the first line of ccode in this js file')

function withTimeout() {
    console.log('executed with time out os 3s')
}
setTimeout(withTimeout, 3000)

console.log('this is the last line of code');

// this event loop aligns the order of events in the queue in the order to execute
//the first console is fed to the staack executed the poped out the the function is fed to the stack
//the timer will run for 3secs then the callback is pushed to the queue
//the event loop checks if the stack cleared to handle any messege in the event wueue
// tne last console is then added to the stack executed then poped