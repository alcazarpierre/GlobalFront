import React, { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import "./DonacionUnica.modules.css";

const ENDPOINT = import.meta.env.VITE_ENDPOINT;

const DonacionUnica = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [amount, setAmount] = useState("");

  initMercadoPago("TEST-ab7734ef-a1c7-4180-b16b-211f6ddaa37e");

  const createPreference = async () => {
    try {
      const response = await axios.post(
        `${ENDPOINT}/createpreference`,
        {
          description: "Donación única",
          price: parseFloat(amount),
          quantity: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.error(error);
    }
  };

  const handleDonate = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div className="donacion-unica-container">
      <h3>Seleccione el monto deseado</h3>
      <div className="amount-options">
        <button onClick={() => setAmount("500")}>500</button>
        <button onClick={() => setAmount("1000")}>1000</button>
        <button onClick={() => setAmount("1500")}>1500</button>
        <button onClick={() => setAmount("2000")}>2000</button>
        <button onClick={() => setAmount("2500")}>2500</button>
        <button onClick={() => setAmount("3000")}>3000</button>
        <input
          type="number"
          placeholder="Otro monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0" 
        />
      </div>
      <button className="donate-button" onClick={handleDonate}>Donar</button>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>
  );
};

export default DonacionUnica;

