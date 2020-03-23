//Créer une collection sport (3-4 fields)

db.createCollection("sport")

//Mettre trois champs dans un attribut + ajouter avec upsert: title et requiredTeam (bool)

db.sports.insertOne({ object: "ballon", nbPlayer: 11, coach: "Mr Parkinson", tournoi: true })

db.sports.updateMany({}, { $set: { requiredTeam: true, title: "football" } })

db.sports.insertMany([{ object: "ballon", nbPlayer: 8, coach: "Polnareff", tournoi: false }, { object: "raquette", nbPlayer: 2, coach: "Pique", tournoi: false }])

