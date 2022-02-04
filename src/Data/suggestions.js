import { RamdomData } from "../Utils/RamdonData";

const Suggestions = [
    {
        imageProfile: "https://cdn.discordapp.com/attachments/777677791314444298/938506714611863572/anitta_perfil.jpg",
        name: "Anita",
    },
    {
        imageProfile: "https://i.ibb.co/x2YRS2Q/Ama.jpg",
        name: "amablitz",
    },
    {
        imageProfile: "https://cdn.discordapp.com/attachments/777677791314444298/938521384836030494/perfil_ronaldo.jpg",
        name: "ronaldinho",
    },
    {
        imageProfile: "https://cdn.discordapp.com/attachments/777677791314444298/938517331712278538/tomateros_perfil.jpg",
        name: "tomateros",
    },
    {
        imageProfile: "https://cdn.discordapp.com/attachments/777677791314444298/938513911483883550/perfil_chris.jpg",
        name: "chrishemsworth",
    },
    {
        imageProfile: "https://cdn.discordapp.com/attachments/777677791314444298/938512955346157568/perfil_auronplay.jpg",
        name: "auronplay",
    },
];

let DataSuggestions = RamdomData(Suggestions).slice(0, 5);

export { DataSuggestions };