export const urlapleiro = {
    knev:{
        megjelenes:"keresztnév",
        tipus:"text",
        value:"", 
        placeholder:"Valaki",
        regex:"[A-Z][a-z]{2,15}",
        validalas:"Név nagybetűvel kezdődik, és legalább 3 karakter"
    },
    vnev:{
        megjelenes:"vezetéknév",
        tipus:"text",
        value:"", 
        placeholder:"Valaki1",
        regex:"[A-Z][a-z]{2,15}",
        validalas:"Név nagybetűvel kezdődik, és legalább 3 karakter"
    },
    szulEv:{
        megjelenes:"Születési év",
        tipus:"number",
        value:"2000", 
        regex:{
            min:1000,
            max:2023
        },
        validalas:"1000 és 2023 között kell legyen!"
    }
}