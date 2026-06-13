# 🏠 AR Home Appliance Visualizer

An Augmented Reality web application that allows users to preview home appliances in their real environment before purchasing. Built using AR.js and Three.js with image tracking and real-time 3D rendering — solving the biggest problem in online appliance shopping: "Will this fit in my space?"

![AR](https://img.shields.io/badge/Tech-Augmented%20Reality-purple) ![Three.js](https://img.shields.io/badge/3D-Three.js-blue) ![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow) ![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

---

## 🎯 Problem It Solves

When buying appliances online, customers can't visualize how a product will look or fit in their actual space. This app lets users **point their camera at a room** and instantly see a 3D model of the appliance placed in real scale — before they buy.

---

## 🚀 Features

- 📷 Real-time camera-based AR experience in the browser
- 🖼️ Image tracking to anchor 3D models to physical markers
- 📦 3D model rendering of home appliances (fridge, washing machine, TV)
- 🔄 Real-time object placement, scaling, and rotation
- 🌐 No app install required — runs directly in browser
- 📱 Mobile-friendly (works on Android & iOS browsers)
- ⚡ Fast rendering with optimized 3D assets

---

## 🧰 Tech Stack

| Layer         | Technology                          |
|---------------|-------------------------------------|
| AR Framework  | AR.js (Augmented Reality for Web)   |
| 3D Rendering  | Three.js                            |
| 3D Models     | GLTF / OBJ format models            |
| Frontend      | HTML5, CSS3, JavaScript (ES6+)      |
| Image Track   | AR.js Image Tracking                |
| Deployment    | GitHub Pages                        |

---

## 📁 Project Structure

```
ar-appliance-visualizer/
│
├── assets/
│   ├── models/              # 3D appliance models (.gltf/.obj)
│   │   ├── refrigerator.gltf
│   │   ├── washing-machine.gltf
│   │   └── television.gltf
│   ├── markers/             # Image tracking markers
│   └── textures/            # Model textures
│
├── js/
│   ├── ar-scene.js          # AR scene setup
│   ├── model-loader.js      # 3D model loader
│   └── controls.js          # Scale & rotation controls
│
├── css/
│   └── style.css
│
├── index.html               # Main entry point
└── README.md
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/pradeepFD/ar-appliance-visualizer.git

# Navigate to project
cd ar-appliance-visualizer

# Option 1: Open directly in browser
open index.html

# Option 2: Serve with live server (recommended for camera access)
npx live-server
```

> ⚠️ Camera access requires HTTPS or localhost. Use live-server for local development.

---

## 📱 How to Use

1. Open the app on your mobile browser
2. Allow camera access when prompted
3. Point camera at the **tracking marker** (print or display on screen)
4. Select an appliance from the menu
5. See the 3D model appear in your room in real scale
6. Pinch to scale / drag to rotate the model

---

## 🖼️ Screenshots

> *(Add screenshots of the AR experience here)*

---

## 🌟 What Makes It Unique

- **No app download** — fully browser-based AR
- **Real scale rendering** — models appear in actual size
- **Multi-appliance support** — switch between products instantly
- Built entirely as a **solo project** from concept to deployment
- Demonstrates advanced **frontend rendering** beyond typical web dev

---

## 👨‍💻 Author

**Pradeep Kumar S**
- GitHub: (github.com/pradeepkumar-webdevelope)
- LinkedIn: [linkedin.com/in/pradeepkumars](https://linkedin.com/in/pradeepkumars)
- Email: pradeep8754491662@gmail.com

---

## 📄 License

This project is licensed under the MIT License.

