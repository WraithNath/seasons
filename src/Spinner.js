import React from 'react';

const Spinner = props => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.text}
            </div>
        </div>
    );
};

Spinner.defaultProps = {
    text: 'Loading...'
};

export default Spinner;