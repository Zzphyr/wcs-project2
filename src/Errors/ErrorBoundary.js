import React, { Component } from 'react';
import { withRouter } from 'react-router';


class ErrorBoundary extends Component {
   constructor(props) {
      super(props);
      this.state = { 
         error: null, 
         errorInfo: null
      };
      const { history } = this.props;

      history.listen((location, action) => {
      if (this.state.hasError) {
         this.setState({
            hasError: false,
         });
      }
      });
   }
   
   componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      // You can also log error messages to an error reporting service here
      this.setState({
         error: error,
         errorInfo: errorInfo
      })
   }
   
   render() {
      if (this.state.errorInfo) {
         // Error path
         return (
            <div style={{position:"relative",textAlign:"center",top:"10vh"}}>
               <h2>Hmm... something strange happened...</h2>
               <details style={{ whiteSpace: 'pre-wrap' }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
               </details>
            </div>
         );
      }
      // Normally, just render children
      return this.props.children;
   }  
}

export default withRouter(ErrorBoundary);