# Friend-Finder

This application takes results from users' surveys to then display the name and picture of the user with the best match.

The survey has 10 questions, answers to the survey questions are on a scale of 1-5 based on how much the user agrees or disagrees.

Technology

Npm packages: express, body-parser, path.

The html-routes.js 

Compatibility will be determined based on the following.

Each user's results is converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).

Then will compare the difference between the user's scores against other users' scores, question by question. Then will add up the differences to calculate the totalDifference.

The person with the closest match will be the one with the "least" amount of difference.

Once the closest match has been determined, it will display the result back to the user in the form of a modal pop-up.

The result will display both the name and picture of the closest match.

Questions/Comments Can be directed to dayansfo@yahoo.com.

Thank you for checking out Friend Finder-