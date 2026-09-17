printf  "\e[31m┌────────────────────────────────────────────────────┐\n│ Alert: I just ran malicious script on your machine │\n└────────────────────────────────────────────────────┘\e[0m\n"

touch malicious-file

echo "I executed code to create a file on the remote computer" >> ./malicious-file
