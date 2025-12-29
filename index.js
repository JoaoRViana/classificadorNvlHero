let name = "João Ricardo";
let exp = 7000;

function checkExp(exp){
    if(exp <=1000){
        return "Ferro"
    }if(exp<=2000){
        return "Bronze"
    }if(exp<=5000){
        return "Prata"
    }if(exp<=7000){
        return "Ouro"
    }if(exp<=8000){
        return "Platina"
    }if(exp<=9000){
        return "Ascendente"
    }if(exp<=10000){
        return "Imortal"
    }return "Radiante"
}

function finalMessage(name,nvl){
    return `O Héroi de nome ${name} está no nível de ${nvl}`
}

console.log(finalMessage(name,checkExp(exp)))
