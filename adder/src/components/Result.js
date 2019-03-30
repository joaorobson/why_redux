import React from 'react';
import { connect } from 'react-redux';

class Result extends React.Component {
  render(){
    return(
      <div>
        <p style={{color: 'blue'}}>Result using props</p>
        <p style={{color: 'blue', fontSize: '40px'}}>{this.props.propsSum}</p>
        <p style={{color: 'blue'}}>Result using redux</p>
        <p style={{color: 'blue', fontSize: '40px'}}>{this.props.reduxSum}</p>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return state.result
}

export default connect(
  mapStateToProps,
)(Result)
