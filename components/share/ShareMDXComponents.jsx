

// 00 Vendor Libs
import moment from 'moment'

// 01 Vendor Components

import NextImage from 'next/image'
import Highlight, {defaultProps} from 'prism-react-renderer'
import MyNextImage from '../global/MyNextImage'


// 02 My Libs


// 03 My Components


// 04 My Styles
import styles from './ShareMDXComponents.module.scss'




export const ArticleHeader = ( {scope} ) => {


    return (
    <section className={`section sectionWhite ${styles.ArticleHeader}`}>
    <div className={`wrapper wrapperSharePost`}>
    <div className={`letterbox_64`}>

            
        <div className={`columns`}>
        <div className={`column column_4x ${styles.copyFrame}`}>
                    <div className={`title_1 ${styles.titleFrame}`}>
                    {scope.title}
                    </div>

                    <div className={`subhead ${styles.metaFrame}`}>
                    {`${scope.categories[0]} | ${moment(scope.date).format('MMMM Do YYYY')} (${moment(scope.date).fromNow()})`}     
                    </div>
                </div>


        </div>


    </div>
    </div>
    </section>
)}



const P = (props) => (
    <section className={`section sectionWhite`}>
    <div className={`wrapper wrapperSharePost`}>
    <div className={`${styles.letterbox_0_24}`}>

    <div className={`columns`}>
        <div className={`column column_4x `}>
        <p {...props} className={`body_2 ${styles.P}`} />
        </div>
    </div>


    </div>
    </div>
    </section>
)


const H2 = (props) =>  (
    <section className={`section sectionWhite`}>
    <div className={`wrapper wrapperSharePost`}>
    <div className={`${styles.letterbox_48_24}`}>

    <div className={`columns`}>
    <div className={`column column_4x `}>
        <h2 {...props} className={`title_3 ${styles.myHeading} ${styles.H2}`} />
        </div>
    </div>


    </div>
    </div>
    </section>
)

const H3 = (props) =>  (
    <section className={`section sectionWhite`}>
    <div className={`wrapper wrapperSharePost`}>
    <div className={`${styles.letterbox_24_24}`}>


    <div className={`columns`}>
        <div className={`column column_4x `}>
        <h2 {...props} className={`headline ${styles.myHeading} ${styles.H3}`} />
        </div>
        </div>



    </div>
    </div>
    </section>
)


const Ul = (props) =>  (
    <section className={`section sectionWhite`}>
    <div className={`wrapper wrapperSharePost`}>
    <div className={`${styles.letterbox_0_24}`}>

    <div className={`columns`}>
        <div className={`column column_4x `}>

        <ul {...props} className={`${styles.ul}`} />

        </div>
        </div>

    </div>
    </div>
    </section>
)

const Li = (props) =>  (
    <li {...props} className={`body_2 ${styles.li}`} />
)








const SingleImage = (props) => {

    //console.log(props)

    return (
    <section className={`section sectionWhite`}>
    <div className={`wrapper wrapperSharePost`}>
    <div className={`${styles.letterbox_24_24}`}>

    <figure className={`textAlignCenter`}>
            <MyNextImage
            source={`${props.file.publicFilePath}`}
            width={props.file.fileMeta.width} 
            height={props.file.fileMeta.height} />
    </figure>
    {props.caption &&
    <div className={`caption ${styles.caption}`}>
        {props.caption}
    </div>
    }   

    </div>
    </div>
    </section>
)}




const Video = (props) => {
    return (
        <section className={`section sectionWhite`}>
        <div className={`wrapper wrapperSharePost`}>
        <div className={`${styles.letterbox_24_24}`}>



        <div className={styles.videoFrame} style={ { paddingTop: `${props.ratio}%` }  } >
        <iframe
        className={styles.video}
        src={props.source}
        allow="fullscreen;"></iframe>
    </div>


    </div>
    </div>
    </section>
    )


}









const Code = ({children, className}) => {
    const language = className.replace(/language-/, '')
    //let noLastLine = tokens.pop()

    return (
    <section className={`section sectionWhite ${styles.prismCode}`} >
    <div className={`wrapper wrapperSharePost`}>
    <div className={`${styles.letterbox_24_24}`} >


    <Highlight {...defaultProps} code={children} language={language} > 

        {   ({className, style, tokens, getLineProps, getTokenProps}) => 

     
      
 
                    <pre className={` code  ${className}  ${styles.codeFrame} `} style={{...style}}>
                            
                                           
                        {tokens.map(  (line, i) => (
                            
                            <>
                                <div key={i} {...getLineProps({line, key: i})}>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({token, key})} />
                                    ))}
                                </div>
                            </>
                
                        ))}
                    </pre>
         
   
        }

    </Highlight>





    </div>
    </div>
    </section>
    )
}


const InlineCode = (props) => (
        <code {...props} className={`code ${styles.inlineCode}`} />
)


const Link = (props) => (
    <>
    {props.className === 'rehypeAutolinkHeadings'
    ? <a {...props} />
    : <a {...props} className={`${styles.postLink}`}/>
    }
    </>
)

const ShareMDXComponents = {
    
    // SectionTitle: SectionTitle,
    SingleImage: SingleImage,
    Video: Video,
    p: P,
    h2: H2,
    h3: H3,
    ul: Ul,
    li: Li,
    code: Code,
    inlineCode: InlineCode,
    a: Link,
}

export default ShareMDXComponents















