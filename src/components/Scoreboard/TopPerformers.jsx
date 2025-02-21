export default function TopPerformers({ topRunScorer, topWicketTaker }) {
    return (
        <div className="top-performers">
            <h4>🏆 Top Performers</h4>
            <p><strong>Top Run Scorer:</strong> {topRunScorer.name} ({topRunScorer.runs} runs)</p>
            <p><strong>Top Wicket Taker:</strong> {topWicketTaker.name} ({topWicketTaker.wickets} wickets)</p>
        </div>
    );
}
