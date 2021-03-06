import React from 'react';
import './Dtl.css';

class Dtl extends React.Component {

    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <div>{location.state.title}</div>
        } else {
            return null
        }
        
    }
}

export default Dtl;