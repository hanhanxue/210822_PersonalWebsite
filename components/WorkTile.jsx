

import NextLink from 'next/link'
import NextImage from 'next/image'

import { toYear, toFullSize, genSlug, goToSingle } from '../lib/clientUtils'



import styles from './WorkTile.module.scss'
import { urlObjectKeys } from 'next/dist/shared/lib/utils'



const WorkTile = ({title, date, category, client, size, coverImage}) => {

    // //const fullTitle = toFullTitle(title)
    // //const fullYear = toYear(date)
    // // category
    // // client
    const fullSize = toFullSize(size)
    // const year = toYear(date)
    const year = toYear(date)
    //console.log(fullSize)
    const slug = genSlug(title)

    //console.log(coverImage)
    const backgroundImageStyle = {
        backgroundImage: `url('${coverImage}')`
    }

    const workSingleLink = `/work/${slug}`
    // const goToSingle = (link) => {
    //     //console.log(workSingleLink)

    //     window.location.assign(link)
    // }

    //console.log(directory)
    return (
        <div className={`${styles.tile} ${styles['tile' + fullSize]}`}>

            <div className={`${styles.card}`} style={backgroundImageStyle} onClick={() => goToSingle(workSingleLink) }>


                    <div className={`${styles.flexItem} ${styles.metaFrame}`}>
                        <div className={`body_1 ${styles.metaCategory}`}>{category}</div>
                        <div className={`body_1 ${styles.metaYear}`}>{year}</div>
                    </div>

                    <div className={`title_2 ${styles.flexItem} ${styles.titleFrame}`}>{title}<br/>{`for ${client}`}</div>

                    <div className={`body_1 ${styles.flexItem} ${styles.linkFrame}`}>
                        <NextLink href={workSingleLink}><a>+ View Project</a></NextLink>
                    </div>


            </div>

        </div>
    
    )



}


export default WorkTile;
