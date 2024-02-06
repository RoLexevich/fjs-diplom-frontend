import Button from "src/components/Button/Button";
import "./loginform.scss";

const LoginForm = () => {
    return (
        <>
            <div className="login-form">
                <div className="login-form-link-buttons">
                    <Button
                        className="link-button"
                        onSubmit={() => {}}
                        text={"Войти"}
                    />
                    <div>или</div>
                    <Button
                        className="link-button"
                        onSubmit={() => {}}
                        text={"Зарегистрироваться"}
                    />
                </div>
                <div className="login-form-inputs">
                    <input placeholder="Введите логин" />
                    <input placeholder="Введите пароль" />
                    <div>
                        <Button onSubmit={() => {}} text={"Войти"} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
