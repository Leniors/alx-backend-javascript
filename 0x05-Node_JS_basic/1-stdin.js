// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set up an event listener to read input from the standard input
process.stdin.on('data', (data) => {
  // Trim the input data to remove any extra whitespace
  const name = data.toString().trim();
  
  // Display the user's name
  console.log(`Your name is: ${name}`);
  
  // Display the closing message
  console.log('This important software is now closing');
  
  // Exit the process
  process.exit();
});
