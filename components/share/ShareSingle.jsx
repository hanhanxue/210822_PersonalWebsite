
// Vendor Libs


// Vendor Components
import { MDXRemote } from 'next-mdx-remote'

// My Libs


// My Components
import {ArticleHeader} from './ShareMDXComponents'
import ShareMDXComponents from './ShareMDXComponents'

// My Styles



const ShareSingle = ({source}) => {
    return ( 
        <>
        <ArticleHeader scope={source.scope} />
        <main className={`letterBox_64_128`}>
            <MDXRemote {...source} components={ShareMDXComponents} />
        </main>
        </>
     );
}
 
export default ShareSingle;