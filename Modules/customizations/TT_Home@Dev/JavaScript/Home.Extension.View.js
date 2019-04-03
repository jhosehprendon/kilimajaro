define('Home.Extension.View'
    ,   [
        'Home.View',
        'Hello.World.View'
        ,'Backbone.CompositeView' 
    ]
    ,   function (
        HomeView,
        HelloWorldView,
        BackboneCompositeView
    )
    
    {
        'use strict';
        _.extend(HomeView.prototype, {
            childViews: _.extend(HomeView.prototype.childViews || {}, {
                'Hello.World': function ()
			{
				return new HelloWorldView({
				
				});
			}
            })
            ,	initialize: function ()
		{
            BackboneCompositeView.add(this);
			var self = this;
			this.windowWidth = jQuery(window).width();
			this.on('afterViewRender', function()
			{
				_.initBxSlider(self.$('[data-slider]'), {
					nextText: '<a class="home-gallery-next-icon"></a>'
				,	prevText: '<a class="home-gallery-prev-icon"></a>'
				});
			});

			var windowResizeHandler = _.throttle(function ()
			{
				if (_.getDeviceType(this.windowWidth) === _.getDeviceType(jQuery(window).width()))
				{
					return;
				}
				this.showContent();

				_.resetViewportWidth();

				this.windowWidth = jQuery(window).width();

			}, 1000);

			this._windowResizeHandler = _.bind(windowResizeHandler, this);

			jQuery(window).on('resize', this._windowResizeHandler);
		}
        })
     
        
    });
