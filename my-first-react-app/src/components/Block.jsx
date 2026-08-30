import { useState } from "react";

const Block = () => {

    const [isDisabled, setIsDisabled] = useState(true);
  const [resp, setResp] = useState([]);

  let responseArr = [];
  async function getUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      if (!response.ok) {
        throw new Error(`Код ошибки ${response.status}`);
      }
      setIsDisabled(false);
      const result = await response.json();
      console.log("my result: ", result);
      document
        .getElementById("users-show-btn")
        .classList.add("btn-user-show-Active");
      setResp(result);
      console.log("что записалось в respArr", responseArr);
    } catch (error) {
      console.log("Не удалось получить данные", error);
    }
  }

  function showUsers() {
    
    const infoBlock = document.querySelector(".info-block");
    const usersList = document.createElement("ol");
    infoBlock.append(usersList);
    
    for (let i = 0; i < resp.length; i++) {
      const listItem = document.createElement("li");
      usersList.append(listItem);
      listItem.textContent = resp[i].name;
    }
    setIsDisabled(true);
  }

return (
    <>
    <div className="info-block">
        <h1 className="title">Информация о пользователях</h1>
        <div className="btn-container">
          <button className="btn btn-user-names" onClick={getUsers}>
            Запросить пользователей у сервера
          </button>
          <button
            className="btn btn-user-show-noneActive"
            id="users-show-btn"
            onClick={showUsers}
            disabled={isDisabled}
          >
            Показать пользователей
          </button>
        </div>
      </div>
      </>
)
}



export default Block