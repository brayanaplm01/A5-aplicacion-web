# 🌤️ App Clima - Visor de Clima por Ciudad

Una aplicación móvil híbrida desarrollada con React Native y Expo que permite consultar el clima actual de cualquier ciudad del mundo.

## 📋 Características

- **Búsqueda por ciudad**: Ingresa el nombre de cualquier ciudad para obtener su información meteorológica
- **Información completa del clima**: 
  - Temperatura actual (°C y °F)
  - Descripción del clima
  - Sensación térmica
  - Humedad
  - Velocidad del viento
- **Interfaz atractiva**: Diseño moderno con fondo animado
- **Manejo de errores**: Gestión adecuada de ciudades no encontradas y errores de conexión
- **Responsive**: Funciona en iOS, Android y Web

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- Expo CLI instalado globalmente: `npm install -g @expo/cli`
- Cuenta en [WeatherAPI](https://www.weatherapi.com/) para obtener API Key

### Pasos de instalación

1. **Clona o descarga este proyecto**

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **API Key configurada**:
   - ✅ **API Key ya configurada**: `aaef684086464d4e9bf120112252208`
   - La aplicación está lista para usar con WeatherAPI
   - Si necesitas cambiar la API key, edita el archivo `App.js` o `.env.local`

4. **Ejecuta la aplicación**:
   ```bash
   # Para desarrollo web
   npm run web
   
   # Para Android (requiere emulador o dispositivo)
   npm run android
   
   # Para iOS (solo en macOS)
   npm run ios
   ```

## 🌐 Despliegue a Vercel

Esta aplicación está configurada para desplegarse fácilmente en Vercel:

### Opción 1: Despliegue Automático desde GitHub
1. Sube tu código a GitHub
2. Conecta tu repositorio con Vercel
3. Configura la variable de entorno `EXPO_PUBLIC_WEATHER_API_KEY`
4. Vercel desplegará automáticamente en cada push

### Opción 2: Despliegue Manual
```bash
# Construir para web
npm run build

# Desplegar con Vercel CLI
npx vercel --prod
```

**📖 Guía completa de despliegue**: Ver archivo [`DEPLOY.md`](DEPLOY.md) para instrucciones detalladas.

## 📱 Uso de la Aplicación

1. **Abrir la aplicación**: La app mostrará una pantalla con un campo de texto y un botón de búsqueda
2. **Ingresar ciudad**: Escribe el nombre de la ciudad que deseas consultar
3. **Buscar**: Presiona el botón "Buscar" o la tecla Enter
4. **Ver resultados**: La información del clima se mostrará en una tarjeta elegante
5. **Nueva búsqueda**: Usa el botón "Nueva búsqueda" para limpiar y buscar otra ciudad

## 🛠️ Tecnologías Utilizadas

- **React Native**: Framework para desarrollo móvil
- **Expo**: Plataforma para desarrollo y despliegue
- **WeatherAPI**: API externa para datos meteorológicos
- **JavaScript ES6+**: Lenguaje de programación

## 📁 Estructura del Proyecto

```
appclima/
├── App.js              # Componente principal de la aplicación
├── package.json        # Dependencias y scripts del proyecto
├── app.json           # Configuración de Expo
├── assets/            # Recursos estáticos (iconos, imágenes)
└── README.md          # Documentación del proyecto
```

## 🔧 Funcionalidades Implementadas

### ✅ Requisitos Cumplidos

- **Conexión a API externa**: Integración con WeatherAPI
- **Peticiones HTTP**: Uso de fetch para llamadas asíncronas
- **Interfaz de usuario**: Campo de texto y botón para búsqueda
- **Visualización de datos**: Mostrar temperatura y descripción del clima
- **Manejo de errores**: Gestión de ciudades no encontradas y errores de red

### 🎨 Características Adicionales

- **Diseño atractivo**: Interfaz moderna con gradientes y sombras
- **Información extendida**: Sensación térmica, humedad y viento
- **Conversión de unidades**: Temperatura en Celsius y Fahrenheit
- **Loading states**: Indicador de carga durante las peticiones
- **UX mejorada**: Botón para nueva búsqueda y clear de datos

## 🔑 Obtener API Key de WeatherAPI

1. Ve a [weatherapi.com](https://www.weatherapi.com/)
2. Haz clic en "Sign Up Free"
3. Completa el registro con tu email
4. Verifica tu cuenta
5. En el dashboard, encontrarás tu API Key
6. Copia la clave y reemplázala en `App.js`

**Nota**: La API gratuita permite hasta 1,000,000 llamadas por mes.

## 🚨 Solución de Problemas

### Error "Invalid API Key"
- Verifica que hayas reemplazado `'TU_API_KEY_AQUI'` con tu clave real
- Asegúrate de que la clave esté entre comillas

### Error "No matching location found"
- Verifica la ortografía del nombre de la ciudad
- Intenta con nombres en inglés o español
- Prueba con ciudades principales primero

### La app no carga
- Ejecuta `npm install` para asegurar dependencias
- Verifica que Expo CLI esté instalado: `expo --version`
- Prueba reiniciar el servidor: `npm start`

## 📄 Licencia

Este proyecto es de uso académico para la materia Aplicaciones Móviles I.

## 👨‍💻 Desarrollo

Proyecto desarrollado como actividad práctica para aprender:
- Consumo de APIs externas
- Peticiones HTTP en React Native
- Manejo de estados y efectos
- Diseño de interfaces móviles
- Gestión de errores en aplicaciones
