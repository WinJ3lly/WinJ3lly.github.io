define([],function(){class e extends Backbone.Model{initialize(){this.setupEventListeners()}setupEventListeners(){this.listenTo(this,{"change:_isActive":this.onActiveChange})}activate(){this.set("_isActive",!0)}onActiveChange(e,t){t&&(t=this.get("_id"),Backbone.history.navigate("#"+t,{trigger:!0}),Hybrid.menuModel.hide())}setupData(){this.set("_index",this.collection.indexOf(this)),this.set("_num",this.get("_index")+1);var t=this.get("_children").first();if(this.get("_isRecipe")){var e=Hybrid.contentObject.get("_menuData")?._recipes?._items;if(!e)throw"slideModel.js: could not find recipe data in contentObjects.json";e=e.find(e=>e._id==this.get("_children").first().get("_recipeId"));this.set("title",e.title),this.set("_recipeId",e._id),this.set("heading",e.heading),this.set("previewSrc","course/en/images/recipes/"+e._id+".jpg")}else{let e=t.get("menuTitle")||t.get("title");e||0!==this.get("_index")||"hyb-presentation"!==t.get("_component")||(e="Overview"),this.set("title",e),this.set("_isMenuTitle",Boolean(t.get("menuTitle"))),this.set("previewSrc","course/en/images/previews/"+this.get("_num")+".jpg")}this.get("_children").each(e=>{switch(e.get("_component")){case"hyb-yourturn":this.set("_isYourTurn",!0),this.set("_icon","icon-hm-yt");break;case"hyb-freethinking":this.set("_isFreeThinking",!0),this.set("_icon","icon-hm-ft")}})}}return e});