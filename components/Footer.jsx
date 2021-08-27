import moment from 'moment'
import NextLink from 'next/link'

import styles from './Footer.module.scss'


const Footer = () => {
    return (

        <section className={`${styles.section}`}>
        <footer className={`wrapper ${styles.section}`}>
        <div className={styles.thisElement}>

            <div className={`columns`}>


                <div className={`column column_1x`}>
                    <h3 className={`headline columnHeader`}>Contact</h3>
                    <ul className={`body_1`}>
                        <li><NextLink href="mailto:hello@hanhanxue.com"><a>hello@hanhanxue.com</a></NextLink></li>
                    </ul>
                </div>



                <div className={`column column_1x`}>
                    <h3 className={`headline columnHeader`}>Social</h3>
                    <ul className={`body_1`}>
                        <li><NextLink href="/"><a>Github</a></NextLink></li>
                        <li><NextLink href="/"><a>Instagram</a></NextLink></li>
                        <li><NextLink href="/"><a>LinkedIn</a></NextLink></li>
                        <li><NextLink href="/"><a>YouTube</a></NextLink></li>
                    </ul>
                </div>



                <div className={`column column_1x`}>
                    <h3 className={`headline columnHeader`}>Studio</h3>
                    <ul className={`body_1`}>
                        <li><NextLink href="/"><a>Epoch</a></NextLink></li>
                    </ul>
                </div>



                <div className={`column column_1x`}>
                    <h3 className={`headline columnHeader`}>Copyright</h3>
                    <ul className={`body_1`}>
                        <li>© {moment().format('YYYY')} Han Han Xue</li>
                    </ul>
                </div>


            </div>

        </div>
        </footer>
        </section>

    )
}

export default Footer