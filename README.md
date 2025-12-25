<div align="center">
🎯 Assessment Score Dashboard
Offline • Lightweight • Fully Customizable

A simple assessment dashboard built with HTML, CSS & JavaScript that runs 100% locally — no setup, no internet, no dependencies.

</div>
🚀 Getting Started (Local Setup)

Run the project in under 30 seconds

📥 Steps

Download the following files:

index.html

styles.css

script.js

Open index.html in any modern browser
✔ Chrome
✔ Edge
✔ Firefox

✅ That’s it! The project runs completely offline.

📊 Score Configuration

All assessment scores are defined in one place for easy editing.

📁 Location: script.js (Top of the file)

const assessmentData = {
    overall: 7.5,
    skills: {
        pronunciation: 7.5,
        fluency: 7.0,
        vocabulary: 8.0,
        grammar: 7.2
    }
};


✨ This single object controls:

Overall score

Skill-wise evaluation

Feedback messages

UI colors & badges

✏️ Updating Scores (Quick Edit)

Modify scores without touching UI or logic

Open script.js

Change values inside assessmentData

Save the file

Refresh the browser

🔄 Updates apply instantly

🧠 Smart Feedback System

The project automatically generates feedback based on score ranges.

📌 Score Mapping
Score Range	Performance Level	Feedback
8.0 – 9.0	🌟 Excellent	Strong Area
7.0 – 7.9	✅ Good	Good Performance
6.0 – 6.9	⚠️ Average	Practice Needed
0.0 – 5.9	❌ Needs Work	Review
