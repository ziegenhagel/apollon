export const useAssets = () => {
    return [
        {
            title: 'Bild von Frau am Fenster',
            type: 'image',
            objects: [
                {
                    src: 'https://images.unsplash.com/photo-1611758980008-8b5b2b2b2b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                    alt: 'Bild von Frau am Fenster',
                }
            ],
            categories: ['Bild', 'Frau', 'Fenster', 'Antik'],
            rating: 5,
            interactions: {
                zoom: true,
                compare: false,
                highlight: false,
                speed: false
            },
            comments: [
                {
                    date: '2021-01-01',
                    text: 'Das ist ein Kommentar',
                },
                {
                    date: '2021-01-02',
                    text: 'Das ist ein weiterer Kommentar',
                }
            ]
        },
        {
            title: 'Erste Radio Sendung',
            type: 'audio',
            categories: ['Antik', 'Radio'],
            objects: [
                {
                    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                    alt: 'Erste Radio Sendung',
                },
                {
                    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
                    alt: 'Entrauschte Variante',
                }
            ],
            rating: 4,
            interactions: {
                zoom: false,
                compare: true,
                highlight: false,
                speed: true
            },
            comments: []
        }

    ]
}
