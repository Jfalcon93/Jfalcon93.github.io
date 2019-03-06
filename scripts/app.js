let about = document.querySelector('#about')
let aboutHeader = document.querySelector('#aboutMe')
let music = document.querySelector('#music')
let musicHeader = document.querySelector('#music-header')
let basketball = document.querySelector('#basketball')
let basketballHeader = document.querySelector('#basketball-header')

const displayTrigger = document.querySelector('#aboutMe').addEventListener('click', function (e) {
    e.preventDefault()
    
    if (music.style.display || basketball.style.display) {
        music.style.display = 'none'
        musicHeader.style.textShadow = ''
        basketball.style.display = 'none'
        basketballHeader.style.textShadow = ''
    }
    
    if (about.style.display) {
        about.style.display = ((about.style.display != 'none') ? 'none' : 'block')
        aboutHeader.style.textShadow = ((aboutHeader.style.textShadow != '') ? '' : '2px 2px 8px #BD10E0')
    } else {
        about.style.display = 'block'
        aboutHeader.style.textShadow = '2px 2px 8px #BD10E0'
    } 
    //about.style.display = ('none') ? about.style.display = 'block' : about.style.display = 'none'
})

const displayTriggerMusic = document.querySelector('#music-header').addEventListener('click', function (e) {
    e.preventDefault()
    
    if (about.style.display || basketball.style.display) {
        about.style.display = 'none'
        aboutHeader.style.textShadow = ''
        basketball.style.display = 'none'
        basketballHeader.style.textShadow = ''
    }
    
    if (music.style.display) {
        music.style.display = ((music.style.display != 'none') ? 'none' : 'block')
        musicHeader.style.textShadow = ((musicHeader.style.textShadow != '') ? '' : '2px 2px 8px #BD10E0')
    } else {
        music.style.display = 'block'
        musicHeader.style.textShadow = '2px 2px 8px #BD10E0'
    } 
    //about.style.display = ('none') ? about.style.display = 'block' : about.style.display = 'none'
})

const displayTriggerBasketball = document.querySelector('#basketball-header').addEventListener('click', function (e){
    e.preventDefault()
    
    if (music.style.display || about.style.display) {
        music.style.display = 'none'
        musicHeader.style.textShadow = ''
        about.style.display = 'none'
        aboutHeader.style.textShadow = ''
    }
    
    if (basketball.style.display) {
        basketball.style.display = ((basketball.style.display != 'none') ? 'none' : 'block')
        basketballHeader.style.textShadow = ((basketballHeader.style.textShadow != '') ? '' : '2px 2px 8px #BD10E0')
    } else {
        basketball.style.display = 'block'
        basketballHeader.style.textShadow = '2px 2px 8px #BD10E0'
    } 
})

//const togglePlaylist = document.querySelector('#ignorant').addEventListener('click', function (e) {
//    e.preventDefault()
//    setDisplayPlaylist(e)
//})
//
//const toggleLyrical = document.querySelector('#lyrical').addEventListener('click', function(e) {
//    e.preventDefault()
//    setDisplayPlaylist(e)
//})
//
//const toggleRb = document.querySelector('#rb').addEventListener('click', function(e) {
//    e.preventDefault()
//    setDisplayPlaylist(e)
//})

const setDisplayPlaylist = function (id) {
    let childEl = id.target.firstElementChild
    
    if (childEl.style.display) {
        childEl.style.display = ((childEl.style.display != 'none') ? 'none' : 'block')
    } else {
        childEl.style.display = 'block'
    }
}