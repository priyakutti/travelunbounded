import {Component} from 'react'

import './index.css'

class BookNow extends Component {
  render() {
    return (
      <div className="details-container">
        <h1 className="head-1">Details Form</h1>
        <form className="form-container">
          <div className="row-card">
            <label htmlFor="nameEle" className="label-1">
              Name:
            </label>
            <input id="nameEle" type="text" />
          </div>
          <div className="row-card">
            <label htmlFor="EmailEle" className="label-1">
              Email:
            </label>
            <input id="emailEle" type="text" />
          </div>
          <div className="row-card">
            <label htmlFor="phnoEle" className="label-1">
              Phno:
            </label>
            <input id="phnoEle" type="text" />
          </div>
          <div className="row-card">
            <label htmlFor="desEle" className="label-1">
              Destination:
            </label>
            <input id="desEle" type="text" />
          </div>
          <div className="row-card">
            <label htmlFor="nameEle">Name</label>
            <input id="nameEle" type="text" />
          </div>
          <button type="button" className="button-2">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default BookNow
