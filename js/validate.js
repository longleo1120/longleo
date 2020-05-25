$().ready(function() {
	$("form[name='loginForm']").validate({
		
		rules: {
			email: {
				required: true,
				minlength: 2,
				
				email: true,
				normalizer: function( value ) {
	        			return $.trim( value );
      			}
				
			},
			pass: {
				required: true,
				minlength: 8,
				normalizer: function( value ) {
	        			return $.trim( value );
      			}
				
			},
			
		},
			messages: {
		      email:{
		      	required: "Vui lòng nhập tên đăng nhập",
		      	minlength: "Tên đăng nhập tối thiểu 2 kí tự",
		      	normalizer: "Tên đăng nhập không được để trống",
		      	email: "Vui lòng nhập đúng định dạng email"
		      	
		      },

		      
		      pass: {
		        required: "Vui lòng nhập mật khẩu",
		        minlength: "Mật khẩu tối thiểu 8 kí tự"
		      },
		      
		    },
		   
		    submitHandler: function(form) {
		      form.submit();
			}
	});

});

$().ready(function() {
	$("form[name='signupForm']").validate({
		
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15,
				normalizer: function( value ) {
	        			return $.trim( value );
      			}
				
			},
			password: {
				required: true,
				minlength: 8,
				normalizer: function( value ) {
	        			return $.trim( value );
      			}
			},
			repassword: {
				required: true,
				
				minlength: 8,
				equalTo: "#password",
				normalizer: function( value ) {
	        			return $.trim( value );
      			}
			},
			email: {
				required: true,	
				email : true,
				normalizer: function( value ) {
	        			return $.trim( value );
      			}
			},
		},
			messages: {
		      username:"Vui lòng nhập tên đăng nhập",

		      password: {
		        required: "Vui lòng nhập mật khẩu",
		        minlength: "Mật khẩu tối thiểu 8 kí tự"
		      },

		      repassword:{
		      	required: "Vui lòng nhập mật khẩu",
		      	minlength: "Mật khẩu tối thiểu 8 kí tự",
		      	equalTo: "Nhập lại mật khẩu chưa đúng"

		      },
		      email: {
		      	required: "Vui lòng nhập địa chỉ email",
		      	email: "Vui lòng nhập đúng định dạng email"	
		      }
		    },
		   
		    submitHandler: function(form) {
		      form.submit();
			}
	});
});
