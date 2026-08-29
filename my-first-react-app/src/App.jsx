import './App.css'

function App() {

let responseArr = []
async function getUsers() {
  try {
    const response = 
    await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      throw new Error(`Код ошибки ${response.status}`)
    }
    const result = await response.json()
    console.log('my result: ', result)
    document.getElementById('users-show-btn').classList.add('btn-user-show-Active')
    responseArr = result
    
  }
 catch(error) {
  console.log("Не удалось получить данные", error)
}
}

function showUsers() {
  const usersWindow = document.querySelector('.users-window')
  const usersList = document.createElement('ol')
  usersWindow.append(usersList)
  usersWindow.classList.remove('non-display')
for (let i = 0; i < responseArr.length; i++) {
  const listItem = document.createElement('li')
  usersList.append(listItem)
  listItem.textContent = responseArr[i].name
}
}



return (
  <div className='main'>
  <div className='button-block'>
    <h1 className='title'>Информация о пользователях</h1>
    <div className='btn-container'>
      <button className='btn btn-user-names' onClick={getUsers}>Запросить пользователей</button>
      <button className='btn btn-user-show-noneActive' id='users-show-btn' onClick={showUsers}>Показать пользователей</button>
    </div>
  </div>
    <div className='users-window non-display'>

    </div>
    </div>
)
}

export default App
