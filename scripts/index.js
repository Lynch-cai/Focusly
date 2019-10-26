let body = document.querySelector('body')
let sun = document.querySelector('.index_sun')
let moon = document.querySelector('.index_moon')
let stars = document.querySelectorAll('.index_star')
let grass_platform = document.querySelector('.index_ground_grass')
let river = document.querySelector('.index_river')
let tree01 = document.querySelectorAll('.index_tree01 div')
let tree02 = document.querySelectorAll('.index_tree02 div')
let campfire = document.querySelectorAll('.index_campfire_base')
let campfire_flames = document.querySelector('.index_campfire_fire')
let leaves_falling = document.querySelectorAll('.index_tree_leaf_falling')
let rain = document.querySelector('.index_rain')
let icons = document.querySelectorAll('ul.index_icon_container span')
let night_active = false, river_active = false, forest_active = false, campfire_active = false, rain_active = false, rain_first_click = true
const sound_night = new Audio ('music/night.mp3')
const sound_river = new Audio ('music/river.mp3')
const sound_forest = new Audio ('music/forest.mp3')
const sound_campfire = new Audio ('music/campfire.mp3')
const sound_rain = new Audio ('music/rain.mp3')
let music_slider = document.querySelectorAll('.index_icon_container li input')
sound_night.volume = 0.5;
sound_river.volume = 0.5;
sound_forest.volume = 0.5;
sound_campfire.volume = 0.5;
sound_rain.volume = 0.5;
music_slider[0].addEventListener( // change music value
    'mousemove',
    function(){
        sound_night.volume = (music_slider[0].value / 100)-0.01
    }
)
music_slider[1].addEventListener(
    'mousemove',
    function(){
        sound_river.volume = (music_slider[1].value / 100)-0.01
    }
)
music_slider[2].addEventListener(
    'mousemove',
    function(){
        sound_forest.volume = (music_slider[2].value / 100)-0.01
    }
)
music_slider[3].addEventListener(
    'mousemove',
    function(){
        sound_campfire.volume = (music_slider[3].value / 100)-0.01
    }
)
music_slider[4].addEventListener(
    'mousemove',
    function(){
        sound_rain.volume = (music_slider[4].value / 100)-0.01
    }
)
for (let i = 0; i < icons.length; i++) { //disable hover animation on pressed button
    icons[i].addEventListener(
        'click',
        ()=>{
            icons[i].classList.toggle('button_pressed')
            icons[i].classList.toggle('button_hover')
        }
    )
}
icons[0].addEventListener( //switch day to night / night to day & add shooting stars
    'click',
    ()=>{
        music_slider[0].classList.toggle('fade-in')
        body.classList.toggle('time_switch')
        sun.classList.toggle('time_switch')
        moon.classList.toggle('time_switch')
        for (let i = 0; i < stars.length; i++) {
            stars[i].classList.toggle('spawn_stars')
        }
        if (night_active == false){ // Start music
            night_active = true
            sound_night.loop = true;
            sound_night.play();
        }
        else{
            night_active = false
            sound_night.pause();
        }
    }
)
icons[1].addEventListener( //add river | have a glitch when we click to fast on the button
    'click',
    ()=>{
        music_slider[1].classList.toggle('fade-in')
        alreadyPressed = false
        grass_platform.classList.toggle('part_platform')
        grass_platform.classList.toggle('whole_platform')
        if(river.classList.contains('river_fill')||river.classList.contains('river_no_fill')){
            river.classList.toggle('river_fill')
            river.classList.toggle('river_no_fill')
            setTimeout(function(){
                river.classList.toggle('river_no_fill')
                river.style.left = '150px'
                river.style.bottom = '-8px'
                setTimeout(function(){
                    river.style.left = ''
                    river.style.bottom = ''
                }, 1000)
            }, 1000)
        }
        else{
            setTimeout(function(){
                river.classList.toggle('river_no_fill')
                setTimeout(function(){
                    river.classList.toggle('river_no_fill')
                    river.classList.toggle('river_fill')
                }, 1000)
            }, 1100)
        }
        if (river_active == false){ // Start music
            river_active = true
            sound_river.loop = true;
            sound_river.play();
        }
        else{
            river_active = false
            sound_river.pause();
        }
    }
)
icons[2].addEventListener( //add tree
    'click',
    ()=>{
        music_slider[2].classList.toggle('fade-in')
        for (let i = 0; i < 2; i++) {
            tree01[i].classList.toggle('spawn_tree')
        }
        for (let j = 0; j < 3; j++) {
            tree02[j].classList.toggle('spawn_tree')
        }
        setTimeout(function(){
            for (let k = 0; k < leaves_falling.length; k++) {
                leaves_falling[k].classList.toggle('spawn_leaves_falling')
            }
        }, 1500)

        if (forest_active == false){ // Start music
            forest_active = true
            sound_forest.loop = true;
            sound_forest.play();
        }
        else{
            forest_active = false
            sound_forest.pause();
        }
    }
)
icons[3].addEventListener( //add campfire
    'click',
    ()=>{
        music_slider[3].classList.toggle('fade-in')
        for (let i = 0; i < campfire.length; i++) {
            campfire[i].classList.toggle('spawn_campfire')
        }
        campfire_flames.classList.toggle('spawn_campfire_flames')
        if (campfire_active == false){ // Start music
            campfire_active = true
            sound_campfire.loop = true;
            sound_campfire.play();
        }
        else{
            campfire_active = false
            sound_campfire.pause();
        }
    }
)
icons[4].addEventListener( //add rain
    'click',
    ()=>{
        music_slider[4].classList.toggle('fade-in')
        if (rain_active == false){ // Start music
            rain_active = true
            sound_rain.loop = true;
            sound_rain.play();
        }
        else{
            rain_active = false
            sound_rain.pause();
        }
        spawn_rain()
    }
)
function spawn_rain(){ //add rain
    let rain_power = 100 // number of rain ray
    let temp_delay = 8/rain_power
    let rain_left_position = ''
    let rain_bottom_position = ''
    if(rain_first_click == true){
        rain_first_click = false
        for (let i = 0; i < rain_power; i++) {
            let rain_ray = document.createElement('div')
            rain.appendChild(rain_ray)
            temp_left_pos = (Math.floor(Math.random()*620)+200)+'px' // rain ray random position
            rain_ray.style.left = temp_left_pos
            temp_delay = temp_delay+(8/rain_power)
            rain_ray.style.animationDelay = temp_delay+'s'
        }
    }
    if(rain_active == true){
        rain.style.display ='block'
    }
    else{
        rain.style.display ='none'
    }
}
