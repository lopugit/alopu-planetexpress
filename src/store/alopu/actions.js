/*
export const someAction = (store) => {
}
*/
import smarts from 'smarts'
// import flamelink from 'flamelink'
import firebase from 'firebase'
import axios from 'axios'
import 'firebase/firestore'
import CJSON from 'circular-json'
import UAParser from 'ua-parser-js'
import { Notify } from 'quasar'

var notify = Notify
var uap = new UAParser()
var fs = initFirestore()
var things = fs.collection('things') // global things collection reference
var s = smarts()

export const switchUser = (store, args) => {
	var things = fs.collection('things')
	args.clientId = store.state.clientId
	// AUTH SOURCE == FB
	if(args.provider == 'facebook' && args.success){
		var userID = s.getsmart(args, 'token.authResponse.userID', undefined)
		args.entity = {
			ids: {
				"userID-facebook": userID
			},
			facebook: {
				id: userID,
				tokens: [
					args.token
				]
			},
			registered: {
				facebook: true
			}
		}
		/** AUTHENTICATE THE PROVIDER TOKEN & SYNC THE USER WITH THE GLOBAL STATE */
			syncUser(args)
			.then((args)=>{
				if(args.success){
					var fsid = s.getsmart(args, 'entity.firestore.id', false)
					if(fsid){
						firebaseAuth(args)
						.then(args=>{
							/** create DocumentReference */
								var ref = things.doc(fsid) 
							/** set loggedIn status for this userAgent */
								var loggedIn = s.gosmart(args, 'entity.loggedIn', {})
								if(loggedIn){
									loggedIn[store.getters.userAgentNormalised] = true
								}
							/** add facebook token to facebook tokens list */
								if(args.entity.facebook){
									if(args.entity.facebook.tokens){
										args.entity.facebook.tokens.push(args.token)
									}
								}
							/** add facebook email to entity and some other facebook data */
								var facebookEmailLink = new Promise((resolve, reject)=>{
									FB.api('/me?locale=en_US&fields=name,email,picture', user=>{
										if(user.email){
											args.entity.ids["email-facebook"] = user.email
										}
										if(user){
											Object.assign(args.entity.facebook, user)
											s.setsmart(args, 'entity.facebook.picture', user.picture)
										}
										resolve(true)
									})
								})
							/** wait for the facebook data link and then set any new entity data */
								facebookEmailLink
								.then(()=>{
									ref.set(CJSON.parse(CJSON.stringify(args.entity)), {merge: true})
									.then(()=>{
										args.feedback = {
											message: `Welcome ${args.entity.facebook.name}. You have successfully ${args.newEntity ? 'signed up' : 'logged in'} with your Facebook acccount`,
											color: 'positive',
											timeout: 4000,
											position: 'top-right'
										}
										store.dispatch('switchUserSuccess', args)
									})
									.catch(err=>{
										console.error('there was an error processing a login attempt via Facebook because of firebase', err)
										args.feedback = {
											message: `There was an error logging in with your Facebook account`,
											color: 'negative',
											timeout: 4000,
											position: 'top-right'
										}
										store.dispatch('switchUserFailure', args)
									})
								})
								.catch(err=>{
									console.error('something went wrong getting more Facebook data to link to the entity: ', err)
									args.feedback = {
										message: `There was an error logging in with your Facebook account`,
										color: 'negative',
										timeout: 4000,
										position: 'top-right'
									}
									store.dispatch('switchUserFailure', args)
								})
						})
						.catch(err=>{
							console.error('Something went wrong authenticating the user with firebase: ', err)
							args.feedback = {
								message: `There was an error logging in with your Facebook account`,
								color: 'negative',
								timeout: 4000,
								position: 'top-right'
							}
							store.dispatch('switchUserFailure', args)
						})
						
					} else {
						console.error("there was an error processing a login attempt via Facebook because there's no firestore id assosciated with the entity, context @param args: ", args)
						args.feedback = {
							message: `There was an error logging in with your Facebook account`,
							color: 'negative',
							timeout: 4000,
							position: 'top-right'
						}
						store.dispatch('switchUserFailure', args)
					}
				} else {
					console.error('there was an error processing a login attempt via Facebook during token authentication server side, context @param args: ', args)
					args.feedback = {
						message: `There was an error logging in with your Facebook account`,
						color: 'negative',
						timeout: 4000,
						position: 'top-right'
					}
					store.dispatch('switchUserFailure', args)
				}
			})
			.catch((err)=>{
				console.error('Something went wrong syncing the user with the database: ', err)
				args.feedback = {
					message: `There was an error logging in with your Facebook account`,
					color: 'negative',
					timeout: 4000,
					position: 'top-right'
				}
				store.dispatch('switchUserFailure', args)

			})
	
		
	} 
	// AUTH SOURCE == GOOGLE
	else if(args.provider == 'google'){
		var userID = s.getsmart(args, 'token.El', undefined)
		/** google specific cleaning */
			args.token.w3 = Object.assign({}, args.token.w3)
		args.entity = {
			ids: {
				"El-google": userID,
				"email-google": args.token.w3.U3
			},
			google: {
				id: userID,
				tokens: [
					args.token
				]
			},
			registered: {
				google: true
			}
		}
		/** AUTHENTICATE THE PROVIDER TOKEN & SYNC THE USER WITH THE GLOBAL STATE */
			syncUser(args)
			.then((args)=>{
				if(args.success){
					var fsid = s.getsmart(args, 'entity.firestore.id', false)
					if(fsid){
						firebaseAuth(args)
						.then(args=>{
							/** create DocumentReference */
								var ref = things.doc(fsid) 
							/** set loggedIn status for this userAgent */
								var loggedIn = s.gosmart(args, 'entity.loggedIn', {})
								if(loggedIn){
									loggedIn[store.getters.userAgentNormalised] = true
								}
							/** add google token to google tokens list */
								if(args.entity.google){
									if(args.entity.google.tokens){
										args.entity.google.tokens.push(args.token)
									}
								}
							/** add google email to entity and some other google data */
								Object.assign(args.entity.google, args.token)
							/** wait for the facebook data link and then set any new entity data */
								ref.set(CJSON.parse(CJSON.stringify(args.entity)), {merge: true})
								.then(()=>{
									args.feedback = {
										message: `Welcome ${args.entity.google.w3.ofa}. You have successfully ${args.newEntity ? 'signed up' : 'logged in'} with your Google acccount`,
										color: 'positive',
										timeout: 4000,
										position: 'top-right'
									}
									store.dispatch('switchUserSuccess', args)
								})
								.catch(err=>{
									console.error('there was an error processing a login attempt via Google because of firebase', err)
									args.feedback = {
										message: `There was an error logging in with your Google account`,
										color: 'negative',
										timeout: 4000,
										position: 'top-right'
									}
									store.dispatch('switchUserFailure', args)
								})
								
						})
						.catch(err=>{
							console.error('Something went wrong authenticating the user with firebase: ', err)
							args.feedback = {
								message: `There was an error logging in with your Google account`,
								color: 'negative',
								timeout: 4000,
								position: 'top-right'
							}
							store.dispatch('switchUserFailure', args)
						})
					} else {
						console.error("there was an error processing a login attempt via Google because there's no firestore id assosciated with the entity, context @param args: ", args)
						args.feedback = {
							message: `There was an error logging in with your Google account`,
							color: 'negative',
							timeout: 4000,
							position: 'top-right'
						}
						store.dispatch('switchUserFailure', args)
					}
				} else {
					console.error('there was an error processing a login attempt via facebook during facebook token authentication server side, context @param args: ', args)
					args.feedback = {
						message: `There was an error logging in with your facebook account`,
						color: 'negative',
						timeout: 4000,
						position: 'top-right'
					}
					store.dispatch('switchUserFailure', args)
				}
			})
			.catch((err)=>{
				console.error('Something went wrong syncing the user with the database: ', err)
				args.feedback = {
					message: `There was an error logging in with your facebook account`,
					color: 'negative',
					timeout: 4000,
					position: 'top-right'
				}
				store.dispatch('switchUserFailure', args)
			})
			
	} 
	// AUTH SOURCE == ALOPU
	else if(args.provider == 'alopu' || !args.provider){
		args.entity = {
			...store.state.entity,
			ids: {
				"username-alopu": s.getsmart(args, 'entity.alopu.username', s.getsmart(store, 'state.entity.alopu.username', undefined))
			},
			registered: {
				alopu: true
			}
		}
		/** AUTHENTICATE THE PROVIDER TOKEN & SYNC THE USER WITH THE GLOBAL STATE */
			syncUser(args)
			.then((args)=>{
				if(args.success){
					var fsid = s.getsmart(args, 'entity.firestore.id', false)
					if(fsid){
						firebaseAuth(args)
						.then(args=>{
							/** create DocumentReference */
								var ref = things.doc(fsid) 
							/** set loggedIn status for this userAgent */
								var loggedIn = s.gosmart(args, 'entity.loggedIn', {})
								if(loggedIn){
									loggedIn[store.getters.userAgentNormalised] = true
								}
							/** add alopu token to alopu tokens list */
								if(args.entity.alopu && args.token){
									if(args.entity.alopu.tokens){
										args.entity.alopu.tokens.push(args.token)
									}
								}
							/** save changes and notify user */
								ref.set(CJSON.parse(CJSON.stringify(args.entity)), {merge: true})
								.then(()=>{
									args.feedback = {
										message: `Welcome ${args.entity.alopu.username}. You have successfully ${args.newEntity ? 'signed up with a' : 'logged in with your'} Planet Express acccount`,
										color: 'positive',
										timeout: 4000,
										position: 'top-right'
									}
									store.dispatch('switchUserSuccess', args)
								})
								.catch(err=>{
									console.error('there was an error processing a login attempt via Planet Express because of firebase', err)
									args.feedback = {
										message: `There was an error logging in with your Planet Express account`,
										color: 'negative',
										timeout: 4000,
										position: 'top-right'
									}
									store.dispatch('switchUserFailure', args)
								})
								
						})
						.catch(err=>{
							console.error('Something went wrong authenticating the user with firebase: ', err)
							args.feedback = {
								message: `There was an error logging in with your Planet Express account`,
								color: 'negative',
								timeout: 4000,
								position: 'top-right'
							}
							store.dispatch('switchUserFailure', args)
						})
					} else {
						console.error("there was an error processing a login attempt via Planet Express because there's no firestore id assosciated with the entity, context @param args: ", args)
						args.feedback = {
							message: `There was an error logging in with your Planet Express account`,
							color: 'negative',
							timeout: 4000,
							position: 'top-right'
						}
						store.dispatch('switchUserFailure', args)
					}
				} else {
					console.error('there was an error processing a login attempt via facebook during Planet Express token authentication server side, context @param args: ', args)
					args.feedback = {
						message: `There was an error logging in with your Planet Express account`,
						color: 'negative',
						timeout: 4000,
						position: 'top-right'
					}
					store.dispatch('switchUserFailure', args)
				}
			})
			.catch((err)=>{
				console.error('Something went wrong syncing the user with the database: ', err)
				args.feedback = {
					message: `There was an error logging in with your Planet Express account`,
					color: 'negative',
					timeout: 4000,
					position: 'top-right'
				}
				store.dispatch('switchUserFailure', args)
			})
	}

	/** template auth code */
		// var things = fs.collection('things')
		// var username = s.getsmart(store, 'state.entity.alopu.username', undefined)
		// things = things.where('username', "==", username) 
		// things.get()
		// .then(res=>{
		// 	// NO FACEBOOK LINKED NATIVE ACCOUNT
		// 	if(res.empty){
		// 		things.add({})
		// 		.then((res)=>{
		// 			args.entity = {
		// 				ids: {
		// 					"username-alopu": username,
		// 					"id-firestore": res.id
		// 				},
		// 				firestore: {
		// 					id: res.id
		// 				},
		// 				alopu: {
								// username: username,
								// password: s.getsmart(store, 'state.entity.alopu.password', undefined)
		// 					tokens: [ // PUSH JWT
		// 						args.token 
		// 					]
		// 				},
		// 				registered: {
		// 					alopu: true
		// 				}
		// 			}
		// 			// set loggedIn status for this userAgent
		// 			var loggedIn = s.gosmart(args, 'entity.loggedIn', {})
		// 			if(loggedIn){
		// 				loggedIn[store.getters.userAgentNormalised] = true
		// 			}
					// res.set(CJSON.parse(CJSON.stringify(args.entity)), {merge: true})
					// .then(()=>{
					// 	args.feedback = {
					// 		message: `Welcome ${args.entity.alopu.username}. You have successfully signed up with your Alopu acccount`,
					// 		color: 'positive',
					// 		timeout: 4000,
					// 		position: 'top-right'
					// 	}
					// 	store.dispatch('switchUserSuccess', args)
					// })
					// .catch(err=>{
					// 	console.error('there was an error processing a your login attempt', err)
					// 	args.feedback = {
					// 		message: `There was an error logging in with your Alopu account`,
					// 		color: 'negative',
					// 		timeout: 4000,
					// 		position: 'top-right'
					// 	}
					// 	store.dispatch('switchUserFailure', args)
					// })
		// 		})
		// 	} 
		// 	// FOUND ALOPU LINKED NATIVE ACCOUNT
		// 	else if(res.size > 0){
		// 		if(res.size > Infinity){
		// 			// handle multiple linked accounts
		// 		} else {
		// 			args.entity = res.docs[0].data()
		// 			if(args.entity.alopu){
		// 				if(args.entity.alopu.tokens){
		// 					args.entity.alopu.tokens.push(args.token)
		// 				}
		// 			}
		// 			// set loggedIn status for this userAgent
		// 			var loggedIn = s.gosmart(args, 'entity.loggedIn', {})
		// 			if(loggedIn){
		// 				loggedIn[store.getters.userAgentNormalised] = true
		// 			}
		// 			var id = s.gosmart(args, 'entity.firestore.id', s.getsmart(args, 'entity.ids.id-firestore', undefined))
		// 			if(id){
		// 				let ref = things.doc(id)
		// 				ref.set(CJSON.parse(CJSON.stringify(args.entity)), {merge: true})
		// 				.then(()=>{
		// 					args.feedback = {
		// 						message: `Welcome back ${args.entity.username}. You have successfully logged in with your Alopu acccount`,
		// 						color: 'positive',
		// 						timeout: 4000,
		// 						position: 'top-right'
		// 					}
		// 					store.dispatch('switchUserSuccess', args)
		// 				})
		// 				.catch(err=>{
		// 					console.error('there was an error processing a Alopu login attempt', err)
		// 					args.feedback = {
		// 						message: `There was an error logging in via your Alopu account`,
		// 						color: 'negative',
		// 						timeout: 4000,
		// 						position: 'top-right'
		// 					}
		// 					store.dispatch('switchUserFailure', args)
		// 				})
		// 			}				

		// 		}
		// 	}
		// })
		// .catch(err=>{
		// 	console.error('There was an error logging in via your Alopu account: ', err)
		// 	args.feedback = {
		// 		message: `There was an error logging in via your Alopu account`,
		// 		color: 'negative',
		// 		timeout: 4000,
		// 		position: 'top-right'
		// 	}
		// 	store.dispatch('switchUserFailure', args)

		// })
	/** HELPER FUNCTIONS */
	function syncUser(args){
		/** this function will make an api call to api.alopu.com 
		 * @returns @type {Promise}
		 * and do 1 or more of a few things, but always return the same thing
		 * @param @var args @type {Object} is the arguments object with expected schema defined below
		 * @param @var args.token @type {Object} is a provider token given by eg. google, facebook, twitter, github, etc.. 
		 * can be undefined if you're authenticating a native user
		 * @param @var args.provider  @type {String} is the provider source, eg. google, facebook, twitter, github, etc..
		 * @param @var args.entity @type {Object} is the entity object to be used with the authentication
		 * if this isn't provided and no @var args.token is provided then the function will return an error
		 * There are a few ways the api will handle a token and entity
		 * @param @var args.upgrade @type {Boolean} is a true/false value denoting whether or not to upgrade and merge a provided entity data if
		 * there is a native account already linked with whatever provider token is given
		 *  NOT CURRENTLY SUPPORTED
		 */

		return new Promise((resolve, reject)=>{
			if(args.entity || args.provider || args.token || args.clientId){
				let params = {
					token: args.token,
					entity: args.entity,
					provider: args.provider,
					clientId: args.clientId
				}
				axios.post(s.getsmart(store, 'state.env.api.protocol', 'https://') + s.getsmart(store, 'state.env.api.uri', 'api.alopu.com')+'/auth', params, axiosConf)
				.then(post=>{
		
					if(post.data.success && post.data.entity){
						resolve(post.data)
					} else {
						console.error('there was an error authenticating the user server side: ', s.getsmart(post, 'data.error', undefined))
						reject({
							success: false,
							error: ['there was an error authentication the user server side: ', s.getsmart(post, 'data.error', 'there was an error authentication the user server side')]
						})
					}
				})
				.catch(err=>{
					console.error('there was an error authenticating the native user:', err)
					reject({
						success: false,
						error: ['there was an error authenticating the native user', err]
					})
				})
			} else {
				if(!args.token && !args.provider){
					reject({
						success: false,
						error: "You didn't provide an entity to be authenticated or a provider token or a source, what are we meant to do....?"
					})
				} else if(!(args.provider || s.getsmart(args, 'token.provider', false)) && args.token){
					reject({
						success: false,
						error: "We're sorry but right now we need to know the source of a token explicitely to process authentication, it'd be great if they included some kind of auth source in the token"
					})
				} else {
					reject({
						success: false,
						error: "You didn't provide enough arguments to sync a user"
					})
				}
			}
		})
	}
	function firebaseAuth(args){
		return new Promise((resolve, reject)=>{
			firebase.auth().signInWithCustomToken(args.entity.firebase.customToken)
			.then(()=>{
				resolve(args)
			})
			.catch(err=>{
				console.error('there was an error authenticating the user with firebase: ', err)
				reject({
					success: false,
					error: ['there was an error authenticating the user with firebase', err]
				})
			})
		})
	}
} 

