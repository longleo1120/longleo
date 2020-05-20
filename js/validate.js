$().ready(function() {
	$("form[name='loginForm']").validate({
		
		rules: {
			user: {
				required: true,
				minlength: 2,
				maxlength: 15
	


			},
			pass: {
				required: true,
				minlength: 8
			},
			
		},
			messages: {
		      user:"Vui lòng nhập tên đăng nhập",

		      
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
				maxlength: 15
				
			},
			password: {
				required: true,
				minlength: 8
			},
			repassword: {
				required: true,
				
				minlength: 8,
				equalTo: "#password"
			},
			email: {
				required: true,	
				email : true
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
		      	email: "Sai định dạng email"	
		      }
		    },
		   
		    submitHandler: function(form) {
		      form.submit();
			}
	});
});
