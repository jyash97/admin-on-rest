import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Labeled from '../input/Labeled';

export const FormInput = ({ className, input, ...rest }) =>
    input ? (
        <div
            className={classnames(
                'ra-input',
                `ra-input-${input.props.source}`,
                className
            )}
        >
            {input.props.addLabel ? (
                <Labeled {...input.props}>
                    {React.cloneElement(input, rest)}
                </Labeled>
            ) : (
                React.cloneElement(input, rest)
            )}
        </div>
    ) : null;

FormInput.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object,
    input: PropTypes.object,
};

export default FormInput;
