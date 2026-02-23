<style>
  /* Styling for the lists and inputs */
  .osrs-container {
    background-color: #1e1e1e;
    padding: 2rem;
    border-radius: 8px;
    color: #f5f5f5;
  }
  
  details {
    background-color: #2a2a2a;
    padding: 10px;
    margin-bottom: 10px;
    border-left: 4px solid #b8860b; /* RuneScape gold color */
    border-radius: 4px;
  }
  
  summary {
    font-weight: bold;
    cursor: pointer;
    font-size: 1.1rem;
    color: #ffd700;
  }
  
  ul.goal-list {
    list-style-type: none;
    padding-left: 10px;
  }
  
  ul.goal-list li {
    margin: 8px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input[type="checkbox"] {
    transform: scale(1.2);
    cursor: pointer;
  }

  /* Styling for the dynamic Add Goal section */
  .add-goal-box {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #444;
  }

  #new-goal-input {
    padding: 8px;
    width: 70%;
    border-radius: 4px;
    border: 1px solid #555;
    background: #333;
    color: white;
  }

  #add-goal-btn {
    padding: 8px 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  #add-goal-btn:hover {
    background-color: #45a049;
  }

  .delete-btn {
    background: none;
    border: none;
    color: #ff4c4c;
    cursor: pointer;
    font-size: 0.9rem;
  }
</style>

<div class="osrs-container">
  <h1>⚔️ Iron Man Progress Tracker</h1>
  <p>Track permanent account milestones and add rolling daily/weekly goals below.</p>

  <details open>
    <summary>Early Game Milestones</summary>
    <ul class="goal-list">
      <li><label><input type="checkbox" class="saveable-check" value="graceful"> Full Graceful Outfit</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="fairy-rings"> Unlock Fairy Rings</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="bone-cbow"> Dorgeshuun Bone Crossbow</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="ardy-cloak-1"> Ardougne Cloak 1</label></li>
    </ul>
  </details>

  <details>
    <summary>Mid Game Unlocks</summary>
    <ul class="goal-list">
      <li><label><input type="checkbox" class="saveable-check" value="barrow-gloves"> Barrows Gloves (Recipe for Disaster)</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="dragon-scim"> Dragon Scimitar (Monkey Madness I)</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="dragon-defender"> Dragon Defender</label></li>
      <li><label><input type="checkbox" class="saveable-check" value="fighter-torso"> Fighter Torso</label></li>
    </ul>
  </details>

  <div class="add-goal-box">
    <h3 style="color: #ffd700; margin-top: 0;">🎯 Custom & Rolling Goals</h3>
    <input type="text" id="new-goal-input" placeholder="E.g., Farm 500 giant seaweed...">
    <button id="add-goal-btn">Add Goal</button>
    
    <ul class="goal-list" id="custom-goals-list">
      </ul>
  </div>

</div>

<script>
document.addEventListener("DOMContentLoaded", () => {
  
  // --- 1. HANDLE STATIC PERMANENT GOALS ---
  const staticChecks = document.querySelectorAll('.saveable-check');
  staticChecks.forEach(box => {
    // Check local storage on load
    const savedState = localStorage.getItem('osrs-static-' + box.value);
    if (savedState === 'true') {
      box.checked = true;
    }
    
    // Save to local storage when clicked
    box.addEventListener('change', (e) => {
      localStorage.setItem('osrs-static-' + e.target.value, e.target.checked);
    });
  });

  // --- 2. HANDLE DYNAMIC CUSTOM GOALS ---
  const customList = document.getElementById('custom-goals-list');
  const addBtn = document.getElementById('add-goal-btn');
  const input = document.getElementById('new-goal-input');

  // Load array of custom goals from storage, or start empty
  let customGoalsArray = JSON.parse(localStorage.getItem('osrs-custom-goals')) || [];
  
  // Function to draw the custom goals on the screen
  function renderCustomGoals() {
    customList.innerHTML = ''; // Clear the list first
    
    customGoalsArray.forEach((goal, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <label>
          <input type="checkbox" class="custom-check" data-index="${index}" ${goal.completed ? 'checked' : ''}> 
          ${goal.text}
        </label>
        <button class="delete-btn" data-index="${index}" title="Remove Goal">❌</button>
      `;
      customList.appendChild(li);
    });

    // Attach save events to the newly drawn checkboxes
    document.querySelectorAll('.custom-check').forEach(box => {
      box.addEventListener('change', (e) => {
        const idx = e.target.getAttribute('data-index');
        customGoalsArray[idx].completed = e.target.checked;
        localStorage.setItem('osrs-custom-goals', JSON.stringify(customGoalsArray));
      });
    });

    // Attach delete events to the red X buttons
    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.target.getAttribute('data-index');
        customGoalsArray.splice(idx, 1); // Remove from array
        localStorage.setItem('osrs-custom-goals', JSON.stringify(customGoalsArray)); // Update storage
        renderCustomGoals(); // Redraw the list
      });
    });
  }

  // Draw goals immediately on page load
  renderCustomGoals();

  // Listen for the "Add Goal" button click
  addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text !== "") {
      customGoalsArray.push({ text: text, completed: false });
      localStorage.setItem('osrs-custom-goals', JSON.stringify(customGoalsArray));
      input.value = ''; // Clear the input box
      renderCustomGoals(); // Redraw the list with the new item
    }
  });

  // Allow pressing "Enter" on the keyboard to add a goal
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addBtn.click();
    }
  });

});
</script>