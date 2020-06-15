const {MongoClient,ObjectID} = require("mongodb");
var obj = new ObjectID();
console.log(obj);
MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
	if(err){
		console.log("some wrong happened");
		return
	}
	console.log("connect success");
	const db = client.db("TodoApp");
	db.collection("Todos").insertOne({
		text:"Walk the dog",
		completed:false
	},(err,result)=>{
		if(err){
			console.log('insert err: ',err);
			return
		}
		console.log(JSON.stringify(result.ops,undefined,2))
	})
	// db.collection("Users").insertOne({
	// 	name:"Andrew",
	// 	age:25,
	// 	location:'Philadelphia'
	// },(err,result)=>{
	// 	if(err){
	// 		console.log('insert err: ',err);
	// 		return
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());
	// })
	client.close();
});
