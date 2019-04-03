define('payment_wizard_confirmation_module.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <p class=\"payment-wizard-confirmation-module-body\"><a href=\"/transactionhistory/customerpayment/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"confirmationId") || (depth0 != null ? compilerNameLookup(depth0,"confirmationId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmationId","hash":{},"data":data}) : helper)))
    + "\" data-touchpoint=\"customercenter\" data-hashtag=\"#transactionhistory/customerpayment/"
    + alias4(((helper = (helper = compilerNameLookup(helpers,"confirmationId") || (depth0 != null ? compilerNameLookup(depth0,"confirmationId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmationId","hash":{},"data":data}) : helper)))
    + "\" data-action=\"update-layout\">"
    + alias4((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Payment #$(0)",(depth0 != null ? compilerNameLookup(depth0,"tranId") : depth0),{"name":"translate","hash":{},"data":data}))
    + "</a></p> ";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <p class=\"payment-wizard-confirmation-module-body\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"A Deposit/Credit Memo Application was generated.",{"name":"translate","hash":{},"data":data}))
    + "</p><p class=\"payment-wizard-confirmation-module-body\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"You can see the details in <a href=\"/transactionhistory\" data-action=\"update-layout\">Transaction History</a> page.",{"name":"translate","hash":{},"data":data}))
    + "</p> ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return " <a href=\""
    + ((stack1 = ((helper = (helper = compilerNameLookup(helpers,"dwonloadPDFURL") || (depth0 != null ? compilerNameLookup(depth0,"dwonloadPDFURL") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"dwonloadPDFURL","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" target=\"_blank\" class=\"payment-wizard-confirmation-module-download\" > "
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Download as PDF",{"name":"translate","hash":{},"data":data}))
    + " </a> ";
},"7":function(container,depth0,helpers,partials,data) {
    return " <a href=\"/make-a-payment\" class=\"payment-wizard-confirmation-module-payment\" data-action=\"update-layout\" >"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"Make another payment",{"name":"translate","hash":{},"data":data}))
    + " </a> ";
},"9":function(container,depth0,helpers,partials,data) {
    return " <button class=\"payment-wizard-confirmation-module-payment\" disabled=\"disabled\">"
    + container.escapeExpression((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"No payment due",{"name":"translate","hash":{},"data":data}))
    + "</button> ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return " <div class=\"payment-wizard-confirmation-module alert fade in\"><h2 class=\"payment-wizard-confirmation-module-title\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"Thank you!",{"name":"translate","hash":{},"data":data}))
    + "</h2> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"showLinkConfirmation") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " <p class=\"payment-wizard-confirmation-module-body\">"
    + alias3((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || alias2).call(alias1,"You will receive an email with your payment confirmation.",{"name":"translate","hash":{},"data":data}))
    + "</p> "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isConfirmationCreated") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = compilerNameLookup(helpers,"if").call(alias1,(depth0 != null ? compilerNameLookup(depth0,"isInvoiceLengthGreaterThan0") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + " </div>  ";
},"useData":true}); template.Name = 'payment_wizard_confirmation_module'; return template;});