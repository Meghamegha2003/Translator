
# 🌍 React Translator App

A simple web-based translation application built with React that allows users to translate text between multiple languages using the MyMemory Translation API.

The application provides a clean UI where users can enter text, choose source and target languages, and instantly get translations.

---

## 🚀 Features

- 🌐 Translate text between multiple languages
- 🔄 Select source and target languages
- ⚡ Fast translation using external API
- 🧠 Simple and beginner-friendly React structure
- 📱 Responsive UI
- ❌ Error handling for failed API requests

---

## 🛠 Tech Stack

Frontend
- React
- JavaScript
- CSS

API
- MyMemory Translation API

Build Tool
- Vite

---

## 📂 Project Structure

```
src
│
├───application
│   └───controllers
├───assets
├───domine
│   ├───entities
│   └───useCase
├───infrastructure
│   └───api
└───presentation
    ├───component
    │   ├───languageSelect
    │   ├───resultBox
    │   ├───textInput
    │   └───translateBt
    ├───context
    └───pages

```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/translator-app.git
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

The app will run at:

```
http://localhost:5173
```

---

## 🔄 How Translation Works

1. User enters text.
2. User selects source and target languages.
3. The app calls the MyMemory Translation API.
4. API returns translated text.
5. The result is displayed in the output box.

Example API request:

```
https://api.mymemory.translated.net/get?q=Hello&langpair=en|hi
```


## 👩‍💻 Author

Megha Gopalakrishnan


