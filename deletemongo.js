show dbs
use Skart
show collections
db.items.find({price:22000})

db.items.deleteOne({price:22000})

db.items.deleteMany({price:22000})

