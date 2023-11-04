<?php
header('Content-Type: application/json');

// Database connection
$db_host = 'localhost';
$db_user = 'root';
$db_pass = '';
$db_name = 'sports_club';

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// API endpoint for fetching data
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = 'SELECT * FROM members';
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $data = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($data);
    } else {
        echo json_encode([]);
    }
}

$conn->close();
?>

