

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MDXComponents from '../../components/MDXComponents'


import fs from 'fs'
import path from 'path'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import matter from 'gray-matter'
import { ShareTitleSection} from '../../components/ShareComponents'


import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'





const ShareItem = ( {source, frontMatter  } ) => {


    return (
        <>
            <Header />

            <ShareTitleSection title={frontMatter.autoTitle} category={frontMatter.category} date={frontMatter.autoDate}/>

            <section>
                <MDXRemote {...source} components={MDXComponents} />
            </section>


            <Footer />
        </>
    )
}

export default ShareItem


const root = process.cwd()

export const getStaticPaths = async () => {
    // Loop through share folder
    const directories = fs.readdirSync(path.join(root, 'data/share'))

    // Generate paths where the slug is folder name (without the date part)
    const paths = directories.map(d => ({
        params: {
            slug: d.split('_')[2] //[DATE]_[TILESIZE]_[TITLE]
        }
    }))

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async ( {params} ) => {
    // This part is super hack
    // Generate full directory name (with the date) from slug
    const directories = fs.readdirSync(path.join(root, 'data/share'))
    const directory = directories.filter(d => d.split('_')[2] === params.slug)[0]
    const dateSizeTitle = directory.split('_')

    // Read MDX file
    const filepath = path.join(root, 'data/share', directory, 'index.mdx')
    const source = fs.readFileSync(filepath, 'utf8')

    // Read frontMatter and content using gray-matter
    const { content, data } = matter(source)
    const mdxSource = await serialize(content, {
        scope:data,
        mdxOptions: {
            rehypePlugins: [
                // rehype plugin to add ids to headings.
                // rehype plugin to automatically add links to headings (h1-h6) that already have an ID.
                rehypeSlug,
                [rehypeAutolinkHeadings, {
                    behavior: 'append',
                    properties: {
                        ariaLabel: 'anchor',
                        className: 'autolinkHeadings',
                    },
                    content: {
                        type: 'text',
                        value: '#',
                    }
 
                }],
            ]
        }
    })
    //console.log(mdxSource)


    // Auto generate date and title from folder name
    const toTitleCase = (str) => {
        return str.replace(
          /\w\S*/g,
          (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }
    const autoDate = dateSizeTitle[0]
    const autoTileSize = dateSizeTitle[1]
    const autoTitle = toTitleCase(   dateSizeTitle[2].replace(/\-/g, ' ')   )


    return {
        props: {
            source: mdxSource,
            frontMatter: {
                autoDate,
                autoTileSize,
                autoTitle,
                ...data
            }
        }
    }
}



