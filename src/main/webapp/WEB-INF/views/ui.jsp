<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="author" content="www.frebsite.nl" />
<meta content="width=600px user-scalable=yes" name="viewport" />
<meta name="robots" content="noindex, nofollow" />

<script src="js/lib/jquery-1.11.0.min.js" type="text/javascript"></script>
<script src="js/lib/jquery.mmenu.min.js" type="text/javascript"></script>
<link href="css/jquery.mmenu.css" type="text/css" rel="stylesheet" />
<title>jQuery.mmenu, app look-alike menus with sliding submenus.</title>

<link type="text/css" rel="stylesheet"
	href="http://fonts.googleapis.com/css?family=Pacifico" />
</head>
<script type="text/javascript">
	$(function() {
		console.log("uh?!");
		$('nav#menu').mmenu();
	});
</script>
<body>
	<div id="page">
		<div class="header">
			<a href="#menu">test</a> Demo
		</div>
		<div class="content">
			<p>
				<strong>This is a demo.</strong><br /> Click the menu icon to open
				the menu.
			</p>
			<p>
				For more demos, a tutorial, documentation and support, please visit
				<a href="http://mmenu.frebsite.nl" target="_blank">mmenu.frebsite.nl</a>
			</p>
		</div>
		<nav id="menu">
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#about">About us</a>
					<ul>
						<li><a href="#about/history">History</a></li>
						<li><a href="#about/team">The team</a>
							<ul>
								<li><a href="#about/team/management">Management</a></li>
								<li><a href="#about/team/sales">Sales</a></li>
								<li><a href="#about/team/development">Development</a></li>
							</ul></li>
						<li><a href="#about/address">Our address</a></li>
					</ul></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	</div>
</body>
</html>