import './App.css';
import Review from './Review';
const App = () => {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>opinie</h2>
          <div className="underline"></div>
        </div>
      </div>
      <Review />
    </main>
  )
}

export default App;