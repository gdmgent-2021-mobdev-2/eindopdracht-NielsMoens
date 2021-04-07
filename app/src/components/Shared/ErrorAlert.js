import Alert from "../Design/Alert";

const ErrorAlert = ({ err }) => {
    if (!err) {
        return null;
    }

    return (
        <Alert color="danger">{err.message || 'Something went wrong'}</Alert>
    );
};

export default ErrorAlert;
