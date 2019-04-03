/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module CustomContentType
define(
	'CustomContentType.Base.View'
,	[
		'Backbone'
	,	'underscore'
	,	'jQuery'
	]
,	function (
		Backbone
	,	_
	,	jQuery
	)
{
	'use strict';

	//@class CustomContentType.Base.View @extends Backbone.View
	//Base CCT class from where all the custom CCT extend from
	//inherits the basic render and destroy methods from Backbone.View
	var CustomContentTypeBaseView = Backbone.View.extend({

		
	});

	// CustomContentTypeBaseView.beforeInitialize.install({
	// 	name: 'customContentTypeBaseViewInit'
	// ,	priority: 1
	// ,	execute: function ()
	// 	{
	// 		this.settings = {};
	// 		this.instanceId = this.options.instanceId;
	// 		this.id = this.options.id;
	// 	}
	// });

	return CustomContentTypeBaseView;

	//@class CustomContentType.Settings This class defines the available settings that a CustomContentType object support.
	//It is an obj of the form
	// {
	//		template: {String} name of the template/path to the module in the file cabinet?
	//		html: to be defined, in case of the four core CCT
	//		....
	// }
});
