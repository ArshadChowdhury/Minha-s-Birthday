var bDay = new Date("Oct 16, 2022 00:00:00").getTime();
var now = new Date().getTime();
var t = bDay - now;
var i = 0;

window.onload = showImage;

var x = setInterval(countDown);
var y = setInterval(showImage, 4300);

function countDown() {
    now = new Date().getTime();
    t = bDay - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);

    if (t < 0) {
        document.getElementById("demo").innerHTML = " Happy Birthday To Minhaaa <br>🎉🎉🎉🎉";
        document.getElementById("heading").innerHTML = "Finally The Wait Is Over!<br>Today Is Minha's Birthday 🎈🎈";
    } else {
        document.getElementById("heading").innerHTML = "Countdown To Minha's Birthday <br>🤗🤗🤗🤗";
        document.getElementById("demo").innerHTML = days + " days " +
            hours + " hours " + minutes + " min " + seconds + " sec  ";
    }
};

function showImage() {
    if (t < 0) {
        var images = [];
        images[0] = "https://c.tenor.com/gr1UIQ9pNjYAAAAM/musicaljourney84-funny.gif";
        images[1] = "https://c.tenor.com/GSTzWoaPefAAAAAM/holiday-classics-elf.gif";
        images[2] = "https://i.giphy.com/media/skchcaSf0kInFwXn7O/200w.webp";
        images[3] = "https://c.tenor.com/8HE83OwGVrMAAAAj/happy-birthday-hbd.gif";

        document.slide.src = images[i];
        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }

    } else {
        var imagess = [];
        imagess[0] = "https://c.tenor.com/U4ss8KmnGZMAAAAM/wait-waiting.gif";
        imagess[1] = "https://c.tenor.com/-P-xeHYEY9QAAAAM/sad-pablo-lonely.gif";
        imagess[2] = "https://c.tenor.com/XD_jzROztIYAAAAM/rebecca-jack-black.gif";
        imagess[3] = "https://c.tenor.com/rec5dlPBK2cAAAAM/mr-bean-waiting.gif"

        document.slide.src = imagess[i];
        if (i < imagess.length - 1) {
            i++;
        } else {
            i = 0;
        }
    }
}
