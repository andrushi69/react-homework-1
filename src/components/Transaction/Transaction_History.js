import styles from "./Transaction.module.scss"

function TransactionHistory({items}) {
  return (
    <>
      {items.map(item => (
        <tr key={item.id} className={styles.content_types}>
          <td className={styles.all_types}>{item.type}</td>
          <td className={styles.all_types}>{item.amount}</td>
          <td className={styles.all_types}>{item.currency}</td>
        </tr>
      ))}
    </>


  )

}

export default TransactionHistory;