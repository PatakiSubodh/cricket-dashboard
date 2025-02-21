import "./Scoreboard.css";
import squads from "./playerData.js";
import PlayerTable from "./PlayerTable.jsx";
import TopPerformers from "./TopPerformers.jsx";

export default function Scoreboard({ year = "", category = "", match = "", country = "" }) {
    const players = squads?.[category]?.[year]?.[match]?.[country] || {};
    let topRunScorer = { name: "N/A", runs: 0 };
    let topWicketTaker = { name: "N/A", wickets: 0 };

    let allPlayers = [];

    ["Batters", "Bowlers", "AllRounders"].forEach((role) => {
        if (players[role]) {
            players[role].forEach((player) => {
                let runs = Math.floor(Math.random() * 100);
                let wickets = role === "Bowlers" || role === "AllRounders" ? Math.floor(Math.random() * 5) : 0;

                allPlayers.push({ name: player, role, runs, wickets });

                if (runs > topRunScorer.runs) {
                    topRunScorer = { name: player, runs };
                }

                if (wickets > topWicketTaker.wickets) {
                    topWicketTaker = { name: player, wickets };
                }
            });
        }
    });

    return (
        <div className="scoreboard">
            <div className="scoreboard-topPerformers">
                {allPlayers.length > 0 && <TopPerformers topRunScorer={topRunScorer} topWicketTaker={topWicketTaker} />}
            </div>
            <div className="scoreboard-inline">
                <h2 style={ {textAlign: "center"} }>Match Scoreboard</h2>
                <p><strong>Year:</strong> {year}</p>
                <p><strong>Category:</strong> {category}</p>
                <p><strong>Match:</strong> {match}</p>
                <p><strong>Country:</strong> {country}</p><br />
                

                <PlayerTable allPlayers={allPlayers} country={country} />
            </div>
        </div>
    );
}
