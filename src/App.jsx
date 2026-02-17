import './App.css'

const studentName="Mariam Zaghouani"
const courseTitle="Calculus"
const student={
  name:"Jack",
  age:"18",
  track:"X"
}


function App() {
  function sayHello(){
    return "Hello"
  }

  return (
    <>
      <h1>Test text</h1>
      <p>Welcome to {courseTitle}, {studentName}!</p>
      <form action="">
        <label htmlFor="test">Type something: </label>
        <input type="text" name="test" id="test" />
        <p>Hello {student.name}</p>
        <p>{sayHello()}</p>
      </form>
    </>
  )
}


export default App
