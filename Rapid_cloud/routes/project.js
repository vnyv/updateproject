var http = require('http');
var express = require('express');
var app     = express();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var pg = require("pg");
var async = require("async");

var conString = "pg://postgres:cloud123@172.29.59.63:5432/Rapid";
var url = 'mongodb://172.29.59.100:27017/test';


var client_pg = new pg.Client(conString);


exports.project_page = function(req,res){
	res.render('project');
};
exports.project_view = function(req,res){
	res.render('project_view');
};


exports.attach_devops = function(req, res){
	client_pg.query("", function(err, result){
	if(err){
	throw err;
	}
	var rows = result.rows;
	res.render('attach_devops', {data : rows});
	 });	 
};



var GitHub = require('github-api');
var Promise = require("es6-promise").Promise;

var bitbucket = require('bitbucket-api');
var credentials = {username:'gannykumar', password:'carborandum12#4'};
var client = bitbucket.createClient(credentials);

var jenkinsapi = require("jenkins-api");
//var jenkins = jenkinsapi.init("http://sonatawkins.cloudapp.net:8080");


//by default all requests are unauthenticated
//unauthenticated clients are limited to 60 request per hour
var noAuth = new GitHub();

//you can authenticate with username and password
/*
var passwordAuth = new GitHub({
username: 'rahulkumardbit',
password: 'Cloudrapid1'
});
console.log(passwordAuth);

//you can also provide an OAuth token to authenticate the requests
//var oauthAuth = new GitHub({
//token: 'MY_OAUTH_TOKEN'
//});

*/

var u_name;
var pass;
var repo_data;

exports.repoLogin = function(req, res){
	console.log(req.body);
	res.setHeader("Access-Control-Allow-Origin", "*");
		 u_name = req.body.username;
		 pass = req.body.password;

		var repos;
		var repo_names = [];
		var webhook_url = [];
		var repo_list = [];
		var repo_url = [];
		var branch_list = [];
		var repo;


		var gh = new GitHub({
		   username: u_name,
		   password: pass
		});


		const me = gh.getUser();
		me.listNotifications(function(err, notifcations) {
		   //console.log(notifcations);
		});


		me.listRepos()
		.then(function(data){
			repo_data = data;
		 repos = data.data.length;		 
		 //console.log(repos);
		 for (var i =0; i<repos; i++){
			 repo_names[i] = data.data[i].full_name;
			 //console.log(repo_names[i]);
			 webhook_url[i] = data.data[i].hooks_url;
			 //console.log (webhook_url[i]);
			 repo_list[i] = data.data[i].name;
			 //console.log(repo_list[i] + " " + u_name);
			
		 }
		  
		  res.send(repo_list);
		});
		//console.log(branch_list);
}
		   
		    
exports.repoWebhook = function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	var d1 = req.body.repName;
	console.log(d1);
	var selRepo = d1;
	//selRepo = d1.split(",");
	//console.log(selRepo);
	//selength = selRepo.length;
	//console.log(selength);
	console.log(repo_data.data.length)
	repo_obj = {};
	repo_arr =[];
	
	
	var gh = new GitHub({
		   username: u_name,
		   password: pass
		});
	
	const me = gh.getUser();
	repo = gh.getRepo(u_name, selRepo);
	repo.listBranches()
	.then(function(data){
		console.log(data.data);
		for (var j=0;j<repo_data.data.length;j++){
			if(selRepo == repo_data.data[j].name){
				repo_obj.username = u_name;
				repo_obj.password = pass;
				repo_obj.webhook_url = repo_data.data[j].hooks_url;
				repo_obj.branch_url = repo_data.data[j].branches_url;
				repo_obj.name = repo_data.data[j].name;
				repo_obj.branches = data.data;
			}		
		}
		console.log(repo_obj);
		repo_arr = repo_obj;
		MongoClient.connect(url, function (err, db) {
		  if (err) {
						console.log('Unable to connect to the mongoDB server. Error:', err);
				   } else {
					console.log('Connection established');	
					var instance = db.collection('repo_credentials');
					instance.insert(repo_arr, function (err, result) {
		      				if (err) {
		        					console.log(err);
		     					 } else {
		        		console.log('Inserted values sucess fully');
						//var obj = {"data" : "OK"};
            				res.send(repo_obj);
		      			}
		      			db.close();
		    			});					
				}		 

				   });
	
	
		
	});
	
	
	
	//for (var i =0; i<selength; i++){
		
		
	//}
			
		
}

/*		   
		   
		// Webhooks for Github

		var fork = gh.getRepo(u_name, 'web');
		var branch = fork.listBranches();
		//console.log(branch);
		console.log(fork);

		var hookDef = [{
		  "name" : "web",
		  "config" : {
			"user" : u_name,
			"token" : "00000000000000000000000000",
			"url" : "http://sonatawkins.cloudapp.net:8080",
			"content_type": "json"
		  },
		  "events" : ["push", "pull_request"],
		  "active" : true
		}]
		 
		fork.createHook(hookDef)
		  .then(function(data) {
			console.log(data);
			})
		  .catch(function(error) {
			control.log(error);
		  });
		 
  */
 
/* 
  jenkins.all_jobs(function(err, data) {
  if (err){ return console.log(err); }
  //console.log(data)
});

jenkins.job_info('Build+Unit-test+Code_Quality+Code_Coverage', function(err, data) {
  if (err){ return console.log(err); }
  //console.log(data)
});
  
  jenkins.get_config_xml('Master_Build', function(err, data) {
  if (err){ return console.log(err); }
  //console.log(data)
});
 */
 
 