import React from 'react'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({ data: { confirmed, deaths, recovered, date } }) => {
    if (!confirmed) return '...Loading'

    const confirmedCount = <CountUp start={0} duration={3} end={confirmed} separator=' ' delay={0.1} />
    const deathsCount = <CountUp start={0} duration={3} end={deaths} separator=' ' delay={0.1} />
    const recoveredCount = <CountUp start={0} duration={3} end={recovered} separator=' ' delay={0.1} />

    return (
        <div className={styles.container}>
            <div className={cx(styles.singleCart, styles.confirmed)}>
                <p className={styles.title}>Zakażeni ludzie</p>
                <p className={styles.date}>{new Date(date).toDateString()}</p>
                <h3>
                    {confirmedCount}
                </h3>
            </div>
            <div className={cx(styles.singleCart, styles.deaths)}>
                <p className={styles.title}>Zmarli ludzie</p>
                <p className={styles.date}>{new Date(date).toDateString()}</p>
                <h3>
                    {recoveredCount}
                </h3>
            </div>
            <div className={cx(styles.singleCart, styles.recovered)}>
                <p className={styles.title}>Wyleczeni ludzie</p>
                <p className={styles.date}>{new Date(date).toDateString()}</p>
                <h3>
                    {deathsCount}
                </h3>
            </div>
        </div>
    )

}

export default Cards