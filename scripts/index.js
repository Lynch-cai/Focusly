class Sounds_and_animations {
    constructor(){
        this.sound_night = new Audio('music/night.mp3')
        this.sound_river = new Audio('music/river.mp3')
        this.sound_forest = new Audio('music/forest.mp3')
        this.sound_campfire = new Audio('music/campfire.mp3')
        this.sound_rain = new Audio('music/rain.mp3')
        this.sounds = [this.sound_night, this.sound_river, this.sound_forest, this.sound_campfire, this.sound_rain]
        this.$music_slider = document.querySelectorAll('.index_icon_container li input')
        this.sound_is_active = [0,0,0,0,0]
        this.$icons = document.querySelectorAll('ul.index_icon_container span')
        this.$body = document.querySelector('body')
        this.$sun = document.querySelector('.index_sun')
        this.$moon = document.querySelector('.index_moon')
        this.$stars = document.querySelectorAll('.index_star')
        this.$grass_platform = document.querySelector('.index_ground_grass')
        this.$river = document.querySelector('.index_river')
        this.$tree01 = document.querySelectorAll('.index_tree01 div')
        this.$tree02 = document.querySelectorAll('.index_tree02 div')
        this.$campfire = document.querySelectorAll('.index_campfire_base')
        this.$campfire_flames = document.querySelector('.index_campfire_fire')
        this.$leaves_falling = document.querySelectorAll('.index_tree_leaf_falling')
        this.$rain = document.querySelector('.index_rain')
        this.$icons = document.querySelectorAll('ul.index_icon_container span')
        this.$music_slider = document.querySelectorAll('.index_icon_container li input')
        this.rain_first_click = true
    }
    init(){
        for (let i = 0; i < this.sounds.length; i++) { // repeat 5 times (or more if there's more sounds/icons)
            this.sounds[i].volume = 0.5 // set default volume to 0.5
            this.$icons[i].addEventListener(
                'click',
                ()=>{
                    this.$music_slider[i].classList.toggle('fade-in') // fade animation for music slider
                    this.$icons[i].classList.toggle('button_pressed') // enable/disable icons pressed animation
                    this.$icons[i].classList.toggle('button_hover') // disable/enable icons hover animation
                    if (this.sound_is_active[i] == 0) { // Start music if the sound is not active
                        this.sound_is_active[i] = 1
                        this.sounds[i].loop = true
                        this.sounds[i].play()
                    }
                    else { // stop music if the sound is active
                        this.sound_is_active[i] = 0
                        this.sounds[i].pause()
                    }
                }
            )
            this.$music_slider[i].addEventListener( // change music value
                'mousemove',
                () => {
                    this.sounds[i].volume = (this.$music_slider[i].value / 100) - 0.01
                }
            )
        }
        this.$icons[0].addEventListener( // [ICON 01 / SOUND 01] switch moon/sun & active stars shooting
            'click',
            ()=>{
                this.$body.classList.toggle('time_switch')
                this.$sun.classList.toggle('time_switch')
                this.$moon.classList.toggle('time_switch')
                for (let i = 0; i < this.$stars.length; i++) {
                    this.$stars[i].classList.toggle('spawn_stars')
                }
            }
        )
        this.$icons[1].addEventListener( // [ICON 02 / SOUND 02] change grass width & add river with animation
            'click',
            ()=>{
                this.$grass_platform.classList.toggle('part_platform')
                this.$grass_platform.classList.toggle('whole_platform')
                if (this.$river.classList.contains('river_fill') || this.$river.classList.contains('river_no_fill')) {
                    this.$river.classList.toggle('river_fill')
                    this.$river.classList.toggle('river_no_fill')
                    setTimeout(() => {
                        this.$river.classList.toggle('river_no_fill')
                        this.$river.style.left = '150px'
                        this.$river.style.bottom = '-8px'
                        setTimeout(() => {
                            this.$river.style.left = ''
                            this.$river.style.bottom = ''
                        }, 1000)
                    }, 1000)
                }
                else {
                    setTimeout(() => {
                        this.$river.classList.toggle('river_no_fill')
                        setTimeout(() => {
                            this.$river.classList.toggle('river_no_fill')
                            this.$river.classList.toggle('river_fill')
                        }, 1000)
                    }, 1100)
                }
            }
        )
        this.$icons[2].addEventListener( // [ICON 03 / SOUND 03] add tree & enable leaves falling
            'click',
            () => {
                for (let i = 0; i < 2; i++) {
                    this.$tree01[i].classList.toggle('spawn_tree')
                }
                for (let j = 0; j < 3; j++) {
                    this.$tree02[j].classList.toggle('spawn_tree')
                }
                setTimeout(() => {
                    for (let k = 0; k < this.$leaves_falling.length; k++) {
                        this.$leaves_falling[k].classList.toggle('spawn_leaves_falling')
                    }
                }, 1500)
            }
        )
        this.$icons[3].addEventListener( // [ICON 04 / SOUND 04] add campfire & enable flames
            'click',
            () => {
                for (let i = 0; i < this.$campfire.length; i++) {
                    this.$campfire[i].classList.toggle('spawn_campfire')
                }
                this.$campfire_flames.classList.toggle('spawn_campfire_flames')
            }
        )
        this.$icons[4].addEventListener( // [ICON 05 / SOUND 05] add rain (generate rain on the first click)
            'click',
            () => {
                if (this.rain_first_click == true) { // generation of the rain
                    let rain_power = 100 // number of rain ray (more power = more lag)
                    let temp_delay = 8 / rain_power
                    this.rain_first_click = false
                    for (let i = 0; i < rain_power; i++) {
                        let $rain_ray = document.createElement('div')
                        this.$rain.appendChild($rain_ray)
                        let temp_left_pos = (Math.floor(Math.random() * 620) + 200) + 'px' // rain ray random position
                        $rain_ray.style.left = temp_left_pos
                        temp_delay = temp_delay + (8 / rain_power)
                        $rain_ray.style.animationDelay = temp_delay + 's'
                    }
                }
                if (this.sound_is_active[4] == 1) { // show/hide rain
                    this.$rain.style.display = 'block'
                }
                else {
                    this.$rain.style.display = 'none'
                }
            }
        )
    }
}
let sounds_and_animation = new Sounds_and_animations()
sounds_and_animation.init()