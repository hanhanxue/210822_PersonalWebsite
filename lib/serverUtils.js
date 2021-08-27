


import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'




const root = process.cwd()
export const getDirectories = async (intermediaryPath) => {
  return fs.readdirSync(path.join(root, intermediaryPath))
}



export const getFrontMatter = (intermediaryPath, directory) => {
  const filepath = path.join(root, intermediaryPath, directory, 'index.mdx')
  const source = fs.readFileSync(filepath, 'utf8')
  return matter(source)
}



export const getSingles = (intermediaryPath, directories) => {
  let singlesArray = []
  directories.forEach(d => {

    let single = {}
    const dateSizeTitle = d.split('_')
  
    const {content, data} = getFrontMatter(intermediaryPath, d)

    single.date = dateSizeTitle[0]
    single.size = dateSizeTitle[1]
    single.title = dateSizeTitle[2]
    single.category = data.category
    single.client = data.client ? data.client : null
  
    singlesArray.push(single)

  });
  //console.log(singlesArray)
  return singlesArray

}


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

