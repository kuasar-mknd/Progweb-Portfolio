/*
1. Le système doit pouvoir créer des sondages à partir d’objets prenant la forme ci-dessous, c’est à dire un objet avec une propriété `question` et une propriété `options` contenant un tableau avec les différentes réponses possibles. 

    const examplePrompt = {
        question: "What is your favorite programming language?",
        options: ["1. JavaScript", "2. PHP", "3. Java", "4. Assembly"]
    };

2. On doit pouvoir répondre au sondage via un appel de fonction prenant un comme paramètre le numéro de réponse. Par exemple: 
    exampleAnswer(1) // Ajoute un vote à l'option 1 (JavaScript)

3. On doit pouvoir créer un nombre arbitraire de sondages, tous indépendants les uns des autres, et ce au sein du même programme. La création de sondage doit pouvoir se faire très simplement. 
4. À chaque vote, on reçoit dans la console les informations ci-dessous. La façon dont sont organisées ces informations est libre, mais je souhaiterais que ce soit facilement compréhensible. 
    Question
    Option 1: votes
    Option 2: votes
    ...
    Option n: votes

5. Les variable propres à un sondage doivent être privées. 
6. Si le paramètre de la réponse ne correspond pas à une des options du sondage, il faut l’indiquer dans la console en faisant péter une erreur avec `console.error(message)`
*/

"use strict";

const languagePrompt = {
  question: "What is your favorite programming language",
  options: ["1. JavaScript", "2. PHP", "3. Java", "4. Assembly", "5. Rust", "6. TypeScript"]
};

const coursePrompt = {
  question: "Ce challenge est-il difficile?",
  options: ["Oui", "Non"]
}


const createPoll = (poll) => {
  const { question, options } = poll;
  const scores = new Array(options.length).fill(0);
  const displayScores = new Map();
  options.forEach((option) => {
    displayScores.set(option, 0);
  });
  const answer = (number) => {
    if (Number.isInteger(number) && number <= options.length && number > 0) {
      scores[number - 1]++;
      displayScores.set(options[number - 1], scores[number - 1]);
    } else {
      console.error("Enter a valid option");
    }
    return {
        question,
        displayScores
    }
  };
  return answer;
};

const languagePoll = createPoll(languagePrompt);
const coursePoll = createPoll(coursePrompt);

