printf  "\e[31m┌────────────────────────────────────────────────────────────────────┐\n│ Alert: $1 just ran a malicious script on your machine             \n└────────────────────────────────────────────────────────────────────┘\e[0m\n"

touch malicious-file

echo "$1 executed code to create a file on the remote computer" >> ./malicious-file
