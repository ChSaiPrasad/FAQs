// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    this.faqsList = faqsList
  }

  render() {
    return (
      <div>
        <h1>FAQs</h1>
        <ul>
          {this.faqsList.map(each => (
            <FaqItem faqDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Faqs
