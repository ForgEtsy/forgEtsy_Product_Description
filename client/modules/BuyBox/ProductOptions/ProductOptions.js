import React from 'react';
import Option from './Option/Option';

export default function ProductOptions({ options }) {
    return options.map(option => (
        <div key={option._id}>
            <Option option={option} />
        </div>
    ))
}