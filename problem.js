
function cashOut( money ) {
    if (typeof money !== "number" || money <=0) {
        return "Invalid"
    }
    if (cashoutCharge= ( money * 1.75) / 100 ) {
        return cashoutCharge.toFixed(2);
        
    }
}


function  validEmail( email ) {
    if (typeof email !== "string") {
        return "Invalid";
    }
    if (/[-_+]/.test(email)) {
        return false;
    }
    if (!email.includes("@")) {
        return false;
    }
    if (/\s/.test(email)) {
        return false;
    }
    if (!email.endsWith(".com")) {
        return false;
    }
    return true;
}


function  electionResult( votes ) {
    if (!Array.isArray(votes)) {
        return "Invalid"
    }

    let mangoGot =0;
    let bananaGot =0;

    for (let vote of votes) {
        if (vote === "mango") {
            mangoGot ++;
        }
        else if(vote === "banana") {
            bananaGot ++;
        }
    }

    if (mangoGot>bananaGot) {
        return "mango";
    } 
    else if(bananaGot> mangoGot){
        return "banana";
    }
    else {
        return "draw";
    }
}


function  isBestFriend( f1 , f2 ) {
    if (typeof f1 !== "object" || typeof f2 !== "object" || f1 === null || f2 === null) {
        return "Invalid"
    }

    if (!( "name" in f1 && "roll" in f1 && "bestFriend" in f1) || !("name" in f2 && "roll" in f2 && "bestFriend" in f2) ) {
        return "Invalid"
    }

    if (f1.bestFriend === f2.roll && f1.roll === f2.bestFriend) {
        return "true"
    }
    return "false"
}



function  calculateWatchTime( times ) {
    if (!Array.isArray (times)) {
        return "Invalid"
    }

    let totalSeconds = 0;

    for (let time of times) {
        if (typeof time !== "number" || time <0) {
            return "Invalid"
        }
        totalSeconds += time;
    }

    let hour = Math.floor(totalSeconds / 3600);
    let remainingSeconds = totalSeconds % 3600;
    let minute = Math.floor(remainingSeconds / 60);
    let second = remainingSeconds % 60;
    
    return { hour, minute, second };
}


