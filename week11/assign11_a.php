<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" type="text/css" href="css.css">
        
        <title>Confirmation page</title>
    </head>
    <body>
        <header>
            <div id="content">
                <center>
                    <?php
                    if ($_POST["hideInput"] == "cancel")
                        echo "<h1 style='color: red;'>Purchase canceled</h1>";
                    else
                        echo "<h1 style='color: green;'>Purchase confirmed</h1>";
                    ?>
                </center>
            </div>
                
        </header>
        <footer>
            
            <div class="footerLink">
                <a href="../index.html">CS 213 Assignments</a>
            </div>
        </footer>
    </body>
</html>