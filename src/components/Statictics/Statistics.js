import PropTypes from "prop-types";
import StatisticsItem from "./Statistics_List";
import styles from "./Statistics.module.scss"

const Statistics = ({title, stats}) => {

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.main_title}>{title}</h2>}
      <ul className={styles.stat_list}>
        <StatisticsItem stats={stats}/>
      </ul>
    </section>

  )
}

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string,
}

export default Statistics;