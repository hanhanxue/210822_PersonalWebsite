




// 00 Vendor Libs
import moment from 'moment'

// 01 Vendor Components

// 02 My Libs

// 03 My Components

import MyNextImage from '../global/MyNextImage'
import MyNextLink from '../global/MyNextLink'


// 04 My Styles
import styles from './WorkMDXComponents.module.scss'






export const ProjectHeader = ( {scope} ) => {



    return (
        <section className={`section section${scope.theme} ${styles.ProjectHeader}`}>

        <div className={`letterbox_64`}>

        <div className={`wrapper wrapperDefault`}>
            <div className={`columns`}>


                    <div className={`column column_4x ${styles.copyFrame}`}>

                        <div className={`title_1 ${styles.titleFrame}`}>
                            {scope.title}
                        </div>
                        <div className={`body_1 ${styles.metaFrame}`}>
                            {scope.categories[0]} ~ {scope.client}
                        </div>
                        <div className={`title_2 ${styles.subtitleFrame}`}>
                            {scope.subtitle}
                        </div>

                    </div>


            </div>
        </div>



    <div className={`wrapper`}>
                    { scope.YouTubeLink !== 'ERROR' ?
                    (
                        <div className={styles.heroFrame} style={ { paddingTop: `${scope.videoRatio}%` }  } >
                            <iframe
                            className={styles.video}
                            src={scope.YouTubeLink}
                            allow="fullscreen;"></iframe>
                        </div>
                    ) :
                    (

                        <div className={`${styles.heroFrame} nextImageDiv`}>
                            <MyNextImage
                            source={ `${scope.assets[scope.heroImage].publicFilePath}`}
                            width={ `${scope.assets[scope.heroImage].fileMeta.width}`}
                            height={ `${scope.assets[scope.heroImage].fileMeta.height}`} />
                        </div>

                        // <div className={styles.imageFrame}   >
                        //     <NextImage src={ `/content/work/${scope.directory}/${scope.image.src}`} width={scope.image.width} height={scope.image.height}  />
                        // </div>
                    )}
                    </div>



                    <div className={`wrapper wrapperDefault`}>
                        <div className={`columns`}>
                            <div className={`column column_2x`}>
                            <h3 className={`headline columnHeader`}>
                                    Year
                                </h3>
                                    <ul className={`body_1`}>
                                        <li>                        {moment(scope.date).format('YYYY')}</li>
                                    </ul>
                            </div>
                            <div className={`column column_1x`}>
                            <h3 className={`headline columnHeader`}>Category</h3>
                                    <ul className={`body_1`}>
                                        <li>{scope.categories[0]}</li>
                                    </ul>
                            </div>
                            <div className={`column column_1x`}>
                            <h3 className={`headline columnHeader`}>Client</h3>
                                    <ul className={`body_1`}>
                                        <li>{scope.client}</li>
                                    </ul>
                            </div>
                        </div>
                        </div>


        </div>

        </section>
)}





const Description = (props ) => (
    <section className={`section sectionLight`}>
    <div className={`wrapper wrapperDefault`}>
    <div className={`letterbox_64`}>



            <div className={`columns`}>

                <div className={`column column_2x`}>
                <h2 className={`title_2`}>
                        {props.title}
                    </h2>
                </div>

                <div className={`column column_2x`}>
                <h3 className={`title_3`}>
                {props.children}
                    </h3>
                </div>

            </div>



    </div>
    </div>
    </section>
)








const Gallery = (props) => (
    <section className={`section sectionLight`}>
    <div className={`wrapper wrapperDefault`}>
    <div className={`letterbox_64`}>

        <div className={`tilesContainer tilesContainerFlex`}>

                    {props.images.map((i, index) => {

                        return (
                            <div className={`${styles.tile} ${styles['tile' + i.tileType]}`} key={index}>
                                 <div className={`${styles.card}`}  >
                                            <MyNextImage
                                            source={i.file.publicFilePath}
                                            width={i.file.fileMeta.width}
                                            height={i.file.fileMeta.height}
                                            />
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

    // SectionTitle: SectionTitle,
    Description: Description,
    // SectionImage: SectionImage,
    Gallery: Gallery,
    MyNextLink: MyNextLink,

}

export default WorkMDXComponents








const SectionImage = (props) => (

    <section className={`section`}>

                    <div className={styles.imageFrameMax}   >
                    <div className={`${styles.nextImage}`}>
                    {/* <NextImage src={ `/content/work/${props.directory}/${props.image.src}`}
                    width={props.image.width}
                    height={props.image.height}  /> */}
                    </div>
                    </div>

    </section>
)



// const SectionTitle = (props ) => (
//     <section className={`section sectionDark`}>
//     <div className={`wrapper`}>
//     <div className={`letterbox_64`}>

//                 <div className={`title_1 ${styles.sectionTitle}`}>
//                     {props.title}
//                 </div>
//                 <div className={`body_1 ${styles.sectionMeta}`}>
//                     {props.categories[0]} ~ {props.client}
//                     </div>
//                 <div className={`title_2 ${styles.sectionSubtitle}`}>
//                     {props.subtitle}
//                     </div>



//                 { props.YouTubeLink ?
//                 (
//                     <div className={styles.videoFrame} style={ { paddingTop: `${props.videoRatio}%` }  } >
//                         <iframe
//                         className={styles.video}
//                         src={props.YouTubeLink}
//                         allow="fullscreen;"></iframe>
//                     </div>
//                 ) :
//                 (

//                     <div className={styles.imageFrame}   >
//                         <NextImage src={ `/content/work/${props.directory}/${props.image.src}`} width={props.image.width} height={props.image.height}  />
//                     </div>
//                 )}



//                     <div className={`columns`}>
//                         <div className={`column column_2x`}>
//                         <h3 className={`headline columnHeader`}>
//                                 Year
//                             </h3>
//                                 <ul className={`body_1`}>
//                                     <li>                        {moment(20 + props.date).format('YYYY')}</li>
//                                 </ul>
//                         </div>
//                         <div className={`column column_1x`}>
//                         <h3 className={`headline columnHeader`}>Category</h3>
//                                 <ul className={`body_1`}>
//                                     <li>{props.categories[0]}</li>
//                                 </ul>
//                         </div>
//                         <div className={`column column_1x`}>
//                         <h3 className={`headline columnHeader`}>Client</h3>
//                                 <ul className={`body_1`}>
//                                     <li>{props.client}</li>
//                                 </ul>
//                         </div>
//                     </div>

//     </div>
//     </div>
//     </section>
// )