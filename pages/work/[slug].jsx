

import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'

import { getDirContent, getMatter, getMDXSource, autoProps } from '../../lib/serverUtils'
import { genSlug, genPaths } from '../../lib/clientUtils'

import { MDXRemote } from 'next-mdx-remote'
import {MDXComponents, HeaderTitle } from '../../components/work/WorkMDXComponents'



const WorkSingle = ( {source, frontMatter}) => {


    return ( 
        <>

        <Header theme='Dark' />

        <section>

            <MDXRemote {...source} components={MDXComponents } />


        </section>


        <Footer />
        </>

     );
}
 
export default WorkSingle;












// NextJS static generation //

export const getStaticPaths = async () => {
    // Get all directories inside '/content/work' folder
    const directories = await getDirContent('content/work')

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
    const frontMatter = autoProps(directory, data)

    // Compile MDX
    const mdxSource = await getMDXSource(content, frontMatter)

    //console.log(mdxSource)
    return {
        props: {
            source: mdxSource,
            frontMatter: frontMatter
        }
    }
}