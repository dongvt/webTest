<?php
$books = array("Matthew", "Mark", "Luke", "John");
while ($book = next($books))
   print "<b>$book</b>";
?>