# 🌓 Portafolio Profesional

Un portafolio moderno y **responsive** desarrollado con **Next.js 16**, **React 19**, **TypeScript** y **Tailwind CSS**, diseñado para mostrar proyectos, habilidades y experiencia de manera clara y profesional. Optimizado para rendimiento y con soporte para **modo oscuro / claro**.

🌐 **Demo en vivo:** [mi portfolio](https://portfolio-antonio-melino.vercel.app/)

---

## 🚀 Características principales

* 🌓 **Modo oscuro/claro** – Tema adaptable con toggle interactivo
* 📱 **Diseño completamente responsive** – Adaptado a dispositivos móviles, tablets y escritorio
* 🧭 **Secciones organizadas** – Navegación clara y estructura intuitiva
* ✨ **Efectos visuales interactivos** – Cards de proyectos con animaciones y GIFs al pasar el cursor
* 📬 **Formulario de contacto funcional** – Envío de mensajes directo a mi correo electrónico
* 📄 **Descarga de CV** – Disponible en formato PDF desde la sección de inicio
* ⚡ **Optimizado para rendimiento** – Gracias a Next.js y buenas prácticas de desarrollo
* 🚀 **Despliegue en Vercel** – Implementación CI/CD con despliegue automático

---

## 📂 Secciones del portafolio

* 🏠 **Inicio** – Presentación breve con opción para descargar mi CV en PDF
* 👤 **Sobre mí** – Información personal, intereses y enfoque profesional
* 💼 **Experiencia** – Trayectoria laboral y roles desempeñados
* 🎓 **Educación** – Formación académica y certificaciones
* ⚡ **Habilidades** – Tecnologías, herramientas y competencias técnicas
* 🚀 **Proyectos** – Cards interactivas con imágenes y GIFs al pasar el cursor
* 📬 **Contacto** – Formulario funcional para enviar mensajes directamente a mi email

---

## 🛠️ Tecnologías utilizadas

* **Next.js 16** – Framework de React para renderizado estático y dinámico
* **React 19** – Librería principal para la construcción de la interfaz
* **TypeScript** – Tipado estático en todo el proyecto
* **Tailwind CSS** – Estilización rápida y responsive
* **shadcn/ui & Radix UI** – Componentes accesibles y personalizables
* **EmailJS** – Envío del formulario de contacto mediante una API Route de Next.js
* **Framer Motion** – Animaciones suaves y transiciones
* **React Icons** – Biblioteca de iconos
* **Git & GitHub** – Control de versiones
* **Vercel** – Plataforma de despliegue y hosting

---

## 🌟 Funcionalidades destacadas

### 🌓 Toggle de tema oscuro/claro

Interruptor interactivo que persiste la preferencia del usuario entre sesiones usando **localStorage**.

### 🎨 Cards de proyectos interactivas

Cada proyecto incluye una card con imagen estática que, al pasar el cursor, muestra un **GIF animado** para dar vida a la presentación.

### 📧 Formulario de contacto en tiempo real

Los mensajes enviados a través del formulario son recibidos directamente en mi bandeja de entrada gracias a una integración server-side con **EmailJS**, ejecutada desde una API Route de Next.js.

### 📄 Descarga de CV

Desde la sección de inicio es posible descargar mi **CV en formato PDF** con un solo clic.

### ⚡ Rendimiento optimizado

Alta puntuación en **Lighthouse** gracias a las optimizaciones de Next.js y la carga diferida de componentes.

---

## ⚙️ Cómo correrlo localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/AntonioMelino/portfolio-web-react.git
cd portfolio-web-react

# 2. Instalar dependencias
pnpm install

# 3. Configurar variables de entorno
# Crear un archivo .env.local en la raíz con:
# EMAILJS_SERVICE_ID=tu_service_id
# EMAILJS_TEMPLATE_ID=tu_template_id
# EMAILJS_PUBLIC_KEY=tu_public_key
# EMAILJS_PRIVATE_KEY=tu_private_key (opcional, recomendado)
# EMAIL_TO=tu_email_de_destino

# 4. Levantar el servidor de desarrollo
pnpm dev
```

La app queda disponible en `http://localhost:3000`.

---

## 🚀 Despliegue en Vercel

El proyecto está configurado para despliegue automático:

* Push a la rama **main** → Despliegue automático
* Pull Requests → **Preview deployments** automáticos
* Dominio personalizado configurado

---

## 📬 Contacto

Si tienes preguntas, sugerencias o quieres colaborar, no dudes en contactarme:

* 🌐 **Portafolio:** [portfolio](https://portfolio-antonio-melino.vercel.app/)
* 💼 **LinkedIn:** [antonio-melino](https://www.linkedin.com/in/antonio-melino-82a885213/)
* 📧 **Email:** [antoniomelino1997@gmail.com](mailto:antoniomelino1997@gmail.com)
* 🐙 **GitHub:** [AntonioMelino](https://github.com/AntonioMelino)

---

## 📄 Licencia

Este proyecto está bajo la **licencia MIT**. Puedes usarlo y modificarlo libremente.

---

✨ Gracias por visitar mi repositorio. Si te gusta el proyecto, no olvides darle una ⭐
