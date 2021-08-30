

import Footer from '../../components/Footer'
import Header from '../../components/Header'

import { getDirContent, getMatter, getMDXSource, autoProps } from '../../lib/serverUtils'
import { genSlug, genPaths } from '../../lib/clientUtils'


const WorkSingle = ( {source, frontMatter}) => {

    // console.log(source)
    // console.log(frontMatter)
    return ( 
        <>

            <Header theme='Dark' />



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

    // Compile MDX
    const mdxSource = await getMDXSource(content, data)
    // Auto generate relevant props
    const frontMatter = autoProps(directory, data)

    //console.log(mdxSource)
    return {
        props: {
            source: mdxSource,
            frontMatter: frontMatter
        }
    }
}