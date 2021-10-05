
// Vendor Libs


// Vendor Components
import { MDXRemote } from 'next-mdx-remote'

// My Libs
import { getDirContent, getMatter, getMDXSource, genCustomData } from '../../lib/serverUtils'
import { genSlug, genPaths} from '../../lib/clientUtils'

// My Components
import Footer from '../../components/global/Footer'
import Header from '../../components/global/Header'

import {ArticleHeader} from '../../components/share/ShareMDXComponents'
import ShareMDXComponents from '../../components/share/ShareMDXComponents'


// My Styles





const ShareSlug = ( {source } ) => {


    return (
        <>
        <Header  theme='Light' />

                    {/* <ShareSingle source={source} /> */}
                    <ArticleHeader scope={source.scope} />
                    <main className={`letterbox_64_128`}>
                        <MDXRemote {...source} components={ShareMDXComponents} />
                    </main>

        <Footer  theme='Light' />
        </>
    )
}

export default ShareSlug





// NextJS static generation //

export const getStaticPaths = async () => {
    // Get all directories inside '/content/share' folder
    const directories = await getDirContent('/content/share')

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
    const directories = getDirContent('/content/share')
    // Get relevant directory by matching slug and returning the first match (should only have one)
    const directory = directories.filter(d => genSlug(d.split('_')[2]) === params.slug)[0]

    // Read index.mdx inside the directory file
    const {content, data} = getMatter('/content/share', directory)

    const customData = genCustomData('/content/share', directory, data)


    // Compile MDX
    const mdxSource = await getMDXSource(content, customData)

    //console.log(mdxSource)
    return {
        props: {
            source: mdxSource,
        }
    }
}




























// export const getStaticPaths = async () => {

//     const directories = await getDirectories('content/share')

//     // Generate paths
//     const paths = directories.map(d => ({
//         params: {
//             slug: genSlug(d.split('_')[2])
//         }
//     }))

//     return {
//         paths,
//         fallback: false
//     }
// }




// export const getStaticProps = async ({params}) => {

//     const directories = await getDirectories('content/share')
//     const directory = directories.filter(d => genSlug(d.split('_')[2]) === params.slug)[0] // there should be only one

//     const {content, data} = getMatter('content/share', directory)


//     const mdxSource = await getMDXSource(content, data)
//     const frontMatter = autoProps(directory, data)
    
//     // console.log(frontMatter)

//     return {
//         props: {
//             source: mdxSource,
//             frontMatter: frontMatter
//         }
//     }
// }







// export const getStaticProps = async ( {params} ) => {
//     // This part is super hack
//     // Generate full directory name (with the date) from slug
//     const directories = fs.readdirSync(path.join(root, 'data/share'))
//     const directory = directories.filter(d => d.split('_')[2] === params.slug)[0]
//     const dateSizeTitle = directory.split('_')

//     // Read MDX file
//     const filepath = path.join(root, 'data/share', directory, 'index.mdx')
//     const source = fs.readFileSync(filepath, 'utf8')

//     // Read frontMatter and content using gray-matter
//     const { content, data } = matter(source)
//     const mdxSource = await serialize(content, {
//         scope:data,
//         mdxOptions: {
//             rehypePlugins: [
//                 // rehype plugin to add ids to headings.
//                 // rehype plugin to automatically add links to headings (h1-h6) that already have an ID.
//                 rehypeSlug,
//                 [rehypeAutolinkHeadings, {
//                     behavior: 'append',
//                     properties: {
//                         ariaLabel: 'anchor',
//                         className: 'autolinkHeadings',
//                     },
//                     content: {
//                         type: 'text',
//                         value: '#',
//                     }

//                 }],
//             ]
//         }
//     })
//     //console.log(mdxSource)


//     // Auto generate date and title from folder name
//     const toTitleCase = (str) => {
//         return str.replace(
//           /\w\S*/g,
//           (txt) => {
//             return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//           }
//         );
//       }
//     const autoDate = dateSizeTitle[0]
//     const autoTileSize = dateSizeTitle[1]
//     const autoTitle = toTitleCase(   dateSizeTitle[2].replace(/\-/g, ' ')   )


//     return {
//         props: {
//             source: mdxSource,
//             frontMatter: {
//                 autoDate,
//                 autoTileSize,
//                 autoTitle,
//                 ...data
//             }
//         }
//     }
// }



