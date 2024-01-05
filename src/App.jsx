import "./App.scss";
import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/login";
import ForyouPage from "./appLayout/ForyouPage";

function App() {
	return (
		<>
			<div className="mode dark-mode">
				<BrowserRouter>
					<Routes>
						<Route
							path="/login"
							element={<Login />}
						/>

						<Route
							path="/"
							element={<ForyouPage />}
						/>

						<Route
							path="*"
							element={<PageNotFound />}
						/>
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
