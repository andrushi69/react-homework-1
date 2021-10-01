import PropTypes from "prop-types";
import TransactionHistory from "./Transaction_History";
import styles from "./Transaction.module.scss"

const Transaction = ({items}) => {
  return (
    <table className={styles.transaction_history}>
      <thead className={styles.main_titles}>
      <tr>
        <th className={styles.titles}>Type</th>
        <th className={styles.titles}>Amount</th>
        <th className={styles.titles}>Currency</th>
      </tr>
      </thead>
      <tbody className={styles.content}>
      <TransactionHistory items={items}/>
      </tbody>
    </table>
  )
}

Transaction.propTypes = {
  items: PropTypes.array.isRequired
}

export default Transaction;