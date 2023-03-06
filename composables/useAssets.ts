export const useAssets = () => {
    let id: number = 0

    let assets = [];
    for (let i = 1; i <= 145; i++) {

        let objects = [];
        for (let j = 0; j <= 2; j++) {
            objects.push({
                src: '/img/' + i + '.jpg',
                thumbSrc: '/img/' + i + '.jpg',
                alt: 'Sonnenblumen van Gogh',
            })
            if (Math.random() > 0.5) break;
        }

        assets.push({
            id: id++,
            title: 'Sonnenblumen van Gogh',
            type: 'image',
            objects,
            categories: ['Bild', 'Frau', 'Fenster', 'Antik'],
            favorite: Math.random() > 0.8,
            interactions: ['zoom', 'compare', 'highlight'],
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
        });
    }

    const assetsFromState = useState('assets', () => assets);
    return assetsFromState;

}
