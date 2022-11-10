"use strict";

const examplePrompt = {
  question: "What is your favorite programming language?",
  options: ["1. JavaScript", "2. PHP", "3. Java", "4. Assembly"],
};

const coursePrompt = {
  question: "Ce challenge est-il difficile?",
  options: ["Oui", "Non"],
};

const createPoll = (prompt) => {
  const { question, options } = prompt;

  //Assign note 0 to every option
  const notes = options.map(() => 0);

  //function increment note for an option
  const incrementNote = (option) => {
    //check if option is valid and not a float
    if (option > 0 && option <= options.length && Number.isInteger(option)) {
      notes[option - 1]++;
    } else {
      console.error("Option invalide");
    }
  };

  //function to display the poll
  const displayPoll = () => {
    console.log(question);
    for (let i = 0; i < options.length; i++) {
      console.log(`${options[i]} with a note of ${notes[i]}`);
    }
  };

  //function to display the winner
  const displayWinner = () => {
    let winner = 0;
    for (let i = 0; i < notes.length; i++) {
      if (notes[i] > notes[winner]) {
        winner = i;
      }
    }
    console.log(`The winner is ${options[winner]}`);
  };

  //return the functions
  return {
    incrementNote,
    displayPoll,
    displayWinner,
  };
};

const poll = createPoll(examplePrompt);
poll.incrementNote(1);
poll.incrementNote(1);
poll.incrementNote(2);
poll.incrementNote(3);
poll.incrementNote(3);
poll.incrementNote(3);
poll.incrementNote(4);
poll.incrementNote(4);
poll.incrementNote(4);
poll.incrementNote(4);
poll.displayPoll();
poll.displayWinner();

const poll2 = createPoll(coursePrompt);
poll2.incrementNote(1);
poll2.incrementNote(1);
poll2.incrementNote(2);
poll2.incrementNote(2);
poll2.incrementNote(2);
poll2.incrementNote(2);
poll2.incrementNote(2);
poll2.incrementNote(2);
poll2.incrementNote(2);
poll2.incrementNote(2.5);
poll2.displayPoll();
poll2.displayWinner();
