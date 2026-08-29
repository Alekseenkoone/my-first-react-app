import './App.css'
import { useState } from 'react'

function App() {

const [isDisabled, setIsDisabled] = useState(true)
const [resp, setResp] = useState([])

let responseArr = []
async function getUsers() {
  try {
    const response = 
    await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      throw new Error(`Код ошибки ${response.status}`)
    }
    setIsDisabled(false)
    const result = await response.json()
    console.log('my result: ', result)
    document.getElementById('users-show-btn').classList.add('btn-user-show-Active')
    setResp(result)
    console.log('что записалось в respArr', responseArr)
    
  
  }
 catch(error) {
  console.log("Не удалось получить данные", error)
}
}

function showUsers() {
  console.log('SU', resp)
  const usersWindow = document.querySelector('.users-window')
  const usersList = document.createElement('ol')
  usersWindow.append(usersList)
  usersWindow.classList.remove('non-display')
  console.log('respArr', resp)
  
for (let i = 0; i < resp.length; i++) {
  const listItem = document.createElement('li')
  usersList.append(listItem)
  listItem.textContent = resp[i].name
}
setIsDisabled(true)
}



return (
  <div className='main'>
  <div className='button-block'>
    <h1 className='title'>Информация о пользователях</h1>
    <div className='btn-container'>
      <button className='btn btn-user-names' onClick={getUsers}>Запросить пользователей у сервера</button>
      <button className='btn btn-user-show-noneActive' id='users-show-btn' onClick={showUsers} disabled = {isDisabled}>Показать пользователей</button>
    </div>
  </div>
    <div className='users-window non-display'>

    </div>
    </div>
)
 
}

export default App
