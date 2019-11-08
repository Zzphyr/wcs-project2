import HomeTitle from './HomeTitle';
import Modal from 'react-modal';
import './HomePage.css';
import React, { Component } from 'react';
import ChooseSettings from './ChooseSettings';


class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
    }
  };

  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  }
  
  handleChoices() {
    this.props.getQuiz(); 
  };
   
  
  render() {
    return ( 
       <div className="homepage-main">
       <ChooseSettings 
          selectDif={this.props.selectDif} 
          chosenDif={this.props.chosenDif}
          difficulties={this.props.difficulties}
          chosenCat={this.props.chosenCat}
          selectCat={this.props.selectCat}
          categories={this.props.categories}
        />
        
        <HomeTitle /> 
        <div className="btns_container">
          <div className="start_container">
            <button 
              onClick={() => this.handleChoices()} 
              className="StartBtn"
            >Start
            </button>
          </div>

          <button onClick={this.openModal} className="HelpBtn">?</button>
            <Modal 
              className="ModalStyle"
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
            >
              <div className='Modal_Container'>
                <h2 ref={subtitle => this.subtitle = subtitle}>Questions</h2>
                <p>Choose the Category and leve of dificulty. By default it shows a random mix of questions. There are 10 of them... are you ready?</p>
                <button onClick={this.closeModal} className="Close">Close</button>
              </div>
            </Modal>
         </div>
      </div>
    );
  }
}


export default Homepage;
