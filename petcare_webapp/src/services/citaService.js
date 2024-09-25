import axios from 'axios';

// Define la URL base de la API
const API_URL = 'https://java3000-g8cthucjhvgad2c3.canadacentral-01.azurewebsites.net/api/citas';

const citaService = {
  // Función para programar una nueva cita
  async programarCita(citaRequest) {
    return axios.post(`${API_URL}/programar`, citaRequest);
  },

  // Función para obtener las mascotas del cliente
  async obtenerMascotas() {
    return axios.get(`${API_URL}/mascotas`); // Asegúrate de que este endpoint esté definido en el backend
  },

  // Función para obtener la lista de veterinarios
  async obtenerVeterinarios() {
    return axios.get(`${API_URL}/veterinarios`); // Asegúrate de que este endpoint esté definido en el backend
  }
};

export default citaService;
