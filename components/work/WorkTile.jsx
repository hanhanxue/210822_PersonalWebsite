import {useState} from 'react'


import NextLink from 'next/link'


import { toYear, toFullSize, genSlug } from '../../lib/clientUtils'

import {useRouter} from 'next/router'

import styles from './WorkTile.module.scss'
import MyLink from '../global/MyLink'



export const WorkTileProject = ({title, date, categories, client, size, coverImage}) => {
    const router = useRouter()

    const goToSingle = (href) => {

      router.push(href)
    }

    const fullSize = toFullSize(size)

    const year = toYear(date)

    const slug = genSlug(title)

    const backgroundImageStyle = {
        backgroundImage: `url('${coverImage}')`
    }

    const workSingleLink = `/work/${slug}`

    return (
        <div className={`${styles.tile} ${styles['tile' + fullSize]}`}>

            <div className={`${styles.card} ${styles.cardWork}`} 
            style={backgroundImageStyle} 
            onClick={() => goToSingle(workSingleLink) }>




        {/* {console.log(category)} */}
                    <div className={`${styles.flexItem} ${styles.metaFrame}`}>
                        <div className={`body_1 ${styles.metaCategory}`}>{categories[0]}</div>
                        <div className={`body_1 ${styles.metaYear}`}>{year}</div>
                    </div>

                    <div className={`title_2 ${styles.flexItem} ${styles.titleFrame}`}>{title}<br/>{`for ${client}`}</div>

                    <div className={`body_1 ${styles.flexItem} ${styles.linkFrame}`}>
                        <MyLink href={workSingleLink} handleClick={(e) => e.preventDefault()}>+ View Project</MyLink>
       
                    </div>






            </div>

        </div>
    
    )



}







export const WorkTileBulletin = ({title, date, size, subtitle, article}) => {

    const [isOpen, setOpen] = useState(false)

    const handleReadMore = (e) => {

        e.preventDefault()
        // e.stopPropagation()
        // e.stopPropagation();
        // e.nativeEvent.stopImmediatePropagation()
        // console.log(e.button)

        //console.log(e)

        setOpen(!isOpen)
    }

    const fullSize = toFullSize(size)
    const year = toYear(date)


    return (
        <div className={`${styles.tile} ${styles['tile' + fullSize]}`}>

            <div className={
                isOpen ? 
                ` ${styles.card} ${styles.cardBulletin} ${styles.cardBulletinOpen}` 
                : ` ${styles.card} ${styles.cardBulletin} `} 
                 onClick={ (e) => handleReadMore(e)}
                >


                    <div className={`${styles.flexItem} ${styles.metaFrame}`}>
                        <div className={`body_1 ${styles.metaCategory}`}>Bulletin</div>
                        <div className={`body_1 ${styles.metaYear}`}>{year}</div>
                    </div>

                    <div className={`title_2 ${styles.flexItem} ${styles.titleFrame}`}>{title}<br/>{subtitle}</div>

                    {isOpen ?  <div className={`body_2 ${styles.flexItem} ${styles.detailFrame}`}>

                    {article}
                    </div> : null }

                    <div className={`body_1 ${styles.flexItem} ${styles.linkFrame}`}>
                        {isOpen ? 
                        <MyLink href='https://www.google.com/' handleClick={handleReadMore}>- Read Less</MyLink> :
                        <MyLink href='https://www.google.com/' handleClick={handleReadMore}>+ Read More</MyLink>
           }
                    </div>


            </div>

        </div>
    
    )



}

