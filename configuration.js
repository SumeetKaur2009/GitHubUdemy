exports.config = { 
		//seleniumAddress: 'http://localhost:4444/wd/hub', 
		specs:['chainlocators.js'],

        capabilities:{'browserName':'firefox'} // to run the test on firefox browser. If not given default will be taken as chrome
				
		};