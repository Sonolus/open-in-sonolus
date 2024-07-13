import { renderSVG } from 'uqr'

export const initializeLink = () => {
    const link = 'sonolus:/' + location.pathname + location.search + location.hash

    document.getElementById('link').setAttribute('href', link)
    document.getElementById('link-text').innerText = link

    setTimeout(() => (location.href = link), 1000)

    const container = document.getElementById('qr-code')
    container.innerHTML = renderSVG(link, { ecc: 'M', border: 2 })
    container.classList.toggle('hidden')
}
