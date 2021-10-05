

// 00 Vendor Libs
import {useState} from 'react'
import {useRouter} from 'next/router'
let moment = require('moment')

// 01 Vendor Components



// 02 My Libs



// 03 My Components
import MyNextLink from '../global/MyNextLink'



// 04 My Styles

import styles from './WorkTile.module.scss'




export const ProjectTile = (
    {tileType,   coverImage,     categories, date,    title,  client,    slug}) => {

    const router = useRouter()
    const viewProject = (href) => {
      router.push(href)
    }
    const projectLink = `/work/${slug}`

    const backgroundImageStyle = {
        backgroundImage: `url('${coverImage.publicFilePath}')`
    }





    return (
        <div className={`${styles.tile} ${styles['tile' + tileType]}`}>

            <div className={`${styles.card} ${styles.cardWork}`}  style={backgroundImageStyle} onClick={() => viewProject(projectLink) }>





                    <div className={`${styles.flexItem} ${styles.metaFrame}`}>
                        <div className={`body_1 ${styles.metaCategory}`}>{categories[0]}</div>
                        <div className={`body_1 ${styles.metaYear}`}>  {moment(date).format('YYYY')}  </div>
                    </div>

                    <div className={`title_2 ${styles.flexItem} ${styles.titleFrame}`}>
                        {title}<br/>
                        {`for ${client}`}
                    </div>

                    <div className={`body_1 ${styles.flexItem} ${styles.linkFrame}`}>
                        <MyNextLink href={projectLink} handleClick={(e) => e.preventDefault()}>+ View Project</MyNextLink>
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
                        <MyNextLink href='https://www.google.com/' handleClick={handleReadMore}>- Read Less</MyNextLink> :
                        <MyNextLink href='https://www.google.com/' handleClick={handleReadMore}>+ Read More</MyNextLink>
                         }
                    </div>






            </div>

        </div>
    
    )



}

