# 💧 Olho D'água - Frontend

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

## 🤝 Contributing

1.  Create a feature branch (`git checkout -b feat/amazing-feature`).
2.  Commit your changes (`git commit -m 'Add some amazing feature'`).
3.  Push to the branch (`git push origin feat/amazing-feature`).
4.  Open a Pull Request.
