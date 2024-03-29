
// 00 Vendor Libs


// 01 Vendor Components
import NextLink from 'next/link'
import Head from 'next/dist/shared/lib/head';

// 02 My Libs


// 03 My Components


// 04 My Styles
import styles from './MyNextLink.module.scss'




const MyNextLink = ({href, children, handleClick, linkStyle}) => {
    return ( 
        <NextLink href={href} >
            {handleClick ? 
                    <a className={`  ${styles[linkStyle]}  ${styles.a}    `} onClick={(e) => handleClick(e)}>
                        {children}
                    </a>
                    :
                    <a className={`  ${styles[linkStyle]}  ${styles.a}    `} >
                        {children}
                    </a>  
        
        }
        </NextLink>
     );
}
 
export default MyNextLink;