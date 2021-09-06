

import moment from 'moment'

import styles from './Footer.module.scss'
import MyLink from './MyLink'


const Footer = ( {theme} ) => {
    return (

        <footer className={`section section${theme}`}>
        <div className={`wrapper`}>
        <div className={styles.letterBox}>

            <div className={`columns`}>


                <div className={`column column_1x`}>
                    <h3 className={`headline columnHeader`}>Contact</h3>
                    <ul className={`body_1`}>
                        <li><MyLink href='mailto:hello@hanhanxue.com'>hello@hanhanxue.com</MyLink></li>
                        
                    </ul>
                </div>



                <div className={`column column_1x`}>
                    <h3 className={`headline columnHeader`}>Social</h3>
                    <ul className={`body_1`}>
                        <li><MyLink href='/'>Github</MyLink></li>
                        <li><MyLink href='/'>Instagram</MyLink></li>
                        <li><MyLink href='/'>LinkedIn</MyLink></li>
                        <li><MyLink href='/'>YouTube</MyLink></li>
                    </ul>
                </div>



                <div className={`column column_1x`}>
                    <h3 className={`headline columnHeader`}>Studio</h3>
                    <ul className={`body_1`}>
                        <li><MyLink href='/'>Epoch</MyLink></li>
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
        </div>
        </footer>

    )
}

export default Footer