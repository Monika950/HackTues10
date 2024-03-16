const images = [
    {
        id: 1, 
        image: 'https://anonybulgaria.files.wordpress.com/2015/03/640x480_f5f8c60c81f755b0a6c6396da2492a97.jpg?w=575&h=431',
        folder: 1,
    },
    {
        id: 2, 
        image: 'https://kmeta.bg/wp-content/uploads/2021/03/57786714-b284-7ae1.jpg',
        folder: 1,
    },
    {
        id: 3, 
        image: 'https://anonybulgaria.files.wordpress.com/2015/03/10986887_648110855295316_5896261356351076132_o.jpg?w=449&h=598',
        folder: 1,
    },
    {
        id: 4, 
        image: 'https://anonybulgaria.files.wordpress.com/2015/03/dsc_0341-e1425728037747.jpg?w=640',
        folder: 1,
    },
    {
        id: 5, 
        image: 'https://frankfurt.apollo.olxcdn.com/v1/files/94oi1ljvpma52-BG/image',
        folder: 1,
    },
    {
        id: 6, 
        image: 'https://frankfurt.apollo.olxcdn.com/v1/files/a0pn77l5eahp1-BG/image',
        folder: 1,
    },
    {
        id: 7, 
        image: 'https://i.ebayimg.com/images/g/B4IAAOSw4wBktsKP/s-l400.jpg',
        folder: 1,
    },
    {
        id: 8, 
        image: 'https://i.ebayimg.com/images/g/kw8AAOSwhRJktsKO/s-l1600.jpg',
        folder: 1,
    },
    {
        id: 9, 
        image: 'https://npr.brightspotcdn.com/dims4/default/fa7c5ae/2147483647/strip/true/crop/1095x739+0+0/resize/880x594!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkut%2Ffiles%2F201611%2FHistory-of-Texas_shot6.jpg',
        folder: 1,
    },
    {
        id: 10, 
        image: 'https://www.book.store.bg/prdfile/fls/202131/330350/istoria-i-civilizacii-za-6-klas-stranici-ot-tozi-uchebnik.jpg',
        folder: 1,
    },
    {
        id: 11, 
        image: 'https://i.redd.it/w84mo0oms6j71.jpg',
        folder: 1,
    },
    {
        id: 12, 
        image: 'https://npr.brightspotcdn.com/dims4/default/a21139b/2147483647/strip/true/crop/1042x1430+0+0/resize/880x1208!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkut%2Ffiles%2F201611%2FHistory-of-Texas_shot5.jpg',
        folder: 1,
    },
    {
        id: 13, 
        image: 'https://askabiologist.asu.edu/sites/default/files/styles/biology_bit_1280x785/public/biology-bits-honey-bee-2.jpg?itok=FJXJrZw_',
        folder: 2,
    },
    {
        id: 14, 
        image: 'https://images.slideplayer.com/31/9748012/slides/slide_2.jpg',
        folder: 2,
    },
    {
        id: 15, 
        image: 'https://images.slideplayer.com/18/5687393/slides/slide_2.jpg',
        folder: 2,
    },
    {
        id: 16, 
        image: 'https://slideplayer.com/slide/3866286/13/images/3/Information+from+the+Cosmos.jpg',
        folder: 2,
    },
    {
        id: 17, 
        image: 'https://cdn.britannica.com/79/65379-050-5CF52BAC/Shortfin-mako-shark-seas.jpg',
        folder: 3,
    },
    {
        id: 18, 
        image: 'https://cdn.britannica.com/79/65379-050-5CF52BAC/Shortfin-mako-shark-seas.jpg',
        folder: 3,
    },
    {
        id: 19, 
        image: 'https://cdn.britannica.com/79/65379-050-5CF52BAC/Shortfin-mako-shark-seas.jpg',
        folder: 3,
    },
    {
        id: 20, 
        image: 'https://cdn.britannica.com/79/65379-050-5CF52BAC/Shortfin-mako-shark-seas.jpg',
        folder: 3,
    },
    {
        id: 21, 
        image: 'https://cdn.britannica.com/79/65379-050-5CF52BAC/Shortfin-mako-shark-seas.jpg',
        folder: 3,
    },
    {
        id: 22, 
        image: 'https://cdn.britannica.com/79/65379-050-5CF52BAC/Shortfin-mako-shark-seas.jpg',
        folder: 3,
    },
    {
        id: 23, 
        image: 'https://cdn.britannica.com/79/65379-050-5CF52BAC/Shortfin-mako-shark-seas.jpg',
        folder: 3,
    },
    {
        id: 24, 
        image: 'https://files.worldwildlife.org/wwfcmsprod/images/Shark_Porbeagle_GPN257609_Species/carousel_small/estb55vv8_GPN257609_porbeagle_shark.jpg',
        folder: 4,
    },
    {
        id: 24, 
        image: 'https://cdn.britannica.com/79/65379-050-5CF52BAC/Shortfin-mako-shark-seas.jpg',
        folder: 4,
    },
    {
        id: 24, 
        image: 'https://cdn.britannica.com/79/65379-050-5CF52BAC/Shortfin-mako-shark-seas.jpg',
        folder: 4,
    },
    {
        id: 25, 
        image: 'https://media.discordapp.net/attachments/1201588977401077911/1218401050684428318/Screenshot_20240316_052912_Samsung_Internet.jpg?ex=66078767&is=65f51267&hm=f87343dccda1e9dfb0463ecca3a256c87b0c91f4bf3aba4d93901899fc041c1f&=&format=webp',
        folder: 5,
    },
    {
        id: 25, 
        image: 'https://media.discordapp.net/attachments/1201588977401077911/1218401051032686693/Screenshot_20240316_052920_Samsung_Internet.jpg?ex=66078767&is=65f51267&hm=e25c919c5c60abdcb09b30c7479663abed310bef33d06f8fc804768b9437a347&=&format=webp',
        folder: 5,
    },
];

export default images;