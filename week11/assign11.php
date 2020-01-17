<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="application/javascript">
            function submitForm(value)
            {
                document.getElementById('hideInput').value = value;
                document.forms["confirmation"].submit();

            }
        </script>
        <link rel="stylesheet" type="text/css" href="css.css">
        
        <title>Form Validation</title>
    </head>
    <body>
        <header>
            <div id="content">
                <h1>Pay confirmation</h1>
                <strong>Name: </strong>
                <?php
                    echo $_POST["first_name"] . " " . $_POST["last_name"];
                ?> <br> <br>
                <strong>Address: </strong>
                <?php
                    echo $_POST["address"];
                ?> <br> <br>
                <strong>Phone: </strong>
                <?php
                    echo $_POST["phone"];
                ?> <br> <br>
                <strong>Items selected: </strong> <br>
                <table>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                    </tr>

                    <?php
                        $total = 0;
                        if ($_POST["item_0"] == "on") {
                            echo "<tr>";
                            echo "<td>Soap</td>" . "<td>2</td>";
                            echo "</tr>";
                            $total += 2;
                        }

                        if ($_POST["item_1"] == "on") {
                            echo "<tr>";
                            echo "<td>Toothpaste</td>" . "<td>2</td>";
                            echo "</tr>";
                            $total += 2;
                        }

                        if ($_POST["item_2"] == "on") {
                            echo "<tr>";
                            echo "<td>Shampoo</td>" . "<td>8</td>";
                            echo "</tr>";
                            $total += 8;
                        }

                        if ($_POST["item_3"] == "on") {
                            echo "<tr>";
                            echo "<td>Mouthwash</td>" . "<td>5</td>";
                            echo "</tr>";
                            $total += 5;
                        }
                    ?>
                    <tr>
                        <th>Total</th>
                        <th><?php echo $total?></th>
                    </tr>

                </table>
                <hr>
                <br>
                <strong>Card Type: </strong>
                <?php
                    echo $_POST["card_type"];
                ?> <br>
                <strong>Expiration date: </strong>
                <?php
                    echo $_POST["exp_date"];
                ?>
                <form name="confirmation" action="assign11_a.php" method="post">
                    <input type="button" value="Cancel" name="Cancel" onclick="submitForm('cancel')">
                    <input type="button" value="Confirm" name="Confirm" onclick="submitForm('confirm')">
                    <input type="hidden" name="hideInput" id="hideInput">
                </form>
                
            </div>
                
            
        </header>
        <footer>
            
            <div class="footerLink">
                <a href="../index.html">CS 213 Assignments</a>
            </div>
        </footer>
    </body>
</html>