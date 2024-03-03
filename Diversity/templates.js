define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__header "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":54}}}))
    + "__header\" id=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":5,"column":68},"end":{"line":5,"column":75}}}) : helper)))
    + "-header\">\r\n  <div class=\"component__header-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":6,"column":38},"end":{"line":6,"column":62}}}))
    + "__header-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":20,"column":11}}})) != null ? stack1 : "")
    + "\r\n    "
    + alias3(((helper = (helper = lookupProperty(helpers,"component_description") || (depth0 != null ? lookupProperty(depth0,"component_description") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"component_description","hash":{},"data":data,"loc":{"start":{"line":22,"column":4},"end":{"line":22,"column":29}}}) : helper)))
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),(depth0 != null ? lookupProperty(depth0,"mobileInstruction") : depth0),{"name":"any","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":4},"end":{"line":38,"column":12}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__title "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":9,"column":33},"end":{"line":9,"column":57}}}))
    + "__title\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":13,"column":19}}})) != null ? stack1 : "")
    + "<div class=\"component__title-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":15,"column":41},"end":{"line":15,"column":65}}}))
    + "__title-inner\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":79},"end":{"line":15,"column":147}}})) != null ? stack1 : "")
    + ">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":27}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n\r\n    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__body "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":25,"column":32},"end":{"line":25,"column":56}}}))
    + "__body\">\r\n      <div class=\"component__body-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":26,"column":40},"end":{"line":26,"column":64}}}))
    + "__body-inner\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":26}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__instruction "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":33,"column":39},"end":{"line":33,"column":63}}}))
    + "__instruction\">\r\n      <div class=\"component__instruction-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":34,"column":47},"end":{"line":34,"column":71}}}))
    + "__instruction-inner\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":8},"end":{"line":35,"column":33}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":42,"column":8}}})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("dropdown", Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li id=\"dropdown__item__"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "__"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_dropdownIndex") : depths[1]), depth0))
    + "__"
    + alias2((lookupProperty(helpers,"inc")||(depth0 && lookupProperty(depth0,"inc"))||alias4).call(alias3,(data && lookupProperty(data,"index")),{"name":"inc","hash":{},"data":data,"loc":{"start":{"line":24,"column":63},"end":{"line":24,"column":77}}}))
    + "\" class=\"dropdown__item js-dropdown-list-item\" role=\"option\" text=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":24,"column":144},"end":{"line":24,"column":152}}}) : helper)))
    + "\" value=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":24,"column":161},"end":{"line":24,"column":171}}}) : helper)))
    + "\">\r\n      <div class=\"dropdown__item-inner js-dropdown-list-item-inner\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"displayText") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "      </div>\r\n    </li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"displayText") || (depth0 != null ? lookupProperty(depth0,"displayText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayText","hash":{},"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":29,"column":18}}}) : helper))) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"dropdown\">\r\n\r\n  <button class=\"dropdown__btn js-dropdown-btn\" aria-haspopup=\"listbox\">\r\n\r\n    <div class=\"dropdown__inner js-dropdown-inner\"></div>\r\n\r\n    <div class=\"dropdown__icon\">\r\n      <div class=\"icon\"></div>\r\n    </div>\r\n\r\n  </button>\r\n\r\n  <input class=\"js-data-output\" type=\"hidden\" />\r\n\r\n  <ul class=\"dropdown__list js-dropdown-list u-display-none\" role=\"listbox\" tabindex=\"-1\">\r\n\r\n    <li id=\"dropdown__item__"
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":35}}}) : helper)))
    + "__"
    + alias4(((helper = (helper = lookupProperty(helpers,"_dropdownIndex") || (depth0 != null ? lookupProperty(depth0,"_dropdownIndex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_dropdownIndex","hash":{},"data":data,"loc":{"start":{"line":17,"column":37},"end":{"line":17,"column":55}}}) : helper)))
    + "__0\" class=\"dropdown__placeholder dropdown__item js-dropdown-list-item\" role=\"option\" disabled=\"true\" hidden=\"true\" default=\"true\" text=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":17,"column":192},"end":{"line":17,"column":207}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":17,"column":216},"end":{"line":17,"column":231}}}) : helper)))
    + "\">\r\n      <div class=\"dropdown__item-inner js-dropdown-list-item-inner\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":19,"column":8},"end":{"line":19,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </li>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_options") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":4},"end":{"line":33,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </ul>\r\n\r\n</div>\r\n";
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("component-footer", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__footer "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":3,"column":30},"end":{"line":3,"column":54}}}))
    + "__footer\" id=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":68},"end":{"line":3,"column":75}}}) : helper)))
    + "-footer\">\r\n  <div class=\"component__footer-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":4,"column":38},"end":{"line":4,"column":62}}}))
    + "__footer-inner\">\r\n\r\n    <div class=\"component__footer-body "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":6,"column":39},"end":{"line":6,"column":63}}}))
    + "__footer-body\">\r\n      <div class=\"component__footer-body-inner "
    + alias3((lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_component") : depth0),{"name":"lowercase","hash":{},"data":data,"loc":{"start":{"line":7,"column":47},"end":{"line":7,"column":71}}}))
    + "__footer-body-inner\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"footer") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":8,"column":28}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"footer") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":14,"column":8}}})) != null ? stack1 : "");
},"useData":true}));

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"article__header\">\r\n    <div class=\"article__header-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__title\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "<div class=\"article__title-inner\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":41},"end":{"line":17,"column":109}}})) != null ? stack1 : "")
    + ">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n\r\n      </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__body\">\r\n        <div class=\"article__body-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":28}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"article__instruction\">\r\n        <div class=\"article__instruction-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":35,"column":35}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"article__inner\">\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":42,"column":10}}})) != null ? stack1 : "")
    + "\r\n  <div class=\"block__container\">\r\n  </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"block__header\">\r\n    <div class=\"block__header-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":30,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__title\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":21}}})) != null ? stack1 : "")
    + "<div class=\"block__title-inner\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":39},"end":{"line":17,"column":107}}})) != null ? stack1 : "")
    + ">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":18,"column":36}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n\r\n      </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__body\">\r\n        <div class=\"block__body-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":28}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"block__instruction\">\r\n        <div class=\"block__instruction-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":35,"column":35}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"block__inner\">\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":42,"column":10}}})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__container\">\r\n  </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":3,"column":117},"end":{"line":3,"column":278}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"answeredCorrectly")), depth0));
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (data && lookupProperty(data,"root"))) && lookupProperty(stack1,"_globals"))) && lookupProperty(stack1,"_accessibility"))) && lookupProperty(stack1,"_ariaLabels"))) && lookupProperty(stack1,"answeredIncorrectly")), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    return "<div class=\"btn__display js-display-attempts\">\r\n  <div class=\"btn__display-inner js-insert-attempts-string\" aria-live=\"assertive\">\r\n  </div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"btn__response-container\">\r\n\r\n  <div class=\"btn__marking js-btn-marking u-display-none\" aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),(depth0 != null ? lookupProperty(depth0,"_canShowMarking") : depth0),{"name":"all","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":70},"end":{"line":3,"column":286}}})) != null ? stack1 : "")
    + "\">\r\n    <div class=\"icon\"></div>\r\n  </div>\r\n\r\n  <button class=\"btn-text btn__action js-btn-action\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_submit") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\">\r\n    "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_submit") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n  </button>\r\n\r\n  <button class=\"btn-text btn__feedback js-btn-feedback\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_showFeedback") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\" disabled=\"true\">\r\n    "
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_buttons") : depth0)) != null ? lookupProperty(stack1,"_showFeedback") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n  </button>\r\n\r\n</div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_shouldDisplayAttempts") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":0},"end":{"line":23,"column":7}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"drawer__inner\">\r\n\r\n  <span id=\"drawer-heading\" class=\"aria-label\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"drawer") : stack1), depth0))
    + "</span>\r\n\r\n  <div class=\"drawer__holder js-drawer-holder\"></div>\r\n\r\n  <div class=\"drawer__toolbar u-clearfix\">\r\n\r\n    <div class=\"drawer__back\">\r\n      <button class=\"btn-icon drawer__btn drawer__back-btn js-drawer-back-btn\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\r\n        <div class=\"icon\"></div>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"drawer__close\">\r\n      <button class=\"btn-icon drawer__btn drawer__close-btn js-drawer-close-btn\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closeDrawer") : stack1), depth0))
    + "\">\r\n        <div class=\"icon\"></div>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":23,"column":2},"end":{"line":23,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"className") || (depth0 != null ? lookupProperty(depth0,"className") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"className","hash":{},"data":data,"loc":{"start":{"line":2,"column":68},"end":{"line":2,"column":81}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"drawer__menu-title drawer__item-title\">\r\n      <div class=\"drawer__menu-title-inner drawer__item-title-inner\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":19}}}) : helper))) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"drawer__menu-body drawer__item-body\">\r\n      <div class=\"drawer__menu-body-inner drawer__item-body-inner\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":15,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"drawer__menu-inner drawer__item-inner\" role=\"listitem\">\r\n  <button class=\"drawer__menu-btn drawer__item-btn"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"className") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":50},"end":{"line":2,"column":88}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + "\r\n  </button>\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["heading"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":13,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":25}}})) != null ? stack1 : "")
    + "\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":13,"column":4}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"complete") : stack1), depth0))
    + " "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":55},"end":{"line":10,"column":74}}})) != null ? stack1 : "")
    + "\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"incomplete") : stack1), depth0))
    + " "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":57},"end":{"line":12,"column":76}}})) != null ? stack1 : "")
    + "\r\n    ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":15,"column":4},"end":{"line":15,"column":23}}})) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\r\n\r\n<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":9},"end":{"line":3,"column":16}}}) : helper)))
    + "-heading\" class=\"js-heading-inner\" "
    + ((stack1 = (lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":3,"column":51},"end":{"line":3,"column":81}}})) != null ? stack1 : "")
    + ">\r\n\r\n  <span class=\"aria-label\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isA11yCompletionDescriptionEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":16,"column":9}}})) != null ? stack1 : "")
    + "  </span>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading-defunct\">\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["nav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button class=\"btn-text nav__btn nav__skip-btn\" data-event=\"skipNavigation\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"skipNavigation") : stack1), depth0))
    + "\">\r\n      "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"skipNavigationText") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n  </button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias2(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"nav__inner u-clearfix\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_accessibility") : depth0)) != null ? lookupProperty(stack1,"_isSkipNavigationEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":11,"column":9}}})) != null ? stack1 : "")
    + "\r\n  <button class=\"btn-icon nav__btn nav__back-btn js-nav-back-btn u-display-none\" data-event=\"backButton\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\" role=\"link\">\r\n    <div class=\"icon\"></div>\r\n  </button>\r\n\r\n  <button class=\"btn-icon nav__btn nav__drawer-btn js-nav-drawer-btn\" data-event=\"toggleDrawer\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"navigationDrawer") : stack1), depth0))
    + "\">\r\n    <div class=\"icon\"></div>\r\n  </button>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":7,"column":26},"end":{"line":7,"column":34}}}) : helper)))
    + "=\""
    + alias1(container.lambda(depth0, depth0))
    + "\" ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":7,"column":135},"end":{"line":7,"column":147}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"popup",{"name":"equals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":18,"column":13}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"notify__close-btn-container\">\r\n    <button class=\"btn-icon notify__btn-icon notify__close-btn js-notify-close-btn\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\r\n      <div class=\"icon\"></div>\r\n    </button>\r\n  </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"notify__icon\">\r\n            <div class=\"icon"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":28},"end":{"line":29,"column":75}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":75},"end":{"line":29,"column":120}}})) != null ? stack1 : "")
    + "\"></div>\r\n          </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return " is-prompt";
},"11":function(container,depth0,helpers,partials,data) {
    return " is-alert";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"notify__title\" id=\"notify-heading\">\r\n            <div class=\"notify__title-inner\" "
    + ((stack1 = (lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":35,"column":45},"end":{"line":35,"column":78}}})) != null ? stack1 : "")
    + ">\r\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":36,"column":14},"end":{"line":36,"column":33}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n          </div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"notify__body\">\r\n            <div class=\"notify__body-inner\">\r\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":44,"column":14},"end":{"line":44,"column":32}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n          </div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"notify__btn-container\">\r\n            <button class=\"btn-text notify__btn notify__btn-alert js-notify-btn-alert\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"confirmText") || (depth0 != null ? lookupProperty(depth0,"confirmText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":51,"column":99},"end":{"line":51,"column":116}}}) : helper))) != null ? stack1 : "")
    + "\">\r\n              "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"confirmText") || (depth0 != null ? lookupProperty(depth0,"confirmText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data,"loc":{"start":{"line":52,"column":14},"end":{"line":52,"column":31}}}) : helper))) != null ? stack1 : "")
    + "\r\n            </button>\r\n          </div>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"notify__btn-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_prompts") : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":12},"end":{"line":63,"column":21}}})) != null ? stack1 : "")
    + "          </div>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <button class=\"btn-text notify__btn notify__btn-prompt js-notify-btn-prompt\" data-event=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_callbackEvent") || (depth0 != null ? lookupProperty(depth0,"_callbackEvent") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_callbackEvent","hash":{},"data":data,"loc":{"start":{"line":60,"column":101},"end":{"line":60,"column":119}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"promptText") || (depth0 != null ? lookupProperty(depth0,"promptText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":60,"column":133},"end":{"line":60,"column":149}}}) : helper))) != null ? stack1 : "")
    + "\">\r\n              "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"promptText") || (depth0 != null ? lookupProperty(depth0,"promptText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data,"loc":{"start":{"line":61,"column":14},"end":{"line":61,"column":30}}}) : helper))) != null ? stack1 : "")
    + "\r\n            </button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":3,"column":0},"end":{"line":3,"column":18}}}) : helper)))
    + "\r\n\r\n\r\n<div "
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_attributes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":5},"end":{"line":7,"column":55}}})) != null ? stack1 : "")
    + " class=\"notify__popup js-notify-bg notify__popup-type-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":7,"column":109},"end":{"line":7,"column":118}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":118},"end":{"line":7,"column":154}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isCancellable") : depth0),(depth0 != null ? lookupProperty(depth0,"_showCloseButton") : depth0),{"name":"all","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":19,"column":10}}})) != null ? stack1 : "")
    + "\r\n  <div class=\"notify__scrollfix js-notify-bg\">\r\n    <div class=\"notify__popup-inner js-notify-bg\">\r\n\r\n      <div class=\"notify__content\">\r\n        <div class=\"notify__content-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_showIcon") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":10},"end":{"line":31,"column":17}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":10},"end":{"line":39,"column":17}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":10},"end":{"line":47,"column":17}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"alert",{"name":"equals","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":10},"end":{"line":55,"column":21}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_type") : depth0),"prompt",{"name":"equals","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":10},"end":{"line":65,"column":21}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":73,"column":2},"end":{"line":73,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\r\n\r\n</div>\r\n\r\n<div class=\"shadow notify__shadow js-notify-shadow-click\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"notify-push__title\">\r\n    <div class=\"notify-push__title-inner\" "
    + ((stack1 = (lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":8,"column":42},"end":{"line":8,"column":75}}})) != null ? stack1 : "")
    + ">\r\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":25}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"notify-push__body\">\r\n    <div class=\"notify-push__body-inner\">\r\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":17,"column":24}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias2(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div id=\"notify-push-heading\" class=\"notify-push__inner js-notify-push-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":2},"end":{"line":20,"column":9}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n\r\n<button class=\"btn-icon notify-push__close-btn js-notify-push-close-btn\" aria-label=\""
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\r\n  <div class=\"icon\"></div>\r\n</button>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"page__header\">\r\n\r\n    <div class=\"page__header-bg\"></div>\r\n\r\n    <div class=\"page__header-inner\">\r\n\r\n      <div class=\"page__header-content\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":27,"column":15}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":35,"column":15}}})) != null ? stack1 : "")
    + "        \r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"page__title\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":20,"column":23}}})) != null ? stack1 : "")
    + "<div class=\"page__title-inner\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibilityState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":41},"end":{"line":22,"column":108}}})) != null ? stack1 : "")
    + ">\r\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":23,"column":12},"end":{"line":23,"column":31}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n\r\n        </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"js-heading\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"page__subtitle\">\r\n          <div class=\"page__subtitle-inner\">\r\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":34}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n  <div class=\"block page__overview\">\r\n    <div class=\"block__inner\">\r\n      <div class=\"component__container\">\r\n        <div class=\"component text is-full is-complete\">\r\n          <div class=\"component__inner text__inner\">\r\n            <div class=\"component__header text__header\">\r\n              <div class=\"component__header-inner text__header-inner\">\r\n            \r\n                <div class=\"component__title text__title\">\r\n            \r\n                  <div class=\"js-heading is-complete\">\r\n\r\n                    <div class=\"js-heading-inner\" role=\"heading\" aria-level=\"4\">\r\n\r\n                      <span class=\"aria-label\">\r\n                          Completed Overview\r\n                      </span>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"component__title-inner text__title-inner\" aria-hidden=\"true\">\r\n                    Overview\r\n                  </div>\r\n            \r\n                </div>\r\n            \r\n                <div class=\"component__body text__body page__body\">\r\n                  <div class=\"component__body-inner text__body-inner\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"any","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":74,"column":20},"end":{"line":80,"column":28}}})) != null ? stack1 : "")
    + "                  </div>\r\n                </div>\r\n            \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":75,"column":22},"end":{"line":79,"column":29}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pageBody") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":76,"column":22},"end":{"line":76,"column":44}}})) != null ? stack1 : "")
    + "\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":78,"column":22},"end":{"line":78,"column":40}}})) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"page__inner\">\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":41,"column":10}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"any","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":2},"end":{"line":92,"column":10}}})) != null ? stack1 : "")
    + "\r\n  <div class=\"article__container\">\r\n  </div>\r\n\r\n</div>\r\n\r\n";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow js-shadow u-display-none\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["activator"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner activator__inner\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div class=\"activator__widget\">\r\n        <button class=\"btn-text activator__btn js-activator-click\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"buttonText") || (depth0 != null ? lookupProperty(depth0,"buttonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"buttonText","hash":{},"data":data,"loc":{"start":{"line":5,"column":67},"end":{"line":5,"column":83}}}) : helper))) != null ? stack1 : "")
    + "</button>\r\n    </div>\r\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["codeAnim"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-animated";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_code") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":9,"column":42},"end":{"line":9,"column":66}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"codeanim__playbackcontrols-container\">\r\n                    \r\n                </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "<div class=\"codeanim__anim-container js-codeanim-anim\" style=\"display: none;\">";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"codeanim__console-container codeanim__content"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_animation") : depth0)) != null ? lookupProperty(stack1,"_isEnabled") : stack1),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":69},"end":{"line":18,"column":122}}})) != null ? stack1 : "")
    + "\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"console")||(depth0 && lookupProperty(depth0,"console"))||container.hooks.helperMissing).call(alias1,{"name":"console","hash":{"class":"js-codeanim-console","lang":((stack1 = (depth0 != null ? lookupProperty(depth0,"_console") : depth0)) != null ? lookupProperty(stack1,"_lang") : stack1)},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":16},"end":{"line":29,"column":28}}})) != null ? stack1 : "")
    + "            </div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return " has-blur";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_console") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":21,"column":49},"end":{"line":21,"column":76}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_animation") : depth0)) != null ? lookupProperty(stack1,"_isEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":20},"end":{"line":28,"column":29}}})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_animation") : depth0)) != null ? lookupProperty(stack1,"_frames") : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":24},"end":{"line":27,"column":35}}})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"print") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":28},"end":{"line":26,"column":37}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"codeanim__console-print u-visibility-hidden\" data-frame-idx=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":25,"column":106},"end":{"line":25,"column":116}}}) : helper)))
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"print") || (depth0 != null ? lookupProperty(depth0,"print") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"print","hash":{},"data":data,"loc":{"start":{"line":25,"column":118},"end":{"line":25,"column":129}}}) : helper))) != null ? stack1 : "")
    + "</span>";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"codeanim__inspector-container codeanim__content\">\r\n                <div class=\"codeanim__inspector\">\r\n                    <div class=\"codeanim__inspector-inner\">\r\n                        <div class=\"codeanim__inspector-group\">\r\n                            <div class=\"codeanim__inspector-row is-header\">\r\n                                <div class=\"codeanim__inspector-cell codeanim__inspector-cell-name is-header\" style=\"width: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_animation") : depth0)) != null ? lookupProperty(stack1,"_maxNameLength") : stack1), depth0))
    + "em;\">Name</div>\r\n                                <div class=\"codeanim__inspector-cell codeanim__inspector-cell-value is-header\">Value</div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"codeanim__inspector-group js-codeanim-inspector-vars\">\r\n                        </div>\r\n                        <div class=\"codeanim__inspector-group js-codeanim-inspector-vars-invisible\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        "
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_animation") : depth0)) != null ? lookupProperty(stack1,"_isEnabled") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_animation") : depth0)) != null ? lookupProperty(stack1,"_isInspectorEnabled") : stack1),{"name":"all","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":53,"column":8},"end":{"line":53,"column":83}}})) != null ? stack1 : "")
    + "\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "</div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner codeanim__inner\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div class=\"codeanim__widget"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_animation") : depth0)) != null ? lookupProperty(stack1,"_isEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":32},"end":{"line":4,"column":80}}})) != null ? stack1 : "")
    + "\">\r\n        <div class=\"codeanim__code-container codeanim__content\">\r\n            "
    + ((stack1 = (lookupProperty(helpers,"code")||(depth0 && lookupProperty(depth0,"code"))||alias2).call(alias1,{"name":"code","hash":{"class":"js-codeanim-code","wrapping":(depth0 != null ? lookupProperty(depth0,"_wrapping") : depth0),"lang":((stack1 = (depth0 != null ? lookupProperty(depth0,"_code") : depth0)) != null ? lookupProperty(stack1,"_lang") : stack1)},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":9,"column":75}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_animation") : depth0)) != null ? lookupProperty(stack1,"_isEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":14,"column":19}}})) != null ? stack1 : "")
    + "        </div>\r\n        "
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_animation") : depth0)) != null ? lookupProperty(stack1,"_isEnabled") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_animation") : depth0)) != null ? lookupProperty(stack1,"_isInspectorEnabled") : stack1),{"name":"all","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":155}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_console") : depth0)) != null ? lookupProperty(stack1,"_isEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":31,"column":19}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"all")||(depth0 && lookupProperty(depth0,"all"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_animation") : depth0)) != null ? lookupProperty(stack1,"_isEnabled") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_animation") : depth0)) != null ? lookupProperty(stack1,"_isInspectorEnabled") : stack1),{"name":"all","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":54,"column":16}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["codeAnimInspectorVar"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"codeanim__inspector-cell-var-val codeanim__inspector-cell-var-val-spacer\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"val") || (depth0 != null ? lookupProperty(depth0,"val") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"val","hash":{},"data":data,"loc":{"start":{"line":6,"column":98},"end":{"line":6,"column":105}}}) : helper)))
    + "</div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"codeanim__inspector-cell codeanim__inspector-cell-var codeanim__inspector-cell-name\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":97},"end":{"line":1,"column":105}}}) : helper)))
    + "</div>\r\n<div class=\"codeanim__inspector-cell codeanim__inspector-cell-var codeanim__inspector-cell-value\">\r\n    <div class=\"codeanim__inspector-cell-value-inner\">\r\n        <div class=\"codeanim__inspector-cell-var-val js-codeanim-inspector-var-val\"></div>"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_vals") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":7,"column":19}}})) != null ? stack1 : "")
    + "</div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["accordion"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"accordion__item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":31},"end":{"line":8,"column":68}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":68},"end":{"line":8,"column":104}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":8,"column":118},"end":{"line":8,"column":128}}}) : helper)))
    + "\">\r\n\r\n      <button id=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":10,"column":29},"end":{"line":10,"column":39}}}) : helper)))
    + "-accordion-button\" class=\"accordion__item-btn js-toggle-item is-closed"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":109},"end":{"line":10,"column":145}}})) != null ? stack1 : "")
    + "\" aria-expanded=\"false\">\r\n        <div class=\"accordion__item-btn-inner\">\r\n\r\n          <div class=\"accordion__item-icon\">\r\n            <div class=\"icon\"></div>\r\n          </div>\r\n\r\n          <div class=\"accordion__item-title\">\r\n            <div class=\"accordion__item-title-inner\">\r\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":14},"end":{"line":19,"column":33}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </button>\r\n\r\n      <div class=\"accordion__item-content\" role=\"region\" aria-labelledby=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":26,"column":85},"end":{"line":26,"column":95}}}) : helper)))
    + "-accordion-button\">\r\n        <div class=\"accordion__item-content-inner"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":49},"end":{"line":27,"column":113}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_nestComponents") : depths[1]),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":10},"end":{"line":32,"column":17}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"any","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":10},"end":{"line":60,"column":18}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":62,"column":10},"end":{"line":68,"column":17}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " has-image";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":8,"column":85},"end":{"line":8,"column":97}}}) : helper)));
},"6":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1)) != null ? lookupProperty(stack1,"_parClasses") : stack1), depth0));
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"nestcomponent\" data-nestcomponent-id=\""
    + alias1(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias1(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data,"loc":{"start":{"line":31,"column":73},"end":{"line":31,"column":83}}}) : helper)))
    + "\"></div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"accordion__item-image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":53},"end":{"line":35,"column":104}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":104},"end":{"line":35,"column":165}}})) != null ? stack1 : "")
    + "\">\r\n            \r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":37,"column":12},"end":{"line":49,"column":19}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":12},"end":{"line":57,"column":19}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"img","hash":{"lightbox":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_lightbox") : stack1),"alt":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),"classes":"accordion__item-image"},"data":data,"loc":{"start":{"line":43,"column":14},"end":{"line":43,"column":117}}})) != null ? stack1 : "")
    + "\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":12},"end":{"line":49,"column":12}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <div class=\"accordion__item-graphic\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":47,"column":16},"end":{"line":47,"column":43}}})) != null ? stack1 : "")
    + "\r\n              </div>\r\n            ";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"component__attribution accordion__attribution\">\r\n              <div class=\"component__attribution-inner accordion__attribution-inner\">\r\n                "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n              </div>\r\n            </div>\r\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"accordion__item-body\">\r\n            <div class=\"accordion__item-body-inner\">\r\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":65,"column":14},"end":{"line":65,"column":32}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n          </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner accordion__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget accordion__widget\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":74,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component-footer"),depth0,{"name":"component-footer","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["assessmentResults"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__feedback assessmentresults__feedback\">\r\n      <div class=\"component__feedback-inner assessmentresults__feedback-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"retryFeedback") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":20,"column":15}}})) != null ? stack1 : "")
    + "\r\n        <button class=\"btn-text assessmentresults__retry-btn js-assessment-retry-btn\">\r\n          <span>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_retry") : depth0)) != null ? lookupProperty(stack1,"button") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":24,"column":12},"end":{"line":28,"column":19}}})) != null ? stack1 : "")
    + "          </span>\r\n        </button>\r\n\r\n      </div>\r\n    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"assessmentresults__retry-feedback\">\r\n          <div class=\"assessmentresults__retry-feedback-inner\">\r\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"retryFeedback") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":39}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_retry") : depth0)) != null ? lookupProperty(stack1,"button") : stack1), depth0))
    + "\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "            Retry\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"component__inner assessmentresults__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget assessmentresults__widget\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isRetryEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":34,"column":11}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["blank"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"component__inner blank__inner\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["gmcq"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":78},"end":{"line":5,"column":193}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":150},"end":{"line":5,"column":186}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data) {
    return "radiogroup";
},"7":function(container,depth0,helpers,partials,data) {
    return "group";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"gmcq__item js-mcq-item item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":44},"end":{"line":8,"column":54}}}) : helper)))
    + " "
    + alias4((lookupProperty(helpers,"odd")||(depth0 && lookupProperty(depth0,"odd"))||alias2).call(alias1,(data && lookupProperty(data,"index")),{"name":"odd","hash":{},"data":data,"loc":{"start":{"line":8,"column":55},"end":{"line":8,"column":69}}}))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":69},"end":{"line":8,"column":195}}})) != null ? stack1 : "")
    + "\">\r\n\r\n      <input class=\"gmcq__item-input js-item-input\" id=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":10,"column":67},"end":{"line":10,"column":77}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":79},"end":{"line":10,"column":128}}})) != null ? stack1 : "")
    + " type=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":135},"end":{"line":10,"column":182}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":184},"end":{"line":10,"column":229}}})) != null ? stack1 : "")
    + " aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"compile_a11y_normalize")||(depth0 && lookupProperty(depth0,"compile_a11y_normalize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"compile_a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":10,"column":242},"end":{"line":10,"column":275}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":10,"column":295},"end":{"line":10,"column":305}}}) : helper)))
    + "\" />\r\n\r\n      <label class=\"gmcq__item-label js-item-label"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":50},"end":{"line":12,"column":98}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":98},"end":{"line":12,"column":136}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":136},"end":{"line":12,"column":187}}})) != null ? stack1 : "")
    + "\" aria-hidden=\"true\" for=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":12,"column":224},"end":{"line":12,"column":234}}}) : helper)))
    + "\" data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":12,"column":254},"end":{"line":12,"column":264}}}) : helper)))
    + "\" >\r\n\r\n        <img class=\"gmcq__item-image\" src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" data-large=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"large") : stack1), depth0))
    + "\" data-small=\""
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"small") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.program(30, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":14,"column":125},"end":{"line":14,"column":207}}})) != null ? stack1 : "")
    + ">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(32, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":22,"column":15}}})) != null ? stack1 : "")
    + "\r\n        <div class=\"gmcq__item-option\">\r\n\r\n          <div class=\"gmcq__item-state\">\r\n            <div class=\"gmcq__item-icon gmcq__item-answer-icon"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(34, data, 0, blockParams, depths),"inverse":container.program(36, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":27,"column":62},"end":{"line":27,"column":117}}})) != null ? stack1 : "")
    + "\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"gmcq__item-icon gmcq__item-correct-icon\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"gmcq__item-icon gmcq__item-incorrect-icon\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n          </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(38, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":10},"end":{"line":44,"column":17}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n\r\n      </label>\r\n\r\n    </div>\r\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_canShowMarking") : depths[1]),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":94},"end":{"line":8,"column":184}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":8,"column":120},"end":{"line":8,"column":177}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name=\""
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-item\" ";
},"16":function(container,depth0,helpers,partials,data) {
    return "radio";
},"18":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"20":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"22":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"24":function(container,depth0,helpers,partials,data) {
    return " is-selected";
},"26":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\"";
},"30":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"component__attribution gmcq__attribution\">\r\n          <div class=\"component__attribution-inner gmcq__attribution-inner\">\r\n            "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    return " is-radio";
},"36":function(container,depth0,helpers,partials,data) {
    return " is-checkbox";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"gmcq__item-text\">\r\n            <div class=\"gmcq__item-text-inner\">\r\n              "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":41,"column":14},"end":{"line":41,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n          </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner gmcq__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget gmcq__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":44},"end":{"line":5,"column":204}}})) != null ? stack1 : "")
    + "\" role=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isRadio") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.program(7, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":5,"column":212},"end":{"line":5,"column":258}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":51,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n  <div class=\"btn__container\"></div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["graphic"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"large") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"small") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"any","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":18},"end":{"line":39,"column":10}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n    <div class=\"component__widget graphic__widget"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":7,"column":49},"end":{"line":7,"column":105}}})) != null ? stack1 : "")
    + "\">\r\n\r\n      <div class=\"graphic__image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":42},"end":{"line":9,"column":93}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1)) != null ? lookupProperty(stack1,"_classes") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":93},"end":{"line":9,"column":163}}})) != null ? stack1 : "")
    + "\">\r\n\r\n          "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||alias2).call(alias1,{"name":"img","hash":{"lightbox":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"lightbox") : stack1),"small":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"small") : stack1),"large":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"large") : stack1),"style":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"style") : stack1),"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"large") : stack1),"class":"graphic__image js-graphic-set-image-src"},"data":data,"loc":{"start":{"line":12,"column":10},"end":{"line":18,"column":41}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":8},"end":{"line":34,"column":15}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n\r\n    </div>\r\n  ";
},"3":function(container,depth0,helpers,partials,data) {
    return "";
},"5":function(container,depth0,helpers,partials,data) {
    return " img-only";
},"7":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"component__attribution graphic__attribution\">\r\n          <div class=\"component__attribution-inner graphic__attribution-inner\">\r\n            "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner graphic__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_graphic") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":39,"column":17}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component-footer"),depth0,{"name":"component-footer","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["hotgraphic"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-pin";
},"3":function(container,depth0,helpers,partials,data) {
    return " is-tile";
},"5":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n    <img class=\"hotgraphic__image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":9,"column":58},"end":{"line":9,"column":140}}})) != null ? stack1 : "")
    + ">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":4},"end":{"line":17,"column":11}}})) != null ? stack1 : "")
    + "\r\n    <div class=\"hotgraphic__pin-item-container\" role=\"list\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":39,"column":15}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\"";
},"10":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"component__attribution hotgraphic__attribution\">\r\n      <div class=\"component__attribution-inner hotgraphic__attribution-inner\">\r\n        "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"hotgraphic__pin-item\" role=\"listitem\">\r\n\r\n        <button class=\"btn-icon hotgraphic__pin item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":53},"end":{"line":24,"column":63}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":63},"end":{"line":24,"column":117}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_pin") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":117},"end":{"line":24,"column":154}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":154},"end":{"line":24,"column":190}}})) != null ? stack1 : "")
    + " js-hotgraphic-item-click\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":24,"column":229},"end":{"line":24,"column":239}}}) : helper)))
    + "\" style=\"top: "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_top") || (depth0 != null ? lookupProperty(depth0,"_top") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_top","hash":{},"data":data,"loc":{"start":{"line":24,"column":253},"end":{"line":24,"column":263}}}) : helper))) != null ? stack1 : "")
    + "%; left: "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_left") || (depth0 != null ? lookupProperty(depth0,"_left") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_left","hash":{},"data":data,"loc":{"start":{"line":24,"column":272},"end":{"line":24,"column":283}}}) : helper))) != null ? stack1 : "")
    + "%;\">\r\n\r\n          <span class=\"aria-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":26,"column":35},"end":{"line":26,"column":44}}}) : helper)))
    + ".</span>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_pin") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":34,"column":17}}})) != null ? stack1 : "")
    + "\r\n        </button>\r\n\r\n      </div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"17":function(container,depth0,helpers,partials,data) {
    return " has-pin-image";
},"19":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"hotgraphic__pin-image-container item-"
    + alias1(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data,"loc":{"start":{"line":29,"column":59},"end":{"line":29,"column":69}}}) : helper)))
    + "\">\r\n            <img class=\"hotgraphic__pin-image\" src=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_pin") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\">\r\n          </div>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "          <div class=\"icon\"></div>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n    <div class=\"hotgraphic__tile-item-container\" role=\"list\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":6},"end":{"line":59,"column":15}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"hotgraphic__tile-item\" role=\"listitem\">\r\n\r\n        <button class=\"hotgraphic__tile item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":50,"column":45},"end":{"line":50,"column":55}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":55},"end":{"line":50,"column":109}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":109},"end":{"line":50,"column":145}}})) != null ? stack1 : "")
    + " js-hotgraphic-item-click\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":50,"column":184},"end":{"line":50,"column":194}}}) : helper)))
    + "\">\r\n\r\n          <span class=\"aria-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":52,"column":35},"end":{"line":52,"column":44}}}) : helper)))
    + ".</span>\r\n\r\n          <img class=\"hotgraphic__tile-image\" src=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\">\r\n\r\n        </button>\r\n\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner hotgraphic__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget hotgraphic__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_useGraphicsAsPins") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":5,"column":50},"end":{"line":5,"column":114}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":114},"end":{"line":5,"column":165}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_useGraphicsAsPins") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":63,"column":15}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["hotgraphicPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"hotgraphic-popup__item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":36},"end":{"line":4,"column":72}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":72},"end":{"line":4,"column":108}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":108},"end":{"line":4,"column":142}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRound") : depths[1]),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":142},"end":{"line":4,"column":177}}})) != null ? stack1 : "")
    + "\" data-index="
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":4,"column":190},"end":{"line":4,"column":200}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"unless","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":200},"end":{"line":4,"column":251}}})) != null ? stack1 : "")
    + ">\r\n\r\n    <div class=\"hotgraphic-popup__item-content\">\r\n      <div class=\"hotgraphic-popup__item-content-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":15,"column":15}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":23,"column":15}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"hotgraphic-popup__item-image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":54},"end":{"line":28,"column":105}}})) != null ? stack1 : "")
    + "\">\r\n\r\n      <img class=\"hotgraphic-popup__item-image\" src=\""
    + alias2(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.program(21, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":30,"column":71},"end":{"line":30,"column":153}}})) != null ? stack1 : "")
    + ">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":6},"end":{"line":38,"column":13}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n\r\n  </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":4,"column":53},"end":{"line":4,"column":65}}}) : helper)));
},"4":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-active";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-round";
},"10":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":56}}})) != null ? stack1 : "")
    + " class=\"hotgraphic-popup__item-title\" "
    + container.escapeExpression((lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":10,"column":94},"end":{"line":10,"column":125}}}))
    + ">\r\n          <div class=\"hotgraphic-popup__item-title-inner\">\r\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":12,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return " id=\"notify-heading\"";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"hotgraphic-popup__item-body\">\r\n          <div class=\"hotgraphic-popup__item-body-inner\">\r\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":20,"column":12},"end":{"line":20,"column":30}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\"";
},"21":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"component__attribution hotgraphic-popup__item-attribution\">\r\n        <div class=\"component__attribution-inner hotgraphic-popup__item-attribution-inner\">\r\n          "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    return " hide-pagination";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"hotgraphic-popup__nav\">\r\n\r\n    <button class=\"btn-icon hotgraphic-popup__controls back js-hotgraphic-controls-click\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\r\n      <div class=\"icon\"></div>\r\n    </button>\r\n\r\n    <div class=\"hotgraphic-popup__count\"></div>\r\n\r\n    <button class=\"btn-icon hotgraphic-popup__controls next js-hotgraphic-controls-click\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\">\r\n      <div class=\"icon\"></div>\r\n    </button>\r\n\r\n  </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"hotgraphic-popup__inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":43,"column":11}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n\r\n<div class=\"hotgraphic-popup__toolbar"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hidePagination") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":37},"end":{"line":47,"column":83}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hidePagination") : depth0),{"name":"unless","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":2},"end":{"line":63,"column":13}}})) != null ? stack1 : "")
    + "\r\n  <button class=\"btn-icon hotgraphic-popup__close js-hotgraphic-popup-close\" aria-label=\""
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"closePopup") : stack1), depth0))
    + "\">\r\n    <div class=\"icon\"></div>\r\n  </button>\r\n\r\n</div>\r\n\r\n"
    + alias2(((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":71,"column":0},"end":{"line":71,"column":19}}}) : helper)))
    + "\r\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["matching"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":82},"end":{"line":5,"column":197}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":154},"end":{"line":5,"column":190}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"matching__item item item-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":41},"end":{"line":8,"column":51}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":51},"end":{"line":8,"column":177}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":16,"column":13}}})) != null ? stack1 : "")
    + "\r\n      <div class=\"matching__select-container\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"dropdown"),depth0,{"name":"dropdown","hash":{"_dropdownIndex":(data && lookupProperty(data,"index")),"_id":(depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]),"placeholder":(depths[1] != null ? lookupProperty(depths[1],"placeholder") : depths[1])},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n        <div class=\"matching__select-state\">\r\n          <div class=\"matching__select-icon matching__select-correct-icon\">\r\n            <div class=\"icon\"></div>\r\n          </div>\r\n          <div class=\"matching__select-icon matching__select-incorrect-icon\">\r\n            <div class=\"icon\"></div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_canShowMarking") : depths[1]),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":76},"end":{"line":8,"column":166}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":8,"column":102},"end":{"line":8,"column":159}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"matching__item-title\">\r\n        <div class=\"matching__item-title_inner\">\r\n          "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner matching__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget matching__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":48},"end":{"line":5,"column":208}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":34,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n  <div class=\"btn__container\"></div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["mcq"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":77},"end":{"line":5,"column":192}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":149},"end":{"line":5,"column":185}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data) {
    return "radiogroup";
},"7":function(container,depth0,helpers,partials,data) {
    return "group";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"mcq__item js-mcq-item item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":43},"end":{"line":8,"column":53}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":53},"end":{"line":8,"column":179}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":8,"column":199},"end":{"line":8,"column":209}}}) : helper)))
    + "\">\r\n\r\n      <input class=\"mcq__item-input js-item-input\" id=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":10,"column":66},"end":{"line":10,"column":76}}}) : helper)))
    + "-input\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":84},"end":{"line":10,"column":133}}})) != null ? stack1 : "")
    + " type=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":10,"column":140},"end":{"line":10,"column":187}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":188},"end":{"line":10,"column":233}}})) != null ? stack1 : "")
    + " aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"compile_a11y_normalize")||(depth0 && lookupProperty(depth0,"compile_a11y_normalize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"compile_a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":10,"column":246},"end":{"line":10,"column":279}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":10,"column":299},"end":{"line":10,"column":309}}}) : helper)))
    + "\" />\r\n\r\n      <label class=\"mcq__item-label js-item-label"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":49},"end":{"line":12,"column":97}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":97},"end":{"line":12,"column":135}}})) != null ? stack1 : "")
    + "\" aria-hidden=\"true\" for=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":12,"column":172},"end":{"line":12,"column":182}}}) : helper)))
    + "-input\" data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":12,"column":208},"end":{"line":12,"column":218}}}) : helper)))
    + "\" >\r\n\r\n        <div class=\"mcq__item-state\">\r\n          <div class=\"mcq__item-icon mcq__item-answer-icon"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.program(28, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":15,"column":58},"end":{"line":15,"column":113}}})) != null ? stack1 : "")
    + "\">\r\n            <div class=\"icon\"></div>\r\n          </div>\r\n          <div class=\"mcq__item-icon mcq__item-correct-icon\">\r\n            <div class=\"icon\"></div>\r\n          </div>\r\n          <div class=\"mcq__item-icon mcq__item-incorrect-icon\">\r\n            <div class=\"icon\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mcq__item-text\">\r\n          <div class=\"mcq__item-text-inner\">\r\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":30}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n\r\n      </label>\r\n\r\n    </div>\r\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_canShowMarking") : depths[1]),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":78},"end":{"line":8,"column":168}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":8,"column":104},"end":{"line":8,"column":161}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name=\""
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-item\" ";
},"16":function(container,depth0,helpers,partials,data) {
    return "radio";
},"18":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"20":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"22":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"24":function(container,depth0,helpers,partials,data) {
    return " is-selected";
},"26":function(container,depth0,helpers,partials,data) {
    return " is-radio";
},"28":function(container,depth0,helpers,partials,data) {
    return " is-checkbox";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner mcq__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget mcq__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":43},"end":{"line":5,"column":203}}})) != null ? stack1 : "")
    + "\" role=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isRadio") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.program(7, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":5,"column":211},"end":{"line":5,"column":257}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":35,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n  <div class=\"btn__container\"></div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["media"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <button class=\"aria-label js-skip-to-transcript\" tabindex=\"-1\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_components") : stack1)) != null ? lookupProperty(stack1,"_media") : stack1)) != null ? lookupProperty(stack1,"skipToTranscript") : stack1), depth0))
    + "\"></button>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"poster") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":4},"end":{"line":15,"column":11}}})) != null ? stack1 : "")
    + "    <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp3") : stack1), depth0))
    + "\" type=\"audio/mp3\" style=\"width: 100%; height: 100%;\"/>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <img class=\"media_poster is-audio\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"poster") : stack1), depth0))
    + "\">\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogg") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":41,"column":11}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogg") : stack1), depth0))
    + "\" type=\"audio/ogg\" style=\"width: 100%; height: 100%;\"/>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <video aria-hidden=\"true\" preload=\"none\" width=\"640\" height=\"360\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_playsinline") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":72},"end":{"line":21,"column":110}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"type") : stack1),"video/vimeo",{"name":"equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data,"loc":{"start":{"line":21,"column":111},"end":{"line":21,"column":193}}})) != null ? stack1 : "")
    + " style=\"width:100%; height:100%;\" controls=\"controls\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"source") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":34,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_useClosedCaptions") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":8},"end":{"line":39,"column":15}}})) != null ? stack1 : "")
    + "      </video>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "playsinline";
},"12":function(container,depth0,helpers,partials,data) {
    return "";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "poster=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"poster") : stack1), depth0))
    + "\"";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <source src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"source") : stack1), depth0))
    + "\" type=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"type") : stack1), depth0))
    + "\"/>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp4") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":10},"end":{"line":27,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogv") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":10},"end":{"line":30,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"webm") : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":10},"end":{"line":33,"column":17}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp4") : stack1), depth0))
    + "\" type=\"video/mp4\"/>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"ogv") : stack1), depth0))
    + "\" type=\"video/ogg\"/>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"webm") : stack1), depth0))
    + "\" type=\"video/webm\"/>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"cc") : stack1),{"name":"each","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":10},"end":{"line":38,"column":19}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <track kind=\"subtitles\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":37,"column":41},"end":{"line":37,"column":48}}}) : helper)))
    + "\" type=\"text/vtt\" srclang=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"srclang") || (depth0 != null ? lookupProperty(depth0,"srclang") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"srclang","hash":{},"data":data,"loc":{"start":{"line":37,"column":75},"end":{"line":37,"column":86}}}) : helper)))
    + "\" />\r\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"media__transcript-container\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":4},"end":{"line":58,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_externalTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":4},"end":{"line":70,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":4},"end":{"line":78,"column":11}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"media__transcript-btn media__transcript-btn-inline js-media-inline-transcript-toggle\" aria-expanded=\"false\">\r\n      <span class=\"media__transcript-btn-text\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.program(32, data, 0),"data":data,"loc":{"start":{"line":51,"column":8},"end":{"line":55,"column":15}}})) != null ? stack1 : "")
    + "      </span>\r\n    </button>\r\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1), depth0))
    + "\r\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLink") : stack1), depth0))
    + "\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <button class=\"media__transcript-btn media__transcript-btn-external js-media-external-transcript-click\" onclick=\"window.open('"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLink") : stack1), depth0))
    + "')\">\r\n      <span class=\"media__transcript-btn-text\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLinkButton") : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(32, data, 0),"data":data,"loc":{"start":{"line":63,"column":8},"end":{"line":67,"column":15}}})) != null ? stack1 : "")
    + "      </span>\r\n    </button>\r\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLinkButton") : stack1), depth0))
    + "\r\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"media__transcript-body-inline\" role=\"region\" aria-label=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(40, data, 0),"data":data,"loc":{"start":{"line":73,"column":73},"end":{"line":73,"column":198}}})) != null ? stack1 : "")
    + "\">\r\n      <div class=\"media__transcript-body-inline-inner\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptBody") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":75,"column":8},"end":{"line":75,"column":54}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"inlineTranscriptButton") : stack1), depth0));
},"40":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"transcriptLink") : stack1), depth0));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\r\n<div class=\"component__inner media__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_externalTranscript") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_transcript") : depth0)) != null ? lookupProperty(stack1,"_inlineTranscript") : stack1),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":8,"column":10}}})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget media__widget\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_media") : depth0)) != null ? lookupProperty(stack1,"mp3") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":42,"column":9}}})) != null ? stack1 : "")
    + "  </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_transcript") : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":2},"end":{"line":81,"column":9}}})) != null ? stack1 : "")
    + "\r\n  "
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component-footer"),depth0,{"name":"component-footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " \r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["narrative"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " narrative__text-controls";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"narrative__content-item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":43},"end":{"line":11,"column":79}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":11,"column":93},"end":{"line":11,"column":103}}}) : helper)))
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":19,"column":17}}})) != null ? stack1 : "")
    + "\r\n          "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":71}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":10},"end":{"line":29,"column":17}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"narrative__content-title\">\r\n            <div class=\"narrative__content-title-inner\" "
    + container.escapeExpression((lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"componentItem",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":15,"column":56},"end":{"line":15,"column":94}}}))
    + ">\r\n              "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":16,"column":14},"end":{"line":16,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n          </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"a11y_aria_image")||(depth0 && lookupProperty(depth0,"a11y_aria_image"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"a11y_aria_image","hash":{},"data":data,"loc":{"start":{"line":21,"column":30},"end":{"line":21,"column":64}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"narrative__content-body\">\r\n            <div class=\"narrative__content-body-inner\">\r\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":26,"column":14},"end":{"line":26,"column":32}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n          </div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"narrative__progress js-narrative-progress-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":71},"end":{"line":42,"column":107}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":42,"column":121},"end":{"line":42,"column":131}}}) : helper)))
    + "\"></div>\r\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <button class=\"narrative__strapline-btn js-narrative-strapline-open-popup"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":83},"end":{"line":60,"column":119}}})) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"strapline") || (depth0 != null ? lookupProperty(depth0,"strapline") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strapline","hash":{},"data":data,"loc":{"start":{"line":60,"column":133},"end":{"line":60,"column":148}}}) : helper))) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_itemWidth") : depths[1]), depth0))
    + "%\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":60,"column":196},"end":{"line":60,"column":206}}}) : helper)))
    + "\">\r\n\r\n            <div class=\"narrative__strapline-title\">\r\n              <div class=\"narrative__strapline-title-inner\">\r\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"strapline") || (depth0 != null ? lookupProperty(depth0,"strapline") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strapline","hash":{},"data":data,"loc":{"start":{"line":64,"column":16},"end":{"line":64,"column":31}}}) : helper))) != null ? stack1 : "")
    + "\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"btn-icon narrative__strapline-icon\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n\r\n            <div class=\"focus-rect\"></div>\r\n\r\n          </button>\r\n";
},"16":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"narrative__slider-image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":95,"column":53},"end":{"line":95,"column":89}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":95,"column":89},"end":{"line":95,"column":140}}})) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias3(alias2((depths[1] != null ? lookupProperty(depths[1],"_itemWidth") : depths[1]), depth0))
    + "%\" data-index=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":95,"column":188},"end":{"line":95,"column":198}}}) : helper)))
    + "\">\r\n\r\n          <img class=\"narrative__slider-image\" src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" aria-hidden=\"true\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":99,"column":10},"end":{"line":105,"column":17}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"component__attribution narrative__attribution\">\r\n            <div class=\"component__attribution-inner narrative__attribution-inner\">\r\n              "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n            </div>\r\n          </div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"narrative__progress js-narrative-progress-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":117,"column":65},"end":{"line":117,"column":101}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":117,"column":115},"end":{"line":117,"column":125}}}) : helper)))
    + "\"></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner narrative__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget narrative__widget"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hasNavigationInTextArea") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":49},"end":{"line":5,"column":113}}})) != null ? stack1 : "")
    + "\">\r\n\r\n    <div class=\"narrative__content\">\r\n      <div class=\"narrative__content-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":32,"column":17}}})) != null ? stack1 : "")
    + "\r\n        <div class=\"narrative__controls-container u-clearfix\">\r\n\r\n          <button class=\"btn-icon narrative__controls narrative__controls-left js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\r\n            <div class=\"icon\"></div>\r\n          </button>\r\n\r\n          <div class=\"narrative__indicators\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":12},"end":{"line":43,"column":21}}})) != null ? stack1 : "")
    + "          </div>\r\n\r\n          <button class=\"btn-icon narrative__controls narrative__controls-right js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\">\r\n            <div class=\"icon\"></div>\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"narrative__strapline\">\r\n\r\n      <div class=\"narrative__strapline-header\">\r\n        <div class=\"narrative__strapline-header-inner u-clearfix\" style=\"width: "
    + alias3(((helper = (helper = lookupProperty(helpers,"_totalWidth") || (depth0 != null ? lookupProperty(depth0,"_totalWidth") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"_totalWidth","hash":{},"data":data,"loc":{"start":{"line":57,"column":80},"end":{"line":57,"column":95}}}) : helper)))
    + "%\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":10},"end":{"line":75,"column":19}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"narrative__slide-container\">\r\n\r\n      <button class=\"btn-icon narrative__controls narrative__controls-left js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\r\n        <div class=\"icon\"></div>\r\n      </button>\r\n\r\n      <button class=\"btn-icon narrative__controls narrative__controls-right js-narrative-controls-click\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\">\r\n        <div class=\"icon\"></div>\r\n      </button>\r\n\r\n      <div class=\"narrative__slider u-clearfix\" style=\"width: "
    + alias3(((helper = (helper = lookupProperty(helpers,"_totalWidth") || (depth0 != null ? lookupProperty(depth0,"_totalWidth") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"_totalWidth","hash":{},"data":data,"loc":{"start":{"line":92,"column":62},"end":{"line":92,"column":77}}}) : helper)))
    + "%\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":94,"column":8},"end":{"line":108,"column":17}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"narrative__indicators narrative__slide-indicators\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":116,"column":6},"end":{"line":118,"column":15}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["slider"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":80},"end":{"line":5,"column":246}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_canShowMarking") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":152},"end":{"line":5,"column":239}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data,"loc":{"start":{"line":5,"column":175},"end":{"line":5,"column":232}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"slider__label-container js-slider-label-container\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"labelStart") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":16,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"labelEnd") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"slider__label-start\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_components") : stack1)) != null ? lookupProperty(stack1,"_slider") : stack1)) != null ? lookupProperty(stack1,"labelStart") : stack1), depth0))
    + "\">\r\n        <div class=\"slider__label-start-inner\">\r\n          "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"labelStart") || (depth0 != null ? lookupProperty(depth0,"labelStart") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelStart","hash":{},"data":data,"loc":{"start":{"line":13,"column":10},"end":{"line":13,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"slider__label-end\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_components") : stack1)) != null ? lookupProperty(stack1,"_slider") : stack1)) != null ? lookupProperty(stack1,"labelEnd") : stack1), depth0))
    + "\">\r\n        <div class=\"slider__label-end-inner\">\r\n          "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"labelEnd") || (depth0 != null ? lookupProperty(depth0,"labelEnd") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"labelEnd","hash":{},"data":data,"loc":{"start":{"line":21,"column":10},"end":{"line":21,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"slider__number js-slider-number js-slider-number-click\" data-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":31,"column":83},"end":{"line":31,"column":92}}}) : helper)))
    + "\" aria-hidden=\"true\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":31,"column":113},"end":{"line":31,"column":122}}}) : helper)))
    + "</div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_userAnswer") || (depth0 != null ? lookupProperty(depth0,"_userAnswer") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_userAnswer","hash":{},"data":data,"loc":{"start":{"line":45,"column":100},"end":{"line":45,"column":115}}}) : helper)));
},"17":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_scaleStart") || (depth0 != null ? lookupProperty(depth0,"_scaleStart") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_scaleStart","hash":{},"data":data,"loc":{"start":{"line":45,"column":123},"end":{"line":45,"column":138}}}) : helper)));
},"19":function(container,depth0,helpers,partials,data) {
    return "rtl";
},"21":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner slider__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget slider__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":46},"end":{"line":5,"column":257}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"labelStart") : depth0),(depth0 != null ? lookupProperty(depth0,"labelEnd") : depth0),{"name":"any","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":27,"column":12}}})) != null ? stack1 : "")
    + "\r\n    <div class=\"slider__number-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":6},"end":{"line":32,"column":15}}})) != null ? stack1 : "")
    + "      <div class=\"slider__number-model-range js-slider-model-range\"></div>\r\n      <div class=\"slider__number-answer\"></div>\r\n      <div class=\"slider__number-selection js-slider-number-selection a11y-ignore\" aria-hidden=\"true\" tabindex=\"-1\"></div>\r\n    </div>\r\n\r\n    <div class=\"slider__scale-container js-slider-scale\">\r\n      <div class=\"slider__scale-notch slider__scale-notch-start\"></div>\r\n      <div class=\"slider__scale-notch-container js-slider-scale-notch-container\"></div>\r\n      <div class=\"slider__scale-notch slider__scale-notch-end\"></div>\r\n    </div>\r\n\r\n    <div class=\"slider__item"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":28},"end":{"line":44,"column":118}}})) != null ? stack1 : "")
    + "\">\r\n      <input class=\"slider__item-input js-slider-item-input\" type=\"range\" value=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_userAnswer") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":45,"column":81},"end":{"line":45,"column":145}}})) != null ? stack1 : "")
    + "\" min=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_scaleStart") || (depth0 != null ? lookupProperty(depth0,"_scaleStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_scaleStart","hash":{},"data":data,"loc":{"start":{"line":45,"column":152},"end":{"line":45,"column":167}}}) : helper)))
    + "\" max=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_scaleEnd") || (depth0 != null ? lookupProperty(depth0,"_scaleEnd") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_scaleEnd","hash":{},"data":data,"loc":{"start":{"line":45,"column":174},"end":{"line":45,"column":187}}}) : helper)))
    + "\" aria-valuenow=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_userAnswer") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(17, data, 0),"data":data,"loc":{"start":{"line":45,"column":204},"end":{"line":45,"column":268}}})) != null ? stack1 : "")
    + "\" aria-valuemin=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_scaleStart") || (depth0 != null ? lookupProperty(depth0,"_scaleStart") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_scaleStart","hash":{},"data":data,"loc":{"start":{"line":45,"column":285},"end":{"line":45,"column":300}}}) : helper)))
    + "\" aria-valuemax=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_scaleEnd") || (depth0 != null ? lookupProperty(depth0,"_scaleEnd") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_scaleEnd","hash":{},"data":data,"loc":{"start":{"line":45,"column":317},"end":{"line":45,"column":330}}}) : helper)))
    + "\" data-direction=\""
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_marginDir") : depth0),"right",{"name":"equals","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":348},"end":{"line":45,"column":392}}})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":394},"end":{"line":45,"column":436}}})) != null ? stack1 : "")
    + ">\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"btn__container\"></div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["text"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner text__inner\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  "
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component-footer"),depth0,{"name":"component-footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " \r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["textinput"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":83},"end":{"line":6,"column":198}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":155},"end":{"line":6,"column":191}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"textinput__item js-textinput-item"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":49},"end":{"line":9,"column":175}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"prefix") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":6},"end":{"line":17,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.program(17, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":47,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"suffix") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":6},"end":{"line":55,"column":13}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_canShowMarking") : depths[1]),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":74},"end":{"line":9,"column":164}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":9,"column":100},"end":{"line":9,"column":157}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"textinput__item-prefix-container\">\r\n      <label class=\"textinput__item-prefix\" id=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":13,"column":59},"end":{"line":13,"column":69}}}) : helper)))
    + "-aria\" for=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":13,"column":92},"end":{"line":13,"column":102}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"prefix") || (depth0 != null ? lookupProperty(depth0,"prefix") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"prefix","hash":{},"data":data,"loc":{"start":{"line":13,"column":116},"end":{"line":13,"column":128}}}) : helper))) != null ? stack1 : "")
    + "\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"prefix") || (depth0 != null ? lookupProperty(depth0,"prefix") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"prefix","hash":{},"data":data,"loc":{"start":{"line":14,"column":8},"end":{"line":14,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\r\n      </label>\r\n      </div>\r\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"textinput__item-textbox-container\">\r\n        <input class=\"textinput__item-textbox js-textinput-textbox\" type=\"text\" placeholder=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":21,"column":93},"end":{"line":21,"column":110}}}) : helper))) != null ? stack1 : "")
    + "\" data-id=\"input-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":21,"column":127},"end":{"line":21,"column":137}}}) : helper)))
    + "\" id=\""
    + alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":21,"column":154},"end":{"line":21,"column":164}}}) : helper)))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"prefix") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.program(15, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":21,"column":166},"end":{"line":21,"column":269}}})) != null ? stack1 : "")
    + " value=\"\">\r\n\r\n        <div class=\"textinput__item-state\">\r\n          <div class=\"textinput__item-icon textinput__item-correct-icon\">\r\n            <div class=\"icon\"></div>\r\n          </div>\r\n          <div class=\"textinput__item-icon textinput__item-incorrect-icon\">\r\n            <div class=\"icon\"></div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-labelledby=\""
    + alias1(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias1(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"index","hash":{},"data":data,"loc":{"start":{"line":21,"column":208},"end":{"line":21,"column":218}}}) : helper)))
    + "-aria\"";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":21,"column":244},"end":{"line":21,"column":261}}}) : helper))) != null ? stack1 : "")
    + "\"";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"textinput__item-textbox-container\">\r\n        <input class=\"textinput__item-textbox js-textinput-textbox\" type=\"text\" placeholder=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"placeholder") || (depth0 != null ? lookupProperty(depth0,"placeholder") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"placeholder","hash":{},"data":data,"loc":{"start":{"line":35,"column":93},"end":{"line":35,"column":110}}}) : helper))) != null ? stack1 : "")
    + "\" data-id=\"input-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":35,"column":127},"end":{"line":35,"column":137}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"userAnswer") || (depth0 != null ? lookupProperty(depth0,"userAnswer") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userAnswer","hash":{},"data":data,"loc":{"start":{"line":35,"column":146},"end":{"line":35,"column":160}}}) : helper)))
    + "\" disabled=\"true\">\r\n\r\n        <div class=\"textinput__item-state\">\r\n          <div class=\"textinput__item-icon textinput__item-correct-icon\">\r\n            <div class=\"icon\"></div>\r\n          </div>\r\n          <div class=\"textinput__item-icon textinput__item-incorrect-icon\">\r\n            <div class=\"icon\"></div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n";
},"19":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"textinput__item-suffix-container\">\r\n      <label class=\"textinput__item-suffix\" id=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":51,"column":59},"end":{"line":51,"column":69}}}) : helper)))
    + "-aria\" for=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":51,"column":92},"end":{"line":51,"column":102}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"suffix") || (depth0 != null ? lookupProperty(depth0,"suffix") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"suffix","hash":{},"data":data,"loc":{"start":{"line":51,"column":116},"end":{"line":51,"column":128}}}) : helper))) != null ? stack1 : "")
    + "\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"suffix") || (depth0 != null ? lookupProperty(depth0,"suffix") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"suffix","hash":{},"data":data,"loc":{"start":{"line":52,"column":8},"end":{"line":52,"column":20}}}) : helper))) != null ? stack1 : "")
    + "\r\n      </label>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner textinput__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget textinput__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":49},"end":{"line":6,"column":209}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":58,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n  <div class=\"btn__container\"></div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["essay"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":79},"end":{"line":5,"column":194}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":151},"end":{"line":5,"column":187}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner essay__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget essay__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":45},"end":{"line":5,"column":205}}})) != null ? stack1 : "")
    + "\">\r\n\r\n    <div class=\"essay__textarea-container\">\r\n        <textarea \r\n            class=\"essay__textarea js-essay-textarea\" \r\n            placeholder=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"placeholder") : depth0), depth0))
    + "\"\r\n            maxlength=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_answerLength") : depth0)) != null ? lookupProperty(stack1,"_max") : stack1), depth0))
    + "\"\r\n            rows=\"5\"></textarea>\r\n\r\n        <div class=\"essay__answer js-essay-answer\" hidden>\r\n          "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"_answer") : depth0), depth0))
    + "\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"essay__footer\">  \r\n      <button class=\"essay__btn essay__answer-btn js-essay-answer-btn btn-text\">Show example essay</button>\r\n      \r\n      <div class=\"essay__length js-essay-length\">\r\n        <span class=\"js-essay-length-count\">0</span>&nbsp;/&nbsp;<span>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_answerLength") : depth0)) != null ? lookupProperty(stack1,"_max") : stack1), depth0))
    + "</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"btn__container\"></div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["finder"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":80},"end":{"line":5,"column":195}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":152},"end":{"line":5,"column":188}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"finder__item js-finder-item item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":9,"column":51},"end":{"line":9,"column":61}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":61},"end":{"line":9,"column":187}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":9,"column":207},"end":{"line":9,"column":217}}}) : helper)))
    + "\">\r\n\r\n        <input \r\n          class=\"finder__item-input js-item-input\" \r\n          id=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":14,"column":25},"end":{"line":14,"column":35}}}) : helper)))
    + "-input\"  \r\n          type=\"checkbox\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":25},"end":{"line":15,"column":70}}})) != null ? stack1 : "")
    + " \r\n          aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"compile_a11y_normalize")||(depth0 && lookupProperty(depth0,"compile_a11y_normalize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"compile_a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":16,"column":22},"end":{"line":16,"column":55}}})) != null ? stack1 : "")
    + "\" \r\n          data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":17,"column":28},"end":{"line":17,"column":38}}}) : helper)))
    + "\" />\r\n\r\n        <label \r\n          class=\"finder__item-label js-item-label"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":49},"end":{"line":20,"column":97}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":97},"end":{"line":20,"column":135}}})) != null ? stack1 : "")
    + "\" \r\n          aria-hidden=\"true\" \r\n          for=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":22,"column":26},"end":{"line":22,"column":36}}}) : helper)))
    + "-input\" \r\n          data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":23,"column":28},"end":{"line":23,"column":38}}}) : helper)))
    + "\">\r\n\r\n          <div class=\"finder__item-state\">\r\n            <div class=\"finder__item-icon finder__item-answer-icon"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":27,"column":66},"end":{"line":27,"column":121}}})) != null ? stack1 : "")
    + "\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"finder__item-icon finder__item-correct-icon\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"finder__item-icon finder__item-incorrect-icon\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"finder__item-content js-item-content\">\r\n            <div class=\"finder__item-content-inner js-item-content-inner\">\r\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":41,"column":14},"end":{"line":41,"column":32}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </label>\r\n\r\n      </div>\r\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_canShowMarking") : depths[1]),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":86},"end":{"line":9,"column":176}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":9,"column":112},"end":{"line":9,"column":169}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"10":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"12":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"14":function(container,depth0,helpers,partials,data) {
    return " is-selected";
},"16":function(container,depth0,helpers,partials,data) {
    return " is-radio";
},"18":function(container,depth0,helpers,partials,data) {
    return " is-checkbox";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner finder__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget finder__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":46},"end":{"line":5,"column":206}}})) != null ? stack1 : "")
    + "\">\r\n\r\n    <div class=\"finder__items-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":55,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"btn__container\"></div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["flipCard"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"flipcard__item-title\">\r\n                        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_frontSide") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":15,"column":24},"end":{"line":15,"column":54}}})) != null ? stack1 : "")
    + "\r\n                    </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"flipcard__item-title\">\r\n                        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_backSide") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":25,"column":24},"end":{"line":25,"column":53}}})) != null ? stack1 : "")
    + "\r\n                    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner flipcard__inner\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div class=\"flipcard__widget\">\r\n\r\n        <div class=\"flipcard__btn-container\">\r\n            <button class=\"btn-text flipcard__btn js-flipcard-btn\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_backSide") : depth0)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "</button>\r\n        </div>\r\n\r\n        <div class=\"flipcard__card js-flipcard-card\">\r\n            <div class=\"flipcard__card-inner\">\r\n                <div class=\"flipcard__content-front flipcard__content\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_frontSide") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":20},"end":{"line":17,"column":27}}})) != null ? stack1 : "")
    + "                    <div class=\"flipcard__item-body\">\r\n                        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_frontSide") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":24},"end":{"line":19,"column":53}}})) != null ? stack1 : "")
    + "\r\n                    </div>\r\n                </div>\r\n                <div class=\"flipcard__content-back flipcard__content\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_backSide") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":20},"end":{"line":27,"column":27}}})) != null ? stack1 : "")
    + "                    <div class=\"flipcard__item-body\">\r\n                        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_backSide") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":29,"column":24},"end":{"line":29,"column":52}}})) != null ? stack1 : "")
    + "\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component-footer"),depth0,{"name":"component-footer","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["freeThinking"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n            <div class=\"freethinking__content-inner\">\r\n                <div class=\"freethinking__content-header js-freethinking-header\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_activity") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":20},"end":{"line":15,"column":27}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_activity") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":20},"end":{"line":23,"column":27}}})) != null ? stack1 : "")
    + "\r\n                    <div class=\"freethinking__content-instruction\">\r\n                        <div class=\"freethinking__content-instruction-inner\">\r\n                            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_activity") : depth0)) != null ? lookupProperty(stack1,"instruction") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":27,"column":28},"end":{"line":27,"column":63}}})) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"freethinking__content-input\">\r\n                    <textarea \r\n                        class=\"freethinking__content-textarea js-freethinking-textarea\" \r\n                        placeholder=\""
    + container.escapeExpression(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_freeThinking") : depth0)) != null ? lookupProperty(stack1,"_user") : stack1)) != null ? lookupProperty(stack1,"inputPlaceholder") : stack1), depth0))
    + "\"\r\n                        rows=\"5\"></textarea>\r\n                </div>\r\n\r\n                <div class=\"freethinking__content-correct js-freethinking-correct\">\r\n\r\n                    <div class=\"freethinking__content-correct-instruction\">\r\n                        <div class=\"freethinking__content-correct-instruction-inner\">\r\n                            "
    + ((stack1 = alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_freeThinking") : depth0)) != null ? lookupProperty(stack1,"_correct") : stack1)) != null ? lookupProperty(stack1,"instruction") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"freethinking__content-correct-body\">\r\n                        <div class=\"freethinking__content-correct-body-inner\">\r\n                            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_activity") : depth0)) != null ? lookupProperty(stack1,"_correct") : stack1)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":51,"column":28},"end":{"line":51,"column":65}}})) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <div class=\"freethinking__content-title\">\r\n                            <div class=\"freethinking__content-title-inner\">\r\n                                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_activity") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":32},"end":{"line":12,"column":61}}})) != null ? stack1 : "")
    + "\r\n                            </div>\r\n                        </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"freethinking__content-body\">\r\n                        <div class=\"freethinking__content-body-inner\">\r\n                            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_activity") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":20,"column":28},"end":{"line":20,"column":56}}})) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner freethinking__inner\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div class=\"freethinking__widget\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"paper")||(depth0 && lookupProperty(depth0,"paper"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"paper","hash":{"class":"freethinking__content"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":56,"column":18}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n    <div class=\"btn__container\">\r\n        <button class=\"btn-text btn__action freethinking__btn js-freethinking-btn\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_freeThinking") : depth0)) != null ? lookupProperty(stack1,"_buttons") : stack1)) != null ? lookupProperty(stack1,"_showCorrectAnswer") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0)) != null ? stack1 : "")
    + "</button>\r\n    </div>\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component-footer"),depth0,{"name":"component-footer","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["glabel"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":80},"end":{"line":6,"column":195}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":152},"end":{"line":6,"column":188}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\"";
},"9":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div \r\n        class=\"glabel__item js-glabel-item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":42},"end":{"line":17,"column":78}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isIncorrect") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":78},"end":{"line":17,"column":118}}})) != null ? stack1 : "")
    + "\"\r\n        style=\"top: "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_top") || (depth0 != null ? lookupProperty(depth0,"_top") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_top","hash":{},"data":data,"loc":{"start":{"line":18,"column":20},"end":{"line":18,"column":30}}}) : helper))) != null ? stack1 : "")
    + "%; left: "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_left") || (depth0 != null ? lookupProperty(depth0,"_left") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_left","hash":{},"data":data,"loc":{"start":{"line":18,"column":39},"end":{"line":18,"column":50}}}) : helper))) != null ? stack1 : "")
    + "%; width: "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_width") || (depth0 != null ? lookupProperty(depth0,"_width") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_width","hash":{},"data":data,"loc":{"start":{"line":18,"column":60},"end":{"line":18,"column":72}}}) : helper))) != null ? stack1 : "")
    + "%; height: "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_height") || (depth0 != null ? lookupProperty(depth0,"_height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_height","hash":{},"data":data,"loc":{"start":{"line":18,"column":83},"end":{"line":18,"column":96}}}) : helper))) != null ? stack1 : "")
    + "%;\"\r\n        role=\"button\"\r\n        data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":30}}}) : helper)))
    + "\">\r\n\r\n        <div class=\"glabel__item-outline\"></div>\r\n\r\n        <div class=\"glabel__item-label"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_align") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":26,"column":38},"end":{"line":26,"column":101}}})) != null ? stack1 : "")
    + "\">\r\n          \r\n          <div class=\"glabel__item-tail\"></div>\r\n\r\n          <div \r\n            class=\"glabel__item-tooltip js-glabel-tooltip"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":57},"end":{"line":33,"column":93}}})) != null ? stack1 : "")
    + "\" \r\n            data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":34,"column":24},"end":{"line":34,"column":34}}}) : helper)))
    + "\">\r\n            <div class=\"glabel__item-text\">\r\n              <div class=\"glabel__item-text-inner\">\r\n                <span class=\"js-glabel-item-tooltip\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tooltip") || (depth0 != null ? lookupProperty(depth0,"tooltip") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tooltip","hash":{},"data":data,"loc":{"start":{"line":37,"column":53},"end":{"line":37,"column":64}}}) : helper)))
    + "</span>\r\n                <div class=\"glabel__item-icon glabel__item-incorrect-icon\"><div class=\"icon icon-cross\"></div></div>\r\n              </div>\r\n            </div>\r\n            <span class=\"aria-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":41,"column":37},"end":{"line":41,"column":46}}}) : helper)))
    + ".</span>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " align-dir-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_align") || (depth0 != null ? lookupProperty(depth0,"_align") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_align","hash":{},"data":data,"loc":{"start":{"line":26,"column":63},"end":{"line":26,"column":73}}}) : helper)));
},"16":function(container,depth0,helpers,partials,data) {
    return " align-dir-12";
},"18":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"20":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"glabel__option\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":53,"column":48},"end":{"line":53,"column":58}}}) : helper)))
    + "\">\r\n          <div class=\"glabel__option-inner\">\r\n            <div class=\"glabel__option-key\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"key") || (depth0 != null ? lookupProperty(depth0,"key") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":55,"column":44},"end":{"line":55,"column":51}}}) : helper)))
    + ":</div>\r\n            <div class=\"glabel__option-body\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":56,"column":45},"end":{"line":56,"column":53}}}) : helper)))
    + "</div>\r\n          </div>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner glabel__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget glabel__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":46},"end":{"line":6,"column":206}}})) != null ? stack1 : "")
    + "\">\r\n\r\n    <div class=\"glabel__item-container js-glabel-item-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":63},"end":{"line":9,"column":124}}})) != null ? stack1 : "")
    + "\" role=\"list\">\r\n\r\n      <img class=\"glabel__image js-glabel-img\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":12,"column":70},"end":{"line":12,"column":152}}})) != null ? stack1 : "")
    + " />\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":46,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n    <div class=\"glabel__key\">\r\n      <div class=\"glabel__key-inner\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_options") : depth0),{"name":"each","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":52,"column":6},"end":{"line":59,"column":15}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"btn__container\"></div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["glabelPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":5,"column":75},"end":{"line":5,"column":87}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"5":function(container,depth0,helpers,partials,data) {
    return " is-active";
},"7":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"9":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"11":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"glabel-popup__option\">\r\n            <div class=\"glabel-popup__option-inner\">\r\n\r\n              <input \r\n                class=\"glabel-popup__item-input js-glabel-item-input\"\r\n                id=\""
    + alias2(alias1(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_parent") : depths[1])) != null ? lookupProperty(stack1,"_id") : stack1), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":21,"column":39},"end":{"line":21,"column":49}}}) : helper)))
    + "-input\"\r\n                "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_parent") : depths[1])) != null ? lookupProperty(stack1,"_isRadio") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":16},"end":{"line":22,"column":81}}})) != null ? stack1 : "")
    + "\r\n                type=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_parent") : depths[1])) != null ? lookupProperty(stack1,"_isRadio") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":23,"column":22},"end":{"line":23,"column":77}}})) != null ? stack1 : "")
    + "\"\r\n                "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias3,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_parent") : depths[1])) != null ? lookupProperty(stack1,"_isEnabled") : stack1),{"name":"unless","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":24,"column":69}}})) != null ? stack1 : "")
    + "\r\n                "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depths[1] != null ? lookupProperty(depths[1],"_isCorrect") : depths[1]),{"name":"if","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":16},"end":{"line":25,"column":59}}})) != null ? stack1 : "")
    + " \r\n                aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"compile_a11y_normalize")||(depth0 && lookupProperty(depth0,"compile_a11y_normalize"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"compile_a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":26,"column":28},"end":{"line":26,"column":61}}})) != null ? stack1 : "")
    + "\"\r\n                aria-labelledby=\""
    + alias2(alias1(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_parent") : depths[1])) != null ? lookupProperty(stack1,"_id") : stack1), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":27,"column":52},"end":{"line":27,"column":62}}}) : helper)))
    + "-aria\"\r\n                data-index=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":28,"column":28},"end":{"line":28,"column":38}}}) : helper)))
    + "\" />\r\n\r\n              <label \r\n                class=\"glabel-popup__item-label js-glabel-item-label"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias3,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":68},"end":{"line":31,"column":113}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":113},"end":{"line":31,"column":151}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":151},"end":{"line":31,"column":187}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":187},"end":{"line":31,"column":223}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"_isIncorrect") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":223},"end":{"line":31,"column":263}}})) != null ? stack1 : "")
    + "\" \r\n                id=\""
    + alias2(alias1(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_parent") : depths[1])) != null ? lookupProperty(stack1,"_id") : stack1), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":32,"column":39},"end":{"line":32,"column":49}}}) : helper)))
    + "-aria\"\r\n                for=\""
    + alias2(alias1(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_parent") : depths[1])) != null ? lookupProperty(stack1,"_id") : stack1), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":33,"column":40},"end":{"line":33,"column":50}}}) : helper)))
    + "-input\" \r\n                aria-hidden=\"true\"\r\n                data-index=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":35,"column":28},"end":{"line":35,"column":38}}}) : helper)))
    + "\" >\r\n\r\n                <div class=\"glabel-popup__item-state\">\r\n                  <div class=\"glabel-popup__item-icon glabel-popup__item-answer-icon"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_parent") : depths[1])) != null ? lookupProperty(stack1,"_isRadio") : stack1),{"name":"if","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.program(30, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":38,"column":84},"end":{"line":38,"column":147}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias3,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":147},"end":{"line":38,"column":192}}})) != null ? stack1 : "")
    + "\">\r\n                    <div class=\"icon\"></div>\r\n                    <div class=\"glabel-popup__item-key-icon\">\r\n                      <div class=\"glabel-popup__item-key-icon-inner\">\r\n                        "
    + alias2(((helper = (helper = lookupProperty(helpers,"key") || (depth0 != null ? lookupProperty(depth0,"key") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":42,"column":24},"end":{"line":42,"column":31}}}) : helper)))
    + "\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"glabel-popup__item-icon glabel-popup__item-correct-icon\">\r\n                    <div class=\"icon\"></div>\r\n                  </div>\r\n                  <div class=\"glabel-popup__item-icon glabel-popup__item-incorrect-icon\">\r\n                    <div class=\"icon\"></div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"glabel-popup__item-text\">\r\n                  <div class=\"glabel-popup__item-text-inner\">\r\n                    "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":56,"column":20},"end":{"line":56,"column":38}}})) != null ? stack1 : "")
    + "\r\n                  </div>\r\n                </div>\r\n\r\n              </label>\r\n            </div>\r\n          </div>\r\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name=\""
    + container.escapeExpression(container.lambda(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_parent") : depths[1])) != null ? lookupProperty(stack1,"_id") : stack1), depth0))
    + "-item\" ";
},"16":function(container,depth0,helpers,partials,data) {
    return "radio";
},"18":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"20":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"22":function(container,depth0,helpers,partials,data) {
    return "disabled=\"true\"";
},"24":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"26":function(container,depth0,helpers,partials,data) {
    return " is-selected";
},"28":function(container,depth0,helpers,partials,data) {
    return " is-radio";
},"30":function(container,depth0,helpers,partials,data) {
    return " is-checkbox";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_parent") : depth0)) != null ? lookupProperty(stack1,"_graphic") : stack1)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\"";
},"34":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"36":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " align-dir-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_align") || (depth0 != null ? lookupProperty(depth0,"_align") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_align","hash":{},"data":data,"loc":{"start":{"line":80,"column":59},"end":{"line":80,"column":69}}}) : helper)));
},"38":function(container,depth0,helpers,partials,data) {
    return " align-dir-12";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"glabel-popup__inner\">\r\n\r\n  <div class=\"glabel-popup__content-container js-glabel-popup-content-helper\">\r\n    <div \r\n      class=\"glabel-popup__content js-glabel-popup-content"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":58},"end":{"line":5,"column":94}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":94},"end":{"line":5,"column":130}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":130},"end":{"line":5,"column":164}}})) != null ? stack1 : "")
    + "\" \r\n      data-index="
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":6,"column":17},"end":{"line":6,"column":27}}}) : helper)))
    + "\r\n      "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":7,"column":57}}})) != null ? stack1 : "")
    + ">\r\n\r\n      <div class=\"glabel-popup__content-anim js-glabel-popup-content-anim"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":73},"end":{"line":10,"column":109}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isIncorrect") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":109},"end":{"line":10,"column":149}}})) != null ? stack1 : "")
    + "\">\r\n      </div>\r\n\r\n      <div class=\"glabel-popup__content-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_options") : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":8},"end":{"line":63,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div \r\n    class=\"glabel__item js-glabel-item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":38},"end":{"line":70,"column":74}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isIncorrect") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":74},"end":{"line":70,"column":114}}})) != null ? stack1 : "")
    + "\"\r\n    role=\"button\"\r\n    data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":72,"column":16},"end":{"line":72,"column":26}}}) : helper)))
    + "\">\r\n\r\n    <div class=\"glabel__item-outline\">\r\n      <img class=\"glabel-popup__image js-glabel-popup-img\" src=\""
    + alias4(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_parent") : depth0)) != null ? lookupProperty(stack1,"_graphic") : stack1)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_parent") : depth0)) != null ? lookupProperty(stack1,"_graphic") : stack1)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(32, data, 0, blockParams, depths),"inverse":container.program(34, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":76,"column":90},"end":{"line":76,"column":188}}})) != null ? stack1 : "")
    + " />\r\n    </div>\r\n\r\n    <div class=\"glabel__item-label"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_align") : depth0),{"name":"if","hash":{},"fn":container.program(36, data, 0, blockParams, depths),"inverse":container.program(38, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":80,"column":34},"end":{"line":80,"column":97}}})) != null ? stack1 : "")
    + "\">\r\n      \r\n      <div class=\"glabel__item-tail\"></div>\r\n\r\n      <div \r\n        class=\"glabel__item-tooltip js-glabel-popup-tooltip"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":87,"column":59},"end":{"line":87,"column":95}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":87,"column":95},"end":{"line":87,"column":133}}})) != null ? stack1 : "")
    + "\" \r\n        data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":88,"column":20},"end":{"line":88,"column":30}}}) : helper)))
    + "\">\r\n        <div class=\"glabel__item-text\">\r\n          <div class=\"glabel__item-text-inner\">\r\n            <span class=\"js-glabel-item-tooltip\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"tooltip") || (depth0 != null ? lookupProperty(depth0,"tooltip") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tooltip","hash":{},"data":data,"loc":{"start":{"line":91,"column":49},"end":{"line":91,"column":60}}}) : helper)))
    + "</span>\r\n            <div class=\"glabel__item-icon glabel__item-incorrect-icon\"><div class=\"icon icon-cross\"></div></div>\r\n          </div>\r\n        </div>\r\n        <span class=\"aria-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":95,"column":33},"end":{"line":95,"column":42}}}) : helper)))
    + ".</span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n"
    + alias4(((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":102,"column":0},"end":{"line":102,"column":19}}}) : helper)))
    + "\r\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["hotgraphicFlip"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-pin";
},"3":function(container,depth0,helpers,partials,data) {
    return " is-tile";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "style=\"grid-template-columns: repeat("
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_itemSizing") : depth0)) != null ? lookupProperty(stack1,"_maxCols") : stack1), depth0))
    + ", 1fr);\"";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div \r\n        class=\"hotgraphicflip__item js-hotgraphicflip-item-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":64},"end":{"line":15,"column":100}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_itemClasses") : depths[1]),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":100},"end":{"line":15,"column":150}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_itemSizing") : depths[1]),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":150},"end":{"line":15,"column":207}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_itemSizing") : depths[1])) != null ? lookupProperty(stack1,"_minHeight") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":207},"end":{"line":15,"column":294}}})) != null ? stack1 : "")
    + "\"\r\n        data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":16,"column":20},"end":{"line":16,"column":30}}}) : helper)))
    + "\" \r\n        role=\"button\">\r\n\r\n        <div class=\"hotgraphicflip__item-inner\">\r\n\r\n          <div class=\"hotgraphicflip__item-front\">\r\n            <div class=\"hotgraphicflip__item-front-inner\">\r\n              "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||alias2).call(alias1,{"name":"img","hash":{"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),"class":(lookupProperty(helpers,"concat")||(depth0 && lookupProperty(depth0,"concat"))||alias2).call(alias1,"hotgraphicflip__image ",((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_itemSizing") : depths[1])) != null ? lookupProperty(stack1,"_itemClasses") : stack1),{"name":"concat","hash":{},"data":data,"loc":{"start":{"line":23,"column":27},"end":{"line":23,"column":88}}})},"data":data,"loc":{"start":{"line":23,"column":14},"end":{"line":23,"column":108}}})) != null ? stack1 : "")
    + "\r\n              <span class=\"aria-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":24,"column":39},"end":{"line":24,"column":48}}}) : helper)))
    + ".</span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"hotgraphicflip__item-back\">\r\n            <div class=\"hotgraphicflip__item-back-inner\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":14},"end":{"line":34,"column":21}}})) != null ? stack1 : "")
    + "              <div class=\"hotgraphicflip__item-body\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":36,"column":16},"end":{"line":36,"column":34}}})) != null ? stack1 : "")
    + "\r\n              </div>\r\n              <div \r\n                class=\"hotgraphicflip__item-btn js-hotgraphicflip-item-btn\" \r\n                data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":40,"column":28},"end":{"line":40,"column":38}}}) : helper)))
    + "\"\r\n                role=\"button\"\r\n                title=\"Back\">\r\n                <span class=\"icon icon-backwards-arrow\"></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_itemClasses") : depths[1]), depth0));
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_itemSizing") : depths[1])) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " col-sm-minheight-"
    + container.escapeExpression(container.lambda(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_itemSizing") : depths[1])) != null ? lookupProperty(stack1,"_minHeight") : stack1), depth0));
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"hotgraphicflip__item-title\">\r\n                  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":32,"column":18},"end":{"line":32,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner hotgraphicflip__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget hotgraphicflip__widget"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":5,"column":54},"end":{"line":5,"column":104}}})) != null ? stack1 : "")
    + "\">\r\n    \r\n    <div \r\n      class=\"hotgraphicflip__item-container\" \r\n      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_itemSizing") : depth0)) != null ? lookupProperty(stack1,"_maxCols") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":10,"column":110}}})) != null ? stack1 : "")
    + " \r\n      role=\"list\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":6},"end":{"line":50,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n  </div>\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component-footer"),depth0,{"name":"component-footer","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["hotgraphicMini"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-pin";
},"3":function(container,depth0,helpers,partials,data) {
    return " is-tile";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_itemSizing") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div \r\n        class=\"hotgraphicmini__item js-hotgraphicmini-item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":58},"end":{"line":14,"column":94}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_itemClasses") : depths[1]),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":94},"end":{"line":14,"column":144}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"srcActive") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":144},"end":{"line":14,"column":194}}})) != null ? stack1 : "")
    + "\" \r\n        role=\"button\"\r\n        data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":16,"column":26},"end":{"line":16,"column":36}}}) : helper)))
    + "\">\r\n\r\n        <div class=\"hotgraphicmini__item-inner\">\r\n\r\n          <div class=\"hotgraphicmini__item-content js-hotgraphicmini-content\">\r\n            <div class=\"hotgraphicmini__item-content-inner\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":14},"end":{"line":27,"column":21}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":14},"end":{"line":32,"column":21}}})) != null ? stack1 : "")
    + "            </div>\r\n          </div>\r\n\r\n          <div class=\"hotgraphicmini__item-btn-container sg-cols-item\">\r\n            <div\r\n              class=\"hotgraphicmini__item-btn js-hotgraphicmini-item-click\"\r\n              role=\"button\"\r\n              tabindex=\"0\"\r\n              data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":42,"column":32},"end":{"line":42,"column":42}}}) : helper)))
    + "\">\r\n              "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||alias2).call(alias1,{"name":"img","hash":{"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),"class":"hotgraphicmini__image"},"data":data,"loc":{"start":{"line":44,"column":14},"end":{"line":44,"column":70}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"srcActive") : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":45,"column":14},"end":{"line":47,"column":21}}})) != null ? stack1 : "")
    + "              <span class=\"aria-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":48,"column":39},"end":{"line":48,"column":48}}}) : helper)))
    + ".</span>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_itemClasses") : depths[1]), depth0));
},"12":function(container,depth0,helpers,partials,data) {
    return " has-active-state";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"hotgraphicmini__item-title\">\r\n                  "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":25,"column":18},"end":{"line":25,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\r\n                </div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <div class=\"hotgraphicmini__item-body\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":30,"column":34}}})) != null ? stack1 : "")
    + "\r\n              </div>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"img","hash":{"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"srcActive") : stack1),"class":"hotgraphicmini__image-active"},"data":data,"loc":{"start":{"line":46,"column":16},"end":{"line":46,"column":85}}})) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner hotgraphicmini__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget hotgraphicmini__widget"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":5,"column":54},"end":{"line":5,"column":104}}})) != null ? stack1 : "")
    + "\">\r\n    \r\n    <div \r\n      class=\"hotgraphicmini__item-container sizing-grid"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_itemSizing") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":55},"end":{"line":9,"column":106}}})) != null ? stack1 : "")
    + "\"\r\n      role=\"list\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":54,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n  </div>\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component-footer"),depth0,{"name":"component-footer","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["hotgraphicPlus"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-pin";
},"3":function(container,depth0,helpers,partials,data) {
    return " is-tile";
},"5":function(container,depth0,helpers,partials,data) {
    return " is-finder";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_finder") : depth0)) != null ? lookupProperty(stack1,"_isEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":6},"end":{"line":31,"column":13}}})) != null ? stack1 : "")
    + "\r\n      <div class=\"js-hotgraphicplus-item-container hotgraphicplus__pin-item-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":85},"end":{"line":34,"column":146}}})) != null ? stack1 : "")
    + "\" role=\"list\">\r\n\r\n        "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||container.hooks.helperMissing).call(alias1,{"name":"img","hash":{"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),"classes":"hotgraphicplus__image"},"data":data,"loc":{"start":{"line":37,"column":8},"end":{"line":37,"column":66}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":8},"end":{"line":61,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n    \r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"hotgraphicplus__counter js-hotgraphicplus-counter"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_finder") : depth0)) != null ? lookupProperty(stack1,"_counter") : stack1)) != null ? lookupProperty(stack1,"_sizing") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":69},"end":{"line":11,"column":146}}})) != null ? stack1 : "")
    + "\">\r\n          <div class=\"hotgraphicplus__counter-sizer\"></div>\r\n          <div class=\"hotgraphicplus__counter-inner\">\r\n            <div class=\"hotgraphicplus__counter-content\">\r\n              <div class=\"hotgraphicplus__counter-num js-hotgraphicplus-counter-num\">\r\n                "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_items") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + "\r\n              </div>\r\n              <div class=\"hotgraphicplus__counter-suffix js-hotgraphicplus-counter-suffix\">\r\n                Remain\r\n              </div>\r\n            </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_finder") : depth0)) != null ? lookupProperty(stack1,"_hintEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":28,"column":19}}})) != null ? stack1 : "")
    + "          </div>\r\n        </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_finder") : depth0)) != null ? lookupProperty(stack1,"_counter") : stack1)) != null ? lookupProperty(stack1,"_sizing") : stack1)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"11":function(container,depth0,helpers,partials,data) {
    return "              <div class=\"hotgraphicplus__counter-hint\">\r\n                <div class=\"hotgraphicplus__counter-hint-inner js-hotgraphicplus-counter-hint\">\r\n                  Hint?\r\n                </div>\r\n              </div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"hotgraphicplus__pin-item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":44},"end":{"line":40,"column":80}}})) != null ? stack1 : "")
    + "\"\r\n          "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_graphic") : depths[1])) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":10},"end":{"line":41,"column":134}}})) != null ? stack1 : "")
    + "\r\n          role=\"button\"\r\n          data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":43,"column":22},"end":{"line":43,"column":32}}}) : helper)))
    + "\">\r\n\r\n          <button \r\n            class=\"btn-icon hotgraphicplus__pin item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":46,"column":53},"end":{"line":46,"column":63}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":63},"end":{"line":46,"column":117}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":46,"column":117},"end":{"line":46,"column":153}}})) != null ? stack1 : "")
    + " js-hotgraphicplus-item-click\" \r\n            data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":47,"column":24},"end":{"line":47,"column":34}}}) : helper)))
    + "\">\r\n\r\n            <span class=\"aria-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":49,"column":37},"end":{"line":49,"column":46}}}) : helper)))
    + ".</span>\r\n\r\n            <div class=\"hotgraphicplus__pin-image-container item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":51,"column":65},"end":{"line":51,"column":75}}}) : helper)))
    + "\">\r\n              <div class=\"hotgraphicplus__item-image-transition item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":52,"column":69},"end":{"line":52,"column":79}}}) : helper)))
    + "\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||alias2).call(alias1,{"name":"img","hash":{"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),"classes":"hotgraphicplus__pin-image"},"data":data,"loc":{"start":{"line":54,"column":16},"end":{"line":54,"column":78}}})) != null ? stack1 : "")
    + "\r\n              </div>\r\n            </div>\r\n\r\n          </button>\r\n\r\n        </div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":40,"column":61},"end":{"line":40,"column":73}}}) : helper)));
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "style=\"left: "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_left") : stack1), depth0)) != null ? stack1 : "")
    + "%; top: "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_top") : stack1), depth0)) != null ? stack1 : "")
    + "%; width: "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_width") : stack1), depth0)) != null ? stack1 : "")
    + "%;\"";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"22":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"24":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n      <div \r\n        class=\"js-hotgraphicplus-item-container hotgraphicplus__tile-item-container sizing-grid"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_itemSizing") : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":69,"column":95},"end":{"line":69,"column":146}}})) != null ? stack1 : "")
    + "\"\r\n        role=\"list\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":72,"column":8},"end":{"line":94,"column":17}}})) != null ? stack1 : "")
    + "      </div>\r\n\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_itemSizing") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"27":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"hotgraphicplus__tile-item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_itemSizing") : depths[1])) != null ? lookupProperty(stack1,"_align") : stack1),{"name":"if","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":73,"column":45},"end":{"line":73,"column":113}}})) != null ? stack1 : "")
    + "\" role=\"button\">\r\n          <div class=\"hotgraphicplus__tile-item-inner\">\r\n\r\n            <button \r\n              class=\"btn-icon hotgraphicplus__tile sg-cols-item item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":77,"column":69},"end":{"line":77,"column":79}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":79},"end":{"line":77,"column":133}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":77,"column":133},"end":{"line":77,"column":169}}})) != null ? stack1 : "")
    + " js-hotgraphicplus-item-click\" \r\n              data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":78,"column":26},"end":{"line":78,"column":36}}}) : helper)))
    + "\" \r\n              "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_graphic") : depths[1])) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":79,"column":14},"end":{"line":79,"column":138}}})) != null ? stack1 : "")
    + ">\r\n\r\n              <span class=\"aria-label\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":81,"column":39},"end":{"line":81,"column":48}}}) : helper)))
    + ".</span>\r\n\r\n              <div class=\"hotgraphicplus__tile-image-container item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":83,"column":68},"end":{"line":83,"column":78}}}) : helper)))
    + "\">\r\n                <div class=\"hotgraphicplus__item-image-transition item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":84,"column":71},"end":{"line":84,"column":81}}}) : helper)))
    + "\">\r\n                  "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||alias2).call(alias1,{"name":"img","hash":{"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),"classes":"hotgraphicplus__tile-image"},"data":data,"loc":{"start":{"line":86,"column":18},"end":{"line":86,"column":81}}})) != null ? stack1 : "")
    + "\r\n                </div>\r\n              </div>\r\n\r\n            </button>\r\n\r\n          </div>\r\n        </div>\r\n";
},"28":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " align-"
    + container.escapeExpression(container.lambda(((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_itemSizing") : depths[1])) != null ? lookupProperty(stack1,"_align") : stack1), depth0));
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"hotgraphicplus__tabs js-hotgraphicplus-tabs\">\r\n        <div class=\"hotgraphicplus__tabs-tail js-hotgraphicplus-tabs-tail\"></div>\r\n        <div class=\"hotgraphicplus__tabs-inner\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":104,"column":10},"end":{"line":127,"column":19}}})) != null ? stack1 : "")
    + "          <div class=\"hotgraphicplus__tabs-placeholder\">\r\n            <div class=\"hotgraphicplus__tabs-placeholder-inner\">\r\n              "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"instruction") || (depth0 != null ? lookupProperty(depth0,"instruction") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"instruction","hash":{},"data":data,"loc":{"start":{"line":130,"column":14},"end":{"line":130,"column":29}}}) : helper)))
    + "\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"hotgraphicplus__tabs-item item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":105,"column":53},"end":{"line":105,"column":63}}}) : helper)))
    + " js-hotgraphicplus-tab-item\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":105,"column":104},"end":{"line":105,"column":114}}}) : helper)))
    + "\">\r\n            <div class=\"hotgraphicplus__tabs-item-content\">\r\n              <div class=\"hotgraphicplus__tabs-item-content-inner\">\r\n                \r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":109,"column":16},"end":{"line":115,"column":23}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":117,"column":16},"end":{"line":123,"column":23}}})) != null ? stack1 : "")
    + "              </div>\r\n            </div>\r\n          </div>\r\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <div class=\"hotgraphicplus__tabs-item-content-title\">\r\n                    <div class=\"hotgraphicplus__tabs-item-content-title-inner\">\r\n                      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":112,"column":22},"end":{"line":112,"column":41}}})) != null ? stack1 : "")
    + "\r\n                    </div>\r\n                  </div>\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <div class=\"hotgraphicplus__tabs-item-content-body\">\r\n                    <div class=\"hotgraphicplus__tabs-item-content-body-inner\">\r\n                      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":120,"column":22},"end":{"line":120,"column":40}}})) != null ? stack1 : "")
    + "\r\n                    </div>\r\n                  </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner hotgraphicplus__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget hotgraphicplus__widget"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":5,"column":54},"end":{"line":5,"column":104}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_finder") : depth0)) != null ? lookupProperty(stack1,"_isEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":104},"end":{"line":5,"column":147}}})) != null ? stack1 : "")
    + "\">\r\n    \r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(24, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":97,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_tabs") : depth0)) != null ? lookupProperty(stack1,"_isEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(30, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":99,"column":4},"end":{"line":135,"column":11}}})) != null ? stack1 : "")
    + "  </div>\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component-footer"),depth0,{"name":"component-footer","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["hotgraphicPlusPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":4,"column":54},"end":{"line":4,"column":66}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"5":function(container,depth0,helpers,partials,data) {
    return " aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div\r\n          "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":10},"end":{"line":14,"column":54}}})) != null ? stack1 : "")
    + " \r\n          class=\"hotgraphicplus-popup__item-title\" "
    + container.escapeExpression((lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":15,"column":51},"end":{"line":15,"column":82}}}))
    + ">\r\n          <div class=\"hotgraphicplus-popup__item-title-inner\">\r\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":12},"end":{"line":17,"column":31}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    return " id=\"notify-heading\"";
},"10":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"img","hash":{"alt":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"srcPopup") : stack1),"class":"hotgraphicplus-popup__item-image"},"data":data,"loc":{"start":{"line":28,"column":14},"end":{"line":28,"column":103}}})) != null ? stack1 : "")
    + "\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"img","hash":{"alt":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),"class":"hotgraphicplus-popup__item-image"},"data":data,"loc":{"start":{"line":30,"column":14},"end":{"line":30,"column":98}}})) != null ? stack1 : "")
    + "\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"component__attribution hotgraphicplus-popup__item-attribution\">\r\n            <div class=\"component__attribution-inner hotgraphicplus-popup__item-attribution-inner\">\r\n              "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n            </div>\r\n          </div>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"hotgraphicplus-popup__item-body\">\r\n          <div class=\"hotgraphicplus-popup__item-body-inner\">\r\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":50,"column":12},"end":{"line":50,"column":30}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n";
},"22":function(container,depth0,helpers,partials,data) {
    return " has-filter";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"hotgraphicplus-popup__item-alt-container\">\r\n              "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||container.hooks.helperMissing).call(alias1,{"name":"img","hash":{"alt":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),"class":"hotgraphicplus-popup__item-image js-hotgraphicplus-popup-image alt-from"},"data":data,"loc":{"start":{"line":68,"column":14},"end":{"line":71,"column":35}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_filter") : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.program(27, data, 0),"data":data,"loc":{"start":{"line":73,"column":14},"end":{"line":84,"column":21}}})) != null ? stack1 : "")
    + "            </div>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||alias2).call(alias1,{"name":"img","hash":{"alt":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"srcPopup") : stack1),"style":(lookupProperty(helpers,"concat")||(depth0 && lookupProperty(depth0,"concat"))||alias2).call(alias1,"filter: ",((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_filter") : stack1),{"name":"concat","hash":{},"data":data,"loc":{"start":{"line":76,"column":24},"end":{"line":76,"column":60}}}),"class":"hotgraphicplus-popup__item-image alt-to"},"data":data,"loc":{"start":{"line":74,"column":16},"end":{"line":78,"column":37}}})) != null ? stack1 : "")
    + "\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"img","hash":{"alt":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"srcPopup") : stack1),"class":"hotgraphicplus-popup__item-image alt-to"},"data":data,"loc":{"start":{"line":80,"column":16},"end":{"line":83,"column":37}}})) != null ? stack1 : "")
    + "\r\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_filter") : stack1),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.program(32, data, 0),"data":data,"loc":{"start":{"line":87,"column":12},"end":{"line":98,"column":19}}})) != null ? stack1 : "");
},"30":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||alias2).call(alias1,{"name":"img","hash":{"alt":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),"style":(lookupProperty(helpers,"concat")||(depth0 && lookupProperty(depth0,"concat"))||alias2).call(alias1,"filter: ",((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_filter") : stack1),{"name":"concat","hash":{},"data":data,"loc":{"start":{"line":90,"column":22},"end":{"line":90,"column":58}}}),"class":"hotgraphicplus-popup__item-image js-hotgraphicplus-popup-image transition-filter"},"data":data,"loc":{"start":{"line":88,"column":14},"end":{"line":92,"column":35}}})) != null ? stack1 : "")
    + "\r\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"img","hash":{"alt":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),"class":"hotgraphicplus-popup__item-image js-hotgraphicplus-popup-image"},"data":data,"loc":{"start":{"line":94,"column":14},"end":{"line":97,"column":35}}})) != null ? stack1 : "")
    + "\r\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"component__attribution hotgraphicplus-popup__item-attribution\">\r\n        <div class=\"component__attribution-inner hotgraphicplus-popup__item-attribution-inner\">\r\n          "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"hotgraphicplus-popup__inner\">\r\n\r\n  <div \r\n    class=\"hotgraphicplus-popup__item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":37},"end":{"line":4,"column":73}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":73},"end":{"line":4,"column":109}}})) != null ? stack1 : "")
    + "\" \r\n    data-index="
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":5,"column":15},"end":{"line":5,"column":25}}}) : helper)))
    + "\r\n    "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":4},"end":{"line":6,"column":55}}})) != null ? stack1 : "")
    + ">\r\n\r\n    <div class=\"hotgraphicplus-popup__item-content\">\r\n      <div class=\"hotgraphicplus-popup__item-content-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":20,"column":15}}})) != null ? stack1 : "")
    + "\r\n        <div class=\"hotgraphicplus-popup__item-graphic-small"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":60},"end":{"line":23,"column":111}}})) != null ? stack1 : "")
    + "\">\r\n          <div class=\"js-hotgraphicplus-popup-close"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":51},"end":{"line":24,"column":112}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"srcPopup") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":31,"column":19}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":10},"end":{"line":42,"column":17}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n        \r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":8},"end":{"line":53,"column":15}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"hotgraphicplus-popup__item-graphic"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":50},"end":{"line":59,"column":101}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":101},"end":{"line":59,"column":162}}})) != null ? stack1 : "")
    + "\">\r\n\r\n      <div class=\"hotgraphicplus-popup__item-graphic-inner hotgraphicplus-popup__item-image-transition  js-hotgraphicplus-popup-image-transition js-hotgraphicplus-popup-close"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_filter") : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":174},"end":{"line":61,"column":216}}})) != null ? stack1 : "")
    + "\">\r\n        <div \r\n          class=\"hotgraphicplus-popup__item-image-transition-inner\">\r\n          \r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"srcPopup") : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(29, data, 0),"data":data,"loc":{"start":{"line":66,"column":10},"end":{"line":99,"column":17}}})) != null ? stack1 : "")
    + "        </div>\r\n      </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":103,"column":6},"end":{"line":109,"column":13}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n"
    + alias4(((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":117,"column":0},"end":{"line":117,"column":19}}}) : helper)))
    + "\r\n";
},"useData":true});

