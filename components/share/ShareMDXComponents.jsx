
import styles from './ShareMDXComponents.module.scss'
import NextLink from 'next/link'
import NextImage from 'next/image'
let moment = require('moment'); // require


const ShareMDXComponents = {




    


    inlineCode: (props) => <code {...props} className={`code ${styles.code}`} />,

    a: (props) => {

        if(props.className === 'autolinkHeadings')
        {
            return (
                <a {...props} className={`${styles.autolinkHeadings}`} />
            )
        }
        else{
            return (
                <a {...props}  />
            )
        }

    // <a {...props} className={`${styles.a}`} />
    },






    SectionTitle: (props) => {
        const date = `20${props.date}`
        return (
        <section className={`section sectionWhite ${styles.sectionTitle}`}>
        <div className={`wrapper share`}>
        <div className={`${styles.letterBox}`}>

                <div className={`title_1 ${styles.titleFrame}`}>
                {props.title}
                </div>

                <div className={`subhead ${styles.metaFrame}`}>
                {`${props.categories[0]} | ${moment(date).format('MMMM Do YYYY')} (${moment(date).fromNow()})`}     
                </div>

        </div>
        </div>
        </section>
    )},

    SectionImage: (props) => (
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
    ),



    p: (props) => (
        <section className={`section sectionWhite`}>
        <div className={`wrapper share`}>
        <div className={`${styles.letterBox}`}>

            <p {...props} className={`body_2 ${styles.p}`} />

        </div>
        </div>
        </section>
    ),

    h2: (props) =>  (
        <section className={`section sectionWhite`}>
        <div className={`wrapper share`}>
        <div className={`${styles.letterBox}`}>

            <h2 {...props} className={`title_3 ${styles.heading} ${styles.h2}`} />

        </div>
        </div>
        </section>
    ),

    h3: (props) =>  (
        <section className={`section sectionWhite`}>
        <div className={`wrapper share`}>
        <div className={`${styles.letterBox}`}>

            <h2 {...props} className={`headline ${styles.heading} ${styles.h3}`} />

        </div>
        </div>
        </section>
    ),
            

    ul: (props) =>  (
        <section className={`section sectionWhite`}>
        <div className={`wrapper share`}>
        <div className={`${styles.letterBox}`}>

            <ul {...props} className={`${styles.ul}`} />

        </div>
        </div>
        </section>
    ),

    li: (props) =>  (
        <li {...props} className={`body_2 ${styles.li}`} />
    ),



}




export default ShareMDXComponents


