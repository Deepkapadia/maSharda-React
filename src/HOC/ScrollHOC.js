import React from 'react';
// Take in a component as argument WrappedComponent
const withScrollHOC = (WrappedComponent) => {
// And return another component
  class HOC extends React.Component {
      componentDidMount = () => {window.scrollTo(0,0);}

    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
  return HOC;
};

export default withScrollHOC