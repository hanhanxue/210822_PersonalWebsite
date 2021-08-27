

// import NextLink from 'next/link'
import { toYear, toFullSize } from '../lib/browserUtils'



import styles from './WorkTile.module.scss'



const WorkTile = ({title, date, category, client, size}) => {

    // //const fullTitle = toFullTitle(title)
    // //const fullYear = toYear(date)
    // // category
    // // client
    const fullSize = toFullSize(size)
    // const year = toYear(date)
    const year = toYear(date)
    //console.log(fullSize)

    return (
        <div className={`${styles.tile} ${styles['tile' + fullSize]}`}>
            <div className={`${styles.card}`}>

                            <div className={`${styles.flexRow} ${styles.copyBoxMeta}`}>
                                <div className={`body_1 ${styles.metaCategory}`}>{category}</div>
                                <div className={`body_1 ${styles.metaYear}`}>{year}</div>
                            </div>

                            <div className={`title_2 ${styles.flexRow} ${styles.mainTitle}`}>{title}<br/>{`for ${client}`}</div>

                            <div className={`body_1 ${styles.flexRow} ${styles.projectLink}`}>
                                + View Project
                            </div>
                            
            </div>
        </div>
    
    )



}


export default WorkTile;
