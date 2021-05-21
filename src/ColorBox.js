import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends Component {
   constructor(props) {
      super(props);

      this.state = {
         copied: false,
      };
   }
   handleOvrlay = () => {};
   handleCopyState = () => {
      // ? THe below function set state to true, then after 1.5s sets the state to false
      this.setState({ copied: true }, () => {
         setTimeout(() => {
            this.setState({ copied: false });
         }, 1500);
      });
   };

   render() {
      const { name, background } = this.props;
      const { copied } = this.state;
      return (
         <CopyToClipboard text={background} onCopy={this.handleCopyState}>
            <div className='ColorBox' style={{ background }}>
               <div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
               <div className={`copy-msg ${copied && 'show'}`}>
                  <h1>Copied!</h1>
                  <p>{background}</p>
               </div>
               <div className='Container'>
                  <div className='box-content'>
                     <span>{name}</span>
                  </div>
                  <button className='copy-button'>Copy</button>
               </div>

               <span className='see-more'>More</span>
            </div>
         </CopyToClipboard>
      );
   }
}

export default ColorBox;
