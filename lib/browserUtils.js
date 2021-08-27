
let moment = require('moment') // require

export const toYear = (date) => {
  return moment(20 + date).format('YYYY')
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

    default: return 'Small'
}



}