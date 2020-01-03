import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    state = {
        lat: null,
        error: null,
        loading: true
    };

    render = () => {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }

    renderContent = () => {
        if (this.state.error) {
            return <div>Error: {this.state.error}</div>;
        }

        if (!this.state.error && this.state.lat)
            return <SeasonDisplay lat={this.state.lat}/>;

        return <Spinner text="Please accept location request..."/>;
    };

    componentDidMount = () => {
        console.log('component did mount');
        console.log('getting geolocation...');

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({
                lat: position.coords.latitude
            }),
            (error) => this.setState({
                error: error.message
            }),
        );
    }

    componentDidUpdate = () => {
        console.log('component did update');
    }

    componentWillUnmount = () => {
        console.log('component did unmount');
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);