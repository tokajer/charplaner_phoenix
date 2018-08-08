sSTR[999]=0;sCON[999]=0;sDEX[999]=0;sQUI[999]=0;sINT[999]=0;sPIE[999]=0;sEMP[999]=0;sCHA[999]=0; 
sSTR[998]=0;sCON[998]=0;sDEX[998]=0;sQUI[998]=0;sINT[998]=0;sPIE[998]=0;sEMP[998]=0;sCHA[998]=0; 
sSTR[5]=45;sCON[5]=45;sDEX[5]=60;sQUI[5]=70;sINT[5]=80;sPIE[5]=60;sEMP[5]=60;sCHA[5]=60; 
sSTR[6]=60;sCON[6]=60;sDEX[6]=60;sQUI[6]=60;sINT[6]=60;sPIE[6]=60;sEMP[6]=60;sCHA[6]=60; 
sSTR[17]=90;sCON[17]=70;sDEX[17]=40;sQUI[17]=40;sINT[17]=60;sPIE[17]=60;sEMP[17]=60;sCHA[17]=60; 

Abilities = new Array(9)		
Abilities[1]=new abilityPT("Path of Earth",0,17,2,1,0,0)
Abilities[2]=new abilityPT("Path of Ice",0,20,2,1,0,0)
Abilities[3]=new abilityPT("Staff",0,83,5,0,0,0)
Abilities[4]=new abilityPT("Cloth Armor",0,99,7,0,0,0)
Abilities[5]=new abilityPT("Quickcast ",5,1,1,0,0,0)
Abilities[6]=new abilityPT("Calefaction",5,18,3,0,17,0)
Abilities[7]=new abilityPT("Liquifaction",5,21,3,0,20,0)
Abilities[8]=new abilityPT("Path of Fire",5,23,2,1,0,0)
Abilities[9]=new abilityPT("Pyromancy ",5,24,3,0,23,0)
	
//Styles = new Array(0);

Spells = new Array(154)

Lines = new Array(21);