this["Handlebars"]["templates"]["imgFinder"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":83},"end":{"line":5,"column":198}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":155},"end":{"line":5,"column":191}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div \r\n            class=\"imgfinder__item js-imgfinder-item item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":13,"column":58},"end":{"line":13,"column":68}}}) : helper)))
    + "\" \r\n            data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":14,"column":30},"end":{"line":14,"column":40}}}) : helper)))
    + "\" \r\n            aria-hidden=\"true\"\r\n            style=\"left: "
    + alias4(alias5((depth0 != null ? lookupProperty(depth0,"_left") : depth0), depth0))
    + "%; top: "
    + alias4(alias5((depth0 != null ? lookupProperty(depth0,"_top") : depth0), depth0))
    + "%; width: "
    + alias4(alias5((depth0 != null ? lookupProperty(depth0,"_width") : depth0), depth0))
    + "%; height: "
    + alias4(alias5((depth0 != null ? lookupProperty(depth0,"_height") : depth0), depth0))
    + "%;\"></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner imgfinder__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget imgfinder__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":49},"end":{"line":5,"column":209}}})) != null ? stack1 : "")
    + "\">\r\n\r\n    <div class=\"imgfinder__item-container\">\r\n      <div class=\"imgfinder__item-container-inner js-imgfinder-item-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":77},"end":{"line":8,"column":138}}})) != null ? stack1 : "")
    + "\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||container.hooks.helperMissing).call(alias1,{"name":"img","hash":{"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),"classes":"imgfinder__image"},"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":61}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":17,"column":17}}})) != null ? stack1 : "")
    + "        <div class=\"imgfinder__outline-container js-imgfinder-outline-area\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  <div class=\"btn__container\"></div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["imgFinderOutline"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"imgfinder-outline__inner\">\r\n  <img class=\"imgfinder-outline__img\" src=\"assets/imgFinder-outline.svg\" />\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["matchingPlus"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":86},"end":{"line":7,"column":201}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":158},"end":{"line":7,"column":194}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div \r\n      class=\"matchingplus__item item js-matchingplus-item item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":11,"column":63},"end":{"line":11,"column":73}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":73},"end":{"line":11,"column":199}}})) != null ? stack1 : "")
    + "\"\r\n      data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":12,"column":24},"end":{"line":12,"column":34}}}) : helper)))
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\r\n      <div class=\"matchingplus__item-select\">\r\n        \r\n        <div class=\"matchingplus__select-container\">\r\n          <select \r\n            class=\"matchingplus__select js-matchingplus-select\" \r\n            aria-labelledby=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":30,"column":40},"end":{"line":30,"column":50}}}) : helper)))
    + "-label\"\r\n            id=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":31,"column":27},"end":{"line":31,"column":37}}}) : helper)))
    + "-select\"\r\n            data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":32,"column":30},"end":{"line":32,"column":40}}}) : helper)))
    + "\">\r\n              <option value=\"\" class=\"matchingplus__select-option is-disabled\" disabled selected>Select an option</option>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_options") : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":12},"end":{"line":36,"column":21}}})) != null ? stack1 : "")
    + "          </select>\r\n          <div class=\"matchingplus__item-state\">\r\n            <div class=\"matchingplus__item-icon matchingplus__item-correct-icon\"><div class=\"icon\"></div></div>\r\n            <div class=\"matchingplus__item-icon matchingplus__item-incorrect-icon\"><div class=\"icon\"></div></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div \r\n          class=\"matchingplus__dropdown js-matchingplus-dropdown\"\r\n          role=\"button\"\r\n          aria-hidden=\"true\"\r\n          data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":49,"column":28},"end":{"line":49,"column":38}}}) : helper)))
    + "\">\r\n          <div class=\"matchingplus__dropdown-trigger js-matchingplus-dropdown-trigger\">\r\n            <div class=\"matchingplus__dropdown-trigger-text js-matchingplus-dropdown-trigger-text\">\r\n              Select an option\r\n            </div>\r\n            <div class=\"matchingplus__dropdown-arrow\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"matchingplus__item-state\">\r\n              <div class=\"matchingplus__item-icon matchingplus__item-correct-icon\"><div class=\"icon\"></div></div>\r\n              <div class=\"matchingplus__item-icon matchingplus__item-incorrect-icon\"><div class=\"icon\"></div></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"matchingplus__dropdown-options\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_options") : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":63,"column":12},"end":{"line":71,"column":21}}})) != null ? stack1 : "")
    + "          </div>\r\n        </div>\r\n        \r\n\r\n\r\n        \r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_canShowMarking") : depths[1]),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":98},"end":{"line":11,"column":188}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":11,"column":124},"end":{"line":11,"column":181}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div \r\n        id=\""
    + alias1(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias1(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":16,"column":23},"end":{"line":16,"column":33}}}) : helper)))
    + "-label\"\r\n        class=\"matchingplus__item-text\">\r\n        <div class=\"matchingplus__item-text_inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":28}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <option data-value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":35,"column":34},"end":{"line":35,"column":44}}}) : helper)))
    + "\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":35,"column":53},"end":{"line":35,"column":63}}}) : helper)))
    + "\" class=\"matchingplus__select-option js-matchingplus-option\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":35,"column":124},"end":{"line":35,"column":134}}}) : helper))) != null ? stack1 : "")
    + "</option>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <div class=\"matchingplus__dropdown-option js-matchingplus-dropdown-option\" data-value=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":64,"column":101},"end":{"line":64,"column":111}}}) : helper)))
    + "\">\r\n                <div class=\"matchingplus__dropdown-option-text\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":65,"column":64},"end":{"line":65,"column":74}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n                <div class=\"matchingplus__item-state\">\r\n                  <div class=\"matchingplus__item-icon matchingplus__item-correct-icon\"><div class=\"icon\"></div></div>\r\n                  <div class=\"matchingplus__item-icon matchingplus__item-incorrect-icon\"><div class=\"icon\"></div></div>\r\n                </div>\r\n              </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner matchingplus__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n\r\n  <div class=\"component__widget matchingplus__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":52},"end":{"line":7,"column":212}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":96,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n  <div class=\"btn__container\"></div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["mcqCode"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":81},"end":{"line":5,"column":196}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":153},"end":{"line":5,"column":189}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"mcqcode__item js-mcqcode-item item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":9,"column":53},"end":{"line":9,"column":63}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":63},"end":{"line":9,"column":189}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":9,"column":209},"end":{"line":9,"column":219}}}) : helper)))
    + "\">\r\n\r\n        <input \r\n          class=\"mcqcode__item-input js-item-input\" \r\n          id=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":14,"column":25},"end":{"line":14,"column":35}}}) : helper)))
    + "-input\" \r\n          "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":10},"end":{"line":15,"column":59}}})) != null ? stack1 : "")
    + " \r\n          type=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.program(14, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":63}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":64},"end":{"line":16,"column":109}}})) != null ? stack1 : "")
    + " \r\n          data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":18,"column":28},"end":{"line":18,"column":38}}}) : helper)))
    + "\" />\r\n\r\n        <label \r\n          class=\"mcqcode__item-label js-item-label"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":50},"end":{"line":21,"column":98}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":98},"end":{"line":21,"column":136}}})) != null ? stack1 : "")
    + "\" \r\n          aria-hidden=\"true\" \r\n          for=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":23,"column":26},"end":{"line":23,"column":36}}}) : helper)))
    + "-input\" \r\n          data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":24,"column":28},"end":{"line":24,"column":38}}}) : helper)))
    + "\" >\r\n\r\n          <div class=\"mcqcode__item-state\">\r\n            <div class=\"mcqcode__item-icon mcqcode__item-answer-icon"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isRadio") : depths[1]),{"name":"if","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.program(24, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":28,"column":68},"end":{"line":28,"column":123}}})) != null ? stack1 : "")
    + "\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"mcqcode__item-icon mcqcode__item-correct-icon\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"mcqcode__item-icon mcqcode__item-incorrect-icon\">\r\n              <div class=\"icon\"></div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"mcqcode__item-content js-item-content\">\r\n            <div class=\"mcqcode__item-content-inner js-item-content-inner\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"code")||(depth0 && lookupProperty(depth0,"code"))||alias2).call(alias1,{"name":"code","hash":{"class":"mcqcode__codebox mcqcode__codebox-default js-item-codebox"},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":14},"end":{"line":44,"column":23}}})) != null ? stack1 : "")
    + "            </div>\r\n            <div class=\"mcqcode__item-content-feedback js-item-content-feedback\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </label>\r\n\r\n      </div>\r\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_canShowMarking") : depths[1]),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":88},"end":{"line":9,"column":178}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(8, data, 0),"data":data,"loc":{"start":{"line":9,"column":114},"end":{"line":9,"column":171}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name=\""
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-item\" ";
},"12":function(container,depth0,helpers,partials,data) {
    return "radio";
},"14":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"16":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"18":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"20":function(container,depth0,helpers,partials,data) {
    return " is-selected";
},"22":function(container,depth0,helpers,partials,data) {
    return " is-radio";
},"24":function(container,depth0,helpers,partials,data) {
    return " is-checkbox";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.program(29, data, 0),"data":data,"loc":{"start":{"line":43,"column":0},"end":{"line":43,"column":43}}})) != null ? stack1 : "")
    + "\r\n";
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = ((helper = (helper = lookupProperty(helpers,"text") || (depth0 != null ? lookupProperty(depth0,"text") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":43,"column":12},"end":{"line":43,"column":22}}}) : helper))) != null ? stack1 : "");
},"29":function(container,depth0,helpers,partials,data) {
    return "&nbsp;";
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "      <div class=\"mcqcode__console\">\r\n        ";
  stack1 = ((helper = (helper = lookupProperty(helpers,"console") || (depth0 != null ? lookupProperty(depth0,"console") : depth0)) != null ? helper : container.hooks.helperMissing),(options={"name":"console","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":8},"end":{"line":59,"column":46}}}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),options) : helper));
  if (!lookupProperty(helpers,"console")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n      </div>\r\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = ((helper = (helper = lookupProperty(helpers,"_console") || (depth0 != null ? lookupProperty(depth0,"_console") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_console","hash":{},"data":data,"loc":{"start":{"line":59,"column":20},"end":{"line":59,"column":34}}}) : helper))) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner mcqcode__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget mcqcode__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":47},"end":{"line":5,"column":207}}})) != null ? stack1 : "")
    + "\">\r\n\r\n    <div class=\"mcqcode__items-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":54,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_console") : depth0),{"name":"if","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":4},"end":{"line":61,"column":11}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n  <div class=\"btn__container\"></div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["mcqCodeFeedback"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"correctText") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":57}}})) != null ? stack1 : "")
    + "\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = ((helper = (helper = lookupProperty(helpers,"correctText") || (depth0 != null ? lookupProperty(depth0,"correctText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"correctText","hash":{},"data":data,"loc":{"start":{"line":2,"column":19},"end":{"line":2,"column":36}}}) : helper))) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "&nbsp;";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"code")||(depth0 && lookupProperty(depth0,"code"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"code","hash":{"class":"mcqcode__codebox mcqcode__codebox-correct"},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":9}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["mediaPlusChapters"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"mediaplus__chapters-item\">\r\n      <div class=\"mediaplus__chapters-item-inner\">\r\n        <div class=\"mediaplus__chapters-item-time\"><a class=\"js-mediaplus-chapter-item-time\" data-time=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_time") || (depth0 != null ? lookupProperty(depth0,"_time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_time","hash":{},"data":data,"loc":{"start":{"line":6,"column":104},"end":{"line":6,"column":113}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"time") || (depth0 != null ? lookupProperty(depth0,"time") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"time","hash":{},"data":data,"loc":{"start":{"line":6,"column":115},"end":{"line":6,"column":123}}}) : helper)))
    + "</a></div>\r\n        <div class=\"mediaplus__chapters-item-title\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":52},"end":{"line":7,"column":63}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n      </div>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"mediaplus__chapters\">\r\n  <div class=\"mediaplus__chapters-inner\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_chapters") : depth0)) != null ? lookupProperty(stack1,"_items") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":10,"column":13}}})) != null ? stack1 : "")
    + "  </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["mmcq"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-unique-options";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":135},"end":{"line":5,"column":250}}})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":207},"end":{"line":5,"column":243}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"mmcq__items-header-label\">\r\n        <div class=\"mmcq__items-header-label-inner\">\r\n          "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div \r\n      class=\"mmcq__item js-mmcq-item item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":20,"column":42},"end":{"line":20,"column":52}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":52},"end":{"line":20,"column":178}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_combineOptions") : depths[1]),{"name":"unless","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":178},"end":{"line":20,"column":317}}})) != null ? stack1 : "")
    + "\" \r\n      role=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isRadio") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.program(21, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":21,"column":58}}})) != null ? stack1 : "")
    + "\"\r\n      data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":22,"column":24},"end":{"line":22,"column":34}}}) : helper)))
    + "\">\r\n\r\n      <div class=\"mmcq__item-text\" id=\""
    + alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":24,"column":50},"end":{"line":24,"column":60}}}) : helper)))
    + "-aria\">\r\n        <div class=\"mmcq__item-text-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":26,"column":28}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"itemInputs"),depth0,{"name":"itemInputs","hash":{"_options":(depth0 != null ? lookupProperty(depth0,"_options") : depth0)},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    </div>\r\n";
},"10":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_canShowMarking") : depths[1]),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":77},"end":{"line":20,"column":167}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(12, data, 0),"data":data,"loc":{"start":{"line":20,"column":103},"end":{"line":20,"column":160}}})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_optionsColumns") : depths[1]),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.program(17, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":20,"column":208},"end":{"line":20,"column":306}}})) != null ? stack1 : "");
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " options-columns-"
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_optionsColumns") : depths[1]), depth0));
},"17":function(container,depth0,helpers,partials,data) {
    return " options-columns-3";
},"19":function(container,depth0,helpers,partials,data) {
    return "radiogroup";
},"21":function(container,depth0,helpers,partials,data) {
    return "group";
},"23":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_options") : depth0),{"name":"each","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":10},"end":{"line":77,"column":19}}})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "				  <div class=\"mmcq__item-input-container\">\r\n            <input \r\n              class=\"mmcq__item-input js-item-input\" \r\n              id=\""
    + alias2(alias1((depths[2] != null ? lookupProperty(depths[2],"_id") : depths[2]), depth0))
    + "-"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_index") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":39,"column":46},"end":{"line":39,"column":56}}}) : helper)))
    + "-input\" \r\n              "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depths[2] != null ? lookupProperty(depths[2],"_isRadio") : depths[2]),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":14},"end":{"line":40,"column":83}}})) != null ? stack1 : "")
    + " \r\n              type=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depths[2] != null ? lookupProperty(depths[2],"_isRadio") : depths[2]),{"name":"if","hash":{},"fn":container.program(27, data, 0, blockParams, depths),"inverse":container.program(29, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":41,"column":20},"end":{"line":41,"column":70}}})) != null ? stack1 : "")
    + "\"\r\n              "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias3,(depths[2] != null ? lookupProperty(depths[2],"_isEnabled") : depths[2]),{"name":"unless","hash":{},"fn":container.program(31, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":14},"end":{"line":42,"column":62}}})) != null ? stack1 : "")
    + " \r\n              aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"compile_a11y_normalize")||(depth0 && lookupProperty(depth0,"compile_a11y_normalize"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"compile_a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":43,"column":26},"end":{"line":43,"column":59}}})) != null ? stack1 : "")
    + "\"  \r\n              data-adapt-index=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_index") : depths[1]), depth0))
    + "\"        \r\n              data-adapt-option-index=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":45,"column":39},"end":{"line":45,"column":49}}}) : helper)))
    + "\"\r\n              aria-labelledby=\""
    + alias2(alias1((depths[2] != null ? lookupProperty(depths[2],"_id") : depths[2]), depth0))
    + "-"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_index") : depths[1]), depth0))
    + "-aria "
    + alias2(alias1((depths[2] != null ? lookupProperty(depths[2],"_id") : depths[2]), depth0))
    + "-"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_index") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":46,"column":92},"end":{"line":46,"column":102}}}) : helper)))
    + "-aria\" />\r\n            \r\n\r\n            <label \r\n              class=\"mmcq__item-label js-item-label"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias3,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(33, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":51},"end":{"line":50,"column":99}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":99},"end":{"line":50,"column":137}}})) != null ? stack1 : "")
    + "\" \r\n              id=\""
    + alias2(alias1((depths[2] != null ? lookupProperty(depths[2],"_id") : depths[2]), depth0))
    + "-"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_index") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":51,"column":46},"end":{"line":51,"column":56}}}) : helper)))
    + "-aria\"\r\n              for=\""
    + alias2(alias1((depths[2] != null ? lookupProperty(depths[2],"_id") : depths[2]), depth0))
    + "-"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_index") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":52,"column":47},"end":{"line":52,"column":57}}}) : helper)))
    + "-input\" \r\n              aria-hidden=\"true\" \r\n              data-adapt-index=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_index") : depths[1]), depth0))
    + "\"\r\n              data-adapt-option-index=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":55,"column":39},"end":{"line":55,"column":49}}}) : helper)))
    + "\" >\r\n\r\n              <div class=\"mmcq__item-state\">\r\n                <div class=\"mmcq__item-icon mmcq__item-answer-icon"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depths[2] != null ? lookupProperty(depths[2],"_isRadio") : depths[2]),{"name":"if","hash":{},"fn":container.program(37, data, 0, blockParams, depths),"inverse":container.program(39, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":58,"column":66},"end":{"line":58,"column":124}}})) != null ? stack1 : "")
    + "\">\r\n                  <div class=\"icon\"></div>\r\n                </div>\r\n                <div class=\"mmcq__item-icon mmcq__item-correct-icon\">\r\n                  <div class=\"icon\"></div>\r\n                </div>\r\n                <div class=\"mmcq__item-icon mmcq__item-incorrect-icon\">\r\n                  <div class=\"icon\"></div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"mmcq__item-label-text\">\r\n                <div class=\"mmcq__item-label-text-inner\">\r\n                  "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":71,"column":18},"end":{"line":71,"column":36}}})) != null ? stack1 : "")
    + "\r\n                </div>\r\n              </div>\r\n\r\n            </label>\r\n          </div>\r\n";
},"25":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name=\""
    + alias2(alias1((depths[2] != null ? lookupProperty(depths[2],"_id") : depths[2]), depth0))
    + "-"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_index") : depths[1]), depth0))
    + "-item\" ";
},"27":function(container,depth0,helpers,partials,data) {
    return "radio";
},"29":function(container,depth0,helpers,partials,data) {
    return "checkbox";
},"31":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"33":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"35":function(container,depth0,helpers,partials,data) {
    return " is-selected";
},"37":function(container,depth0,helpers,partials,data) {
    return " is-radio";
},"39":function(container,depth0,helpers,partials,data) {
    return " is-checkbox";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner mmcq__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget mmcq__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_combineOptions") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":44},"end":{"line":5,"column":101}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":101},"end":{"line":5,"column":261}}})) != null ? stack1 : "")
    + "\">\r\n\r\n    <div class=\"mmcq__items-header\" aria-hidden=\"true\"> \r\n      <div class=\"mmcq__items-header-spacer\"></div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_options") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":15,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":4},"end":{"line":84,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n  <div class=\"btn__container\"></div>\r\n\r\n</div>\r\n";
},"9_d":  function(fn, props, container, depth0, data, blockParams, depths) {

  var decorators = container.decorators, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  fn = lookupProperty(decorators,"inline")(fn,props,container,{"name":"inline","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"args":["itemInputs"],"data":data,"loc":{"start":{"line":34,"column":8},"end":{"line":78,"column":16}}}) || fn;
  return fn;
  }

,"useDecorators":true,"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["narrativePlus"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"narrativeplus__slider-item\" data-index=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":12,"column":57},"end":{"line":12,"column":67}}}) : helper)))
    + "\" style=\"width: "
    + alias3(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_itemWidth") : depths[1]), depth0))
    + "%\">\r\n						<div class=\"narrativeplus__item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_hasFloat") : depths[1]),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":37},"end":{"line":13,"column":74}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"any","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":74},"end":{"line":13,"column":129}}})) != null ? stack1 : "")
    + "\">\r\n							\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":7},"end":{"line":22,"column":14}}})) != null ? stack1 : "")
    + "\r\n							<div class=\"narrativeplus__item-inner"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":44},"end":{"line":24,"column":108}}})) != null ? stack1 : "")
    + "\">\r\n								\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"any","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":42,"column":16}}})) != null ? stack1 : "")
    + "\r\n								<div class=\"narrativeplus__item-content\">\r\n									<div class=\"narrativeplus__item-content-inner\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":10},"end":{"line":53,"column":17}}})) != null ? stack1 : "")
    + "\r\n										"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":10},"end":{"line":55,"column":71}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":10},"end":{"line":63,"column":17}}})) != null ? stack1 : "")
    + "									</div>\r\n								</div>\r\n							</div>\r\n\r\n						</div>\r\n					</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " has-float";
},"4":function(container,depth0,helpers,partials,data) {
    return " has-graphic";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "								<div class=\"narrativeplus__item-title narrativeplus__item-small-title\">\r\n									<div class=\"narrativeplus__item-title-inner\" "
    + container.escapeExpression((lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"componentItem",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":18,"column":54},"end":{"line":18,"column":92}}}))
    + ">\r\n										"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":21}}}) : helper))) != null ? stack1 : "")
    + "\r\n									</div>\r\n								</div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1)) != null ? lookupProperty(stack1,"_parClasses") : stack1), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "									<div class=\"narrativeplus__item-image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":56},"end":{"line":28,"column":117}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"style") : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":117},"end":{"line":28,"column":171}}})) != null ? stack1 : "")
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":33,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":10},"end":{"line":40,"column":17}}})) != null ? stack1 : "")
    + "									</div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " style-"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"style") : stack1), depth0));
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "											<div class=\"narrativeplus__item-image-body\">\r\n												"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":31,"column":12},"end":{"line":31,"column":39}}})) != null ? stack1 : "")
    + "\r\n											</div>\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "											"
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"img","hash":{"alt":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),"class":"narrativeplus__item-image"},"data":data,"loc":{"start":{"line":35,"column":11},"end":{"line":35,"column":88}}})) != null ? stack1 : "")
    + "\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "										<div class=\"narrativeplus__item-title narrativeplus__item-content-title\">\r\n											<div class=\"narrativeplus__item-title-inner\" "
    + container.escapeExpression((lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"componentItem",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":49,"column":56},"end":{"line":49,"column":94}}}))
    + ">\r\n												"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":50,"column":12},"end":{"line":50,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\r\n											</div>\r\n										</div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"a11y_aria_image")||(depth0 && lookupProperty(depth0,"a11y_aria_image"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"a11y_aria_image","hash":{},"data":data,"loc":{"start":{"line":55,"column":30},"end":{"line":55,"column":64}}})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "										<div class=\"narrativeplus__item-body\">\r\n											<div class=\"narrativeplus__item-body-inner\">\r\n												"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":60,"column":12},"end":{"line":60,"column":30}}})) != null ? stack1 : "")
    + "\r\n											</div>\r\n										</div>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<div class=\"narrativeplus__progress js-narrativeplus-progress-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":83,"column":72},"end":{"line":83,"column":108}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":83,"column":122},"end":{"line":83,"column":132}}}) : helper)))
    + "\"></div>\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner narrativeplus__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget narrativeplus__widget\">\r\n\r\n		<div class=\"narrativeplus__slide-container\">\r\n			<div class=\"narrativeplus__slider u-clearfix\" style=\"width: "
    + alias2(((helper = (helper = lookupProperty(helpers,"_totalWidth") || (depth0 != null ? lookupProperty(depth0,"_totalWidth") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"_totalWidth","hash":{},"data":data,"loc":{"start":{"line":9,"column":63},"end":{"line":9,"column":78}}}) : helper)))
    + "%\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":5},"end":{"line":70,"column":14}}})) != null ? stack1 : "")
    + "				</div>\r\n			</div>\r\n\r\n			<div class=\"narrativeplus__controls-container u-clearfix\">\r\n\r\n				<button class=\"btn-icon narrativeplus__controls narrativeplus__controls-left js-narrativeplus-controls-click\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"previous") : stack1), depth0))
    + "\">\r\n					<div class=\"icon\"></div>\r\n				</button>\r\n\r\n				<div class=\"narrativeplus__indicators\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":82,"column":5},"end":{"line":84,"column":14}}})) != null ? stack1 : "")
    + "				</div>\r\n\r\n				<button class=\"btn-icon narrativeplus__controls narrativeplus__controls-right js-narrativeplus-controls-click\" aria-label=\""
    + alias2(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"next") : stack1), depth0))
    + "\">\r\n					<div class=\"icon\"></div>\r\n				</button>\r\n			</div>\r\n		</div>\r\n\r\n  </div>\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component-footer"),depth0,{"name":"component-footer","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["reorder"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":104},"end":{"line":5,"column":219}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":176},"end":{"line":5,"column":212}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div \r\n        class=\"reorder__item js-reorder-item item-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":16,"column":50},"end":{"line":16,"column":60}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":60},"end":{"line":16,"column":94}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":94},"end":{"line":16,"column":220}}})) != null ? stack1 : "")
    + "\"\r\n        data-adapt-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":17,"column":26},"end":{"line":17,"column":36}}}) : helper)))
    + "\" \r\n        data-adapt-user-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_userIndex") || (depth0 != null ? lookupProperty(depth0,"_userIndex") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_userIndex","hash":{},"data":data,"loc":{"start":{"line":18,"column":31},"end":{"line":18,"column":45}}}) : helper)))
    + "\">\r\n        <div class=\"js-reorder-item-transform\">\r\n          <div class=\"reorder__item-inner\">\r\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"text") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":21,"column":30}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n      </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-locked";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_canShowMarking") : depths[1]),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":119},"end":{"line":16,"column":209}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":16,"column":145},"end":{"line":16,"column":202}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner reorder__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget js-reorder-containment reorder__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":70},"end":{"line":5,"column":230}}})) != null ? stack1 : "")
    + "\">\r\n\r\n    <div class=\"reorder__widget-header\">\r\n      <div class=\"reorder__widget-header-inner\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_labels") : depth0)) != null ? lookupProperty(stack1,"header") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":36}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"reorder__items-container\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":25,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n    <div class=\"reorder__widget-footer\">\r\n      <div class=\"reorder__widget-footer-inner\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_labels") : depth0)) != null ? lookupProperty(stack1,"footer") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":30,"column":8},"end":{"line":30,"column":36}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"btn__container\"></div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["tabs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " style=\"min-height: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_minHeight") || (depth0 != null ? lookupProperty(depth0,"_minHeight") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_minHeight","hash":{},"data":data,"loc":{"start":{"line":5,"column":68},"end":{"line":5,"column":82}}}) : helper)))
    + "\"";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div id=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":9,"column":28},"end":{"line":9,"column":38}}}) : helper)))
    + "-tabpanel\" role=\"tabpanel\" aria-labelledby=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":9,"column":93},"end":{"line":9,"column":103}}}) : helper)))
    + "-tabtitle\" data-index=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":9,"column":126},"end":{"line":9,"column":136}}}) : helper)))
    + "\" class=\"tabs__content-item item-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":9,"column":169},"end":{"line":9,"column":179}}}) : helper)))
    + " "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":180},"end":{"line":9,"column":216}}})) != null ? stack1 : "")
    + "\">\r\n          <div class=\"tabs__content-item-inner"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depths[1] != null ? lookupProperty(depths[1],"_parSizingClasses") : depths[1]),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":46},"end":{"line":10,"column":106}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"any","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":12},"end":{"line":34,"column":20}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":12},"end":{"line":42,"column":19}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":9,"column":197},"end":{"line":9,"column":209}}}) : helper)));
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_parSizingClasses") : depths[1]), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <div class=\"tabs__content-item-graphic"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1)) != null ? lookupProperty(stack1,"_classes") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":52},"end":{"line":22,"column":122}}})) != null ? stack1 : "")
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":23,"column":16},"end":{"line":32,"column":23}}})) != null ? stack1 : "")
    + "              </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"_sizing") : stack1)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <img \r\n                    class=\"tabs__content-item-graphic-inner"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"style") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":59},"end":{"line":25,"column":113}}})) != null ? stack1 : "")
    + "\" \r\n                    src=\""
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0)) != null ? stack1 : "")
    + "\" \r\n                    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":27,"column":20},"end":{"line":27,"column":102}}})) != null ? stack1 : "")
    + "/>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " style-"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"style") : stack1), depth0));
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\"";
},"16":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":16},"end":{"line":32,"column":16}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                  <div class=\"tabs__content-item-graphic-inner\">\r\n                    "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":30,"column":20},"end":{"line":30,"column":47}}})) != null ? stack1 : "")
    + "\r\n                  </div>\r\n                ";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"tabs__content-item-body\">\r\n              <div class=\"tabs__content-item-body-inner\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":39,"column":16},"end":{"line":39,"column":34}}})) != null ? stack1 : "")
    + "\r\n              </div>\r\n            </div>\r\n";
},"23":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <button\r\n          role=\"tab\"\r\n          aria-selected=\"false\"\r\n          aria-controls=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":58,"column":36},"end":{"line":58,"column":46}}}) : helper)))
    + "-tabpanel\"\r\n          aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":59,"column":22},"end":{"line":59,"column":33}}}) : helper))) != null ? stack1 : "")
    + "."
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":34},"end":{"line":59,"column":107}}})) != null ? stack1 : "")
    + "\"\r\n          class=\"tabs__nav-item-btn js-tabs-nav-item-btn-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":60,"column":62},"end":{"line":60,"column":98}}})) != null ? stack1 : "")
    + "\"\r\n          data-index=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":61,"column":22},"end":{"line":61,"column":32}}}) : helper)))
    + "\">\r\n\r\n          <div id=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":63,"column":30},"end":{"line":63,"column":40}}}) : helper)))
    + "-tabtitle\" class=\"tabs__nav-item-btn-inner\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":63,"column":84},"end":{"line":63,"column":95}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n        </button>\r\n";
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"visited") : stack1), depth0));
},"26":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tabs__inner component__inner\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"tabs__widget component__widget clearfix\">\r\n\r\n    <div class=\"tabs__content\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_minHeight") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":90}}})) != null ? stack1 : "")
    + ">\r\n      <div class=\"tabs__content-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":46,"column":17}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"tabs__nav\">\r\n      <div class=\"tabs__nav-inner\" role=\"tablist\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":54,"column":8},"end":{"line":65,"column":17}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  "
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component-footer"),depth0,{"name":"component-footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " \r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["textinputplus"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-disabled"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isInteractionComplete") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":87},"end":{"line":6,"column":202}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-complete is-submitted show-user-answer"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":159},"end":{"line":6,"column":195}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return " is-correct";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"custom") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":26}}})) != null ? stack1 : "")
    + "\r\n";
},"7":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div \r\n      class=\"textinputplus__item js-textinputplus-item"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depths[1] != null ? lookupProperty(depths[1],"_isEnabled") : depths[1]),{"name":"unless","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":54},"end":{"line":14,"column":180}}})) != null ? stack1 : "")
    + "\"\r\n      data-adapt-index=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":15,"column":24},"end":{"line":15,"column":34}}}) : helper)))
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"prefix") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + "\r\n      <div \r\n        class=\"textinputplus__item-textbox-container js-textinputplus-textbox-container\" \r\n        style=\"flex-basis: "
    + alias3(container.lambda((depth0 != null ? lookupProperty(depth0,"_inputWidth") : depth0), depth0))
    + "em;\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"inputField")||(depth0 && lookupProperty(depth0,"inputField"))||alias2).call(alias1,{"name":"inputField","hash":{"allowsPunctuation":(depths[1] != null ? lookupProperty(depths[1],"_allowsPunctuation") : depths[1]),"allowsAnyCase":(depths[1] != null ? lookupProperty(depths[1],"_allowsAnyCase") : depths[1]),"answers":(depth0 != null ? lookupProperty(depth0,"_answers") : depth0),"class":"textinputplus__item-textbox js-textinputplus-textbox","type":"text"},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":8},"end":{"line":36,"column":44}}})) != null ? stack1 : "")
    + "\r\n      </div>\r\n\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"suffix") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":6},"end":{"line":76,"column":13}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? lookupProperty(depths[1],"_canShowMarking") : depths[1]),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":79},"end":{"line":14,"column":169}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isCorrect") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":14,"column":105},"end":{"line":14,"column":162}}})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return " is-incorrect";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"textinputplus__item-prefix-container\">\r\n      <label class=\"textinputplus__item-prefix\" id=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":20,"column":63},"end":{"line":20,"column":73}}}) : helper)))
    + "-aria\" for=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":20,"column":96},"end":{"line":20,"column":106}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"compile_a11y_normalize")||(depth0 && lookupProperty(depth0,"compile_a11y_normalize"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"prefix") : depth0),{"name":"compile_a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":20,"column":120},"end":{"line":20,"column":155}}})) != null ? stack1 : "")
    + "\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"prefix") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":21,"column":8},"end":{"line":21,"column":28}}})) != null ? stack1 : "")
    + "\r\n      </label>\r\n      </div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"placeholder") : depth0), depth0)) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"textinputplus__item-suffix-container\">\r\n      <label class=\"textinputplus__item-suffix\" id=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":72,"column":63},"end":{"line":72,"column":73}}}) : helper)))
    + "-aria\" for=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":72,"column":96},"end":{"line":72,"column":106}}}) : helper)))
    + "\" aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"compile_a11y_normalize")||(depth0 && lookupProperty(depth0,"compile_a11y_normalize"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"suffix") : depth0),{"name":"compile_a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":72,"column":120},"end":{"line":72,"column":155}}})) != null ? stack1 : "")
    + "\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"suffix") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":73,"column":8},"end":{"line":73,"column":28}}})) != null ? stack1 : "")
    + "\r\n      </label>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner textinputplus__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget textinputplus__widget"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isEnabled") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":53},"end":{"line":6,"column":213}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"custom") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":10,"column":11}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":4},"end":{"line":79,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n  <div class=\"btn__container\"></div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["tryHtml"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_correct") : depth0)) != null ? lookupProperty(stack1,"code") : stack1), depth0)) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner tryhtml__inner\">\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n    <div class=\"tryhtml__widget js-tryhtml-widget\">\r\n\r\n        <div class=\"tryhtml__ui\">\r\n            \r\n            <div class=\"tryhtml__head tryhtml__ui-head\">\r\n                <div class=\"tryhtml__head-inner\">\r\n                    <div class=\"tryhtml__head-title js-tryhtml-ui-title\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_tryHtml") : depth0)) != null ? lookupProperty(stack1,"_user") : stack1)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"tryhtml__content-scroll\">\r\n                <div class=\"tryhtml__ui-content tryhtml__content-container\">\r\n\r\n                    <div class=\"tryhtml__content tryhtml__content-user js-tryhtml-content-user\">\r\n                        <div class=\"tryhtml__content-inner\">\r\n                            <textarea class=\"tryhtml__content-textarea js-tryhtml-content-textarea\">"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"_user") : depth0)) != null ? lookupProperty(stack1,"code") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":21,"column":100},"end":{"line":21,"column":124}}})) != null ? stack1 : "")
    + "</textarea>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"tryhtml__content tryhtml__content-correct js-tryhtml-content-correct\">\r\n                        <div class=\"tryhtml__content-inner\">\r\n                            "
    + ((stack1 = (lookupProperty(helpers,"code")||(depth0 && lookupProperty(depth0,"code"))||alias4).call(alias3,{"name":"code","hash":{"lang":(depth0 != null ? lookupProperty(depth0,"_lang") : depth0)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":28},"end":{"line":28,"column":76}}})) != null ? stack1 : "")
    + "\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"tryhtml__ui-controls\">\r\n                <button class=\"btn-text tryhtml__ui-btn tryhtml__ui-btn-update js-tryhtml-ui-update\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_tryHtml") : depth0)) != null ? lookupProperty(stack1,"_update") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0))
    + "</button>\r\n                <button class=\"btn-text tryhtml__ui-btn tryhtml__ui-btn-toggleanswer js-tryhtml-ui-toggleanswer\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_tryHtml") : depth0)) != null ? lookupProperty(stack1,"_correct") : stack1)) != null ? lookupProperty(stack1,"buttonText") : stack1), depth0))
    + "</button>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"tryhtml__output\">\r\n\r\n            <div class=\"tryhtml__output-user\">\r\n                <div class=\"tryhtml__head tryhtml__output-user-head\">\r\n                    <div class=\"tryhtml__head-inner\">\r\n                        <div class=\"tryhtml__head-title\">Your output</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tryhtml__output-iframe-container js-tryhtml-iframe-container\">\r\n                    <iframe class=\"tryhtml__output-iframe tryhtml__user-output-iframe js-tryhtml-iframe-user\" src=\"about:blank\"></iframe>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"tryhtml__ouput-correct\">\r\n                <div class=\"tryhtml__head tryhtml__output-correct-head\">\r\n                    <div class=\"tryhtml__head-inner\">\r\n                        <div class=\"tryhtml__head-title\">Desired outcome</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tryhtml__output-iframe-container js-tryhtml-iframe-container\">\r\n                    <iframe class=\"tryhtml__output-iframe tryhtml__correct-output-iframe js-tryhtml-iframe-correct\" src=\"about:blank\"></iframe>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["tryThis"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"trythis__prepare trythis__item\">\r\n            <div class=\"trythis__prepare-title trythis__item-title\">Prepare</div>\r\n            <div class=\"trythis__prepare-body trythis__item-body\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_prepare") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":16},"end":{"line":12,"column":43}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"trythis__apply trythis__item\">\r\n            <div class=\"trythis__apply-title trythis__item-title\">Apply</div>\r\n            <div class=\"trythis__apply-body trythis__item-body\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_apply") : depth0)) != null ? lookupProperty(stack1,"body") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":41}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"accordion__item trythis__item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":45},"end":{"line":28,"column":82}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_classes") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":82},"end":{"line":28,"column":118}}})) != null ? stack1 : "")
    + "\" data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_index") || (depth0 != null ? lookupProperty(depth0,"_index") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_index","hash":{},"data":data,"loc":{"start":{"line":28,"column":132},"end":{"line":28,"column":142}}}) : helper)))
    + "\">\r\n\r\n      <button id=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":30,"column":29},"end":{"line":30,"column":39}}}) : helper)))
    + "-accordion-button\" class=\"accordion__item-btn js-toggle-item is-closed"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":109},"end":{"line":30,"column":145}}})) != null ? stack1 : "")
    + "\" aria-expanded=\"false\">\r\n        <div class=\"accordion__item-btn-inner\">\r\n\r\n          <div class=\"accordion__item-icon\">\r\n            <div class=\"icon\"></div>\r\n          </div>\r\n\r\n          <div class=\"accordion__item-title trythis__item-title\">\r\n            <div class=\"accordion__item-title-inner\">\r\n              "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":39,"column":14},"end":{"line":39,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </button>\r\n\r\n      <div class=\"accordion__item-content\" role=\"region\" aria-labelledby=\""
    + alias4(alias5((depths[1] != null ? lookupProperty(depths[1],"_id") : depths[1]), depth0))
    + "-"
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":46,"column":85},"end":{"line":46,"column":95}}}) : helper)))
    + "-accordion-button\">\r\n        <div class=\"accordion__item-content-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":49,"column":10},"end":{"line":55,"column":17}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":57,"column":10},"end":{"line":70,"column":17}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return " has-image";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_classes") || (depth0 != null ? lookupProperty(depth0,"_classes") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_classes","hash":{},"data":data,"loc":{"start":{"line":28,"column":99},"end":{"line":28,"column":111}}}) : helper)));
},"10":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"accordion__item-body\">\r\n            <div class=\"accordion__item-body-inner\">\r\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":52,"column":14},"end":{"line":52,"column":32}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n          </div>\r\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"accordion__item-image-container"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":53},"end":{"line":58,"column":104}}})) != null ? stack1 : "")
    + "\">\r\n            <img class=\"accordion__item-image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(19, data, 0),"data":data,"loc":{"start":{"line":59,"column":70},"end":{"line":59,"column":152}}})) != null ? stack1 : "")
    + ">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":12},"end":{"line":67,"column":19}}})) != null ? stack1 : "")
    + "\r\n          </div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    return " has-attribution";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1), depth0))
    + "\"";
},"19":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"component__attribution accordion__attribution\">\r\n              <div class=\"component__attribution-inner accordion__attribution-inner\">\r\n                "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"attribution") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n              </div>\r\n            </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__inner accordion__inner\">\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component"),depth0,{"name":"component","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\r\n  <div class=\"component__widget accordion__widget\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_prepare") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":15,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_apply") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":6},"end":{"line":24,"column":13}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":4},"end":{"line":76,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"component-footer"),depth0,{"name":"component-footer","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["tryThisLogo"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"component__header-logo trythis__logo\">\r\n    <img src=\"assets/trythis-logo.svg\" />\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["annotation"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-toggle";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"annotation__content\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":3,"column":61},"end":{"line":3,"column":74}}}) : helper))) != null ? stack1 : "")
    + "</span>";
},"5":function(container,depth0,helpers,partials,data) {
    return "<span class=\"annotation__icon-container\"><span class=\"annotation__icon icon icon-question\"></span></span>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"annotation__inner\"><span class=\"annotation__btn"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_toggleEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":2,"column":71}}})) != null ? stack1 : "")
    + "\" role=\"button\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":12},"end":{"line":3,"column":88}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hasIcon") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":140}}})) != null ? stack1 : "")
    + "</span></span>";
},"useData":true});

