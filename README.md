# 🎨 PrimeReact Artworks Table

A responsive React + TypeScript application built using **PrimeReact** DataTable component. This project demonstrates server-side pagination, row selection persistence, and a custom overlay-based selection panel.

> ✅ Built with Vite + React + TypeScript  
> ✅ Uses PrimeReact UI library  
> ✅ Fully responsive and clean UI  
> ✅ API: [Art Institute of Chicago](https://api.artic.edu/api/v1/artworks)

---

## 🚀 Features

- **Server-side Pagination**  
  Loads data page-by-page directly from the API.

- **Row Selection with Checkbox**  
  Select individual rows or use a custom selector for bulk selection.

- **Persistent Selection Across Pages**  
  Keeps track of selected items even when navigating across pages.

- **Custom Overlay Panel for Selection**  
  Select N artworks quickly using a lightweight overlay with input.

- **Responsive & Styled**  
  Uses TailwindCSS and custom styles for smooth responsiveness.

---

## 📸 UI Preview

> Add a screenshot here if you want (optional)

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript (via Vite)
- **UI Components**: PrimeReact
- **Styling**: TailwindCSS + Custom CSS
- **API Source**: [https://api.artic.edu/api/v1/artworks](https://api.artic.edu/api/v1/artworks)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Tanu-panwar/Prime-React-Artworks-Table.git
cd Prime-React-Artworks-Table

# Install dependencies
npm install

# Run development server
npm run dev

#Build for Production
npm run build
```

📁 Folder Structure

📦 src/
 ┣ 📂components/
 ┃ ┣ 📄 TableView.tsx
 ┃ ┗ 📄 TitleHeader.tsx
 ┣ 📄 App.tsx
 ┣ 📄 index.css
 ┣ 📄 main.tsx
 ┣ 📄 useArtworkData.ts
 ┣ 📄 types.ts
