import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../FormControls/FormContros";
import { required, maxLength } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { loginThunkCreator } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import classes from "../../components/FormControls/FormControls.module.css";

const maxLength10 = maxLength(100);

const Login = (props) => {
	const dataFromForm = (data) => {
		props.loginThunkCreator(data.email, data.password, data.rememberMe, data.captcha);
	};
	if (props.isAuth) {
		return <Redirect to={"/Profile"} />;
	}
	return (
		<main>
			<div>
				<h2>логин</h2>
			</div>
			<LoginReduxForm
				onSubmit={dataFromForm}
				captchaUrl={props.captchaUrl}
			/>
		</main>
	);
};

const LoginForm = (props) => {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field
						placeholder={"login"}
						component={Input}
						name={"email"}
						validate={[required, maxLength10]}
					/>
				</div>
				<div>
					<Field
						placeholder={"password"}
						component={Input}
						name={"password"}
						validate={[required, maxLength10]}
					/>
				</div>
				<div>
					<Field
						type={"checkbox"}
						component={"input"}
						name={"rememberMe"}
					/>
					Remember me
				</div>
				{props.captchaUrl && <img src={props.captchaUrl} />}
				{props.captchaUrl && (
					<div>
						<Field
							placeholder={"enter the captcha"}
							component={Input}
							name={"captcha"}
						/>
					</div>
				)}
				{props.error && (
					<div className={classes.formSummeryError}>
						{props.error}
					</div>
				)}
				<div>
					<button>Login</button>
				</div>
			</form>
		</div>
	);
};

let LoginReduxForm = reduxForm({
	form: "login",
})(LoginForm);

const mapStateToProps = (state) => {
	return { isAuth: state.auth.isAuth, captchaUrl: state.auth.captchaUrl };
};
export default connect(mapStateToProps, { loginThunkCreator })(Login);
