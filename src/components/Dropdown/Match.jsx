function Match({ selectedMatch, setMatch, matches, disabled }) {
    return (
        <div className="box">
            <label>Match</label>
            <select value={selectedMatch} onChange={(e) => setMatch(e.target.value)} disabled={disabled}>
                <option value="">Select Match</option>
                {matches.map((match, index) => (
                    <option key={index} value={match}>
                        {match}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Match;
