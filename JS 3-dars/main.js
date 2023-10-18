let arryObject = [54,23,"JavaScript","matn",true,false];

/*
let oddiyObject = {ism:"Rustam", familiya: "Murodov",yoshi:15};
*/

/*console.log(arryObject[2]);*/


/*
let  savatcha = [12,"text",true];

document.write(savatcha.length);

if (savatcha.length == 0){
    document.write( "Savatchaning ichida"+savatcha.length+"dona ma'lumot bor");
}
else {
    document.write( "Savatchaning ichida"+savatcha.length+"ta ma'lumot bor");
}
function  savatchaniTekshir(){
    alert("Savatchani tekshirish funkdiyasi ishga tushdi!")
}
savatchaniTekshir()
*/

let sana = new Date();

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftakuni = sana.getDay();

let  oylar = ["yanvar","fevral","mart","aprel","iyun","iyul",
    "avgust","sentabr","oktyabr","noyabr","dekabr"

document.write("Hozir" + yil +"-yil" + oylar[oy] + "oyning" + kun +
"-kuni. Haftaning esa " + haftakuni + "-kuni.");

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftakuni = sana.getDay();
let soat = sana.getTime();




sana.setFullYear( 2007);
sana.setMonth(7);
sana.setDate(18);






