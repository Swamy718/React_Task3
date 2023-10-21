import './Color_picker.css';
import { useState } from 'react';

const ColorPicker = (props) => {
    const [show, setShow] = useState(true);
    const [color, setColor] = useState("pink");
    const list = () => {
        return props.color.map((value) => {
            return <div style={{ backgroundColor: value, width: "29px", height: "29px", margin: "5px" }} onClick={() => handleColor(value)}></div>;
        });
    };
    const handleColor = (value) => {
        setColor(value);
        document.getElementById("coldiv").style.backgroundColor = value;
        setShow(false);
    };
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Color Picker</h1>
            <div id="coldiv" style={{ backgroundColor: color }}>
                {show && <div id="listdiv">{list()}</div>}
                <button type="button" onClick={() => setShow(true)}>Pick a color</button>
            </div>
        </div>
    );
};

export default ColorPicker;
