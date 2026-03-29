# 🍽️ FlavorRoute

FlavorRoute is a modern web application built using React that helps users explore restaurants, apply filters, and perform utility tasks like bill calculation and digital signature. 

This project was developed as part of a Web Programming coursework to demonstrate practical implementation of frontend technologies and interactive UI design.

---

## 🌍 Live Demo

**[👉 Click here to view FlavorRoute live!](https://flavorroute.vercel.app)**

---

## 🚀 Features

* 🔍 **Restaurant Exploration:** Browse a list of restaurants with details like cuisine, price, and ratings.
* 🎯 **Filtering System:** Filter restaurants based on:
  * Type (Veg / Non-Veg)
  * Cuisine
  * Sorting (Price / Rating)
* 🧮 **Group Bill Calculator:** Calculate total bill based on number of people and cost per person using JavaScript logic.
* ✍️ **Digital Signature Pad:** Draw signatures using HTML5 Canvas and mouse events.
* 🧭 **Multi-Page Navigation:** Includes Home, Explore, and Contact pages using React Router.
* 🎨 **Responsive UI:** Clean and modern interface using CSS Grid and Flexbox.

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and layout
* **JavaScript (ES6)** – Logic and interactivity
* **ReactJS** – Component-based architecture
* **React Router** – Page navigation
* **JSON** – Data handling
* **Vercel** – Deployment

---

## 📂 Project Structure

```text
flavorroute/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Sidebar.js
│   │   ├── RestaurantCard.js
│   │   ├── BillCalculator.js
│   │   ├── SignaturePad.js
│   │   └── Footer.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Explore.js
│   │   └── Contact.js
│   │
│   ├── data/
│   │   └── restaurants.json
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
└── package.json
