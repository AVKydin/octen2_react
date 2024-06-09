import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Header:FC = () => {
    return (
        <div>
            <hr/>
            <Link to="/">Login page</Link>
            <br/>
            <Link to="cars">cars</Link>
            <hr/>
        </div>
    );
};

export default Header;
