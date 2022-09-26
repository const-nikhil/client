import Form from "./form";

const Login = () => {
    return (
        <div style={{ width: "100%", display: "flex" }}>
            <img src="images/login.jpg" alt="default text" style={{ width: "60%", margin: "0px" }} />
            <div style={{ width: "40%" }}>
                <Form />
            </div>
        </div>
    )
};

export default Login;
