const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {


    //inserir dados na tabela
    // await saveOrphanage(db, {
    // lat: "-27.222381",
    // lng: "-49.6345013",
    // name:"Lar dos Meninos",
    // about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    // whatsapp: "988525578",
    // images: [
    //     "https://images.unsplash.com/photo-1572248364230-7f412885f2da?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    // "https://images.unsplash.com/photo-1570570626315-95c19358f053?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"  
    //         ].toString(),
    // instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",        
    // opening_hours:"Horário de visitas Das 18h até 8h",
    // open_on_weekends: "0"  
    // }) 

    // //consultar dados da tabela
    // const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    // console.log(selectedOrphanages)

//    // consultar somente 1 orfanato, pelo id
//    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "5"')
//    console.log(orphanage)

   //deletar todas as tabelas

   const deletarTudo = await db.all('DROP TABLE orphanages')

   

})