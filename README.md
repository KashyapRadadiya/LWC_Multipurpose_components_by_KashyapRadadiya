# 🚀 LWC_Multipurpose_Components_by_KashyapRadadiya

A collection of reusable and interactive **Lightning Web Components (LWC)** built using Salesforce best practices.

This repository contains practical UI components that demonstrate real-world logic implementation, state management, and clean LWC architecture.

---

## 📌 Components Included

### 1️⃣ QuizApp Component

An interactive quiz application built using LWC.

#### ✨ Features
- Dynamic question rendering
- Radio button answer selection
- Stores selected answers per question
- Previous / Next navigation
- Score calculation
- Result display at completion
- Clean SLDS-based UI

#### 🧠 Concepts Used
- Reactive properties
- Object-based state management
- Event handling
- Conditional rendering
- Template iteration (`for:each`)
- Controlled navigation logic

---

### 2️⃣ MemoryGame Component

A fully functional 4x4 memory card matching game.

#### ✨ Features
- 16 cards (8 matching pairs)
- Random shuffle on load/reset
- Flip-to-reveal logic
- Only 2 cards visible at a time
- Automatic hide on mismatch
- Matched cards stay visible
- Score tracking
- Live timer
- Win detection
- Reset functionality
- Stable grid layout using CSS visibility

#### 🧠 Concepts Used
- Array manipulation
- Object state tracking
- Controlled user interaction
- Game state management
- DOM reactivity handling in LWC
- Timer using `setInterval`
- Conditional UI rendering
- CSS visibility control for layout stability

---

### 3️⃣ BookStore Component  

A dynamic book search application built using LWC that fetches real-time search data from the Google Books API.

#### ✨ Features  
- Live search while typing (dynamic search)  
- Debounced API calls (optimized performance)  
- Fetches real-time book data from external API  
- Displays book thumbnail, title, Rating, publish date  
- Handles empty search safely  
- Error handling for failed API responses  
- Reactive UI updates without page refresh  

#### 🧠 Concepts Used  
- Async/Await for API handling  
- Fetch API integration in LWC  
- Debounce technique using setTimeout  
- Dynamic URL parameter handling  
- encodeURIComponent for safe query building  
- Conditional rendering (if:true)  
- Template iteration (for:each)  
- Reactive state management  

---

## 🛠️ Tech Stack

- Salesforce Lightning Web Components (LWC)
- SLDS (Salesforce Lightning Design System)
- JavaScript (ES6)
- HTML Templates
- CSS (Scoped to component)

---

## 📂 Project Structure
- force-app/
  - └── main/
    - └── default/
      - └── lwc/
        - ├── quiz App/
        - ├── memory Game/
        - └── bookStore App/

---

## 🎯 Purpose of This Repository

This repository is built to:

- Practice advanced LWC logic implementation
- Create reusable UI components
- Demonstrate real-world frontend problem solving in Salesforce
- Maintain clean and scalable component architecture
- Serve as a reference for future projects

---

## 👨‍💻 Author

**Kashyap Radadiya**  
Salesforce Developer | LWC Enthusiast  

Repository:  
`LWC_Multipurpose_Components_by_KashyapRadadiya`

---

## ⭐ Feedback

This repository is built for learning and showcasing LWC development skills.  
Suggestions and feedback are always welcome.