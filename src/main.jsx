import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routers from "./routers/index.jsx";

const LoadingFallback = () => {
    return (
        <div className="load">
            <p>Loading...</p>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    {Routers.map((router, index) => (
                        <Route
                            key={index}
                            path={router.path}
                            element={<router.component />}
                        />
                    ))}
                </Routes>
            </Suspense>
        </Router>
    </React.StrictMode>
);
