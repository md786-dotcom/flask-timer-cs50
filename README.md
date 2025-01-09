A simple timer built with the use of python,flask,html,css and javascript. Includes resume/reset, pause and +30seconds buttons, with validation of user not entering less than 1 minute as input.

Video Demo:- https://youtu.be/wraUlGQvjiA

Description:

1. app.py: Contains the main flask functions as per the flask conventions, defines the default route ("/") for the webpage/program.

2. templates/index.html - Contains the main html code for the timer. Links the .js and .css files together, has code for different buttons of the program. Also uses some bootstrap elements, and has the code for the chime (or sound) whenever timer ends. Uses jinja syntax too as per lecture 9 to simplify things.

3. static/css/styles.css - A simple CSS file for index.html. I have used class selectors(.) as per lecture 8.

4. static/js/timer.js - contains the backend for the program and main functionality of the timer pertaining to the working of the different buttons - +30s, Pause, Start, Reset/Resume. Uses for loops and functions to provide the backend and for showing the completition message after the completition of the timer. Also, has server side validation for the user inputs to not be less than 1 minute.

I decided to structure my project directory in this way to follow the convention with flask web programmes as outlined in Lecture 9. Further, I followed the naming convention too due to the same reason.

## Installation and Setup

1. Clone the Repo - git clone https://github.com/md786-dotcom/flask-timer-cs50.git
2. Create virtual enviorment: a) python -m venv venv b) source venv/bin/activate # On Windows: venv\Scripts\activate
3. Install dependencies - pip install -r requirements.txt
4. Run - python app.py
5. Open http://localhost:5000 in your browser

# Features
- **Customizable Timer Setting**: Users can input any duration in minutes other than 1 minute
- **Real-time Counter Display**: Shows remaining time in MM:SS format
- **Interactive Controls**:
  - Start/Reset button
  - Pause/Resume functionality
  - Quick add 30 seconds option
- **Visual Feedback**: Clear display of timer status and error messages
- **Audio Notification**: Plays a sound/chimes when timer completes
- **Input Validation**: Prevents invalid time inputs (minimum 1 minute)
- **Responsive Design**: Works seamlessly on both desktop and mobile devices due to 'device=device-width' in the HTML code

Design Decisions

 Client-Side Timer Implementation
The decision to implement the timer logic on the client side was made for several reasons:
1. Reduced server load
2. Immediate response to user interactions
3. Continued operation during temporary network issues
4. Smoother countdown experience

 Input Validation Approach
A dual-layer validation strategy was implemented:
1. HTML5 input attributes for immediate feedback
2. JavaScript validation for enhanced control and user experience
This ensures robust input handling while maintaining a smooth user experience.

 Audio Implementation
The audio notification uses a base64-encoded WAV file embedded in the HTML instead of an external file. This decision was made to:
- Eliminate dependency on external audio files
- Ensure consistent availability across deployments
- Reduce server requests
- Simplify deployment process

 Bootstrap Integration
Bootstrap was chosen as the CSS framework because:
- Provides consistent cross-browser styling
- Offers responsive design out of the box
- Familiar interface components
