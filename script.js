const photos = ["PHOTO1.jpg", "PHOTO2.jpg"];

let index = 0;

setInterval(() => {
    index++;
    if (index >= photos.length) index = 0;
    document.getElementById("photo").src = photos[index];
}, 3000);

document.getElementById("btn").addEventListener("click", function () {

    // Cake animation
    document.querySelector(".cake").innerHTML = "🎂✨";

    // Love Letter
    document.getElementById("letter").classList.remove("hidden");

    // Fireworks
    for (let i = 0; i < 80; i++) {

        let fire = document.createElement("div");

        fire.className = "fire";

        fire.innerHTML = ["🎆","✨","🎉","💖","💝"][Math.floor(Math.random()*5)];

        fire.style.left = Math.random()*100 + "vw";

        fire.style.top = Math.random()*100 + "vh";

        fire.style.fontSize = (20 + Math.random()*25) + "px";

        document.body.appendChild(fire);

        setTimeout(()=>{
            fire.remove();
        },1600);
    }

    this.innerHTML = "❤️ Happy Birthday Anita ❤️";

});
/* Floating Hearts */

setInterval(()=>{

const heart=document.createElement("div");

heart.className="float-heart";

const emoji=["❤️","💖","💕","💗","💘"];

heart.innerHTML=emoji[Math.floor(Math.random()*emoji.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(5+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},500);
