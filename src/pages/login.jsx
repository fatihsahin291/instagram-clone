import "../styles/Login.css";
import LoginBox from "../components/LoginBox";

function Login() {
	return (
		<div className="login">
			<div className="login-img">
				<div className="login-img-screenshot">
					<img
						src="../images/login-screenshot1-2x.png"
						alt="Instagram login page screenshot"
						className="login-img-screenshot-screen"
					/>
				</div>
			</div>

			<div className="login-form">
				<LoginBox />

				<div className="signup">
					Don&apos;t have an account?
					<a href="/accounts/emailsignup">
						Sign up
					</a>
				</div>

				<div className="get-the-app">
					<span>Get the app.</span>
					<div className="app-download-links">
						<a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
							<img
								src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
								alt="Download on the App Store"
							/>
						</a>
						<a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D4C1B6E4E-9F4F-4F2B-8D0C-7B3F0E0F8E2B%26utm_content%3Dlo%26utm_medium%3Dbadge">
							<img
								src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
								alt="Get it on Google Play"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
