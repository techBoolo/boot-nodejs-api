export default () => {
  const time = new Date().toLocaleString(undefined, 
    {
      dateStyle: 'medium',
      timeStyle: 'medium',
      hour12: false
    }
  )
  return time
}
