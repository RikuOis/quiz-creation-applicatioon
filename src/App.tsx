import app from './lib/firebase'

function App() {
  console.log("Firebase App initialized:", app);

  return (
    <div>
      <h1>Quiz Creation App</h1>
      <p>Firebase setup complete.</p>
    </div>
  )
}

export default App
