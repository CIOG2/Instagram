function RamdomData(Data) {
    let DataRamdom = [];
    let cycles = Data.length;

    for (let i = 0; i < cycles; i++) {
        let numberRamdon = Math.floor(Math.random() * Data.length);
        DataRamdom.push(Data[numberRamdon]);
        Data.splice(numberRamdon, 1);
    }

    return DataRamdom;
}

export { RamdomData };