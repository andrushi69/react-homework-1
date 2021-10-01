import FriendsList from "./components/List_of_Friends/Friends_List";
import friends from "./json/friends_list.json"
import profiles from "./json/social_profile.json"
import Profile from "./components/Social_Profile/Profile";
import statistics from "./json/statistics.json";
import Statistics from "./components/Statictics/Statistics";
import transactions from "./json/transaction.json"
import Transaction from "./components/Transaction/Transaction_Item";
import {useState} from "react";


export default function App() {
  const [showTask, setShowTask] = useState({task1: false, task2: false, task3: false, task4: false})

  return (
    <div className={"main_content"}>
      <p>Перед тем как посмотреть на другое задание, закрой предыдущие с помощью нажатия на ту же кнопку, так тебе будет лучше)</p>
      <div className={"tasks"}>
        <button onClick={() => setShowTask({...showTask, task1: !showTask.task1})}>Show TASK-1</button>
        <button onClick={() => setShowTask({...showTask, task2: !showTask.task2})}>Show TASK-2</button>
        <button onClick={() => setShowTask({...showTask, task3: !showTask.task3})}>Show TASK-3</button>
        <button onClick={() => setShowTask({...showTask, task4: !showTask.task4})}>Show TASK-4</button>
      </div>

      {showTask.task1 &&
      <Profile
        name={profiles.name}
        tag={profiles.tag}
        location={profiles.location}
        avatar={profiles.avatar}
        stats={profiles.stats}/>}
      {showTask.task2 && <Statistics stats={statistics} title={"Upload stats"}/>}
      {showTask.task3 && <FriendsList friends={friends}/>}
      {showTask.task4 && <Transaction items={transactions}/>}

    </div>
  );
}