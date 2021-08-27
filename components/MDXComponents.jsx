
import styles from './MDXComponents.module.scss'
import NextLink from 'next/link'



const MDXComponents = {
    p: (props) =>   <div className={`wrapper`}>
                        <div className={`singleColumn`}>
                            <p {...props} className={`body_2 ${styles.p}`} />
                        </div>
                    </div>,

    h2: (props) =>  <div className={`wrapper`}>
                        <div className={`singleColumn`}>
                            <h2 {...props} className={`title_3 ${styles.heading} ${styles.h2}`} />
                        </div>
                    </div>,

    h3: (props) =>  <div className={`wrapper`}>
                        <div className={`singleColumn`}>
                            <h2 {...props} className={`headline ${styles.heading} ${styles.h3}`} />
                        </div>
                    </div>,
                                    
    ul: (props) =>  <div className={`wrapper`}>
                        <div className={`singleColumn`}>
                            <ul {...props} className={`${styles.ul}`} />
                        </div>
                    </div>,

    li: (props) =>  <li {...props} className={`body_2 ${styles.li}`} />,

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
    }


}




export default MDXComponents


