import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { Textfield } from "../../component"


const Form = () => {
    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const [loadingButton, setLoadingButton] = useState(false);
    const navigate = useNavigate();

    const handleChange = (field, event) => {
        setState({ ...state, [field]: event.target.value });
    };

    const onEnter = (e) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    }

    const onSubmit = async () => {
        try {
            setLoadingButton(true)
            const data = JSON.stringify({
                "email": state.username,
                "password": state.password
            });

            const config = {
                method: 'post',
                url: 'http://localhost:9000/api/user/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            const response = await axios(config)
            if (response.data.status === 200) {
                setLoadingButton(false)
                localStorage.setItem("access-token", response.data.data);
                navigate("/")

            }
        } catch (err) {
            setLoadingButton(false)
            console.log(err)
        }


    }

    return (
        <Container sx={{ position: "relative", top: "40%" }}>
            <img src="images/login-icon.png" alt="default text" style={{ height: "50px", marginLeft: "47%" }} />
            <Typography variant="h5" sx={{ color: "#0c0c90" }} align="center" >
                <b style={{ marginLeft: "10px" }}>
                    Hello..!!
                </b>
            </Typography>
            <div style={{ margin: "20px 0px" }} >

                <Textfield
                    label="username"
                    value={state.username}
                    onChange={(e) => handleChange("username", e)}
                    onKeyPress={onEnter} />
            </div>
            <div style={{ margin: "20px 0px" }} >
                <Textfield
                    label="password"
                    value={state.password}
                    onChange={(e) => handleChange("password", e)}
                    onKeyPress={onEnter} />
            </div>
            <div style={{ margin: "20px 0px" }} >
                <LoadingButton
                    loading={loadingButton}
                    loadingPosition="start"
                    startIcon={<LockOpenIcon />}
                    sx={{ width: "50%", marginLeft: "28%", border: "2px solid #1976d2", borderRadius: "8px" }}
                    variant="contained"
                    onClick={onSubmit}
                >Login
                </LoadingButton>
            </div>
        </Container >
    )
}

export default Form;
