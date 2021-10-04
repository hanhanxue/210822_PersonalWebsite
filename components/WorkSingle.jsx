
// Vendor Libs


// Vendor Components
import { MDXRemote } from 'next-mdx-remote'

// My Libs


// My Components
import {ProjectHeader} from './WorkMDXComponents'
import WorkMDXComponents  from './WorkMDXComponents'


// My Styles




const WorkSingle = ({source}) => {
    return ( 
        <>
        <ProjectHeader scope={source.scope} />
        <main>
        <MDXRemote {...source} components={WorkMDXComponents } />
        </main>

        </>

     );
}
 
export default WorkSingle;