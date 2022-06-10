
let state = true;

function start() {
    setTimeout(() => {
        if (state == true) {
            console.log("state is on");
            state = false
        } else {
            console.log("state is off");
            state = true
        }
        start()
    }, 1000);
}

start()