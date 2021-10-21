

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'



const sizeOf = require('image-size')



// root used in path generation
const root = process.cwd()



export const getDirContent = (publicDirPath) => {
  const dirPath = path.join(root, 'public', publicDirPath)

  // Read directory & filter out items that starts with underscore
  let content = fs.readdirSync(dirPath)
  content = content.filter(i => i.match(/^\_/g) === null )

  return content
}


// '/content/share' is an intermediaryPaths
// '140206_S_V-Ray for Maya Linear Workflow Guide' is a directory
export const genAssets = (intermediaryPath, directory) => {

  const dirPath = path.join(root, 'public', intermediaryPath, directory, 'assets')
  const publicDirPath = path.join(intermediaryPath, directory, 'assets')

  const content = getDirContent(publicDirPath)
  // Empty directory
  if(content.length === 0)
    return null
    
  let assets = {}

  content.map((c) => {

    const fileNumber = c.split('_')[0]

    const filePath = path.join(dirPath, c)
    let publicFilePath = path.join(intermediaryPath, directory, 'assets', c)
    publicFilePath = publicFilePath.replace(/\\/g, "/")
    const fileMeta = sizeOf(filePath)

    assets[fileNumber] = {
      publicFilePath,
      fileMeta,
    }


  })

  //console.log(assets)
  return assets
}

export const getCoverImage = (intermediaryPath, directory) => {

  const dirPath = path.join(root, 'public', intermediaryPath, directory)
  const publicDirPath = path.join(intermediaryPath, directory)

  const content = getDirContent(publicDirPath)
  // Empty directory
  if(content.length === 0)
    return null

  const coverImage = content.filter(c => c.match(/^cover/g) !== null )[0]

  const filePath = path.join(dirPath, coverImage)
  let publicFilePath = path.join(intermediaryPath, directory, coverImage)
  publicFilePath = publicFilePath.replace(/\\/g, "/")
  const fileMeta = sizeOf(filePath)

  return {
    publicFilePath,
    fileMeta,
  }
}


export const genCustomData = (intermediaryPath, directory, frontMatter) => {

  let customData = {}

  // FROM DIRECTORY NAME
  const dateTypeTitle = directory.split('_')

  customData.date = dateTypeTitle[0] ? '20' + dateTypeTitle[0] : 'ERROR'
  customData.tileType = dateTypeTitle[1] ? toFullType(dateTypeTitle[1]) : 'ERROR'
  customData.title = dateTypeTitle[2] ? dateTypeTitle[2] : 'ERROR'
  customData.slug = dateTypeTitle[2] ? genSlug(dateTypeTitle[2]) : 'ERROR'

  if(customData.tileType !== 'Bulletin')
  {
    // FROM FRONT MATTER
    customData.theme = frontMatter.theme ? frontMatter.theme : 'ERROR'
    customData.subtitle = frontMatter.subtitle ? frontMatter.subtitle : 'ERROR'

    customData.categories = frontMatter.categories ? frontMatter.categories : 'ERROR'
    customData.client = frontMatter.client ? frontMatter.client : 'ERROR'

    customData.YouTubeLink = frontMatter.YouTubeLink ? frontMatter.YouTubeLink : 'ERROR'
    customData.videoRatio = frontMatter.videoRatio ? frontMatter.videoRatio : 'ERROR'
    customData.heroImage = frontMatter.heroImage ? frontMatter.heroImage : 'ERROR'

    // FROM ASSETS DIRECTORY
    customData.coverImage = getCoverImage(intermediaryPath, directory)
    customData.assets = genAssets(intermediaryPath, directory)
  } else {
    // FROM FRONT MATTER
    customData.subtitle = frontMatter.subtitle ? frontMatter.subtitle : 'ERROR'
    customData.bulletin = frontMatter.bulletin ? frontMatter.bulletin : 'ERROR'
  }



  return customData
}


export const toFullType = (size) => {

  switch( size ) {
      case 'S': return 'Small'
      case 'M': return 'Medium'
      case 'L': return 'Large'
      case 'B': return 'Bulletin'

      default: return 'Small'
  }
}

export const genSlug = (title) => {

  const slug = title.replace(/\s+/g, '-').toLowerCase()
  //console.log(slug)
  return slug
}


export const genPaths = (directories) => {

  const paths = directories.map(d => {
    
    const slug = genSlug(d.split('_')[2])   
  
    return ({
      params: {
          slug: slug
      }
    })

  })

  return paths
}


export const getMatter = (intermediaryPath, directory) => {
  const filePath = path.join(root, 'public', intermediaryPath, directory, 'index.mdx')

  const source = fs.readFileSync(filePath, 'utf8')

  return matter(source)
}







export const getMDXSource =   async (content, customData) => {

  return await serialize(content, {

    scope: customData,

    mdxOptions: {
        rehypePlugins: [
            // rehype plugin to add ids to headings.
            // rehype plugin to automatically add links to headings (h1-h6) that already have an ID.
            rehypeSlug,
            [rehypeAutolinkHeadings, {
                behavior: 'append',
                properties: {
                    ariaLabel: 'anchor',
                    className: 'rehypeAutolinkHeadings',
                },
                content: {
                    type: 'text',
                    value: '#',
                }
            }],
        ]
    }

  })  
}






























































export const prepNextImage = (fileName) => {

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
















// Raw data
export const autoProps = (directory, data, coverImage) => {


  let auto = {}
  const dateSizeTitle = directory.split('_')

  auto.directory = directory
  
  // FROM FILE NAME
  auto.date = dateSizeTitle[0] ? dateSizeTitle[0] : 'ERROR'
  auto.size = dateSizeTitle[1] ? dateSizeTitle[1] : 'ERROR'
  auto.title = dateSizeTitle[2] ? dateSizeTitle[2] : 'ERROR'


  // FROM FRONT MATTER
  auto.subtitle = data.subtitle ? data.subtitle : 'ERROR'
  auto.client = data.client ? data.client : 'ERROR'
  auto.categories = data.categories ? data.categories : 'ERROR'

  auto.article = data.article ? data.article : 'ERROR'
  auto.coverImage = coverImage ? coverImage : 'ERROR'

  auto.YouTubeLink = data.YouTubeLink ? data.YouTubeLink : 'ERROR'
  auto.videoRatio = data.videoRatio ? data.videoRatio : 'ERROR'

  return auto
}










export const getImages = (intermediaryPath, directory) => {

  const filepath = path.join(root, 'public', intermediaryPath, directory, 'assets')
  let content = fs.readdirSync(filepath)
    // Filter out folders that starts with underscore
    content = content.filter(d => d.match(/^\_/g) === null )

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

