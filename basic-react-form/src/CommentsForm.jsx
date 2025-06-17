import { useState } from "react";

export default function CommentsForm({addNewComment}) {

    let [formData, setFormData] = useState({
        username: '',
        remarks: '',
        rating: ''
    });

    let handleChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value}
        })
    }

    let handleSubmit = (event) => {
        console.log(formData);
        addNewComment(formData)
        event.preventDefault();
        setFormData({
            username: '',
            remarks: '',
            rating: ''
        });
    }

    return(
        <div>
            <h4>Give a Comment</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"></label>
                <input type="text" placeholder="username" value={formData.username} onChange={handleChange} id="username" name="username"/>
                <br /><br /><br />

                <label htmlFor="remarks"></label>
                <textarea placeholder="remark" value={formData.remarks} onChange={handleChange} id="remarks" name="remarks"></textarea>
                <br /><br /><br />

                <label htmlFor="rating"></label>
                <input type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleChange} id="rating" name="rating"/>
                <br /><br /><br />

                <button>Add Comment</button>
            </form>
        </div>
    )
}