import {useState} from 'react'


import NextLink from 'next/link'


import { toYear, toFullSize, genSlug } from '../../lib/clientUtils'

import {useRouter} from 'next/router'

import styles from './WorkTile.module.scss'
import MyLink from '../global/MyLink'
let moment = require('moment')



export const ProjectTile = (
    {tileType,   coverImage,     categories, date,    title,  client,    slug}) => {

    const router = useRouter()
    const viewProject = (href) => {
      router.push(href)
    }

    const backgroundImageStyle = {
        backgroundImage: `url('${coverImage.publicFilePath}')`
    }

    const projectLink = `/work/${slug}`




    return (
        <div className={`${styles.tile} ${styles['tile' + tileType]}`}>

            <div className={`${styles.card} ${styles.cardWork}`} 
            style={backgroundImageStyle} 
            onClick={() => viewProject(projectLink) }>





                    <div className={`${styles.flexItem} ${styles.metaFrame}`}>
                        <div className={`body_1 ${styles.metaCategory}`}>{categories[0]}</div>
                        <div className={`body_1 ${styles.metaYear}`}>  {moment(date).format('YYYY')}  </div>
                    </div>

                    <div className={`title_2 ${styles.flexItem} ${styles.titleFrame}`}>{title}<br/>{`for ${client}`}</div>

                    <div className={`body_1 ${styles.flexItem} ${styles.linkFrame}`}>
                        <MyLink href={projectLink} handleClick={(e) => e.preventDefault()}>+ View Project</MyLink>
       
                    </div>




            </div>

        </div>
    
    )

}







export const BulletinTile = ({date,     title, subtitle,    bulletin}) => {

    const [isOpen, setOpen] = useState(false)

    const handleReadMore = (e) => {
        e.preventDefault()
        setOpen(!isOpen)
    }



    return (
        <div className={`${styles.tile} ${styles.tileSmall}`}>

            <div className={
                isOpen ? 
                ` ${styles.card} ${styles.cardBulletin} ${styles.cardBulletinOpen}` 
                : ` ${styles.card} ${styles.cardBulletin} `} 
                 onClick={ (e) => handleReadMore(e)}
                >




                    <div className={`${styles.flexItem} ${styles.metaFrame}`}>
                        <div className={`body_1 ${styles.metaCategory}`}>Bulletin</div>
                        <div className={`body_1 ${styles.metaYear}`}>   {moment(date).format('YYYY')}   </div>
                    </div>

                    <div className={`title_2 ${styles.flexItem} ${styles.titleFrame}`}>{title}<br/>{subtitle}</div>

                    {isOpen ?  <div className={`body_2 ${styles.flexItem} ${styles.detailFrame}`}>

                    {bulletin}
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

