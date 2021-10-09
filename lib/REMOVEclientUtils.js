
let moment = require('moment') // require



export const toYear = (date) => {
  return moment(date).format('YYYY')
}

















export const toShortDate = (date) => {
    return moment(20 + date).format('MMM Do YYYY')
  }

export const toFullDate = (date) => {
    return moment(20 + date).format('MMMM Do YYYY')
}
  

export const toFullSize = (size) => {

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


