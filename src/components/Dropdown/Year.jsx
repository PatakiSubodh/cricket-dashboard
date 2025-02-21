function Year({ selectedYear, setYear }) {
    const years = [2022, 2023, 2024];

    return (
        <div className="box">
            <label>Year</label>
            <select value={selectedYear} onChange={(e) => setYear(e.target.value)}>
            <option value="">Select Year</option>
            {years.map((year) => (
                <option key={year} value={year}>
                {year}
                </option>
            ))}
            </select>
        </div>
    );
}

export default Year;