import shoes from '../assets/imgs/shoes.svg'

export const list_catalog = [
    {id: 1, img: shoes, name: 'NEON LIME', price: '299.000,00', ribbon: {type: 'discount', value: 80}, sizes: ['M', 'L', 'XL']},
    {id: 2, img: shoes, name: 'NEON YELLOW', price: '150.000,00', ribbon: 'new', sizes: ['S', 'L', 'XL']},
    {id: 3, img: shoes, name: 'NEON RED', price: '100.000,00', ribbon: 'best', sizes: ['S', 'L', 'XL']},
    {id: 4, img: shoes, name: 'HEJO SAGE', price: '999.000,00', ribbon: null, sizes: ['S', 'XL', '2XL']},
    {id: 5, img: shoes, name: 'WHITESMOKE', price: '109.000,00', ribbon: 'best', sizes: ['M', 'L', 'XL']},
    {id: 6, img: shoes, name: 'GREEN', price: '288.000,00', ribbon: {type: 'discount', value: 30}, sizes: ['M', 'L', 'XL']}
]

export const getCatalogById = (id) => {
    const itemId = parseInt(id)
    return list_catalog.find((item) => item.id === itemId )
}

export const hashtag  = 'GOODCHOICE'