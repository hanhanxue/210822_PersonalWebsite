// Vendor Libs


// Vendor Components
import { MDXRemote } from 'next-mdx-remote'

// My Libs
import { getDirContent, getMatter, getMDXSource, autoProps, genPaths } from '../../lib/serverUtils'
import { genSlug,  } from '../../lib/clientUtils'

// My Components
import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'

import { ProjectHeader } from '../../components/work/WorkMDXComponents'
import WorkMDXComponents  from '../../components/work/WorkMDXComponents'


// My Styles








const WorkSlug = ( {source }) => {


    return ( 
        <>
        <Header theme='Dark' />

        <ProjectHeader scope={source.scope} />
        <main>
        <MDXRemote {...source} components={WorkMDXComponents } />
        </main>

        <Footer theme='Light' />
        </>

     );
}
 
export default WorkSlug;












// NextJS static generation //

export const getStaticPaths = async () => {
    // Get all directories inside '/content/work' folder
    const directories = getDirContent('content/work')

    // Generate paths
    const paths = genPaths(directories)

    //console.log(paths)
    return {
        paths,
        fallback: false
    }
}



export const getStaticProps = async ({params}) => {
    // Get all directories inside '/content/work' folder
    const directories = await getDirContent('content/work')


    // Get relevant directory by matching slug and returning the first match (should only have one)
    const directory = directories.filter(d => genSlug(d.split('_')[2]) === params.slug)[0]

    // Read index.mdx inside the directory file
    const {content, data} = getMatter('content/work', directory)


    // Auto generate relevant props
    const myProps = autoProps(directory, data)
    // // Files from assets folder
    // myProps.assets = getImages('content/work', directory)

    // Compile MDX
    const mdxSource = await getMDXSource(content, myProps)

    //console.log(mdxSource)
    return {
        props: {
            source: mdxSource,
        }
    }
}