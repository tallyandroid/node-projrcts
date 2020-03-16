const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title:{
      describe:'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  builder: {
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler:function (argv) {
    console.log('Title: ' + argv.title)
    console.log('Body:' + argv.body)
  }
})

//Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note')
  }
})

//Create list command
yargs.command ({
  command: 'list',
  describe: 'list your notes',
  handler: function () {
    console.log("Adding the list item")
  }
})

//Create read command
yargs.command ({
  command: 'read',
  describe: 'Reading from the list',
  handler: function () {
    console.log("Reading a note")
  }
})

// add, remove, read, list
yargs.parse()


