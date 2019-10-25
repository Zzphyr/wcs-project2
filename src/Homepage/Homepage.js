import React from 'react';
import HomeTitle from './HomeTitle';
import Modal from 'react-modal';
import './HomePage.css';


class Homepage extends React.Component {
  constructor(){
   super();
   this.state = {
     modalIsOpen: false
   }
   };

 openModal = () => {
   this.setState({modalIsOpen: true});}

 afterOpenModal = () => {
   // references are now sync'd and can be accessed.
   this.subtitle.style.color = '#f00';}

 closeModal = () => {
   this.setState({modalIsOpen: false});}
 render() {
      return ( 
       <>
         <HomeTitle /> 
         <div>
        <button onClick={this.openModal} className="HelpBtn">?</button>
        <div className='Modal_Container'>
        <Modal className="ModalStyle"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}>
          <h2 ref={subtitle => this.subtitle = subtitle}>Questions</h2>
          <span>This is a Trivia Game where you are able to elect your own Category and Difficulty Level.</span>
          <button onClick={this.closeModal} className="Close">Close</button>
        </Modal>
        </div>
      </div>
      </>
    );
  }
}



export default Homepage;