Tech Specification for IPL Fantasy App with WhatsApp Integration

1. Tech Stack
Frontend: No separate frontend needed for MVP. Interaction via WhatsApp.


Backend:


Node.js with Express for API routing.


Cursor for backend database management.


Database:


MongoDB or PostgreSQL for user and match data storage.


API Integration:


Twilio API for WhatsApp to manage WhatsApp communication.


Sportmonks or Roanuz Cricket API for real-time player stats and scoring.


Hosting:


Heroku, AWS, or DigitalOcean for backend hosting.


Version Control:


GitHub for source code version control.



2. Components & Architecture
Twilio WhatsApp Integration:


Set up Twilio Sandbox for WhatsApp.


Use Twilio Webhooks to process incoming messages and send responses via WhatsApp.


Backend (Node.js + Express):


Handle incoming messages from WhatsApp.


Process player selections, match reminders, and live updates.


Database (Supabase/PostgreSQL):


Store user data, player stats, match information, and fantasy team selections.


Real-Time Stats API:


Fetch player stats from Sportmonks or Roanuz Cricket for live match updates and fantasy points calculation.



3. Data Flow
User Interaction:


User sends a WhatsApp message, selecting players.


Backend processes the selection and stores the data.


Match Updates:


Backend fetches real-time player stats.


Fantasy points are calculated and sent back to WhatsApp.


Leaderboard:


User scores are tracked and displayed in real-time.

