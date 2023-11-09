interface Auto{
    gyarto:string,
    tipus:string,
    hengerurtartalom:number,
    benzinesE:boolean
}

function VanENegativ(szamok:number[]):boolean{
    var i:number=0;

    while(i <szamok.length && !(szamok[i] <0)){
        i++;
    }
   /* if(i <szamok.length){
        return true;

    }
else{
    return false;
}*/
return i< szamok.length;

};
function korKerTer(r: number):[number,number]{
    var ker:number=2 * r * Math.PI;
    var ter:number=r * r *Math.PI;

    return [ker,ter];
}
console.log(VanENegativ([5,12,23,-5,14]));
console.log(VanENegativ([5,12,23,14]));
console.log(korKerTer(4));

/*-Készits publikus Github repositorit a sajat felhasznaloi fiokodban 
  -Indits Git Bash-et ,es a jelenlegi TS projektben inicializalj git-et
  -A lokalis repo-t kosd ossze az online(github-os) repoddal 
  -Toltsd fel a jelenlegi allapotot a github-ra
*/
/*
TS!!
-Keszits alprogramot ,ami kivalasztja egy auto tombbol a legkisebb hengerurtartalmu autot 
-Keszits alprogramot ,ami megadja parameterul kapott auto tombbol a benzinesek darabszamat
-A valtoztatasokat toltsd fel a github repodba
 */
