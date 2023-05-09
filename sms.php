<?php
  require __DIR__ . "/vendor/autoload.php";
  use telesign\sdk\messaging\MessagingClient;
  $customer_id = "4DD4AEB0-39D1-40A4-8D83-297231474A6B";
  $api_key = "*********************************";
  $phone_number = "573107576990";
  $message = "You're scheduled for a dentist appointment at 2:30PM.";
  $message_type = "ARN";
  $messaging = new MessagingClient($customer_id, $api_key);
  $response = $messaging->message($phone_number, $message, $message_type);
  ?>