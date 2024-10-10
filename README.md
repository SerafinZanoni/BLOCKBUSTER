# Blockbuster - Movie Management App

## Descripción
Blockbuster es una aplicación web para la gestión de películas, donde los usuarios pueden agregar, ver y listar películas. Además, cuenta con una página especial llamada **"Movie of the Week"** donde se destaca una película semanalmente. El proyecto está construido con JavaScript, utilizando tecnologías modernas como Webpack y Bootstrap para facilitar la estructura modular y el diseño responsivo.

## Características
- **Listado de Películas**: Ver una lista de todas las películas disponibles en la base de datos.
- **Agregar Películas**: Un formulario para agregar nuevas películas con detalles como el título, año, director, género, calificación y póster.
- **Película de la Semana**: Una página que muestra la "Movie of the Week" (película de la semana) destacada con su tráiler y detalles.
- **Responsivo**: El diseño de la aplicación es completamente responsivo, utilizando Bootstrap para adaptarse a cualquier tamaño de pantalla.

## Tecnologías Utilizadas
- **Frontend**: HTML, CSS, JavaScript (ES6)
- **Backend/API**: Interacción con una API para la gestión de películas.
- **Bundling**: Webpack para la agrupación y optimización del código.
- **Estilos**: Bootstrap para diseño responsivo.
- **Módulos**: Utilización de módulos ES6 con `import/export`.

## Requisitos
- Node.js (v14 o superior)
- npm (v6 o superior)

## Instalación

1. Clona este repositorio:
    ```bash
    git clone https://github.com/tuusuario/blockbuster-movies.git
    ```
2. Ve al directorio del proyecto:
    ```bash
    cd blockbuster-movies
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

### Iniciar la Aplicación
1. Ejecuta Webpack para generar los bundles:
    ```bash
    npx webpack --mode development
    ```

2. Si estás utilizando un servidor API local para manejar las películas, asegúrate de que esté corriendo antes de iniciar la aplicación.

3. Abre el archivo `index.html` en un navegador o utiliza una herramienta como `Live Server` para ejecutar la aplicación en un entorno local.

### Funcionalidades Principales

#### Ver Películas
1. Al abrir la página de inicio (`index.html`), podrás ver una lista de todas las películas disponibles en la base de datos.
2. Cada película mostrará el título, calificación y una imagen del póster.

#### Agregar Películas
1. Navega a la página `movies.html` para agregar nuevas películas.
2. Llena el formulario con los detalles de la película (título, año, género, director, calificación, y URL del póster).
3. Haz clic en el botón "Add Movie" para agregar la película a la base de datos.

#### Película de la Semana
1. Navega a la página `movie-of-the-week.html` para ver la "Movie of the Week".
2. La película destacada de la semana mostrará su tráiler, título, director y calificación.
3. Esta página se actualiza semanalmente con una nueva película destacada.

## Estructura del Proyecto
```bash
blockbuster-movies/
├── public/
│   ├── bundle.js           # Archivo generado por Webpack
├── scripts/
│   ├── createMovie.js       # Lógica para agregar nuevas películas
│   ├── fetchData.js         # Lógica para obtener las películas desde la API
│   ├── index.js             # Archivo principal que controla la funcionalidad
│   ├── renderMovies.js      # Función para renderizar las películas en la interfaz
├── styles/
│   ├── style.css            # Estilos personalizados para la aplicación
├── pages/
│   ├── movies.html          # Página para agregar películas
│   ├── about.html           # Página de información sobre la aplicación
│   ├── movie-of-the-week.html # Página para la película de la semana
├── index.html               # Página principal que lista las películas
├── webpack.config.js        # Configuración de Webpack
├── package.json             # Archivo de configuración de npm
└── README.md                # Este archivo
