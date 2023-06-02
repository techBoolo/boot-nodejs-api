export default class ErrorResponse extends Error{
  constructor(props) {
    super()
    Object.assign(this, {
      ...props, 
      name: this.constructor.name 
    })
  }
}
