import { useState } from "react"
export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false)
    
    function toogleLike() {
        setIsLiked(!isLiked);
    }

    let styles = {
        color:"red"
    }

    return(
        <div>
            <p onClick={toogleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={styles}></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    )
}