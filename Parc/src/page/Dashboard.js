import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';

class AdminDashboard extends Component {
  state = {
    reservations: []
  };

  componentDidMount() {
    this.fetchReservations();
  }

  fetchReservations = async () => {
    try {
      const response = await axios.get('http://localhost:4000/reservation'); // Remplacez par l'URL correcte de votre API
      this.setState({ reservations: response.data });
      console.log(response.data); // Pour vérifier les données retournées par l'API
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  handleAccept = async (id) => {
    const reservations = this.state.reservations.map(reservation => {
      if (reservation.id === id) {
        reservation.status = 'Accepted';
        this.sendEmail(reservation.email, 'Votre réservation a été acceptée', 'Bonjour, votre réservation a été acceptée.');
      }
      return reservation;
    });
    this.setState({ reservations });
  };

  sendEmail = async (email, subject, text) => {
    try {
      await axios.post('http://localhost:4000/email/send', {
        email: email,
        subject: subject,
        text: text
      });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  handleDecline = (id) => {
    const reservations = this.state.reservations.map(reservation => {
      if (reservation.id === id) {
        reservation.status = 'Declined';
      }
      return reservation;
    });
    this.setState({ reservations });
  };

  render() {
    return (
      <div className="dashboard-container">
        <h2>Tableau de Bord de l'Administrateur</h2>
        <div className="reservations-list">
          {this.state.reservations.map(reservation => (
            <div key={reservation.id} className="reservation-card">
              <h3>{reservation.nameprenom}</h3>
              <p>Email: {reservation.email}</p>
              <p>Numéro: {reservation.numero}</p>
              <p>Âge: {reservation.age}</p>
              <p>Sexe: {reservation.sexe}</p>
              <p>Pays: {reservation.pays}</p>
              <p>Date: {reservation.date}</p>
              <p>Status: <span className={`status ${reservation.status ? reservation.status.toLowerCase() : ''}`}>{reservation.status}</span></p>
              <div className="reservation-actions">
                <button className="accept-button" onClick={() => this.handleAccept(reservation.id)}>Accepter</button>
                <button className="decline-button" onClick={() => this.handleDecline(reservation.id)}>Décliner</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
