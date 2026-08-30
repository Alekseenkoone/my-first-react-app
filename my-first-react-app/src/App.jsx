import "./App.css";

import Block from "./components/block";

function App() {

  let commentsData = []

  const testRequest = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response =>{
    if(!response.ok) {
      throw new Error('Error ', response.status)
    }
    return response.json()
  }).then(data => {
    console.log('Данные получены', data)
    commentsData = data
  }).catch (error => console.error('Призошла ошибка', error)
  )
}

  const showComments = () => {
    const commentsList = document.querySelector('.comments-list')
    
    
    for (let i = 0; i < commentsData.length; i++) {
      const commentsListItem = document.createElement('li')
      commentsList.append(commentsListItem)
      commentsListItem.textContent = commentsData[i].name
    }
  }
  

  return (
    <div className="main">
      <Block />
      <div className="server-request-field">
        <h1 className="title">Еще запросы</h1>
        <button className="btn-send-request" onClick={testRequest}>Send request</button>
        <button className="btn-show-response" onClick={showComments}>Show comments</button>
        <ol className="comments-list"></ol>
      </div>
    </div>
  );
}

export default App;
