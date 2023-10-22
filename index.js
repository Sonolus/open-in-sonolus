import './index.css'

initializeLink()
initializeLocale()

function initializeLink() {
    const link = 'sonolus:/' + location.pathname + location.search + location.hash

    document.getElementById('link').setAttribute('href', link)
    document.getElementById('link-text').innerText = link

    setTimeout(() => (location.href = link), 1000)
}

function initializeLocale() {
    const i18n = {
        el: {
            lang: 'el',
            title: 'Άνοιγμα στο Sonolus',
            header: 'Άνοιγμα...',
            tryAgain:
                'Αν το Sonolus δεν άνοιξε, πατήστε τον ακόλουθο σύνδεσμο για να ξαναπροσπαθήσετε:',
            download: 'Άν δεν έχετε το Sonolus, κατεβάστε το από εδώ:',
        },
        es: {
            lang: 'es',
            title: 'Abrir en Sonolus',
            header: 'Abriendo...',
            tryAgain:
                'Si Sonolus no se abrió, haga clic en el siguiente enlace para volver a intentarlo:',
            download: 'Si aún no tienes Sonolus, descárgalo aquí:',
        },
        fr: {
            lang: 'fr',
            title: 'Ouvrir sur Sonolus',
            header: 'Ouverture...',
            tryAgain:
                "Si Sonolus ne s'est pas ouvert, cliquez sur le lien suivant pour réessayer :",
            download: "Si vous n'avez pas encore Sonolus, téléchargez-le ici :",
        },
        id: {
            lang: 'id',
            title: 'Buka di Sonolus',
            header: 'Membuka...',
            tryAgain: 'Jika Sonolus tidak terbuka, klik tautan berikut untuk mencoba lagi:',
            download: 'Jika Anda belum memiliki Sonolus, unduh di sini:',
        },
        ja: {
            lang: 'ja',
            title: 'Sonolusで開く',
            header: '移動中...',
            tryAgain: 'Sonolusが開かなかった場合は、このリンクをタップしてみてください：',
            download:
                'Sonolusをまだインストールしていない場合は、ここからインストールしてください：',
        },
        ko: {
            lang: 'ko',
            title: 'Sonolus에서 열기',
            header: '여는 중...',
            tryAgain: 'Sonolus가 열리지 않았다면, 다음 링크를 사용해서 다시 시도해보세요:',
            download: 'Sonolus를 아직 설치하지 않았다면, 여기서 다운로드하세요:',
        },
        zhs: {
            lang: 'zh-hans',
            title: '在 Sonolus 中打开',
            header: '正在打开…',
            tryAgain: '如果 Sonolus 没有打开，请点击以下链接重试：',
            download: '如果您还没有 Sonolus，请前往下载：',
        },
        zht: {
            lang: 'zh-hant',
            title: '在Sonolus中打開',
            header: '正在打開…',
            tryAgain: '如果沒有打開Sonolus，請按以下鏈接重試：',
            download: '如果你的設備還未有Sonolus，請在這裏下載：',
        },
    }[getLocale()]
    if (!i18n) return

    document.documentElement.lang = i18n.lang
    document.title = i18n.title
    document.getElementById('header').innerText = i18n.header
    document.getElementById('try-again').innerText = i18n.tryAgain
    document.getElementById('download').innerText = i18n.download
}

function getLocale() {
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
