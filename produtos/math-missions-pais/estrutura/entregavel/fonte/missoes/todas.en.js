// Gerado por montar-missoes-en.js a partir de traducao/en-US/missoes-final.md. Não editar à mão.
// As contas foram conferidas em PT; em inglês só muda a escrita (ponto decimal, vírgula no milhar, p.m.).
const m = [
 {
  "id": "n1-01-lancheira",
  "nivel": "Level 1 · Mission 1-01",
  "titulo": "The Mystery of the Swapped Lunchbox",
  "icone": "lancheira",
  "tempo": "20 to 25 minutes",
  "praticas": "addition: putting together (up to 100)",
  "abertura": "At the picnic in the park, Lia's and Theo's identical blue lunchboxes got swapped. Lia left a note on the picnic blanket: “mine is the one with more grapes.” Count carefully and find out which lunchbox belongs to whom.",
  "palavra": "MORE",
  "concreto": "Set aside dried beans or bottle caps to be the grapes. In stage 2, your child makes one little pile of 24 and another of 15, puts the two together, and counts before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“this part is…, this other part is…, and the total goes on top”). If not yet, redo just that stage another day with different numbers (e.g., 32 grapes on top and 16 on the bottom).",
  "solucao": "MORE grapes solved the case: lunchbox B, with 39 grapes, is Lia's. Lunchbox A, with 11, is Theo's. Each of them had lunch with their own!",
  "etapas": [
   {
    "titulo": "Lunchbox A",
    "curta": true,
    "enunciado": "Lunchbox A has 6 green grapes and 5 purple grapes. How many grapes are in lunchbox A?",
    "r": "11",
    "conta": "6 + 5 = 11",
    "ev": "1",
    "erro": "took away instead of putting together.",
    "pensar": "The green grapes and the purple grapes are together in the same lunchbox: 6 + 5.",
    "apoio": "“If you put the green grapes and the purple grapes on one plate, how many are there?”"
   },
   {
    "titulo": "Lunchbox B",
    "enunciado": "Lunchbox B has 24 grapes in the top container and 15 grapes in the bottom container. How many grapes are in lunchbox B?",
    "r": "39",
    "conta": "24 + 15 = 39",
    "ev": "9",
    "erro": "subtracted, without seeing that the two containers go together.",
    "pensar": "The two containers are parts of the same lunchbox. The total is the sum of the parts: 24 + 15.",
    "apoio": "“What does the question want to know: the grapes in one container or in the whole lunchbox?”",
    "desenho": {
     "nivel": "guiado",
     "instrucao": "Before doing the math, complete the drawing. In each part, write how many grapes are in each container, and put a <b>?</b> on top, on the total.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 24,
         "t": ""
        },
        {
         "u": 15,
         "t": ""
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "?",
       "partes": [
        {
         "u": 24,
         "t": "24 on top"
        },
        {
         "u": 15,
         "t": "15 on the bottom"
        }
       ]
      }
     ],
     "explica": "The drawing shows 2 parts and the unknown total on top. When the ? is on the whole, it's addition: 24 + 15."
    }
   },
   {
    "titulo": "The napkins",
    "enunciado": "On the picnic blanket there are 10 napkins next to lunchbox A, 10 next to lunchbox B, and 7 more loose ones. How many napkins are there in all?",
    "r": "27",
    "conta": "10 + 10 + 7 = 27",
    "ev": "20",
    "erro": "forgot the loose napkins.",
    "pensar": "There are 3 groups: 10, 10, and 7. Put it all together: 10 + 10 = 20, plus 7.",
    "apoio": "“How many groups of napkins are there? Did you count all of them?”"
   },
   {
    "titulo": "All the grapes",
    "enunciado": "Putting together the grapes from the two lunchboxes (11 and 39), how many grapes are at the picnic?",
    "r": "50",
    "conta": "11 + 39 = 50 (1 + 9 = 10; 10 + 30 + 10 = 50)",
    "ev": "40",
    "erro": "added only the tens and forgot that 1 + 9 makes one more ten.",
    "pensar": "Add the tens (10 + 30 = 40) and the ones (1 + 9 = 10). Then put them together: 40 + 10.",
    "apoio": "“What is 1 + 9? Does that make one more ten?”"
   }
  ]
 },
 {
  "id": "n1-02-figurinhas",
  "nivel": "Level 1 · Mission 1-02",
  "titulo": "The Case of the Missing Stickers",
  "icone": "album",
  "tempo": "20 to 25 minutes",
  "praticas": "subtraction: taking away and “how many are missing”",
  "abertura": "The family's sticker album woke up with empty pages, and there were stickers scattered across the living room floor. Someone messed with the album during the night. Who was it?",
  "palavra": "PAWS",
  "concreto": "Use 48 little pieces of paper as stickers. In stage 2, your child sets aside 31 (the ones still stuck in) and sees how many are left before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words. If not yet, redo just that stage another day with different numbers (e.g., 45 before, 28 today).",
  "solucao": "It was the cat, PAWS and all! The 5 missing stickers were under the cushion where it sleeps, along with the little paw prints.",
  "etapas": [
   {
    "titulo": "Page 1",
    "curta": true,
    "enunciado": "Page 1 holds 10 stickers, and only 3 are stuck in. How many are missing on page 1?",
    "r": "7",
    "conta": "10 − 3 = 7",
    "ev": "13",
    "erro": "added instead of seeing how many are missing.",
    "pensar": "The whole page has 10 spots. 3 are taken. What's missing is 10 − 3.",
    "apoio": "“If 3 spots are filled, how many are empty?” Counting on your fingers from 3 to 10 also works."
   },
   {
    "titulo": "The stickers that came out",
    "enunciado": "Before, 48 stickers were stuck in the album. Today there are only 31. How many stickers came out of the album?",
    "r": "17",
    "conta": "48 − 31 = 17",
    "ev": "79",
    "erro": "added instead of subtracting.",
    "pensar": "The 48 from before are the whole. The 31 that stayed are one part. The other part is what came out: 48 − 31.",
    "apoio": "“There were 48 and now there are 31. Did more or fewer than 20 come out?”",
    "desenho": {
     "nivel": "guiado",
     "instrucao": "Before doing the math, complete the drawing. The whole bar is the stickers from before. Write that number on top, write the ones still stuck in in the big part, and put a <b>?</b> on the part that came out.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 31,
         "t": ""
        },
        {
         "u": 17,
         "t": ""
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "48",
       "partes": [
        {
         "u": 31,
         "t": "31 stuck in"
        },
        {
         "u": 17,
         "t": "? came out"
        }
       ]
      }
     ],
     "explica": "Knowing the whole (48) and one part (31), the other part is what's missing: 48 − 31."
    }
   },
   {
    "titulo": "The stickers that were found",
    "enunciado": "On the living room floor, the family found 12 of the 17 stickers that came out. How many are still missing?",
    "r": "5",
    "conta": "17 − 12 = 5",
    "ev": "29",
    "erro": "put the found ones together with the ones that came out.",
    "pensar": "Of the 17 that came out, 12 have already turned up. The missing ones are what's left: 17 − 12.",
    "apoio": "“If 12 have already come back, how many of the 17 are still missing?”"
   },
   {
    "titulo": "The marks on the couch",
    "enunciado": "On the couch there were 3 paw prints, each with 4 little toes. How many little toes are there in all in the prints?",
    "r": "12",
    "conta": "4 + 4 + 4 = 12",
    "ev": "3",
    "erro": "counted the prints, not the toes.",
    "pensar": "Each print has 4 little toes. There are 3 prints: 4 + 4 + 4.",
    "apoio": "“Draw the 3 paws with 4 little toes each. How many little toes did you draw?”"
   }
  ]
 },
 {
  "id": "n1-03-placar",
  "nivel": "Level 1 · Mission 1-03",
  "titulo": "The Mystery of the Backyard Scoreboard",
  "icone": "bola",
  "tempo": "20 to 25 minutes",
  "praticas": "comparison: how many more, how many fewer",
  "abertura": "On Sunday, the cousins played soccer in the backyard in two teams, Blue and Green. That night it rained and washed away the chalk scoreboard on the wall. Who won the tournament?",
  "palavra": "BLUE",
  "concreto": "Make two rows of bottle caps, one under the other: 23 for Blue and 15 for Green. In stage 3, your child sees how many of Blue's bottle caps are left without a pair before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 3 in their own words (“this bar is Blue's, this one is Green's, and the dashed piece is the difference”). If not yet, redo just that stage another day with different numbers (e.g., 27 and 18).",
  "solucao": "Team BLUE won the tournament: they scored more goals and made more shots on target. The chalk scoreboard was redone on the wall, now with tape over it!",
  "etapas": [
   {
    "titulo": "Blue's goals",
    "curta": true,
    "enunciado": "Team Blue scored 3 goals in the first half and 4 in the second. How many goals did Blue score?",
    "r": "7",
    "conta": "3 + 4 = 7",
    "ev": "1",
    "erro": "took away instead of putting together.",
    "pensar": "The goals from the two halves go together: 3 + 4.",
    "apoio": "“The game has two halves. Do the goals from both count?”"
   },
   {
    "titulo": "Green's goals",
    "enunciado": "Team Green scored 2 fewer goals than Blue. How many goals did Green score?",
    "r": "5",
    "conta": "7 − 2 = 5",
    "ev": "9",
    "erro": "read “fewer” and added.",
    "pensar": "“Fewer” means Green scored less than Blue's 7: 7 − 2.",
    "apoio": "“Did Green score more or fewer goals than Blue?”"
   },
   {
    "titulo": "The shots on target",
    "enunciado": "After the game, the teams did a shots-on-target challenge: Blue made 23 and Green made 15. How many more shots did Blue make?",
    "r": "8",
    "conta": "23 − 15 = 8",
    "ev": "38",
    "erro": "added the two teams instead of comparing.",
    "pensar": "Comparing is seeing what the bigger bar has that the smaller one doesn't: 23 − 15.",
    "apoio": "“If Green made a few more shots, it would be even with Blue. How many?”",
    "desenho": {
     "nivel": "guiado",
     "instrucao": "Before doing the math, complete the drawing. Write each team's number on its bar and put a <b>?</b> on the dashed piece: it's the difference.",
     "molde": [
      {
       "nome": "Blue",
       "partes": [
        {
         "u": 23,
         "t": ""
        }
       ]
      },
      {
       "nome": "Green",
       "partes": [
        {
         "u": 15,
         "t": ""
        },
        {
         "u": 8,
         "t": "",
         "tracejada": true
        }
       ]
      }
     ],
     "modelo": [
      {
       "nome": "Blue",
       "partes": [
        {
         "u": 23,
         "t": "23"
        }
       ]
      },
      {
       "nome": "Green",
       "partes": [
        {
         "u": 15,
         "t": "15"
        },
        {
         "u": 8,
         "t": "?",
         "tracejada": true
        }
       ]
      }
     ],
     "explica": "The two bars lined up show that the dashed piece is what Green needs to reach Blue. That's why the math is 23 − 15."
    }
   },
   {
    "titulo": "Blue's points",
    "enunciado": "The tournament adds up goals and shots on target. Blue scored 7 goals and made 23 shots on target. How many points did Blue get?",
    "r": "30",
    "conta": "7 + 23 = 30",
    "ev": "16",
    "erro": "took away instead of putting together.",
    "pensar": "The points are goals and shots on target together: 7 + 23.",
    "apoio": "“Tournament points = goals + shots on target. How much is that?”"
   }
  ]
 },
 {
  "id": "n1-04-pomar",
  "nivel": "Level 1 · Mission 1-04",
  "titulo": "The Riddle of the Neighbor's Orchard",
  "icone": "arvore",
  "tempo": "20 to 25 minutes",
  "praticas": "multiplication: equal groups (×2, ×5, ×10)",
  "abertura": "The neighbor picked fruit in her orchard and wrote in her notebook: “I picked 60 fruits.” But when she counted what was in the baskets, the numbers didn't add up. Help find out what happened.",
  "palavra": "PEAR",
  "concreto": "Use 6 small containers (or cups) as baskets and 5 dried beans in each one. In stage 2, your child counts the beans by 5s before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“each piece is a basket”). If not yet, redo just that stage another day with different numbers (e.g., 4 baskets with 10).",
  "solucao": "10 PEARS went missing: their basket fell behind the wall in the wind. They were there, all in one piece, and the neighbor's count worked out to 60.",
  "etapas": [
   {
    "titulo": "The oranges",
    "curta": true,
    "enunciado": "There are 2 baskets with 10 oranges in each one. How many oranges?",
    "r": "20",
    "conta": "2 × 10 = 20 (or 10 + 10)",
    "ev": "12",
    "erro": "added 2 + 10 instead of putting together 2 baskets of 10.",
    "pensar": "Each basket has 10. There are 2 baskets: 10 + 10.",
    "apoio": "“How many oranges are in one basket? What about in two?”"
   },
   {
    "titulo": "The apples",
    "enunciado": "There are 6 baskets of apples, with 5 apples in each one. How many apples?",
    "r": "30",
    "conta": "6 × 5 = 30 (5, 10, 15, 20, 25, 30)",
    "ev": "11",
    "erro": "added 6 + 5 instead of putting together 6 baskets of 5.",
    "pensar": "There are 6 equal groups of 5. Count by 5s six times.",
    "apoio": "“Count by 5s, once for each basket: 5, 10, 15…”",
    "desenho": {
     "nivel": "guiado",
     "instrucao": "Before doing the math, complete the drawing. Each piece of the bar is a basket. Write how many apples are in each basket and put a <b>?</b> on top, on the total.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "?",
       "partes": [
        {
         "u": 1,
         "t": "5"
        },
        {
         "u": 1,
         "t": "5"
        },
        {
         "u": 1,
         "t": "5"
        },
        {
         "u": 1,
         "t": "5"
        },
        {
         "u": 1,
         "t": "5"
        },
        {
         "u": 1,
         "t": "5"
        }
       ]
      }
     ],
     "explica": "Equal pieces with the ? on the total: it's multiplication (6 × 5), or adding 5 six times."
    }
   },
   {
    "titulo": "Everything in the baskets",
    "enunciado": "Putting together the oranges and the apples, how many fruits are in the baskets?",
    "r": "50",
    "conta": "20 + 30 = 50",
    "ev": "8",
    "erro": "counted the baskets, not the fruits.",
    "pensar": "The fruits are 20 oranges and 30 apples: 20 + 30.",
    "apoio": "“Is the question about baskets or about fruits?”"
   },
   {
    "titulo": "The missing fruits",
    "enunciado": "The neighbor wrote down 60 fruits, but there are 50 in the baskets. How many fruits went missing?",
    "r": "10",
    "conta": "60 − 50 = 10",
    "ev": "110",
    "erro": "added instead of seeing how many are missing.",
    "pensar": "The notebook says 60. The baskets have 50. What's missing is 60 − 50.",
    "apoio": "“From 50 to 60, how many are missing?”"
   }
  ]
 },
 {
  "id": "n1-05-relogio",
  "nivel": "Level 1 · Mission 1-05",
  "titulo": "The Mystery of the Library Clock",
  "icone": "relogio",
  "tempo": "20 to 25 minutes",
  "praticas": "time: duration in minutes, start and end",
  "abertura": "At the neighborhood library, the reading session ended, but nobody wrote down what time it started. The librarian needs to know for the report. The clues are in the clocks.",
  "palavra": "BELL",
  "concreto": "Use an analog clock (or draw one). In stage 2, your child turns the long hand 35 minutes and then 25 more, and sees how many times it went around before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words. If not yet, redo just that stage another day with different numbers (e.g., 40 minutes of story and 20 of drawing).",
  "solucao": "The session started at 3:00 p.m., and the library BELL confirmed it: it rang 3 times during the reading. The report is done!",
  "etapas": [
   {
    "titulo": "The wall clock",
    "curta": true,
    "enunciado": "The wall clock has the short hand on the 4 and the long hand on the 12. What time is it?",
    "r": "4:00",
    "conta": "short hand on the 4 = 4 hours; long hand on the 12 = o'clock: 4:00",
    "ev": "12:20",
    "erro": "mixed up the hands (read the long one as the hour and the short one as the minutes).",
    "pensar": "The short hand shows the hour. The long hand on the 12 means “o'clock.”",
    "apoio": "“Which hand shows the hour: the short one or the long one?”"
   },
   {
    "titulo": "The two parts of the session",
    "enunciado": "The session had 2 parts: 35 minutes of story and 25 minutes of drawing. How many minutes did the whole session last?",
    "r": "60 min",
    "conta": "35 + 25 = 60 minutes",
    "ev": "10 min",
    "erro": "took away instead of putting the two parts together.",
    "pensar": "The two parts, one after the other, make up the whole session: 35 + 25.",
    "apoio": "“The session is the story and the drawing together. How much time is that?”",
    "desenho": {
     "nivel": "guiado",
     "instrucao": "Before doing the math, complete the drawing. The bar is the session, like a timeline. Write the minutes of each part and put a <b>?</b> on top, on the total.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 35,
         "t": ""
        },
        {
         "u": 25,
         "t": ""
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "?",
       "partes": [
        {
         "u": 35,
         "t": "35 min story"
        },
        {
         "u": 25,
         "t": "25 min drawing"
        }
       ]
      }
     ],
     "explica": "The bar is a timeline: the two parts together make up the session. With the ? on the whole, the math is 35 + 25."
    }
   },
   {
    "titulo": "The start of the session",
    "enunciado": "60 minutes is 1 hour. The session ended at 4:00 p.m. What time did it start?",
    "r": "3:00",
    "conta": "4:00 minus 1 hour = 3:00",
    "ev": "5:00",
    "erro": "went forward 1 hour instead of going back.",
    "pensar": "If it ended at 4:00 and lasted 1 hour, it started 1 hour earlier.",
    "apoio": "“Did the session start before or after it ended?” Move the short hand back 1 number."
   },
   {
    "titulo": "The library bell",
    "enunciado": "The library bell rings every 30 minutes: at 3:00, at 3:30, at 4:00… How many times did it ring during the session, from 3:00 to 4:00, counting both ends?",
    "r": "3",
    "conta": "3:00, 3:30, and 4:00 = 3 times",
    "ev": "2",
    "erro": "forgot to count one of the ends (the 3:00 ring).",
    "pensar": "List the times: 3:00, 3:30, 4:00. Count the rings.",
    "apoio": "“Write down all the times the bell rings between 3:00 and 4:00. How many are there?”"
   }
  ]
 },
 {
  "id": "n1-06-cookies",
  "icone": "biscoito",
  "tempo": "20 to 25 minutes",
  "palavra": "NANA",
  "titulo": "The Vanishing Cookie Mystery",
  "nivel": "Level 1 · Mission 1-06",
  "praticas": "multiplication (equal rows), subtraction, and telling time",
  "abertura": "On Saturday afternoon, the family baked a batch of chocolate cookies and put them in the tin. While the second batch was baking, someone secretly opened the tin! Your mission: find out who it was — and only accuse someone once you have proof.",
  "concreto": "Set aside 20 dried beans, bottle caps, or paper balls: these are the cookies. In stage 3, your child puts 13 in the “tin” and sees what's left before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 3 in their own words (“this part is…”). If not yet, redo just that stage another day with different numbers (e.g., 25 baked, 16 in the tin).",
  "solucao": "The person in the kitchen at 3:10 p.m. was NANA. She took 7 cookies to taste and to bring to the neighbor. Mystery solved, and nobody's in trouble!",
  "etapas": [
   {
    "curta": true,
    "titulo": "The lock on the tin",
    "enunciado": "The tin has a number lock. The note stuck to it says: “The code is the number of paws on 2 cats.” What is the code?",
    "r": "8",
    "conta": "2 cats × 4 paws = 8 (or 4 + 4)",
    "ev": "2",
    "erro": "counted the cats, not the paws.",
    "pensar": "Each cat has 4 paws. There are 2 cats: 4 + 4.",
    "apoio": "“How many paws does one cat have? What if there are two cats?” If it helps, draw the cats together."
   },
   {
    "titulo": "The baking sheet",
    "enunciado": "The first batch was baked in 4 rows, with 5 cookies in each row. How many cookies were baked?",
    "r": "20",
    "conta": "4 rows × 5 = 20 (or 5 + 5 + 5 + 5)",
    "ev": "9",
    "erro": "added 4 + 5 instead of putting together 4 rows of 5.",
    "pensar": "There are 4 equal rows. Each row has 5: 5 + 5 + 5 + 5.",
    "apoio": "“Draw the baking sheet: 4 rows with 5 dots. How many dots did you draw?”"
   },
   {
    "titulo": "The lighter tin",
    "enunciado": "Now there are 13 cookies in the tin. How many cookies went missing?",
    "r": "7",
    "conta": "20 − 13 = 7",
    "ev": "33",
    "erro": "added instead of subtracting.",
    "pensar": "There were 20 and now there are 13. The difference is what went missing: 20 − 13.",
    "apoio": "“If there were 20 and now there are 13, did more or fewer than 10 go missing?” Counting from 13 to 20 on your fingers also works.",
    "desenho": {
     "nivel": "guiado",
     "instrucao": "Before doing the math, complete the drawing. The whole bar is the cookies from the first batch. Write how many there were on top, write how many are still in the tin in the big part, and put a <b>?</b> on the part that went missing.",
     "explica": "The drawing shows that the missing part is what it takes to get from 13 to 20. That's why it's subtraction (or a “how many more to get there”).",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 13,
         "t": ""
        },
        {
         "u": 7,
         "t": ""
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "20 cookies",
       "partes": [
        {
         "u": 13,
         "t": "13 in the tin"
        },
        {
         "u": 7,
         "t": "? missing"
        }
       ]
      }
     ]
    }
   },
   {
    "titulo": "When they went missing",
    "enunciado": "The second batch spent 25 minutes in the oven and came out at 3:35 p.m. The cookies disappeared from the tin right when that batch went into the oven. What time was that?<br><b>Who passed through the kitchen:</b> Dad at 2:50 · Nana at 3:10 · Uncle Beto at 3:45",
    "r": "3:10",
    "conta": "3:35 minus 25 minutes = 3:10",
    "ev": "4:00",
    "erro": "added the 25 minutes instead of going back in time.",
    "pensar": "The second batch came out at 3:35. To find out when it went into the oven, you have to go back 25 minutes.",
    "apoio": "“If the batch came out at 3:35, did it go into the oven before or after that?” Use an analog clock and go back 25 minutes."
   }
  ]
 },
 {
  "id": "n1-07-gizes",
  "nivel": "Level 1 · Mission 1-07",
  "titulo": "The Case of the Shared Chalk",
  "icone": "giz",
  "tempo": "20 to 25 minutes",
  "praticas": "division: sharing equally",
  "abertura": "At Nana's house, a box of chalk was shared among the 3 grandchildren so they could draw on the sidewalk. At the end, Bia complained: “I didn't get any pink chalk!” Was the sharing fair?",
  "palavra": "PINK",
  "concreto": "Use 12 pencils or sticks as chalk and 3 small plates, one for each grandchild. In stage 2, your child hands out one on each plate, one round at a time, before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“each piece is a grandchild”). If not yet, redo just that stage another day with different numbers (e.g., 15 pieces of chalk for 3 grandchildren).",
  "solucao": "Each grandchild got 4 pieces of chalk, but the 3 PINK pieces all ended up with Theo and Lia. Theo gave 1 to Bia, and the sharing became truly fair.",
  "etapas": [
   {
    "titulo": "The box of chalk",
    "curta": true,
    "enunciado": "The box had 2 rows with 6 pieces of chalk in each one. How many pieces of chalk were in the box?",
    "r": "12",
    "conta": "2 × 6 = 12 (or 6 + 6)",
    "ev": "8",
    "erro": "added 2 + 6 instead of putting together 2 rows of 6.",
    "pensar": "There are 2 equal rows of 6: 6 + 6.",
    "apoio": "“How many pieces of chalk are in one row? What about in two?”"
   },
   {
    "titulo": "The sharing",
    "enunciado": "The 12 pieces of chalk were shared equally among the 3 grandchildren. How many pieces of chalk did each grandchild get?",
    "r": "4",
    "conta": "12 ÷ 3 = 4",
    "ev": "9",
    "erro": "took away 3 instead of sharing into 3 equal parts.",
    "pensar": "Sharing equally is making 3 parts of the same size: 12 ÷ 3.",
    "apoio": "“If each grandchild gets 1 piece of chalk per round, how many rounds can you do with 12?”",
    "desenho": {
     "nivel": "guiado",
     "instrucao": "Before doing the math, complete the drawing. The whole bar is the 12 pieces of chalk, already divided into 3 equal pieces (one per grandchild). Write 12 on top and put a <b>?</b> on one piece.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "12",
       "partes": [
        {
         "u": 1,
         "t": "?"
        },
        {
         "u": 1,
         "t": " "
        },
        {
         "u": 1,
         "t": " "
        }
       ]
      }
     ],
     "explica": "The total is known and the ? is on a piece equal to the others: it's division, 12 ÷ 3."
    }
   },
   {
    "titulo": "The pink chalk",
    "enunciado": "There were 3 pieces of pink chalk in the box. Theo took 2 and Lia took 1. How many pieces of pink chalk were left for Bia?",
    "r": "0",
    "conta": "3 − 2 − 1 = 0",
    "ev": "6",
    "erro": "added all the numbers in the problem.",
    "pensar": "There were 3. Theo took away 2 and Lia took away 1. What was left is 3 − 2 − 1.",
    "apoio": "“Take 3 pencils: take away 2 for Theo and 1 for Lia. Is any left?”"
   },
   {
    "titulo": "The fair trade",
    "enunciado": "To be fair, each grandchild should have 1 piece of pink chalk. Theo has 2. How many pieces of pink chalk does he need to give to Bia?",
    "r": "1",
    "conta": "2 − 1 = 1",
    "ev": "2",
    "erro": "gave away all of Theo's pink chalk, and he was left with none.",
    "pensar": "Theo keeps 1 and gives away whatever is more than that: 2 − 1.",
    "apoio": "“If Theo gives away 2, how many does he have left? Is that fair?”"
   }
  ]
 },
 {
  "id": "n1-08-patinete",
  "nivel": "Level 1 · Mission 1-08",
  "titulo": "The Scooter Track in the Square",
  "icone": "patinete",
  "tempo": "20 to 25 minutes",
  "praticas": "measuring in meters: adding sections and how much is missing",
  "abertura": "The scooter track in the square has 3 sections, but the sign with the length of one of them has faded. Saturday's race goes from the start to the finish: how long is each part of the track?",
  "palavra": "LINE",
  "concreto": "Use a tape measure or steps: in the hallway, mark 2 meters on the floor with tape. In stage 3, your child sets aside 9 little piles of 10 dried beans (the 90 m track), takes away 6 piles and 3 more beans (the 63 m), and counts what's left before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 3 in their own words. If not yet, redo just that stage another day with different numbers (e.g., an 80 m track, two sections that add up to 52 m).",
  "solucao": "The section with the faded sign is 27 m long: it's the last one, the one that reaches the finish LINE. The new sign has already been painted with the right length.",
  "etapas": [
   {
    "titulo": "The pushes",
    "curta": true,
    "enunciado": "Ana gave the scooter 10 pushes, and each push carried the scooter 2 meters. How many meters did she go?",
    "r": "20 m",
    "conta": "10 × 2 = 20 meters",
    "ev": "12 m",
    "erro": "added 10 + 2 instead of putting together 10 pushes of 2 meters.",
    "pensar": "Each push is worth 2 meters. There are 10 pushes: 2 + 2 + … ten times.",
    "apoio": "“How far does one push go? What about two? And ten?”"
   },
   {
    "titulo": "The first two sections",
    "enunciado": "The 1st section of the track is 35 m and the 2nd is 28 m. How many meters are the two sections together?",
    "r": "63 m",
    "conta": "35 + 28 = 63 meters",
    "ev": "7 m",
    "erro": "took away instead of putting the sections together.",
    "pensar": "The sections come one after the other: the length is the sum.",
    "apoio": "“If you ride the 1st section and then the 2nd, how far did you go in all?”"
   },
   {
    "titulo": "The faded section",
    "enunciado": "The whole track is 90 m. The first two sections add up to 63 m. How long is the 3rd section, the one with the faded sign?",
    "r": "27 m",
    "conta": "90 − 63 = 27 meters",
    "ev": "153 m",
    "erro": "added instead of seeing what's missing.",
    "pensar": "The whole track is the whole (90). The two sections are one part (63). The faded section is the missing part.",
    "apoio": "“From 63 to 90, how many meters are missing?”",
    "desenho": {
     "nivel": "guiado",
     "instrucao": "Before doing the math, complete the drawing. The whole bar is the whole track. Write its length on top, write the first two sections in the big part, and put a <b>?</b> on the faded section.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 63,
         "t": ""
        },
        {
         "u": 27,
         "t": ""
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "90 m",
       "partes": [
        {
         "u": 63,
         "t": "63 m"
        },
        {
         "u": 27,
         "t": "?"
        }
       ]
      }
     ],
     "explica": "With the whole and one part known, the missing part is 90 − 63."
    }
   },
   {
    "titulo": "Almost at the finish",
    "enunciado": "In the race, Theo has already gone 75 m of the 90 m track. How many meters are left for him to finish?",
    "r": "15 m",
    "conta": "90 − 75 = 15 meters",
    "ev": "165 m",
    "erro": "added what he had gone to the whole track.",
    "pensar": "The track is 90. He has already gone 75. What's left is 90 − 75.",
    "apoio": "“From 75 to 90, how many meters?”"
   }
  ]
 },
 {
  "id": "n1-09-pizza",
  "nivel": "Level 1 · Mission 1-09",
  "titulo": "The Secret of Friday Pizza Night",
  "icone": "pizza",
  "tempo": "20 to 25 minutes",
  "praticas": "unit fractions: half, third, and fourth",
  "abertura": "Friday is pizza night at the home of the 5 people and Tobi the dog. The pizza arrived cut into 8 equal slices, but when everyone sat down at the table, a cheese slice was missing. Who ate before it was time?",
  "palavra": "TOBI",
  "concreto": "Draw a pizza on paper and cut it into 8 slices. In stage 2, your child sorts 12 dried beans (the garlic rolls) into 4 equal little piles before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“the bar has 4 equal pieces, and I colored in 1”). If not yet, redo just that stage another day with different numbers (e.g., a fourth of 20).",
  "solucao": "There were 2 in the kitchen: Dad and… TOBI! The dog took the cheese slice from the box while Dad went to get the plates.",
  "etapas": [
   {
    "titulo": "Half cheese",
    "curta": true,
    "enunciado": "The pizza has 8 slices. Half are cheese. How many slices are cheese?",
    "r": "4",
    "conta": "8 ÷ 2 = 4",
    "ev": "6",
    "erro": "took away 2 instead of dividing into 2 equal parts.",
    "pensar": "Half is dividing into 2 equal parts: 8 ÷ 2.",
    "apoio": "“If the pizza were divided into 2 equal sides, how many slices would be on each side?”"
   },
   {
    "titulo": "The garlic rolls",
    "enunciado": "The family also ordered 12 garlic rolls. A fourth of the rolls are stuffed with cheese. How many rolls are stuffed?",
    "r": "3",
    "conta": "12 ÷ 4 = 3",
    "ev": "8",
    "erro": "took away 4 instead of dividing into 4 equal parts.",
    "pensar": "A fourth is 1 of the 4 equal parts: 12 ÷ 4.",
    "apoio": "“Divide the 12 rolls onto 4 equal plates. How many are on each plate?”",
    "desenho": {
     "nivel": "guiado",
     "instrucao": "Before doing the math, complete the drawing. The whole bar is the 12 rolls, already divided into 4 equal pieces. Write 12 on top, color in 1 piece, and put a <b>?</b> on it.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "12",
       "partes": [
        {
         "u": 1,
         "t": "?",
         "cinza": true
        },
        {
         "u": 1,
         "t": " "
        },
        {
         "u": 1,
         "t": " "
        },
        {
         "u": 1,
         "t": " "
        }
       ]
      }
     ],
     "explica": "A fourth is 1 of the 4 equal pieces. To find how much one piece is worth: 12 ÷ 4."
    }
   },
   {
    "titulo": "The missing slice",
    "enunciado": "Of the 4 cheese slices, only 3 were in the box. How many cheese slices went missing?",
    "r": "1",
    "conta": "4 − 3 = 1",
    "ev": "7",
    "erro": "added instead of seeing how many are missing.",
    "pensar": "There were 4 and there are 3. What's missing is 4 − 3.",
    "apoio": "“From 3 to 4, how many are missing?”"
   },
   {
    "titulo": "Who was in the kitchen",
    "enunciado": "A third of the 6 members of the household (5 people and Tobi) were in the kitchen when the pizza arrived. How many members of the household were in the kitchen?",
    "r": "2",
    "conta": "6 ÷ 3 = 2",
    "ev": "9",
    "erro": "added 6 + 3 instead of dividing into 3 parts.",
    "pensar": "A third is 1 of the 3 equal parts: 6 ÷ 3.",
    "apoio": "“Divide the 6 members of the household into 3 equal groups. How many are in one group?”"
   }
  ]
 },
 {
  "id": "n1-10-feira",
  "nivel": "Level 1 · Mission 1-10",
  "titulo": "The Great Neighborhood Fair Mystery",
  "icone": "barraca",
  "tempo": "25 to 35 minutes",
  "fechamento": true,
  "praticas": "Level 1 Final Mission: putting together, taking away and comparing, equal groups and half, with gold game coins",
  "abertura": "At the neighborhood swap fair, the stands use gold game coins. At the end of the day, the cake stand's cash box should have had 80 coins, but it didn't add up. Use the 4 drawings you've already mastered to find the mistake.",
  "palavra": "CAKE",
  "concreto": "Sort 80 bottle caps into 8 little piles of 10 (the gold coins). Use the piles to check stages 1, 3, and 4 before each drawing.",
  "dominio": "This is the Level 1 Final Mission. Your child moves up to Level 2 when the code word works out and they explain at least 3 of the 4 drawings on their own. If not yet, redo just the drawings that were hard another day, with different numbers, and come back to this mission.",
  "solucao": "The coins didn't disappear: half of the missing ones were inside an empty CAKE box, and the other half were in the vendor's apron. The cash box added up to 80!",
  "etapas": [
   {
    "titulo": "The day's sales",
    "enunciado": "In the morning, the stand sold cakes for 35 gold game coins. In the afternoon, it sold them for 45. How many coins came in that day?",
    "r": "80",
    "conta": "35 + 45 = 80",
    "ev": "70",
    "erro": "added only the tens and forgot that 5 + 5 makes one more ten.",
    "pensar": "Morning and afternoon are the parts; the whole day is the total: 35 + 45.",
    "apoio": "“What is 5 + 5? Does that make one more ten?”",
    "desenho": {
     "nivel": "guiado",
     "instrucao": "Complete the drawing: in each part, write the coins from the morning and from the afternoon, and put a <b>?</b> on top, on the total.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 35,
         "t": ""
        },
        {
         "u": 45,
         "t": ""
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "?",
       "partes": [
        {
         "u": 35,
         "t": "35 morning"
        },
        {
         "u": 45,
         "t": "45 afternoon"
        }
       ]
      }
     ],
     "explica": "Part-whole with the ? on the whole: it's addition, 35 + 45."
    }
   },
   {
    "titulo": "The juice stand",
    "enunciado": "The juice stand made 62 coins. How many more coins did the cake stand (80) make than the juice stand?",
    "r": "18",
    "conta": "80 − 62 = 18",
    "ev": "142",
    "erro": "added the two stands instead of comparing.",
    "pensar": "Comparing is finding the piece the bigger bar has extra: 80 − 62.",
    "apoio": "“How many more does the juice stand need to reach 80?”",
    "desenho": {
     "nivel": "guiado",
     "instrucao": "Complete the drawing: write each stand's number on its bar and put a <b>?</b> on the dashed piece.",
     "molde": [
      {
       "nome": "Cakes",
       "partes": [
        {
         "u": 80,
         "t": ""
        }
       ]
      },
      {
       "nome": "Juices",
       "partes": [
        {
         "u": 62,
         "t": ""
        },
        {
         "u": 18,
         "t": "",
         "tracejada": true
        }
       ]
      }
     ],
     "modelo": [
      {
       "nome": "Cakes",
       "partes": [
        {
         "u": 80,
         "t": "80"
        }
       ]
      },
      {
       "nome": "Juices",
       "partes": [
        {
         "u": 62,
         "t": "62"
        },
        {
         "u": 18,
         "t": "?",
         "tracejada": true
        }
       ]
      }
     ],
     "explica": "Comparison: the dashed piece is the difference, 80 − 62."
    }
   },
   {
    "titulo": "The little bags",
    "enunciado": "In the cash box there were 6 little bags with 10 coins in each one. How many coins were in the little bags?",
    "r": "60",
    "conta": "6 × 10 = 60",
    "ev": "16",
    "erro": "added 6 + 10 instead of putting together 6 little bags of 10.",
    "pensar": "There are 6 equal groups of 10: count by 10s six times.",
    "apoio": "“Count by 10s, once for each little bag.”",
    "desenho": {
     "nivel": "guiado",
     "instrucao": "Complete the drawing: each piece is a little bag. Write how many coins are in each one and put a <b>?</b> on top, on the total.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "?",
       "partes": [
        {
         "u": 1,
         "t": "10"
        },
        {
         "u": 1,
         "t": "10"
        },
        {
         "u": 1,
         "t": "10"
        },
        {
         "u": 1,
         "t": "10"
        },
        {
         "u": 1,
         "t": "10"
        },
        {
         "u": 1,
         "t": "10"
        }
       ]
      }
     ],
     "explica": "Equal pieces with the ? on the total: the math is 6 × 10."
    }
   },
   {
    "titulo": "The missing coins",
    "enunciado": "The cash box should have had 80 coins, but it only had the 60 from the little bags. The 20 missing coins were found: half in an empty cake box and half in the vendor's apron. How many coins were in the cake box?",
    "r": "10",
    "conta": "20 ÷ 2 = 10",
    "ev": "20",
    "erro": "answered with the 20 missing coins, without dividing in half.",
    "pensar": "The 20 missing coins are the whole. Half of that: 20 ÷ 2.",
    "apoio": "“If 20 coins are divided into 2 equal little piles, how many are in each one?”",
    "desenho": {
     "nivel": "guiado",
     "instrucao": "Complete the drawing: the bar is the missing coins, divided into 2 halves. Write the total on top and put a <b>?</b> on the cake box half.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 1,
         "t": ""
        },
        {
         "u": 1,
         "t": ""
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "20",
       "partes": [
        {
         "u": 1,
         "t": "? box",
         "cinza": true
        },
        {
         "u": 1,
         "t": "apron"
        }
       ]
      }
     ],
     "explica": "Half is 1 of the 2 equal pieces: 20 ÷ 2."
    }
   }
  ]
 },
 {
  "id": "n2-01-mochila",
  "nivel": "Level 2 · Mission 2-01",
  "titulo": "The Mystery of the Heavy Backpack",
  "icone": "mochila",
  "tempo": "25 to 30 minutes",
  "praticas": "mass in kilograms and grams; 2-step problem",
  "abertura": "On the club outing, each backpack can weigh at most 800 g. The scale at the entrance beeped at Theo's backpack, but he swears he only brought his snack, his water, and his jacket. What is weighing so much?",
  "palavra": "YOYO",
  "concreto": "Use a kitchen scale, if you have one: weigh a 500 g bag of rice or beans. In stage 2, your child sets aside 3 small piles of bottle caps (snack, water, and jacket) before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“the bar is the backpack; I split it into 3 parts”). If not yet, redo just that stage another day with different numbers (e.g., 250 g, 400 g, and 150 g).",
  "solucao": "The extra 50 g was a wooden YOYO forgotten in the front pocket! Theo took out the yo-yo and left his jacket with his mom: the backpack came in under 800 g.",
  "etapas": [
   {
    "titulo": "Half a kilo",
    "curta": true,
    "enunciado": "1 kg is 1,000 g. How many grams are in half a kilo?",
    "r": "500 g",
    "conta": "1,000 ÷ 2 = 500 g",
    "ev": "1,000 g",
    "erro": "forgot to split the kilo in half.",
    "pensar": "Half a kilo is half of 1,000 g: 1,000 ÷ 2.",
    "apoio": "“If 1 kg is 1,000 g, what is half of that?”"
   },
   {
    "titulo": "What Theo says he brought",
    "enunciado": "Theo says he brought his snack (350 g), his water bottle (420 g), and his jacket (180 g). How many grams do these 3 things weigh together?",
    "r": "950 g",
    "conta": "350 + 420 = 770 · 770 + 180 = 950 g",
    "ev": "770 g",
    "erro": "forgot to add the jacket.",
    "pensar": "There are 3 parts of the backpack. Add two, then the third.",
    "apoio": "“How many things are there? Did you add them all?”",
    "desenho": {
     "nivel": "meio",
     "instrucao": "Before doing the math, split the bar into 3 parts: the snack, the water, and the jacket. Write how much each part weighs and put a <b>?</b> on top, on the total.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 950,
         "t": " "
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "?",
       "partes": [
        {
         "u": 350,
         "t": "350 g"
        },
        {
         "u": 420,
         "t": "420 g"
        },
        {
         "u": 180,
         "t": "180 g"
        }
       ]
      }
     ],
     "explica": "Part-whole with 3 parts and the ? on the total: add the parts, two at a time."
    }
   },
   {
    "titulo": "What the scale showed",
    "enunciado": "The scale showed 1,000 g. How many grams are in the backpack besides the snack, the water, and the jacket?",
    "r": "50 g",
    "conta": "1,000 − 950 = 50 g",
    "ev": "1,950 g",
    "erro": "added instead of finding the difference.",
    "pensar": "The scale shows everything. The 3 things weigh 950. The rest is 1,000 − 950.",
    "apoio": "“From 950 to 1,000, how many grams are missing?”"
   },
   {
    "titulo": "To pass the scale",
    "enunciado": "The limit is 800 g. At least how many grams does Theo need to take out of the 1,000 g backpack?",
    "r": "200 g",
    "conta": "1,000 − 800 = 200 g",
    "ev": "1,800 g",
    "erro": "added the limit to the weight of the backpack.",
    "pensar": "The backpack has 1,000 and can have 800. The difference has to come out: 1,000 − 800.",
    "apoio": "“How much over the limit was the backpack?”"
   }
  ]
 },
 {
  "id": "n2-02-pipas",
  "nivel": "Level 2 · Mission 2-02",
  "titulo": "The Case of the Kite Contest",
  "icone": "pipa",
  "tempo": "25 to 30 minutes",
  "praticas": "comparison with a total (\"more than\" and \"both together\")",
  "abertura": "At the park's kite contest, the red kite's string snapped and the kite disappeared. No one knows how much string there was or where it went. The contest numbers hold the clue.",
  "palavra": "WALL",
  "concreto": "Use two pieces of string: one 15 hand spans long (the blue spool) and another one 6 hand spans longer (the red one). In stage 2, your child stretches the two out side by side before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“the red bar is the blue one plus a piece”). If not yet, redo just that stage another day with different numbers (e.g., blue 120 m; red 45 m more).",
  "solucao": "The kite flew 195 m and fell on the other side of the park WALL. It was found caught in the climbing vine, all in one piece.",
  "etapas": [
   {
    "titulo": "The height of the kites",
    "curta": true,
    "enunciado": "The red kite went up 120 m. The blue one went up 80 m. How many more meters did the red one go up?",
    "r": "40 m",
    "conta": "120 − 80 = 40 m",
    "ev": "200 m",
    "erro": "added the two heights instead of comparing.",
    "pensar": "“More” is the difference between the two: 120 − 80.",
    "apoio": "“How much more does the blue one need to go up to match the red one?”"
   },
   {
    "titulo": "The spools",
    "enunciado": "The blue spool has 150 m of string. The red one had 60 m more than the blue one. How many meters of string did the two spools have together?",
    "r": "360 m",
    "conta": "150 + 60 = 210 · 150 + 210 = 360 m",
    "ev": "210 m",
    "erro": "found only the red spool and forgot to put it together with the blue one.",
    "pensar": "First, the red one (150 + 60). Then, the two together.",
    "apoio": "“How much does the red one have? And the two together?”",
    "desenho": {
     "nivel": "meio",
     "junto": "?",
     "instrucao": "Before doing the math, split the red bar: one piece the size of the blue one and the “more” piece. Write the numbers and put a <b>?</b> next to the two bars, on the total.",
     "molde": [
      {
       "nome": "Blue",
       "partes": [
        {
         "u": 150,
         "t": " "
        }
       ]
      },
      {
       "nome": "Red",
       "partes": [
        {
         "u": 210,
         "t": " "
        }
       ]
      }
     ],
     "modelo": [
      {
       "nome": "Blue",
       "partes": [
        {
         "u": 150,
         "t": "150 m"
        }
       ]
      },
      {
       "nome": "Red",
       "partes": [
        {
         "u": 150,
         "t": "150 m"
        },
        {
         "u": 60,
         "t": "60 m"
        }
       ]
      }
     ],
     "explica": "The drawing shows 2 equal pieces of 150 plus 60: 150 + 150 + 60. The ? goes on the side, adding up the two bars."
    }
   },
   {
    "titulo": "The string that got away",
    "enunciado": "After it snapped, 90 m of string was left on the red spool, which had 210 m. How many meters of string went away with the kite?",
    "r": "120 m",
    "conta": "210 − 90 = 120 m",
    "ev": "300 m",
    "erro": "added what was left to the full spool.",
    "pensar": "The spool had 210. 90 stayed. What went away is 210 − 90.",
    "apoio": "“If 90 of the 210 stayed, how much came off the spool?”"
   },
   {
    "titulo": "The kite's flight",
    "enunciado": "The kite was carried off by the 120 m of string, and the wind carried it another 75 m. How many meters did it travel in all?",
    "r": "195 m",
    "conta": "120 + 75 = 195 m",
    "ev": "45 m",
    "erro": "subtracted instead of putting together the two parts of the flight.",
    "pensar": "The two parts of the flight go together: 120 + 75.",
    "apoio": "“It went 120 and then another 75. How much is that in all?”"
   }
  ]
 },
 {
  "id": "n2-03-torre",
  "nivel": "Level 2 · Mission 2-03",
  "titulo": "The Riddle of the Block Tower",
  "icone": "blocos",
  "tempo": "25 to 30 minutes",
  "praticas": "multiplicative comparison: times as many",
  "abertura": "Léo built a tower of 8 blocks. His older brother, Davi, said: “My tower is 3 times yours!” Davi's tower really does look huge. Is it true?",
  "palavra": "DESK",
  "concreto": "Use building blocks, small boxes, or books. In stage 2, your child builds a tower of 8 and, next to it, 3 towers of 8, and counts everything together before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“each of Davi's pieces is the size of Léo's tower”). If not yet, redo just that stage another day with different numbers (e.g., 7 blocks, 4 times).",
  "solucao": "Davi's tower had only 16 blocks: double, not triple. It looked huge because it was on top of the DESK!",
  "etapas": [
   {
    "titulo": "The height of Léo's tower",
    "curta": true,
    "enunciado": "Each block is 6 cm tall. How many centimeters tall is Léo's tower, with 8 blocks?",
    "r": "48 cm",
    "conta": "8 × 6 = 48 cm",
    "ev": "14 cm",
    "erro": "added 8 + 6 instead of putting together 8 blocks of 6 cm.",
    "pensar": "There are 8 equal blocks of 6 cm: 8 × 6.",
    "apoio": "“How tall is 1 block? And 2? And 8?”"
   },
   {
    "titulo": "3 times Léo's tower",
    "enunciado": "Davi says his tower is 3 times Léo's (8 blocks). If that were true, how many blocks would the two towers have together?",
    "r": "32",
    "conta": "3 × 8 = 24 (Davi) · 24 + 8 = 32",
    "ev": "24",
    "erro": "found only Davi's tower and forgot to put Léo's together with it.",
    "pensar": "“3 times” is 3 pieces equal to Léo's tower. Then, put the two towers together.",
    "apoio": "“How many blocks would Davi have? And the two towers together?”",
    "desenho": {
     "nivel": "meio",
     "junto": "?",
     "instrucao": "Before doing the math: the top bar is Léo's tower. Split Davi's bar into pieces the size of Léo's, write the numbers, and put a <b>?</b> next to the two bars, on the total.",
     "molde": [
      {
       "nome": "Léo",
       "partes": [
        {
         "u": 8,
         "t": " "
        }
       ]
      },
      {
       "nome": "Davi",
       "partes": [
        {
         "u": 24,
         "t": " "
        }
       ]
      }
     ],
     "modelo": [
      {
       "nome": "Léo",
       "partes": [
        {
         "u": 1,
         "t": "8"
        }
       ]
      },
      {
       "nome": "Davi",
       "partes": [
        {
         "u": 1,
         "t": "8"
        },
        {
         "u": 1,
         "t": "8"
        },
        {
         "u": 1,
         "t": "8"
        }
       ]
      }
     ],
     "explica": "“3 times” becomes 3 pieces equal to Léo's. The two towers together are 4 pieces of 8: 32."
    }
   },
   {
    "titulo": "Davi's count",
    "enunciado": "If it were 3 times, Davi's tower would have 24 blocks. But he counted: there are only 16. How many blocks are missing to make 24?",
    "r": "8",
    "conta": "24 − 16 = 8",
    "ev": "40",
    "erro": "added instead of finding how many are missing.",
    "pensar": "From 16 to 24, what's missing is 24 − 16.",
    "apoio": "“If it has 16 and should have 24, how many are missing?”"
   },
   {
    "titulo": "The secret of the height",
    "enunciado": "Davi's tower (16 blocks of 6 cm) was on top of a 72 cm desk. How high off the floor is the top of the tower?",
    "r": "168 cm",
    "conta": "16 × 6 = 96 · 96 + 72 = 168 cm",
    "ev": "88 cm",
    "erro": "added the number of blocks, not their height.",
    "pensar": "First, the height of the blocks (16 × 6). Then, add the desk.",
    "apoio": "“How many centimeters tall is the tower by itself? And with the desk underneath?”"
   }
  ]
 },
 {
  "id": "n2-04-horta",
  "nivel": "Level 2 · Mission 2-04",
  "titulo": "The Secret of the Vegetable Garden Beds",
  "icone": "planta",
  "tempo": "25 to 30 minutes",
  "praticas": "fraction of a quantity (2/3 of 24, 3/4 of 40)",
  "abertura": "In the family's vegetable garden, two-thirds of the beds were watered by morning, and the rest were not. Whoever watered them stopped halfway. Why?",
  "palavra": "HOLE",
  "concreto": "Make 24 little paper balls (the beds) and split them into 3 equal piles. In stage 2, your child puts together 2 of the 3 piles before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“I split it into 3 and colored in 2”). If not yet, redo just that stage another day with different numbers (e.g., 3/4 of 20).",
  "solucao": "The watering can had a HOLE and lost 2 L every meter: it reached the end of the garden almost empty, and only 16 beds were watered.",
  "etapas": [
   {
    "titulo": "The beds",
    "curta": true,
    "enunciado": "The garden has 3 rows with 8 beds in each one. How many beds are there?",
    "r": "24",
    "conta": "3 × 8 = 24",
    "ev": "11",
    "erro": "added 3 + 8 instead of putting together 3 rows of 8.",
    "pensar": "There are 3 equal rows of 8: 8 + 8 + 8.",
    "apoio": "“How many beds are in one row? And in three?”"
   },
   {
    "titulo": "The watered beds",
    "enunciado": "2/3 of the 24 beds were watered. How many beds were watered?",
    "r": "16",
    "conta": "24 ÷ 3 = 8 · 2 × 8 = 16",
    "ev": "8",
    "erro": "found only 1/3 and forgot to take 2 pieces.",
    "pensar": "Split into 3 equal parts (the “bottom”) and take 2 of them (the “top”).",
    "apoio": "“How much is 1 of the 3 pieces worth? And 2 pieces?”",
    "desenho": {
     "nivel": "meio",
     "instrucao": "Before doing the math, split the bar into 3 equal pieces (the “bottom” of the fraction), color in 2 (the “top”), and write how much each piece is worth. The answer is the value of the colored pieces together.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 24,
         "t": " "
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "24",
       "partes": [
        {
         "u": 1,
         "t": "8",
         "cinza": true
        },
        {
         "u": 1,
         "t": "8",
         "cinza": true
        },
        {
         "u": 1,
         "t": "8"
        }
       ]
      }
     ],
     "explica": "Each third is worth 24 ÷ 3 = 8. The 2 colored pieces together are worth 16."
    }
   },
   {
    "titulo": "The water that leaked",
    "enunciado": "The watering can started out full, with 40 L. When it reached the end, 3/4 of the water had already leaked out along the way. How many liters leaked?",
    "r": "30 L",
    "conta": "40 ÷ 4 = 10 · 3 × 10 = 30 L",
    "ev": "10 L",
    "erro": "found only 1/4 and forgot to take 3 pieces.",
    "pensar": "Split 40 into 4 parts (10 each) and take 3 of them.",
    "apoio": "“What is 1/4 of 40? And 3/4?”"
   },
   {
    "titulo": "The leak per meter",
    "enunciado": "The path from the faucet to the end of the garden is 15 m long, and the watering can lost the same amount of water in each meter. How many liters did it lose per meter, if 30 L leaked?",
    "r": "2 L",
    "conta": "30 ÷ 15 = 2 L per meter",
    "ev": "45 L",
    "erro": "added the liters to the meters.",
    "pensar": "The 30 L are shared equally across the 15 meters: 30 ÷ 15.",
    "apoio": "“If it were 30 L over 3 meters, how much per meter? And over 15?”"
   }
  ]
 },
 {
  "id": "n2-05-treasure",
  "icone": "mapa",
  "tempo": "25 to 30 minutes",
  "palavra": "LAKE",
  "titulo": "The Campout Treasure Hunt",
  "nivel": "Level 2 · Mission 2-05",
  "praticas": "multiplication, making change with game coins, fractions, and division",
  "abertura": "At camp, the guide hid a chest full of gold coins. He left clues along the trail. Only those who solve the math will reach the chest before sunset.",
  "concreto": "Set aside 60 bottle caps or dried beans in 6 piles of 10: these are the gold coins. In stage 2, your child sets aside what they paid for the flashlight and the rope and counts what's left before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words. If not yet, redo just that stage another day with different numbers (e.g., 50 coins, a flashlight for 28, a rope for 15).",
  "solucao": "The chest was behind the big rock, at the edge of the LAKE, 300 meters from the start. And the 84 gold coins were split equally among the explorers!",
  "etapas": [
   {
    "curta": true,
    "titulo": "The starting ropes",
    "enunciado": "First clue: “Leave the tent and follow 4 ropes stretched out on the ground, each one 3 meters long.” How many meters did you walk?",
    "r": "12 m",
    "conta": "4 ropes × 3 meters = 12 meters",
    "ev": "7 m",
    "erro": "added 4 + 3 instead of putting together 4 ropes of 3 meters.",
    "pensar": "Each rope is 3 meters long. There are 4 ropes: 3 + 3 + 3 + 3.",
    "apoio": "“How long is one rope? And four ropes?” You can draw the 4 ropes and write 3 on each one."
   },
   {
    "titulo": "The camp store",
    "enunciado": "The guide gave you 60 gold coins for the trip. At the store, a flashlight costs 35 gold coins and a rope costs 17. After buying both, how many coins are left?",
    "r": "8",
    "conta": "35 + 17 = 52 · 60 − 52 = 8",
    "ev": "25",
    "erro": "forgot to pay for the rope.",
    "pensar": "First, how much the two things cost together (35 + 17). Then, how much is left of the 60 coins.",
    "apoio": "“How much did you spend in all? And how much did you have at the start?”",
    "desenho": {
     "nivel": "meio",
     "instrucao": "Before doing the math, split the bar into 3 parts: the flashlight, the rope, and what's left. Write the value of each part and put a <b>?</b> on what you want to find out. On top, write how many coins you had.",
     "explica": "The drawing shows the 60 coins split into 3 pieces. If you know 2 pieces, the third is what's left: 60 − 35 − 17 (or 60 − 52).",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 60,
         "t": " "
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "60 coins",
       "partes": [
        {
         "u": 35,
         "t": "35 flashlight"
        },
        {
         "u": 17,
         "t": "17 rope"
        },
        {
         "u": 8,
         "t": "?"
        }
       ]
      }
     ]
    }
   },
   {
    "titulo": "The trail map",
    "enunciado": "The trail to the chest is 400 meters long. The map says: “The chest is 3/4 of the way along the trail, counting from the start.” How many meters from the start is the chest?",
    "r": "300 m",
    "conta": "400 ÷ 4 = 100 meters in each part · 3 parts = 300 meters",
    "ev": "100 m",
    "erro": "found only 1/4 of the trail and forgot to multiply by 3.",
    "pensar": "Split the trail into 4 equal parts (100 meters each) and walk 3 of those parts.",
    "apoio": "“If the trail were cut into 4 equal pieces, how long would each piece be? And 3 pieces?” Drawing a line helps."
   },
   {
    "titulo": "The chest",
    "enunciado": "Inside the chest there are 84 gold coins, to be split equally among 4 explorers. How many coins does each one get?",
    "r": "21",
    "conta": "84 ÷ 4 = 21 (80 ÷ 4 = 20 and 4 ÷ 4 = 1)",
    "ev": "80",
    "erro": "subtracted 4 instead of sharing.",
    "pensar": "Share 84 into 4 equal parts. You can break it up: 80 ÷ 4 = 20 and 4 ÷ 4 = 1.",
    "apoio": "“If there were 8 coins for 4 people, how many would each one get? And 80?” Beans or bottle caps help with sharing."
   }
  ]
 },
 {
  "id": "n2-06-onibus",
  "nivel": "Level 2 · Mission 2-06",
  "titulo": "The Mystery of the Field Trip Bus",
  "icone": "onibus",
  "tempo": "25 to 30 minutes",
  "praticas": "division with a remainder: how many groups fit and how many are left over",
  "abertura": "On the science club field trip, 3 buses took everyone to the museum. On the way back, there were people left outside the buses! What happened?",
  "palavra": "VANS",
  "concreto": "Use bottle caps as people and boxes (or plates) as buses. In stage 3, your child fills the buses 36 at a time (they can use piles of 10 and of 6) and sees what's left over before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 3 in their own words (“3 full pieces and a little piece left over”). If not yet, redo just that stage another day with different numbers (e.g., 100 people, buses with 30 seats).",
  "solucao": "On the way back there were 127 people: 3 full buses and 19 left over. The club called 3 VANS, and no one was left behind.",
  "etapas": [
   {
    "titulo": "The seats on the bus",
    "curta": true,
    "enunciado": "Each bus has 9 rows with 4 seats. How many seats does one bus have?",
    "r": "36",
    "conta": "9 × 4 = 36",
    "ev": "13",
    "erro": "added 9 + 4 instead of putting together 9 rows of 4.",
    "pensar": "There are 9 equal rows of 4 seats: 9 × 4.",
    "apoio": "“How many seats are in one row? And in nine?”"
   },
   {
    "titulo": "The trip there",
    "enunciado": "On the way there, the 3 buses with 36 seats were full. How many people went?",
    "r": "108",
    "conta": "3 × 36 = 108",
    "ev": "39",
    "erro": "added 3 instead of putting together 3 buses of 36.",
    "pensar": "There are 3 equal buses of 36: 36 + 36 + 36.",
    "apoio": "“How many people fit on one bus? And on three?”"
   },
   {
    "titulo": "The trip back",
    "enunciado": "On the way back, some parents who had come by car also wanted to go back by bus, and now there are 127 people. The 3 buses with 36 seats fill up. How many people are left outside the buses?",
    "r": "19",
    "conta": "127 ÷ 36 = 3 full buses (108), remainder 19",
    "ev": "4",
    "erro": "answered how many buses would be needed, not how many people are left over.",
    "pensar": "Fill the buses 36 at a time until no more fit. What didn't fit is the remainder.",
    "apoio": "“How many people fit on the 3 buses? And how many are left outside?”",
    "desenho": {
     "nivel": "meio",
     "instrucao": "Before doing the math, split the bar into pieces of 36 (one per bus) as far as it goes. The little piece left over is the people outside: put a <b>?</b> on it.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 127,
         "t": " "
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "127",
       "partes": [
        {
         "u": 36,
         "t": "36"
        },
        {
         "u": 36,
         "t": "36"
        },
        {
         "u": 36,
         "t": "36"
        },
        {
         "u": 19,
         "t": "?"
        }
       ]
      }
     ],
     "explica": "Equal pieces with some left over: 3 pieces of 36 fit (108), and the little piece left over is 127 − 108 = 19."
    }
   },
   {
    "titulo": "The vans",
    "enunciado": "A van carries 8 people. How many vans are needed to carry the 19 people who were left over?",
    "r": "3",
    "conta": "19 ÷ 8 = 2, remainder 3 · the 3 left over need 1 more van: 3 vans",
    "ev": "2",
    "erro": "forgot the 3 people in the remainder, who also need a seat.",
    "pensar": "Two vans carry 16. 3 people are left, and they need to go too.",
    "apoio": "“With 2 vans, did everyone go? Who was left?”"
   }
  ]
 },
 {
  "id": "n2-07-aquario",
  "nivel": "Level 2 · Mission 2-07",
  "titulo": "The Case of the Leaky Fish Tank",
  "icone": "peixe",
  "tempo": "25 to 30 minutes",
  "praticas": "capacity in liters and milliliters; converting and finding the difference",
  "abertura": "The living room fish tank loses a little water every day. Bolinha the fish is fine, but the family wants to know: is it a leak, or is the water evaporating?",
  "palavra": "DROP",
  "concreto": "Use a measuring cup or bottles: a 2 L bottle and a 250 mL cup. In stage 3, your child pours water out of the bottle and sees what's left before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 3 in their own words. If not yet, redo just that stage another day with different numbers (e.g., a 1 L pitcher, 350 mL left over).",
  "solucao": "It wasn't a leak: it was the water evaporating. With a lid, every DROP that evaporates goes back into the tank, and the level hardly goes down anymore.",
  "etapas": [
   {
    "titulo": "Half a liter",
    "curta": true,
    "enunciado": "1 L is 1,000 mL. How many mL are in half a liter?",
    "r": "500 mL",
    "conta": "1,000 ÷ 2 = 500 mL",
    "ev": "50 mL",
    "erro": "thought 1 L is 100 mL.",
    "pensar": "Half a liter is half of 1,000 mL.",
    "apoio": "“How many mL are in 1 L? And half?”"
   },
   {
    "titulo": "The level that goes down",
    "enunciado": "The fish tank's level goes down 250 mL a day. How many mL does it go down in 4 days?",
    "r": "1,000 mL",
    "conta": "4 × 250 = 1,000 mL",
    "ev": "254 mL",
    "erro": "added 4 instead of putting together 4 days of 250 mL.",
    "pensar": "There are 4 equal days of 250 mL: 250 + 250 + 250 + 250.",
    "apoio": "“How much does it go down in 1 day? And in 2? And in 4?”"
   },
   {
    "titulo": "The pitcher",
    "enunciado": "A pitcher with 2 L of water was used to top off the fish tank, but there were still 750 mL left in the pitcher. How many mL went into the fish tank?",
    "r": "1,250 mL",
    "conta": "2 L = 2,000 mL · 2,000 − 750 = 1,250 mL",
    "ev": "2,750 mL",
    "erro": "added what was left to the full pitcher.",
    "pensar": "Turn 2 L into 2,000 mL. The pitcher is the whole; what was left is one part; what went into the fish tank is the other.",
    "apoio": "“How many mL did the pitcher have? And how many stayed in it?”",
    "desenho": {
     "nivel": "meio",
     "instrucao": "Before doing the math, split the bar into 2 parts: what went into the fish tank and what was left in the pitcher. On top, write how much the pitcher had (in mL) and put a <b>?</b> on what you want to find out.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 2000,
         "t": " "
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "2,000 mL",
       "partes": [
        {
         "u": 1250,
         "t": "? fish tank"
        },
        {
         "u": 750,
         "t": "750 mL"
        }
       ]
      }
     ],
     "explica": "Part-whole with mL: the whole is 2,000 mL, one part is 750 mL, and the missing part is 2,000 − 750."
    }
   },
   {
    "titulo": "The lid",
    "enunciado": "With a lid on top of the fish tank, the level started going down only 50 mL a day, instead of 250 mL. How many fewer mL per day?",
    "r": "200 mL",
    "conta": "250 − 50 = 200 mL",
    "ev": "300 mL",
    "erro": "added the two measurements instead of comparing.",
    "pensar": "Before, 250; now, 50. The difference is 250 − 50.",
    "apoio": "“How much less does the fish tank lose per day now?”"
   }
  ]
 },
 {
  "id": "n2-08-cronometro",
  "nivel": "Level 2 · Mission 2-08",
  "titulo": "The Riddle of the Race Stopwatch",
  "icone": "cronometro",
  "tempo": "25 to 30 minutes",
  "praticas": "time in minutes and seconds; adding durations",
  "abertura": "In the club's 4-lap race, the stopwatch showed a total time that doesn't match Mia's laps. Is the stopwatch wrong? Or did something happen in the middle of the race?",
  "palavra": "LACE",
  "concreto": "Use the stopwatch on a phone: your child times how long it takes them to do one lap around the room. In stage 2, they put together 4 strips of paper, one for each lap, before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“each piece is one lap”). If not yet, redo just that stage another day with different numbers (e.g., 85 s, 92 s, 88 s, and 95 s).",
  "solucao": "In the extra 30 seconds, Mia stopped to tie her sneaker LACE, and no one wrote it down. The stopwatch was right!",
  "etapas": [
   {
    "titulo": "The seconds",
    "curta": true,
    "enunciado": "1 minute has 60 seconds. How many seconds are in 2 minutes?",
    "r": "120 s",
    "conta": "2 × 60 = 120 s",
    "ev": "62 s",
    "erro": "added 2 instead of putting together 2 minutes of 60 seconds.",
    "pensar": "Each minute has 60 seconds. Two minutes: 60 + 60.",
    "apoio": "“How many seconds are in 1 minute? And in 2?”"
   },
   {
    "titulo": "The 4 laps",
    "enunciado": "Mia did the 4 laps in 95 s, 90 s, 100 s, and 92 s. How many seconds did she take in all?",
    "r": "377 s",
    "conta": "95 + 90 = 185 · 185 + 100 = 285 · 285 + 92 = 377 s",
    "ev": "282 s",
    "erro": "forgot to add one of the laps.",
    "pensar": "The 4 laps are the parts of the race. Add one at a time.",
    "apoio": "“How many laps were there? Did you add all 4?”",
    "desenho": {
     "nivel": "meio",
     "instrucao": "Before doing the math, split the bar into 4 parts, one for each lap. Write the time of each lap and put a <b>?</b> on top, on the total.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 377,
         "t": " "
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "?",
       "partes": [
        {
         "u": 95,
         "t": "95 s"
        },
        {
         "u": 90,
         "t": "90 s"
        },
        {
         "u": 100,
         "t": "100 s"
        },
        {
         "u": 92,
         "t": "92 s"
        }
       ]
      }
     ],
     "explica": "Part-whole with time: the laps, one after the other, make up the race. The total is the sum of the 4 parts."
    }
   },
   {
    "titulo": "The stopwatch",
    "enunciado": "The stopwatch showed 6 minutes and 47 seconds. How many seconds is that?",
    "r": "407 s",
    "conta": "6 × 60 = 360 · 360 + 47 = 407 s",
    "ev": "647 s",
    "erro": "put the 6 and the 47 together as if they were one number.",
    "pensar": "Turn the minutes into seconds (6 × 60) and add the 47.",
    "apoio": "“How many seconds are in 6 minutes? Is there something you forgot to add?”"
   },
   {
    "titulo": "The extra time",
    "enunciado": "How many more seconds did the stopwatch (407 s) show than the sum of the laps (377 s)?",
    "r": "30 s",
    "conta": "407 − 377 = 30 s",
    "ev": "784 s",
    "erro": "added the two times instead of comparing.",
    "pensar": "Comparing is finding the difference: 407 − 377.",
    "apoio": "“From 377 to 407, how many seconds are missing?”"
   }
  ]
 },
 {
  "id": "n2-09-grafico",
  "nivel": "Level 2 · Mission 2-09",
  "titulo": "The Mystery of the Torn Graph",
  "icone": "grafico",
  "tempo": "25 to 30 minutes",
  "praticas": "table and bar graph; comparing; pattern in a table",
  "abertura": "The neighborhood club voted on the name of the new mascot: Faísca, Biscoito, or Trovão. The bar graph with the results got torn, and the column for one of the names disappeared. Which name won?",
  "palavra": "VOTE",
  "concreto": "Build the columns of the graph with stacked bottle caps (1 cap = 1 vote, or 1 cap = 5 votes). In stage 3, your child puts Trovão's and Faísca's columns side by side before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 3 in their own words. If not yet, redo just that stage another day with different numbers (e.g., 42 and 35 votes).",
  "solucao": "Trovão won, with 39 VOTES, 5 more than Faísca. The graph was redone and hung on the club's bulletin board.",
  "etapas": [
   {
    "titulo": "The piece that was left",
    "curta": true,
    "enunciado": "Look at the part of the graph that was left. How many votes did Faísca and Biscoito get together?<br><svg viewBox=\"0 0 300 150\" width=\"248\" height=\"124\" font-family=\"Inter, DejaVu Sans, sans-serif\" font-size=\"11\"><path d=\"M30 10 V120 H290\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.5\"/><g stroke=\"#ccc\"><path d=\"M30 92.5 H290 M30 65 H290 M30 37.5 H290\"/></g><g font-size=\"9\" text-anchor=\"end\"><text x=\"26\" y=\"123\">0</text><text x=\"26\" y=\"96\">10</text><text x=\"26\" y=\"68\">20</text><text x=\"26\" y=\"41\">30</text><text x=\"26\" y=\"14\">40</text></g><rect x=\"50\" y=\"26.5\" width=\"50\" height=\"93.5\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"2\"/><text x=\"75\" y=\"22\" text-anchor=\"middle\" font-weight=\"700\">34</text><rect x=\"125\" y=\"45.75\" width=\"50\" height=\"74.25\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"2\"/><text x=\"150\" y=\"41\" text-anchor=\"middle\" font-weight=\"700\">27</text><path d=\"M200 120 V70 l8 -6 8 6 8 -6 8 6 8 -6 8 6 V120\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/><text x=\"75\" y=\"136\" text-anchor=\"middle\">Faísca</text><text x=\"150\" y=\"136\" text-anchor=\"middle\">Biscoito</text><text x=\"225\" y=\"136\" text-anchor=\"middle\">Trovão</text><text x=\"225\" y=\"98\" text-anchor=\"middle\" font-size=\"9\">torn</text></svg>",
    "r": "61",
    "conta": "34 + 27 = 61",
    "ev": "7",
    "erro": "subtracted instead of putting together.",
    "pensar": "The votes for the two names go together: 34 + 27.",
    "apoio": "“Does the question want the two together or the difference?”"
   },
   {
    "titulo": "The torn column",
    "enunciado": "There were 100 votes in all. Faísca and Biscoito add up to 61. How many votes did Trovão, the name on the torn column, get?",
    "r": "39",
    "conta": "100 − 61 = 39",
    "ev": "161",
    "erro": "added instead of finding what's missing to make 100.",
    "pensar": "The 100 votes are the whole. 61 are already known. Trovão is the rest: 100 − 61.",
    "apoio": "“From 61 to 100, how many votes are missing?”"
   },
   {
    "titulo": "The winner",
    "enunciado": "From the graph and from stage 2: how many more votes did the winner get than 2nd place?",
    "r": "5",
    "conta": "1st Trovão (39), 2nd Faísca (34) · 39 − 34 = 5",
    "ev": "12",
    "erro": "compared with last place, not with 2nd.",
    "pensar": "First find 1st and 2nd place. Then compare the two columns.",
    "apoio": "“How many votes did Faísca need to tie?”",
    "desenho": {
     "nivel": "meio",
     "instrucao": "Before doing the math, write the votes for 1st place on the top bar and the votes for 2nd place on the bottom one. On the smaller bar, mark off the piece it needs to be the same as the bigger one and put a <b>?</b> on it.",
     "molde": [
      {
       "nome": "1st place",
       "partes": [
        {
         "u": 39,
         "t": " "
        }
       ]
      },
      {
       "nome": "2nd place",
       "partes": [
        {
         "u": 34,
         "t": " "
        }
       ]
      }
     ],
     "modelo": [
      {
       "nome": "Trovão",
       "partes": [
        {
         "u": 39,
         "t": "39"
        }
       ]
      },
      {
       "nome": "Faísca",
       "partes": [
        {
         "u": 34,
         "t": "34"
        },
        {
         "u": 5,
         "t": "?",
         "tracejada": true
        }
       ]
      }
     ],
     "explica": "The columns of the graph become bars. The dashed piece is the difference: 39 − 34."
    }
   },
   {
    "titulo": "The pattern in the ballot box",
    "compacta": true,
    "enunciado": "The ballot box was opened every hour, and the club wrote Trovão's votes in the table. If the pattern kept going until 1 p.m., how many votes would Trovão have at 1 p.m.?<br><table style=\"border-collapse:collapse;margin-top:4px;font-size:11pt\"><tr><td style=\"border:1.5px solid #111;padding:2px 8px\"><b>Time</b></td><td style=\"border:1.5px solid #111;padding:2px 8px\">9 a.m.</td><td style=\"border:1.5px solid #111;padding:2px 8px\">10 a.m.</td><td style=\"border:1.5px solid #111;padding:2px 8px\">11 a.m.</td><td style=\"border:1.5px solid #111;padding:2px 8px\">12 p.m.</td><td style=\"border:1.5px solid #111;padding:2px 8px\">1 p.m.</td></tr><tr><td style=\"border:1.5px solid #111;padding:2px 8px\"><b>Trovão's votes</b></td><td style=\"border:1.5px solid #111;padding:2px 8px\">9</td><td style=\"border:1.5px solid #111;padding:2px 8px\">19</td><td style=\"border:1.5px solid #111;padding:2px 8px\">29</td><td style=\"border:1.5px solid #111;padding:2px 8px\">?</td><td style=\"border:1.5px solid #111;padding:2px 8px\">?</td></tr></table>",
    "r": "49",
    "conta": "goes up 10 each hour: 11 a.m. → 29, 12 p.m. → 39, 1 p.m. → 49",
    "ev": "40",
    "erro": "added 1 instead of 10 each hour.",
    "pensar": "Find out how much it goes up from one hour to the next (10) and continue the table.",
    "apoio": "“From 9 to 19, how much did it go up? And from 19 to 29? Keep going: 12 p.m., 1 p.m.”"
   }
  ]
 },
 {
  "id": "n2-10-museu",
  "nivel": "Level 2 · Mission 2-10",
  "titulo": "The Great Midnight Museum Mystery",
  "icone": "museu",
  "tempo": "30 to 40 minutes",
  "fechamento": true,
  "praticas": "Level 2 Final Mission: 3 parts, times as many, fraction of a quantity, and division with a remainder",
  "abertura": "During the night, an old vase in the museum changed rooms. The cameras were off, but the night guard wrote numbers in a notebook. Use the 4 drawings from Level 2 to find out where the vase ended up.",
  "palavra": "VASE",
  "concreto": "Use bottle caps and small containers to check stages 2 and 4 (groups of 45 and trips of 8) before each drawing.",
  "dominio": "This is the Level 2 Final Mission. Your child moves on to Level 3 when the code word works out and they explain at least 3 of the 4 drawings on their own. If not yet, another day, redo just the drawings that were hard, with different numbers, and come back to this mission.",
  "solucao": "On the cart's last trip there were only 5 pieces, and one of them was the VASE. It wasn't stolen: it spent the night in the cleaning room and went back to its place in the morning.",
  "etapas": [
   {
    "titulo": "The night guard's rounds",
    "enunciado": "The night guard walked 3 hallways: 240 m, 185 m, and 330 m. How many meters did he walk?",
    "r": "755 m",
    "conta": "240 + 185 = 425 · 425 + 330 = 755 m",
    "ev": "425 m",
    "erro": "forgot to add the 3rd hallway.",
    "pensar": "There are 3 parts to the rounds. Add two, then the third.",
    "apoio": "“How many hallways are there? Did you add them all?”",
    "desenho": {
     "nivel": "meio",
     "instrucao": "Split the bar into 3 parts, one per hallway. Write the numbers and put a <b>?</b> on top, on the total.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 755,
         "t": " "
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "?",
       "partes": [
        {
         "u": 240,
         "t": "240 m"
        },
        {
         "u": 185,
         "t": "185 m"
        },
        {
         "u": 330,
         "t": "330 m"
        }
       ]
      }
     ],
     "explica": "Part-whole with 3 parts: the total is the sum of the 3 hallways."
    }
   },
   {
    "titulo": "The statue room",
    "enunciado": "The vase room has 45 pieces. The statue room has 4 times as many pieces as the vase room. How many pieces are in the statue room?",
    "r": "180",
    "conta": "4 × 45 = 180",
    "ev": "49",
    "erro": "added 4 instead of taking 4 times 45.",
    "pensar": "“4 times” is 4 pieces equal to the 45 in the vase room.",
    "apoio": "“How many pieces of 45 fit in the statues bar?”",
    "desenho": {
     "nivel": "meio",
     "instrucao": "The top bar is the vase room. Split the statues bar into pieces the size of the top one and put a <b>?</b> on its total.",
     "molde": [
      {
       "nome": "Vases",
       "partes": [
        {
         "u": 45,
         "t": " "
        }
       ]
      },
      {
       "nome": "Statues",
       "partes": [
        {
         "u": 180,
         "t": " "
        }
       ]
      }
     ],
     "modelo": [
      {
       "nome": "Vases",
       "partes": [
        {
         "u": 1,
         "t": "45"
        }
       ]
      },
      {
       "nome": "Statues",
       "total": "?",
       "partes": [
        {
         "u": 1,
         "t": "45"
        },
        {
         "u": 1,
         "t": "45"
        },
        {
         "u": 1,
         "t": "45"
        },
        {
         "u": 1,
         "t": "45"
        }
       ]
      }
     ],
     "explica": "Times as many: 4 pieces equal to the 45 in the vase room, 4 × 45."
    }
   },
   {
    "titulo": "The lights out",
    "enunciado": "The notebook says: “At 2 a.m., 3/5 of the 180 statues had their lights off.” How many statues were in the dark?",
    "r": "108",
    "conta": "180 ÷ 5 = 36 · 3 × 36 = 108",
    "ev": "36",
    "erro": "found only 1/5 and forgot to take 3 pieces.",
    "pensar": "Split 180 into 5 equal pieces and take 3.",
    "apoio": "“How much is 1 of the 5 pieces worth? And 3?”",
    "desenho": {
     "nivel": "meio",
     "instrucao": "Split the bar into 5 equal pieces, color in 3, and write how much each piece is worth. The answer is the value of the colored ones together.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 180,
         "t": " "
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "180",
       "partes": [
        {
         "u": 1,
         "t": "36",
         "cinza": true
        },
        {
         "u": 1,
         "t": "36",
         "cinza": true
        },
        {
         "u": 1,
         "t": "36",
         "cinza": true
        },
        {
         "u": 1,
         "t": "36"
        },
        {
         "u": 1,
         "t": "36"
        }
       ]
      }
     ],
     "explica": "Each fifth is worth 180 ÷ 5 = 36. The 3 colored pieces are worth 108."
    }
   },
   {
    "titulo": "The cleaning cart",
    "enunciado": "In the middle of the night, 45 pieces from the vase room were taken to be cleaned on a cart that carries 8 pieces per trip. How many pieces went on the last trip, the one that didn't fill the cart? (The night guard wrote down that the vase was the last piece to leave the room.)",
    "r": "5",
    "conta": "45 ÷ 8 = 5 full trips (40 pieces), remainder 5",
    "ev": "6",
    "erro": "answered the number of trips, not the pieces on the last one.",
    "pensar": "Fill the cart 8 at a time until no more fit. What's left goes on the last trip.",
    "apoio": "“How many pieces go on 5 full trips? How many are left?”",
    "desenho": {
     "nivel": "meio",
     "instrucao": "Split the bar into pieces of 8 (one trip each) as far as it goes. Put a <b>?</b> on the little piece left over.",
     "molde": [
      {
       "total": "",
       "partes": [
        {
         "u": 45,
         "t": " "
        }
       ]
      }
     ],
     "modelo": [
      {
       "total": "45",
       "partes": [
        {
         "u": 8,
         "t": "8"
        },
        {
         "u": 8,
         "t": "8"
        },
        {
         "u": 8,
         "t": "8"
        },
        {
         "u": 8,
         "t": "8"
        },
        {
         "u": 8,
         "t": "8"
        },
        {
         "u": 5,
         "t": "?"
        }
       ]
      }
     ],
     "explica": "Equal pieces with some left over: 5 trips of 8 (40), and 45 − 40 = 5 are left."
    }
   }
  ]
 },
 {
  "id": "n3-01-salto",
  "nivel": "Level 3 · Mission 3-01",
  "titulo": "The Mystery of the Long Jump",
  "icone": "salto",
  "tempo": "25 to 35 minutes",
  "praticas": "decimal numbers in meters: adding and subtracting",
  "abertura": "At the neighborhood track and field festival, the long jump medal went to the wrong athlete. The judge wrote down the measurements with decimal points… and someone got mixed up. Redo the math and find out who really won.",
  "palavra": "TAPE",
  "concreto": "Use a sewing tape measure or a retractable tape measure: your child measures 3.35 m on the floor and sees how much is missing to reach 4 m. In stage 3, they mark Sofia's three jumps one after the other before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 3 in their own words. If not yet, redo just that stage another day with different numbers (e.g., a total of 11 m, jumps of 3.85 m and 3.6 m).",
  "solucao": "The judge wrote down Sofia's 3rd jump as 3.45 m, but the measuring TAPE showed 4.35 m. With the right measurement, Sofia jumped 0.55 m more than Rui, and the medal went back to her.",
  "etapas": [
   {
    "titulo": "How much is missing to reach 4 m",
    "curta": true,
    "enunciado": "Rui jumped 3.35 m. How much was he missing to reach 4 m?",
    "r": "0.65 m",
    "conta": "4.00 − 3.35 = 0.65 m",
    "ev": "1.35 m",
    "erro": "subtracted only the 3 (4 − 3 = 1) and copied the 0.35 without subtracting.",
    "pensar": "Write 4 as 4.00 and subtract with the decimal points lined up: 4.00 − 3.35.",
    "apoio": "“From 3.35 to 3.40, how much is missing? And from 3.40 to 4.00?”"
   },
   {
    "titulo": "Rui's two jumps",
    "enunciado": "Rui made 2 jumps: 3.35 m and 3.8 m. How many meters do the two jumps add up to?",
    "r": "7.15 m",
    "conta": "3.35 + 3.80 = 7.15 m",
    "ev": "6.43 m",
    "erro": "read 3.8 as 3.08 and added without lining up the decimal points.",
    "pensar": "Write 3.8 as 3.80 and add with the decimal points lined up.",
    "apoio": "“Is 3.8 the same as 3.80 or as 3.08?”"
   },
   {
    "titulo": "Sofia's 3rd jump",
    "enunciado": "Sofia made 3 jumps, which add up to 12 m. The 1st measured 3.95 m and the 2nd, 3.7 m. How much did the 3rd jump measure?",
    "r": "4.35 m",
    "conta": "3.95 + 3.70 = 7.65 · 12.00 − 7.65 = 4.35 m",
    "ev": "8.05 m",
    "erro": "subtracted only the 1st jump and forgot about the 2nd.",
    "pensar": "The sum of the 3 jumps is the whole. Put the known parts together and take them away from the whole.",
    "apoio": "“How many parts do you already know? What do they add up to?”",
    "desenho": {
     "nivel": "livre",
     "instrucao": "Before doing the math, draw the problem with a bar: the whole and the 3 parts. Put a <b>?</b> on what you want to find out.",
     "molde": null,
     "modelo": [
      {
       "total": "12 m",
       "partes": [
        {
         "u": 395,
         "t": "3.95 m"
        },
        {
         "u": 370,
         "t": "3.7 m"
        },
        {
         "u": 435,
         "t": "?"
        }
       ]
      }
     ],
     "explica": "Part-whole with decimals and 3 parts: the two known parts add up to 7.65 m; the missing one is 12.00 − 7.65."
    }
   },
   {
    "titulo": "The real winner",
    "enunciado": "Sofia's 3rd jump was written down as 3.45 m, but the right measurement is 4.35 m. Rui's best jump was 3.8 m. With the right measurement, how many meters farther did Sofia jump than Rui?",
    "r": "0.55 m",
    "conta": "4.35 − 3.80 = 0.55 m",
    "ev": "0.35 m",
    "erro": "used the wrong measurement that was written down (3.45) and thought Rui won.",
    "pensar": "Compare Sofia's right measurement (4.35) with Rui's (3.80).",
    "apoio": "“Which of Sofia's measurements is the right one? Now compare it with 3.80.”"
   }
  ]
 },
 {
  "id": "n3-02-sucos",
  "nivel": "Level 3 · Mission 3-02",
  "titulo": "The Case of the Juice Factory",
  "icone": "garrafa",
  "tempo": "25 to 35 minutes",
  "praticas": "proportion through the unit: find 1 and then the total",
  "abertura": "The juice factory's machine always fills bottles at the same pace, but nobody wrote that pace down. The manager wants to know how many bottles will come out by the end of the day.",
  "palavra": "LIME",
  "concreto": "Use bottles and a measuring cup (or identical cups): your child sees how many 500 mL cups fill 2 L. In stage 2, they set aside 2 small bottles per liter before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“first I found what 1 piece is worth”). If not yet, redo just that stage another day with different numbers (e.g., 3 bottles = 1.5 L; how many in 6 L?).",
  "solucao": "The machine fills 2 bottles per minute, and the 450 L tank makes 900 bottles of LIME juice: a whole day of work.",
  "etapas": [
   {
    "titulo": "The bottles",
    "curta": true,
    "enunciado": "Each bottle holds 500 mL. How many liters do 4 bottles hold?",
    "r": "2 L",
    "conta": "4 × 500 = 2,000 mL = 2 L",
    "ev": "20 L",
    "erro": "thought 1 L has 100 mL.",
    "pensar": "4 bottles of 500 mL make 2,000 mL. Every 1,000 mL is 1 L.",
    "apoio": "“How many mL are in 1 L? And how many mL do the 4 bottles hold?”"
   },
   {
    "titulo": "The machine's pace",
    "enunciado": "With 2 L of juice, the machine fills 4 bottles. How many bottles does it fill with 7 L?",
    "r": "14",
    "conta": "4 ÷ 2 = 2 bottles per liter · 7 × 2 = 14",
    "ev": "28",
    "erro": "multiplied 7 × 4, as if each liter filled 4 bottles.",
    "pensar": "First find what 1 L is worth (2 bottles). Then, 7 L.",
    "apoio": "“If 2 L fill 4 bottles, how many does 1 L fill?”",
    "desenho": {
     "nivel": "livre",
     "instrucao": "Before doing the math, draw the problem with bars made of equal pieces (1 piece = 1 bottle). Put a <b>?</b> on what you want to find out.",
     "molde": null,
     "modelo": [
      {
       "nome": "2 L",
       "partes": [
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        }
       ]
      },
      {
       "nome": "7 L",
       "total": "? bottles",
       "partes": [
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        },
        {
         "u": 1,
         "t": "0.5"
        }
       ]
      }
     ],
     "explica": "Each piece is 1 bottle of 0.5 L. 14 pieces that size fit in 7 L."
    }
   },
   {
    "titulo": "One hour of the machine",
    "enunciado": "The machine fills 6 bottles every 3 minutes. How many bottles does it fill in 1 hour (60 minutes)?",
    "r": "120",
    "conta": "6 ÷ 3 = 2 bottles per minute · 60 × 2 = 120",
    "ev": "360",
    "erro": "used 6 bottles per minute, not every 3 minutes.",
    "pensar": "Find how many it fills in 1 minute and then in 60.",
    "apoio": "“In 1 minute, how many bottles? And in 60?”"
   },
   {
    "titulo": "The tank",
    "enunciado": "The factory's tank holds 450 L of juice. How many 500 mL bottles can it fill?",
    "r": "900",
    "conta": "1 L fills 2 bottles · 450 × 2 = 900",
    "ev": "225",
    "erro": "divided by 2 instead of multiplying (each liter fills 2 bottles).",
    "pensar": "Each liter fills 2 half-liter bottles. 450 liters fill 450 × 2.",
    "apoio": "“How many bottles does 1 L fill? And 450 L?”"
   }
  ]
 },
 {
  "id": "n3-03-robot",
  "icone": "robo",
  "tempo": "25 to 35 minutes",
  "palavra": "CORD",
  "titulo": "The Riddle of the Robot Vacuum",
  "nivel": "Level 3 · Mission 3-03",
  "praticas": "fractions, decimals, patterns in a table, and proportion",
  "abertura": "The family's robot vacuum started acting strange: it cleans half the living room and stops partway. Before calling a technician, the family decided to investigate the robot's logs. The investigation is yours.",
  "concreto": "A strip of paper helps: folded into 4, it shows 3/4 of the battery (stage 1). For stage 4, cut out small paper squares: each one is 1 minute of cleaning.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 4 in their own words. If not yet, redo just that stage another day with different numbers (e.g., 15 m² in 3 minutes, a 45 m² living room).",
  "solucao": "The charger CORD was partly loose: the battery never got above 3/4 and lasted only 5 minutes — half of the 10 minutes the living room needs. That's why the robot cleaned half and stopped. Cord back in place, robot fixed!",
  "etapas": [
   {
    "curta": true,
    "titulo": "The battery",
    "enunciado": "The robot's full battery has 100 energy points. The screen shows it's at 3/4 charge. How many energy points does the robot have?",
    "r": "75",
    "conta": "100 ÷ 4 = 25 · 3 × 25 = 75",
    "ev": "25",
    "erro": "calculated only 1/4 (or what's missing to fill it up).",
    "pensar": "Split 100 into 4 parts (25 each) and take 3 of them.",
    "apoio": "“What is one quarter of 100? And three quarters?” Drawing a bar split into 4 parts helps."
   },
   {
    "titulo": "The robot's path",
    "enunciado": "On its first run, the robot went 2.4 m in a straight line, turned, and went another 1.85 m. How many meters did it travel in all?",
    "r": "4.25 m",
    "conta": "2.40 + 1.85 = 4.25",
    "ev": "3.89 m",
    "erro": "added without lining up the decimal points (did 4 + 85 = 89).",
    "pensar": "Write 2.4 as 2.40 and add with the decimal points lined up: 2.40 + 1.85.",
    "apoio": "“Is 2.4 the same as 2.40? Now add centimeters to centimeters.”"
   },
   {
    "titulo": "The energy log",
    "enunciado": "The robot records its energy while it cleans: at minute 0, 75 points; at minute 1, 60; at minute 2, 45; at minute 3, 30. If it keeps using energy the same way, at what minute does the energy reach zero?",
    "r": "5 min",
    "conta": "uses 15 points per minute · 75 ÷ 15 = 5 minutes (or continue the table: minute 4 = 15, minute 5 = 0)",
    "ev": "4 min",
    "erro": "counted only 1 more minute after minute 3.",
    "pensar": "Find out how much the energy drops per minute (15 points) and continue the table until it reaches zero.",
    "apoio": "“How much does the energy drop from one minute to the next? Continue the table: minute 4, minute 5…”"
   },
   {
    "titulo": "The whole room",
    "enunciado": "The robot cleans 12 m² in 3 minutes. The living room is 40 m². Without stopping, how many minutes would it take to clean the whole room?",
    "r": "10 min",
    "conta": "12 ÷ 3 = 4 m² per minute · 40 ÷ 4 = 10 minutes",
    "ev": "3 min",
    "erro": "repeated the time from the example, without seeing that the room is bigger.",
    "pensar": "Find out how much it cleans in 1 minute (12 ÷ 3 = 4 m²) and how many minutes it takes to do 40 m².",
    "apoio": "“Draw a bar with 3 equal pieces that together are worth 12 m². How much is 1 piece worth? Now draw pieces that size until you reach 40 m². How many pieces?”",
    "desenho": {
     "nivel": "livre",
     "instrucao": "Before doing the math, draw the problem with bars made of equal pieces (1 piece = 1 minute of cleaning). Put a <b>?</b> on what you want to find out.",
     "explica": "Each piece is 1 minute of cleaning (4 m²). To cover 40 m², you need 10 pieces, which means 10 minutes.",
     "molde": null,
     "modelo": [
      {
       "nome": "3 min",
       "total": "12 m²",
       "partes": [
        {
         "u": 1,
         "t": "4"
        },
        {
         "u": 1,
         "t": "4"
        },
        {
         "u": 1,
         "t": "4"
        }
       ]
      },
      {
       "nome": "? min",
       "total": "40 m²",
       "partes": [
        {
         "u": 1,
         "t": "4"
        },
        {
         "u": 1,
         "t": "4"
        },
        {
         "u": 1,
         "t": "4"
        },
        {
         "u": 1,
         "t": "4"
        },
        {
         "u": 1,
         "t": "4"
        },
        {
         "u": 1,
         "t": "4"
        },
        {
         "u": 1,
         "t": "4"
        },
        {
         "u": 1,
         "t": "4"
        },
        {
         "u": 1,
         "t": "4"
        },
        {
         "u": 1,
         "t": "4"
        }
       ]
      }
     ]
    }
   }
  ]
 },
 {
  "id": "n3-04-aboboras",
  "nivel": "Level 3 · Mission 3-04",
  "titulo": "The Secret of the Two Contest Pumpkins",
  "icone": "abobora",
  "tempo": "25 to 35 minutes",
  "praticas": "sum and difference: finding the two parts",
  "abertura": "At the fair's pumpkin contest, two pumpkins were weighed together by mistake: 9 kg. The judge only remembers that the orange one weighed 1.4 kg more than the green one. The contest record is 5.05 kg. Did either of them break the record?",
  "palavra": "MASS",
  "concreto": "Use two pieces of string: one longer than the other. In stage 2, your child cuts the “extra” piece off the longer one and sees that two equal pieces are left, before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“I took away the extra piece and two equal bars were left”). If not yet, redo just that stage another day with different numbers (e.g., 7 kg together, one weighs 0.8 kg more).",
  "solucao": "The orange pumpkin won the trophy: 5.2 kg, the contest's new record. The right MASS came out of the drawing of the two bars.",
  "etapas": [
   {
    "titulo": "Kilograms into grams",
    "curta": true,
    "enunciado": "How many grams is 1.4 kg?",
    "r": "1,400 g",
    "conta": "1.4 × 1,000 = 1,400 g",
    "ev": "140 g",
    "erro": "multiplied by 100 instead of 1,000.",
    "pensar": "1 kg has 1,000 g. 1.4 kg is 1,000 g plus 4 tenths of 1,000 (400 g).",
    "apoio": "“How many grams are in 1 kg? And in 0.4 kg?”"
   },
   {
    "titulo": "The green pumpkin",
    "enunciado": "Together, the two pumpkins weigh 9 kg, and the orange one weighs 1.4 kg more than the green one. How much does the green pumpkin weigh?",
    "r": "3.8 kg",
    "conta": "9 − 1.4 = 7.6 · 7.6 ÷ 2 = 3.8 kg",
    "ev": "7.6 kg",
    "erro": "subtracted the 1.4 and forgot to divide by 2.",
    "pensar": "Take away the “extra” piece (1.4). What's left is two equal bars: divide by 2.",
    "apoio": "“If the orange one didn't have the extra 1.4, the two would be equal. How much would they weigh together?”",
    "desenho": {
     "nivel": "livre",
     "junto": "9 kg",
     "instrucao": "Before doing the math, draw one bar for each pumpkin, lined up on the left, showing the “extra” piece. Mark the total of the two and put a <b>?</b> on what you want to find out.",
     "molde": null,
     "modelo": [
      {
       "nome": "Orange",
       "partes": [
        {
         "u": 38,
         "t": " "
        },
        {
         "u": 14,
         "t": "1.4 kg"
        }
       ]
      },
      {
       "nome": "Green",
       "partes": [
        {
         "u": 38,
         "t": "?"
        }
       ]
      }
     ],
     "explica": "Taking away the 1.4 kg piece, 2 equal bars are left that together weigh 7.6 kg. Each one is worth 3.8 kg."
    }
   },
   {
    "titulo": "The orange pumpkin",
    "enunciado": "The green one weighs 3.8 kg. How much does the orange pumpkin, which has 1.4 kg more, weigh?",
    "r": "5.2 kg",
    "conta": "3.8 + 1.4 = 5.2 kg",
    "ev": "2.4 kg",
    "erro": "subtracted the extra piece instead of adding it.",
    "pensar": "The orange one is the green one plus the extra piece.",
    "apoio": "“Is the orange one heavier or lighter than the green one?”"
   },
   {
    "titulo": "The record",
    "enunciado": "Last year's record was 5.05 kg. By how many kilograms did the orange pumpkin (5.2 kg) break the record?",
    "r": "0.15 kg",
    "conta": "5.20 − 5.05 = 0.15 kg",
    "ev": "10.25 kg",
    "erro": "added instead of comparing.",
    "pensar": "Write 5.2 as 5.20 and subtract with the decimal points lined up.",
    "apoio": "“Is 5.2 the same as 5.20? How much is missing from 5.05 up to 5.20?”"
   }
  ]
 },
 {
  "id": "n3-05-cofre",
  "nivel": "Level 3 · Mission 3-05",
  "titulo": "The Locked Safe Mystery",
  "icone": "cofre",
  "tempo": "25 to 35 minutes",
  "praticas": "before and after: what changes and what stays the same",
  "abertura": "Nina and Caio keep the points from a board game in a paper safe. After a trade, the two ended up with the same amount, but nobody remembers how many Nina gave. The game notebook has the clues.",
  "palavra": "GAME",
  "concreto": "Make two rows of bottle caps (one cap = 10 points): 35 for Nina and 21 for Caio. In stage 2, your child moves caps from one row to the other until they're equal, before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“the difference was split in half”). If not yet, redo just that stage another day with different numbers (e.g., Nina 420, Caio 260).",
  "solucao": "Nina gave 70 points and the two ended up with 280. The trade was fair and the GAME went on: in the next round, each one ended up with 224.",
  "etapas": [
   {
    "titulo": "Nina's points",
    "curta": true,
    "enunciado": "Nina won 50 points in a round and reached 350. How many points did she have before?",
    "r": "300",
    "conta": "350 − 50 = 300",
    "ev": "400",
    "erro": "added instead of going back to before the round.",
    "pensar": "Before winning, she had 50 fewer: 350 − 50.",
    "apoio": "“Before the round, did Nina have more or less than 350?”"
   },
   {
    "titulo": "The trade",
    "enunciado": "Nina had 350 points and Caio, 210. Nina gave some points to Caio and the two ended up with the same amount. How many points did Nina give?",
    "r": "70",
    "conta": "350 − 210 = 140 · 140 ÷ 2 = 70",
    "ev": "140",
    "erro": "gave the whole difference, and then Caio ended up with more.",
    "pensar": "The difference is 140. To tie, half of the difference goes from one to the other.",
    "apoio": "“If Nina gives 140, who ends up with more? And if she gives half?”",
    "desenho": {
     "nivel": "livre",
     "instrucao": "Before doing the math, draw Nina's and Caio's bars before the trade and, underneath, after the trade. Show the difference and put a <b>?</b> on the piece Nina gives.",
     "molde": null,
     "modelo": [
      {
       "nome": "Nina before",
       "partes": [
        {
         "u": 210,
         "t": "210"
        },
        {
         "u": 70,
         "t": "70 stays"
        },
        {
         "u": 70,
         "t": "? gives"
        }
       ]
      },
      {
       "nome": "Caio before",
       "partes": [
        {
         "u": 210,
         "t": "210"
        }
       ]
      },
      {
       "nome": "Nina after",
       "partes": [
        {
         "u": 210,
         "t": "210"
        },
        {
         "u": 70,
         "t": "70"
        }
       ]
      },
      {
       "nome": "Caio after",
       "partes": [
        {
         "u": 210,
         "t": "210"
        },
        {
         "u": 70,
         "t": "70"
        }
       ]
      }
     ],
     "explica": "Before: the difference (140) is split in half; one piece stays with Nina and the other goes to Caio. After: the two bars are equal, with 280."
    }
   },
   {
    "titulo": "After the trade",
    "enunciado": "After the trade, how many points did each one end up with?",
    "r": "280",
    "conta": "350 − 70 = 280 (and 210 + 70 = 280)",
    "ev": "210",
    "erro": "forgot to add the 70 that Caio received.",
    "pensar": "Nina lost 70; Caio gained 70. Check both sides.",
    "apoio": "“How much does Nina have now? And Caio? Is it equal?”"
   },
   {
    "titulo": "The next round",
    "enunciado": "In the next round, each one spent 1/5 of their 280 points. How many points did each one end up with?",
    "r": "224",
    "conta": "280 ÷ 5 = 56 · 280 − 56 = 224",
    "ev": "56",
    "erro": "answered what was spent, not what was left.",
    "pensar": "Find 1/5 of 280 (what was spent) and take it away from 280.",
    "apoio": "“Is the question what was spent or what was left?”"
   }
  ]
 },
 {
  "id": "n3-06-gude",
  "nivel": "Level 3 · Mission 3-06",
  "titulo": "The Case of the Marble Jar",
  "icone": "pote",
  "tempo": "25 to 35 minutes",
  "praticas": "fraction of what was left (1/3 and then 1/4 of the rest)",
  "abertura": "The family's marble jar had 240 marbles. Over 2 days, the family lent marbles to friends to play with, and the jar got pretty empty. How many marbles are in the jar now?",
  "palavra": "LOAN",
  "concreto": "Use a strip of paper divided into 6 equal parts: your child crosses out 2 parts (1/3) and then 1 part of the 4 that are left (1/4 of the rest), before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“the 1/4 is of what was left, not of the whole jar”). If not yet, redo just that stage another day with different numbers (e.g., 180 marbles).",
  "solucao": "The jar ended up with 156 marbles. The other 84 are still on LOAN, and now the family writes down every loan.",
  "etapas": [
   {
    "titulo": "The 1st day",
    "curta": true,
    "enunciado": "On the 1st day, the family lent 1/3 of the 240 marbles to friends to play with. How many marbles did they lend?",
    "r": "80",
    "conta": "240 ÷ 3 = 80",
    "ev": "237",
    "erro": "subtracted 3 instead of finding 1/3.",
    "pensar": "1/3 is 1 of the 3 equal pieces: 240 ÷ 3.",
    "apoio": "“Divide 240 into 3 equal parts. How many are in each one?”"
   },
   {
    "titulo": "The 2nd day",
    "enunciado": "On the 2nd day, the family lent 1/4 of what was left in the jar. How many marbles were left in the jar?",
    "r": "120",
    "conta": "240 − 80 = 160 · 160 ÷ 4 = 40 · 160 − 40 = 120",
    "ev": "100",
    "erro": "found 1/4 of the whole jar, not of what was left.",
    "pensar": "First, what was left after the 1st day (160). The 1/4 is of that rest.",
    "apoio": "“Is the 1/4 of the 240 or of the ones that were left?”",
    "desenho": {
     "nivel": "livre",
     "instrucao": "Before doing the math, draw the bar for the whole jar. Separate the 1st day's loan; then divide what's left into 4 and separate 1 piece. Put a <b>?</b> on what you want to find out.",
     "molde": null,
     "modelo": [
      {
       "total": "240",
       "partes": [
        {
         "u": 2,
         "t": "80",
         "cinza": true
        },
        {
         "u": 1,
         "t": "40",
         "cinza": true
        },
        {
         "u": 3,
         "t": "?"
        }
       ]
      }
     ],
     "explica": "The 1st day takes 1/3 (80). The rest (160) is divided into 4 pieces of 40; 1 is lent on the 2nd day. 3 pieces are left: 120."
    }
   },
   {
    "titulo": "The ones that came back",
    "enunciado": "The friends returned 3/10 of the 120 marbles they had borrowed. How many marbles came back?",
    "r": "36",
    "conta": "120 ÷ 10 = 12 · 3 × 12 = 36",
    "ev": "12",
    "erro": "found only 1/10 and forgot to take 3 pieces.",
    "pensar": "Divide 120 into 10 parts and take 3.",
    "apoio": "“What is 1/10 of 120? And 3/10?”"
   },
   {
    "titulo": "The jar now",
    "enunciado": "The jar had 120 marbles and 36 came back. How many marbles are in the jar now?",
    "r": "156",
    "conta": "120 + 36 = 156",
    "ev": "84",
    "erro": "subtracted instead of adding the ones that came back.",
    "pensar": "The ones that came back join the ones that were in the jar.",
    "apoio": "“Is going back into the jar putting together or taking away?”"
   }
  ]
 },
 {
  "id": "n3-07-receita",
  "nivel": "Level 3 · Mission 3-07",
  "titulo": "The Riddle of the Giant Recipe",
  "icone": "bolo",
  "tempo": "25 to 35 minutes",
  "praticas": "unequal parts (ratio 3 : 2) with a total in grams",
  "abertura": "For the neighborhood party, the cake recipe was tripled. But the cake flopped! In the recipe, for every 3 parts of flour there are 2 parts of sugar. Where was the mistake?",
  "palavra": "EGGS",
  "concreto": "Use identical small cups: 3 cups of rice (flour) and 2 of coarse salt (sugar). In stage 2, your child sees that the mix has 5 equal cups before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“there are 5 equal pieces: 3 of flour and 2 of sugar”). If not yet, redo just that stage another day with different numbers (e.g., 1,000 g in the ratio 3 : 2).",
  "solucao": "The mistake was in the EGGS: the flour and the sugar were tripled, but the eggs weren't. The right recipe takes 9 eggs, and the cake times 3 turned out right on the second try.",
  "etapas": [
   {
    "titulo": "The recipe's eggs",
    "curta": true,
    "enunciado": "The normal recipe takes 3 eggs. Tripled, how many eggs does it take?",
    "r": "9",
    "conta": "3 × 3 = 9",
    "ev": "6",
    "erro": "added 3 instead of tripling.",
    "pensar": "Tripling is taking it 3 times: 3 + 3 + 3.",
    "apoio": "“If you make the recipe 3 times, how many eggs do you use?”"
   },
   {
    "titulo": "The flour",
    "enunciado": "The flour and sugar mix for the tripled recipe weighs 1,500 g, with 3 parts of flour for every 2 of sugar. How many grams of flour?",
    "r": "900 g",
    "conta": "3 + 2 = 5 parts · 1,500 ÷ 5 = 300 · 3 × 300 = 900 g",
    "ev": "500 g",
    "erro": "divided by 3, without counting the 5 parts of the mix.",
    "pensar": "The mix has 5 equal parts (3 + 2). Find what 1 part is worth and take 3.",
    "apoio": "“How many parts does the mix have in all? What is each one worth?”",
    "desenho": {
     "nivel": "livre",
     "junto": "1,500 g",
     "instrucao": "Before doing the math, draw one bar for the flour and another for the sugar, with equal pieces (3 and 2). Mark the total of the two and put a <b>?</b> on what you want to find out.",
     "molde": null,
     "modelo": [
      {
       "nome": "Flour",
       "total": "?",
       "partes": [
        {
         "u": 1,
         "t": "300"
        },
        {
         "u": 1,
         "t": "300"
        },
        {
         "u": 1,
         "t": "300"
        }
       ]
      },
      {
       "nome": "Sugar",
       "partes": [
        {
         "u": 1,
         "t": "300"
        },
        {
         "u": 1,
         "t": "300"
        }
       ]
      }
     ],
     "explica": "There are 5 equal pieces that together weigh 1,500 g. Each piece is worth 300 g; the flour is 3 pieces."
    }
   },
   {
    "titulo": "The sugar",
    "enunciado": "And how many grams of sugar go in the 1,500 g mix?",
    "r": "600 g",
    "conta": "2 × 300 = 600 g (or 1,500 − 900)",
    "ev": "750 g",
    "erro": "split the mix in half, as if the parts were equal.",
    "pensar": "The sugar is 2 of the 5 pieces of 300 g.",
    "apoio": "“How many 300 g pieces are sugar?”"
   },
   {
    "titulo": "The eggs in the batter",
    "enunciado": "The batter that flopped had only 165 g of egg. Each egg weighs 55 g. How many eggs were used?",
    "r": "3",
    "conta": "165 ÷ 55 = 3 (55 + 55 + 55 = 165)",
    "ev": "110",
    "erro": "subtracted one egg instead of seeing how many 55 g eggs fit into 165 g.",
    "pensar": "How many times does 55 fit into 165? Add 55 until you reach 165.",
    "apoio": "“How much do 2 eggs weigh? And 3?”"
   }
  ]
 },
 {
  "id": "n3-08-loja",
  "nivel": "Level 3 · Mission 3-08",
  "titulo": "The Mystery of the Game Shop",
  "icone": "escudo",
  "tempo": "25 to 35 minutes",
  "praticas": "simple percentages: 10%, 25%, and 50% in game points",
  "abertura": "In the shop of the family's adventure game, the items got discounts. But the cart total doesn't match the prices in the shop window. Find out which item has the wrong price.",
  "palavra": "HELM",
  "concreto": "Use a strip of paper: fold it into 10 (10%), into 4 (25%), and into 2 (50%). In stage 2, your child folds the strip into 4 and crosses out 1 part before drawing.",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 2 in their own words (“25% is 1 of 4 pieces”). If not yet, redo just that stage another day with different numbers (e.g., a 25% discount on 360 points).",
  "solucao": "The cart charged 250 points for the HELM, without the 50% discount. With the right price (125), the cart total adds up.",
  "etapas": [
   {
    "titulo": "The sword's discount",
    "curta": true,
    "enunciado": "The sword costs 300 points and has a 10% discount. How many points is the discount?",
    "r": "30",
    "conta": "10% = 1/10 · 300 ÷ 10 = 30",
    "ev": "290",
    "erro": "took off 10 points instead of 10%.",
    "pensar": "10% is 1 of 10 equal pieces: 300 ÷ 10.",
    "apoio": "“If 300 were divided into 10 pieces, what would one be worth?”"
   },
   {
    "titulo": "The shield",
    "enunciado": "The shield costs 480 points and has a 25% discount. How much does it cost now?",
    "r": "360",
    "conta": "25% = 1/4 · 480 ÷ 4 = 120 · 480 − 120 = 360",
    "ev": "120",
    "erro": "answered the discount, not the new price.",
    "pensar": "25% is 1 of 4 pieces. Find the piece (the discount) and take it off the price.",
    "apoio": "“Is the question the discount or the price after the discount?”",
    "desenho": {
     "nivel": "livre",
     "instrucao": "Before doing the math, draw the bar for the full price divided into 4 equal pieces (25% = 1 piece). Put a <b>?</b> on what you want to find out.",
     "molde": null,
     "modelo": [
      {
       "total": "480",
       "partes": [
        {
         "u": 1,
         "t": "120",
         "cinza": true
        },
        {
         "u": 3,
         "t": "?"
        }
       ]
      }
     ],
     "explica": "The shaded piece is the discount (480 ÷ 4 = 120). The new price is the 3 white pieces: 360."
    }
   },
   {
    "titulo": "The helm",
    "enunciado": "The helm costs 250 points and has a 50% discount. How much does it cost now?",
    "r": "125",
    "conta": "50% = half · 250 ÷ 2 = 125",
    "ev": "200",
    "erro": "took off 50 points instead of 50%.",
    "pensar": "50% is half: 250 ÷ 2.",
    "apoio": "“What is half of 250?”"
   },
   {
    "titulo": "The cart",
    "enunciado": "In the cart are the discounted sword (270), the discounted shield (360), and the helm. The cart total came to 880 points. What price for the helm did the cart use?",
    "r": "250",
    "conta": "270 + 360 = 630 · 880 − 630 = 250",
    "ev": "630",
    "erro": "answered the sum of the other two items.",
    "pensar": "The cart is the whole. The sword and the shield are known parts. The helm is what's missing.",
    "apoio": "“How much do the sword and the shield cost together? How much is missing to reach 880?”"
   }
  ]
 },
 {
  "id": "n3-09-jardim",
  "nivel": "Level 3 · Mission 3-09",
  "titulo": "The Case of the Rectangular Garden",
  "icone": "cerca",
  "tempo": "25 to 35 minutes",
  "praticas": "perimeter (m) and area (m²)",
  "abertura": "The family bought new wire fencing to fence in the rectangular garden, but it wasn't enough to close it all. The store swears it sent the right measurement. Who got the math wrong?",
  "palavra": "WIRE",
  "concreto": "On a sheet of graph paper, your child draws the garden 12 squares long and 8 squares wide and counts the squares inside (area) and the sides outside (perimeter).",
  "dominio": "You can move on to the next mission when your child explains the drawing in stage 3 in their own words. If not yet, redo just that stage another day with different numbers (e.g., a 10 m by 6 m garden, 27.5 m of wire fencing).",
  "solucao": "5.5 m of WIRE fencing was missing: the store sent 34.5 m, but the garden is 40 m all the way around. With 3 more rolls, the fence was closed.",
  "etapas": [
   {
    "titulo": "The garden's area",
    "curta": true,
    "enunciado": "The garden is 12 m long and 8 m wide. What is the area of the garden?",
    "r": "96 m²",
    "conta": "12 × 8 = 96 m²",
    "ev": "20 m²",
    "erro": "added the sides instead of multiplying.",
    "pensar": "The area counts the 1 m² squares inside: 12 rows of 8.",
    "apoio": "“On the graph paper, how many squares fit inside the garden?”"
   },
   {
    "titulo": "The vegetable patch",
    "enunciado": "Half of the garden's area (96 m²) will become a vegetable patch. How many m² of vegetable patch?",
    "r": "48 m²",
    "conta": "96 ÷ 2 = 48 m²",
    "ev": "94 m²",
    "erro": "subtracted 2 instead of dividing in half.",
    "pensar": "Half is dividing into 2 equal parts: 96 ÷ 2.",
    "apoio": "“If the garden were divided into 2 equal parts, how much would each one have?”"
   },
   {
    "titulo": "The missing fencing",
    "enunciado": "The garden measures 12 m by 8 m, and the store sent 34.5 m of wire fencing. How many meters are missing to close the whole way around the garden?",
    "r": "5.5 m",
    "conta": "12 + 8 + 12 + 8 = 40 · 40.0 − 34.5 = 5.5 m",
    "ev": "74.5 m",
    "erro": "added the fencing to the way around instead of seeing what's missing.",
    "pensar": "First the whole way around (the 4 sides). It is the whole; the fencing is one part; what's missing is the other.",
    "apoio": "“How long is the way around the garden? From 34.5 up to that, how many meters are missing?”",
    "desenho": {
     "nivel": "livre",
     "instrucao": "Before doing the math, draw the way around the garden as a bar: the whole (the 4 sides) and the part the fencing covers. Put a <b>?</b> on what you want to find out.",
     "molde": null,
     "modelo": [
      {
       "total": "40 m (12 + 8 + 12 + 8)",
       "partes": [
        {
         "u": 345,
         "t": "34.5 m"
        },
        {
         "u": 55,
         "t": "?"
        }
       ]
      }
     ],
     "explica": "The perimeter (12 + 8 + 12 + 8 = 40 m) is the whole; the fencing that arrived is one part. What's missing is 40 − 34.5."
    }
   },
   {
    "titulo": "The rolls",
    "enunciado": "The wire fencing is sold in 2.5 m rolls. How many rolls does the family need to buy to cover the 5.5 m that are missing?",
    "r": "3",
    "conta": "2 rolls = 5 m (not enough) · 3 rolls = 7.5 m: 3 rolls",
    "ev": "2",
    "erro": "bought 2 rolls, which make only 5 m and don't close the fence.",
    "pensar": "Add 2.5 m rolls until you go past 5.5 m.",
    "apoio": "“With 2 rolls, how many meters do you have? Is it enough?”"
   }
  ]
 },
 {
  "id": "n3-10-estacao",
  "nivel": "Level 3 · Mission 3-10",
  "titulo": "The Great Space Station Mystery",
  "icone": "foguete",
  "tempo": "30 to 45 minutes",
  "fechamento": true,
  "praticas": "Level 3 Final Mission: sum and difference, fraction of what was left, unequal parts, and before and after",
  "abertura": "On the game's space station, the oxygen is running out faster than expected. The commander needs to find the problem before the end of the shift. Use the 4 drawings from Level 3.",
  "palavra": "TUBE",
  "concreto": "Use paper strips and scissors: your child cuts, folds, and compares strips to check each stage before drawing.",
  "dominio": "This is the Level 3 Final Mission. Your child completes Math Missions when the code word works out and they explain at least 3 of the 4 drawings on their own. If not yet, redo just the drawings that were hard another day, with different numbers, and come back to this mission.",
  "solucao": "400 L were left, 50 L less than expected: the oxygen was leaking through a loose TUBE between the tanks. With the tube fixed, the commander balanced the cabin and the lab with 200 L each. Mission accomplished!",
  "etapas": [
   {
    "titulo": "The two tanks",
    "enunciado": "Together, the 2 oxygen tanks hold 1,200 L. Tank A has 300 L more than tank B. How many liters does tank A hold?",
    "r": "750 L",
    "conta": "1,200 − 300 = 900 · 900 ÷ 2 = 450 (tank B) · 450 + 300 = 750 L",
    "ev": "450 L",
    "erro": "found tank B and forgot to add tank A's extra 300 L.",
    "pensar": "Take away the “extra” piece, divide the rest by 2 (that's B), and add the piece back to find A.",
    "apoio": "“Without the extra 300, the tanks would be equal. How much would each one have?”",
    "desenho": {
     "nivel": "livre",
     "junto": "1,200 L",
     "instrucao": "Draw one bar for each tank, showing the “extra” piece. Mark the total and put a <b>?</b> on what you want to find out.",
     "molde": null,
     "modelo": [
      {
       "nome": "Tank A",
       "total": "?",
       "partes": [
        {
         "u": 450,
         "t": "450"
        },
        {
         "u": 300,
         "t": "300"
        }
       ]
      },
      {
       "nome": "Tank B",
       "partes": [
        {
         "u": 450,
         "t": "450"
        }
       ]
      }
     ],
     "explica": "Sum and difference: without the 300 L, 2 equal bars of 450 L are left. Tank A is 450 + 300."
    }
   },
   {
    "titulo": "The shifts",
    "enunciado": "In the 1st shift, 1/5 of tank A (750 L) was used up. In the 2nd shift, 1/3 of what was left. The computer predicted 450 L at the end of the 2nd shift. How many liters were really left in tank A?",
    "r": "400 L",
    "conta": "750 ÷ 5 = 150 · 600 left · 600 ÷ 3 = 200 · 600 − 200 = 400 L",
    "ev": "350 L",
    "erro": "found 1/3 of the full tank, not of what was left.",
    "pensar": "First the 1st shift (1/5 of 750). The 1/3 of the 2nd shift is of what was left.",
    "apoio": "“Is the 1/3 of the 750 L or of what was left after the 1st shift?”",
    "desenho": {
     "nivel": "livre",
     "instrucao": "Draw the bar for tank A. Separate the 1st shift; then divide what's left into 3 and separate 1 piece. Put a <b>?</b> on what you want to find out.",
     "molde": null,
     "modelo": [
      {
       "total": "750 L",
       "partes": [
        {
         "u": 150,
         "t": "150",
         "cinza": true
        },
        {
         "u": 200,
         "t": "200",
         "cinza": true
        },
        {
         "u": 400,
         "t": "?"
        }
       ]
      }
     ],
     "explica": "Fraction of what was left: the 1st shift takes 150 L; of the 600 that are left, 1/3 (200) goes in the 2nd shift. 400 L are left."
    }
   },
   {
    "titulo": "Cabin and lab",
    "enunciado": "The remaining 400 L are divided between the cabin and the lab in the ratio 3 : 5. How many liters go to the cabin?",
    "r": "150 L",
    "conta": "3 + 5 = 8 parts · 400 ÷ 8 = 50 · 3 × 50 = 150 L",
    "ev": "240 L",
    "erro": "divided by 5 instead of by the 8 parts of the split.",
    "pensar": "The split has 8 equal parts (3 + 5). Find 1 part and take 3.",
    "apoio": "“How many parts are there in all? What is each part worth?”",
    "desenho": {
     "nivel": "livre",
     "junto": "400 L",
     "instrucao": "Draw one bar for the cabin and another for the lab, with equal pieces (3 and 5). Mark the total and put a <b>?</b> on what you want to find out.",
     "molde": null,
     "modelo": [
      {
       "nome": "Cabin",
       "total": "?",
       "partes": [
        {
         "u": 1,
         "t": "50"
        },
        {
         "u": 1,
         "t": "50"
        },
        {
         "u": 1,
         "t": "50"
        }
       ]
      },
      {
       "nome": "Lab",
       "partes": [
        {
         "u": 1,
         "t": "50"
        },
        {
         "u": 1,
         "t": "50"
        },
        {
         "u": 1,
         "t": "50"
        },
        {
         "u": 1,
         "t": "50"
        },
        {
         "u": 1,
         "t": "50"
        }
       ]
      }
     ],
     "explica": "Unequal parts: 8 pieces of 50 L. The cabin gets 3 pieces: 150 L."
    }
   },
   {
    "titulo": "The balance",
    "enunciado": "After the tube was fixed, the cabin has 150 L and the lab, 250 L. The commander wants the two to be equal. How many liters should go from the lab to the cabin?",
    "r": "50 L",
    "conta": "250 − 150 = 100 · 100 ÷ 2 = 50 L (the two end up with 200 L)",
    "ev": "100 L",
    "erro": "moved the whole difference, and then the cabin ended up with more.",
    "pensar": "To tie, move half of the difference.",
    "apoio": "“If 100 L go over, who ends up with more? And if half goes over?”",
    "desenho": {
     "nivel": "livre",
     "instrucao": "Draw the two bars before the transfer, lined up on the left. Show the difference and put a <b>?</b> on the piece that goes to the cabin.",
     "molde": null,
     "modelo": [
      {
       "nome": "Lab",
       "partes": [
        {
         "u": 150,
         "t": "150"
        },
        {
         "u": 50,
         "t": "?"
        },
        {
         "u": 50,
         "t": " "
        }
       ]
      },
      {
       "nome": "Cabin",
       "partes": [
        {
         "u": 150,
         "t": "150"
        }
       ]
      }
     ],
     "explica": "Before and after: the difference (100 L) is split in half. 50 L go over and the two end up with 200 L."
    }
   }
  ]
 }
];
for (const x of m) for (const e of x.etapas) { e.calc = () => e.r; e.ecalc = () => e.ev; }
module.exports = m;