export const checkUsernameAvailability = (store, username) =>{
	axios({
		method: 'post',
		header: axiosConf.headers,
		data: {
			username
		},
		url: s.getsmart(store, 'state.env.api.protocol', 'https://') + s.getsmart(store, 'state.env.api.uri', 'api.alopu.com')+'/usernamecheck'
	})
	.then(res=>{
		if(res.data.success){
			if(res.data.taken){
				store.commit('registerable', false)
			} else if(!res.data.taken){
				store.commit('registerable', true)			
			}
		} else {
			console.error('something went wrong checking if the username is registerable via the api: ', res.data.error)
		}
	})
}

export const switchUserSuccess = (store, args) => {
	if(args.success && args.entity){
		store.commit('entity', args)
		args.type = 'login'
		store.commit('feedback', args)
	}
}

export const switchUserFailure = (store, args) => {
	store.dispatch('resetEntity')
	store.commit('feedback', args)
}

export const login = (store, {...args}) => {
	// if the login button was pressed with no login options showing, toggle login options
	if(args['provider'] == 'alopu'){
		var passwordEmpty = s.getsmart(store, 'state.entity.alopu.password', '') == ''
		var passwordMatch = ((s.getsmart(store, 'state.entity.alopu.password', false) == s.getsmart(store, 'state.passwordConfirmation', 0)) && !passwordEmpty) || !s.getsmart(store, 'state.registerable', false)
		if(s.getsmart(store, 'state.entity.alopu.username', false) && passwordMatch){
			store.commit('passwordConfirmation', '')
			args['success'] = true
			var message = 'Logging in'
			if(s.getsmart(store, 'state.registerable', false)){
				message = 'Signing up'
			}
			notify.create({
				message,
				color: 'positive',
				timeout: 4000
			})
			store.dispatch('switchUser', args)
		} else if (!passwordMatch && !passwordEmpty){
			notify.create({
				message: "Your passwords didn't match",
				color: 'warning',
				timeout: 4000
			})					
		} else if(s.getsmart(store, 'state.showLoginOptions', false)){
			notify.create({
				message: "Your credentials weren't valid, please try again",
				color: 'warning',
				timeout: 4000
			})
		}
		store.commit('showLoginOptions', true)
		// store.showLoginOptions = true
	}
	if(args['success']){
		store.dispatch('switchUser', args)
	} else if(args['success'] == false){
		console.error(`An error occured when processing login from ${args['provider']}`)
		console.error(`Here's the res: `, args['token'])
		args.feedback = {
			message: `There was an error logging in with your ${args['provider']} account`,
			color: 'negative',
			timeout: 4000,
			position: 'top-right'
		}
		store.dispatch('switchUserFailure', args)

	}
}

