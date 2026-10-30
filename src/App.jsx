import { useState } from "react";
import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import Footer from "./components/Footer";
import "./App.css";

function App() {

    const [count, setCount] = useState(0);
    const [showProfile, setShowProfile] = useState(true);

    const student = {
        name: "Anu",
        department: "CSE",
        year: "3rd Year"
    };

    return (
        <div>
            <Header />

            <div className="container">

                <button onClick={() => setShowProfile(!showProfile)}>
                    {showProfile ? "Hide Profile" : "Show Profile"}
                </button>

                {showProfile && (
                    <StudentProfile
                        name={student.name}
                        department={student.department}
                        year={student.year}
                        count={count}
                        setCount={setCount}
                    />
                )}

            </div>

            <Footer />
        </div>
    );
}

export default App;