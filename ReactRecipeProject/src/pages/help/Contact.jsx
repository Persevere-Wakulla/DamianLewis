import {Form, redirect, useActionData} from "react-router-dom"

export default function Contact(){
const data = useActionData()

    return(
        <div className="contact">
            <h2>Contact</h2>
            <Form method="post" action="/help/contact">
                <label htmlFor="">
                <span>Your email:</span>
                <input type="email" name="email" required style={{color: "black"}} />
                </label>
                <label htmlFor="">
                <span>Your message:</span>
                <textarea type="text" name="message" required style={{color: "black"}}></textarea>
                </label>
                <button>Submit</button>

                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    )
}
export const contactAction = async ({request}) =>{
console.log(request)
    const data = await request.formData()

    const submission = {
        email: data.get('email'),
        message: data.get('message')
    }

    
    // send post request 
    if(submission.message.length < 10){
        return {error: "Message must be over 10 chars long"}
    }
    console.log(submission)

// redirect the use
    return redirect('/')
    
}