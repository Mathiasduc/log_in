(function() {
	var app = {

		init : function(){
			this.formSettings();
			this.listeners();
		},

		formSettings: function(){
			$('.ui.form')
			.form({
				fields: {
					user_name : 'empty',
					password : ['minLength[6]', 'empty'],
				}
			});
		},

		listeners: function(){
			var me = this;
			$("#form_log").on("submit", me.postForm);
		},

		postForm: function(event){
			event.preventDefault();
			var me = this;
			var valuesForm = {user_name: $("#user_name").val(), password: $("#password").val()};
			var jqXHR = $.post("/log", valuesForm)
			.done(function(data){
				window.location = data.url;		
			})
			.fail(function(data){
				if(data.responseJSON.successAuth === false){
					$("#error_login").html("wrong username and/or password.")
				}
			});
		},
	}
	app.init();
})();