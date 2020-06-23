let hrSpot = document.querySelector(".hrs");
let minSpot = document.querySelector(".mins")
let secSpot = document.querySelector(".secs")
let merSpot = document.querySelector(".meridian")





function displayTime() {
    console.log("displayTime ran");
    let now = new Date();
    let hrNow = now.getHours();
    let minNow = now.getMinutes();
    let secNow = now.getSeconds();


    if (secNow < 10) {
        secNow = "0" + secNow;
    }

    secSpot.innerHTML = secNow;

    if (minNow < 10) {
        minNow = "0" + minNow;
    }

    minSpot.innerHTML = minNow;

    if (hrNow < 12) {
        merSpot.innerHTML = "AM"
    } else if (hrNow >= 12) {
        merSpot.innerHTML = "PM"
    }

    if (hrNow > 12) {
        hrNow = hrNow - 12;
    }

    hrSpot.innerHTML = hrNow;

}


function syncClock() {

    let now = new Date();
    let hrNow = now.getHours();
    let minNow = now.getMinutes();
    let secNow = now.getSeconds();

    let pointers = [
        {
            pointer: "h",
            angle: (hrNow * 30) + (minNow / 2)
        },
        {
            pointer: "m",
            angle: (minNow * 6)
        },
        {
            pointer: "s",
            angle: (secNow * 6)
        }
    ];

    console.log(pointers)

    //Loop through each point to set angle
    for (let i = 0; i < pointers.length; i++) {
        let pointerArray = document.querySelectorAll("." + pointers[i].pointer + "-pointer-container"); //This is an array of each of the clcok hand divs
        //Now loop through pointerArray, and apply transform styling to each, for each pointer angle
        // console.log(pointerArray);
        for (let j = 0; j < pointerArray.length; j++) {
            pointerArray[j].style.transform = `rotateZ(${pointers[i].angle}deg)`;
        }
    };
}

syncClock();
displayTime();
setInterval(displayTime, 1000);
setInterval(syncClock, 1000);