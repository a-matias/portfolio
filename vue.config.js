module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/' // En producción, usar el subdirectorio portfolio
    : '/'            // En desarrollo, la raíz
}
