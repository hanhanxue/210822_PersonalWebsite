

// 00 Vendor Libs
import moment from 'moment'

// 01 Vendor Components

// 02 My Libs

// 03 My Components
import MyNextLink from './MyNextLink'

// 04 My Styles

import styles from './Footer.module.scss'





const Footer = ( {theme} ) => {
    return (

        <footer className={`section section${theme}`}>
        <div className={`wrapper wrapperDefault`}>
        <div className={`letterbox_64`}>

            <div className={`columns ${styles.lists}`}>


                <div className={`column column_1x`}>
                    <h3 className={`headline columnHeader`}>Contact</h3>
                    <ul className={`body_1`}>
                        <li><MyNextLink href='mailto:hello@hanhanxue.com'>hello@hanhanxue.com</MyNextLink></li>
                        
                    </ul>
                </div>

                <div className={`column column_1x`}>
                    <h3 className={`headline columnHeader`}>Social</h3>
                    <ul className={`body_1 `}>
                        <li><MyNextLink href='https://github.com/hanhanxue'>Github</MyNextLink></li>
                        <li><MyNextLink href='https://www.instagram.com/han.han.xue/?hl=en'>Instagram</MyNextLink></li>
                        <li><MyNextLink href='https://www.linkedin.com/in/hanhanxue/'>LinkedIn</MyNextLink></li>
                        <li><MyNextLink href='/'>YouTube</MyNextLink></li>
                    </ul>
                </div>

                <div className={`column column_1x`}>
                    <h3 className={`headline columnHeader`}>Studio</h3>
                    <ul className={`body_1`}>
                        <li><MyNextLink href='/'>Epoch</MyNextLink></li>
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





