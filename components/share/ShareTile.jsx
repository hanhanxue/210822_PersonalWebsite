


import { toShortDate, toFullSize, genSlug } from '../../lib/clientUtils'

import {useRouter} from 'next/router'

import styles from './ShareTile.module.scss'
import MyLink from '../global/MyLink'


const ShareTile = ( {title, date, categories, size, coverImage}) => {


    const fullDate = toShortDate(date)
    // category
    const fullSize = toFullSize(size)

    const slug = genSlug(title)

    const backgroundImageStyle = {
        backgroundImage: `url('${coverImage}')`
    }

    const router = useRouter()

    const goToSingle = (href) => {
      //console.log(workSinglehref)
    
      //window.location.assign(href)
      router.push(href)
    }
    const shareSingleLink = `/share/${slug}`

    return ( 
        <div className={`${styles.tile} ${styles['tile' + fullSize]}`}>

            <div className={`${styles.card}`}>


                    <div className={styles.imageFrame} style={backgroundImageStyle} onClick={ () => goToSingle(shareSingleLink) }>
          
                    </div>
                    <div className={styles.textFrame}>

                        <div className={`${styles.flexItem} ${styles.metaFrame}`}>
                            <div className={`subhead ${styles.metaCategory}`}>{categories[0]}</div>
                            <div className={`subhead ${styles.metaDate}`}>{fullDate}</div>
                        </div>
                        <div className={`headline ${styles.flexItem} ${styles.titleFrame}`}>
 
                        <MyLink href={shareSingleLink}>{title}</MyLink>
                
                            </div>
                        
                    </div>






            </div>

        </div>
     );

}
 
export default ShareTile;
