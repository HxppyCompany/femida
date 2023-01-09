<?php
$input = fgets(STDIN);
$args = explode(' ',$input);

$result = $args[0] * $args[1];
$result2 = 2 * ($args[0] + $args[1]);

fputs(STDOUT, $result . ' ' . $result2);
