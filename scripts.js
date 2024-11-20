/* Allgemeine Stile */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #111; /* Sehr dunkles Schwarz */
  color: #fff;
}

h1, h2 {
  font-family: 'Georgia', serif;
}

a {
  text-decoration: none;
  color: #e74c3c; /* Dunkles Rot */
}

section {
  padding: 60px 20px;
  text-align: center;
}

.cta-button {
  background-color: #e74c3c; /* Dunkles Rot */
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 20px;
  display: inline-block;
}

/* Header */
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #222; /* Dunkles Grau */
  padding: 20px;
  z-index: 1000;
}

#header nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

#header nav ul li {
  margin: 0 15px;
}

#header nav ul li a {
  color: #e74c3c; /* Dunkles Rot */
  font-size: 18px;
  text-transform: uppercase;
}

/* Hero Section */
.hero {
  background-image: url('hero-image.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  filter: brightness(50%); /* Verdunkelung des Hintergrunds */
}

.hero-content h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

.hero-content .cta-button {
  background-color: #e74c3c; /* Dunkles Rot */
  color: #fff;
}

/* Footer */
footer {
  background-color: #222; /* Dunkles Grau */
  color: #fff;
  padding: 20px;
  text-align: center;
}

footer p {
  margin: 0;
}

footer a {
  color: #e74c3c; /* Dunkles Rot */
  margin: 0 10px;
}

/* Form */
form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #333; /* Sehr dunkles Grau */
  border-radius: 5px;
}

form input, form textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #e74c3c; /* Dunkles Rot */
  border-radius: 5px;
  background-color: #222; /* Sehr dunkles Grau */
  color: #fff;
}

form button {
  background-color: #e74c3c; /* Dunkles Rot */
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5em;
  }

  #header nav ul {
    flex-direction: column;
  }

  #header nav ul li {
    margin: 10px 0;
  }
}
