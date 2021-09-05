

import moment from 'moment'
import NextLink from 'next/link'

import styles from './MyLink.module.scss'

const MyLink = ({href, children, style, handleClick}) => {
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
 
export default MyLink;