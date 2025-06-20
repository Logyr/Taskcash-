const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Simulated user session (for demo)
let loggedIn = false;

// Routes
app.get('/', (req, res) => res.render('home'));
app.get('/login', (req, res) => res.render('login'));
app.get('/signup', (req, res) => res.render('signup'));
app.get('/dashboard', (req, res) => {
  if (!loggedIn) return res.redirect('/login');
  res.render('dashboard');
});
app.get('/tasks', (req, res) => res.render('tasks'));
app.get('/ads', (req, res) => res.render('ads'));
app.get('/withdrawal', (req, res) => res.render('withdrawal'));
app.get('/refer', (req, res) => res.render('refer'));
app.get('/about', (req, res) => res.render('about'));

// Fallback
app.use((req, res) => res.status(404).send("Page not found"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
