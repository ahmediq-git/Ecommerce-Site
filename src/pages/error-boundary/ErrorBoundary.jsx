import React, {Component} from 'react'
import ErrorPage from './ErrorPage'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
      }
    
    componentDidCatch(error, errorInfo) {
  
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  
  }
  
  render() {
    if (this.state.errorInfo) {
      return (
        <ErrorPage/>
      );
    }

    return this.props.children;
  }
}