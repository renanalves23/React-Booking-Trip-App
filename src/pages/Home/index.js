import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { MdFlightTakeoff } from "react-icons/md";

import "./styles.css";

import api from "../../services/api";

export default function Home() {
  const dispatch = useDispatch();

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("trips");

      console.log(response.data);

      setTrips(response.data);
    }
    loadApi();
  }, []);

  function handleAdd({ trip }) {
    dispatch({
      type: "ADD_RESERVATION",
      trip
    });
  }

  return (
    <div className="listContainer">
      <ul className="box">
        {trips.map(trip => (
          <li key={trip.id}>
            <img src={trip.image} alt="img" />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? "Disponível" : "Indisponível"} </span>

            <button type="button" onClick={() => handleAdd(trip)}>
              <div>
                <MdFlightTakeoff size={25} color="#fff" />
              </div>
              <span>SOLICITAR RESERVA</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
