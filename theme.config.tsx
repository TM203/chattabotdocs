import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Chattabot</span>,
  project: {
    link: 'https://chattabot.xyz',
    icon: (
      <img src='https://www.chattabot.xyz/_next/image?url=%2Ffavicon.ico&w=64&q=75' alt='Chattabot' width="35" height="35"/>
    ),

  },
  chat: {
    link: 'https://discord.gg/uNumk3KMXw',
  },
  footer: {
    text: '© Chattabot',
  },
  docsRepositoryBase: 'https://github.com/TM203/chattabotdocs/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Chattabot'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Chattabot Docs" />
      <meta property="og:description" content="Learn more about chattabot!" />
    </>
  ),
  logoLink: 'https://www.chattabot.xyz/',

  nextThemes: {
    defaultTheme: 'dark'
    
  },


  primaryHue: { dark: 182,  light: 193}
}

export default config
