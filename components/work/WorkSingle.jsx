
// Vendor Libs


// Vendor Components
import { MDXRemote } from 'next-mdx-remote'

// My Libs


// My Components
import WorkMDXComponents  from './WorkMDXComponents'


// My Styles




const WorkSingle = ({source}) => {
    return ( 
        
        <MDXRemote {...source} components={WorkMDXComponents } />


     );
}
 
export default WorkSingle;