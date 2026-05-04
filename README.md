# 🚗 Drowsiness Detection Frontend System

## 📌 Project Overview

The **Drowsiness Detection Frontend System** is a React-based web application designed to monitor and display the driver's alertness level in real-time. It provides visual feedback, alerts, and post-driving analytics to enhance road safety and reduce accidents caused by driver fatigue.

This frontend works alongside a backend (eye detection / ML model) to present meaningful insights such as drowsiness score, alerts, and trip history.

---

## 🎯 Key Features

### 🔹 Real-Time Dashboard

* Displays **live drowsiness score**
* Visual indicators:

  * 🟢 Green → Alert
  * 🟡 Yellow → Warning
  * 🔴 Red → Critical
* Supports tier-based alert system:

  * Tier 1 → Soft alert
  * Tier 2 → Warning alert
  * Tier 3 → Critical alert (sound + visual)

---

### 🔹 Multi-Modal Alert System

* Audio alerts using `beep.mp3`
* Visual warning messages
* Dynamic UI updates based on fatigue level

---

### 🔹 Analytics Page

* Shows historical alert data
* Helps understand driver fatigue patterns
* Can be extended with charts and graphs

---

### 🔹 About Section

* Describes project idea, objectives, and impact
* Useful for presentations (SIH / academic submission)

---

## 🗂️ Folder Structure

```
drowsiness-frontend/
│
├── node_modules/           # Project dependencies
│
├── public/                # Static files
│   ├── index.html
│   ├── beep.mp3
│   └── Safe pilots.jpeg
│
├── src/                   # Main source code
│   │
│   ├── pages/             # All page components
│   │   ├── About.js
│   │   ├── Analytics.js
│   │   ├── Home.js
│   │   └── LiveDashboard.js
│   │
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
│
├── .eslintrc.json         # ESLint configuration
├── package.json           # Project metadata & dependencies
├── package-lock.json      # Dependency lock file
├── README.md              # Project documentation
```

---

## ⚙️ Installation & Setup

### Step 1: Clone or Download Project

```bash
git clone <your-repo-link>
cd drowsiness-frontend
```

---

### Step 2: Install Dependencies

```bash
npm install
```

---

### Step 3: Run the Application

```bash
npm start
```

---

### Step 4: Open in Browser

```
http://localhost:3000
```

---

## 🧠 How It Works

1. The system receives input (simulated or from backend).
2. Calculates a **drowsiness score (0–100)**.
3. Based on the score:

   * Generates alerts
   * Updates UI dynamically
4. Stores or displays analytics for later review.

---

## 🚧 Future Enhancements

* Integration with real-time **OpenCV / ML backend**
* Face & eye detection using camera
* Improved graphs using chart libraries
* Mobile responsiveness
* Cloud-based data storage

---

## ⚠️ Challenges

* Real-time processing latency
* Handling low-light conditions
* Avoiding false alerts
* Ensuring user privacy

---

## 🎓 Use Case

* Smart vehicles
* Driver safety systems
* Fleet monitoring
* SIH (Smart India Hackathon) projects

---

## 👨‍💻 Tech Stack

* React.js
* JavaScript
* HTML & CSS
* Tailwind CSS (optional)
* Recharts (for analytics)

---

## 📢 Conclusion

This project demonstrates how **real-time monitoring + intelligent alerts** can significantly improve road safety. With further backend integration, it can be deployed in real-world driving environments.

---

## 🙌 Author

Riya Jain
B.Tech (ECE) Student

---

## 🎥 Project Demo Video

You can watch the working demo of the Drowsiness Detection System here:

🔗 **Demo Video Link:**
[Click here to watch the demo]Link-
https://docs.google.com/videos/d/12vD5FtztKh1FUNaFhf9SNfSqbqGJb6F0Ssq2iaggK3k/edit?usp=sharing

> Replace the above link with your Google Drive / YouTube video link.

---

## 📸 Screenshots

### 🏠 Home Page

![Home Page](./screenshots/home.png)
<img width="1919" height="1018" alt="1" src="https://github.com/user-attachments/assets/0f0706f2-0bd9-4c59-981a-b18cfb9b1d5a" />
<img width="1919" height="1024" alt="2" src="https://github.com/user-attachments/assets/2893420c-34bb-4a03-936c-80643e1fca5a" />

---

### 📊 Live Dashboard (Real-Time Monitoring)
<img width="1661" height="999" alt="3" src="https://github.com/user-attachments/assets/1a6f9b02-9a91-4535-a929-041f43ed40f8" />

![Live Dashboard](./screenshots/dashboard.png)

---

### ⚠️ Alert System (Warning Stage)

![Alert Warning](./screenshots/alert.png)
<img width="1920" height="1080" alt="4" src="https://github.com/user-attachments/assets/bb1368f3-7a33-431b-bb12-01b61fa749fe" />

---

### 📈 Analytics Page

![Analytics](./screenshots/analytics.png)
<img width="1917" height="971" alt="5" src="https://github.com/user-attachments/assets/58c11097-e84e-4d87-ae51-95233bd2dab4" />
<img width="1920" height="1080" alt="6" src="https://github.com/user-attachments/assets/fec62422-4ae2-4d3e-84dd-26258648f4b4" />

---

## 📁 Screenshots Folder Structure

Make sure you create a folder like this inside your project:

```
drowsiness-frontend/
│
├── screenshots/
│   ├── home.png
│   ├── dashboard.png
│   ├── alert.png
│   └── analytics.png
```

---

## 💡 Tips for Screenshots

* Take screenshots using:

  * `Win + Shift + S` (Windows Snipping Tool)
* Capture:

  * Dashboard with score changing
  * Alert (red warning screen)
  * Analytics graph


---

## 🎬 How to Record Demo Video

You can record using:

* OBS Studio (best)
* Windows Screen Recorder (`Win + Alt + R`)

### Include in Video:

1. Open app
2. Show dashboard changing
3. Trigger alert (Tier 3)
4. Show analytics page
5. Explain briefly (optional voice)

---

