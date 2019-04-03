
define(
	'Hello.World.View'
,	[	'hello_world.tpl'

	
	,	'Backbone'
	,	'underscore'
	,	'Utils'
	]
,	function (
		hello_world

	
	,	Backbone
	,	_
	)
{
	'use strict';

	//@class Address.View @extend Backbone.View
	return Backbone.View.extend({

		//@property {Function} template
		template: hello_world

		
	

		//@method initialize Attach to any change on the model and make a render on this changes
		//@return {Void}
	,	initialize: function ()
		{
			
		}

	
		//@method getContext @return Address.View.Context
	,	getContext: function ()
		{
			

			//@class Address.View.Context
			return {
				
			};
		}
	});
});
