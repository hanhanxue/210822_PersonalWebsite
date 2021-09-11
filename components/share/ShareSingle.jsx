
// Vendor Libs


// Vendor Components
import { MDXRemote } from 'next-mdx-remote'

// My Libs


// My Components
import {ArticleHeader} from './ShareMDXComponents'
import ShareMDXComponents from './ShareMDXComponents'

// My Styles
import styles from './ShareSingle.module.scss'




const ShareSingle = ({source}) => {
    return ( 
        <>
        <ArticleHeader scope={source.scope} />
        <main className={`${styles.main}`}>
            <MDXRemote {...source} components={ShareMDXComponents} />
        </main>
        </>
     );
}
 
export default ShareSingle;