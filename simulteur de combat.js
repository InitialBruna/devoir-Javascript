
 let PERSONNAGE1 = {
 forname : "Jotaro",
 LifePoints : 1700 ,
 Attack : 150 ,
 Precision :0.6
 }


 let PERSONNAGE2 = {
 forname : "Dio", 
 LifePoints : 1800 ,
 Attack : 150 ,
 Precision :0.7
 }

function Attack(P1, P2) {
    console.log(P1.forname, " does ", P1.Attack, " damages on ", P2.forname)
    return P2.LifePoints - P1.Attack
}


function Precision(P1) {
    let difficulty = Math.random()
    console.log("difficulty to touch is ", difficulty)
    if (P1.Precision >= difficulty) {
        console.log(P1.forname, " attack is opponent")
        return true
    }
    else {
        console.log(P1.forname, " miss his attack")
        return false
    }
}

let turn = "Jotaro"

while ((PERSONNAGE1.LifePoints > 0) && (PERSONNAGE2.LifePoints > 0)) {
    console.log(turn, " turn to attack")
    if (PERSONNAGE1.forname == turn) {
        let touch = Precision(PERSONNAGE1)
        
        if (touch == false) {
            turn = "Dio"
        }
        else {
            PERSONNAGE2.LifePoints = Attack(PERSONNAGE1, PERSONNAGE2)
            turn = "Dio"
        }
    }
    else {
        let touch = Precision(PERSONNAGE2)
        
        if (touch == false) {
            turn = "Jotaro"
        }
        else {
            PERSONNAGE1.LifePoints = Attack(PERSONNAGE2, PERSONNAGE1)
            turn = "Jotaro"
        }
    }
}

if (PERSONNAGE1.LifePoints <= 0) {
    console.log(PERSONNAGE2.forname, " win the fight")
}
else {
     console.log(PERSONNAGE1.forname, " win the fight")
}