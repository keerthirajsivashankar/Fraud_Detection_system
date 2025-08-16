import "./dashboard.css";

const Dashboard = () => {
  return (
    <section id="dashboard" className="dashboard-container">
      <h3 className="dashboard-title">📊 Fraud Detection Dashboard</h3>
      <p className="dashboard-subtitle">
        Quick insights into transactions and fraud detection performance.
      </p>

      <div className="dashboard-cards">
        <div className="card">
          <h3>💳 Total Transactions</h3>
          <p>12,450</p>
        </div>
        <div className="card">
          <h3>⚠️ Fraud Detected</h3>
          <p>320</p>
        </div>
        <div className="card">
          <h3>✅ Accuracy</h3>
          <p>94%</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
