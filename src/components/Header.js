import React, { useState } from "react";

function Header({ isDarkMode, onDarkModeClick }) {

    return(
       <header>
           <button onClick={onDarkModeClick}>{isDarkMode ? "Dark Mode" : "Light Mode"}</button>
       </header> 
    );
}

export default Header;