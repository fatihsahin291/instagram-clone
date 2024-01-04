import { useForm } from "react-hook-form";
import { IoLogoFacebook } from "react-icons/io";

function LoginBox() {
	const { register, handleSubmit } = useForm();

	return (
		<div className="login-box">
			<div className="login-box-bg-img"></div>
			<form
				className="login-inputs"
				onSubmit={() => handleSubmit()}
			>
				<input
					type="text"
					placeholder="phone number, username, or email"
					{...register("username")}
				/>

				<input
					type="password"
					placeholder="password"
					{...register("password")}
				/>

				<button type="submit">Log In</button>
			</form>

			<div className="dividers">
				<hr className="divider"></hr>
				<span className="or">OR</span>
				<hr className="divider"></hr>
			</div>

			<div className="login-with-facebook">
				<button className="login-with-facebook-btn">
					<IoLogoFacebook className="facebook-logo" />
					Log In With Facebook
				</button>
			</div>

			<div className="forgot-password">
				<a href="https://www.instagram.com/accounts/password/reset/">
					Forgot Password?
				</a>
			</div>
		</div>
	);
}

export default LoginBox;
