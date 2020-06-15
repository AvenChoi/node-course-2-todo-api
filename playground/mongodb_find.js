const {MongoClient,ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,client)=>{
	if(err){
		console.log("connect fail");
		return
	}
	console.log("connect to the db server");
	const db = client.db('TodoApp');
	db.collection('Todos').find({completed:false}).count().then(
		(count)=>{
		console.log('find Todos');
		console.log(count);},
		(err)=>{
			console.log('unable to find todos',err)
		});
	client.close();
})