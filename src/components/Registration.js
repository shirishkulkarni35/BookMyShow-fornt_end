import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
function Registration() {
    const [username, setUsername] = useState("");
    const [emailaddress, setEmailAddress] = useState("");
    const [passwordd, setPasswordd] = useState("");

    function clearInput() {
        setUsername("");
        setEmailAddress("");
        setPasswordd("");
    }

    async function UserPost() {
        console.log(username, emailaddress, passwordd);
        const userDetails = {
            "username": username,
            "email": emailaddress,
            "password": passwordd
        }
        // console.log(userDetails);
        const response = await axios.post("https://book-my-show-backend-shirish.herokuapp.com/user-register", userDetails).then((data) => {
            Swal.fire({
                title: `<strong>${data.data.message}</strong>`,
                icon: 'success',
                showCloseButton: true,

            });
            clearInput()
        })
            .catch((err) => Swal.fire({
                title: `<strong>${err.message}</strong>`,
                icon: 'error',
                showCloseButton: true,
            }));
        // console.log(response);

    }

    return (
        <div>
            <Container style={{ padding: "5%" }}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Enter Email" />
                        <Form.Text className="text-muted">
                            we'll never share your email with anyone else
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={passwordd} onChange={(e) => setPasswordd(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="primary" onClick={UserPost}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default Registration;
