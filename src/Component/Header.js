import React from "react";

function Header(){
    return <header className="bg-dark">    <div className="container">
    <div className="row justify-content-center align-items-center p-2">
        <div className="col">
            <h4 className="text-light">Start Bootstrap</h4>
        </div>
        <div className="col-4 navigator">
            <ul className="nav justify-content-center">
                <li className="nav-item"><a className="nav-link" href="">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="">About</a></li>
                <li className="nav-item"><a className="nav-link" href="">Contact</a></li>
            </ul>
        </div>
    </div>
</div></header>

}
export default Header;