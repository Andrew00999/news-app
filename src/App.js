import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/article/:id" element={<NewsDetails />} />
                </Routes>
            </Router>
            <Header />
        </>
    );
}

export default App;
