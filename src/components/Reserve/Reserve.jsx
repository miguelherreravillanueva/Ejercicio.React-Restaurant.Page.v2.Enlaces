import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';


export const Reserve = () => {
    let navigate = useNavigate();
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState(true);
    const [data, setData] = useState({
        name: "",
        telf: "",
        date: "",
    })

    const initialState = {
        name: "",
        telf: "",
        date: "",
    };

    const clearState = () => {
        setData({ ...initialState });
    };

    useEffect(() => {
        if (data.name.length < 1 || data.telf.length < 1 || data.date.length < 1) {
            setMessage("Please, fill the gaps");
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
    }, [data]);

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Your data:" + data.name + " " + data.telf + " " + data.date);
        localStorage.setItem("user", JSON.stringify(data));
        clearState();
        setTimeout(() => {
            navigate('/')
        }, 3000);
        setVisible(false)
    };

    return (
        <>
            <div>
                <h3>Make your reservation</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={data.name}
                    onChange={handleInputChange}
                    name="name"
                />
                <br />
                <input
                    type="text"
                    placeholder="Your telephone number"
                    value={data.telf}
                    onChange={handleInputChange}
                    name="telf"
                />
                <br />
                <input
                    type="date"
                    placeholder="Your reservation date"
                    value={data.date}
                    onChange={handleInputChange}
                    name="date"
                />
                <br />
                <button type="submit" disabled={btnDisabled}>
                    Reserve
                </button>
            </form>
            <p>{visible ? message : <i>Merci beaucoup</i> }</p>
        </>
    );
};

export default Reserve;