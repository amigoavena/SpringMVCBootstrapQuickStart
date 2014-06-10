<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<!-- Bootstrap core CSS -->
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/bootstrapValidator.min.css" rel="stylesheet">
<link href="css/font/css/font-awesome.min.css" rel="stylesheet">
<link href="css/bootstrap-social.css" rel="stylesheet">
<link href='http://fonts.googleapis.com/css?family=Raleway'
	rel='stylesheet' type='text/css'>
<link href="css/main.css" rel="stylesheet">
<script type="text/javascript" src="js/lib/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="js/lib/underscore-min.js"></script>
<script type="text/javascript" src="js/lib/backbone-min.js"></script>
<script type="text/javascript" src="js/lib/amplify.min.js"></script>
<title>My Sample Project</title>
<script data-main="js/main" src="js/lib/require.js"></script>
</head>
<body>
	<div class="container">
		<div class="header">
			<div class="row">
				<div id="menu" class="collapse navbar-collapse pull-right">
					<p>
					<ul class="nav nav-pills">
						<li class="user-info"></li>
						<li><a href="#"><i class="fa fa-home fa-fw"></i>Home</a></li>
						<li><a href="#"><i class="fa fa-users fa-fw"></i>About</a></li>
						<li><a id="tomala" href="#match/id=1"><i
								class="fa fa-envelope-o fa-fw"></i>Contact</a></li>
						<li><a id="adminMenu" href="#admin"><i
								class="fa fa-cogs fa-fw"></i>Admin</a></li>
						<li class="user-login"><a href="#" data-toggle="modal"
							data-target="#socialLoginModal"><i class="fa fa-user fa-fw"></i>Login</a></li>
					</ul>
					</p>
				</div>
				<div class="row">
					<div class="col-xs-4">
						<p>
							<img src="http://placehold.it/120x60">
						</p>
					</div>
					<div class="col-xs-5 pull-right">
						<button type="button" class="navbar-toggle" data-toggle="collapse"
							data-target="#menu">
							<span class="sr-only">Toggle navigation</span> <span
								class="icon-bar"></span> <span class="icon-bar"></span> <span
								class="icon-bar"></span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div id="content"></div>

		<div class="footer">
			<p>&copy; Company 2014</p>
		</div>

		<!-- Modal -->
		<div class="modal fade" id="socialLoginModal" tabindex="-1"
			role="dialog" aria-labelledby="socialLoginModal" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-hidden="true">&times;</button>
						<h4 class="modal-title" id="myModalLabel">Join Gue.mx today!</h4>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-md-12 text-center">
								<p>Connect with a social Network.</p>
							</div>
						</div>
						<div class="row text-center">
							<div class="col-md-4 text-center">
								<!-- 	<a class="btn btn-block btn-social btn-twitter"> <i
									class="fa fa-twitter"></i>Twitter
								</a>-->
							</div>
							<div class="col-md-4">
								<a href="#" id="facebook-btn"
									class="btn btn-block btn-social btn-facebook"> <i
									class="fa fa-facebook"></i>Facebook
								</a>
							</div>
							<div class="col-md-4 text-center">
								<!-- <a class="btn btn-block btn-social btn-google-plus"> <i
									class="fa fa-google-plus"></i>Google
								</a>-->
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

	</div>
	<!-- /container -->
</body>
</html>