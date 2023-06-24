import React, { Component } from 'react'
import bookListCSS from "../../assets/styles/booklist.module.scss";

export default class Message extends Component {
  render() {
    return (
      <div className={bookListCSS.alertMessage}>
       {/* {this.props.dangerText} */}
       Please Enter Valid Value
      </div>
    )
  }
}
