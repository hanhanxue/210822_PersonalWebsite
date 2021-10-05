
import styles from './ShareMDXComponents.module.scss'


import NextImage from 'next/image'
let moment = require('moment'); // require
import Highlight, {defaultProps} from 'prism-react-renderer'


export const ArticleHeader = ( {scope} ) => {


    return (
    <section className={`section sectionWhite ${styles.ArticleHeader}`}>
    <div className={`wrapper shareSingle`}>
    <div className={`letterbox_64`}>

            <div className={`title_1 ${styles.titleFrame}`}>
            {scope.title}
            </div>

            <div className={`subhead ${styles.metaFrame}`}>
            {`${scope.categories[0]} | ${moment(scope.date).format('MMMM Do YYYY')} (${moment(scope.date).fromNow()})`}     
            </div>

    </div>
    </div>
    </section>
)}




const SectionImage = (props) => {

    //console.log(props)

    return (
    <section className={`section sectionWhite ${styles.sectionImage}`}>
    <div className={`wrapper shareSingle`}>
    <div className={`${styles.letterBox}`}>

    

            <NextImage 
                src={`${props.file.publicFilePath}`}
                width={props.file.fileMeta.width} 
                height={props.file.fileMeta.height} 
                className={`nextImage`}/>
    

    </div>
    </div>
    </section>
)}

const P = (props) => (
    <section className={`section sectionWhite`}>
    <div className={`wrapper shareSingle`}>
    <div className={`${styles.letterBox}`}>

        <p {...props} className={`body_2 ${styles.p}`} />

    </div>
    </div>
    </section>
)






const H2 = (props) =>  (
    <section className={`section sectionWhite`}>
    <div className={`wrapper shareSingle`}>
    <div className={`${styles.letterBox}`}>

        <h2 {...props} className={`title_3 myHeading ${styles.heading} ${styles.h2}`} />

    </div>
    </div>
    </section>
)

const H3 = (props) =>  (
    <section className={`section sectionWhite`}>
    <div className={`wrapper shareSingle`}>
    <div className={`${styles.letterBox}`}>

        <h2 {...props} className={`headline myHeading ${styles.heading} ${styles.h3}`} />

    </div>
    </div>
    </section>
)





const Ul = (props) =>  (
    <section className={`section sectionWhite`}>
    <div className={`wrapper shareSingle`}>
    <div className={`${styles.letterBox}`}>

        <ul {...props} className={`${styles.ul}`} />

    </div>
    </div>
    </section>
)

const Li = (props) =>  (
    <li {...props} className={`body_2 ${styles.li}`} />
)



const Code = ({children, className}) => {
    const language = className.replace(/language-/, '')

    return (
    <section className={`section sectionWhite ${styles.code}`} >
    <div className={`wrapper shareSingle`}>
    <div className={`${styles.letterBox}`} >

    <Highlight {...defaultProps} code={children} language="javascript" > 
        {({className, style, tokens, getLineProps, getTokenProps}) => (

            <pre className={className} style={{...style, padding: '20px'}}>
                {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({line, key: i})}>
                        {line.map((token, key) => (
                            <span key={key} {...getTokenProps({token, key})} />
                        ))}
                    </div>
                ))}
            </pre>

        )}

    </Highlight>

    </div>
    </div>
    </section>
    )
}

const ShareMDXComponents = {
    
    // SectionTitle: SectionTitle,
    SectionImage: SectionImage,
    p: P,
    h2: H2,
    h3: H3,
    ul: Ul,
    li: Li,
    code: Code,

}

export default ShareMDXComponents
















const InlineCode = (props) => (
    <section className={`section sectionWhite`}>
    <div className={`wrapper shareSingle`}>
    <div className={`${styles.letterBox}`}>

        <code {...props} className={`code ${styles.code}`} />

    </div>
    </div>
    </section>
)