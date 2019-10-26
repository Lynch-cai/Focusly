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
let icons = document.querySelectorAll('ul.index_icon_container a')
let night_active = false, river_active = false, forest_active = false, campfire_active = false, rain_active = false
const sound_night = new Audio ('music/night.mp3')
const sound_river = new Audio ('music/river.mp3')
const sound_forest = new Audio ('music/forest.mp3')
const sound_campfire = new Audio ('music/campfire.mp3')
const sound_rain = new Audio ('music/rain.mp3')
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
icons[4].addEventListener( //add falling leaves
    'click',
    ()=>{
        if (rain_active == false){ // Start music
            rain_active = true
            sound_rain.loop = true;
            sound_rain.play();
            sound_rain.volume = 0.8;
        }
        else{
            rain_active = false
            sound_rain.pause();
        }
    }
)
function spawn_rain(){ //add rain
    let rain_power = 50 // number of rain ray
    let rain_left_position = ''
    let rain_bottom_position = ''
    for (let i = 0; i < rain_power; i++) {
        let rain_ray = document.createElement('div')
        rain.appendChild(rain_ray)
        temp_left_pos = Math.floor(Math.random()*150)
        

        console.log(temp)

        rain_ray.style
    }

}

spawn_rain()