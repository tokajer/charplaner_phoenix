sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[9]=60;sCON[9]=80;sDEX[9]=50;sQUI[9]=50;sINT[9]=60;sPIE[9]=60;sEMP[9]=60;sCHA[9]=60; 
sSTR[11]=70;sCON[11]=70;sDEX[11]=50;sQUI[11]=50;sINT[11]=60;sPIE[11]=60;sEMP[11]=60;sCHA[11]=60; 
sSTR[12]=100;sCON[12]=70;sDEX[12]=35;sQUI[12]=35;sINT[12]=60;sPIE[12]=60;sEMP[12]=60;sCHA[12]=60; 
sSTR[15]=55;sCON[15]=45;sDEX[15]=65;sQUI[15]=75;sINT[15]=60;sPIE[15]=60;sEMP[15]=60;sCHA[15]=60; 

Abilities = new Array(19)		
Abilities[1]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[2]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[3]=new abilityPT("Leather Armor",0,100,7,0,0,0)
Abilities[4]=new abilityPT("Studded Armor",0,101,7,0,0,0)
Abilities[5]=new abilityPT("Parry",0,107,4,1,0,0)
Abilities[6]=new abilityPT("Sword",0,130,5,1,0,0)
Abilities[7]=new abilityPT("Axe",0,131,5,1,0,0)
Abilities[8]=new abilityPT("Hammer",0,137,5,1,0,0)
Abilities[9]=new abilityPT("Shields (Small)",2,102,7,0,0,0)
Abilities[10]=new abilityPT("Evade I",5,113,4,0,0,0)
Abilities[11]=new abilityPT("Left Axe",5,132,5,1,0,0)
Abilities[12]=new abilityPT("Berserk I",5,133,4,0,0,0)
Abilities[13]=new abilityPT("Protect I",10,109,4,0,0,0)
Abilities[14]=new abilityPT("Evade II",10,114,4,0,0,0)
Abilities[15]=new abilityPT("Berserk II",10,134,4,0,0,0)
Abilities[16]=new abilityPT("Berserk III",15,135,4,0,0,0)
Abilities[17]=new abilityPT("Evade III",20,115,4,0,0,0)
Abilities[18]=new abilityPT("Berserk IV",20,136,4,0,0,0)
Abilities[19]=new abilityPT("Advanced Evade",35,173,4,0,0,0)
	
