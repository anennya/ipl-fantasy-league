Product Requirements Document (PRD)
Project Name: IPL Fantasy App with WhatsApp Integration
Date: April 2025
Version: 1.1

1. Overview
The IPL Fantasy App will allow users to create fantasy teams by selecting up to 5 players for each match. The app will be integrated with WhatsApp via the Twilio API, allowing users to select players, get match updates, and track their fantasy team’s performance. The backend will be built using Cursor for database management and Node.js for server-side logic. The scoring will be based on real-time player stats, pulled from an external cricket stats API (e.g., Sportmonks, Roanuz).

2. Goals and Objectives
Easy User Interaction: Enable users to make player selections via WhatsApp.

Real-Time Updates: Provide live match updates and track fantasy points based on real-time player performance.

WhatsApp Integration: Use Twilio’s API to handle user interactions, making the experience seamless and interactive within WhatsApp.

Simplicity: Ensure a smooth and intuitive experience for users to manage their fantasy teams without needing to leave WhatsApp.

3. Features
3.1. User Registration and Authentication
Sign-Up/Log-In: Users can register using a basic email or social media (Google/Facebook) login.

User Profile: Basic profile management where users can view their team history and performance.

3.2. WhatsApp Integration for Player Selection
WhatsApp Bot:

Users can interact with a bot via WhatsApp to select their fantasy players for each match.

The bot will confirm selections and track the 5 players selected by each user.

Match Day Selection:

The bot will send a message with available players for a specific match.

Users will respond by sending the names of 5 players they want to select (e.g., “Virat Kohli, Rohit Sharma, Shreyas Iyer, Yuzvendra Chahal, Jofra Archer”).

Confirmation:

After selection, the bot will confirm the players and ask the user to approve their team.

Selection Deadline Reminders:

The bot will send reminders to users before the match starts, ensuring they confirm their selections before the deadline.

3.3. Fantasy Scoring Algorithm
The fantasy points for each user’s team will be calculated based on real-time match performance data. Here’s the scoring breakdown:

Batting Points:

1 point per run scored.

2 points per boundary (4 runs).

3 points per six (6 runs).

10 points for a half-century (50 or more runs).

20 points for a century (100 or more runs).

-5 points for being dismissed for 0 (duck).

Bowling Points:

25 points per wicket taken.

2 points per maiden over bowled.

1 point per dot ball bowled.

10 points for a 5-wicket haul.

-5 points for conceding 30 or more runs in an over.

Fielding Points:

10 points per catch taken.

10 points for a stumping (wicketkeeper).

10 points for a run-out.

5 points for an assist in a run-out.

All-Rounder Points:

If a player contributes both with the bat and ball, both batting and bowling points will be awarded.

Negative Points:

-10 points for a duck.

-5 points for conceding certain amounts of runs or for a dropped catch.

Bonus Points:

Additional points for exceptional performances such as match MVP.

3.4. Stats Source:
Player stats (runs, wickets, boundaries, etc.) will be fetched from real-time data APIs, such as:

Sportmonks API: Provides detailed player stats, including runs, wickets, boundaries, and other key metrics for each match.

Roanuz Cricket API: Offers player data and match stats in real-time.

API Endpoint Example:

/get-match-stats: Fetch live stats for a given match (e.g., player performance, points).

3.5. Backend and Database Management
Database Integration:

Use Cursor to build and manage a database that stores user data, match details, and fantasy team selections.

Team Data Management:

Each user’s fantasy team, their selected players, and real-time stats will be stored in the backend.

3.6. Admin Panel (Optional for MVP)
Match Management: Admins can add/remove matches, update player status, and monitor user engagement.

Analytics Dashboard: View basic statistics like number of active users, player selections, and leaderboard data.

4. User Stories
4.1. User Story 1: Selecting Fantasy Players
As a user, I want to select my 5 fantasy players for each match through WhatsApp, so I don’t have to leave the platform to manage my team.

4.2. User Story 2: Team Confirmation
As a user, I want to confirm my team selections via WhatsApp, so I know my team is properly registered for the upcoming match.

4.3. User Story 3: Live Updates
As a user, I want to receive live updates about my players' performance and fantasy points during the match via WhatsApp, so I can track my team’s progress.

4.4. User Story 4: Leaderboards
As a user, I want to view the real-time leaderboard to compare my fantasy team’s performance with others.

4.5. User Story 5: Match Reminders
As a user, I want to receive reminders about match times and selection deadlines so I don’t miss the opportunity to select players.

5. Technical Requirements
5.1. Twilio WhatsApp Integration
Use Twilio API for WhatsApp to send and receive messages.

Set up an incoming webhook to handle WhatsApp messages and parse player selections.

Use ngrok for local development or deploy to a cloud service for production.

5.2. API Integration
Integrate with a real-time stats API (e.g., Sportmonks or Roanuz Cricket) for player performance data.

Use a reliable backend system (e.g., Cursor) to store user data, match details, and player stats.

5.3. Database
Cursor will be used to create the database schema for user profiles, player selections, and match stats.

Use MongoDB or PostgreSQL to store user details, match information, and player stats.

5.4. Hosting & Deployment
Host the backend on a service like AWS, Heroku, or DigitalOcean.

Use Twilio’s sandbox environment initially for testing and move to production once everything is stable.

6. MVP Roadmap
Phase 1: Initial Setup
Set up Twilio API for WhatsApp: Enable WhatsApp messaging and set up the sandbox environment.

Backend Development: Build out the backend with Cursor and set up the database to store user selections and player stats.

Basic Bot Functionality: Implement the WhatsApp bot for user registration and player selection.

Phase 2: Player Selection & Confirmation
Player Selection Flow: Allow users to select their 5 players via WhatsApp.

Team Confirmation: Confirm the player selection and allow users to approve their team.

Phase 3: Live Stats and Scoring
API Integration: Integrate a real-time stats API to pull player stats and calculate fantasy points.

Live Scoring: Send live updates to users about their team’s performance during matches.

Phase 4: Leaderboards and Notifications
Leaderboard: Implement basic leaderboard functionality to show user rankings.

Match Notifications: Implement notifications to remind users about match start and selection deadlines.

Phase 5: Testing and Launch
User Testing: Test the app with a small group of users to collect feedback and make necessary adjustments.

Launch: Release the MVP for wider use.