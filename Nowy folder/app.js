let a=["p","k","n"]
let index = Math.floor(Math.random() * a.length)
let b=a[index]
let c
    function start(){c=prompt(

        "witaj w Kamień Papier Nożyce \n"+
        "aby zagrać naciśnij k, p lub n.");
        index = Math.floor(Math.random() * a.length);
        b=a[index];
        if(c===b)
        {alert("remis")}
        else if (c==="p" && b=="n"){alert("przegrałeś")}
        else if (c==="k" && b==="p"){alert("przegrałeś")}
        else if (c==="n" && b==="k"){alert("przegrałeś")}
        else {alert("wygrałeś")}
    console.log(b)
    }