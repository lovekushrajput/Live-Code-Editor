import { DataContext } from "./DataProvider"
import { useContext, useEffect, useState } from "react"

function Result() {
    const [src, setSrc] = useState('')
    const { html, css, js } = useContext(DataContext)

    const srcCode = `
    <html>
       <body>${html}</body>
       <style>${css}</style>
        <script>${js}</script>
    </html>
    `

    useEffect(() => {
        const interval = setInterval(() => {
            setSrc(srcCode)
        }, 1000)


        return () => clearTimeout(interval)
    }, [html, css, js])

    return (
        <div>
            <iframe
                srcDoc={src}
                title="Output"
                sandbox="allow-scripts"
                width='100%'
            />
        </div>

        
    )
}

export default Result