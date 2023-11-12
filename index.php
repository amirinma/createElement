
<?php 

//from geekforgeeks - https://www.geeksforgeeks.org/get-the-full-url-in-php/
// Program to display URL of current page. 

//if(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') 
//	$link = "https"; 
//else
//	$link = "http"; 

// Here append the common URL characters. 
//$link .= "://"; 

// Append the host(domain name, ip) to the URL. 
$link = $_SERVER['HTTP_HOST']; 

// Append the requested resource location to the URL 
//$link .= $_SERVER['REQUEST_URI']; 
	
$student_name = "Mohammad";
$message = '';
$message .= ' Hola '.$student_name. "! <br />";
$message .= 'Welcome to ITP140 - Client-Side Scripting';
$message .= ' <br /> and HERE is your space on the web  ';
$message .= $link .' !<br />';
//$message .= 'Check back later in the year when we have something fantastic here for you to see! '; 


define('BROWSER_TAB', $link); 
define('UNDER_CONSTRUCTION_MSG', $message);

?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Jekyll v3.8.6">
    <title><?php echo BROWSER_TAB ?></title>



    <!-- Bootstrap core CSS -->
<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="styles/app.css" rel="stylesheet">



    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>
  
  </head>
  <body class="text-center">

  <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="masthead mb-auto col-12">
    <nav class="nav nav-masthead ">
    <a class="nav-link navFont active" href="#">Home</a>
    <a class="nav-link navFont" href="asg0cernwebsite/">Asg0: Website Refactor</a>
    <a class=" nav-link navFont" href="module01/index.html">Module 01: Project 01</a>
    <a class="nav-link navFont" href="module02/index.html">Module 02: Project 01</a>
    <a class="nav-link navFont" href="module03exc1/index.html">Module 03: Ext Credit 01</a>
    <a class="nav-link navFont" href="https://medium.com/@zia.ro/application-security-issues-and-vulnerabilities-90cfc0cea3e6">Module 03: Blog</a>
    <a class="nav-link navFont" href="finalProjPlanning/index.html">Project Wireframe</a>
    <a class="nav-link navFont" href="amusement_park/index.html">Module 04</a>
    <a class="nav-link navFont" href="module05/index.html">Module 05</a>
    </nav>

    <?php
    echo '<span id="echoTab"> ';
    echo BROWSER_TAB;
    echo '</span>'; ?>
  </header>

  <main role="main" class="inner cover">
  <h1 class="cover-heading">   <?php 
    echo $message;
    ?></h1>
  </main>

  <footer class="mastfoot mt-auto">
    <div class="inner">  </div>
  </footer>
</div>
<script src="js/jquery-3.7.0.min.js"></script>
<script src="bootstrap/js/bootstrap.bundle.min.js"></script>


</body>
</html>
