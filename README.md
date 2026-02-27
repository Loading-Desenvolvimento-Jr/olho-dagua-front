<div align="center">
  <img src="./olho-dagua-front/public/assets/Wallpaper.png" alt="Profile Header" width="full">
</div>


# Olho D'água - Frontend

**Olho D'água** is a mobile-first web application designed to monitor the water quality and temperature of drinking fountains at the Federal University of Ceará (UFC). 

This project aims to provide transparency and ensure the well-being of the academic community by displaying real-time data collected from IoT sensors.

## 🚀 Tech Stack

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Language:** TypeScript
* **Icons:** [Lucide React](https://lucide.dev/)
* **Fonts:** Google Fonts (Londrina Solid & Livvic)

## 🛠️ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Loading-Desenvolvimento-Jr/olho-dagua-front.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📂 Project Structure

* `src/app`: Application routes (Pages).
* `src/components`: Reusable UI elements and layout structures.
* `src/hooks`: Custom React hooks for data fetching and state logic.
* `src/lib`: Utility functions and business logic helpers.
* `src/types`: TypeScript definitions matching the database schema.

## 🎨 Design System

We use a custom "Neo-Brutalism" inspired design system with specific tokens configured in `globals.css`.

* **Fonts:**
    * Titles: `Londrina Solid` (var: `--font-londrina`)
    * Body: `Livvic` (var: `--font-livvic`)
* **Key Colors:**
    * `bg-blue-light` / `bg-blue-dark` (Water status)
    * `bg-green-light` / `bg-green-dark` (Good quality)
    * `bg-yellow-light` / `bg-yellow-dark` (Warning)

## 🤝 Dev Team

<table align="center">
  <tr >
    <td align="center"><a href="https://github.com/Miguel-Edson"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/124218124?v=4" width="100px;" alt=""/><br /><sub><b>Miguel Edson</b></sub></a><br />🖱
    <td align="center"><a href="https://github.com/pab-h"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/74771892?v=4" width="100px;" alt=""/><br /><sub><b>Pablo HUgo</b></sub></a><br />🖱
  </tr>
</table>
