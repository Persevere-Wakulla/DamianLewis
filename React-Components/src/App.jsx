// import Footer from './components/Footer/Footer';
// import Button from './components/Button/Button';
// import Student from './components/Students/Student';
import UserGreeting from './components/UserGreeting/UserGreeting';
import Card from './components/Card/Card';
import List from './components/List/List'

function App() {

  const fruits = [
  {id: 1, name: "apple", calories: 95 },
  {id: 2, name: "orange", calories: 45 },
  {id: 3, name: "banana", calories: 105 },
  {id: 4, name: "coconut", calories: 159 },
  {id: 5, name: "pineapple", calories: 37 }
];

  const vegetables  = [
  {id: 6, name: "potatoes", calories: 110 },
  {id: 7, name: "celery", calories: 15 },
  {id: 8, name: "carrots", calories: 25 },
  {id: 5, name: "corn", calories: 63 },
  {id: 1, name: "broccoli", calories: 50 },
];
  return (
    <div className='App'>
      <UserGreeting isLoggedIn={true} username="Midas Coder" />
      <Card />
      {/* <Footer /> */}
      {/* <Button /> */}
      {/* <Student name="SpongeBob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student /> */}
       {vegetables.length >0 && <List items={vegetables} category="Vegetables" /> }
      {fruits.length >0 &&   <List items={fruits} category="Fruits" />}
     
    </div>

  );

}
export default App;