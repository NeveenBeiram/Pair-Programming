'use strict';

let correctAnswer = 0;
let userName;
const firstName= function(){
  userName = prompt('What is your name?');
  alert('Welcome ' + userName + ' let start our guessing game');
};

firstName();


function likeThePet() {
  let likePet = prompt('does i like pet?yes/no or y/n').toLowerCase();
  while (likePet !== 'yes' && likePet !== 'y' && likePet !== 'no' && likePet !== 'n') { likePet = prompt('Does i like pet'); }
  if (likePet === 'n' || likePet === 'no') { alert('yes i dont like it '); correctAnswer++; }
  else if (likePet === 'yes' || likePet === 'y') { alert('no i do not like it'); }
}
likeThePet();

function whatMyMajor() {
  let myMajor = prompt('Does my major is Software Engineering?').toLowerCase();
  while (myMajor !== 'yes' && myMajor !== 'y' && myMajor !== 'no' && myMajor !== 'n') { myMajor = prompt('Does my major is software engineering ? '); }
  if (myMajor === 'n' || myMajor === 'no') { alert('no it is Software Engineering'); }
  else if (myMajor === 'yes' || myMajor === 'y') { alert('yes it is software engineering'); correctAnswer++; }
}
whatMyMajor();


function whatMyAge() {
  let myAge = prompt('Does my age is 24 ?').toLowerCase();
  while (myAge !== 'yes' && myAge !== 'y' && myAge !== 'no' && myAge !== 'n') { myAge = prompt('Does my age is 24 ? '); }
  if (myAge === 'n' || myAge === 'no') { alert('no it is 24'); }
  else if (myAge === 'yes' || myAge === 'y') { alert('yes it is 24 '); correctAnswer++; }
}
whatMyAge();


function doseLikeDriving() {
  let likeDriving = prompt('Does i like driving ?').toLowerCase();
  while (likeDriving !== 'yes' && likeDriving !== 'y' && likeDriving !== 'no' && likeDriving !== 'n') { likeDriving = prompt('Does i like driving ?'); }
  if (likeDriving === 'n' || likeDriving === 'no') { alert('no i like driving '); }
  else if (likeDriving === 'yes' || likeDriving === 'y') { alert('yes i like driving'); correctAnswer++; }
}
doseLikeDriving();


function whatIsMyHobby() {
  let myHobby = prompt('Does my hobby is Swimming ?').toLowerCase();
  while (myHobby !== 'yes' && myHobby !== 'y' && myHobby !== 'no' && myHobby !== 'n') { myHobby = prompt('does my hobby is swimming?'); }
  if (myHobby === 'n' || myHobby === 'no') { alert('no it is swimming'); }
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



const favoriteColors = function(){
  let attempt2=5;

  let arr=['red','black','white'];


  favColor = prompt('what is my favorite colors ?').toLowerCase();

  outerloop1 :for (let z = 0; z <5; z++) {

    for(let n=0;n<arr.length;n++){

      if (favColor === arr[n]) {

        correctAnswer++;

        alert('yes it is one of my favorite colors');

        break outerloop1;
      }

      else if (favColor !== arr[n]) {
        alert('it is not one of my favorite color !');
        attempt2 --;
        favColor = prompt('what is my favorite colors ?').toLowerCase();

      }

      if (attempt2 === 0) {
        alert('you do not have extra attempt');
        break;
      }
      break;
    }
  }


  for (let m=0;m<arr.length;m++){
    alert('the aswers was ' + arr[m]);}

};
favoriteColors();


function whatIsMyScore(){
  alert('ok ' + userName + ' you answered ' + correctAnswer + ' question correctly');

}
whatIsMyScore();






