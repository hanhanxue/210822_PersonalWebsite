


import NextLink from 'next/link'
import { toYear , toShortDate, toFullSize} from '../lib/browserUtils'

import styles from './ShareTile.module.scss'


const ShareTile = ( {title, date, category, size}) => {


    const fullDate = toShortDate(date)
    // category
    const fullSize = toFullSize(size)


    return ( 
        <div className={`${styles.tile} ${styles.tileSmall}`}>
        <div className={styles.imageBox}></div>
        <div className={`${styles.copyBox}`}>
            <div className={`${styles.copyBoxMain}`}>
                <div className={`headline ${styles.mainTitle}`}>
                    <NextLink href={`/share/${title}`}><a>{title}</a></NextLink>
                </div>
            </div>
            <div className={`${styles.copyBoxMeta}`}>
                <div className={`subhead ${styles.metaDate}`}>{fullDate}</div>
                <div className={`subhead ${styles.metaCategory}`}>{category}</div>
            </div>
        </div>
        </div>
     );

}
 
export default ShareTile;