Lines[17003]=new linePT('Shield (Self)','Adds to the recipient\'s Armor Factor (AF), resulting in better protection against some forms of attack. It acts in addition to any armor the target is wearing.',17,0) 
Spells[1]=new spellPT("Amethyst Shield",1,17003,17,"13 AF ",17,"2 PP",'','3.0s','','','20m','') 
Spells[2]=new spellPT("Amethyst Shield (Enhanced)",3,17003,17,"22 AF ",17,"3 PP",'','3.0s','','','20m','') 
Spells[3]=new spellPT("Ruby Shield",5,17003,17,"32 AF ",17,"4 PP",'','3.0s','','','20m','') 
Spells[4]=new spellPT("Ruby Shield (Enhanced)",9,17003,17,"51 AF ",17,"6 PP",'','3.0s','','','20m','') 
Spells[5]=new spellPT("Cobalt Shield",13,17003,17,"71 AF ",17,"8 PP",'','3.0s','','','20m','') 
Spells[6]=new spellPT("Cobalt Shield (Enhanced)",18,17003,17,"95 AF ",17,"11 PP",'','3.0s','','','20m','') 
Spells[7]=new spellPT("Emerald Shield",24,17003,17,"124 AF ",17,"15 PP",'','3.0s','','','20m','') 
Spells[8]=new spellPT("Emerald Shield (Enhanced)",31,17003,17,"158 AF ",17,"19 PP",'','3.0s','','','20m','') 
Spells[9]=new spellPT("Diamond Shield",40,17003,17,"201 AF ",17,"25 PP",'','3.0s','','','20m','') 
Spells[10]=new spellPT("Diamond Shield (Enhanced)",50,17003,17,"250 AF ",17,"33 PP",'','3.0s','','','20m','') 
Lines[17004]=new linePT('Damage Add','Target does more damage with every melee weapon hit.',17,0) 
Spells[11]=new spellPT("Minor Earthen Power",4,17004,17,"1 DPS ",17,"3 PP",'1000','3.0s','','','10m','') 
Spells[12]=new spellPT("Earthen Power",8,17004,17,"2 DPS ",17,"5 PP",'1000','3.0s','','','10m','') 
Spells[13]=new spellPT("Greater Earthen Power",11,17004,17,"3 DPS ",17,"7 PP",'1000','3.0s','','','10m','') 
Spells[14]=new spellPT("Minor Earthen Burst",15,17004,17,"3 DPS ",17,"9 PP",'1000','3.0s','','','10m','') 
Spells[15]=new spellPT("Earthen Burst",20,17004,17,"5 DPS ",17,"12 PP",'1000','3.0s','','','10m','') 
Spells[16]=new spellPT("Great Earthen Burst",26,17004,17,"6 DPS ",17,"16 PP",'1000','3.0s','','','10m','') 
Spells[17]=new spellPT("Earthen Fury",34,17004,17,"7 DPS ",17,"21 PP",'1000','3.0s','','','10m','') 
Spells[18]=new spellPT("Greater Earthen Fury",44,17004,17,"10 DPS ",17,"28 PP",'1000','3.0s','','','10m','') 
Lines[17005]=new linePT('Absorb (Self)','Adds to the target\'s absorption (ABS) factor, resulting in better protection against melee attacks.',17,0) 
Spells[19]=new spellPT("Buffer of Earth",30,17005,17,"5% ",17,"19 PP",'','3.0s','','','20m','') 
Spells[20]=new spellPT("Buffer of Stone",41,17005,17,"10% ",17,"26 PP",'','3.0s','','','20m','') 
Lines[18006]=new linePT('Damage Shield','Anyone that hits the target with a melee attack is damaged by this protective shield.',18,0) 
Spells[21]=new spellPT("Minor Shield of Magma",1,18006,18,"0.5 DPS ",18,"2 PP",'1000','4.0s','','','10m','') 
Spells[22]=new spellPT("Shield of Magma",5,18006,18,"1 DPS ",18,"4 PP",'1000','4.0s','','','10m','') 
Spells[23]=new spellPT("Greater Shield of Magma",9,18006,18,"1 DPS ",18,"6 PP",'1000','4.0s','','','10m','') 
Spells[24]=new spellPT("Minor Shell of Magma",14,18006,18,"1 DPS ",18,"9 PP",'1000','4.0s','','','10m','') 
Spells[25]=new spellPT("Shell of Magma",22,18006,18,"2 DPS ",18,"13 PP",'1000','4.0s','','','10m','') 
Spells[26]=new spellPT("Greater Shell of Magma",33,18006,18,"3 DPS ",18,"21 PP",'1000','4.0s','','','10m','') 
Spells[27]=new spellPT("Exalted Magma Shield",44,18006,18,"4 DPS ",18,"28 PP",'1000','4.0s','','','10m','') 
Lines[18007]=new linePT('Damage (Bolt)','Target takes damage. Damage done is of the spell\'s given damage type. The spell is a \"bolt\" that can be blocked and takes a few seconds to travel to its target, but has a longer range and does significantly more damage than other types of spells.',18,0) 
Spells[28]=new spellPT("Bolt of Lava",2,18007,18,"15  D ",18,"2 PP",'1875','2.5s','','20s','','Matter') 
Spells[29]=new spellPT("Bolt of Lava (Enhanced)",4,18007,18,"29  D ",18,"3 PP",'1875','2.5s','','20s','','Matter') 
Spells[30]=new spellPT("Lava Strike",7,18007,18,"52  D ",18,"5 PP",'1875','2.5s','','20s','','Matter') 
Spells[31]=new spellPT("Lava Strike (Enhanced)",12,18007,18,"81  D ",18,"8 PP",'1875','2.5s','','20s','','Matter') 
Spells[32]=new spellPT("Lava Force",17,18007,18,"118  D ",18,"10 PP",'1875','2.5s','','20s','','Matter') 
Spells[33]=new spellPT("Lava Force (Enhanced)",24,18007,18,"162  D ",18,"15 PP",'1875','2.5s','','20s','','Matter') 
Spells[34]=new spellPT("Lava Streak",31,18007,18,"206  D ",18,"19 PP",'1875','2.5s','','20s','','Matter') 
Spells[35]=new spellPT("Lava Streak (Enhanced)",38,18007,18,"258  D ",18,"24 PP",'1875','2.5s','','20s','','Matter') 
Spells[36]=new spellPT("Lava's Fury",46,18007,18,"309  D ",18,"30 PP",'1875','2.5s','','20s','','Matter') 
Lines[18020]=new linePT('Damage over Time','Inflicts damage to the target repeatedly over a given time period.',18,0) 
Spells[37]=new spellPT("Molten Wrap",6,18020,18,"11  D x 6 ",18,"4 PP",'1500','3.0s','','','24s','Matter') 
Spells[38]=new spellPT("Greater Molten Wrap",10,18020,18,"17  D x 6 ",18,"6 PP",'1500','3.0s','','','24s','Matter') 
Spells[39]=new spellPT("Molten Blanket",16,18020,18,"29  D x 6 ",18,"10 PP",'1500','3.0s','','','24s','Matter') 
Spells[40]=new spellPT("Greater Molten Blanket",23,18020,18,"41  D x 6 ",18,"14 PP",'1500','3.0s','','','24s','Matter') 
Spells[41]=new spellPT("Sheet of Lava",29,18020,18,"53  D x 6 ",18,"18 PP",'1500','3.0s','','','24s','Matter') 
Spells[42]=new spellPT("Greater Sheet of Lava",35,18020,18,"63  D x 6 ",18,"22 PP",'1500','3.0s','','','24s','Matter') 
Spells[43]=new spellPT("Sheet of Magma",41,18020,18,"73  D x 6 ",18,"26 PP",'1500','3.0s','','','24s','Matter') 
Spells[44]=new spellPT("Greater Sheet of Magma",48,18020,18,"87  D x 6 ",18,"31 PP",'1500','3.0s','','','24s','Matter') 
Lines[18008]=new linePT('Damage and Snare (AOE)','Target takes damage. Damage done is of the spell\'s given damage type. Target\'s movement speed is also slowed by the given percentage, which gives the caster more time before the target closes to melee range. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius  and does less damage the further away targets are from the spell\'s center.',18,0) 
Spells[45]=new spellPT("Molten Earth",8,18008,18,"25  D 35% ",18,"7 PP",'1500','3.0s','350','','30s','Matter') 
Spells[46]=new spellPT("Lava Field",11,18008,18,"31  D 35% ",18,"9 PP",'1500','3.0s','350','','30s','Matter') 
Spells[47]=new spellPT("Expanse of Magma",15,18008,18,"44  D 35% ",18,"12 PP",'1500','3.0s','350','','30s','Matter') 
Spells[48]=new spellPT("Molten Puddle",20,18008,18,"56  D 35% ",18,"16 PP",'1500','3.0s','350','','30s','Matter') 
Spells[49]=new spellPT("Molten Pool",28,18008,18,"81  D 35% ",18,"23 PP",'1500','3.0s','350','','30s','Matter') 
Spells[50]=new spellPT("Molten Lake",36,18008,18,"102  D 35% ",18,"30 PP",'1500','3.0s','350','','30s','Matter') 
Spells[51]=new spellPT("Molten Ocean",47,18008,18,"134  D 35% ",18,"40 PP",'1500','3.0s','350','','30s','Matter') 
Lines[18018]=new linePT('Root (AOE)','Target is effectively immobilized (loses 99% of possible movement speed) for the duration of the spell. If any damage is done to the target, the spell will break. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius.',18,0) 
Spells[52]=new spellPT("Trembling Earth",13,18018,18,"99% 26 sec ",18,"8 PP",'1500','2.5s','350','','26s','Matter') 
Spells[53]=new spellPT("Quaking Earth",32,18018,18,"99% 51 sec ",18,"20 PP",'1500','2.5s','350','','51s','Matter') 
Spells[54]=new spellPT("Buckling Earth",42,18018,18,"99% 64 sec ",18,"27 PP",'1500','2.5s','350','','64s','Matter') 
Lines[18120]=new linePT('Damage (GTAOE)','Target takes damage. Damage done is of the spell\'s given damage type. This is an \"Ground Target Area of Effect\" (GTAOE) spell which can affect multiple targets in the spell\'s radius, and does not require a line of sight from the caster to its target. You can set a ground target by pressing the Ground Target key (default F5) and moving the crosshairs as desired. Other players can designate a target for the caster by using the /groundassist command.',18,0) 
Spells[55]=new spellPT("Earth Eddies",18,18120,18,"68  D ",18,"11 PP",'1500','3.0s','350','6s','','Matter') 
Spells[56]=new spellPT("Earth Splash",25,18120,18,"92  D ",18,"15 PP",'1500','3.0s','350','6s','','Matter') 
Spells[57]=new spellPT("Earth Ripple",34,18120,18,"124  D ",18,"21 PP",'1500','3.0s','350','6s','','Matter') 
Spells[58]=new spellPT("Earth Wave",43,18120,18,"155  D ",18,"27 PP",'1500','3.0s','350','6s','','Matter') 
Lines[20002]=new linePT('Damage','',20,0) 
Spells[59]=new spellPT("Ice Cloud (Minor)",1,20002,20,"5  D ",20,"2 PP",'1500','2.6s','','','','Cold') 
Spells[60]=new spellPT("Ice Cloud",2,20002,20,"9  D ",20,"2 PP",'1500','2.6s','','','','Cold') 
Spells[61]=new spellPT("Ice Cloud (Greater)",3,20002,20,"13  D ",20,"3 PP",'1500','2.6s','','','','Cold') 
Spells[62]=new spellPT("Ice Cloud (Potent)",6,20002,20,"25  D ",20,"4 PP",'1500','2.6s','','','','Cold') 
Spells[63]=new spellPT("Glittering Ice Cloud (Lesser)",9,20002,20,"37  D ",20,"6 PP",'1500','2.6s','','','','Cold') 
Spells[64]=new spellPT("Glittering Ice Cloud",13,20002,20,"49  D ",20,"8 PP",'1500','2.6s','','','','Cold') 
Spells[65]=new spellPT("Glittering Ice Cloud (Major)",17,20002,20,"64  D ",20,"10 PP",'1500','2.6s','','','','Cold') 
Spells[66]=new spellPT("Ice Blast (Minor)",24,20002,20,"88  D ",20,"15 PP",'1500','2.6s','','','','Cold') 
Spells[67]=new spellPT("Ice Blast",33,20002,20,"120  D ",20,"21 PP",'1500','2.6s','','','','Cold') 
Spells[68]=new spellPT("Ice Blast (Potent)",41,20002,20,"148  D ",20,"26 PP",'1500','2.6s','','','','Cold') 
Spells[69]=new spellPT("Ice Blast (Major)",50,20002,20,"179  D ",20,"33 PP",'1500','2.6s','','','','Cold') 
Lines[20012]=new linePT('Root','Target is effectively immobilized (loses 99% of possible movement speed) for the duration of the spell. If any damage is done to the target, the spell will break.',20,0) 
Spells[70]=new spellPT("Cold's Bitter Grip (Lesser)",5,20012,20,"99% 16 sec ",20,"4 PP",'1500','2.5s','','','16s','Cold') 
Spells[71]=new spellPT("Cold's Bitter Grip",10,20012,20,"99% 23 sec ",20,"6 PP",'1500','2.5s','','','23s','Cold') 
Spells[72]=new spellPT("Cold's Bitter Grip (Greater)",16,20012,20,"99% 30 sec ",20,"10 PP",'1500','2.5s','','','30s','Cold') 
Spells[73]=new spellPT("Fingers Of Ice (Lesser)",22,20012,20,"99% 38 sec ",20,"13 PP",'1500','2.5s','','','38s','Cold') 
Spells[74]=new spellPT("Fingers Of Ice",30,20012,20,"99% 49 sec ",20,"19 PP",'1500','2.5s','','','49s','Cold') 
Spells[75]=new spellPT("Fingers Of Ice (Greater)",39,20012,20,"99% 60 sec ",20,"25 PP",'1500','2.5s','','','60s','Cold') 
Spells[76]=new spellPT("Anchor Of Ice",49,20012,20,"99% 73 sec ",20,"32 PP",'1500','2.5s','','','73s','Cold') 
Lines[21014]=new linePT('Damage and Snare','Target takes damage. Damage done is of the spell\'s given damage type. Target\'s movement speed is also slowed by the given percentage, which gives the caster more time before the target closes to melee range.',21,0) 
Spells[77]=new spellPT("Ensnaring Haze (Minor)",1,21014,21,"5  D 35% ",21,"2 PP",'1500','3.0s','','','30s','Cold') 
Spells[78]=new spellPT("Ensnaring Haze (Lesser)",5,21014,21,"21  D 35% ",21,"4 PP",'1500','3.0s','','','30s','Cold') 
Spells[79]=new spellPT("Ensnaring Haze",9,21014,21,"37  D 35% ",21,"6 PP",'1500','3.0s','','','30s','Cold') 
Spells[80]=new spellPT("Ensnaring Haze (Greater)",13,21014,21,"49  D 35% ",21,"8 PP",'1500','3.0s','','','30s','Cold') 
Spells[81]=new spellPT("Ensnaring Haze (Potent)",17,21014,21,"64  D 35% ",21,"10 PP",'1500','3.0s','','','30s','Cold') 
Spells[82]=new spellPT("Entangling Haze (Minor)",24,21014,21,"88  D 35% ",21,"15 PP",'1500','3.0s','','','30s','Cold') 
Spells[83]=new spellPT("Entangling Haze",33,21014,21,"120  D 35% ",21,"21 PP",'1500','3.0s','','','30s','Cold') 
Spells[84]=new spellPT("Entangling Haze (Greater)",41,21014,21,"148  D 35% ",21,"26 PP",'1500','3.0s','','','30s','Cold') 
Spells[85]=new spellPT("Entangling Haze (Potent)",50,21014,21,"179  D 35% ",21,"33 PP",'1500','3.0s','','','30s','Cold') 
Lines[21015]=new linePT('Damage and Debuff','Target takes damage. Damage done is of the spell\'s given damage type. Target also has its resistance to that spell lowered slightly, which will make subsequent spells do more damage.',21,0) 
Spells[86]=new spellPT("Searing Wind (Minor)",3,21015,21,"13  D 10% ",21,"3 PP",'1500','3.0s','','','20s','Cold') 
Spells[87]=new spellPT("Searing Wind (Lesser)",6,21015,21,"25  D 10% ",21,"4 PP",'1500','3.0s','','','20s','Cold') 
Spells[88]=new spellPT("Searing Wind",12,21015,21,"45  D 10% ",21,"8 PP",'1500','3.0s','','','20s','Cold') 
Spells[89]=new spellPT("Searing Gust (Minor)",16,21015,21,"61  D 10% ",21,"10 PP",'1500','3.0s','','','20s','Cold') 
Spells[90]=new spellPT("Searing Gust",21,21015,21,"76  D 10% ",21,"13 PP",'1500','3.0s','','','20s','Cold') 
Spells[91]=new spellPT("Searing Wave (Minor)",27,21015,21,"100  D 10% ",21,"17 PP",'1500','3.0s','','','20s','Cold') 
Spells[92]=new spellPT("Searing Wave",37,21015,21,"136  D 10% ",21,"23 PP",'1500','3.0s','','','20s','Cold') 
Spells[93]=new spellPT("Searing Blast",47,21015,21,"171  D 10% ",21,"30 PP",'1500','3.0s','','','20s','Cold') 
Lines[21016]=new linePT('Damage and Debuff (AOE)','Target takes damage. Damage done is of the spell\'s given damage type. Target also has its resistance to that spell lowered slightly, which will make subsequent spells do more damage. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius and does less damage the further away targets are from the spell\'s center.',21,0) 
Spells[94]=new spellPT("Simmering Cloud",8,21016,21,"25  D 10% ",21,"7 PP",'1500','3.0s','350','','20s','Cold') 
Spells[95]=new spellPT("Broiling Cloud",14,21016,21,"40  D 10% ",21,"11 PP",'1500','3.0s','350','','20s','Cold') 
Spells[96]=new spellPT("Sweltering Cloud",22,21016,21,"62  D 10% ",21,"18 PP",'1500','3.0s','350','','20s','Cold') 
Spells[97]=new spellPT("Burning Cloud",29,21016,21,"84  D 10% ",21,"24 PP",'1500','3.0s','350','','20s','Cold') 
Spells[98]=new spellPT("Torrid Cloud",36,21016,21,"102  D 10% ",21,"30 PP",'1500','3.0s','350','','20s','Cold') 
Spells[99]=new spellPT("Boiling Cloud",46,21016,21,"130  D 10% ",21,"39 PP",'1500','3.0s','350','','20s','Cold') 
Lines[21013]=new linePT('Damage (PBAOE)','Target takes damage. Damage done is of the spell\'s given damage type. Spell affects everyone in the immediate radius of the caster, and does less damage the further away they are from the caster. PBAOE spells often put the caster in direct peril, but are among the most damaging spells in the game.',21,0) 
Spells[100]=new spellPT("Burst of Steam  (Minor)",7,21013,21,"52  D ",21,"5 PP",'','2.5s','300','','','Cold') 
Spells[101]=new spellPT("Burst of Steam",11,21013,21,"74  D ",21,"7 PP",'','2.5s','300','','','Cold') 
Spells[102]=new spellPT("Steaming Blast (Minor)",15,21013,21,"104  D ",21,"9 PP",'','2.5s','300','','','Cold') 
Spells[103]=new spellPT("Steaming Blast",20,21013,21,"133  D ",21,"12 PP",'','2.5s','300','','','Cold') 
Spells[104]=new spellPT("Steaming Blast (Major)",26,21013,21,"176  D ",21,"16 PP",'','2.5s','300','','','Cold') 
Spells[105]=new spellPT("Steaming Wind (Minor)",32,21013,21,"214  D ",21,"20 PP",'','2.5s','300','','','Cold') 
Spells[106]=new spellPT("Steaming Wind",39,21013,21,"265  D ",21,"25 PP",'','2.5s','300','','','Cold') 
Spells[107]=new spellPT("Steaming Wind (Major)",48,21013,21,"325  D ",21,"31 PP",'','2.5s','300','','','Cold') 
Lines[23007]=new linePT('Damage (Bolt)','Target takes damage. Damage done is of the spell\'s given damage type. The spell is a \"bolt\" that can be blocked and takes a few seconds to travel to its target, but has a longer range and does significantly more damage than other types of spells.',23,0) 
Spells[108]=new spellPT("Fire Bolt",2,23007,23,"13  D ",23,"2 PP",'1875','2.5s','','20s','','Heat') 
Spells[109]=new spellPT("Fiery Bolt",4,23007,23,"24  D ",23,"3 PP",'1875','2.5s','','20s','','Heat') 
Spells[110]=new spellPT("Fireball",6,23007,23,"36  D ",23,"4 PP",'1875','2.5s','','20s','','Heat') 
Spells[111]=new spellPT("Reign of Fire (Minor)",9,23007,23,"53  D ",23,"6 PP",'1875','2.5s','','20s','','Heat') 
Spells[112]=new spellPT("Reign of Fire",14,23007,23,"75  D ",23,"9 PP",'1875','2.5s','','20s','','Heat') 
Spells[113]=new spellPT("Reign of Fire (Major)",18,23007,23,"98  D ",23,"11 PP",'1875','2.5s','','20s','','Heat') 
Spells[114]=new spellPT("Flaming Rocks (Minor)",22,23007,23,"115  D ",23,"13 PP",'1875','2.5s','','20s','','Heat') 
Spells[115]=new spellPT("Flaming Rock",28,23007,23,"149  D ",23,"17 PP",'1875','2.5s','','20s','','Heat') 
Spells[116]=new spellPT("Flaming Rocks (Greater)",36,23007,23,"188  D ",23,"23 PP",'1875','2.5s','','20s','','Heat') 
Spells[117]=new spellPT("Flaming Rocks (Major)",46,23007,23,"239  D ",23,"30 PP",'1875','2.5s','','20s','','Heat') 
Lines[23002]=new linePT('Damage','',23,0) 
Spells[118]=new spellPT("Summon Fire",3,23002,23,"13  D ",23,"3 PP",'1500','2.6s','','','','Heat') 
Spells[119]=new spellPT("Fire Wind",5,23002,23,"21  D ",23,"4 PP",'1500','2.6s','','','','Heat') 
Spells[120]=new spellPT("Circle Of Flames",7,23002,23,"29  D ",23,"5 PP",'1500','2.6s','','','','Heat') 
Spells[121]=new spellPT("Fiery Orbs",10,23002,23,"37  D ",23,"6 PP",'1500','2.6s','','','','Heat') 
Spells[122]=new spellPT("Fire Storm (Minor)",13,23002,23,"49  D ",23,"8 PP",'1500','2.6s','','','','Heat') 
Spells[123]=new spellPT("Fire Storm",17,23002,23,"64  D ",23,"10 PP",'1500','2.6s','','','','Heat') 
Spells[124]=new spellPT("Fire Storm (Major)",23,23002,23,"85  D ",23,"14 PP",'1500','2.6s','','','','Heat') 
Spells[125]=new spellPT("Fiery Maelstrom (Minor)",30,23002,23,"108  D ",23,"19 PP",'1500','2.6s','','','','Heat') 
Spells[126]=new spellPT("Fiery Maelstrom",37,23002,23,"136  D ",23,"23 PP",'1500','2.6s','','','','Heat') 
Spells[127]=new spellPT("Fiery Maelstrom (Major)",47,23002,23,"171  D ",23,"30 PP",'1500','2.6s','','','','Heat') 
Lines[23010]=new linePT('Bladeturn (Self)','A \"bubble\" that absorbs the damage of a single melee hit. Assassin critical strikes and attacks by very high level creatures will ignore a bladeturn bubble.',23,0) 
Spells[128]=new spellPT("Aura of Incineration",19,23010,23,"",23,"8% ",'','4.0s','','','20m','') 
Lines[24002]=new linePT('Damage','',24,0) 
Spells[129]=new spellPT("Minor Combustion",1,24002,24,"5  D ",24,"2 PP",'1500','2.8s','','','','Heat') 
Spells[130]=new spellPT("Lesser Combustion",3,24002,24,"16  D ",24,"3 PP",'1500','2.8s','','','','Heat') 
Spells[131]=new spellPT("Combustion",6,24002,24,"31  D ",24,"4 PP",'1500','2.8s','','','','Heat') 
Spells[132]=new spellPT("Greater Combustion",10,24002,24,"46  D ",24,"6 PP",'1500','2.8s','','','','Heat') 
Spells[133]=new spellPT("Major Combustion",13,24002,24,"62  D ",24,"8 PP",'1500','2.8s','','','','Heat') 
Spells[134]=new spellPT("Minor Conflagration",17,24002,24,"81  D ",24,"10 PP",'1500','2.8s','','','','Heat') 
Spells[135]=new spellPT("Lesser Conflagration",23,24002,24,"108  D ",24,"14 PP",'1500','2.8s','','','','Heat') 
Spells[136]=new spellPT("Conflagration",30,24002,24,"137  D ",24,"19 PP",'1500','2.8s','','','','Heat') 
Spells[137]=new spellPT("Greater Conflagration",37,24002,24,"173  D ",24,"23 PP",'1500','2.8s','','','','Heat') 
Spells[138]=new spellPT("Major Conflagration",47,24002,24,"219  D ",24,"30 PP",'1500','2.8s','','','','Heat') 
Lines[24019]=new linePT('Damage (AOE)','Target takes damage. Damage done is of the spell\'s given damage type. This is an \"Area of Effect\" (AOE) spell which can affect multiple targets in the spell\'s radius, and does less damage the further away targets are from the spell\'s center.',24,0) 
Spells[139]=new spellPT("Explosive Blast (Minor)",2,24019,24,"8  D ",24,"2 PP",'1500','3.0s','350','','','Heat') 
Spells[140]=new spellPT("Explosive Blast",5,24019,24,"20  D ",24,"4 PP",'1500','3.0s','350','','','Heat') 
Spells[141]=new spellPT("Explosive Burst (Minor)",7,24019,24,"28  D ",24,"5 PP",'1500','3.0s','350','','','Heat') 
Spells[142]=new spellPT("Explosive Burst",12,24019,24,"44  D ",24,"8 PP",'1500','3.0s','350','','','Heat') 
Spells[143]=new spellPT("Concussive Blast (Minor)",18,24019,24,"67  D ",24,"11 PP",'1500','3.0s','350','','','Heat') 
Spells[144]=new spellPT("Concussive Blast",24,24019,24,"87  D ",24,"15 PP",'1500','3.0s','350','','','Heat') 
Spells[145]=new spellPT("Ebullient Blast (Minor)",32,24019,24,"115  D ",24,"20 PP",'1500','3.0s','350','','','Heat') 
Spells[146]=new spellPT("Ebullient Blast",44,24019,24,"158  D ",24,"28 PP",'1500','3.0s','350','','','Heat') 
Lines[24007]=new linePT('Damage (Bolt)','Target takes damage. Damage done is of the spell\'s given damage type. The spell is a \"bolt\" that can be blocked and takes a few seconds to travel to its target, but has a longer range and does significantly more damage than other types of spells.',24,0) 
Spells[147]=new spellPT("Minor Fire Streak",4,24007,24,"29  D ",24,"3 PP",'1875','2.5s','','20s','','Heat') 
Spells[148]=new spellPT("Fire Streak",8,24007,24,"59  D ",24,"5 PP",'1875','2.5s','','20s','','Heat') 
Spells[149]=new spellPT("Minor Flame Streak",14,24007,24,"96  D ",24,"9 PP",'1875','2.5s','','20s','','Heat') 
Spells[150]=new spellPT("Flame Streak",19,24007,24,"133  D ",24,"12 PP",'1875','2.5s','','20s','','Heat') 
Spells[151]=new spellPT("Minor Incendiary Lance",25,24007,24,"170  D ",24,"15 PP",'1875','2.5s','','20s','','Heat') 
Spells[152]=new spellPT("Incendiary Lance",33,24007,24,"221  D ",24,"21 PP",'1875','2.5s','','20s','','Heat') 
Spells[153]=new spellPT("Minor Flame Spear",41,24007,24,"273  D ",24,"26 PP",'1875','2.5s','','20s','','Heat') 
Spells[154]=new spellPT("Flame Spear",50,24007,24,"331  D ",24,"33 PP",'1875','2.5s','','20s','','Heat') 
