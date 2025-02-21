function Category({ selectedCategory, setCategory }) {
    const categories = ["ODI", "T20"];

    return (
        <div className="box">
            <label>Category</label>
            <select value={selectedCategory} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                {category}
                </option>
            ))}
            </select>
        </div>
    );
}

export default Category;
