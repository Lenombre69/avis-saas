import React, { useState } from 'react';
import './App.css';

function App() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: '', comment: '', rating: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, formData]);
    setFormData({ name: '', comment: '', rating: '' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue sur Avis-SaaS</h1>
        <p>Collectez et partagez les avis des utilisateurs !</p>

        {/* Formulaire d'Avis */}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nom :</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Commentaire :</label>
            <textarea
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Note :</label>
            <select
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
              required
            >
              <option value="">Sélectionner une note</option>
              <option value="1">1 étoile</option>
              <option value="2">2 étoiles</option>
              <option value="3">3 étoiles</option>
              <option value="4">4 étoiles</option>
              <option value="5">5 étoiles</option>
            </select>
          </div>
          <button type="submit">Soumettre</button>
        </form>

        {/* Section d'affichage des Avis */}
        <h2>Avis des utilisateurs :</h2>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <strong>{review.name}</strong> - {review.rating} étoiles
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
