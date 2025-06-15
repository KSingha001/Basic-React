import "./Product.css";
import Price from "./Price";

function Product({title,idx}){
    let oldPrice = ["12,495","11,900","1,599","599"]
    let newPrice = ["8,999","9,199","899","278"]
    let description = [
        ["8,000 DPI","5 Programmable Buttons"],
        ["Intuitive Surface","Designed Surface"],
        ["Designed for iPad Pro","Inituitive Surface"],
        ["Wireless","Optical Sensor"]
    ]
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    )

}

export default Product;







    // let isDiscount = price > 30000
    // let styles={backgroundColor: isDiscount ? "yellow" : ""}
    // return(
    //     <div className="Product" style={styles}>
    //         <h3>{title}</h3>
    //         <h5>Price: {price}</h5>
    //         {/* {price > 30000 ? <p>Discount of 5%</p> : null} */}
    //         {isDiscount && <p>Discount of 5%</p>}
    //     </div>
    // )


    // if(price>30000){
    //     return(
    //         <div className="Product">
    //             <h3>{title}</h3>
    //             <h5>Price :{price}</h5>
    //             <p>Discount of 5%</p>
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div className="Product">
    //             <h3>{title}</h3>
    //             <h5>Price:{price}</h5>
    //             {/* <p>{features1}</p> */}
    //             {/* <p>{features1.map((feature) => <li>{feature}</li>)}</p> */}
    //             {/* <p>{features2.a}</p> */}
    //         </div>
    //     )
    // }