this["Handlebars"]["templates"]["fade"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-block";
},"3":function(container,depth0,helpers,partials,data) {
    return " is-accordion";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":113},"end":{"line":1,"column":122}}}) : helper)));
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " name=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":1,"column":149},"end":{"line":1,"column":157}}}) : helper)))
    + "\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<"
    + alias4(((helper = (helper = lookupProperty(helpers,"_tag") || (depth0 != null ? lookupProperty(depth0,"_tag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_tag","hash":{},"data":data,"loc":{"start":{"line":1,"column":1},"end":{"line":1,"column":9}}}) : helper)))
    + " class=\"fade"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_tag") : depth0),"div",{"name":"equals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":63}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"collapse") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":63},"end":{"line":1,"column":99}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"class") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":99},"end":{"line":1,"column":129}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":130},"end":{"line":1,"column":165}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":1,"column":166},"end":{"line":1,"column":179}}}) : helper))) != null ? stack1 : "")
    + "</"
    + alias4(((helper = (helper = lookupProperty(helpers,"_tag") || (depth0 != null ? lookupProperty(depth0,"_tag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_tag","hash":{},"data":data,"loc":{"start":{"line":1,"column":181},"end":{"line":1,"column":189}}}) : helper)))
    + ">";
},"useData":true});

this["Handlebars"]["templates"]["mark"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-block";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " is-color-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"color") || (depth0 != null ? lookupProperty(depth0,"color") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"color","hash":{},"data":data,"loc":{"start":{"line":3,"column":26},"end":{"line":3,"column":35}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " theme-"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"theme") : depth0), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"class","hash":{},"data":data,"loc":{"start":{"line":5,"column":17},"end":{"line":5,"column":26}}}) : helper)));
},"9":function(container,depth0,helpers,partials,data) {
    return " is-absolute";
},"11":function(container,depth0,helpers,partials,data) {
    return " is-empty";
},"13":function(container,depth0,helpers,partials,data) {
    return " has-content";
},"15":function(container,depth0,helpers,partials,data) {
    return " has-shadow";
},"17":function(container,depth0,helpers,partials,data) {
    return " has-custom-background";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "left: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"absolute") : depth0)) != null ? lookupProperty(stack1,"left") : stack1), depth0))
    + "; top: "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"absolute") : depth0)) != null ? lookupProperty(stack1,"top") : stack1), depth0))
    + ";"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"absolute") : depth0)) != null ? lookupProperty(stack1,"width") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":3},"end":{"line":15,"column":12}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"absolute") : depth0)) != null ? lookupProperty(stack1,"height") : stack1),{"name":"if","hash":{},"fn":container.program(22, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":3},"end":{"line":18,"column":12}}})) != null ? stack1 : "");
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "width: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"absolute") : depth0)) != null ? lookupProperty(stack1,"width") : stack1), depth0))
    + ";";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "height: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"absolute") : depth0)) != null ? lookupProperty(stack1,"height") : stack1), depth0))
    + ";";
},"24":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "background-color: "
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"background") : depth0), depth0))
    + ";";
},"26":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "name=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":23,"column":19},"end":{"line":23,"column":27}}}) : helper)))
    + "\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<"
    + alias4(((helper = (helper = lookupProperty(helpers,"_tag") || (depth0 != null ? lookupProperty(depth0,"_tag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_tag","hash":{},"data":data,"loc":{"start":{"line":1,"column":1},"end":{"line":1,"column":9}}}) : helper)))
    + " \r\n	class=\"mark"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_tag") : depth0),"div",{"name":"equals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":12},"end":{"line":2,"column":54}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"color") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":3,"column":43}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"theme") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":42}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"class") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":34}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"absolute") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":6,"column":39}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":7,"column":63}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"shadow") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":8,"column":36}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"background") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":2},"end":{"line":9,"column":53}}})) != null ? stack1 : "")
    + "\"\r\n	style=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"absolute") : depth0),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"background") : depth0),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":2},"end":{"line":22,"column":11}}})) != null ? stack1 : "")
    + "\"\r\n	"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":1},"end":{"line":23,"column":35}}})) != null ? stack1 : "")
    + "\r\n>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":24,"column":1},"end":{"line":24,"column":14}}}) : helper))) != null ? stack1 : "")
    + "</"
    + alias4(((helper = (helper = lookupProperty(helpers,"_tag") || (depth0 != null ? lookupProperty(depth0,"_tag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_tag","hash":{},"data":data,"loc":{"start":{"line":24,"column":16},"end":{"line":24,"column":24}}}) : helper)))
    + ">";
},"useData":true});

