db.items.find()
db.items.find({rating:3.5})
db.items.find({rating:{$gte:3.5}})
db.items.find({rating:{$gte:3.5},price:{$gt:4000}})
db.items.find({$or:[{rating:{$gte:3.5}},{price:{$gt:4000}}]})
db.items.find({rating:{$gt:3.5}},{rating:1})
db.items.find({qty:{$gt:288}},{qty:1})
//  finding regarding to only quantity
