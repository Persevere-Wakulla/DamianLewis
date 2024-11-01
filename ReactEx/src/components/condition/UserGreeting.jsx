// import './greeting.css';
import PropTypes from 'prop-types';
export default function UserGreeting(props) {

    if (props.isLoggedIn) {
        return <h2 style={{
            fontSize: 25,
            backgroundColor: 'green',
            color: 'white',
            padding: 10,
            borderRadius: 5,
            margin: 0
        }}>Welcome {props.username}</h2>
    }
    else {
        return <h2 style={{
            fontSize: 25,
            backgroundColor: 'red',
            color: 'white',
            padding: 10,
            borderRadius: 5,
            margin: 0
        }}>Please log in to continue</h2>
    }

}
UserGreeting.proptype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}