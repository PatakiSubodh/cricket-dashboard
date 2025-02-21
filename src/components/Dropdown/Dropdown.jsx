import { useState } from "react";
import Year from "./Year.jsx";
import Category from "./Category.jsx";
import Match from "./Match.jsx";
import Country from "./Country.jsx";
import "./Dropdown.css";
import Scoreboard from "../Scoreboard/Scoreboard.jsx";

function Dropdown() {
    const [year, setYear] = useState("");
    const [category, setCategory] = useState("");
    const [match, setMatch] = useState("");
    const [country, setCountry] = useState("");
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const categoryToMatches = {
        "ODI": ["India vs Sri Lanka", "India vs Australia", "Australia vs England"],
        "T20": ["Pakistan vs Bangladesh", "South Africa vs West Indies", "New Zealand vs England"]
    };

    const matchToCountries = {
        "India vs Sri Lanka": ["India", "Sri Lanka"],
        "India vs Australia": ["India", "Australia"],
        "Australia vs England": ["Australia", "England"],
        "Pakistan vs Bangladesh": ["Pakistan", "Bangladesh"],
        "South Africa vs West Indies": ["South Africa", "West Indies"],
        "New Zealand vs England": ["New Zealand", "England"]
    };

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
        setMatch("");
        setCountry("");
    };

    const handleMatchChange = (selectedMatch) => {
        setMatch(selectedMatch);
        setCountry("");
    };

    const handleSubmit = () => {
        console.log("Submit Clicked! Current State:", { year, category, match, country });
        
        if (!year || !category || !match || !country) {
            setError("*All fields must be selected!");
        } else {
            setError("");
            setSubmitted(true);
        }
    };

    const handleClear = () => {
        console.log("Clearing selections...");
        setYear("");
        setCategory("");
        setMatch("");
        setCountry("");
        setError("");
        setSubmitted(false); // Hide Scoreboard
    };

    return (
        <div className="container">
            <div className="dropdown-container">
                <div className="dropdown-inline">
                    <Year selectedYear={year} setYear={setYear} />
                    <Category selectedCategory={category} setCategory={handleCategoryChange} />
                    <Match 
                        selectedMatch={match} 
                        setMatch={handleMatchChange} 
                        matches={category ? categoryToMatches[category] : []} 
                        disabled={!category} 
                    />
                    <Country 
                        selectedCountry={country} 
                        setCountry={setCountry} 
                        countries={match ? matchToCountries[match] : []} 
                        disabled={!category || !match} 
                    />
                </div>
                <div className="dropdown-button">
                    <button className="submit-button" onClick={handleSubmit}>Submit</button>
                    <button className="clear-button" onClick={handleClear}>Clear</button>
                    
                    {error && 
                        <div className="popup-overlay">
                            <div className="popup">
                                <p className="error-message">{error}</p>
                                <button onClick={() => setError("")}>Close</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
            
            {/* Show Scoreboard only if all fields are filled */}
            {submitted && year && category && match && country && (
                <>
                    {console.log("Rendering Scoreboard with:", { year, category, match, country })}
                    <Scoreboard year={year} category={category} match={match} country={country} />
                </>
            )}
        </div>
    );
}

export default Dropdown;
