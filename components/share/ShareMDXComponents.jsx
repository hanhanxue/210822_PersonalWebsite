
import styles from './ShareMDXComponents.module.scss'
import NextLink from 'next/link'
import NextImage from 'next/image'
let moment = require('moment'); // require
import Highlight, {defaultProps} from 'prism-react-renderer'


export const ArticleHeader = ( {scope} ) => {

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

const SectionImage = (props) => {

    //console.log(props)

    return (
    <section className={`section sectionWhite ${styles.sectionImage}`}>
    <div className={`wrapper shareSingle`}>
    <div className={`${styles.letterBox}`}>


            <NextImage 
                src={`/content/share/${props.file.directory}/assets/${props.file.fileName}`} 
                width={props.file.width} 
                height={props.file.height} 
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

        <h2 {...props} className={`title_3 ${styles.heading} ${styles.h2}`} />

    </div>
    </div>
    </section>
)

const H3 = (props) =>  (
    <section className={`section sectionWhite`}>
    <div className={`wrapper shareSingle`}>
    <div className={`${styles.letterBox}`}>

        <h2 {...props} className={`headline ${styles.heading} ${styles.h3}`} />

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


const InlineCode = (props) => (
    <section className={`section sectionWhite`}>
    <div className={`wrapper shareSingle`}>
    <div className={`${styles.letterBox}`}>

        <code {...props} className={`code ${styles.code}`} />

    </div>
    </div>
    </section>
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



