

// Vendor Libs
import moment from 'moment'

// Vendor Components

// My Libs

// My Components
import MyNextLink from './MyNextLink'

// My Styles





const Footer = ( {theme} ) => {
    return (

        <footer className={`section section${theme}`}>
        <div className={`wrapper wrapperDefault`}>
        <div className={`letterbox_64`}>

            <div className={`columns`}>


                <div className={`column column_1x`}>
                    <h3 className={`headline columnHeader`}>Contact</h3>
                    <ul className={`body_1`}>
                        <li><MyNextLink href='mailto:hello@hanhanxue.com'>hello@hanhanxue.com</MyNextLink></li>
                        
                    </ul>
                </div>

                <div className={`column column_1x`}>
                    <h3 className={`headline columnHeader`}>Social</h3>
                    <ul className={`body_1`}>
                        <li><MyNextLink href='/'>Github</MyNextLink></li>
                        <li><MyNextLink href='/'>Instagram</MyNextLink></li>
                        <li><MyNextLink href='/'>LinkedIn</MyNextLink></li>
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





