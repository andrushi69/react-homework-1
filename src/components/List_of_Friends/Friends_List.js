import Friend from "./Solo_Friend";
import styles from "./Friends.module.scss"

function FriendsList({friends}) {
  return (
    <ul className={styles.friends_list}>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  )

}


export default FriendsList;