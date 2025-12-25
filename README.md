# 🎯 Assessment Score Dashboard

A lightweight, fully offline assessment dashboard built using **HTML, CSS, and JavaScript**.  
Designed for easy customization, real-time feedback, and clean UI presentation.

---

## 🚀 Getting Started (Local Setup)

Follow these steps to run the project locally:

1. Download all project files:
   - `index.html`
   - `styles.css`
   - `script.js`

2. Open `index.html` in any modern browser:
   - Google Chrome
   - Microsoft Edge
   - Mozilla Firefox

✅ No installation or setup required.  
✅ Works completely offline.

---

## 📊 Score Configuration

All assessment scores are stored at the top of the `script.js` file.

```javascript
// Line 1–30 in script.js
const assessmentData = {
    overall: 7.5,
    skills: {
        pronunciation: 7.5,
        fluency: 7.0,
        vocabulary: 8.0,
        grammar: 7.2
    }
};
