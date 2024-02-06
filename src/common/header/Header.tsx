import React, { useState } from "react";
import "./header.scss";
import { Popover } from "react-tiny-popover";
import LoginForm from "../LoginForm/LoginForm";

export default function Header() {
    const user = String();
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    return (
        <>
            <header className="app-header">
                <div className="logo"></div>
                <div className="user-panel">
                    <div className="user-panel-info">{user}</div>
                    {user ? (
                        <div className="user-panel-logout">Выйти</div>
                    ) : (
                        <Popover
                            isOpen={isPopoverOpen}
                            padding={15}
                            align="end"
                            transform={{ left: 50 }}
                            transformMode="relative"
                            onClickOutside={() => setIsPopoverOpen(false)}
                            positions={["bottom"]}
                            content={<LoginForm />}
                        >
                            <div
                                className="user-panel-login"
                                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                            >
                                Войти
                            </div>
                        </Popover>
                    )}
                    <div className="user-panel-logo-auth"></div>
                </div>
            </header>
        </>
    );
}
