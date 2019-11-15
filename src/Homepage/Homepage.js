import HomeTitle from './HomeTitle';
import Modal from 'react-modal';
import React, { Component } from 'react';
import ChooseSettings from './ChooseSettings';

import './HomePage.css';
import '../App.css';

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
    if (this.state.modalIsOpen === true) {
    this.setState({
      modalIsOpen: false
    });
  }
  }
  
  handleChoices() {
    this.props.getQuiz(); 
    this.props.updatedTimer();
  };
   
  
  render() {
    const { chosenCat, chosenDif, categories, difficulties, selectCat, selectDif} = this.props;
    return ( 
      <main className="homepage-main">
        <HomeTitle />
        <div className="btns_container" onClick={this.closeModal}>
          <div className="help-btn-div">
            <button onClick={this.openModal} className="HelpBtn">?</button>
          </div>
          <div className="start-btn-div">
            <button 
              onClick={() => this.handleChoices()} 
              className="start-btn"
            >Start
            </button>
          </div>
            <Modal 
              className="ModalStyle"
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
            >
              <div className='Modal_Container'>
                <h2 ref={subtitle => this.subtitle = subtitle}>How to play</h2>
                <p className="modal-text">Choose your favourite Category and the level of dificulty. Select <em>Any</em> to challenge yourself with a random mix of questions.</p> 
                <p className="modal-text">There are 10 of them... are you ready?</p>
                <button onClick={this.closeModal} className="Close">Close</button>
              </div>
            </Modal> 
            <ChooseSettings 
              selectDif={selectDif} 
              chosenDif={chosenDif}
              difficulties={difficulties}
              chosenCat={chosenCat}
              selectCat={selectCat}
              categories={categories}
          />
        </div>
      </main>
    );
  }
}


export default Homepage;