//Styles = new Array(61);
//Styles[1]=new stylePT(131,"Splitter",2,"","High","Starter","","","","",0,"")
//Styles[2]=new stylePT(131,"Cleave",4,"Slowed","Low","Medium","Medium Bonus","","","You parry",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[3]=new stylePT(131,"Plague",6,"Taunt","Medium","Low","Medium Bonus","","Medium&nbsp;Penalty","",0,"")
//Styles[4]=new stylePT(131,"Thrym's Strength",8,"","Medium","Medium","Medium Bonus","","","[*] Cleave",0,"")
//Styles[5]=new stylePT(131,"Pillager",10,"Slowed","High","Medium","Low Bonus","","","",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[6]=new stylePT(131,"Hoarfrost",12,"Detaunt","Medium","","Low Bonus","Medium&nbsp;Bonus","","",0,"")
//Styles[7]=new stylePT(131,"Evernight",15,"Bleeding","Low","Medium","Medium Bonus","","","Behind target",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 6 Damage type Body Duration 35 seconds")
//Styles[8]=new stylePT(131,"Plunderer",18,"Hindered","Medium","Medium","Medium Bonus","","","[*] Pillager",0,"Reduces the target\'s movement speed.  Value 100% Duration 11 seconds")
//Styles[9]=new stylePT(131,"Valkyrie's Shield",21,"","Low","Medium","","Medium&nbsp;Bonus","","You block",0,"")
//Styles[10]=new stylePT(131,"Raider",25,"Bleeding","Low","High","","","","You evade",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 7 Damage type Body Duration 40 seconds")
//Styles[11]=new stylePT(131,"Havoc",29,"","Medium","High","Low Bonus","","Low&nbsp;Penalty","In front of target",0,"")
//Styles[12]=new stylePT(131,"Midnight Sun",34,"Stunned","Medium","Medium","High Bonus","","","[*] Valkyrie's Shield",0,"Stuns the target for a brief period of time.  Duration 6 seconds")
//Styles[13]=new stylePT(131,"Glacial Movement",39,"Slowed","Medium","Medium","Medium Bonus","","Low&nbsp;Penalty","To side of target",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[14]=new stylePT(131,"Arctic Rift",44,"","Low","High","Medium Bonus","","","[*] Evernight",0,"")
//Styles[15]=new stylePT(131,"Tyr's Fury",50,"Bleeding","Medium","High","High Bonus","","","[*] Havoc",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 9 Damage type Body Duration 40 seconds")
//Styles[16]=new stylePT(137,"Thor's Anvil",2,"","High","Starter","","","","",0,"")
//Styles[17]=new stylePT(137,"Crushing Blow",4,"Stunned","Low","Medium","Medium Bonus","","","You parry",0,"Stuns the target for a brief period of time.  Duration 2 seconds")
//Styles[18]=new stylePT(137,"Placate",6,"Detaunt","Medium","","","Medium&nbsp;Bonus","","",0,"")
//Styles[19]=new stylePT(137,"Slam",8,"Bleeding","Medium","Medium","Medium Bonus","","","[*] Crushing Blow",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 3 Damage type Body Duration 20 seconds")
//Styles[20]=new stylePT(137,"Ruiner",10,"","Medium","High","Low Bonus","","","",0,"")
//Styles[21]=new stylePT(137,"Frost Hammer",12,"Hindered","Medium","High","Medium Bonus","","","To side of target",0,"Reduces the target\'s movement speed.  Value 100% Duration 15 seconds")
//Styles[22]=new stylePT(137,"Provoke",15,"Taunt","Low","Low","Medium Bonus","","Medium&nbsp;Penalty","",0,"")
//Styles[23]=new stylePT(137,"Demolish",18,"Stunned","Medium","Medium","Medium Bonus","","","[*] Frost Hammer",0,"Stuns the target for a brief period of time.  Duration 2 seconds")
//Styles[24]=new stylePT(137,"Revenge",21,"Slowed","Low","Medium","Medium Bonus","","Low&nbsp;Penalty","You block",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[25]=new stylePT(137,"Crumble",25,"","Medium","High","Medium Bonus","","","[*] Ruiner",0,"")
//Styles[26]=new stylePT(137,"Conquer",29,"Hindered","Low","High","","","High&nbsp;Penalty","Behind target",0,"Reduces the target\'s movement speed.  Value 100% Duration 23 seconds")
//Styles[27]=new stylePT(137,"Thor's Answer",34,"Stunned","Medium","Medium","Medium Bonus","","","[*] Revenge",0,"Stuns the target for a brief period of time.  Duration 7 seconds")
//Styles[28]=new stylePT(137,"Lambast",39,"Bleeding","Low","Medium","Medium Bonus","Low&nbsp;Bonus","","You parry",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 9 Damage type Body Duration 40 seconds")
//Styles[29]=new stylePT(137,"Sledgehammer",44,"","Medium","High","High Bonus","","","[*] Conquer",0,"")
//Styles[30]=new stylePT(137,"Mjolnir's Fury",50,"Slowed","Medium","High","Medium Bonus","","","[*] Lambast",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[31]=new stylePT(132,"Counter Slash",2,"","High","Starter","","","","",0,"")
//Styles[32]=new stylePT(132,"Doubler",4,"Bleeding","Medium","Low","Low Bonus","","Low&nbsp;Penalty","Behind target",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 3 Damage type Body Duration 20 seconds")
//Styles[33]=new stylePT(132,"Ravager",6,"","Medium","Low","Low Bonus","","","",0,"")
//Styles[34]=new stylePT(132,"Polar Light",8,"Slowed","Low","Low","High Bonus","Low&nbsp;Bonus","","You parry",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[35]=new stylePT(132,"Snowblind",10,"Taunt","Medium","Low","Low Bonus","","Medium&nbsp;Penalty","",0,"")
//Styles[36]=new stylePT(132,"Atrophy",12,"Hindered","Medium","Low","Low Bonus","","","[*] Ravager",0,"Reduces the target\'s movement speed.  Value 100% Duration 12 seconds")
//Styles[37]=new stylePT(132,"Frost Shadow",15,"","Medium","Low","Medium Bonus","Low&nbsp;Bonus","","[*] Polar Light",0,"")
//Styles[38]=new stylePT(132,"Comeback",18,"","Low","Low","Medium Bonus","","","You evade",0,"")
//Styles[39]=new stylePT(132,"Scathing Blade",21,"Slowed","Medium","Medium","Medium Bonus","","Medium&nbsp;Penalty","[*] Atrophy",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[40]=new stylePT(132,"Decaying Rage",25,"Detaunt","Low","Low","Medium Bonus","High&nbsp;Bonus","","[*] Atrophy",0,"")
//Styles[41]=new stylePT(132,"Snowsquall",29,"","Medium","Medium","Medium Bonus","","","Behind target",0,"")
//Styles[42]=new stylePT(132,"Doublefrost",34,"","High","Low","Low Bonus","","","",0,"")
//Styles[43]=new stylePT(132,"Frosty Gaze",39,"Stunned","Medium","Low","Medium Bonus","","","[*] Comeback",0,"Stuns the target for a brief period of time.  Duration 7 seconds")
//Styles[44]=new stylePT(132,"Icy Brilliance",44,"Bleeding","Medium","Medium","High Bonus","","","[*] Snowsquall",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 9 Damage type Body Duration 40 seconds")
//Styles[45]=new stylePT(132,"Aurora Borealis",50,"Slowed","Low","High","High Bonus","","","Target parried",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[46]=new stylePT(130,"Whirling Blade",2,"","High","Starter","","","","",0,"")
//Styles[47]=new stylePT(130,"Frost Cut",4,"Bleeding","Low","Medium","Low Bonus","","","You block",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 4 Damage type Body Duration 25 seconds")
//Styles[48]=new stylePT(130,"Draw Out",6,"Taunt","Medium","Low","High Bonus","","Medium&nbsp;Penalty","",0,"")
//Styles[49]=new stylePT(130,"Northern Lights",8,"Slowed","Medium","Medium","Low Bonus","","","To side of target",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[50]=new stylePT(130,"Assault",10,"","Medium","Medium","Medium Bonus","","","",0,"")
//Styles[51]=new stylePT(130,"Temper",12,"Detaunt","Medium","","","Medium&nbsp;Bonus","","",0,"")
//Styles[52]=new stylePT(130,"Aurora",15,"Hindered","Medium","High","Medium Bonus","","","[*] Northern Lights",0,"Reduces the target\'s movement speed.  Value 100% Duration 15 seconds")
//Styles[53]=new stylePT(130,"Baldur's Fury",18,"Hindered","High","Medium","Medium Bonus","","","[*] Assault",0,"Reduces the target\'s movement speed.  Value 100% Duration 9 seconds")
//Styles[54]=new stylePT(130,"Reinforcement",21,"Bleeding","Low","Medium","Medium Bonus","","Low&nbsp;Penalty","You parry",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 7 Damage type Body Duration 40 seconds")
//Styles[55]=new stylePT(130,"Ice Storm",25,"","Medium","High","Medium Bonus","","","You evade",0,"")
//Styles[56]=new stylePT(130,"Rush",29,"Slowed","Low","High","","","Medium&nbsp;Penalty","[*] Reinforcement",0,"Decreases the target\'s combat speed.  Duration 20 seconds")
//Styles[57]=new stylePT(130,"Polar Rift",34,"","High","Medium","Low Bonus","","","",0,"")
//Styles[58]=new stylePT(130,"Niord's Fury",39,"Stunned","Low","High","Medium Bonus","","","[*] Frost Cut",0,"Stuns the target for a brief period of time.  Duration 7 seconds")
//Styles[59]=new stylePT(130,"Sif's Revenge",44,"Bleeding","Medium","Medium","Medium Bonus","","","[*] Ice Storm",0,"Does damage to a target over a period of time.  Damage per tick (every 4 seconds) 10 Damage type Body Duration 40 seconds")
//Styles[60]=new stylePT(130,"Ragnarok",50,"Slowed","Medium","Medium","Medium Bonus","","Low&nbsp;Penalty","Behind target",0,"Decreases the target\'s combat speed.  Duration 20 seconds")

Spells = new Array(0)

Lines = new Array(0);
