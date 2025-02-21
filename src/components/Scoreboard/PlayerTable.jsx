// PlayerTable.js
import React from "react";

export default function PlayerTable({ allPlayers }) {
    return (
        <div className="players-table">
            {allPlayers.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Player</th>
                            {/* <th>Role</th> */}
                            <th>Runs</th>
                            <th>Wickets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPlayers.map((player, index) => (
                            <tr key={index}>
                                <td>{player.name}</td>
                                {/* <td>{player.role}</td> */}
                                <td>{player.runs}</td>
                                <td>{player.wickets || "-"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p style={{ color: "red", fontWeight: "bold" }}>
                    ⚠ No players available for this match.
                </p>
            )}
        </div>
    );
}