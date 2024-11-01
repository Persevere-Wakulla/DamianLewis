import useWindowResize from "./Window";

export default function WindowResizer() {
    const windowSize = useWindowResize();
    const { width, height } = windowSize;

    return (
        <div className="containerOne">
            <h1 className="header">Window Resizer</h1>
            <div className="containerTwo">
                <div className="containerThree">
                    <h1>Window Resizer</h1>
                    <div className="para">
                        <p>width is {width}</p>
                    </div>
                    <div className="para">
                        <p>Height is {height} </p>
                    </div>
                </div>
            </div>
        </div>
    )


}