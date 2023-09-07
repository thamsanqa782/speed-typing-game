let space = document.querySelector(".space");
let log = console.log;
let pointScore = 0;


function runGame(){
// arry of words 
let words = ['apple','banana','mice','rock','lee', 'book','key','mouth','moove', 'red','wise','cool'];
let wordsObject= {}

// wrapp words with splan



for(i = 0 ; i < words.length;i++){
     let aary = []
     for(j=0; j < words[i].length ; j++){
          aary.push(`<span class="word">${words[i][j]}</span> `);
     }

     Object.assign(wordsObject , { [`${words[i]}`]: aary})
}
   


let displayChoosenWord = document.querySelector("h1");

// run our game 

     let input = document.querySelector("input");
     input.value = ""
     //create random 
     let random = Math.floor(Math.random()*words.length)
     let inputNumber = 0
     input.oninput = ()=>{
          let inputArry = input.value.split(',');
          checkMacthing(inputArry[0] , words[random].split(",") , inputNumber);
     }
     function kill(){
          displayChoosenWord.innerHTML = wordsObject[words[random]]
     }
 
     kill()


     let score = document.querySelector(".score")
     // check two arry if letters o match

     let string =  ''
     function checkMacthing(player , static , index){
          let word = ''
          log( player, `stactic:${static[0].length} ${static[0]}` , index )
          if(player[index] === static[0][index] && index < words[random].length ){
               string += player[index]
               wordsObject[static[0]][index] = `<span class="kill word">${player[index]}</span>`
               inputNumber += 1;
               kill()
          }
          score.innerHTML = pointScore
          if(static[0].length === player.length && player[index] === static[0][index] ){
               pointScore +=  5
               input.value = "";
               runGame()
               
          }
     }
}