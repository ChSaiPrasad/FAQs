import {Component} from 'react'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    const {faqDetails} = this.props
    this.faqDetails = faqDetails
    this.state = {isLogged: false}
  }

  changeContent = () => {
    this.setState(prev => ({
      isLogged: !prev.isLogged,
    }))
  }

  render() {
    const {isLogged} = this.state
    return (
      <li>
        <div className="container">
          <h1>{this.faqDetails.questionText}</h1>
          <button type="button" onClick={this.changeContent}>
            {!isLogged && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
              />
            )}
            {isLogged && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
              />
            )}
          </button>
        </div>
        {isLogged && <p>{this.faqDetails.answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
