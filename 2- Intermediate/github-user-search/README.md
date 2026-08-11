# 🐙 GitHub User Search Directory

A modern, responsive React web application that allows users to search for GitHub profiles and view public user details using the **GitHub REST API**. Built using **Redux Toolkit (RTK Query)** for efficient state management and caching, and styled with **Tailwind CSS**.

---

## 🚀 Features

- **On-Demand User Search:** Search for any GitHub username instantly.
- **Detailed Profile View:** Displays user avatar, full name, handle, bio, public repository counts, followers, following, location, company, and website links.
- **Graceful Error Handling:** Provides clear user feedback for 404s (User Not Found), API rate limit issues (403), and network failures.
- **Loading & Empty States:** Clean visual indicators for loading, initial prompt, and missing data.
- **Unauthenticated & Authenticated Support:** Works out-of-the-box without API keys, with support for Personal Access Tokens (PAT) to unlock higher rate limits.
- **Fully Responsive:** Adapts seamlessly across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack & Tools

| Technology | Role / Purpose |
| :--- | :--- |
| **[React](https://react.dev/)** | Frontend UI Library |
| **[Redux Toolkit (RTK Query)](https://redux-toolkit.js.org/rtk-query/overview)** | Data fetching, API state management, and caching |
| **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS framework for responsive styling |
| **[GitHub REST API](https://docs.github.com/en/rest)** | Third-party data provider |
| **[Vite](https://vitejs.dev/)** | Fast build tool and development server |

---

## 💡 Architectural Concepts Applied

### 1. Smart vs. Dumb (Container vs. Presentational) Pattern
- **Presentational Components (`Button`, `SearchForm`, `UserCard`):** Purely visual, stateless UI components that accept props and callbacks. They have no direct knowledge of Redux or API logic, making them highly reusable.
- **Container Components (`UserDirectory`):** Smart components connected to Redux Toolkit that manage data fetching, pass down props, and handle business logic.

### 2. RTK Query Data Fetching & Caching
- **Lazy Queries (`useLazyQuery`):** Triggered on-demand when the user submits a search form, rather than automatically on component mount.
- **Automatic Caching:** Prevents duplicate network requests when searching for previously queried users.
- **Encapsulated API State:** Simplifies management of `isLoading`, `isError`, and `data` without manual `useEffect` or standard `reducer` boilerplate.

### 3. API Rate Limiting Awareness
- **Unauthenticated Limits:** Standard requests are subject to GitHub's **60 requests per hour** limit per IP address.
- **Bearer Token Headers:** Configured via RTK Query’s `prepareHeaders` to attach GitHub Personal Access Tokens (PAT) for higher limits (**5,000 requests/hour**).

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx          # Reusable generic button with loading spinner
│   │   └── SearchForm.jsx      # Presentational search bar input
│   └── domain/
│       └── UserCard.jsx        # Presentational user profile card
├── redux/
│   ├── store.js                # Global Redux store configuration
│   └── githubApi.js            # RTK Query API slice definition
├── pages/
│   └── UserDirectory.jsx       # Smart page container connecting Redux to UI
├── App.jsx                     # Main application layout
└── main.jsx                    # Root render with Redux Provider wrapper

Installation
Clone the repository:

Bash
git clone [https://github.com/your-username/github-user-search.git](https://github.com/your-username/github-user-search.git)
cd github-user-search
Install dependencies:

Bash
npm install
Install Redux Toolkit & React Redux (if setting up manually):

Bash
npm install @reduxjs/toolkit react-redux
Start the development server:

Bash
npm run dev