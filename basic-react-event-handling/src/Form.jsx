function handleFormSubmit(){
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted")
}
export default function Form(){
    return(
        <form>
            <input placeholder="write something" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}