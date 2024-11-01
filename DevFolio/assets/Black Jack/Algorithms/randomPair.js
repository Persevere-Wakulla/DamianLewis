// shift alt i
// shift end
const students = [
  'Bonner, Andre', //0
  'Lewis, Damian', // 1
  'Gordon, Vincent', // 2
  'Fountain, Koufax', // 3
  'Jeremy Heard',
  'Higgins, Sean',
  'Formman, Brian',
  'Mezler, Joshua',
  'Lewis, Brian',
  'Loveland, Bryan',
  'Lopez, Jason',
  'Coon, Matthew',
  'Ford',
  'Chamblin, Gary',
  'Campbell, Nathan',
  'Tollinchi, Christopher',
  'Flowers, Booker',
  'Roberts, Walter',
  'Bolden, Johntel',
  'Chapman, Charlie',
];
// I want to be able to create a pairing of students for all students in the classroom
// How can we do this one time?
function createPair(arr) {
  // need a box for the students
  const pair = [];
  //1 Pick one student randomly
  //A  put them in unfinished box!
  //arrName.push(itemToBePushed)
  //B remove from the hat
  // arrName.splice(index,howManyToRemove)
  //2 Pick another student randomly
  //A put them in the same group box
  //B remove from the hat

  return pair; // ['student1', 'student2']
}
// store the results(return) into an arr?
function createAllPairings() {
  const allPairings = [];

  for (let i = 0; i < students.length; i++) {
    allPairings.push(createPair(students));
  }
  return allPairings;
}
console.log(createAllPairings());
