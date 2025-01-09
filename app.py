from flask import Flask, render_template, request, jsonify, flash, redirect, url_for
from datetime import datetime

app = Flask(__name__)
# TODO
app.secret_key = 'secret_key'

@app.route('/')
def index():
    if request.args.get('timer_complete'):
        flash('Timer completed!')
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True) # preventing the server from starting auto, and also restarting the server when code change is detected.
