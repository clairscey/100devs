//Create a mouse object that has four properties and three methods
const mouse = {}
mouse.length = 2
mouse.color = 'grey'
mouse.isDiseased = false
mouse.isFriendly = true

mouse.squeek = function() {
        alert('squeek')
    }

mouse.checkTrap = function() {
        alert('check')
}