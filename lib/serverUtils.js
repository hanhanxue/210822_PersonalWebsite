


import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'




import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'



const sizeOf = require('image-size')

const root = process.cwd()





export const getDirContent = async (intermediaryPath) => {
  const filepath = path.join(root, 'public', intermediaryPath)
  let content = fs.readdirSync(filepath)

  // Filter out folders that starts with underscore
  content = content.filter(d => d.match(/^\_/g) === null )

  //console.log(content)
  return content
}





export const getSingles = async (intermediaryPath, directories) => {

  let singlesArray = []
  await directories.forEach(async d => {

    const {content, data} = getMatter(intermediaryPath, d)
    
    // Check for cover image inside directory
    const filepath = path.join(intermediaryPath, d)
    const files = await getDirContent(filepath)


    const file = files.filter(d => d.match(/^cover/g) !== null )[0]
    const coverImage = `/${intermediaryPath}/${d}/${file}`


    singlesArray.push(autoProps(d, data, coverImage))

  });


  //console.log(singlesArray)
  return singlesArray.reverse()
}






export const getMatter = (intermediaryPath, directory) => {
  const filepath = path.join(root, 'public', intermediaryPath, directory, 'index.mdx')
  const source = fs.readFileSync(filepath, 'utf8')

  return matter(source)
}







export const getMDXSource =   async (content, data) => {

  return serialize(content, {

    scope: data,

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
            //rehypeCodeTitles,
            //rehypePrism,
        ]
    }

  })  
}





// Raw data
export const autoProps = (directory, data, coverImage) => {

  let auto = {}
  const dateSizeTitle = directory.split('_')

  auto.directory = directory
  
  auto.date = dateSizeTitle[0] ? dateSizeTitle[0] : 'ERROR'
  auto.size = dateSizeTitle[1] ? dateSizeTitle[1] : 'ERROR'
  auto.title = dateSizeTitle[2] ? dateSizeTitle[2] : 'ERROR'

  auto.subtitle = data.subtitle ? data.subtitle : 'ERROR'
  auto.client = data.client ? data.client : 'ERROR'
  auto.categories = data.categories ? data.categories : 'ERROR'

  auto.article = data.article ? data.article : 'ERROR'
  auto.coverImage = coverImage ? coverImage : 'ERROR'


  return auto
}



export const getImages = (intermediaryPath, directory) => {

  const filepath = path.join(root, 'public', intermediaryPath, directory, 'assets')
  let content = fs.readdirSync(filepath)



  let imagesObj = {}

  if(content.length > 0) {
    content.map((c) => {
      const fullFilePath = path.join(filepath, c)
      const dimensions = sizeOf(fullFilePath)
      const fileNumber = c.split('_')[0]
      const relativePath = path.join(intermediaryPath, directory, 'assets', c)
  
  
      imagesObj[fileNumber] = {
        fileName: c,
        directory,
        relativePath,
        width: dimensions.width,
        height: dimensions.height
      }
    })
  }

  return imagesObj
}







    // let single = {}
    // const dateSizeTitle = d.split('_')

    // single.date = dateSizeTitle[0]
    // single.size = dateSizeTitle[1]
    // single.title = dateSizeTitle[2]

    // single.category = data.category
    // single.client = data.client ? data.client : null
// // export {toFullTitle, toFullSizing, toFullDate, readDirectories}



// export const toFullDate = (date) => {
//   return moment(20 + date).format('MMM Do YYYY')
// }


// const toFullDateLong = (date) => {
//   return moment(20 + date).format('MMMM Do YYYY')
// }


// export const toFullSizing = (size) => {

//     switch( size ) {
//         case 'S': return 'Small'
//         case 'M': return 'Medium'
//         case 'L': return 'Large'

//         default: return 'Small'
//     }


//     // Immediately Invoked Function Expression
// }

// export const toFullTitle = (title) => {

//   title = title.replace(/\-/g, ' ')

//   const result = title.replace(
//       /\w\S*/g,
//       txt => {
//         return txt.charAt(0).toUpperCase() + txt.substr(1)//.toLowerCase();
//       }
//     )


//     return result
//   }