export const logout = (store, args) =>{
	var fallback = setTimeout(function(){
		// store.dispatch('logoutFail')
	}, 5000)
	var entity = CJSON.parse(CJSON.stringify(s.getsmart(store, 'state.entity', undefined)))
	store.dispatch('resetEntity')  
	// var entity
	var things = fs.collection('things')
	var id
	if(entity){
		id = s.getsmart(entity, 'firestore.id', s.getsmart(entity, 'ids.id-firestore', undefined))
	}
	if(id){
		let ref = things.doc(id)
		// set loggedIn status for this userAgent to false
		var loggedIn = entity.loggedIn
		if(loggedIn){
			loggedIn[store.getters.userAgentNormalised] = false
		}
		s.popThing({option: {clientId: store.state.clientId}, list: entity.sessions, keys: ['clientId'], keymatchtype: 'broad'})
		// ref.set({loggedIn: {[store.getters.userAgentNormalised]: false}}, {merge: true})
		entity = CJSON.parse(CJSON.stringify(entity))
		ref.set(entity, {merge: true})
		.then(()=>{
			clearTimeout(fallback)
			store.dispatch('logoutSuccess')
		})
		.catch((err)=>{
			clearTimeout(fallback)
			store.dispatch('logoutFail')
			console.error('there was an error committing logout to firestore: ', err)
		})
	} else {
		clearTimeout(fallback)
		store.dispatch('logoutFail')
	}
}

