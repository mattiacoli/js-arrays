const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers 
const reversedTeachers = [];

for (let index = teachers.length; index >= 0 ; index--) {
  const thisTeacher = teachers[index]; 
  reversedTeachers.push(thisTeacher)
}
console.log(reversedTeachers);



// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let index = 0; index < teachers.length; index++) {
  const thisTeacher = teachers[index];
  if (thisTeacher.length >= 5){
    longNames.push(thisTeacher);
    }
  
}
console.log(longNames);


// 3. Rimuovi 'Ed' dall'array teachers
console.log(teachers.indexOf('Ed')) 
teachers.splice(1,1)
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes('Fabio');
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();
console.log(teachersString);

const teacherJoin = teachers.join(',')
console.log(teacherJoin);
