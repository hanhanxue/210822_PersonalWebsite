
import styles from './ShareMDXComponents.module.scss'
import NextLink from 'next/link'
import NextImage from 'next/image'
let moment = require('moment'); // require


export const ArticleHeader = ( {scope} ) => {

    const date = `20${scope.date}`
    return (
    <section className={`section sectionWhite ${styles.sectionTitle}`}>
    <div className={`wrapper share`}>
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

const SectionImage = (props) => (
    <section className={`section sectionWhite ${styles.sectionImage}`}>
    <div className={`wrapper share`}>
    <div className={`${styles.letterBox}`}>

        <div className={`image ${styles.nextImageFrame}`}>
            <NextImage src={   `/content/share/${props.directory}/${props.image.src}`   } 
            width={props.image.width} 
            height={props.image.height}  />
        </div>

    </div>
    </div>
    </section>
)

const P = (props) => (
    <section className={`section sectionWhite`}>
    <div className={`wrapper share`}>
    <div className={`${styles.letterBox}`}>

        <p {...props} className={`body_2 ${styles.p}`} />

    </div>
    </div>
    </section>
)

const H2 = (props) =>  (
    <section className={`section sectionWhite`}>
    <div className={`wrapper share`}>
    <div className={`${styles.letterBox}`}>

        <h2 {...props} className={`title_3 ${styles.heading} ${styles.h2}`} />

    </div>
    </div>
    </section>
)

const H3 = (props) =>  (
    <section className={`section sectionWhite`}>
    <div className={`wrapper share`}>
    <div className={`${styles.letterBox}`}>

        <h2 {...props} className={`headline ${styles.heading} ${styles.h3}`} />

    </div>
    </div>
    </section>
)

const Ul = (props) =>  (
    <section className={`section sectionWhite`}>
    <div className={`wrapper share`}>
    <div className={`${styles.letterBox}`}>

        <ul {...props} className={`${styles.ul}`} />

    </div>
    </div>
    </section>
)

const Li = (props) =>  (
    <li {...props} className={`body_2 ${styles.li}`} />
)




const ShareMDXComponents = {
    
    // SectionTitle: SectionTitle,
    SectionImage: SectionImage,
    p: P,
    h2: H2,
    h3: H3,
    ul: Ul,
    li: Li,
}

export default ShareMDXComponents





    // inlineCode: (props) => <code {...props} className={`code ${styles.code}`} />,

    // a: (props) => {

    //     if(props.className === 'autolinkHeadings')
    //     {
    //         return (
    //             <a {...props} className={`${styles.autolinkHeadings}`} />
    //         )
    //     }
    //     else{
    //         return (
    //             <a {...props}  />
    //         )
    //     }

    // // <a {...props} className={`${styles.a}`} />
    // },