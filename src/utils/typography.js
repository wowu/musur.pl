import Typography from 'typography'
// import theme from 'typography-theme-grand-view'
import theme from 'typography-theme-fairy-gates'

const linkColor = "#3B82F6"

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: linkColor,
    textDecoration: "none",
    textShadow:
      ".03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff", // eslint-disable-line
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
  },
})

const typography = new Typography(theme)

export default typography
