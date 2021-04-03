import PropTypes from 'prop-types';

const Input = ({ name, label, onChange, value }) => {
    return (
        <>
            <label htmlFor={name} className="form-label">{ label }</label>
            <input name={name}
                   id={name}
                   value={value}
                   onChange={onChange}
                   className="form-control" />
        </>
    )
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
};

export default Input;
