# 🍽️ FlavorRoute – Dynamic Dining Workspace

### 🌍 Live Demo
**[👉 Experience FlavorRoute Live](https://flavorroute.vercel.app)**

---

## 📖 Why FlavorRoute?

As a **B.Tech CSE student at VIT Vellore**, I wanted to build a modern, interactive user interface that applies fundamental web architecture concepts to a real-world scenario. FlavorRoute is designed as a seamless, distraction-free SPA (Single Page Application) to help users explore restaurants, apply smart filters, and utilize dining-related utility tools all in one place.

This project was developed for the **Web Programming** coursework to synthesize modern frontend concepts. It relies entirely on native JavaScript algorithms, iterative loops, and the core React Dataflow (State and Props) to deliver a highly responsive experience without the need for external state management libraries or backend databases.

---

## 🚀 Key Features

* 🔍 **Restaurant Exploration** – Browse curated restaurant listings with key details such as cuisine type, pricing, and ratings.
* 🎯 **Advanced Filtering System** – Refine results instantly by dietary preference (Veg/Non-Veg), cuisine category, and price/rating sorts.
* 🧮 **Smart Bill Calculator** – Calculate per-person costs by entering the total bill and number of people, utilizing local mathematical logic.
* ✍️ **Digital Signature Pad** – Create and draw signatures smoothly using the HTML5 Canvas API and real-time mouse event tracking.
* 🧭 **Multi-Page Navigation** – Enjoy seamless, zero-reload navigation across Home, Explore, Favorites, and Contact pages via React Router.
* ⭐ **Favorites System** – Save and manage preferred restaurants dynamically within the application's state.
* 🎨 **Responsive UI Design** – A clean, adaptive layout built from the ground up with modern CSS techniques like Flexbox and Grid.

---

## ⚙️ Application Interaction

| Feature | Action | Engineering Experience |
| :--- | :--- | :--- |
| **Smart Filtering** | Apply multiple sorting parameters at once | Triggers JavaScript array methods (`.filter`, `.sort`) to instantly update React State and redraw the DOM without page reloads. |
| **Bill Calculator** | Input dining costs to split the check | Executes local iterative algorithms to process form control values securely on the client side. |
| **Signature Pad** | Draw directly onto the workspace | Bypasses the Virtual DOM using `useRef` to capture continuous `e.nativeEvent` coordinates on the HTML5 Canvas. |
| **Favorites Hub** | Save restaurants for later | Utilizes the ES6 Spread Operator (`...`) to ensure strict state immutability when modifying the saved items array. |

---

## 🏗️ Engineering Highlights

* **Frontend Architecture:** Runs entirely on the client side using the React Component API and React Router for a true SPA experience.
* **State Management:** Completely relies on Unidirectional React Dataflow (Lifting State Up) and React Hooks (`useState`, `useEffect`) rather than heavy external libraries.
* **Data Handling:** Dynamically parses and renders structured data from a local JSON file to simulate database querying and component mapping.
* **Advanced Rendering:** Implements complex DOM manipulation by tracking synthetic mouse events for real-time sketching capabilities.

---

## 📂 Project Structure & Installation

```text
flavorroute/
│
├── public/
│   └── index.html
├── src/
│   ├── components/      # Reusable UI components (Navbar, Sidebar, Cards)
│   ├── pages/           # Routed views (Home, Explore, Favorites, Contact)
│   ├── data/            # Local JSON database simulation
│   ├── App.js           # Core layout and Routing logic
│   ├── App.css          # Global styles, Grid layouts, and Themes
│   └── index.js         # React DOM entry point
└── package.json
```
## Clone the repository
```
git clone [https://github.com/abhijaymishra07/flavor-route.git](https://github.com/abhijaymishra07/flavor-route.git)
```

## Navigate into the project folder
```
cd flavorroute
```

## Install dependencies
```
npm install
```
## Start the development server
```
npm start
```


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


## 🔮 Future Enhancements

Ideas for the next iteration of FlavorRoute:

* **Backend Integration:** Connect to Firebase or Supabase to persist user favorites and signature data across sessions.
* **Geolocation API:** Integrate browser location services to automatically sort restaurants by physical proximity.
* **Review System:** Allow users to submit and display dynamic ratings utilizing local storage or a connected database.

---

## 🙌 Acknowledgments
VIT Vellore Faculty for the comprehensive Web Programming curriculum that made this project possible.

The React Community for providing the incredible ecosystem and documentation surrounding component-based design patterns.

---

## 🧑‍💻 Author

**Abhijay Mishra**  
BTech CSE Core – VIT Vellore  

---

## 📌 Note

This project was developed for academic purposes and demonstrates practical frontend development skills using modern web technologies.
