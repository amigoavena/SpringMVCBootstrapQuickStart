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
						<li><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a id="tomala" href="#match/id=1">Contact</a></li>
						<li><a id="adminMenu" href="#admin">Admin</a></li>
					</ul>
					</p>
				</div>
				<div class="row">
					<div class="col-xs-5">
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

	</div>
	<!-- /container -->
</body>
</html>