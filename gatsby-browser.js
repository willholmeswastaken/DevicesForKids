/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "tailwindcss/base.css"
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"

export const onClientEntry = () => {
    const slick = document.createElement('link')
    slick.rel = "stylesheet"
    slick.type = "text/css"
    slick.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    document.head.appendChild(slick)

    const slickTheme = document.createElement('link')
    slickTheme.rel = "stylesheet"
    slickTheme.type = "text/css"
    slickTheme.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    document.head.appendChild(slickTheme)
}