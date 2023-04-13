<?php
// echo 'jo';

// if(isset($_POST['selectedMovies'])){
//     echo $_POST['selectedMovies'];
// }
// 
session_start();

if (!empty($_POST['movie_ID']) && !empty($_POST['date']) && !empty($_POST['time'])) {
    $username = "bangtan#2";
    $movie_ID = $_POST['movie_ID'];
    $date = $_POST['date'];
    $time = $_POST['time'];

    // Store the form data in the database
    $db = new SQLite3('movie.sqlite');
    if (!$db) {
        echo 'Failed to open database';
    } else {
        $stmt = $db->prepare('INSERT INTO Orders (username, movie_ID, datum, timeslot) VALUES (:username, :movie_ID, :date, :time)');
        $stmt->bindValue(':username', $username, SQLITE3_TEXT);
        $stmt->bindValue(':movie_ID', $movie_ID, SQLITE3_TEXT);
        $stmt->bindValue(':date', $date, SQLITE3_TEXT);
        $stmt->bindValue(':time', $time, SQLITE3_TEXT);
        $result = $stmt->execute();
        if ($result) {
            echo 'Order placed successfully';
        } else {
            echo 'Failed to place order';
        }
        $stmt->close();
        $db->close();
    }
} else {
    echo 'Please fill all required fields';
}
?>


