import { useEffect } from "react";

function StudentProfile({ name, department, year, count, setCount }) {

    useEffect(() => {
        const previousTitle = document.title;

        document.title = `Practice Sessions: ${count}`;

        return () => {
            document.title = previousTitle;
        };
    }, [count]);

    return (
        <div className="student-profile">
            <h2>Student Profile</h2>

            <p><b>Name:</b> {name}</p>
            <p><b>Department:</b> {department}</p>
            <p><b>Year:</b> {year}</p>

            <h3>Practice Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Complete Practice
            </button>

            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}

export default StudentProfile;