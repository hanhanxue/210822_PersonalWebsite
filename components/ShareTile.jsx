


import NextLink from 'next/link'
import { toShortDate, toFullSize, genSlug, goToSingle } from '../lib/clientUtils'


import styles from './ShareTile.module.scss'


const ShareTile = ( {title, date, category, size, coverImage}) => {


    const fullDate = toShortDate(date)
    // category
    const fullSize = toFullSize(size)

    const slug = genSlug(title)

    const backgroundImageStyle = {
        backgroundImage: `url('${coverImage}')`
    }

    // const goToSingle = () => {
    //     //console.log(shareSingleLink)
    //     window.location.assign(workSingleLink)
    // }
    const shareSingleLink = `/share/${slug}`

    return ( 
        <div className={`${styles.tile} ${styles['tile' + fullSize]}`}>

            <div className={`${styles.card}`}>

                    <div className={styles.imageFrame} style={backgroundImageStyle} onClick={ () => goToSingle(shareSingleLink) }>
          
                    </div>
                    <div className={styles.textFrame}>

                        <div className={`${styles.flexItem} ${styles.metaFrame}`}>
                            <div className={`subhead ${styles.metaCategory}`}>{category}</div>
                            <div className={`subhead ${styles.metaDate}`}>{fullDate}</div>
                        </div>
                        <div className={`headline ${styles.flexItem} ${styles.titleFrame}`}>
                        <NextLink href={shareSingleLink}><a>{title}</a></NextLink>
                            </div>
                        
                    </div>
                    {/* <div className={styles.imageBox}></div>
                    <div className={`${styles.copyBox}`}>

                        <div className={`${styles.copyBoxMeta}`}>
                        <div className={`subhead ${styles.metaCategory}`}>{category}</div>
                                <div className={`subhead ${styles.metaDate}`}>{fullDate}</div>

                            </div>
                        <div className={`${styles.copyBoxMain}`}>
                            <div className={`headline ${styles.mainTitle}`}>
                                <NextLink href={`/share/${slug}`}><a>{title}</a></NextLink>
                            </div>
                        </div>
                    </div> */}



            </div>

        </div>
     );

}
 
export default ShareTile;
