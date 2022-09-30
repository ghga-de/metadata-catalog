import React from "react";

interface CircleBlobElementProps {
    colour: string;
    diameter: number;
    text: string;
    borderSize: number;
    rotation: number;
}

const CircleBlobElement = (props: CircleBlobElementProps) => {
    const mainDiv: React.CSSProperties = {
        width: String(props.diameter) + "px",
        height: String(props.diameter) + "px",
    };
    const parentDiv: React.CSSProperties = {
        transform: "rotate(" + props.rotation + "deg)",
        width: String(props.diameter) + "px",
        height: String(props.diameter) + "px",
        position: 'relative',
    };
    const mainCircle: React.CSSProperties = {
        // background: props.bgColour,
        width: String(props.diameter) + "px",
        height: String(props.diameter / 2) + "px",
        borderTopLeftRadius: String(props.diameter / 2) + "px",
        WebkitBorderTopLeftRadius: String(props.diameter / 2) + "px",
        WebkitBorderTopRightRadius: String(props.diameter / 2) + "px",
        borderWidth:
            String(props.borderSize) +
            "px " +
            String(props.borderSize) +
            "px 0 " +
            String(props.borderSize) +
            "px",
        borderColor: props.colour,
        borderStyle: "solid",
        boxSizing: "border-box",
        WebkitBoxSizing: "border-box",
        position: 'absolute',
    };
    const text: React.CSSProperties = {
        position: 'absolute',
        width: String(props.diameter) + "px",
        height: String(props.diameter) + "px",
    };
    return (
        <div style={mainDiv}>
            <p className="mb-0 d-flex justify-content-center align-items-center" style={text}>
                Submission
            </p>
            <div style={parentDiv}>
                <div style={mainCircle}>
                </div>
            </div>
        </div>
    );
};

export default CircleBlobElement;
