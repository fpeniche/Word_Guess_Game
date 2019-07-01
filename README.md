# Word_Guess_Game

script steps

1. select the words you want to work with,
2. make an inventory of all variables:
    a. key to get started, var: startOver
    b. wins,
    c. current word, var: [words]
    d. number of guesses remaining, var: tries
    e. letters already guessed, 
3. when press on a letter validate it vs. any letter from the word selected,
4. every time a letter is being guessed, reduce the number of guesses remaining by 1,
5. if a letter is guessed, meaning that letter exists in the selected word, 
    then show it in the current word bucket,(c)
    then do not allow it to be used again,
    if a letter exists more than once, include all occurrences of that letter in the current word bucket,
6. if that letter doesn't exist in the selected word,
    then show it in the section "letters already guessed", e.
7.  when a word has been guessed, then reset the parameters and start over,
    