export const logoutSuccess = (store, args) => {
	store.dispatch('resetEntity') 
	store.commit('registerable', 'haventchecked')
	if(!args){
		var args = {
			feedback: {
				message: 'Successfully logged out',
				color: 'positive',
				timeout: 4000,
				position: 'top-right'
			}
		}
	}
	store.commit('feedback', args)
}

export const logoutFail = (store, args) => {
	store.dispatch('resetEntity')
	store.commit('registerable', 'haventchecked')
	if(!args){
		var args = {
			feedback: {
				message: 'Something went wrong logging out, we wiped your data locally just to be safe',
				color: 'info',
				timeout: 4000,
				position: 'top-right'
			}
		}
	}
	store.commit('feedback', args)
}

export const buildDefaultEntity = (store, args) => {
	var loggedIn = s.getsmart(store.state, 'entity.loggedIn', false)
	if(!loggedIn || (loggedIn && !loggedIn[store.getters.userAgentNormalised])){
		store.dispatch('resetEntity')
	}
}

export const resetEntity = (store, args) => {
	var entityDefault = CJSON.parse(CJSON.stringify(store.state.entityDefault))
	store.commit('entity', {entity: entityDefault})
}

export const userAgentSync = (store, userAgent) => {
	store.commit('userAgent', userAgent)
	// store.commit('updateEntityUserAgent', store.getters.userAgentNormalised)
}

