# Plan de Trabajo: Integración UI y Conexión Frontend/Backend

Este documento rastrea el estado del proyecto para la integración de las maquetas de `stitch_custom_web_page_generator` hacia `FrontEndd-app-INGWEB` y la respectiva conexión con el API Gateway del backend.

## 🗂️ Estructura de Carpetas Propuesta (`src/`)
Basado en un desarrollo de componentes:
```text
src/
├── api/          # Configuración de Axios (ya existe)
├── assets/       # Imágenes, iconos
├── components/   # Componentes UI reutilizables (Botones, Modales, Tablas)
├── context/      # Estados globales (AuthContext para el JWT y usuario)
├── hooks/        # Custom hooks de React
├── layouts/      # Plantillas de vistas (Ej: Layout con Sidebar y Navbar)
├── pages/        # Vistas principales integradas desde Stitch
├── services/     # Funciones que usan api/axios.js para llamar al backend
└── utils/        # Funciones helpers (formateo de fechas, etc.)
```

---

## 🚀 Fases de Desarrollo

### Fase 1: Preparación y Arquitectura Base
- [ ] Instalar dependencias esenciales (`react-router-dom` para navegación).
- [ ] Crear la estructura de carpetas definida arriba.
- [ ] Configurar el enrutador principal en `App.jsx`.
- [ ] Crear el proveedor de Autenticación (`AuthContext`) para manejar sesiones (JWT).
- [ ] **Estado:** ⏳ Pendiente

### Fase 2: Sistema de Diseño y Layout Base
- [ ] Analizar `DESIGN.md` y extraer las variables de CSS a `index.css`.
- [ ] Identificar la barra de navegación y el menú lateral en las maquetas de Stitch y convertirlos en componentes `Sidebar` y `Navbar`.
- [ ] Crear el layout principal (`MainLayout`) para que las páginas internas compartan la navegación.
- [ ] **Estado:** ⏳ Pendiente

### Fase 3: Integración de Páginas (UI estática y formularios)
Migración de los archivos `code.html` a componentes React, partiendo en sub-componentes si es necesario.
- [ ] **Login**: `iniciar_sesi_n_clinical_enterprise_blue` -> `pages/Login.jsx`.
- [ ] **Dashboard**: `dashboard_resumen` -> `pages/Dashboard.jsx`.
- [ ] **Lista de Citas**: `lista_de_citas` -> `pages/AppointmentsList.jsx`.
- [ ] **Nueva Cita**: `nueva_cita_formulario` -> `pages/NewAppointment.jsx`.
- [ ] **Detalle Cita**: `detalle_de_cita` -> `pages/AppointmentDetail.jsx`.
- [ ] **Gestión Usuarios (Admin)**: `gesti_n_de_usuarios_admin` -> `pages/UsersManagement.jsx`.
- [ ] **Estado:** ⏳ Pendiente

### Fase 4: Conexión con el Backend (API Services)
- [ ] **Auth Service**: Implementar login real contra `/api/users/login`.
- [ ] **Users Service**: Listar, crear, actualizar usuarios contra `/api/users/`.
- [ ] **Appointments Service**: Listar, agendar, y actualizar estado de citas contra `/api/appointments/`.
- [ ] Conectar los datos devueltos por los servicios con los estados de las páginas en React.
- [ ] **Estado:** ⏳ Pendiente

---
*Nota: Este documento se irá actualizando (marcando los checkboxes) conforme avancemos en cada tarea de las fases descritas.*
