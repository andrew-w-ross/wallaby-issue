module.exports = function (wallaby) {
	return {
		files: [
			'src/**/*.js'
		],

		tests: [
			'test/*Test.js'
		],
		compilers: {
			'**/*.js': wallaby.compilers.babel()
		},
		workers: {
			initial: 2,
			regular: 2
		},
		env: {
			type: 'node',
			runner: 'node',
			params: {
				env: 'NODE_ENV=test'
			}
		},
		setup: function (wallaby) {
			console.log(wallaby.projectCacheDir)
			global.__testConfig = { workerId: wallaby.workerId }
		}
	}
}
