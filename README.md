# YouPick 🎬
### Serverless Movie Discovery & Review Platform

A serverless full-stack application built on AWS. Search for movies, discover titles by genre, and — with an account — save favourites, build curated lists, and leave reviews. All reviews are public, so you can see what other users think too.

---

## Tech Stack

**Frontend**
- React Router, TypeScript, Tailwind Components, HyperUI Components, and Flowbite Components

**External API**
- [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)

**Cloud Infrastructure (AWS)**
- Lambda · API Gateway · Amazon RDS (PostgreSQL) · CloudFront · S3

---

## Features

### 👤 Guest Access
- Search for movies
- View movie details
- Read community reviews

### 🔐 Logged-In Users
Everything guests can do, plus:
- Heart / save movies
- Create and manage movie lists
- Write reviews

> **Coming Soon:** Browse and filter movies by genre

---

## How It Was Built

1. Defined the core use cases and user flows for the platform
2. Designed the relational data model — mapping out tables for users, movies, reviews, and lists before writing any code
3. Studied the TMDB API documentation to understand available endpoints and response structure
4. Provisioned an Amazon RDS instance, created the PostgreSQL tables, then built Lambda functions and wired them up through API Gateway

---

## What I Learned

This was my first serverless project, and it was a genuinely fun challenge. Working with AWS pushed me to think about development from a new perspective — not just *how* to build something, but *what service* makes sense for it: what's cost-efficient, what scales well, and how serverless architecture changes the way you think about backend logic and infrastructure. As well as how to debug on AWS, for this project I used CloudWatch a lot, I could see what the exact error was on my Lambda functions 

---

## Future Improvements

- Integrate **AWS DynamoDB** to track historical user behaviour (most hearted movies, most-searched titles) and use that data to power smarter, personalised recommendations

---

## Running the Project

> ⚠️ The project is still in development and not yet deployed. The Amazon RDS instance has been temporarily removed to avoid ongoing costs.

```bash
# Navigate to the frontend directory
cd movie-rec-frontend

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Demo
https://github.com/user-attachments/assets/0c8572e1-9ea0-4cf8-8295-034c222d2cda