export const syncDevice = (store, device) => {
	var entityDevices = s.gosmart(store, 'state.entity.inventory.devices', [])
	var userAgent = store.getters.userAgentNormalised
	if(entityDevices){
		var entityDevice = s.getThing({
			option: {
				'userAgent': userAgent
			},
			list: entityDevices,
			keys: ['userAgent'],
			keymatchtype: 'broad'
		})
	}
	if(device == 'this' && entityDevice){
		uap.setUA(userAgent)
		let parsed = uap.getDevice
		Object.assign(entityDevice, parsed)
	}
}
// export const loadSchema = (store, args) => {
// 	if(args){
// 		if(args.schema && typeof args.schema == 'string'){
// 			FL.schemas.subscribe(args.schema, function(err, schema){
// 				if(!err){
// 					if(schema){
// 						store.commit('setSchema', schema)
// 					} else {
// 						console.error(`no schema was supplied but there was no error`)
// 					}
// 				} else if(err){
// 					console.error(`error: ${err}`)
// 				}
// 			})
// 		}
// 	}
// }

export const manifestClientId = (store, uuid) => {
	if(!store.state.clientId){
		store.commit('clientId', uuid)
	}
}

function initFirestore(){
	const config = {
		apiKey: "AIzaSyCEk1mYB5aXFjYZUzwhyTF-blYDrIDqTRk",
		authDomain: "lopu-f3969.firebaseapp.com",
		databaseURL: "https://lopu-f3969.firebaseio.com",
		projectId: "lopu-f3969",
		storageBucket: "lopu-f3969.appspot.com",
		messagingSenderId: "299513605828",
appId: "1:299513605828:web:1f42487525d73e00"
	}
	const settings = {
		timestampsInSnapshots: true
	}

	if(!firebase.apps.length){
		firebase.initializeApp(config)
	} else {
		// F = firebase.app()
	}
	var fs = firebase.firestore() // firestore
	fs.settings(settings)
	fs.SetOptions = {merge: true}
	return fs

}
const axiosConf = {
	headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			"Access-Control-Allow-Origin": "*",
	}
}