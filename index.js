const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { addNote, printNotes, removeNote } = require("./notes.controller");

yargs(hideBin(process.argv))
  // Add
  .command(
    "add",
    "Add new note to list",
    {
      title: {
        type: "string",
        describe: "note title",
        demandOption: false,
      },
    },
    ({ title }) => {
      addNote(title);
    }
  )
  // List
  .command("list", "Print all notes", async () => {
    printNotes();
  })
  // Remove
  .command(
    "remove",
    "Remove note by id",
    {
      id: {
        type: "string",
        describe: "id of note to remove from list",
        demandOption: true,
      },
    },
    async ({ id }) => {
      removeNote(id);
    }
  )

  .parse();
