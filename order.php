<?php

// Read POST data
$movie_id = $_POST["movie_ID"];
$movie_date = $_POST["movie_date"];
$movie_time = $_POST["movie_time"];
$account = $_POST["account"];

echo "movie_ID = " . $movie_id . "<br>";
echo "movie_date = " . $movie_date . "<br>";
echo "movie_time = " . $movie_time . "<br>";
echo "account = " . $account . "<br>";

// Open the SQLite database
$db = new SQLite3("movie.sqlite");

// Prepare the SQL statement
$stmt = $db->prepare("INSERT INTO Orders(movie_ID, movie_date, movie_time, username) VALUES (:movie_id, :movie_date, :movie_time, :account)");
$stmt->bindValue(":movie_id", $movie_id, SQLITE3_INTEGER);
$stmt->bindValue(":movie_date", $movie_date, SQLITE3_TEXT);
$stmt->bindValue(":movie_time", $movie_time, SQLITE3_TEXT);
$stmt->bindValue(":account", $account, SQLITE3_TEXT);

// Execute the SQL statement
$result = $stmt->execute();

if (!$result) {
    // Output any errors
    echo $db->lastErrorMsg();
} else {
    // Close the database connection
    $db->close();
    
    // Send response back to client
    echo "Movie ticket inserted successfully.";
}



// // Read POST data
// $movie_id = $_POST["movie_ID"];
// $movie_date = $_POST["movie_date"];
// $movie_time = $_POST["movie_time"];
// $account = $_POST["account"];

// // Open the SQLite database
// $db = new SQLite3("movie.sqlite");

// // Prepare the SQL statement
// $stmt = $db->prepare("INSERT INTO Orders(movie_ID, movie_date, movie_time, username) VALUES (:movie_id, :movie_date, :movie_time, :account)");
// $stmt->bindValue(":movie_id", $movie_id, SQLITE3_INTEGER);
// $stmt->bindValue(":movie_date", $movie_date, SQLITE3_TEXT);
// $stmt->bindValue(":movie_time", $movie_time, SQLITE3_TEXT);
// $stmt->bindValue(":account", $account, SQLITE3_TEXT);

// // Execute the SQL statement
// $result = $stmt->execute();

// // Close the database connection
// $db->close();

// // Send response back to client
// echo "Movie ticket inserted successfully.";

?>