this["Handlebars"]["templates"]["tooltipFallback"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class='tooltip-fallback'>\r\n	<div class=\"tooltip-fallback__inner\">\r\n		<div class='tooltip-fallback__content js-tooltip-fallback-content'>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["blockBackground"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"blockbg__item js-blockbg-item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"first")),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":49},"end":{"line":3,"column":80}}})) != null ? stack1 : "")
    + "\" data-adapt-index=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":3,"column":100},"end":{"line":3,"column":110}}}) : helper)))
    + "\" style=\"background-image: url("
    + alias2(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + ");\"></div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " is-active";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"blockbg__inner\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":4,"column":13}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["blockBackgroundGroups"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"blockbg__group-container\">\r\n    <div \r\n        class=\"blockbg__group-img js-blockbg-group-img\" \r\n        style=\"background-image: url("
    + alias1(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + ");\" \r\n        data-adapt-index=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":6,"column":26},"end":{"line":6,"column":36}}}) : helper)))
    + "\">\r\n    </div>\r\n    <div \r\n        class=\"blockbg__group js-blockbg-group\" \r\n        data-adapt-id=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":10,"column":23},"end":{"line":10,"column":30}}}) : helper)))
    + "\" \r\n        data-adapt-index=\""
    + alias1(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":11,"column":26},"end":{"line":11,"column":36}}}) : helper)))
    + "\">\r\n    </div>\r\n</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":15,"column":9}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["codeBox"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"codebox__filename\"><div class=\"codebox__filename-inner\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_filename") || (depth0 != null ? lookupProperty(depth0,"_filename") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_filename","hash":{},"data":data,"loc":{"start":{"line":5,"column":16},"end":{"line":5,"column":29}}}) : helper)))
    + "</div></div>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " lang-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_lang") || (depth0 != null ? lookupProperty(depth0,"_lang") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_lang","hash":{},"data":data,"loc":{"start":{"line":10,"column":84},"end":{"line":10,"column":93}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"codebox__inner\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_filename") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":8,"column":13}}})) != null ? stack1 : "")
    + "<div class=\"codebox__content\"><div class=\"codebox__content-inner js-codebox-content"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_lang") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":65},"end":{"line":10,"column":100}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":11,"column":12},"end":{"line":11,"column":27}}}) : helper))) != null ? stack1 : "")
    + "</div></div></div>";
},"useData":true});

