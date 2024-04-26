intervalID = setInterval(printTime, 1000);

function printTime() {
    let b = new Date();
    let timeCurr = b.toLocaleTimeString();
    console.log(timeCurr);
  }
