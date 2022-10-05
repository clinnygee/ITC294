export function getAllProductsIds(){
    return [
        {
            params: {
                id: '1',
            }
        },
        {
            params: {
                id: '2',
            }
        },
        {
            params: {
                id: '3',
            }
        },
        {
            params: {
                id: '4',
            }
        },
    ];
}

export function getProductData(id){
    
    console.log('This is the passed id' + id);
    const items = [
        {
            id: 1,
            name: 'Red Dress',
            price: 99.99,
            sizes: [
                {
                    size: 6,
                    available: true
                },
                {
                    size: 8,
                    available: true
                },
                {
                    size: 10,
                    available: true
                },
                {
                    size: 12,
                    available: true
                },
                {
                    size: 14,
                    available: true
                },
                {
                    size: 16,
                    available: true
                }
            ],
            images: {
                image1: 'https://294website.s3.ap-southeast-2.amazonaws.com/images/ussama-azam-9ClwsmOgPM4-unsplash.jpg',
                image2: 'https://294website.s3.ap-southeast-2.amazonaws.com/images/tamara-bellis-8Aq_zfMHPbU-unsplash.jpg'
            }
        },
        {
            id: 2,
            name: 'Blue Dress',
            price: 79.99,
            sizes: [
                {
                    size: 6,
                    available: false
                },
                {
                    size: 8,
                    available: false
                },
                {
                    size: 10,
                    available: false
                },
                {
                    size: 12,
                    available: false
                },
                {
                    size: 14,
                    available: true
                },
                {
                    size: 16,
                    available: true
                }
            ],
            images: {
                image1: 'https://294website.s3.ap-southeast-2.amazonaws.com/images/chalo-garcia-alcLDJ6QxD0-unsplash.jpg',
                image2: 'https://294website.s3.ap-southeast-2.amazonaws.com/images/chalo-garcia-dGcSQgiIK4c-unsplash.jpg'
            }
        },
        {
            id: 3,
            name: 'Green Dress',
            price: 79.99,
            sizes: [
                {
                    size: 6,
                    available: true
                },
                {
                    size: 8,
                    available: false
                },
                {
                    size: 10,
                    available: true
                },
                {
                    size: 12,
                    available: true
                },
                {
                    size: 14,
                    available: true
                },
                {
                    size: 16,
                    available: true
                }
            ],
            images: {
                image1: 'https://294website.s3.ap-southeast-2.amazonaws.com/images/hanen-souhail-EnrurZ62WUI-unsplash.jpg',
                image2: 'https://294website.s3.ap-southeast-2.amazonaws.com/images/jesus-eca-wLrjDSdg9VI-unsplash.jpg'
            }
        },
        {
            id: 4,
            name: 'Yellow Dress',
            price: 12.99,
            sizes: [
                {
                    size: 6,
                    available: true
                },
                {
                    size: 8,
                    available: true
                },
                {
                    size: 10,
                    available: true
                },
                {
                    size: 12,
                    available: false
                },
                {
                    size: 14,
                    available: true
                },
                {
                    size: 16,
                    available: true
                }
            ],
            images: {
                image1: 'https://294website.s3.ap-southeast-2.amazonaws.com/images/alice-alinari-gSbSxf-4GNQ-unsplash.jpg',
                image2: 'https://294website.s3.ap-southeast-2.amazonaws.com/images/astghik-khachatryan-K3dZa39ReUQ-unsplash.jpg'
            }
        }
    ]
    console.log(items.filter(item => {
        console.log(item.id);
        console.log(item.id == id);
        item.id == id
    }));

    const test = items.filter(item => {
        return item.id == id
    });
    console.log(test);
    return items.filter(item => {
        return item.id == id
    })[0];
}