
import styles from './WorkMDXComponents.module.scss'

import NextLink from 'next/link'
import NextImage from 'next/image'

let moment = require('moment'); // require






export const ProjectHeader = ( {scope} ) => {

    const date = `20${scope.date}`
    return (
    <section className={`section sectionWhite ${styles.sectionTitle}`}>
    <div className={`wrapper shareSingle`}>
    <div className={`${styles.letterBox}`}>

            <div className={`title_1 ${styles.titleFrame}`}>
            {scope.title}
            </div>

            <div className={`subhead ${styles.metaFrame}`}>
            {`${scope.categories[0]} | ${moment(date).format('MMMM Do YYYY')} (${moment(date).fromNow()})`}     
            </div>

    </div>
    </div>
    </section>
)}




const SectionTitle = (props ) => (
    <section className={`${styles.section} ${styles.sectionDark}`}>
    <div className={`wrapper`}>
    <div className={`${styles.letterBox}`}>

                <div className={`title_1 ${styles.sectionTitle}`}>
                    {props.title}
                </div>
                <div className={`body_1 ${styles.sectionMeta}`}>
                    {props.categories[0]} ~ {props.client}
                    </div>
                <div className={`title_2 ${styles.sectionSubtitle}`}>
                    {props.subtitle}
                    </div>



                { props.YouTubeLink ?
                (
                    <div className={styles.videoFrame} style={ { paddingTop: `${props.videoRatio}%` }  } >
                        <iframe 
                        className={styles.video} 
                        src={props.YouTubeLink} 
                        allow="fullscreen;"></iframe>
                    </div>
                ) :
                (

                    <div className={styles.imageFrame}   >   
                        <NextImage src={ `/content/work/${props.directory}/${props.image.src}`} width={props.image.width} height={props.image.height}  />
                    </div>
                )}



                    <div className={`columns`}>
                        <div className={`column column_2x`}>
                        <h3 className={`headline columnHeader`}>
                                Year
                            </h3>
                                <ul className={`body_1`}>
                                    <li>                        {moment(20 + props.date).format('YYYY')}</li>
                                </ul>
                        </div>
                        <div className={`column column_1x`}>
                        <h3 className={`headline columnHeader`}>Category</h3>
                                <ul className={`body_1`}>
                                    <li>{props.categories[0]}</li>
                                </ul>
                        </div>
                        <div className={`column column_1x`}>
                        <h3 className={`headline columnHeader`}>Client</h3>
                                <ul className={`body_1`}>
                                    <li>{props.client}</li>
                                </ul>
                        </div>
                    </div>

                 

    </div>
    </div>
    </section>
)

const SectionDetail = (props ) => (
    <section className={`${styles.section} ${styles.sectionWhite}`}>
    <div className={`wrapper`}>
    <div className={`${styles.letterBox}`}>



                    <div className={`columns`}>

                        <div className={`column column_2x`}>
                        <h2 className={`title_2`}>
                                {props.title}
                            </h2>
                        </div>

                        <div className={`column column_2x`}>
                        <h3 className={`title_3`}>
                        {props.detail}
                            </h3>
                        </div>

                    </div>

                 

    </div>
    </div>
    </section>
)

const SectionImage = (props) => (
    <section className={`${styles.section} ${styles.sectionLight}`}>



                    <div className={styles.imageFrameMax}   >   
                    <div className={`${styles.nextImage}`}>
                    <NextImage src={ `/content/work/${props.directory}/${props.image.src}`} 
                    width={props.image.width} 
                    height={props.image.height}  />
                    </div>
                    </div>
                 

    </section>
)

const SectionGallery = (props) => (
    <section className={`${styles.section} ${styles.sectionLight}`}>
    <div className={`wrapper`}>
    <div className={`${styles.letterBox}`}>

        <div className={styles.imagesContainer}>

                    {props.images.map((i, index) => {
                        return (
                            <div className={`${styles.tile} ${styles['tile' + i.size]} `} key={index}  >   
                            <div className={`${styles.card} ${styles.nextImage}`}>
                            <NextImage src={ `/content/work/${props.directory}/${i.src}`} 
                            width={i.width} 
                            height={i.height} 
                            className={`${styles.nextImage}`} />
                                </div>

                            </div>
                        )
                    })}
            </div>
      
    </div>
    </div>
    </section>
)



const WorkMDXComponents = {

    SectionTitle: SectionTitle,
    SectionDetail: SectionDetail,
    SectionImage: SectionImage,
    SectionGallery: SectionGallery,

}

export default WorkMDXComponents