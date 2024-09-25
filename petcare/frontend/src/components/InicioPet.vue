<template>
    <div id="app">
      <header class="bg-light">
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">Pet & Care</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#hero">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">Servicios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">Sobre Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contacto</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  
      <section id="hero" class="hero" style="background-image: url('path/to/your/hero-image.jpg');">
        <div class="hero-content text-center">
          <h1>Bienvenido a Pet & Care</h1>
          <p>Tu mejor opción para el cuidado de tus mascotas.</p>
          <a href="/login" class="btn btn-primary">Haz tu cita ahora</a>
        </div>
      </section>
  
      <section id="services" class="section py-5">
        <div class="container">
          <h2 class="text-center">Nuestros Servicios</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="card">
                <img src="@/assets/imagenes/1.jpg" class="card-img-top" alt="Consulta Veterinaria">
                <div class="card-body">
                  <h5 class="card-title">Consulta Veterinaria</h5>
                  <p class="card-text">Ofrecemos consultas veterinarias profesionales y personalizadas.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="@/assets/imagenes/2.jpg" class="card-img-top" alt="Vacunación">
                <div class="card-body">
                  <h5 class="card-title">Vacunación</h5>
                  <p class="card-text">Vacunamos a tus mascotas para mantenerlas saludables y felices.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <img src="@/assets/imagenes/3.jpg" class="card-img-top" alt="Cuidado de Mascotas">
                <div class="card-body">
                  <h5 class="card-title">Cuidado de Mascotas</h5>
                  <p class="card-text">Brindamos atención integral y cuidado a tus mascotas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section id="about" class="section py-5 bg-light">
        <div class="container">
          <h2 class="text-center">Sobre Nosotros</h2>
          <p class="text-center">En Pet & Care, nos dedicamos a ofrecer los mejores servicios para el cuidado de tus mascotas. Nuestro equipo de veterinarios y especialistas está comprometido a garantizar la salud y bienestar de tus amigos peludos.</p>
        </div>
      </section>
  
      <section id="contact" class="section py-5">
        <div class="container">
          <h2 class="text-center">Contacto</h2>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="name">Nombre</label>
                <input type="text" class="form-control" id="name" placeholder="Tu nombre" required>
              </div>
              <div class="form-group col-md-6">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Tu email" required>
              </div>
            </div>
            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea class="form-control" id="message" rows="4" placeholder="Tu mensaje aquí..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
          </form>
        </div>
      </section>
  
      <footer class="footer bg-dark text-white text-center py-3">
        <p>&copy; 2024 Pet & Care. Todos los derechos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style>
  .hero {
    height: 400px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
  }
  .hero-content {
    background: rgba(0, 0, 0, 0.5); /* Fondo oscuro para mejorar la legibilidad del texto */
    padding: 20px;
  }
  .section {
    padding: 60px 0;
  }
  .footer {
    background-color: #343a40;
  }
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  </style>
  