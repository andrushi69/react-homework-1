import PropTypes from 'prop-types';
import styles from "./Friends.module.scss"

const Friend = ({
                  name, avatar, isOnline
                }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}>
      </span>
      <img className="avatar" src={avatar} alt={name} width="48"/>
      <p className={styles.names}>
        {name}
      </p>
    </li>

  )
}
Friend.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  // id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
}
export default Friend;