module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
  theme: {
    colors: {
      "primary":"#46b4d5",
      "secondary": "#fedf9e",
      "dark": "#21130d",
      "light": "#f7f5f3",
      "accent": "#f7f5f3",
      "gray": "#f7f5f3",
      "white": "#f7f5f3",
      "black": "#21130d",
      "red": "#f00",
      "yellow": "#ff0",
      "green": "#0f0",
      "blue": "#00f",
      "indigo": "#f0f",
      "purple": "#f0f",
      "pink": "#f0f"
    },
    
  }
}
