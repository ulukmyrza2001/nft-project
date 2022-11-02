/* eslint-disable import/prefer-default-export */
export const convertDateInToString = (incomingDate) => {
   const date = new Date(incomingDate)
   const month = date.toLocaleString('en-US', { month: 'long' })
   const day = date.toLocaleString('en-US', { day: '2-digit' })
   const year = date.getFullYear()
   const dateString = `${month} ${day} ${year}`

   return dateString
}
