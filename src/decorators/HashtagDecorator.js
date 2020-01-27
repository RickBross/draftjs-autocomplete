import React from 'react';
import AutocompleteDecorator from './AutocompleteDecorator';

export default class HashtagDecorator extends AutocompleteDecorator {

    constructor(props) {
        super(props)
    }

    ref = React.createRef();

    uuid;

    render() {
        const {props} = this;
        
        return (
            <span ref={this.ref} className="AutocompleteDecorator HashtagDecorator">
                {props.children}
            </span>
        );
    }
};
