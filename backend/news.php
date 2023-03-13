<?php
include('connection.php');
$query = $mysqli->prepare("SELECT * FROM articles");
$query->execute();
$result = $query->get_result();
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}
echo json_encode($data);
