'use strict';

let correctAnswer = 0;
let userName;
const firstName= function(){
  userName = prompt('What is your name?');
  alert('Welcome ' + userName + ' let start our guessing game');
};

firstName();

/*it's work just another way for the operator it is terrnary!(it's for me)
let likePet = prompt('Does i like pet?yes/no or y/n');
likePet = likePet.toLowerCase();
while(likePet.toLowerCase() !== 'yes' && likePet.toLowerCase() !== 'y' && likePet.toLowerCase() !=='no' && likePet.toLowerCase() !== 'n'){
  likePet=prompt('Does i like pet?yes/no or y/n');
}
alert((likePet==='yes'||likePet==='y')?'no i do not !':'yes i do not like it');
*/
function likeThePet() {
  let likePet = prompt('does i like pet?yes/no or y/n').toLowerCase();
  while (likePet !== 'yes' && likePet !== 'y' && likePet !== 'no' && likePet !== 'n') { likePet = prompt('Does i like pet'); }
  /*if(likePet === 'n' || likePet === 'no'){console.log('yes i dont like it ');}
else if(likePet ==='yes' || likePet ==='y'){console.log('no i do not like it');}
*/if (likePet === 'n' || likePet === 'no') { alert('yes i dont like it '); correctAnswer++; }
  else if (likePet === 'yes' || likePet === 'y') { alert('no i do not like it'); }
}
likeThePet();

function whatMyMajor() {
  let myMajor = prompt('Does my major is Software Engineering?').toLowerCase();
  while (myMajor !== 'yes' && myMajor !== 'y' && myMajor !== 'no' && myMajor !== 'n') { myMajor = prompt('Does my major is software engineering ? '); }
  /*if(myMajor ==='n' || myMajor ==='no'){console.log('no it is Software Engineering');}
else if(myMajor === 'yes'|| myMajor === 'y'){console.log('yes it is software engineering');}
*/if (myMajor === 'n' || myMajor === 'no') { alert('no it is Software Engineering'); }
  else if (myMajor === 'yes' || myMajor === 'y') { alert('yes it is software engineering'); correctAnswer++; }
}
whatMyMajor();


function whatMyAge() {
  let myAge = prompt('Does my age is 24 ?').toLowerCase();
  while (myAge !== 'yes' && myAge !== 'y' && myAge !== 'no' && myAge !== 'n') { myAge = prompt('Does my age is 24 ? '); }
  /*if(myAge === 'n' || myAge === 'no'){console.log('no it is 24');}
else if(myAge === 'yes'|| myAge === 'y'){console.log('yes it is 24 ');}
*/if (myAge === 'n' || myAge === 'no') { alert('no it is 24'); }
  else if (myAge === 'yes' || myAge === 'y') { alert('yes it is 24 '); correctAnswer++; }
}
whatMyAge();


function doseLikeDriving() {
  let likeDriving = prompt('Does i like driving ?').toLowerCase();
  while (likeDriving !== 'yes' && likeDriving !== 'y' && likeDriving !== 'no' && likeDriving !== 'n') { likeDriving = prompt('Does i like driving ?'); }
  /*if(likeDriving === 'n' || likeDriving === 'no'){console.log('no i like driving ');}
else if(likeDriving ==='yes'|| likeDriving === 'y'){console.log('yes i like driving');}
*/if (likeDriving === 'n' || likeDriving === 'no') { alert('no i like driving '); }
  else if (likeDriving === 'yes' || likeDriving === 'y') { alert('yes i like driving'); correctAnswer++; }
}
doseLikeDriving();


function whatIsMyHobby() {
  let myHobby = prompt('Does my hobby is Swimming ?').toLowerCase();
  while (myHobby !== 'yes' && myHobby !== 'y' && myHobby !== 'no' && myHobby !== 'n') { myHobby = prompt('does my hobby is swimming?'); }
  /*if(myHobby === 'n' || myHobby === 'no'){console.log('no it is swimming');}
else if(myHobby === 'yes'|| myHobby === 'y'){console.log('yes it is swimming ');}
*/if (myHobby === 'n' || myHobby === 'no') { alert('no it is swimming'); }
  else if (myHobby === 'yes' || myHobby === 'y') { alert('yes it is swimming '); correctAnswer++; }
}
whatIsMyHobby();





let bacYears;


let favColor;



function bachelorYears(){

  let attempt = 4;

  for (let i = 0; i < 4; i++) {


    bacYears = Number(prompt('How long was my Bachelor degree?'));

    if (bacYears === 3) {
      correctAnswer++;
      alert('it is a correct answer');
      break;
    }

    else if (bacYears < 3) {
      alert('it is more than what you entered, try again');
      attempt--;

    }
    else if (bacYears > 3) {
      alert('it is less than what you entered, try again');
      attempt--;
    }


    if (attempt === 0) {
      alert('the correct answer is 3');

    }



  }

}
bachelorYears();


//function favoriteColors(){
const favoriteColors = function(){

  let arr = ['red', 'black', 'white'];

  favColor = prompt('what is my favorite colors ?').toLowerCase();
  for (let i = 0; i <= 5; i++) {
    for (let y = 0; y < arr.length; y++) {
      if (favColor !== arr[y]) {
        alert('it is not one of my favorite color !');
        favColor = prompt('what is my favorite colors ?');
      }
      else if (favColor === arr[y]) {
        alert('yes it is one of my favorite color');
        correctAnswer++;
        break;
      }
      break;
    }

    break;
  }


  for (let m = 0; m < arr.length; m++) {
    alert('the answers was ' + arr[m]);
  }
};
favoriteColors();


function whatIsMyScore(){
  alert('ok ' + userName + ' you answered ' + correctAnswer + ' question correctly');

}
whatIsMyScore();






