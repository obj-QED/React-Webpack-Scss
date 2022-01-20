module.exports = {
  plugins: {
    tailwindcss: {
      config: './tailwind.config.js',
      css: true,
      purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
          './src/**/*.vue',
          './src/**/*.js',
        ],
        options: {
          whitelist: ['hover', 'focus'],
        },
      },

      autoprefixer: {
        grid: true,
      },
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    }
  },
}