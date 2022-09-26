import React from "react";

import Todo from "./Todo";
import NotePad from "./Notepad";
import {
    first_child_fragment,
    parent_fragment,
    second_child_fragment
} from "./style";

const Home = () => {
    return (
        <div style={parent_fragment}>
            <div style={first_child_fragment}>
                <NotePad />
            </div>
            <div style={second_child_fragment}>
                <Todo />
            </div>
        </div>
    )
};

export default Home;