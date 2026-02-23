<style>
  body {
    background-color: #2b2b2b; /* A nice mid-dark grey */
    color: #f5f5f5; /* Ensures any loose text stays readable */
  }
  /* Custom CSS for the Hub Dashboard */
  .hub-header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .hub-container {
    display: grid;
    /* Automatically creates columns based on screen size */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .hub-card {
    background: #1e1e1e;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 1.5rem;
    text-decoration: none;
    color: #f5f5f5;
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
  }

  .hub-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.3);
    border-color: #6a5acd; /* A subtle purple highlight */
  }

  .hub-card h3 {
    margin-top: 0;
    color: #a89f91; 
  }

  .hub-card p {
    flex-grow: 1; /* Pushes the 'enter' text to the bottom */
    font-size: 0.9rem;
    color: #cccccc;
  }

  /* Specific Styling for the Active Dashboard Widget */
  .active-widget {
    grid-column: 1 / -1; /* Makes this card span the full width of the grid */
    background: #2a2a2a;
    border-left: 4px solid #6a5acd;
  }
  
  .dashboard-list {
    list-style-type: none;
    padding: 0;
  }
  
  .dashboard-list li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }
</style>

<div class="hub-header">
  <h1>My Personal Hub</h1>
  <p>Projects, gaming, and worldbuilding.</p>
</div>

<div class="hub-container">
  
  <div class="hub-card active-widget">
    <h3>📌 Active Radar & Deadlines</h3>
    <ul class="dashboard-list">
        <li><input type="checkbox"> <strong>Feb 28:</strong> Return mini painting competition models for judging</li>
        <li><input type="checkbox"> <strong>Feb 28:</strong> Organize Sorcery Gothic draft</li>
        <li><input type="checkbox"> <strong>Mar 07:</strong> 40k RTT event</li>
    </ul>
  </div>

  <a href="/miniatures" class="hub-card">
    <h3>🎨 Painting & Minis</h3>
    <p>Gallery of finished units, army progress, and painting recipes.</p>
    <strong>View Gallery &rarr;</strong>
  </a>

  <a href="/ironman" class="hub-card">
    <h3>⚔️ OSRS Iron Man</h3>
    <p>Interactive checklists for early-game goals, questing, and boss drops.</p>
    <strong>View Checklists &rarr;</strong>
  </a>

  <a href="/brainstorm" class="hub-card">
    <h3>💡 Brainstorming</h3>
    <p>A scratchpad for newsletter blurbs, event logistics, and running thoughts.</p>
    <strong>View Notes &rarr;</strong>
  </a>

  <a href="/cyberspell-start" class="hub-card">
    <h3>🌌 Cyber Spell</h3>
    <p>Worldbuilding wiki detailing factions, techno-wizardry, and locations.</p>
    <strong>Enter the Vault &rarr;</strong>
  </a>

</div>