
/* ================
=================== Aufgabe 1.1. 


Schreibe die Intro-Funktion und gib bitte nur Hello World in der Konsole aus.

1. 
function intro() {
  console.log("Hello World");
 */

 /* 2.  const intro1 = () => {
    console.log("Hallo World")
  }
  intro1() */

 
/*3.  const intro2 = () => ("Hello hello World");
intro2()

const intro3 = () => console.log("Hello hello hello World");
intro3() */



/* ===============
===================  Aufgabe 1.6 */

const mySelect = document.getElementById("mySelect");
const optionSelected = document.getElementById("optionSelected");
/* console.log(mySelect);
console.log(optionSelected) */

mySelect = addEventListener("change", (event) => {

optionSelected.innerHTML = `Gratuliere zu Deiner Wahl:) : ${event.target.value}`; 

});



/*  ===== Variante mit anonymer Funktion!

Es wird statt dem Event einfach das Value der Variable mit dem EventListener in der Ausgabe angesteuert.

mySelect = addEventListener("change", () => {

optionSelected.innerHTML = `Gratuliere zu Deiner Wahl:) : ${mySelect.value}`; 

}); */