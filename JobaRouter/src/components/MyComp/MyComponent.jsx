 


 import React, {useState} from 'react';

 export default function MyComp(){
    const [name, setName]  = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("")

    
    function handleNameChange(event){
        setName(event.target.value); 
        
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);

    }

    function handleCommentChange(e){
        setComment(e.target.value)

    }

    function handlePaymentChange(ev){
        setPayment(ev.target.value)

    }

    function handleShippingChange(ev){
        setShipping(ev.target.value)
    }


return(
    <div>
        <input value={name}  onChange={handleNameChange} type="text" />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number" />
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instruction...'/>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label htmlFor="">
            <input type="radio" value="Pick Up" name="store"
                        check={shipping === "Pick Up"}
                        onChange={handleShippingChange}/>
            Pick Up
        </label>
        <label htmlFor="">
            <input type="radio" value="Delivery" name="store"
            check={shipping === "Delivery"}
            onChange={handleShippingChange} />
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>
)
 }
