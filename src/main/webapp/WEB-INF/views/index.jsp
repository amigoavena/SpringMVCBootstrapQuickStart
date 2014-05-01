<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<!-- Bootstrap core CSS -->
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/bootstrap.css" rel="stylesheet">
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
			<div class="container-fluid">
				<div class="navbar-header">
					<a href="#" class="navbar-brand">Project name</a>
					<button type="button" class="navbar-toggle" data-toggle="collapse"
						data-target="#menu">
						<span class="sr-only">Toggle navigation</span> <span
							class="icon-bar"></span> <span class="icon-bar"></span> <span
							class="icon-bar"></span>
					</button>
				</div>
				<div id="menu" class="collapse navbar-collapse ">
					<ul class="nav nav-pills navbar-right">
						<!-- <li class="active"><a href="#">Home</a></li> -->
						<li><a href="#">About</a></li>
						<li><a id="tomala" href="#match/id=1">Contact</a></li>
						<li><a id="adminMenu" href="#admin">Admin</a></li>
					</ul>
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