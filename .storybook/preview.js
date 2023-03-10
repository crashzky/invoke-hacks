import '../styles/globals.css'
import '../styles/fonts.css'
import '../styles/typeface.css'
import '../styles/radio.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}