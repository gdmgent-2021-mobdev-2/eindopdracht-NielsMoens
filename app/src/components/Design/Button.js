import PropTypes from 'prop-types';

const Button = ({ children, onClick, color = "outline-dark", type = "button" }) => {
    return (
        <button
            className={`btn btn-${color}`}
            onClick={onClick}
            type={type}>
            { children }
        </button>
    )
};

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    color: PropTypes.oneOf(['primary', 'secondary', 'light', 'outline-light','outline-dark', 'danger']),
};

export default Button;
