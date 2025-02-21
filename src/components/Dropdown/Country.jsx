function Country({ selectedCountry, setCountry, countries, disabled }) {
    return (
        <div className="box">
            <label>Country</label>
            <select value={selectedCountry} onChange={(e) => setCountry(e.target.value)} disabled={disabled}>
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                    <option key={index} value={country}>
                        {country}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Country;
