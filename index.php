<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title></title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
	<script src="js/validate.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>
	<!-- <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script> -->
	

</head>
<body>
	<div class="row">
    <div class="col-md-6 mx-auto p-0">
        <div class="card">
            <div class="login-box" >
                <div class="login-snip"> <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Login</label> <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
                    <div class="login-space"  >
                        <form class="login" name="loginForm">
                            <div class="group"> <label for="user" class="label">Email</label> <input id="user" name="user" type="text" class="input" placeholder="Enter your email" required> </div>
                            <div class="group"> <label for="pass" class="label">Password</label> <input id="pass" name="pass" type="password" class="input" data-type="password" placeholder="Enter your password" > </div>
                            <div class="group"> <input id="check" type="checkbox" class="check" checked> <label for="check"><span class="icon"></span> Keep me Signed in</label> </div>
                            <div class="group"> <input type="submit" class="button" value="Sign in"> </div>
                            <div class="hr"></div>
                            <div class="foot"> <a href="#">Forgot Password?</a> </div>
                        </form>
                        <form class="sign-up-form" name="signupForm">
                            <div class="group"> <label for="username" class="label">Username</label> <input id="username" name="username" type="text" class="input" placeholder="Create your Username" required> </div>
                            <div class="group"> <label for="password" class="label">Password</label> <input id="password" name="password" type="password" class="input" data-type="password" placeholder="Create your password" > </div>
                            <div class="group"> <label for="repassword" class="label">Repeat Password</label> <input id="repassword" name="repassword" type="password" class="input" data-type="password" placeholder="Repeat your password" > </div>
                            <div class="group"> <label for="email" class="label">Email Address</label> <input id="email" name="email" type="text" class="input" placeholder="Enter your email address"> </div>
                            <div class="group"> <input type="submit" class="button" value="Sign Up"> </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>