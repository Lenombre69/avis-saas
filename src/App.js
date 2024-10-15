import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [reviews, setReviews] = useState([
    { name: "Jean Dupont", text: "Excellent service, je recommande !" },
    { name: "Sophie Martin", text: "Très utile pour organiser mes tâches." },
    { name: "Paul Durand", text: "L'interface est intuitive et agréable." },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && feedback) {
      const newReview = { name, text: feedback };
      setReviews([newReview, ...reviews]);
      setName("");
      setFeedback("");
    }
  };

  return (
    <div className="container">
      <header className="text-center my-5">
        <h1 className="display-4 text-white">Bienvenue sur Avis-SaaS</h1>
      </header>

      <div className="row">
        <div className="col-md-6">
          <h2>Donnez votre avis</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
              />
            </div>
            <div className="form-group">
              <label htmlFor="feedback">Votre Avis</label>
              <textarea
                className="form-control"
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows="3"
                placeholder="Votre avis ici..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <h2>Avis des utilisateurs</h2>
          {reviews.map((review, index) => (
            <div key={index} className="card my-3">
              <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <p className="card-text">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="text-center mt-5">
        <p className="text-muted">© 2024 Avis-SaaS - Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;
