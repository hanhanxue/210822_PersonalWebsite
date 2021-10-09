
// 00 Vendor Libs


// 01 Vendor Components
import NextLink from 'next/link'

// 02 My Libs


// 03 My Components


// 04 My Styles
import styles from './MyNextLink.module.scss'




const MyNextLink = ({href, children, handleClick}) => {
    return ( 
        <NextLink href={href}>
            {handleClick ? 
                    <a className={`${styles.a}`} onClick={(e) => handleClick(e)}>
                        {children}
                    </a>
                    :
                    <a className={`${styles.a}`} >
                        {children}
                    </a>  
        
        }
        </NextLink>
     );
}
 
export default MyNextLink;