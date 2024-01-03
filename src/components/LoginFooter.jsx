import "../styles/LoginFooter.css";

function LoginFooter() {
	return (
		<footer className="login-footer">
			<div className="login-footer-links">
				<a href="/">Meta</a>
				<a href="/about">About</a>
				<a href="/blog">Blog</a>
				<a href="/jobs">Jobs</a>
				<a href="/help">Help</a>
				<a href="/api">API</a>
				<a href="/privacy">Privacy</a>
				<a href="/terms">Terms</a>
				<a href="/locations">Locations</a>
				<a href="/instagram-lite">
					Instagram lite
				</a>
				<a href="/threads">Threads</a>
				<a href="/directory/profiles">Profiles</a>
				<a href="/directory/hashtags">Hashtags</a>
				<a href="/directory/places">Places</a>

				<select
					className="login-footer-language"
					aria-label="Language selector"
					defaultValue={"en"}
				>
					<option value="af">Afrikaans</option>
					<option value="cs">Čeština</option>
					<option value="da">Dansk</option>
					<option value="de">Deutsch</option>
					<option value="el">Ελληνικά</option>
					<option value="en">English</option>
					<option value="es">
						Español (España)
					</option>
					<option value="es-la">Español</option>
					<option value="fi">Suomi</option>
					<option value="fr">Français</option>
					<option value="id">
						Bahasa Indonesia
					</option>
					<option value="it">Italiano</option>
					<option value="ja">日本語</option>
					<option value="ko">한국어</option>
					<option value="ms">
						Bahasa Melayu
					</option>
					<option value="nb">Norsk</option>
					<option value="nl">Nederlands</option>
					<option value="pl">Polski</option>
					<option value="pt-br">
						Português (Brasil)
					</option>
					<option value="pt">
						Português (Portugal)
					</option>
					<option value="ru">Русский</option>
					<option value="sv">Svenska</option>
					<option value="th">ภาษาไทย</option>
					<option value="tl">Filipino</option>
					<option value="tr">Türkçe</option>
					<option value="zh-cn">
						中文(简体)
					</option>
					<option value="zh-tw">
						中文(台灣)
					</option>
					<option value="bn">বাংলা</option>
					<option value="gu">ગુજરાતી</option>
					<option value="hi">हिन्दी</option>
					<option value="hr">Hrvatski</option>
					<option value="hu">Magyar</option>
					<option value="kn">ಕನ್ನಡ</option>
					<option value="ml">മലയാളം</option>
					<option value="mr">मराठी</option>
					<option value="ne">नेपाली</option>
					<option value="pa">ਪੰਜਾਬੀ</option>
					<option value="si">සිංහල</option>
					<option value="sk">Slovenčina</option>
					<option value="ta">தமிழ்</option>
					<option value="te">తెలుగు</option>
					<option value="vi">Tiếng Việt</option>
					<option value="zh-hk">
						中文(香港)
					</option>
					<option value="bg">Български</option>
					<option value="fr-ca">
						Français (Canada)
					</option>
					<option value="ro">Română</option>
					<option value="sr">Српски</option>
					<option value="uk">Українська</option>
					<option value="ar">العربية</option>
					<option value="fa">فارسی</option>
					<option value="ur">اردو</option>
					<option value="he">עברית</option>
					<option value="ur">اردو</option>
					<option value="mr">मराठी</option>
					<option value="ne">नेपाली</option>
					<option value="si">සිංහල</option>
					<option value="ta">தமிழ்</option>
					<option value="te">తెలుగు</option>
					<option value="vi">Tiếng Việt</option>
					<option value="zh-hk">
						中文(香港)
					</option>
					<option value="bg">Български</option>
					<option value="fr-ca">
						Français (Canada)
					</option>
					<option value="ro">Română</option>
					<option value="sr">Српски</option>
					<option value="uk">Українська</option>
					<option value="ar">العربية</option>
					<option value="fa">فارسی</option>
					<option value="ur">اردو</option>
					<option value="he">עברית</option>
				</select>

				<span className="login-footer-copyright">
					&copy; 2024 Instagram from Meta
				</span>
			</div>
		</footer>
	);
}

export default LoginFooter;
