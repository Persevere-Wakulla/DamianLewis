


// import Pokemon from "./components/pokemon/pokemon"
// import UserPost from "./components/user-post/userPost";
// import FormInput from "./components/form-input/FormInput";
import UserGreeting from "./components/condition/UserGreeting";
import Demo from "./components/setCounter";
import UseWindowResize from "./components/window-resize/WindowResizer";
import Timer from "./components/count-down/CountDown";

function App() {
    return (
        <div className='App'>
        {/* <Pokemon /> */}
        {/* <UserGreeting isLoggedIn={false} username="BroCode" /> */}
        {/* <UserPost /> */}
        {/* <FormInput /> */}
        <Timer />
        <Demo />
        <UseWindowResize />
        </div>

    );
}
export default App;