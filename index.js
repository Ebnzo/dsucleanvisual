module.exports = function dsucleanvisual(mod) {
	
	let beams = [88614, 88615, 88616, 88617]; //1001 remove, 1002 blue, 1003 red, 1004 yellow
	let gardancage = 88621; //3117 cage
	
 	mod.hook('S_SPAWN_NPC', 11, event => {
		if(mod.game.me.zone !== 9034) return
		if(event.templateId == gardancage) return false
	})
	
	mod.hook('S_ACTION_STAGE', 9, event => {
		if(mod.game.me.zone !== 9034) return
		if(beams.includes(event.templateId) && event.skill.id !== 1001) return false
	})
}
