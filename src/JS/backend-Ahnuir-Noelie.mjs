import PocketBase from "pocketbase" ;
const db = new PocketBase("http://127.0.0.1:8090") ;


export async function getOffres() {
try {
       let data = await db.collection('Maison').getFullList({
              sort: '-created',
       });

       data = data.map((Maison) => {
              Maison.imageUrl = `${db.baseURL}/api/files/maison/${Maison.id}/${Maison.images}`;
              return Maison;
       });

       return data;
} catch (error) {
       console.log('Une erreur est survenue en lisant la liste des maisons', error);
       return [];
}
}

export async function oneID(id) {
       const record = await db.collection('Maison').getOne(id);
       return record;
       }

/*try { const records = await pb.collection("Maison").getFullList() ;
    console.table(records) ;
    } catch (e) {
    console.error(e) ;
    }*/


// 6- await pb.collection("Maison").getOne(rsiq4f2j1p7502g) ;

// 7- await pb.collection("Maison").getFullList({ sort:"created", }) ;

// 8- await pb.collection("Maison").getFullList({ sort:'-created', }) ;

// 9- await pb.collection("Maison").getFullList({ filter:'favori = true', }) ;

// 10- await pb.collection("Maison").getFullList({ filter:'surface > 100', }) ;

// 11- await pb.collection("Maison").getFullList({ filter:'surface > 100 && ndSdb >= 2', }) ;

// 12- await pb.collection("Maison").getFullList( {filter: 'surface> 100 || ndChambre >= 3', });

// 13- await pb.collection("Maison").getFullList( {filter: 'surface> 100', sort: 'prix', }) ;

// 14- await pb.collection("Maison").getFullList( { sort: 'nomMaison', }) ;

// 15- await pb.collection("Maison").getFullList( { filter: 'nomMaison = "Maison de Ville"', }) ;

// 16- await pb.collection("Maison").getFullList( { filter: 'nomMaison != "Maison de Ville"',  sort: 'nomMaison', }) ;

/*try { const Onerecord = await pb.collection("Maison").getFullList( { filter: 'nomMaison != "Maison de Ville"',  sort: 'nomMaison', }) ;
       console.table(Onerecord) ;
    
       } catch (e) {
        console.error(e) ;
        }*/