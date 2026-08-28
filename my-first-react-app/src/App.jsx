import './App.css'

function App() {
return (
  <div className='weather-block'>
    <h1 className='weather-title'>Геокодер</h1>
    <div className='container'>
      <form className='iput-form'>
        <label for='inp'>Укажите город:</label>
        <input type='text' className='input-window' placeholder='Могилев' id='inp'></input>
        <input type='submit'></input>
      </form>
    </div>
  </div>
)
}

export default App
