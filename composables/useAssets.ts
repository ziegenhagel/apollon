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

    return assets;
    /*
    return [
        {
            title: 'Sonnenblumen van Gogh',
            type: 'image',
            objects: [
                {
                    src: 'https://www.arsmundi.de/media/26/75/97/1595405335/881856_1.jpg',
                    alt: 'Sonnenblumen van Gogh',
                },
                {

                    src: 'https://cdn03.plentymarkets.com/2f2pb4p75jib/item/images/95480/full/i97974.jpg',
                    alt: 'Sonnenblumen van Gogh (Fake)',
                },
                {
                    src: 'https://www.beetfreunde.de/wp-content/uploads/2019/06/sunflower-1627193_1920-1024x683.jpg',
                    alt: 'Sonnenblumen im Feld',
                },
                {
                    src: 'https://image.stern.de/32816212/t/4s/v3/w1440/r1.7778/-/attacke-van-gogh-sonnenblumen.jpg',
                    alt: 'Sonnenblumen im Museum, Letze Generation',
                }
            ],
            rating: 8,
            comments: [],
            interactions: []
        },
        {
            title: 'Mona Lisa',
            type: 'video',
            objects: [
                {
                    src: 'https://shop.ksta.de/de/upload/Ars_mundi_Leonardo_Da_Vinci_Mona_Lisa001.jpg',
                    alt: 'Mona Lisa Bild',
                },
                {
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2EtB-7IYeSMWKqpZYL-NhIbaROnuAcZWpDGezalmZKLvmw9eWPvUWZ3rhEnzN7rFexI&usqp=CAU',
                    alt: 'Mona Lisa Bild (Zoom)',
                },
                {
                    src: 'https://i.pinimg.com/originals/e1/3b/76/e13b7679ddbd7b55c137d19f5836b89d.jpg',
                    alt: 'Mona Lisa Bild (Mit Bearbeitung)',
                }
            ],
            rating: 2,
            comments: [],
            interactions: ['zoom', 'highlight']
        },
        {
            title: 'Mona Lisa',
            type: 'image',
            objects: [
                {
                    src: 'https://shop.ksta.de/de/upload/Ars_mundi_Leonardo_Da_Vinci_Mona_Lisa001.jpg',
                    alt: 'Mona Lisa Bild',
                },
                {
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2EtB-7IYeSMWKqpZYL-NhIbaROnuAcZWpDGezalmZKLvmw9eWPvUWZ3rhEnzN7rFexI&usqp=CAU',
                    alt: 'Mona Lisa Bild (Zoom)',
                },
                {
                    src: 'https://i.pinimg.com/originals/e1/3b/76/e13b7679ddbd7b55c137d19f5836b89d.jpg',
                    alt: 'Mona Lisa Bild (Mit Bearbeitung)',
                }
            ],
            rating: 5,
            interactions: ['zoom', 'highlight'],
            comments: [],
        },
        {
            title: 'POV Mona',
            type: 'image',
            objects: [
                {
                    src: 'https://placeholder.com/assets/images/150x150-2-500x500.png',
                    alt: 'Bild von Frau am Fenster',
                },
                {
                    src: 'https://placeholder.com/assets/images/150x150-2-500x500.png',
                    alt: 'UV-Entspiegeltes Bild',
                }
            ],
            categories: ['Bild', 'Frau', 'Fenster', 'Antik'],
            rating: 5,
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
            interactions: ['zoom', 'speed'],
            comments: []
        }
    ].map((asset) => {
        return {
            ...asset,
            id: id++,
            objects: asset.objects.map((object) => {
                return {
                    ...object,
                    thumbSrc: object.src,
                }
            })
        }
    })
     */
}
