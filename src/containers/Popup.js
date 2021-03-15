import React, { Component } from 'react';
import {
  PopupboxContainer,
  PopupboxManager 
} from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css"


export class Example extends Component {
  openPopupbox() {
    const content = (
      <div>
        <p className="quotes">Work like you don't need the money.</p>
        <p className="quotes">Dance like no one is watching.</p>
        <p className="quotes">And love like you've never been hurt.</p>
        <span className="quotes-from">― Mark Twain</span>
      </div>
    )
    PopupboxManager.open({ content })
  };

  render() {
    const popupboxConfig = {
      titleBar: {
        enable: true,
        text: 'Popupbox Demo'
      },
      fadeIn: true,
      fadeInSpeed: 500
    };
    return (
      <div>
        <button onClick={this.openPopupbox}>Click me</button>
        <PopupboxContainer {...popupboxConfig} />
      </div>
    )
  }
}


export default Example;