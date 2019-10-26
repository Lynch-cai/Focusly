let body = document.querySelector('body')
let sun = document.querySelector('.index_sun')
let moon = document.querySelector('.index_moon')
let grass_platform = document.querySelector('.index_ground_grass')
let river = document.querySelector('.index_river')
let tree01 = document.querySelectorAll('.index_tree01 div')
let tree02 = document.querySelectorAll('.index_tree02 div')
let campfire = document.querySelectorAll('.index_campfire_base')
let campfire_flames = document.querySelector('.index_campfire_fire')
let leaves_falling = document.querySelectorAll('.index_tree_leaf_falling')
let icons = document.querySelectorAll('ul.index_icon_container a')
let night_active = false, river_active = false, forest_active = false, campfire_active = false
const sound_night = new Audio ('music/night.mp3')
const sound_river = new Audio ('music/river.mp3')
const sound_forest = new Audio ('music/forest.mp3')
const sound_campfire = new Audio ('music/campfire.mp3')

for (let i = 0; i < icons.length; i++) { //disable hover animation on pressed button
    icons[i].addEventListener(
        'click',
        ()=>{
            icons[i].classList.toggle('button_pressed')
            icons[i].classList.toggle('button_hover')
        }
    )
}
icons[0].addEventListener( //switch day to night / night to day
    'click',
    ()=>{
        body.classList.toggle('time_switch')
        sun.classList.toggle('time_switch')
        moon.classList.toggle('time_switch')
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

        
        // if (test_active == false){ // Start music
        //     test_active = true
        //     sound_test.loop = true;
        //     sound_test.play();
        // }
        // else{
        //     test_active = false
        //     sound_test.pause();
        // }
    }
)