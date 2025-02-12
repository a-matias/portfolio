module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'public', // Esto hará que el build se genere en `public/`
};
