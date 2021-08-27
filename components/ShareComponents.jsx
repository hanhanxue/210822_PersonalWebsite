
var moment = require('moment'); // require

import styles from './ShareComponents.module.scss'


const ShareTitleSection = ( {title, category, date}) => {
    return (
        <>
        <section className={styles.section}>
        <div className={`wrapper`}>
        <div className={styles.thisElement}>

            <div className={`singleColumn singleColumnCentered`}>
            <h1 className={`title_1 ${styles.title}`}>{title}</h1>
            <p className={`subhead ${styles.categoryTime}`}>{`${category} | ${moment(date).format('MMMM Do YYYY')} (${moment(date).fromNow()})`}</p>

        </div>
        </div>
        </div>
        </section>
        </>
    )
}

export { ShareTitleSection  }