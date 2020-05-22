const kit = document.querySelectorAll(".kit");

const keys = [];
kit.forEach(e=>{
    e = e.getAttribute("data-target");
    keys.push(parseInt(e));
});

const removeStyle = (e) =>{
    kit.forEach(el=>el.classList.remove("play"));
}

const play = (key, sound) =>{
    key.classList.add("play");

    sound.currentTime = 0;
    sound.play();
}

const playEffect = (e) =>{
    if(keys.indexOf(e.keyCode) !== -1){
        const key = document.querySelector(`.kit[data-target$="${e.keyCode}"]`);
        const sound =  document.querySelector(`.kit[data-target$="${e.keyCode}"] audio`);
        play(key,sound);
    }
}

const clickPlay = (e) =>{
    const key = e.target;
    const sound = key.querySelector("audio");
    play(key,sound);
}

// Playing with keyboard
window.addEventListener("keydown",playEffect);
// Playing with mouse
kit.forEach(e=>e.addEventListener("click", clickPlay));
// Remove style when transition ended
kit.forEach(e=>e.addEventListener("transitionend", removeStyle));
