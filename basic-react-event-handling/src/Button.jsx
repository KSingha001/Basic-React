function handleClick(){
    console.log("Hello, World!");
}

function handleMouseOver(){
    console.log("Bye, World!");
}

function handleDblClick(){
    console.log("Double Clicked!");
}

export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click Me</button>
            <p onClick={handleMouseOver}>This parah is for event demo</p>
            <button onDoubleClick={handleDblClick}>double click</button>
        </div>
    )
}