this["Handlebars"]["templates"]["codeBoxIframe"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"codebox__filename\"><div class=\"codebox__filename-inner\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_filename") || (depth0 != null ? lookupProperty(depth0,"_filename") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_filename","hash":{},"data":data,"loc":{"start":{"line":5,"column":16},"end":{"line":5,"column":29}}}) : helper)))
    + "</div></div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"codebox__inner\">"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_filename") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":8,"column":13}}})) != null ? stack1 : "")
    + "<div class=\"codebox__content-inner\"><iframe class=\"codebox__iframe js-codebox-iframe\" src=\"about:blank\" frameborder=\"0\"></iframe></div></div>";
},"useData":true});

this["Handlebars"]["templates"]["componentRow"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"componentrow__divider"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_divider") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":35},"end":{"line":2,"column":89}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_divider") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":89},"end":{"line":2,"column":128}}})) != null ? stack1 : "")
    + "\">\r\n    <div class=\"componentrow__divider-line\"></div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_divider") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "")
    + "  </div>";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_divider") : depth0)) != null ? lookupProperty(stack1,"_classes") : stack1), depth0));
},"4":function(container,depth0,helpers,partials,data) {
    return " has-title";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"componentrow__divider-title\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_divider") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n      <div class=\"componentrow__divider-line\"></div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":22},"end":{"line":14,"column":8}}})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"componentrow__title text__title\">\r\n  <div class=\"componentrow__title-inner text__title-inner\">"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":12,"column":59},"end":{"line":12,"column":78}}})) != null ? stack1 : "")
    + "</div>\r\n</div>";
},"11":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_parSizingClasses") || (depth0 != null ? lookupProperty(depth0,"_parSizingClasses") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_parSizingClasses","hash":{},"data":data,"loc":{"start":{"line":15,"column":90},"end":{"line":15,"column":111}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_hasDivider") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSingle") : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":0},"end":{"line":14,"column":19}}})) != null ? stack1 : "")
    + "\r\n<div class=\"componentrow__inner js-componentrow-items u-clearfix"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_parSizingClasses") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":64},"end":{"line":15,"column":118}}})) != null ? stack1 : "")
    + "\">\r\n  \r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["languagePickerDrawerView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"languagepicker-drawer__item drawer__item is-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_language") || (depth0 != null ? lookupProperty(depth0,"_language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data,"loc":{"start":{"line":10,"column":60},"end":{"line":10,"column":73}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":73},"end":{"line":10,"column":111}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_direction") : depth0),"ltr",{"name":"equals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":111},"end":{"line":10,"column":157}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_direction") : depth0),"rtl",{"name":"equals","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":157},"end":{"line":10,"column":203}}})) != null ? stack1 : "")
    + "\" role=\"listitem\">\r\n\r\n        <button class=\"languagepicker-drawer__item-btn drawer__item-btn js-languagepicker-item-btn"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":98},"end":{"line":12,"column":136}}})) != null ? stack1 : "")
    + "\" data-language=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_language") || (depth0 != null ? lookupProperty(depth0,"_language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data,"loc":{"start":{"line":12,"column":153},"end":{"line":12,"column":166}}}) : helper)))
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSelected") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":167},"end":{"line":12,"column":202}}})) != null ? stack1 : "")
    + ">\r\n          <div class=\"languagepicker-drawer__title drawer__item-title\">\r\n            <div class=\"languagepicker-drawer__title-inner drawer__item-title-inner\">\r\n              "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayName") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":15,"column":14},"end":{"line":15,"column":39}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n          </div>\r\n        </button>\r\n\r\n    </div>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " is-selected";
},"4":function(container,depth0,helpers,partials,data) {
    return " is-ltr";
},"6":function(container,depth0,helpers,partials,data) {
    return " is-rtl";
},"8":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"10":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"languagepicker-drawer\">\r\n  "
    + ((stack1 = (lookupProperty(helpers,"a11y_aria_label")||(depth0 && lookupProperty(depth0,"a11y_aria_label"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_languagePicker") : stack1)) != null ? lookupProperty(stack1,"languageSelector") : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":77}}})) != null ? stack1 : "")
    + "\r\n\r\n  <div class=\"languagepicker-drawer__inner\" role=\"list\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_languages") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "  </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["languagePickerNavigation"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"nav__inner\"></div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["languagePickerView"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"languagepicker__title\">\r\n    <div class=\"languagepicker__title-inner\" role=\"heading\" aria-level=\"1\">\r\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":32}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"languagepicker__body\">\r\n    <div class=\"languagepicker__body-inner\">\r\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":14,"column":24}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <button class=\"btn-text languagepicker__language-btn is-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_language") || (depth0 != null ? lookupProperty(depth0,"_language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data,"loc":{"start":{"line":23,"column":62},"end":{"line":23,"column":75}}}) : helper)))
    + " js-languagepicker-btn-click\" role=\"link\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_language") || (depth0 != null ? lookupProperty(depth0,"_language") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_language","hash":{},"data":data,"loc":{"start":{"line":23,"column":124},"end":{"line":23,"column":137}}}) : helper)))
    + "\">\r\n        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayName") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":24,"column":8},"end":{"line":24,"column":33}}})) != null ? stack1 : "")
    + "\r\n      </button>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"languagepicker__inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":17,"column":9}}})) != null ? stack1 : "")
    + "\r\n  <div class=\"languagepicker__languages\">\r\n    <div class=\"languagepicker__languages-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_languages") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":6},"end":{"line":26,"column":15}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgress"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"pagelevelprogress__inner\">\r\n  "
    + ((stack1 = (lookupProperty(helpers,"a11y_aria_label")||(depth0 && lookupProperty(depth0,"a11y_aria_label"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_pageLevelProgress") : stack1)) != null ? lookupProperty(stack1,"pageLevelProgress") : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":81}}})) != null ? stack1 : "")
    + "\r\n\r\n  <div role=\"list\" class=\"js-children\">\r\n  </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressIndicator"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <span class=\"aria-label js-indicator-aria-label\">\r\n    "
    + container.escapeExpression((lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":10,"column":25}}}))
    + "\r\n  </span>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"pagelevelprogress__indicator-inner\">\r\n\r\n  <div class=\"pagelevelprogress__indicator-bar js-indicator-bar\" style=\"width: "
    + alias4(((helper = (helper = lookupProperty(helpers,"percentageComplete") || (depth0 != null ? lookupProperty(depth0,"percentageComplete") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"percentageComplete","hash":{},"data":data,"loc":{"start":{"line":6,"column":79},"end":{"line":6,"column":101}}}) : helper)))
    + "%;\"></div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ariaLabel") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":12,"column":9}}})) != null ? stack1 : "")
    + "\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"locked") : stack1), depth0))
    + ".";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_pageLevelProgress") : stack1)) != null ? lookupProperty(stack1,"optionalContent") : stack1), depth0))
    + ".";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isComplete") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data,"loc":{"start":{"line":4,"column":193},"end":{"line":4,"column":329}}})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"complete") : stack1), depth0))
    + ".";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"incomplete") : stack1), depth0))
    + ".";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"pagelevelprogress__item-optional\">\r\n    <div class=\"pagelevelprogress__item-optional-inner\">\r\n      "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_pageLevelProgress") : stack1)) != null ? lookupProperty(stack1,"optionalContent") : stack1), depth0))
    + "\r\n    </div>\r\n  </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<button\r\n  class=\"pagelevelprogress__item-btn drawer__item-btn"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),(lookupProperty(helpers,"none")||(depth0 && lookupProperty(depth0,"none"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisible") : depth0),{"name":"none","hash":{},"data":data,"loc":{"start":{"line":2,"column":70},"end":{"line":2,"column":87}}}),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":53},"end":{"line":2,"column":109}}})) != null ? stack1 : "")
    + " js-indicator js-pagelevelprogress-item-click\"\r\n  data-pagelevelprogress-id=\""
    + alias3(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":3,"column":29},"end":{"line":3,"column":36}}}) : helper)))
    + "\"\r\n  aria-label=\""
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),(lookupProperty(helpers,"none")||(depth0 && lookupProperty(depth0,"none"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisible") : depth0),{"name":"none","hash":{},"data":data,"loc":{"start":{"line":4,"column":31},"end":{"line":4,"column":48}}}),{"name":"any","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":105}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data,"loc":{"start":{"line":4,"column":105},"end":{"line":4,"column":336}}})) != null ? stack1 : "")
    + " "
    + alias3((lookupProperty(helpers,"compile_a11y_normalize")||(depth0 && lookupProperty(depth0,"compile_a11y_normalize"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile_a11y_normalize","hash":{},"data":data,"loc":{"start":{"line":4,"column":337},"end":{"line":4,"column":369}}}))
    + "\">\r\n\r\n  <div class=\"pagelevelprogress__item-title drawer__item-title\">\r\n    <div class=\"pagelevelprogress__item-title-inner drawer__item-title-inner\">\r\n      "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":6},"end":{"line":8,"column":25}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isOptional") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":2},"end":{"line":18,"column":9}}})) != null ? stack1 : "")
    + "\r\n</button>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressNavigation"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<span class=\"tooltip\">\r\n  "
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"progress") : stack1), depth0))
    + "\r\n</span>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["resources"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"resources__filter has-"
    + alias3((lookupProperty(helpers,"resources_get_column_count")||(depth0 && lookupProperty(depth0,"resources_get_column_count"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"resources") : depth0),{"name":"resources_get_column_count","hash":{},"data":data,"loc":{"start":{"line":8,"column":36},"end":{"line":8,"column":76}}}))
    + "-columns\">\r\n    <div class=\"resources__filter-inner\">\r\n\r\n      <button class=\"resources__filter-btn resources__show-all is-selected js-resources-filter-btn-click\" data-filter=\"all\" aria-label=\""
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterAria") : stack1)) != null ? lookupProperty(stack1,"allAria") : stack1), depth0))
    + "\">\r\n        "
    + ((stack1 = alias4(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterButtons") : stack1)) != null ? lookupProperty(stack1,"all") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n      </button>\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"resources_has_type")||(depth0 && lookupProperty(depth0,"resources_has_type"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"resources") : depth0),"document",{"name":"resources_has_type","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":19,"column":29}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"resources_has_type")||(depth0 && lookupProperty(depth0,"resources_has_type"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"resources") : depth0),"media",{"name":"resources_has_type","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":6},"end":{"line":25,"column":29}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"resources_has_type")||(depth0 && lookupProperty(depth0,"resources_has_type"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"resources") : depth0),"link",{"name":"resources_has_type","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":6},"end":{"line":31,"column":29}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <button class=\"resources__filter-btn resources__show-document js-resources-filter-btn-click\" data-filter=\"document\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterAria") : stack1)) != null ? lookupProperty(stack1,"documentAria") : stack1), depth0))
    + "\">\r\n        "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterButtons") : stack1)) != null ? lookupProperty(stack1,"document") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n      </button>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <button class=\"resources__filter-btn resources__show-media js-resources-filter-btn-click\" data-filter=\"media\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterAria") : stack1)) != null ? lookupProperty(stack1,"mediaAria") : stack1), depth0))
    + "\">\r\n        "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterButtons") : stack1)) != null ? lookupProperty(stack1,"media") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n      </button>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <button class=\"resources__filter-btn resources__show-link js-resources-filter-btn-click\" data-filter=\"link\" aria-label=\""
    + container.escapeExpression(alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterAria") : stack1)) != null ? lookupProperty(stack1,"linkAria") : stack1), depth0))
    + "\">\r\n        "
    + ((stack1 = alias1(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"model") : depth0)) != null ? lookupProperty(stack1,"_filterButtons") : stack1)) != null ? lookupProperty(stack1,"link") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n      </button>\r\n";
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"resources__item drawer__item is-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":40,"column":48},"end":{"line":40,"column":57}}}) : helper)))
    + " js-resources-item\" role=\"listitem\">\r\n\r\n      <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_link") || (depth0 != null ? lookupProperty(depth0,"_link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_link","hash":{},"data":data,"loc":{"start":{"line":42,"column":15},"end":{"line":42,"column":24}}}) : helper)))
    + "\" class=\"resources__item-btn drawer__item-btn js-resources-item-btn-click\"\r\n        data-type=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":43,"column":19},"end":{"line":43,"column":28}}}) : helper)))
    + "\"\r\n"
    + ((stack1 = (lookupProperty(helpers,"resources_force_download")||(depth0 && lookupProperty(depth0,"resources_force_download"))||alias2).call(alias1,depth0,{"name":"resources_force_download","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":44,"column":8},"end":{"line":46,"column":37}}})) != null ? stack1 : "")
    + "        target=\"_blank\"\r\n        aria-label=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":48,"column":20},"end":{"line":48,"column":31}}}) : helper))) != null ? stack1 : "")
    + ". "
    + alias4(lookupProperty(helpers,"lookup").call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"model") : depths[1])) != null ? lookupProperty(stack1,"_filterButtons") : stack1),(depth0 != null ? lookupProperty(depth0,"_type") : depth0),{"name":"lookup","hash":{},"data":data,"loc":{"start":{"line":48,"column":33},"end":{"line":48,"column":73}}}))
    + "."
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":48,"column":74},"end":{"line":48,"column":119}}})) != null ? stack1 : "")
    + "\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":8},"end":{"line":56,"column":15}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"description") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":58,"column":8},"end":{"line":64,"column":15}}})) != null ? stack1 : "")
    + "\r\n      </a>\r\n\r\n    </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        download=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"filename") || (depth0 != null ? lookupProperty(depth0,"filename") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"filename","hash":{},"data":data,"loc":{"start":{"line":45,"column":18},"end":{"line":45,"column":30}}}) : helper)))
    + "\"\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":48,"column":94},"end":{"line":48,"column":111}}}) : helper))) != null ? stack1 : "")
    + ".";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"resources__item-title drawer__item-title\">\r\n          <div class=\"resources__item-title-inner drawer__item-title-inner\">\r\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":53,"column":12},"end":{"line":53,"column":23}}}) : helper))) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"resources__item-body drawer__item-body\">\r\n          <div class=\"resources__item-body-inner drawer__item-body-inner\">\r\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data,"loc":{"start":{"line":61,"column":12},"end":{"line":61,"column":29}}}) : helper))) != null ? stack1 : "")
    + "\r\n          </div>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"resources__inner\">\r\n  "
    + ((stack1 = (lookupProperty(helpers,"a11y_aria_label")||(depth0 && lookupProperty(depth0,"a11y_aria_label"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_resources") : stack1)) != null ? lookupProperty(stack1,"resources") : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":65}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"resources_has_multiple_types")||(depth0 && lookupProperty(depth0,"resources_has_multiple_types"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"resources") : depth0),{"name":"resources_has_multiple_types","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":2},"end":{"line":35,"column":35}}})) != null ? stack1 : "")
    + "\r\n  <div class=\"resources__item-container\" role=\"list\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"resources") : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":4},"end":{"line":69,"column":13}}})) != null ? stack1 : "")
    + "\r\n  </div>\r\n\r\n</div>\r\n";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["trickle-button"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-locked";
},"3":function(container,depth0,helpers,partials,data) {
    return " is-full-width";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_className") : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    return " u-display-none";
},"9":function(container,depth0,helpers,partials,data) {
    return " is-disabled";
},"11":function(container,depth0,helpers,partials,data) {
    return " btn-icon";
},"13":function(container,depth0,helpers,partials,data) {
    return " btn-text";
},"15":function(container,depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"17":function(container,depth0,helpers,partials,data) {
    return "      <div class=\"trickle__btn-icon\">\r\n        <div class=\"icon\"></div>\r\n      </div>\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"trickle__btn-text\">\r\n        <div class=\"trickle__btn-text-inner\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_isFinal") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(25, data, 0),"data":data,"loc":{"start":{"line":18,"column":10},"end":{"line":32,"column":17}}})) != null ? stack1 : "")
    + "        </div>\r\n      </div>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"finalText") : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":19,"column":12},"end":{"line":23,"column":19}}})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"finalText") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"text") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_isStart") : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":25,"column":12},"end":{"line":31,"column":19}}})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"startText") : stack1),{"name":"if","hash":{},"fn":container.program(27, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":14},"end":{"line":28,"column":21}}})) != null ? stack1 : "");
},"27":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"startText") : stack1), depth0)) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"trickle "
    + alias3(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":1,"column":20},"end":{"line":1,"column":27}}}) : helper)))
    + " "
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_component") : stack1), depth0))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_isLocking") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":59},"end":{"line":1,"column":111}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_isFullWidth") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":111},"end":{"line":1,"column":169}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_className") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":169},"end":{"line":1,"column":243}}})) != null ? stack1 : "")
    + "\">\r\n\r\n  "
    + ((stack1 = (lookupProperty(helpers,"a11y_aria_label")||(depth0 && lookupProperty(depth0,"a11y_aria_label"))||alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_extensions") : stack1)) != null ? lookupProperty(stack1,"_trickle") : stack1)) != null ? lookupProperty(stack1,"incompleteContent") : stack1),{"name":"a11y_aria_label","hash":{},"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":3,"column":71}}})) != null ? stack1 : "")
    + "\r\n\r\n  <div class=\"trickle__inner js-trickle-btn-container "
    + alias3(alias4(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_component") : stack1), depth0))
    + "__inner "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_isLocking") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":93},"end":{"line":5,"column":145}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_isVisible") : stack1),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":145},"end":{"line":5,"column":210}}})) != null ? stack1 : "")
    + "\">\r\n\r\n    <button class=\"trickle__btn js-trickle-btn "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_isDisabled") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":47},"end":{"line":7,"column":102}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_hasIcon") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":102},"end":{"line":7,"column":151}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"finalText") : stack1),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"text") : stack1),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"startText") : stack1),{"name":"any","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":151},"end":{"line":7,"column":252}}})) != null ? stack1 : "")
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_isDisabled") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":253},"end":{"line":7,"column":316}}})) != null ? stack1 : "")
    + ">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"_hasIcon") : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":13,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"finalText") : stack1),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"text") : stack1),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_trickle") : depth0)) != null ? lookupProperty(stack1,"_button") : stack1)) != null ? lookupProperty(stack1,"startText") : stack1),{"name":"any","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":6},"end":{"line":35,"column":14}}})) != null ? stack1 : "")
    + "\r\n    </button>\r\n\r\n  </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["componentLogo"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__header-logo componentlogo\">\r\n    <img class=\"componentlogo__img\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"src","hash":{},"data":data,"loc":{"start":{"line":2,"column":41},"end":{"line":2,"column":48}}}) : helper)))
    + "\" />\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["componentLogoSmall"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"component__header-logo componentlogo-small\">\r\n    <img class=\"componentlogo-small__img\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"src","hash":{},"data":data,"loc":{"start":{"line":2,"column":47},"end":{"line":2,"column":54}}}) : helper)))
    + "\" />\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["ddDownload"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "download=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_download") || (depth0 != null ? lookupProperty(depth0,"_download") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_download","hash":{},"data":data,"loc":{"start":{"line":1,"column":87},"end":{"line":1,"column":100}}}) : helper)))
    + "\"";
},"3":function(container,depth0,helpers,partials,data) {
    return "download";
},"5":function(container,depth0,helpers,partials,data) {
    return "<span class=\"download__tooltip js-download-tooltip\" role=\"button\">(?)</span>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a class=\"download__anchor\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"href","hash":{},"data":data,"loc":{"start":{"line":1,"column":34},"end":{"line":1,"column":42}}}) : helper)))
    + "\" target=\"_blank\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_download") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":60},"end":{"line":1,"column":124}}})) != null ? stack1 : "")
    + "><span class=\"icon icon-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_icon") || (depth0 != null ? lookupProperty(depth0,"_icon") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_icon","hash":{},"data":data,"loc":{"start":{"line":1,"column":148},"end":{"line":1,"column":157}}}) : helper)))
    + "\"></span><span class=\"download__content\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":1,"column":198},"end":{"line":1,"column":211}}}) : helper))) != null ? stack1 : "")
    + "</span></a>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tooltip") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":222},"end":{"line":1,"column":320}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["ddFigure"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<figcaption class=\"figure__caption\"><span>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"captionPrefix") || (depth0 != null ? lookupProperty(depth0,"captionPrefix") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"captionPrefix","hash":{},"data":data,"loc":{"start":{"line":2,"column":59},"end":{"line":2,"column":78}}}) : helper))) != null ? stack1 : "")
    + "</span>"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"caption") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":2,"column":85},"end":{"line":2,"column":108}}})) != null ? stack1 : "")
    + "</figcaption>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"figure__inner\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":1,"column":27},"end":{"line":1,"column":40}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"caption") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":2,"column":128}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["ddFigureItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"class","hash":{},"data":data,"loc":{"start":{"line":2,"column":52},"end":{"line":2,"column":61}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"sizing") || (depth0 != null ? lookupProperty(depth0,"sizing") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sizing","hash":{},"data":data,"loc":{"start":{"line":2,"column":83},"end":{"line":2,"column":93}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    return " no-scrolling";
},"7":function(container,depth0,helpers,partials,data) {
    return " has-lightbox";
},"9":function(container,depth0,helpers,partials,data) {
    return " has-scaledown";
},"11":function(container,depth0,helpers,partials,data) {
    return " is-stack";
},"13":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "style=\""
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"style") : depth0), depth0))
    + "\"";
},"15":function(container,depth0,helpers,partials,data) {
    return "<span class=\"figure__lightbox-icon lightbox-icon icon icon-search\" title=\"Zoom in\"></span>";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<figcaption class=\"figure__caption\"><span>"
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"captionPrefix") : depth0), depth0)) != null ? stack1 : "")
    + "</span>"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"caption") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":9,"column":91},"end":{"line":9,"column":114}}})) != null ? stack1 : "")
    + "</figcaption>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div \r\n    class=\"figure__item js-figure-item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"class") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":38},"end":{"line":2,"column":68}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"sizing") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":68},"end":{"line":2,"column":100}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"scrolling") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":100},"end":{"line":2,"column":145}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"lightbox") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":145},"end":{"line":2,"column":183}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"scaleDown") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":183},"end":{"line":2,"column":223}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"stack") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":223},"end":{"line":2,"column":254}}})) != null ? stack1 : "")
    + "\"\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"style") : depth0),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":3,"column":43}}})) != null ? stack1 : "")
    + " \r\n    data-model='"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"data") : depth0), depth0))
    + "'>\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"lightbox") : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":5,"column":119}}})) != null ? stack1 : "")
    + "\r\n    <div class=\"figure__item-inner js-figure-item-inner\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":21}}}) : helper))) != null ? stack1 : "")
    + "\r\n    </div>\r\n    "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"caption") : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":4},"end":{"line":9,"column":134}}})) != null ? stack1 : "")
    + "\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["ddFigurePopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " has-bg";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " figure-popup__size-"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"lightbox") : depth0)) != null ? lookupProperty(stack1,"_width") : stack1), depth0));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"item")||(depth0 && lookupProperty(depth0,"item"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"item","hash":{"scrolling":false},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":20},"end":{"line":10,"column":29}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":9,"column":24},"end":{"line":9,"column":45}}})) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }, buffer = 
  "<div class=\"figure-popup__inner\">\r\n    <div class=\"figure-popup__widget\">\r\n\r\n        <div class=\"figure-popup__content"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"lightbox") : depth0)) != null ? lookupProperty(stack1,"_backgroundEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":41},"end":{"line":5,"column":90}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"lightbox") : depth0)) != null ? lookupProperty(stack1,"_width") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":90},"end":{"line":5,"column":159}}})) != null ? stack1 : "")
    + "\">\r\n            <div class=\"figure-popup__content-inner\">\r\n";
  stack1 = ((helper = (helper = lookupProperty(helpers,"figure") || (depth0 != null ? lookupProperty(depth0,"figure") : depth0)) != null ? helper : alias2),(options={"name":"figure","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":11,"column":27}}}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!lookupProperty(helpers,"figure")) { stack1 = container.hooks.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":17,"column":0},"end":{"line":17,"column":19}}}) : helper)))
    + "\r\n";
},"useData":true});

