
// Monster loot item amoutn variables

let string = 0
let thickString = 0
let rawChicken = 0
let normalFeather = 0
let normalBones = 0
let cheese = 0
let honey = 0
let stinger = 0

function youWin() {
	playing = false
	document.getElementById("you-win").style.display = "block"
	sleep(3000).then(() => {
        document.getElementById("you-win").style.display = "none"
		popups('feildsLoot')
    })
	winAudio.play()
	document.getElementById("monsterType").innerHTML = typeOfFeildMonster
	if (typeOfFeildMonster == "Spider") {
		let ranNumOfString = Math.floor(Math.random() * 3)
		let ranNumOfThickString = Math.floor(Math.random() * 2)
		if (ranNumOfString <= 0) {
			ranNumOfString = 1
		}
		string += ranNumOfString 
		thickString += ranNumOfThickString
		document.getElementById("amtStringLoot").style.display = "inline"
		document.getElementById("amtStringLoot").innerHTML = "String: " + ranNumOfString
		document.getElementById("amtThickStringLoot").style.display = "inline"
		document.getElementById("amtThickStringLoot").innerHTML = "Thick String: " + ranNumOfThickString
		document.getElementById("amtThickString").innerHTML = thickString
		document.getElementById("string").style.display = "inline-block"
		document.getElementById("amtString").innerHTML = string
	} else if (typeOfFeildMonster == "Chicken") {
		document.getElementById("monsterType").innerHTML = typeOfFeildMonster
		rawChicken++
		document.getElementById("rawChick").style.display = "inline-block"
		document.getElementById("amtRawChick").innerHTML = rawChicken
		document.getElementById("amtRawChickLoot").style.display = "inline"
		let ranAmtOfChickBones = Math.floor(Math.random() * 5)
		normalBones += ranAmtOfChickBones
		document.getElementById("bones").style.display = "inline-block"
		document.getElementById("amtBones").innerHTML = normalBones
		document.getElementById("amtBonesLoot").style.display = "inline"
		document.getElementById("amtBonesLoot").innerHTML = "Bones: " + ranAmtOfChickBones

		let ranAmtFeathers = Math.floor(Math.random() * 4)
		normalFeather += ranAmtFeathers
		document.getElementById("whiteFeather").style.display = "inline-block"
		document.getElementById("amtwhiteFeather").innerHTML = normalFeather
		document.getElementById("amtFeatherLoot").style.display = "inline"
		document.getElementById("amtFeatherLoot").innerHTML = "Feathers: " + ranAmtFeathers
	} else if (typeOfFeildMonster == "Rat") {
		document.getElementById("monsterType").innerHTML = typeOfFeildMonster
		let ranAmtOfCheese = Math.floor(Math.random() * 3)
		cheese += ranAmtOfCheese
		document.getElementById("cheese").style.display = "inline-block"
		document.getElementById("amtRotCheese").style.display = cheese
		document.getElementById("amtCheeseLoot").style.display = "inline"
		document.getElementById("amtCheeseLoot").innerHTML = "Cheese: " + ranAmtOfCheese
	} else if (typeOfFeildMonster == "Bee") {
		let stingerChance = Math.floor(Math.random() * 10) 
		if (stingerChance <= 4) {
			stinger++
			document.getElementById("stinger").style.display = "inline-block"
			document.getElementById("amtStinger").innerHTML = stinger
			document.getElementById("amtStingLoot").style.display = "inline"
		}
		let ranHoneyAmt = Math.floor(Math.random() * 2)
		honey += ranHoneyAmt
		document.getElementById("amtHoneyLoot").style.display = "inline"
		document.getElementById("amtHoneyLoot").innerHTML = stinger
		document.getElementById("honey").style.display = "inline-block"
		document.getElementById("amtHoney").innerHTML = honey
	}
	document.getElementById("comTitle").style.display = "block"
	document.getElementById("comLine").style.display = "block"
	document.getElementById("stats1").style.display = "flex"
	document.getElementById("stats").style.display = "block"
	document.getElementById("header").style.display = "block"
	document.getElementById("main").style.overflowY = "block"
	document.getElementById("mainPartOfCombat").style.display = "inline"
	document.getElementById("feildsBattle").style.display = "none"
	document.getElementById("feildMonster1").style.display = "none"
	document.getElementById("feildMonster2").style.display = "none"
	document.getElementById("feildMonster3").style.display = "none"
	document.getElementById("feildMonster4").style.display = "none"
	typeOfFeildMonster = null
	youHealth = 10
	youDmg = 3;
	apperDmg = 2;
}

