sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[9]=60;sCON[9]=80;sDEX[9]=50;sQUI[9]=50;sINT[9]=60;sPIE[9]=60;sEMP[9]=60;sCHA[9]=60; 
sSTR[10]=50;sCON[10]=50;sDEX[10]=70;sQUI[10]=70;sINT[10]=60;sPIE[10]=60;sEMP[10]=60;sCHA[10]=60; 
sSTR[11]=70;sCON[11]=70;sDEX[11]=50;sQUI[11]=50;sINT[11]=60;sPIE[11]=60;sEMP[11]=60;sCHA[11]=60; 
sSTR[12]=100;sCON[12]=70;sDEX[12]=35;sQUI[12]=35;sINT[12]=60;sPIE[12]=60;sEMP[12]=60;sCHA[12]=60; 
sSTR[15]=55;sCON[15]=45;sDEX[15]=65;sQUI[15]=75;sINT[15]=60;sPIE[15]=60;sEMP[15]=60;sCHA[15]=60; 

Abilities = new Array(16)		
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
Abilities[11]=new abilityPT("Hand to Hand",5,169,5,1,0,0)
Abilities[12]=new abilityPT("Savagery",5,194,2,1,0,0)
Abilities[13]=new abilityPT("Evade II",10,114,4,0,0,0)
Abilities[14]=new abilityPT("Evade III",20,115,4,0,0,0)
Abilities[15]=new abilityPT("Evade IV",30,116,4,0,0,0)
Abilities[16]=new abilityPT("Advanced Evade",35,173,4,0,0,0)
	
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
//Styles[31]=new stylePT(169,"Kelgor's Bane",2,"Increased Parry","Low","Starter","","","","",0,"")
//Styles[32]=new stylePT(169,"Tribal Rage",4,"","Very Low","High","Low Bonus","","","You parry",0,"")
//Styles[33]=new stylePT(169,"Wild Call",6,"Taunt","Medium","High","","","Medium&nbsp;Penalty","",0,"")
//Styles[34]=new stylePT(169,"Clan's Call",8,"Stunned","Low","High","Medium Bonus","","","Behind target",0,"Stuns the target for a brief period of time.  Duration 4 seconds")
//Styles[35]=new stylePT(169,"Tribal Assault",10,"Hits 2 targets","Very Low","High","Low Bonus","","Low&nbsp;Penalty","[*] Tribal Rage",0,"")
//Styles[36]=new stylePT(169,"Kelgor's Might",12,"PBAOE Haste Debuff","High","","","","","",0,"Decreases the target\'s combat speed.  Radius 350 Damage type Body Duration 20 seconds")
//Styles[37]=new stylePT(169,"Taunting Call",15,"Detaunt","Medium","","","High&nbsp;Bonus","","",0,"")
//Styles[38]=new stylePT(169,"Clan's Might",18,"Hits 2 targets","Very Low","High","","","","[*] Clan's Call",0,"")
//Styles[39]=new stylePT(169,"Totemic Fear",21,"Hindered","Very Low","High","High Bonus","","","You evade",0,"Reduces the target\'s movement speed.  Value 100% Duration 19 seconds")
//Styles[40]=new stylePT(169,"Totemic Wrath",25,"Hits 3 targets","Very Low","High","Medium Bonus","","","[*] Totemic Fear",0,"")
//Styles[41]=new stylePT(169,"Kelgor's Claw",29,"Increased evade","Medium","","","","","",0,"")
//Styles[42]=new stylePT(169,"Tribal Wrath",34,"Increased parry","Very Low","High","High Bonus","Medium&nbsp;Bonus","","[*] Tribal Assault",0,"")
//Styles[43]=new stylePT(169,"Kelgor's Fist",39,"","Low","High","Medium Bonus","","","To side of target",0,"")
//Styles[44]=new stylePT(169,"Kelgor's Wrath",44,"Stunned","Very Low","High","High Bonus","","","[*] Kelgor's Fist",0,"Stuns the target for a brief period of time.  Duration 9 seconds")
//Styles[45]=new stylePT(169,"Totemic Sacrifice",50,"Hits 4 targets","","High","Very High Bonus","","","[*] Totemic Wrath",0,"")
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

Spells = new Array(48)

Lines = new Array(9);

