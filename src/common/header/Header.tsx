import React from "react";
import './header.scss'

export default function Header() {
    const  user = String();

    return (
        <>
            <header className="app-header">
                <div className="logo"></div>
                <div className="user-panel">
                    <div className="user-panel-info">{user}</div>
                    {user ? (
                        <div className="user-panel-logout">Выйти</div>
                    ) : (
                        <div className="user-panel-login">Войти</div>
                    
                    )}
                                            <div className="user-panel-logo-auth"></div>

                </div>
            </header>
        </>
    );
}