this["Handlebars"]["templates"]["ddFigureText"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":51},"end":{"line":1,"column":60}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"sizing") || (depth0 != null ? lookupProperty(depth0,"sizing") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sizing","hash":{},"data":data,"loc":{"start":{"line":1,"column":82},"end":{"line":1,"column":92}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"figure__text figure__item"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"class") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":37},"end":{"line":1,"column":67}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"sizing") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":67},"end":{"line":1,"column":99}}})) != null ? stack1 : "")
    + "\">\r\n    <div class=\"figure__text-inner\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":21}}}) : helper))) != null ? stack1 : "")
    + "\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["ddBlockquote"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<blockquote class='blockquote'>\r\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":17}}}) : helper))) != null ? stack1 : "")
    + "\r\n</blockquote>";
},"useData":true});

this["Handlebars"]["templates"]["ddClearfix"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"u-clearfix\"></div>";
},"useData":true});

this["Handlebars"]["templates"]["ddError"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class='dderror is-debug'>\r\n    <span class='dderror__icon icon icon-cross'></span>\r\n    <span class='dderror__comment'>\r\n        <span class=\"dderror__comment-inner\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":4,"column":45},"end":{"line":4,"column":58}}}) : helper))) != null ? stack1 : "")
    + "</span>\r\n    </span>\r\n</span>";
},"useData":true});