let rustySwordEq = false;

function eqRustSqord() {
	rustySwordEq = true
	youDmg++
	apperDmg = 3;
	document.getElementById("rustSwordYouOutwear").style.display = "block";
	document.getElementById("inCombatYouRustSword").style.display = "block";
	document.getElementById("normalYou").style.display = "none";
	document.getElementById("normalYouOuter").style.display = "none";
	document.getElementById("rustySword").style.display = "none";
}

let cluckAudio = new Audio("assets/sounds/Rooster-Crow.mp3")

function fightFeilds() {
	combatDisplayNone()
	playing = true
	document.getElementById("feildsBattle").style.display = "block"
	let ranFeildMonster = Math.floor(Math.random() * 7)
	document.getElementById("healthYou").innerHTML = "Health: " + youHealth
	if (ranFeildMonster == 1 || ranFeildMonster == 2) {
		typeOfFeildMonster = "Spider"
		monsterHealth = 5
		damage = 3
		monsterSpeed = 2
		document.getElementById("speedMonster").innerHTML = "Speed: " + monsterSpeed
		document.getElementById("damageMonster").innerHTML = "Damage: " + damage
		document.getElementById("damageYou").innerHTML = "Damage: " + apperDmg
		document.getElementById("monsterName").innerHTML = typeOfFeildMonster
		document.getElementById("healthMonster").innerHTML = "Health: " + monsterHealth
		document.getElementById("speedYou").innerHTML = "Speed: " + youSpeed
		document.getElementById("feildMonster1").style.display = "block"
		function turnMonster() {
			if (playing) {
				let ranDmg = Math.floor(Math.random() * 4 - 1)
				if (ranDmg < 0) {
					ranDmg = 0
				}
				youHealth -= ranDmg
				if (youHealth <= 0) {
					goBack()
				}
				document.getElementById("healthYou").innerHTML = "Health: " + youHealth
			}
		}
		function turnYou() {
			if (playing) {
				let ranDmg2 = Math.floor(Math.random() * youDmg - 1)
				if (ranDmg2 < 0) {
					ranDmg2 = 0
				}
				monsterHealth -= ranDmg2
				if (monsterHealth <= 0) {
					youWin()
				}
				document.getElementById("healthMonster").innerHTML = "Health: " + monsterHealth
			}
		}
		setInterval(turnMonster, 3000)

		setInterval(turnYou, 4000)
	}

	if (ranFeildMonster == 3 || ranFeildMonster == 4) {
		typeOfFeildMonster =  "Chicken"
		monsterHealth = 10
		damage = 2
		monsterSpeed = 1
		document.getElementById("damageYou").innerHTML = "Damage: " + apperDmg
		document.getElementById("speedMonster").innerHTML = "Speed: " + monsterSpeed
		document.getElementById("speedYou").innerHTML = "Speed: " + youSpeed
		document.getElementById("damageMonster").innerHTML = "Damage: " + damage
		document.getElementById("monsterName").innerHTML = typeOfFeildMonster
		document.getElementById("healthMonster").innerHTML = "Health: " + monsterHealth
		document.getElementById("feildMonster2").style.display = "block"


		function turnMonster() {
			if (playing) {
				let ranDmg = Math.floor(Math.random() * 3 - 1)
				if (ranDmg < 0) {
					ranDmg = 0
				}
				youHealth -= ranDmg
				if (youHealth <= 0) {
					goBack()
				}
				document.getElementById("healthYou").innerHTML = "Health: " + youHealth
			}
		}
		function turnYou() {
			if (playing) {
				let ranDmg2 = Math.floor(Math.random() * youDmg - 1)
				if (ranDmg2 < 0) {
					ranDmg2 = 0
				}
				monsterHealth -= ranDmg2
				if (monsterHealth <= 0) {
					cluckAudio.play()
					youWin()
				}
				document.getElementById("healthMonster").innerHTML = "Health: " + monsterHealth
			}
		}
		setInterval(turnMonster, 4000)

		setInterval(turnYou, 4000)
	}

	if (ranFeildMonster == 7 || ranFeildMonster == 6) {
		monsterHealth = 8
		damage = 2
		monsterSpeed = 0
		typeOfFeildMonster = "Rat"
		document.getElementById("damageYou").innerHTML = "Damage: " + apperDmg
		document.getElementById("speedMonster").innerHTML = "Speed: " + monsterSpeed
		document.getElementById("speedYou").innerHTML = "Speed: " + youSpeed
		document.getElementById("damageMonster").innerHTML = "Damage: " + damage
		document.getElementById("monsterName").innerHTML = typeOfFeildMonster
		document.getElementById("healthMonster").innerHTML = "Health: " + monsterHealth
		document.getElementById("feildMonster3").style.display = "block"

		function turnMonster() {
			if (playing) {
				let ranDmg = Math.floor(Math.random() * 3 - 1)
				if (ranDmg < 0) {
					ranDmg = 0
				}
				youHealth -= ranDmg
				if (youHealth <= 0) {
					goBack()
				}
				document.getElementById("healthYou").innerHTML = "Health: " + youHealth
			}
		}

		function turnYou() {
			if (playing) {
				let ranDmg2 = Math.floor(Math.random() * youDmg - 1)
				if (ranDmg2 < 0) {
					ranDmg2 = 0
				}
				monsterHealth -= ranDmg2
				if (monsterHealth <= 0) {
					youWin()
				}
				document.getElementById("healthMonster").innerHTML = "Health: " + monsterHealth
			}
		}
		setInterval(turnMonster, 5000)

		setInterval(turnYou, 4000)
	}

	if (ranFeildMonster == 5) {
		monsterHealth = 5
		damage = 3
		monsterSpeed = 3
		typeOfFeildMonster = "Bee"
		document.getElementById("damageYou").innerHTML = "Damage: " + apperDmg
		document.getElementById("speedMonster").innerHTML = "Speed: " + monsterSpeed
		document.getElementById("speedYou").innerHTML = "Speed: " + youSpeed
		document.getElementById("damageMonster").innerHTML = "Damage: " + damage
		document.getElementById("monsterName").innerHTML = typeOfFeildMonster
		document.getElementById("healthMonster").innerHTML = "Health: " + monsterHealth
		document.getElementById("feildMonster4").style.display = "block"
		function turnMonster() {
			if (playing) {
				let ranDmg = Math.floor(Math.random() * 4 - 1)
				if (ranDmg < 0) {
					ranDmg = 0
				}
				youHealth -= ranDmg
				if (youHealth <= 0) {
					goBack()
				}
				document.getElementById("healthYou").innerHTML = "Health: " + youHealth
			}
		}

		function turnYou() {
			if (playing) {
				let ranDmg2 = Math.floor(Math.random() * youDmg - 1)
				if (ranDmg2 < 0) {
					ranDmg2 = 0
				}
				monsterHealth -= ranDmg2
				if (monsterHealth <= 0) {
					youWin()
				}
				document.getElementById("healthMonster").innerHTML = "Health: " + monsterHealth
			}
		}
		setInterval(turnMonster, 2000)

		setInterval(turnYou, 4000)
	}

	if (ranFeildMonster == 0) {
		monsterHealth = 8
		damage = 2
		monsterSpeed = 0
		typeOfFeildMonster = "Rat"
		document.getElementById("damageYou").innerHTML = "Damage: " + apperDmg
		document.getElementById("speedMonster").innerHTML = "Speed: " + monsterSpeed
		document.getElementById("speedYou").innerHTML = "Speed: " + youSpeed
		document.getElementById("damageMonster").innerHTML = "Damage: " + damage
		document.getElementById("monsterName").innerHTML = typeOfFeildMonster
		document.getElementById("healthMonster").innerHTML = "Health: " + monsterHealth
		document.getElementById("feildMonster3").style.display = "block"

		function turnMonster() {
			if (playing) {
				let ranDmg = Math.floor(Math.random() * 3 - 1)
				if (ranDmg < 0) {
					ranDmg = 0
				}
				youHealth -= ranDmg
				if (youHealth <= 0) {
					goBack()
				}
				document.getElementById("healthYou").innerHTML = "Health: " + youHealth
			}
		}

		function turnYou() {
			if (playing) {
				let ranDmg2 = Math.floor(Math.random() * youDmg - 1)
				if (ranDmg2 < 0) {
					ranDmg2 = 0
				}
				monsterHealth -= ranDmg2
				if (monsterHealth <= 0) {
					youWin()
				}
				document.getElementById("healthMonster").innerHTML = "Health: " + monsterHealth
			}
		}
		setInterval(turnMonster, 5000)

		setInterval(turnYou, 4000)
	}
}
