var AWS = require('aws-sdk');

AWS.config.update({accessKeyId: 'AKIAIUHKYOX5NVTS55IA', 
	  secretAccessKey: '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',
	  });


AWS.config.update({region: 'us-east-1'});

var ec2 = new AWS.EC2();

var params = {
		  Groups: [ 
		    'sg-47fb243f',
		    
		  ],
		  InstanceId: 'i-782cc9fb', 
		  VpcId: 'vpc-20e1c644', 
		  //DryRun: false
		};
/*new AWS.EC2().attachClassicLinkVpc(params, function(err, data) {
		  if (err) console.log(err, err.stack); // an error occurred
		  else     console.log("Success"+data);           // successful response
		});

new AWS.EC2().describeInstances(function(error, data) {
	  if (error) {
	    console.log(error); // an error occurred
	  } else {
	    console.log((data.Reservations)[0].Instances); // request succeeded
	    console.log((data.Reservations)[1].Instances);
	  }
	});*/