this["Handlebars"]["templates"]["ddHyperlink"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "&lt;";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"href") || (depth0 != null ? lookupProperty(depth0,"href") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"href","hash":{},"data":data,"loc":{"start":{"line":1,"column":63},"end":{"line":1,"column":71}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":1,"column":79},"end":{"line":1,"column":90}}}) : helper)));
},"7":function(container,depth0,helpers,partials,data) {
    return "&gt;";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ref") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":24}}})) != null ? stack1 : "")
    + "<a class=\"hyperlink\" href=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"href") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":1,"column":51},"end":{"line":1,"column":97}}})) != null ? stack1 : "")
    + "\" target=\"_blank\"><span class=\"hyperlink__content\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":1,"column":148},"end":{"line":1,"column":161}}}) : helper))) != null ? stack1 : "")
    + "</span><span class=\"icon icon-external\"></span></a>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"ref") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":212},"end":{"line":1,"column":236}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["ddIcon"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"icon inline__icon "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"iconClass") || (depth0 != null ? lookupProperty(depth0,"iconClass") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"iconClass","hash":{},"data":data,"loc":{"start":{"line":2,"column":32},"end":{"line":2,"column":45}}}) : helper)))
    + "\"></span>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img class=\"inline__img\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"src","hash":{},"data":data,"loc":{"start":{"line":4,"column":31},"end":{"line":4,"column":38}}}) : helper)))
    + "\">";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"src") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":5,"column":12}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["ddKbd"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<kbd class='kbd'>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":28}}}) : helper)))
    + "</kbd>";
},"useData":true});

this["Handlebars"]["templates"]["ddPaper"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"class") || (depth0 != null ? lookupProperty(depth0,"class") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"class","hash":{},"data":data,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":40}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " style-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"style") || (depth0 != null ? lookupProperty(depth0,"style") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"style","hash":{},"data":data,"loc":{"start":{"line":1,"column":67},"end":{"line":1,"column":76}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<img class=\"paper__logo\" src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"logo") || (depth0 != null ? lookupProperty(depth0,"logo") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"logo","hash":{},"data":data,"loc":{"start":{"line":3,"column":50},"end":{"line":3,"column":58}}}) : helper)))
    + "\">";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"paper"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"class") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":47}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"style") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":47},"end":{"line":1,"column":83}}})) != null ? stack1 : "")
    + "\">\r\n    <div class=\"paper__inner\">\r\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"logo") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":67}}})) != null ? stack1 : "")
    + "\r\n        <div class=\"paper__content\">\r\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["ddTel"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<a class=\"tel\" href=\"tel:"
    + alias4(((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":36}}}) : helper)))
    + "\"><span class='icon icon-mobile'></span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":1,"column":76},"end":{"line":1,"column":87}}}) : helper)))
    + "</a>";
},"useData":true});

this["Handlebars"]["templates"]["ddImg"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_widthAuto") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":59},"end":{"line":1,"column":201}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return " --width-fix";
},"4":function(container,depth0,helpers,partials,data) {
    return "<span class=\"ddimg__lightbox-icon lightbox-icon icon icon-search\" title=\"Zoom in\"></span>";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"sizing") || (depth0 != null ? lookupProperty(depth0,"sizing") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"sizing","hash":{},"data":data,"loc":{"start":{"line":4,"column":86},"end":{"line":4,"column":96}}}) : helper)));
},"8":function(container,depth0,helpers,partials,data) {
    return " --no-max-width";
},"10":function(container,depth0,helpers,partials,data) {
    return " --width-auto";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " style-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"style") || (depth0 != null ? lookupProperty(depth0,"style") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"style","hash":{},"data":data,"loc":{"start":{"line":4,"column":207},"end":{"line":4,"column":216}}}) : helper)));
},"14":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":5,"column":20},"end":{"line":5,"column":41}}})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"ddimg__inner js-ddimg-click"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_contain") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":39},"end":{"line":1,"column":212}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"lightbox") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":5},"end":{"line":2,"column":117}}})) != null ? stack1 : "")
    + "<img \r\n		src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":3,"column":7},"end":{"line":3,"column":14}}}) : helper)))
    + "\"\r\n		class=\"ddimg__img js-ddimg-img"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"sizing") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":71},"end":{"line":4,"column":103}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_contain") : depth0),{"name":"unless","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":103},"end":{"line":4,"column":149}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_widthAuto") : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":149},"end":{"line":4,"column":187}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"style") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":187},"end":{"line":4,"column":223}}})) != null ? stack1 : "")
    + "\" />"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":5},"end":{"line":5,"column":48}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["ddImgPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":20},"end":{"line":8,"column":41}}})) != null ? stack1 : "")
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"ddimg-popup__inner\">\r\n    <div class=\"ddimg-popup__widget\">\r\n\r\n        <div class=\"ddimg-popup__content\">\r\n            <div class=\"ddimg-popup__content-inner\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"img")||(depth0 && lookupProperty(depth0,"img"))||alias2).call(alias1,{"name":"img","hash":{"lightbox":false,"src":((stack1 = (depth0 != null ? lookupProperty(depth0,"lightbox") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),"class":(depth0 != null ? lookupProperty(depth0,"_imgClasses") : depth0)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":9,"column":24}}})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":15,"column":0},"end":{"line":15,"column":19}}}) : helper)))
    + "\r\n";
},"useData":true});

this["Handlebars"]["templates"]["ddRespImg"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<span class=\"ddimg__lightbox-icon icon icon-search\" title=\"Zoom in\"></span>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":4,"column":17},"end":{"line":4,"column":38}}})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"rimg__inner ddimg__inner js-ddimg-click\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"lightbox") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":2,"column":100}}})) != null ? stack1 : "")
    + "<img src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"src") || (depth0 != null ? lookupProperty(depth0,"src") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"src","hash":{},"data":data,"loc":{"start":{"line":3,"column":12},"end":{"line":3,"column":19}}}) : helper)))
    + "\" class=\"rimg__img\" />"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":4,"column":45}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["inputField"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias1(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":3,"column":41},"end":{"line":3,"column":49}}}) : helper)))
    + "=\""
    + alias1(container.lambda(depth0, depth0))
    + "\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"inputfield__inner\">\r\n    <div class=\"inputfield__input-container\">\r\n        <input "
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_inputAttributes") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":15},"end":{"line":3,"column":70}}})) != null ? stack1 : "")
    + " class=\"inputfield__input js-inputfield-input\" />\r\n\r\n        <div class=\"inputfield__placeholder js-inputfield-placeholder\">\r\n            <div class=\"inputfield__placeholder-inner\">\r\n                "
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"placeholder") : depth0), depth0)) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"inputfield__overlay\">\r\n\r\n        <div class=\"inputfield__hint\">\r\n            <div class=\"inputfield__icon inputfield__hint-icon js-inputfield-hint-icon\" title=\"Show correct answer\">\r\n                <div class=\"icon\"></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"inputfield__state\">\r\n            <div class=\"inputfield__icon inputfield__correct-icon\">\r\n                <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"inputfield__icon inputfield__incorrect-icon js-inputfield-incorrect-icon\">\r\n                <div class=\"icon\"></div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["inputFieldLegacy"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " hint-enabled";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"inputfield is-legacy"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isHintEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":74}}})) != null ? stack1 : "")
    + "\">\r\n    <div class=\"inputfield__input-container\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"_inputHTML") || (depth0 != null ? lookupProperty(depth0,"_inputHTML") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"_inputHTML","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\r\n    </div>\r\n\r\n    <div class=\"inputfield__overlay\">\r\n\r\n        <div class=\"inputfield__hint\">\r\n            <div class=\"inputfield__icon inputfield__hint-icon js-inputfield-hint-icon\" title=\"Show correct answer\">\r\n                <div class=\"icon\"></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"inputfield__state\">\r\n            <div class=\"inputfield__icon inputfield__correct-icon\">\r\n                <div class=\"icon\"></div>\r\n            </div>\r\n            <div class=\"inputfield__icon inputfield__incorrect-icon js-inputfield-incorrect-icon\">\r\n                <div class=\"icon\"></div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["outputField"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "style=\"width: "
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"width") : depth0), depth0))
    + "em;\"";
},"3":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"outputfield__prefix\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"prefix") : depth0), depth0))
    + "</span>";
},"5":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"outputfield__content-suffix\">"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"suffix") : depth0), depth0))
    + "</span>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"outputfield__inner\"><div \r\n        class=\"outputfield__content js-outputfield-content\" \r\n        title=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"prefix") : depth0), depth0))
    + alias2(((helper = (helper = lookupProperty(helpers,"result") || (depth0 != null ? lookupProperty(depth0,"result") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"result","hash":{},"data":data,"loc":{"start":{"line":4,"column":27},"end":{"line":4,"column":37}}}) : helper)))
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"suffix") : depth0), depth0))
    + "\"\r\n        "
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"width") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":59}}})) != null ? stack1 : "")
    + "\r\n        >"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"prefix") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":86}}})) != null ? stack1 : "")
    + "<span class=\"outputfield__result js-outputfield-result\">"
    + alias2(((helper = (helper = lookupProperty(helpers,"result") || (depth0 != null ? lookupProperty(depth0,"result") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"result","hash":{},"data":data,"loc":{"start":{"line":8,"column":64},"end":{"line":8,"column":74}}}) : helper)))
    + "</span>"
    + ((stack1 = lookupProperty(helpers,"if").call(alias3,(depth0 != null ? lookupProperty(depth0,"suffix") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":94}}})) != null ? stack1 : "")
    + "</div></div>";
},"useData":true});

this["Handlebars"]["templates"]["ddLoading"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});

this["Handlebars"]["templates"]["ddLoadingErrorText"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div><strong>An unexpected error has occured:</strong> "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"errorText") || (depth0 != null ? lookupProperty(depth0,"errorText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"errorText","hash":{},"data":data,"loc":{"start":{"line":1,"column":55},"end":{"line":1,"column":68}}}) : helper)))
    + "</div>\r\n<div style=\"margin-top: 0.75rem;\">(Reloading the page may resolve this issue).</div>";
},"useData":true});

this["Handlebars"]["templates"]["ddLoadingIcon"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"ddloading-icon "
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"class") : depth0), depth0))
    + "\" title=\"Loading...\">\r\n  <div class=\"ddloading__graphic is-idle\" aria-hidden=\"true\">\r\n    <div class=\"ddloading__graphic-inner\">\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"0\" src=\"assets/dd-loading-logo-1.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"1\" src=\"assets/dd-loading-logo-2.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"2\" src=\"assets/dd-loading-logo-1.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"3\" src=\"assets/dd-loading-logo-2.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"4\" src=\"assets/dd-loading-logo-1.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"5\" src=\"assets/dd-loading-logo-2.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"6\" src=\"assets/dd-loading-logo-1.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"7\" src=\"assets/dd-loading-logo-2.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"8\" src=\"assets/dd-loading-logo-1.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"9\" src=\"assets/dd-loading-logo-2.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"10\" src=\"assets/dd-loading-logo-1.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"11\" src=\"assets/dd-loading-logo-2.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"12\" src=\"assets/dd-loading-logo-1.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"13\" src=\"assets/dd-loading-logo-2.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"14\" src=\"assets/dd-loading-logo-1.png\" />\r\n      <img class=\"ddloading__graphic-img\" data-logo-index=\"15\" src=\"assets/dd-loading-logo-2.png\" />\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["ddPageModeCopyright"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"pagemode__copyright\">\r\n    <div class=\"pagemode__copyright-inner\">© "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"year") || (depth0 != null ? lookupProperty(depth0,"year") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"year","hash":{},"data":data,"loc":{"start":{"line":2,"column":45},"end":{"line":2,"column":53}}}) : helper)))
    + " Didasko Digital. All Rights Reserved.</div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["questionPlusFeedbackBody"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='notify__body-content'>\r\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"body") || (depth0 != null ? lookupProperty(depth0,"body") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\r\n</div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class='notify__body-instruction'>\r\n    "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"instruction") || (depth0 != null ? lookupProperty(depth0,"instruction") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"instruction","hash":{},"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":5,"column":21}}}) : helper))) != null ? stack1 : "")
    + "\r\n</div>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":3,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":13}}})) != null ? stack1 : "");
},"useData":true});

this["Handlebars"]["templates"]["questionPlusLogo"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"component__header-logo questionplus__logo\">\r\n    <img src=\"assets/questionplus-logo.svg\" />\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["sideMenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <button \r\n                    role=\"tab\" \r\n                    class=\"sidemenu__accordion-item-btn js-toggle-accordion-item\" \r\n                    data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":18,"column":32},"end":{"line":18,"column":42}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":18,"column":44},"end":{"line":18,"column":53}}}) : helper)))
    + "</button>\r\n                <div \r\n                    role=\"tabpanel\" \r\n                    class=\"sidemenu__accordion-item-content\" \r\n                    data-index=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":22,"column":32},"end":{"line":22,"column":42}}}) : helper)))
    + "\">\r\n                </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"sidemenu__menu\">\r\n    <div class=\"sidemenu__menu-inner\">\r\n        <div class=\"sidemenu__header\">\r\n            <div class=\"sidemenu__header-title\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":6,"column":25}}}) : helper)))
    + "\r\n            </div>\r\n            <div class=\"sidemenu__btn-container\">\r\n                \r\n            </div>\r\n        </div>\r\n        <div role=\"list\" class=\"sidemenu__accordion\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":12},"end":{"line":25,"column":21}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n\r\n    "
    + alias4(((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":29,"column":4},"end":{"line":29,"column":23}}}) : helper)))
    + "\r\n\r\n</div>\r\n\r\n<div class=\"shadow sidemenu__shadow js-sidemenu-shadow-click\" tabindex=\"-1\" aria-hidden=\"true\"></div>";
},"useData":true});

