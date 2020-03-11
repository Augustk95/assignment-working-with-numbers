
// Maak in vanilla javascript (dus geen library's) een array van 500 getallen 
// waarbij de eerste helft bestaat uit willekeurige getallen tussen 10 en 300 
// en de andere helft uit willekeurige getallen tussen 500 en 700.
// Bepaal het grootste getal in dit array. 
// Doe dit door enkel gebruik te maken van een for loop en if condities (géén kant en klare bestaande functies gebruiken dus). 
// Creëer middels javascript een paragraaf in HTML en geef deze de volgende inhoud:
// `Uit het array van ${aantalGetallen} getallen is het getal ${grootsteGetal} het grootst. 
// Dit getal zit in index ${indexGrootsteGetal} in het array.




// let arr = [0]
// let willekeuriggetal = (Math.round (Math.random() *300) +10);

//     arr[arr.length+249] = 250;

//     for (let i=0;i<arr.length;i++){
       
//     }

//     console.log(arr)

    let arr1 = Array.from({length: 250}, () => Math.floor(Math.random() * 290) +10);
    console.log(arr1)

    let arr2 = Array.from({length: 250}, () => Math.floor(Math.random()* 200 ) + 500);
    console.log(arr2)

    let arr3 = [...arr1, ...arr2];
    console.log(arr3)
    let x = 0
    for (let i=0;i<arr3.length;i++){
    if (i>x);
        x==i;
        console.log(i)
    }
    console.log(i);