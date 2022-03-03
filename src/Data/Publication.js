import { RamdomData } from "../Utils/RamdonData";

const Publication = [
    {
        imageProfile: "https://cdn.discordapp.com/attachments/777677791314444298/938506714611863572/anitta_perfil.jpg",
        name: "Anita",
        image: "https://cdn.discordapp.com/attachments/777677791314444298/938506714259529748/anitaa.jpg",
        statusHystories: true,
        comentarios: 120,
        likes: 342,
        time: "hace 1 hora",        
        description: "No nos cansamos de ver los lanzamientos y aterrizajes del Falcon 9. ¿Apoco no es impresionante? 🚀"
    },
    {
        imageProfile: "https://i.ibb.co/x2YRS2Q/Ama.jpg",
        name: "amablitz",
        image: "https://i.ibb.co/3mP1sxT/Amabliz-P1.jpg",
        statusHystories: true,
        comentarios: 1050,
        likes: 666115,
        time: "28 de enero",        
        description: "Que vibes les da este outfit de @fashionnova ? 💖 ✨fashionnovapartner ✨"
    },
    {
        imageProfile: "https://i.ibb.co/x2YRS2Q/Ama.jpg",
        name: "amablitz",
        image: "https://i.ibb.co/XDdtB2r/Amabliz-P3.jpg",
        statusHystories: true,
        comentarios: 2743,
        likes: 863138,
        time: '3 de julio de 2021',        
        description: "Loca Peligrosa 🔥"
    },
    {
        imageProfile: "https://i.ibb.co/x2YRS2Q/Ama.jpg",
        name: "amablitz",
        image: "https://i.ibb.co/VVFNjFK/Amabliz-P2.jpg",
        statusHystories: true,
        comentarios: 291,
        likes: 178151,
        time: "21 de enero",        
        description: "Me siento La Gaviota, en esa foto jajajaja 😂😂😂"
    },
    {
        imageProfile: "https://i.ibb.co/jJQPN6k/arigameplays.jpg",
        name: "arigameplays",
        image: "https://i.ibb.co/C21bT3j/arigameplays-P1.jpg",
        statusHystories: true,
        comentarios: 1159,
        likes: 566502,
        time: "31 de diciembre de 2021",        
        description: "No puedo estar más agradecida de que hayas sido parte de mi 2021, hoy soltamos un gran año para prepáranos para recibir este 2022 con mi mejor versión de mi misma, gracias por tu apoyo incondicional y espero que igual esté 2022 seas parte de mi! Este va ser nuestro año 🥰💓 2️⃣0️⃣2️⃣1️⃣👋🏻"
    },
    {
        imageProfile: "https://i.ibb.co/jJQPN6k/arigameplays.jpg",
        name: "arigameplays",
        image: "https://i.ibb.co/6WgdL8t/arigameplays-P2.jpg",
        statusHystories: true,
        comentarios: 936,
        likes: 603083,
        time: "14 de diciembre de 2021",        
        description: "Ayer fuimos a cenar con nuestros amigos bellos.",
    },
    {
        imageProfile: "https://i.ibb.co/9hyVb8R/caeliyt.jpg",
        name: "caeliyt",
        image: "https://i.ibb.co/ZgzGp6v/Caeli.jpg",
        statusHystories: true,
        comentarios: 213,
        likes: "60143",
        time: "Hace un dia",        
        description: "Se viene algo muy cool vdd @goldenescorpion ?🔥"
    },
    {
        imageProfile: "https://i.ibb.co/pKJzLH1/freddiervega.jpg",
        name: "freddiervega",
        image: "https://i.ibb.co/TL36Bfb/FreddyP1.jpg",
        statusHystories: true,
        comentarios: 65,
        likes: 4596,
        time: "3 de Noviembre de 2021",        
        description: "🚜 Startups"
    },
    {
        imageProfile: "https://i.ibb.co/pKJzLH1/freddiervega.jpg",
        name: "freddiervega",
        image: "https://i.ibb.co/1mzvCc3/FreddyP2.jpg",
        statusHystories: true,
        comentarios: 20,
        likes: 2527,
        time: "19 de septiembre de 2021",        
        description: "💚 Ayer fue un gran día. La mejor #PlatziConf que hemos hecho."
    },
    {
        imageProfile: "https://i.ibb.co/mBtfDV8/cryptonary.jpg",
        name: "cryptonary",
        image: "https://i.ibb.co/pdL9VrR/cryptonary-P1.jpg",
        statusHystories: true,
        comentarios: 121,
        likes: 3880,
        time: "Hace un 7 dias",        
        description: `he man, the myth, the legend or as some may call it… 'that orange coin' has broke over $40,000 this weekend.
        Where do you see the markets heading this month? 💭`
    },    
    {
        imageProfile: "https://i.ibb.co/N6SDm7D/playgroundmag.jpg",
        name: "playgroundmag",
        image: "https://i.ibb.co/y8NNrdq/playgroundmag-P1.jpg",
        statusHystories: true,
        comentarios: 227,
        likes: 5623,
        time: "hace un dia",        
        description: `Sin embargo, ellas son más del 70% en los estudios de medicina, ¿por qué? 
        #DiaDeLaMujeryLaNinaEnLaCiencia #11F `
    },

    {
        imageProfile: "https://i.ibb.co/N6SDm7D/playgroundmag.jpg",
        name: "playgroundmag",
        image: "https://i.ibb.co/m8Z0ZFb/playgroundmag-P2.jpg",
        statusHystories: true,
        comentarios: 769,
        likes: 2715,
        time: "Hace horas",        
        description: `¿Una pandemia mundial? Ah no, espera, que eso ya está pasando 🔥`
    },
    {
        imageProfile: "https://i.ibb.co/RzyX8R2/yuyacst.jpg",
        name: "yuyacst",
        image: "https://i.ibb.co/nbzCPJw/yuyacst-P1.jpg",
        statusHystories: true,
        comentarios: 1258,
        likes: 845477,
        time: "hace 4 dias",        
        description: `¿Qué te cuenta la vida?`
    },
    {
        imageProfile: "https://i.ibb.co/RzyX8R2/yuyacst.jpg",
        name: "yuyacst",
        image: "https://i.ibb.co/y4k787N/yuyacst-P2.jpg",
        statusHystories: true,
        comentarios: 1337,
        likes: 731581,
        time: "21 de diciembre de 2021",        
        description: `¡👋🏽 Hola desde mi cueva!`
    },
    {
        imageProfile: "https://i.ibb.co/DC7sGBq/enchufetv.jpg",
        name: "enchufetv",
        image: "https://i.ibb.co/xh6hwtF/enchufetv-P1.jpg",
        statusHystories: true,
        comentarios: 161,
        likes: 29886,
        time: "11 de enero",        
        description: `"Yo miro los Premios Oscarín 10 años de Enchufe por la trama"`
    },
    {
        imageProfile: "https://i.ibb.co/DC7sGBq/enchufetv.jpg",
        name: "enchufetv",
        image: "https://i.ibb.co/qmcvGbp/enchufetv-P2.jpg",
        statusHystories: true,
        comentarios: 12,
        likes: 6027,
        time: "hace 2 dias",        
        description: `No pregunten cómo Chewbacca llegó ahí. solo gócenlo. Un TBT que pudo provocar una guerra espacial 🛸🔫`
    },
    
    {
        imageProfile: "https://i.ibb.co/tz9nbnW/luisitocomunica.jpg",
        name: "luisitocomunica",
        image: "https://i.ibb.co/GpsPSDt/luisitocomunica-P1.jpg",
        statusHystories: true,
        comentarios: 2666,
        likes: 969252,
        time: "hace un dia",        
        description: `Luisito Comunica graba a Luisito Comunica`
    },
    {
        imageProfile: "https://i.ibb.co/tz9nbnW/luisitocomunica.jpg",
        name: "luisitocomunica",
        image: "https://i.ibb.co/vkbn61j/luisitocomunica-P2.jpg",
        statusHystories: true,
        comentarios: 11934,
        likes: 2249369,
        time: "5 de enero",        
        description: `Portada de Playboy. Qué inesperado, pero qué cool 🤣`
    },



    //react-query
    //mongoose

    

    // {
    //     image: "",
    //     statusHystories: true,
    //     comentarios: ,
    //     likes: ,
    //     time: "",        
    //     description: ``
    // },
    // {
    //     image: "",
    //     statusHystories: true,
    //     comentarios: ,
    //     likes: ,
    //     time: "",        
    //     description: ``
    // },








    // {
    //     imageProfile: "",
    //     name: "",
    //     image: "",
    //     statusHystories: true,
    //     comentarios: ,
    //     likes: ,
    //     time: "",        
    //     description: ``
    // },
];

let DataPublication = RamdomData(Publication);

export { DataPublication };