this["Handlebars"]["templates"]["sideMenuBtn"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"btn-icon sidemenu__drawer-btn js-sidemenu-drawer-btn\" aria-label=\"Open course menu\">\r\n    <span class=\"sidemenu__drawer-btn-bar bar-0\"></span>\r\n    <span class=\"sidemenu__drawer-btn-bar bar-1\"></span>\r\n    <span class=\"sidemenu__drawer-btn-bar bar-2\"></span>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["sideMenuCategory"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"smcategory__item smcategory__item-type-"
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_type") : depths[1]), depth0))
    + " is-placeholder\">\r\n                <div class=\"smcategory__item-inner\">\r\n                    <div class=\"smcategory__item-body\">\r\n                        There are no "
    + ((stack1 = (lookupProperty(helpers,"lowercase")||(depth0 && lookupProperty(depth0,"lowercase"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"lowercase","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":37},"end":{"line":7,"column":71}}})) != null ? stack1 : "")
    + " for this learning content.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":51,"column":21}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"compare")||(depth0 && lookupProperty(depth0,"compare"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isAvailable") : depth0),"===",false,{"name":"compare","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":50,"column":28}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"smcategory__item smcategory__item-type-"
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_type") : depths[1]), depth0))
    + "\">\r\n                        <div class=\"smcategory__item-inner\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"category_is_type")||(depth0 && lookupProperty(depth0,"category_is_type"))||alias2).call(alias1,depths[1],"glossaries",{"name":"category_is_type","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":28},"end":{"line":26,"column":49}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"category_is_type")||(depth0 && lookupProperty(depth0,"category_is_type"))||alias2).call(alias1,depths[1],"resources",{"name":"category_is_type","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":28},"end":{"line":33,"column":49}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"category_is_type")||(depth0 && lookupProperty(depth0,"category_is_type"))||alias2).call(alias1,depths[1],"references",{"name":"category_is_type","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":28},"end":{"line":40,"column":49}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"category_is_type")||(depth0 && lookupProperty(depth0,"category_is_type"))||alias2).call(alias1,depths[1],"authors",{"name":"category_is_type","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":43,"column":28},"end":{"line":47,"column":49}}})) != null ? stack1 : "")
    + "                        </div>\r\n                    </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"smcategory__item-title\">\r\n                                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":21,"column":32},"end":{"line":21,"column":51}}})) != null ? stack1 : "")
    + "\r\n                            </div>\r\n                            <div class=\"smcategory__item-body\">\r\n                                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":24,"column":32},"end":{"line":24,"column":50}}})) != null ? stack1 : "")
    + "\r\n                            </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"smcategory__item-body\">\r\n                                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":31,"column":32},"end":{"line":31,"column":50}}})) != null ? stack1 : "")
    + "\r\n                            </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"smcategory__item-title\">\r\n                                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":45,"column":32},"end":{"line":45,"column":42}}}) : helper))) != null ? stack1 : "")
    + "\r\n                            </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"smcategory__inner\">\r\n    <div class=\"smcategory__items\">\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":52,"column":19}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["sideMenuCategoryCredits"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"smcategory__item smcategory__item-type-credits\">\r\n            <div class=\"smcategory__item-inner\">\r\n                <div class=\"smcategory__item-title\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"role") || (depth0 != null ? lookupProperty(depth0,"role") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"role","hash":{},"data":data,"loc":{"start":{"line":6,"column":52},"end":{"line":6,"column":62}}}) : helper))) != null ? stack1 : "")
    + "</div>\r\n                <div class=\"smcategory__item-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"names") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":20},"end":{"line":10,"column":29}}})) != null ? stack1 : "")
    + "                </div>\r\n            </div>\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <div class=\"smcategory__item-body-name\">"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"smcategory__inner\">\r\n    <div class=\"smcategory__items\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":14,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"smcategory__copyright\">\r\n        <div class=\"smcategory__copyright\">\r\n            "
    + ((stack1 = container.lambda((depth0 != null ? lookupProperty(depth0,"copyright") : depth0), depth0)) != null ? stack1 : "")
    + "\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["sideMenuCategoryNav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_isAvailable") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":19,"column":15}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"smcategory__item smcategory__item-type-nav\">\r\n            <div class=\"smcategory__item-inner\">\r\n                <div class=\"nav__item js-nav-item-btn-click\" data-id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":7,"column":70},"end":{"line":7,"column":77}}}) : helper)))
    + "\">\r\n                    <div class=\"nav__item-title smcategory__item-title\">"
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_sideMenu") : depth0)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":8,"column":72},"end":{"line":8,"column":101}}})) != null ? stack1 : "")
    + "</div>\r\n                    <div class=\"nav__item-num smcategory__item-num\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isQuestionType") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":10,"column":24},"end":{"line":14,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                            <img class=\"nav__item-num-logo\" src=\"assets/questionplus-logo.svg\" />\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_blockNum") || (depth0 != null ? lookupProperty(depth0,"_blockNum") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_blockNum","hash":{},"data":data,"loc":{"start":{"line":13,"column":28},"end":{"line":13,"column":41}}}) : helper)))
    + "\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"smcategory__inner\">\r\n    <div class=\"smcategory__items\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":20,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["sideMenuCategoryResources"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"smcategory__item smcategory__item-type-resources\">\r\n            <div class=\"smcategory__item-inner\">\r\n                <div class=\"smcategory__item-body\">"
    + ((stack1 = (lookupProperty(helpers,"download")||(depth0 && lookupProperty(depth0,"download"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"download","hash":{"icon":"doc-pdf","download":(depth0 != null ? lookupProperty(depth0,"_pdfDownloadName") : depth0),"href":"course/en/downloads/PDF.pdf"},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":51},"end":{"line":7,"column":181}}})) != null ? stack1 : "")
    + "</div>\r\n            </div>\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "Download content as PDF";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":20,"column":23}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"smcategory__item smcategory__item-type-"
    + container.escapeExpression(container.lambda((depths[1] != null ? lookupProperty(depths[1],"_type") : depths[1]), depth0))
    + " is-placeholder\">\r\n                    <div class=\"smcategory__item-inner\">\r\n                        <div class=\"smcategory__item-body\">\r\n                            There are no resources for this learning content.\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"smcategory__item smcategory__item-type-resources\">\r\n            <div class=\"smcategory__item-inner\">\r\n                <div class=\"smcategory__item-body\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"download") : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":20},"end":{"line":28,"column":27}}})) != null ? stack1 : "")
    + "                </div>\r\n            </div>\r\n        </div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        "
    + ((stack1 = (lookupProperty(helpers,"download")||(depth0 && lookupProperty(depth0,"download"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"download","hash":{"href":(depth0 != null ? lookupProperty(depth0,"download") : depth0)},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":24},"end":{"line":27,"column":75}}})) != null ? stack1 : "")
    + "\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":27,"column":51},"end":{"line":27,"column":62}}}) : helper))) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"smcategory__inner\">\r\n    <div class=\"smcategory__items\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isPDFEnabled") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":21,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"_items") : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":8},"end":{"line":32,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["sideNavBlocknum"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"sidenav__blocknum-inner js-sidenav-blocknum\" aria-label=\"Current page number\" data-block-num-id=\"\">\r\n    <div class=\"sidenav__blocknum-half is-left\">\r\n        <div class=\"sidenav__blocknum-half-clip\">\r\n            <div class=\"sidenav__blocknum-half-rot\">\r\n                <div class=\"sidenav__blocknum-bar is-incomplete\"></div>\r\n                <div class=\"sidenav__blocknum-bar is-complete\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"sidenav__blocknum-half is-right\">\r\n        <div class=\"sidenav__blocknum-half-clip\">\r\n            <div class=\"sidenav__blocknum-half-rot\">\r\n                <div class=\"sidenav__blocknum-bar is-incomplete\"></div>\r\n                <div class=\"sidenav__blocknum-bar is-complete\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"sidenav__blocknum-text\">\r\n        <input class=\"sidenav__blocknum-text-input js-sidenav-blocknum-input\" tabindex=\"-1\" type=\"number\" min=\"1\" maxlength=\"2\" value=\"1\" pattern=\"[0-9]+\">\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["sideNavProgress"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"sidenav__progress-inner js-sidenav-progress\" aria-label=\"Page progress. Use this to listen to the list of regions in this topic and whether they're completed. You can jump directly to any that are incomplete or which sound particularly interesting. %\">\r\n    \r\n    <div class=\"sidenav__progress-indicator\">\r\n        <div class=\"sidenav__progress-indicator-inner\">\r\n            <div class=\"sidenav__progress-indicator-bar\"></div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["extraLearning"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"extralearning-btn__inner\">\r\n    <div class=\"extralearning-btn__btn js-extralearning-btn\" tabindex=\"0\" role=\"button\">\r\n        <div class=\"extralearning__icon js-extralearning-icon extralearning__icon-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":3,"column":82},"end":{"line":3,"column":91}}}) : helper)))
    + "\">\r\n        </div>\r\n        <div class=\"extralearning-btn__title\">\r\n            <div class=\"extralearning-btn__title-inner\">\r\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":7,"column":16},"end":{"line":7,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["extraLearningPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":21},"end":{"line":12,"column":65}}})) != null ? stack1 : "")
    + " class=\"extralearning-popup__title\" "
    + container.escapeExpression((lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":12,"column":101},"end":{"line":12,"column":132}}}))
    + ">\r\n                    <div class=\"extralearning-popup__title-inner\">\r\n                        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":14,"column":24},"end":{"line":14,"column":35}}}) : helper))) != null ? stack1 : "")
    + "\r\n                    </div>\r\n                </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " id=\"notify-heading\"";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"extralearning-popup__body\">\r\n                    <div class=\"extralearning-popup__body-inner\">\r\n                        "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":21,"column":24},"end":{"line":21,"column":42}}})) != null ? stack1 : "")
    + "\r\n                    </div>\r\n                </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"extralearning-popup__inner\">\r\n    <div class=\"extralearning-popup__widget\">\r\n        <div class=\"extralearning-popup__icon-container\">\r\n            <div class=\"extralearning__icon js-extralearning-icon extralearning__icon-"
    + alias4(((helper = (helper = lookupProperty(helpers,"_type") || (depth0 != null ? lookupProperty(depth0,"_type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data,"loc":{"start":{"line":5,"column":86},"end":{"line":5,"column":95}}}) : helper)))
    + "\">\r\n            </div>\r\n        </div>\r\n        <div class=\"extralearning-popup__content-container\">\r\n            <div class=\"extralearning-popup__content\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":17,"column":23}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":18,"column":16},"end":{"line":24,"column":23}}})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"
    + alias4(((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":30,"column":0},"end":{"line":30,"column":19}}}) : helper)))
    + "\r\n";
},"useData":true});

this["Handlebars"]["templates"]["lottie"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "aria-label=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"alt") || (depth0 != null ? lookupProperty(depth0,"alt") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"alt","hash":{},"data":data,"loc":{"start":{"line":2,"column":74},"end":{"line":2,"column":81}}}) : helper)))
    + "\"";
},"3":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"loadingIcon")||(depth0 && lookupProperty(depth0,"loadingIcon"))||container.hooks.helperMissing).call(alias1,{"name":"loadingIcon","hash":{"class":"lottie__loading"},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":41}}})) != null ? stack1 : "")
    + "\r\n<div class=\"lottie__container js-lottie-container\" "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"alt") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":2,"column":51},"end":{"line":2,"column":115}}})) != null ? stack1 : "")
    + ">\r\n\r\n</div>\r\n<div class=\"lottie__controls-container\">\r\n    \r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["lottieControls"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "            <div class=\"lottie__controls-playpause-watermark icon icon-refresh\" title=\"Replay\"></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"lottie__controls-inner\">\r\n    <div class=\"lottie__controls-playpause js-controls-playpause\">\r\n"
    + ((stack1 = (lookupProperty(helpers,"equals")||(depth0 && lookupProperty(depth0,"equals"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"_controlsType") : depth0),"basic",{"name":"equals","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":5,"column":19}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["markChain"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"markchain__label js-markchain-label"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isSmallLabel") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":64},"end":{"line":7,"column":101}}})) != null ? stack1 : "")
    + "\"><span class=\"markchain__label-inner\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"label") || (depth0 != null ? lookupProperty(depth0,"label") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"label","hash":{},"data":data,"loc":{"start":{"line":7,"column":140},"end":{"line":7,"column":151}}}) : helper))) != null ? stack1 : "")
    + "</span></span>";
},"2":function(container,depth0,helpers,partials,data) {
    return " is-small";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"markchain__background js-markchain-sizing\"></span><span class=\"markchain__inner\"><span class=\"markchain__content\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":3,"column":39},"end":{"line":3,"column":52}}}) : helper))) != null ? stack1 : "")
    + "</span><span class=\"markchain__arrow js-markchain-arrow\"><span class=\"markchain__arrow-draw\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"label") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":8,"column":21}}})) != null ? stack1 : "")
    + "</span></span></span>";
},"useData":true});

this["Handlebars"]["templates"]["nestComponent"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});

this["Handlebars"]["templates"]["playbackControls"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"playbackcontrols__inner\">\r\n    <div class=\"playbackcontrols__controls\">\r\n        <button class=\"playbackcontrols__button playbackcontrols__back base\" aria-label=\"Step back\" title=\"Step back\"></button>\r\n        <button class=\"playbackcontrols__button playbackcontrols__playpause base\" aria-label=\"Play\" title=\"Play\"></button>\r\n        <button class=\"playbackcontrols__button playbackcontrols__next base\" aria-label=\"Step forward\" title=\"Step forward\"></button>\r\n    </div><div class=\"playbackcontrols__range-container\"><input class=\"playbackcontrols__range\" type=\"range\" value=\"0\" min=\"0\" max=\""
    + ((stack1 = (lookupProperty(helpers,"math")||(depth0 && lookupProperty(depth0,"math"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"frameCount") : depth0),"-",1,{"name":"math","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":87},"end":{"line":8,"column":122}}})) != null ? stack1 : "")
    + "\" /></div></div>";
},"useData":true});

this["Handlebars"]["templates"]["resourcePopupPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isActive") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":13},"end":{"line":4,"column":57}}})) != null ? stack1 : "")
    + " class=\"resourcepopup-popup__title\" "
    + container.escapeExpression((lookupProperty(helpers,"a11y_attrs_heading")||(depth0 && lookupProperty(depth0,"a11y_attrs_heading"))||alias2).call(alias1,"notify",{"name":"a11y_attrs_heading","hash":{},"data":data,"loc":{"start":{"line":4,"column":93},"end":{"line":4,"column":124}}}))
    + ">\r\n            <div class=\"resourcepopup-popup__title-inner\">\r\n                "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":6,"column":27}}}) : helper))) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " id=\"notify-heading\"";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"resourcepopup-popup__body\">\r\n            <div class=\"resourcepopup-popup__body-inner\">\r\n                "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":13,"column":16},"end":{"line":13,"column":34}}})) != null ? stack1 : "")
    + "\r\n            </div>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"resourcepopup-popup__inner\">\r\n    <div class=\"resourcepopup-popup__content\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":9,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":8},"end":{"line":16,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n\r\n"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"a11y_wrap_focus") || (depth0 != null ? lookupProperty(depth0,"a11y_wrap_focus") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"a11y_wrap_focus","hash":{},"data":data,"loc":{"start":{"line":20,"column":0},"end":{"line":20,"column":19}}}) : helper)))
    + "\r\n";
},"useData":true});

this["Handlebars"]["templates"]["stickyBlock"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " col-"
    + ((stack1 = (lookupProperty(helpers,"math")||(depth0 && lookupProperty(depth0,"math"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),12,"-",((stack1 = (depth0 != null ? lookupProperty(depth0,"_sizing") : depth0)) != null ? lookupProperty(stack1,"_width") : stack1),{"name":"math","hash":{},"data":data,"loc":{"start":{"line":3,"column":91},"end":{"line":3,"column":123}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " col-minwidth-"
    + ((stack1 = (lookupProperty(helpers,"math")||(depth0 && lookupProperty(depth0,"math"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),12,"-",((stack1 = (depth0 != null ? lookupProperty(depth0,"_sizing") : depth0)) != null ? lookupProperty(stack1,"_minWidth") : stack1),{"name":"math","hash":{},"data":data,"loc":{"start":{"line":3,"column":169},"end":{"line":3,"column":204}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"stickyblock__item is-static js-stickyblock-item "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":5,"column":72},"end":{"line":5,"column":79}}}) : helper)))
    + "\">\r\n                <div class=\"stickyblock__item-inner\">\r\n                </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"_stickyBlock") : depths[1])) != null ? lookupProperty(stack1,"_timeline") : stack1)) != null ? lookupProperty(stack1,"_isEnabled") : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":18,"column":23}}})) != null ? stack1 : "")
    + "            </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"stickyblock__timeline\">\r\n                        <div class=\"stickyblock__timeline-inner\">\r\n                            <div class=\"stickyblock__timeline-line stickyblock__timeline-line-top\"></div>\r\n                            "
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_stickyBlock") : depth0)) != null ? lookupProperty(stack1,"_timeline") : stack1)) != null ? lookupProperty(stack1,"title") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":28},"end":{"line":14,"column":152}}})) != null ? stack1 : "")
    + "\r\n                            <div class=\"stickyblock__timeline-line stickyblock__timeline-line-bottom\"></div>\r\n                        </div>\r\n                    </div>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"stickyblock__timeline-title\">"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_stickyBlock") : depth0)) != null ? lookupProperty(stack1,"_timeline") : stack1)) != null ? lookupProperty(stack1,"title") : stack1), depth0)) != null ? stack1 : "")
    + "</div>";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"stickyblock__epub-block js-stickyblock-epub-block"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_sizing") : depth0)) != null ? lookupProperty(stack1,"_width") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":69},"end":{"line":25,"column":121}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_sizing") : depth0)) != null ? lookupProperty(stack1,"_minWidth") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":121},"end":{"line":25,"column":188}}})) != null ? stack1 : "")
    + "\">\r\n            <div class=\"stickyblock__epub-block-inner\">\r\n                <div class=\"stickyblock__epub-component-container js-stickyblock-epub-component-container\">\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " col-"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_sizing") : depth0)) != null ? lookupProperty(stack1,"_width") : stack1), depth0));
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " col-minwidth-"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_sizing") : depth0)) != null ? lookupProperty(stack1,"_minWidth") : stack1), depth0));
},"14":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"stickyblock__item is-sticky js-stickyblock-item "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_id") || (depth0 != null ? lookupProperty(depth0,"_id") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_id","hash":{},"data":data,"loc":{"start":{"line":31,"column":72},"end":{"line":31,"column":79}}}) : helper)))
    + " is-hidden\">\r\n                <div class=\"stickyblock__item-inner\">\r\n                </div>\r\n            </div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    return "                </div>\r\n            </div>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"stickyblock__inner\">\r\n\r\n    <div class=\"stickyblock__col stickyblock__col-left is-static"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_sizing") : depth0)) != null ? lookupProperty(stack1,"_width") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":64},"end":{"line":3,"column":130}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_sizing") : depth0)) != null ? lookupProperty(stack1,"_minWidth") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":130},"end":{"line":3,"column":211}}})) != null ? stack1 : "")
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_stickyBlock") : depth0)) != null ? lookupProperty(stack1,"_children") : stack1)) != null ? lookupProperty(stack1,"left") : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":20,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_stickyBlock") : depth0)) != null ? lookupProperty(stack1,"_isEpubMode") : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":28,"column":11}}})) != null ? stack1 : "")
    + "    <div class=\"stickyblock__col stickyblock__col-right is-sticky"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_sizing") : depth0)) != null ? lookupProperty(stack1,"_width") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":65},"end":{"line":29,"column":117}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_sizing") : depth0)) != null ? lookupProperty(stack1,"_minWidth") : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":29,"column":117},"end":{"line":29,"column":184}}})) != null ? stack1 : "")
    + "\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_stickyBlock") : depth0)) != null ? lookupProperty(stack1,"_children") : stack1)) != null ? lookupProperty(stack1,"right") : stack1),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":30,"column":8},"end":{"line":36,"column":17}}})) != null ? stack1 : "")
    + "    </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_stickyBlock") : depth0)) != null ? lookupProperty(stack1,"_isEpubMode") : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":38,"column":4},"end":{"line":42,"column":11}}})) != null ? stack1 : "")
    + "\r\n</div>";
},"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["stickyElement"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"stickyelement__inner\">\r\n    "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":2,"column":4},"end":{"line":2,"column":22}}})) != null ? stack1 : "")
    + "\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["reference-pdf"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span><strong>[[[INSERT PDF VERSION OF REFERENCE HERE. Look at this "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"example") || (depth0 != null ? lookupProperty(depth0,"example") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"example","hash":{},"data":data,"loc":{"start":{"line":1,"column":68},"end":{"line":1,"column":79}}}) : helper)))
    + " variable]]]</strong></span>";
},"useData":true});

this["Handlebars"]["templates"]["tooltip"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " js-tooltip-target";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"tooltip__text\">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"buttonText") || (depth0 != null ? lookupProperty(depth0,"buttonText") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"buttonText","hash":{},"data":data,"loc":{"start":{"line":6,"column":55},"end":{"line":6,"column":71}}}) : helper))) != null ? stack1 : "")
    + "</span>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"tooltip__icon"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"buttonText") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":47},"end":{"line":7,"column":98}}})) != null ? stack1 : "")
    + "\"><img src=\"assets/icon-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_img") || (depth0 != null ? lookupProperty(depth0,"_img") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"_img","hash":{},"data":data,"loc":{"start":{"line":7,"column":122},"end":{"line":7,"column":130}}}) : helper)))
    + ".svg\" /></span>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"tooltip__icon"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"buttonText") : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":48},"end":{"line":8,"column":99}}})) != null ? stack1 : "")
    + "\"><span class=\"icon icon-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"_icon") || (depth0 != null ? lookupProperty(depth0,"_icon") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"_icon","hash":{},"data":data,"loc":{"start":{"line":8,"column":124},"end":{"line":8,"column":133}}}) : helper)))
    + "\"></span></span>";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span class=\"tooltip is-"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":1,"column":24},"end":{"line":1,"column":32}}}) : helper)))
    + "\"><span class=\"tooltip__btn js-tooltip"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"buttonText") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":44},"end":{"line":5,"column":87}}})) != null ? stack1 : "")
    + "\" role=\"button\">"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"buttonText") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":8},"end":{"line":6,"column":86}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_img") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":8},"end":{"line":7,"column":153}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_icon") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":8},"end":{"line":8,"column":157}}})) != null ? stack1 : "")
    + "</span><span class=\"tooltip__content\"></span></span>";
},"useData":true});

this["Handlebars"]["templates"]["tooltipPopup"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"tooltip-popup__title\">\r\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":5,"column":12},"end":{"line":5,"column":31}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tooltip-popup__inner\">\r\n    <div class=\"tooltip-popup__content\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"title") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":7,"column":15}}})) != null ? stack1 : "")
    + "        <div class=\"tooltip-popup__body\">\r\n            "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"content") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":9,"column":33}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n    </div>\r\n    <div class=\"tooltip-popup__tail-container\">\r\n        <div class=\"tooltip-popup__tail-bg\"></div>\r\n        <div class=\"tooltip-popup__tail-border\"></div>\r\n    </div>\r\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["boxMenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"menu__header boxmenu__header\">\r\n    <div class=\"menu__header-inner boxmenu__header-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":21,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":23,"column":6},"end":{"line":29,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":31,"column":6},"end":{"line":37,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":39,"column":6},"end":{"line":45,"column":13}}})) != null ? stack1 : "")
    + "\r\n    </div>\r\n  </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__title boxmenu__title\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibleState") : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":14,"column":19}}})) != null ? stack1 : "")
    + "\r\n        <div class=\"menu__title-inner boxmenu__title-inner\" "
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"_disableAccessibleState") : depth0),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":60},"end":{"line":16,"column":124}}})) != null ? stack1 : "")
    + ">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":17,"column":36}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n\r\n      </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"js-heading\"></div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__subtitle boxmenu__subtitle\">\r\n        <div class=\"menu__subtitle-inner boxmenu__subtitle-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":26,"column":10},"end":{"line":26,"column":32}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__body boxmenu__body\">\r\n        <div class=\"menu__body-inner boxmenu__body-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":34,"column":10},"end":{"line":34,"column":28}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu__instruction boxmenu__instruction\">\r\n        <div class=\"menu__instruction-inner boxmenu__instruction-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":42,"column":10},"end":{"line":42,"column":35}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"menu__inner boxmenu__inner\">\r\n\r\n"
    + ((stack1 = (lookupProperty(helpers,"any")||(depth0 && lookupProperty(depth0,"any"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),(depth0 != null ? lookupProperty(depth0,"subtitle") : depth0),(depth0 != null ? lookupProperty(depth0,"body") : depth0),(depth0 != null ? lookupProperty(depth0,"instruction") : depth0),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":49,"column":10}}})) != null ? stack1 : "")
    + "\r\n  <div class=\"menu__item-container boxmenu__item-container\">\r\n    <div class=\"menu__item-container-inner boxmenu__item-container-inner js-children\" role=\"list\">\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["boxMenuItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"menu-item__image-container boxmenu-item__image-container\">\r\n    <img class=\"menu-item__image boxmenu-item__image\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1), depth0))
    + "\" aria-hidden=\"true\">\r\n  </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-item__title boxmenu-item__title\">\r\n        <div class=\"js-heading\" data-a11y-heading-type=\"menuItem\"></div>\r\n\r\n        <div class=\"menu-item__title-inner boxmenu-item__title-inner accessible-text-block\" aria-hidden=\"true\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":19,"column":10},"end":{"line":19,"column":36}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression((lookupProperty(helpers,"a11y_aria_image")||(depth0 && lookupProperty(depth0,"a11y_aria_image"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"a11y_aria_image","hash":{},"data":data,"loc":{"start":{"line":24,"column":26},"end":{"line":24,"column":58}}}));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-item__body boxmenu-item__body\">\r\n        <div class=\"menu-item__body-inner boxmenu-item__body-inner\">\r\n          "
    + ((stack1 = (lookupProperty(helpers,"compile")||(depth0 && lookupProperty(depth0,"compile"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"compile","hash":{},"data":data,"loc":{"start":{"line":29,"column":10},"end":{"line":29,"column":28}}})) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"menu-item__duration boxmenu-item__duration\">\r\n        <div class=\"menu-item__duration-inner boxmenu-item__duration-inner\">\r\n          "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxMenu") : stack1)) != null ? lookupProperty(stack1,"durationLabel") : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":10},"end":{"line":37,"column":105}}})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"duration") || (depth0 != null ? lookupProperty(depth0,"duration") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":37,"column":106},"end":{"line":37,"column":120}}}) : helper))) != null ? stack1 : "")
    + "\r\n        </div>\r\n      </div>\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_menu") : stack1)) != null ? lookupProperty(stack1,"_boxMenu") : stack1)) != null ? lookupProperty(stack1,"durationLabel") : stack1), depth0)) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    return " is-visited";
},"14":function(container,depth0,helpers,partials,data) {
    return " is-locked";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_globals") : depth0)) != null ? lookupProperty(stack1,"_accessibility") : stack1)) != null ? lookupProperty(stack1,"_ariaLabels") : stack1)) != null ? lookupProperty(stack1,"visited") : stack1), depth0));
},"18":function(container,depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return alias4(((helper = (helper = lookupProperty(helpers,"import_globals") || (depth0 != null ? lookupProperty(depth0,"import_globals") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":18}}}) : helper)))
    + "\r\n\r\n<div class=\"menu-item__inner boxmenu-item__inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"src") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":9,"column":9}}})) != null ? stack1 : "")
    + "\r\n  <div class=\"menu-item__details boxmenu-item__details\">\r\n    <div class=\"menu-item__details-inner boxmenu-item__details-inner\">\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"displayTitle") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":14,"column":6},"end":{"line":22,"column":13}}})) != null ? stack1 : "")
    + "\r\n      "
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_graphic") : depth0)) != null ? lookupProperty(stack1,"alt") : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":65}}})) != null ? stack1 : "")
    + "\r\n\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"body") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":26,"column":6},"end":{"line":32,"column":13}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"duration") : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":40,"column":13}}})) != null ? stack1 : "")
    + "\r\n      <div class=\"menu-item__progress boxmenu-item__progress js-menu-item-progress\">\r\n      </div>\r\n\r\n      <div class=\"menu-item__button-container boxmenu-item__button-container\">\r\n        <button class=\"btn-text menu-item__button boxmenu-item__button js-btn-click"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":83},"end":{"line":47,"column":119}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":119},"end":{"line":47,"column":153}}})) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isVisited") : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":167},"end":{"line":47,"column":239}}})) != null ? stack1 : "")
    + " "
    + alias4(((helper = (helper = lookupProperty(helpers,"linkText") || (depth0 != null ? lookupProperty(depth0,"linkText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":47,"column":240},"end":{"line":47,"column":252}}}) : helper)))
    + "\""
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"_isLocked") : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":47,"column":253},"end":{"line":47,"column":297}}})) != null ? stack1 : "")
    + ">\r\n          "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"linkText") || (depth0 != null ? lookupProperty(depth0,"linkText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data,"loc":{"start":{"line":48,"column":10},"end":{"line":48,"column":24}}}) : helper))) != null ? stack1 : "")
    + "\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n";
},"useData":true});

this["Handlebars"]["templates"]["c-example"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"c-example\">\r\n	"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":2,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\r\n</div>";
},"useData":true});

return this["Handlebars"];

});