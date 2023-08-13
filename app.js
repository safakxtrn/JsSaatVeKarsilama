

let name = prompt("Adınızı giriniz: ")

let nameDOM = document.querySelector("#myName")
nameDOM.innerHTML = name;

let clockDom = document.querySelector("#myClock")
let dateDom = document.querySelector(".text2")
let text = dateDom.innerHTML

updateScreen()

function getTime(time){

    let hour = time.getHours()
    hour = hour < 10 ? "0" + hour : hour;
    let minute = + time.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    let second =  time.getSeconds();
    second = second<10 ? "0"+ second : second;

    return `${hour}:${minute}:${second}`


    
}

function getDate(time){
    let day = time.getDay()

    switch(day){
        case 1 :
            return "Pazartesi"
            
        case 2 :
            return "Salı"
            
        case 3 :
            return "Çarşamba"
            
        case 4 :
            return "Perşembe"
            
        case 5 :
            return "Cuma"
            
        case 6 :
            return "Cumartesi"
            
        case 0 :
            return "Pazar"

    }

    
}

function updateScreen(){
    let time = new Date()
    let _time = getTime(time)
    let date = getDate(time)

    let updateText = `${_time} - ${date}`

    dateDom.innerHTML = updateText + text
    
}

setInterval(updateScreen,1000)