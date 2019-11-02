from flask import Flask, render_template, redirect

app = Flask(__name__)


@app.route('/')
def main_page():
    return redirect('/question-with-one-answer')


@app.route('/question-with-one-answer')
def question_page():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
