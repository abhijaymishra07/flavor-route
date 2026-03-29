# 🍽️ FlavorRoute

FlavorRoute is a modern, interactive web application built using React that enables users to explore restaurants, apply smart filters, and use utility tools such as a bill calculator and digital signature pad.

This project was developed as part of a Web Programming coursework to demonstrate practical implementation of frontend development concepts, component-based architecture, and dynamic user interaction.

---

## 🌍 Live Demo

**[👉 Click here to view FlavorRoute live!](https://flavorroute.vercel.app)**

---

## 🚀 Features

* 🔍 **Restaurant Exploration:** Browse curated restaurant listings with key details such as cuisine type, pricing, and ratings.  
* 🎯 **Advanced Filtering System:** Easily refine results using:  
  * Type (Veg / Non-Veg)  
  * Cuisine category  
  * Sorting options (Price / Rating)  
* 🧮 **Bill Calculator:** Calculate per-person cost by entering total bill and number of people.  
* ✍️ **Digital Signature Pad:** Create and draw signatures using HTML5 Canvas with smooth mouse interactions.  
* 🧭 **Multi-Page Navigation:** Seamless navigation across Home, Explore, Favorites, and Contact pages using React Router.  
* ⭐ **Favorites System:** Save and manage preferred restaurants dynamically.  
* 🎨 **Responsive UI Design:** Clean and adaptive layout built with modern CSS techniques like Flexbox and Grid.  

---

## 🛠️ Technologies Used

* **HTML5** – Application structure  
* **CSS3** – Styling and responsiveness  
* **JavaScript (ES6)** – Core logic and interactivity  
* **ReactJS** – Component-based frontend framework  
* **React Router** – Client-side navigation  
* **JSON** – Data handling  
* **Vercel** – Deployment platform  

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
│   │   ├── Favorites.js
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
```
# Clone the repository
git clone https://github.com/your-username/flavorroute.git

# Navigate into the project folder
cd flavorroute

# Install dependencies
npm install

# Start the development server
npm start

## 💡 How It Works

FlavorRoute is built using a component-based architecture in React, where each part of the UI is divided into reusable components such as Navbar, Sidebar, and Restaurant Cards.

The application manages dynamic behavior using React Hooks:

- **useState** is used to manage user inputs like search queries, filters, and favorites.  
- **useEffect** is used to update the displayed restaurant list whenever filters or search values change.  

Restaurant data is stored in a local JSON file and rendered dynamically. Based on user interaction:

- Filters refine the restaurant list  
- Sorting organizes results based on price or rating  
- Search allows quick lookup of restaurants by name  

Navigation between pages is handled using React Router, enabling a smooth single-page application experience without full page reloads.

Additional features like the Bill Calculator and Signature Pad are implemented using JavaScript logic and HTML5 Canvas to enhance interactivity.

---

## 🎯 Learning Outcomes

Through this project, the following concepts were implemented and strengthened:

- Understanding of component-based architecture in React  
- State management using React Hooks (`useState`, `useEffect`)  
- Client-side routing using React Router  
- Dynamic rendering of data from JSON  
- Building responsive layouts using CSS (Flexbox & Grid)  
- Implementing interactive features using JavaScript  

---

## 🧑‍💻 Author

**Abhijay Mishra**  
BTech CSE Core – VIT Vellore  

---

## 📌 Note

This project was developed for academic purposes and demonstrates practical frontend development skills using modern web technologies.
