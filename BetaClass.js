import { utilOne } from './utils'
import AlphaClass from './AlphaClass'

export default class BetaClass extends AlphaClass {
  constructor () {
    super()
    this.betaColor = 'blue'
  }
  sayMyColor () {
    console.log(this.betaColor)
  }
}
