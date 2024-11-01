import React, { useContext, useState } from "react"
import { UserContext } from "../../layouts/RootLayout"
import { useNavigate, useParams } from 'react-router-dom';

const UserEdit = () => {
    const { myUser, setMyUser } = useContext(UserContext)
    const navigate = useNavigate();
    const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [answer, setAnswer] = useState(false);

    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [email, setEmail] = useState(user.email)
    const [userName, setUserName] = useState(user.userName)
    const [password, setPassword] = useState(user.password)


    // useEffect to load the data into inputs
    useEffect(() => {
        if (message === '' || message === 'User Not Found' || message === 'Please complete all fields') {
            document.querySelectorAll('input').forEach(ip => ip.value = '')
        } else {
            move('/:id/lessons')
        }
    }, [message])

    const updateUser = async () => {

        
        // let update = { firstName: first, lastName: last, .....}
        //  - put request to change the user's info
        // refer to EditLesson red dots



        let editUser ={}
        const inputs = document.querySelectorAll('input')
        inputs.forEach(ip => {
            editUser[ip.id] = ip.value
        })
        console.log(inputs)
        const request = await fetch(`http://localhost:5500/${myUser._id}`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(newUser),
            headers: { "Content-Type": "application/json" }
        })
        const response = request.json()
        if (response){
            sessionStorage.setItem('user', JSON.stringify(newUser))
            setMyUser(newUser)
        }



        // fetch('http://127.0.0.1/user', {
        // body: JSON(update)
        // })



    }




    const handleUserEdit = () => {
        const data = {

        };


        setLoading(true);
        fetch(`http://localhost:5500/lessons/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(lessonCard),
            mode: 'cors'
        })

            .then(() => {
                setLoading(false);
                navigate('/:id/lessons');
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happned. Please Check console');
                console.log(error);
            });
    };




    return (
        <div className="user-edit">
            <input type="text" defaultValue={user.firstName} onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            <input type="text" defaultValue={user.lastName} onChange={(e) => setLastName(e.target.value)} value={lastName} />
            <input type="text" defaultValue={user.email} onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="text" defaultValue={user.userName} onChange={(e) => setUserName(e.target.value)} value={userName} />
            <input type="text" defaultValue={user.password} onChange={(e) => setPassword(e.target.value)} value={password} />
            <button onClick={handleUserEdit}>
                Submit
            </button>
        </div>
    )
}

export default UserEdit