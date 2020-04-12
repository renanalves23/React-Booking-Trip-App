import React from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.jpg";
import "./styles.css";

export default function Header() {
  const reservationSize = useSelector(state => state.book.length);

  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>

      <Link className="reserva" to="/bookings">
        <div>
          <strong>Minhas reservas</strong>
          <span>{reservationSize} reservas</span>
        </div>
      </Link>
    </header>
  );
}
