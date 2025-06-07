# Toast Notification with Slide-In Animation

This project demonstrates a simple toast notification using HTML, CSS, and JavaScript. The toast smoothly slides in from the right using the CSS `translateX` animation.

---

## 🚀 Features

- Slide-in animation from the right
- Customizable message content
- Smooth 0.3s animation
- Stays in position after animation

---

## 🧩 Technologies Used

- HTML
- CSS (with `@keyframes` and `transform`)
- JavaScript (for dynamically adding toast)

---

## 🎨 How It Works

1. **Initial Position:**  
   The toast starts at `transform: translateX(100%)`, meaning it's pushed offscreen to the right.

2. **Animation Trigger:**  
   When shown, the toast uses the `moveleft` animation to slide into view over `0.3s`.

3. **Final Position:**  
   It ends at `transform: translateX(0)` and stays in place thanks to `animation-fill-mode: forwards`.

---

## 📂 File Structure

.
├── index.html
├── style.css
└── script.js

yaml
Copy
Edit

---

## 🔧 Usage

1. Clone or download this repo.
2. Open `index.html` in your browser.
3. Click the button or trigger the toast function to see the slide-in animation.

---
