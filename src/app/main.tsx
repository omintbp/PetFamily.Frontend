import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router";
import { store } from "./store";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<RouterProvider router={router}></RouterProvider>
	</Provider>
);
