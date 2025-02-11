from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

@app.route('/')
def envelope():
    return render_template('index.html')

@app.route('/letter')
def letter():
    return render_template('letter.html')

@app.route('/will')
def will():
    return render_template('will.html')

@app.route('/you')
def you():
    return render_template('you.html')

@app.route('/be')
def be():
    return render_template('be.html')

@app.route('/my')
def my():
    return render_template('my.html')

@app.route('/valentines')
def valentines():
    return render_template('valentines.html')

@app.route('/karine')
def karine():
    return render_template('karine.html')

@app.route('/pangestu')
def pangestu():
    return render_template('pangestu.html')

@app.route('/final-choice')
def final_choice():
    return render_template('final-choice.html')

@app.route('/success')
def success():
    return render_template('success.html')

if __name__ == '__main__':
    app.run(debug=True)