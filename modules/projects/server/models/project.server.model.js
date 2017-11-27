'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var SubjectSchema = new Schema({
	subjectName: {
		type: String,
		default: ''
	},
	mainIdea: {
		type: String,
		default: ''
	},
	standards: {
		type: String, //Should be a list of standards in the future
		default: ''
	},
	details: {
		type: String,
		default: ''
	}
});

/**
* Drag Drop List Schema
*/
var dragListSchema = new Schema({
	benchmark: String,
	default: ''
});

/**
 * Project Schema
 */
var ProjectSchema = new Schema({
	title: {
		type:String,
		default: '',
	},
	course: {
		type:String,
		default: '',
	},
	author: {
		type:String,
		default: '',
	},
	isbn: {
		type:String,
		default: '',
	},
	condition: {
		type:String,
		default: '',
	},
	contactInformation: {
		type:String,
		default: '',
	},
	edition: {
		type:String,
		default: '',
	},
	instructor: {
		type:String,
		default: '',
	},
	location: {
		type:String,
		default: '',
	},
	price: {
		type:Number,
		default: '',
	},
	required: {
		type:String,
		default: '',
	},
	url: {
		type:String,
		default: '',
	},
	name: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	status: {
		type: String,
		enum: ['Active', 'In Progress', 'InActive'],
		default: 'In Progress'
	},
	isPublic: {
		type: Boolean,
		default: true
	},
	projAdmin:{
		type: [Schema.ObjectId],
	},
	rating: {
		ratings: [
			{
				num: {
					type: Number,	//number of stars
				},		
				reviewer: {
					type: Schema.ObjectId,	//ID of the user who rated it
					ref: 'User'
				}
			}
		],

		avg_rating: {
			//Recalculated from the ratings array every time a rating is submitted
			type: Number
		}
	},
	essentialDetails: {
		mathDetails: {
			type: [SubjectSchema]
		},
		scienceDetails: {
			type: [SubjectSchema]
		},
		litDetails: {
			type: [SubjectSchema]
		},
		ssDetails: {
			type: [SubjectSchema]
		},
		overallStandards: {
		type: String, //Should be a list of standards in the future
		default: ''
		},
		overallSubjects: {
		type: String, 
		default: ''
		},
		otherSubject:{
			type: [SubjectSchema]
		},
		communicateFindings: {
			type: String,
			default: ''
		}
	}
});


mongoose.model('Project', ProjectSchema);
