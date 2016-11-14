(function() {
	var app = {
		localurl:"http://192.168.1.107:8080",

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
				if(data.success){
					window.location = data.url;	
				}else if(data.success === false){
					$("#error_login").html("wrong username and/or password.")
				}				
			});
		},
	}
	app.init();
})();