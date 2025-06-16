import { useState } from "react"

export default function Form(){
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    })

    // let handleChange = (event) => {
    //     setFullName(event.target.value)
    // }

    // let handleUsername = (event) => {
    //     setUsername(event.target.value)
    // }

    let handleInputChange = (event) => {
        let fieldName = event.target.name
        let newValue = event.target.value

        setFormData((currData) => {
            // currData[fieldName] = newValue
            // return {...currData}
            return {...currData, [fieldName]: newValue}
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        console.log("Form submitted with data: ", formData)
        // Reset the form
        setFormData({
            fullName: "",
            username: "",
            password: ""
        })
    }

    return(
        <form onSubmit={handleSubmit}>

            <label htmlFor="fulName">Full Name :</label>
            <input placeholder="Enter your name" type="text" value={formData.fullName} id="fulName" name="fullName" onChange={handleInputChange}/>

            <br /><br /><br />

            <label htmlFor="username">Username :</label>
            <input placeholder="Enter username" type="text" value={formData.username} id="username" name="username" onChange={handleInputChange}/>

            <br /><br /><br />

            <label htmlFor="password">Password :</label>
            <input placeholder="Enter Password" type="password" value={formData.password} id="password" name="password" onChange={handleInputChange}/>

            <button>Submit</button>

        </form>
    )
}