Lines[194178]=new linePT('Buff (Self, Parry)','Target\'s ability to parry melee attacks increases.',194,0) 
Spells[1]=new spellPT("Nails of Kelgor",1,194178,194,"+5% PARRY ",194,"3% HP ",'','','','5s','15s','') 
Spells[2]=new spellPT("Hooks of Kelgor",9,194178,194,"+9% PARRY ",194,"3% HP ",'','','','5s','15s','') 
Spells[3]=new spellPT("Barbs of Kelgor",18,194178,194,"+13% PARRY ",194,"3% HP ",'','','','5s','15s','') 
Spells[4]=new spellPT("Claws of Kelgor",27,194178,194,"+17% PARRY ",194,"4% HP ",'','','','5s','15s','') 
Spells[5]=new spellPT("Talons of Kelgor",36,194178,194,"+21% PARRY ",194,"4% HP ",'','','','5s','15s','') 
Spells[6]=new spellPT("Fangs of Kelgor",46,194178,194,"+25% PARRY ",194,"5% HP ",'','','','5s','15s','') 
Lines[194179]=new linePT('Buff (Self, Evasion)','Target\'s ability to evade melee attacks increases.',194,0) 
Spells[7]=new spellPT("Swiftness of Kelgor",2,194179,194,"+5% EVADE ",194,"3% HP ",'','','','5s','15s','') 
Spells[8]=new spellPT("Alacrity of Kelgor",10,194179,194,"+9% EVADE ",194,"3% HP ",'','','','5s','15s','') 
Spells[9]=new spellPT("Speed of Kelgor",19,194179,194,"+13% EVADE ",194,"3% HP ",'','','','5s','15s','') 
Spells[10]=new spellPT("Fleetness of Kelgor",28,194179,194,"+17% EVADE ",194,"4% HP ",'','','','5s','15s','') 
Spells[11]=new spellPT("Quickness of Kelgor",37,194179,194,"+21% EVADE ",194,"4% HP ",'','','','5s','15s','') 
Spells[12]=new spellPT("Evasion of Kelgor",45,194179,194,"+25% EVADE ",194,"5% HP ",'','','','5s','15s','') 
Lines[194040]=new linePT('Buff (Self, Combat Speed)','Increases the target\'s combat speed, which will cause it to be considerably more effective in melee combat.',194,0) 
Spells[13]=new spellPT("Passion of Kelgor",3,194040,194,"16% Hasted ",194,"3% HP ",'','','','5s','15s','') 
Spells[14]=new spellPT("Drive of Kelgor",11,194040,194,"20% Hasted ",194,"3% HP ",'','','','5s','15s','') 
Spells[15]=new spellPT("Mania of Kelgor",25,194040,194,"27% Hasted ",194,"4% HP ",'','','','5s','15s','') 
Spells[16]=new spellPT("Fervor of Kelgor",35,194040,194,"32% Hasted ",194,"4% HP ",'','','','5s','15s','') 
Spells[17]=new spellPT("Zeal of Kelgor",48,194040,194,"39% Hasted ",194,"5% HP ",'','','','5s','15s','') 
Lines[194100]=new linePT('Buff (Self, Combat Damage)','Target\'s melee damage per second (DPS) is increased.',194,0) 
Spells[18]=new spellPT("Brutal Blows",4,194100,194,"+5% DPS ",194,"3% HP ",'','','','5s','15s','') 
Spells[19]=new spellPT("Fierce Blows",12,194100,194,"+9% DPS ",194,"3% HP ",'','','','5s','15s','') 
Spells[20]=new spellPT("Relentless Blows",21,194100,194,"+13% DPS ",194,"4% HP ",'','','','5s','15s','') 
Spells[21]=new spellPT("Feral Blows",30,194100,194,"+17% DPS ",194,"4% HP ",'','','','5s','15s','') 
Spells[22]=new spellPT("Bestial Blows",39,194100,194,"+21% DPS ",194,"4% HP ",'','','','5s','15s','') 
Spells[23]=new spellPT("Savage Blows",49,194100,194,"+25% DPS ",194,"5% HP ",'','','','5s','15s','') 
Lines[194065]=new linePT('Taunt','Attracts the attention of a creature. Can be used for \"pulling\" targets from a distance, \"peeling off\" a target that is attacking a friend, or interrupting enemy casters.',194,0) 
Spells[24]=new spellPT("Irreverant Gesture",5,194065,194,"5.2 ",194,"0 HP ",'1350','2.0s','','','','') 
Spells[25]=new spellPT("Insulting Gesture",15,194065,194,"17.1 ",194,"0 HP ",'1350','2.0s','','','','') 
Spells[26]=new spellPT("Rude Gesture",30,194065,194,"38.7 ",194,"0 HP ",'1350','2.0s','','','','') 
Spells[27]=new spellPT("Infurating Gesture",40,194065,194,"55.6 ",194,"0 HP ",'1350','2.0s','','','','') 
Lines[194180]=new linePT('Buff (Self, Crush Resistance)','Target\'s resistance to Crush damage is increased.',194,0) 
Spells[28]=new spellPT("Deflect Blows",5,194180,194,"+5 CRUSH ",194,"3% HP ",'','','','5s','15s','') 
Spells[29]=new spellPT("Bear Blows",13,194180,194,"+9 CRUSH ",194,"3% HP ",'','','','5s','15s','') 
Spells[30]=new spellPT("Withstand Blows",22,194180,194,"+13 CRUSH ",194,"4% HP ",'','','','5s','15s','') 
Spells[31]=new spellPT("Endure Blows",31,194180,194,"+17 CRUSH ",194,"4% HP ",'','','','5s','15s','') 
Spells[32]=new spellPT("Weather Blows",38,194180,194,"+21 CRUSH ",194,"4% HP ",'','','','5s','15s','') 
Spells[33]=new spellPT("Ignore Blows",44,194180,194,"+25 CRUSH ",194,"5% HP ",'','','','5s','15s','') 
Lines[194181]=new linePT('Buff (Self, Slash Resistance)','Target\'s resistance to Slash damage is increased.',194,0) 
Spells[34]=new spellPT("Deflect Lacerations",6,194181,194,"+5 SLASH ",194,"3% HP ",'','','','5s','15s','') 
Spells[35]=new spellPT("Bear Lacerations",14,194181,194,"+9 SLASH ",194,"3% HP ",'','','','5s','15s','') 
Spells[36]=new spellPT("Withstand Lacerations",23,194181,194,"+13 SLASH ",194,"4% HP ",'','','','5s','15s','') 
Spells[37]=new spellPT("Endure Lacerations",32,194181,194,"+17 SLASH ",194,"4% HP ",'','','','5s','15s','') 
Spells[38]=new spellPT("Weather Lacerations",40,194181,194,"+21 SLASH ",194,"5% HP ",'','','','5s','15s','') 
Spells[39]=new spellPT("Ignore Lacerations",48,194181,194,"+25 SLASH ",194,"5% HP ",'','','','5s','15s','') 
Lines[194182]=new linePT('Buff (Self, Thrust Resistance)','Target\'s resistance to Thrust damage is increased.',194,0) 
Spells[40]=new spellPT("Deflect Punctures",7,194182,194,"+5 THRUST ",194,"3% HP ",'','','','5s','15s','') 
Spells[41]=new spellPT("Bear Punctures",15,194182,194,"+9 THRUST ",194,"3% HP ",'','','','5s','15s','') 
Spells[42]=new spellPT("Withstand Punctures",24,194182,194,"+13 THRUST ",194,"4% HP ",'','','','5s','15s','') 
Spells[43]=new spellPT("Endure Punctures",33,194182,194,"+17 THRUST ",194,"4% HP ",'','','','5s','15s','') 
Spells[44]=new spellPT("Weather Punctures",42,194182,194,"+21 THRUST ",194,"5% HP ",'','','','5s','15s','') 
Spells[45]=new spellPT("Ignore Punctures",47,194182,194,"+25 THRUST ",194,"5% HP ",'','','','5s','15s','') 
Lines[194183]=new linePT('Health to Fatigue (Self)','Converts health to endurance.',194,0) 
Spells[46]=new spellPT("Kelgor's Gift",20,194183,194,"20% END ",194,"5% HP ",'','','','5s','','') 
Spells[47]=new spellPT("Kelgor's Boon",29,194183,194,"40% END ",194,"10% HP ",'','','','5s','','') 
Spells[48]=new spellPT("Kelgor's Reward",41,194183,194,"60% END ",194,"15% HP ",'','','','5s','','') 
