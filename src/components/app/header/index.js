import React from 'react';
import SearchBlock from "./components/SearchBlock";
import LogoHeader from "./components/LogoHeader";
import ButtonFavor from "./components/ButtonFavor";
import ButtonFilter from "./components/ButtonFilter";

const Header = () => {
    return (
        <div>
        <header>
            <nav className="menu">
                <ul>
                    <LogoHeader />
                    <ButtonFavor />
                    <ButtonFilter />
                    <SearchBlock />
                </ul>
            </nav>
        </header>
        </div>
    )
}
export default Header