import styles from "./Statistics.module.scss"


function StatisticsItem({stats}) {
  return (
    <>
      {stats.map(item => (
        <li className={styles.item} key={item.id}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percent}>{item.percentage}%</span>
        </li>
      ))
      }
    </>

  )
}

export default StatisticsItem;