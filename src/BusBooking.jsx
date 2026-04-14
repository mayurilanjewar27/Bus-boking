import { useState, useEffect } from "react";

function BusBooking() {
  const [formData, setFormData] = useState({
    name: "",
    source: "",
    destination: "",
    date: "",
    seats: ""
  });

  
  useEffect(() => {
    const savedData = localStorage.getItem("busBooking");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("busBooking", JSON.stringify(formData));
    alert("Booking Saved Successfully ");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Bus Booking Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="source"
          placeholder="From"
          value={formData.source}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="destination"
          placeholder="To"
          value={formData.destination}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="seats"
          placeholder="No. of Seats"
          value={formData.seats}
          onChange={handleChange}
          required
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BusBooking;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#fff",

  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#d0cdcd",
    width: "300px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};