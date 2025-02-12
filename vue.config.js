module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '//'  // En producción, cargar desde la raíz
    : '/'  // En desarrollo, también cargar desde la raíz
}
