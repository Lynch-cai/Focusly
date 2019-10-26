let body = document.querySelector('body')
let sun = document.querySelector('.index_sun')
let moon = document.querySelector('.index_moon')
let grass_platform = document.querySelector('.index_ground_grass')
let river = document.querySelector('.index_river')
let tree01 = document.querySelectorAll('.index_tree01 div')
let tree02 = document.querySelectorAll('.index_tree02 div')
let campfire = document.querySelectorAll('.index_campfire_base')
let campfire_flames = document.querySelector('.index_campfire_fire')
let icons = document.querySelectorAll('ul.index_icon_container a')
let night_active = false, river_active = false, tree_active = false, fire = false
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
        if (night_active == false){
            night_active = true
            // music
        }
        else{
            // cut music
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
    }
)
icons[3].addEventListener( //add campfire
    'click',
    ()=>{
        for (let i = 0; i < campfire.length; i++) {
            campfire[i].classList.toggle('spawn_campfire')
        }
        campfire_flames.classList.toggle('spawn_campfire_flames')
    }
)