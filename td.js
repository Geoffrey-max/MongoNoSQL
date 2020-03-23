//Créer une collection sport (3-4 fields)

db.createCollection("sport")

//Mettre trois champs dans un attribut + ajouter avec upsert: title et requiredTeam (bool)

db.sports.insertOne({ object: "ballon", nbPlayer: 11, coach: "Mr Parkinson", tournoi: true })

db.sports.insertMany([{ object: "ballon", nbPlayer: 8, coach: "Polnareff", tournoi: false }, { object: "raquette", nbPlayer: 2, coach: "Pique", tournoi: false }])

db.sports.updateMany({}, { $set: { requiredTeam: true, title: "football" } })


//Mettre un nouveau champ à ceux qui ont requiredTeam

db.sports.updateMany({ requiredTeam: true }, { $set: { couleur: "rouge" } }, { upsert: true })

//Mettre à jour tous les documents qui ont requiredTeam, en augmentant le  <nom de notre choix> par 10

db.sports.updateMany({ requiredTeam: true }, { $inc: { nbPlayer: 10 } }, { upsert: true })

//Ajouter un nouveau champ teams , pour les documents qui ont le requiredTeam

db.sports.updateMany({ requiredTeam: true }, { $set: { team: [{ name: "Leo", nombre: "1" }, { name: "Geoffrey", nombre: "2" }] } }, { upsert: true })

//Mettre à jour tous les elements de teams, avec le nouveau champ titulaire

db.sports.updateMany({ team: { $exists: true } }, { $set: { "team.$[].titulaire": true } }, { upsert: true })
