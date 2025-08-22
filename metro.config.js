const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Configuración adicional para compatibilidad
config.resolver.assetExts.push('db');

module.exports = config;
