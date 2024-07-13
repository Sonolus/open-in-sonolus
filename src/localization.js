export const initializeLocale = () => {
    const i18n = import.meta.glob(['./*/index.json', '!./en/index.json'], {
        import: 'default',
        eager: true,
    })[`./${getLocale()}/index.json`]
    if (!i18n) return

    document.documentElement.lang = i18n.lang
    document.title = i18n.title
    localize('header', i18n)
    localize('try-again', i18n)
    localize('download', i18n)
}

const getLocale = () => {
    const [main, ...rest] = navigator.language.toLowerCase().split('-')

    switch (main) {
        case 'el':
        case 'es':
        case 'fr':
        case 'id':
        case 'ja':
        case 'ko':
            return main
        case 'in':
            return 'id'
        case 'zh':
            return ['hant', 'hk', 'tw'].some((tag) => rest.includes(tag)) ? 'zht' : 'zhs'
        default:
            return 'en'
    }
}

const localize = (id, i18n) => {
    if (!i18n[id]) return

    document.getElementById(id).innerText = i18n[id]
}
