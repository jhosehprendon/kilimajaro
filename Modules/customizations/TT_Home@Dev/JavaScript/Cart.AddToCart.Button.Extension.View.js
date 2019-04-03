
define('Cart.AddToCart.Button.Extension.View'
    ,   [
		'Cart.AddToCart.Button.View'
		,	'LiveOrder.Line.Model'
		,	'Cart.Confirmation.Helpers'
    ]
    ,   function (
		CartAddToCartButtonView,
		LiveOrderLineModel,
		CartConfirmationHelpers
    )
    {
        'use strict';
        _.extend(CartAddToCartButtonView.prototype, {
			addToCart: _.wrap(CartAddToCartButtonView.prototype.addToCart, function (fn) {

                // Console.log before the add to cart default
                console.log("Before Hello Word")
                var ret = fn.apply(this, _.toArray(arguments).slice(1));
                // Console.log afterthe add to cart default
                console.log("After Hello Word")

                return ret;
            })
			// addToCart: function addToCart (e)
			// {
			// 	console.log('HELLO')
			// 	e.preventDefault();
	
			// 	var self = this
			// 	,	cart_promise;
	
			// 	if (!this.model.areAttributesValid(['options','quantity'], self.getAddToCartValidators()))
			// 	{
			// 		return;
			// 	}
	
			// 	if (!this.model.isNew() && this.model.get('source') === 'cart')
			// 	{
			// 		 cart_promise = this.cart.updateProduct(this.model);
			// 		 cart_promise.done(function ()
			// 		 {
			// 			 self.options.application.getLayout().closeModal();
			// 		 });
			// 	}
			// 	else
			// 	{
			// 		var line = LiveOrderLineModel.createFromProduct(this.model);
			// 		cart_promise = this.cart.addLine(line);
			// 		CartConfirmationHelpers.showCartConfirmation(cart_promise, line, self.options.application);
			// 	}
	
			// 	cart_promise.fail(function (jqXhr)
			// 	{
			// 		var error_details = null;
			// 		try
			// 		{
			// 			var response = JSON.parse(jqXhr.responseText);
			// 			error_details = response.errorDetails;
			// 		}
			// 		finally
			// 		{
			// 			if (error_details && error_details.status === 'LINE_ROLLBACK')
			// 			{
			// 				self.model.set('internalid', error_details.newLineId);
			// 			}
			// 		}
	
			// 	});
	
			// 	this.disableElementsOnPromise(cart_promise, e.target);
			// 	return false;
			// }
			
        })
        
	});
	