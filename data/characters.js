var characters = {
	gen1: {
		chrom: {
			nameEN: 'Chrom',
			nameJA: 'クロム',
			gender: 'male',
			birthday: 'May 27th',
			generation: 1,
			recruit: 'Joins automatically at the start of the game.',
			baseClasses: ['lord', 'cavalier', 'archer'],
			possibleSupport: {
				a: ['frederick', 'lissa', 'vaike', 'gaius'],
				s: ['maribelle', 'sully', 'sumia', 'olivia']
			},
			maxStatMod: {
				str: +1,
				mag: 0,
				skl: +1,
				spd: +1,
				lck: +1,
				def: -1,
				res: -1
			},
			children: ['lucina']
		},
		lissa: {
			nameEN: 'Lissa',
			nameJA: 'リズ',
			gender: 'female',
			birthday: 'March 6th',
			generation: 1,
			recruit: 'Joins automatically in the Prologue.',
			baseClasses: ['cleric', 'pegasus_knight', 'troubadour'],
			possibleSupport: {
				a: ['chrom', 'maribelle', 'cherche', 'olivia'],
				s: ['kellam', 'donnel', 'frederick', 'gaius', 'gregor', 'henry', 'libra', 'ricken', 'lon_qu', 'stahl', 'vaike', 'virion']
			},
			maxStatMod: {
				str: -2,
				mag: +2,
				skl: -1,
				spd: 0,
				lck: +2,
				def: -1,
				res: +1
			},
			children: ['owain']
		},
		frederick: {
			nameEN: 'Frederick',
			nameJA: 'フレデリク',
			gender: 'male',
			birthday: 'August 26th',
			generation: 1,
			recruit: 'Joins automatically in the Prologue.',
			baseClasses: ['calavier', 'knight', 'wyvern_rider'],
			possibleSupport: {
				a: ['chrom', 'henry', 'virion'],
				s: ['lissa', 'maribelle', 'miriel', 'nowi', 'tharja', 'sully', 'sumia', 'cordelia', 'panne']
			},
			maxStatMod: {
				str: +2,
				mag: -2,
				skl: +2,
				spd: -2,
				lck: 0,
				def: +2,
				res: 0
			},
			children: []
		},
		sully: {
			nameEN: 'Sully',
			nameJA: 'ソワレ',
			gender: 'female',
			birthday: 'December 5th',
			generation: 1,
			recruit: 'Joins automatically on turn 2 of Chapter 1.',
			baseClasses: ['calavier', 'myrmidon', 'wyvern_rider'],
			possibleSupport: {
				a: ['miriel', 'sumia'],
				s: ['chrom', 'kellam', 'donnel', 'frederick', 'gaius', 'gregor', 'henry', 'libra', 'ricken', 'lon_qu', 'stahl', 'vaike', 'virion']
			},
			maxStatMod: {
				str: -1,
				mag: -1,
				skl: +2,
				spd: +2,
				lck: 0,
				def: -2,
				res: 0
			},
			children: ['kjelle']
		},
		virion: {
			nameEN: 'Virion',
			nameJA: 'ヴィオール',
			gender: 'male',
			birthday: 'December 10th',
			generation: 1,
			recruit: 'Joins automatically on turn 2 of Chapter 1.',
			baseClasses: ['archer', 'mage', 'wyvern_rider'],
			possibleSupport: {
				a: ['libra', 'frederick'],
				s: ['lissa', 'sully', 'maribelle', 'cordelia', 'panne', 'nowi', 'olivia', 'cherche', 'miriel', 'tharja']
			},
			maxStatMod: {
				str: 0,
				mag: 0,
				skl: +2,
				spd: +2,
				lck: -1,
				def: -2,
				res: 0
			},
			children: []
		},
		stahl: {
			nameEN: 'Stahl',
			nameJA: 'ソール',
			gender: 'male',
			birthday: 'June 16th',
			generation: 1,
			recruit: 'Joins automatically in Chapter 2.',
			baseClasses: ['archer', 'cavalier', 'myrmidon'],
			possibleSupport: {
				a: ['donnel', 'kella'],
				s: ['lissa', 'sully', 'maribelle', 'cordelia', 'panne', 'nowi', 'olivia', 'cherche', 'miriel', 'tharja']
			},
			maxStatMod: {
				str: +2,
				mag: -1,
				skl: +1,
				spd: 0,
				lck: -2,
				def: +2,
				res: -1
			},
			children: []
		},
		vaike: {
			nameEN: 'Vaike',
			nameJA: 'ヴェイク',
			gender: 'male',
			birthday: 'December 26th',
			generation: 1,
			recruit: 'Joins automatically in Chapter 2.',
			baseClasses: ['fighter', 'thief', 'barbarian'],
			possibleSupport: {
				a: ['chrom', 'lon_qu'],
				s: ['lissa', 'sully', 'maribelle', 'cordelia', 'panne', 'nowi', 'olivia', 'cherche', 'miriel', 'tharja']
			},
			maxStatMod: {
				str: +3,
				mag: -2,
				skl: +1,
				spd: +1,
				lck: -1,
				def: 0,
				res: -2
			},
			children: []
		},
		miriel: {
			nameEN: 'Miriel',
			nameJA: 'ミリエル',
			gender: 'female',
			birthday: 'February 12th',
			generation: 1,
			recruit: 'Joins automatically on turn 2 of Chapter 2.',
			baseClasses: ['mage', 'troubadour', 'dark_mage'],
			possibleSupport: {
				a: ['sully', 'cherche'],
				s: ['kellam', 'donnel', 'frederick', 'gaius', 'gregor', 'henry', 'libra', 'ricken', 'lon_qu', 'stahl', 'vaike', 'virion']
			},
			maxStatMod: {
				str: -2,
				mag: +3,
				skl: +1,
				spd: +1,
				lck: 0,
				def: -2,
				res: 0
			},
			children: ['laurent']
		},
		sumia: {
			nameEN: 'Sumia',
			nameJA: 'スミア',
			gender: 'female',
			birthday: 'November 24th',
			generation: 1,
			recruit: 'Joins automatically in Chapter 3.',
			baseClasses: ['pegasus_knight', 'knight', 'cleric'],
			possibleSupport: {
				a: ['sully', 'cordelia'],
				s: ['chrom', 'gaius', 'frederick', 'henry']
			},
			maxStatMod: {
				str: -2,
				mag: 0,
				skl: +2,
				spd: +3,
				lck: 0,
				def: -2,
				res: +1
			},
			children: ['cynthia']
		},
		kellam: {
			nameEN: 'カラム',
			nameJA: 'フレデリク',
			gender: 'male',
			birthday: 'June 24th',
			generation: 1,
			recruit: 'Joins automatically in Chapter 3.',
			baseClasses: ['knight', 'thief', 'priest'],
			possibleSupport: {
				a: ['donnel', 'stahl'],
				s: ['lissa', 'sully', 'maribelle', 'cordelia', 'panne', 'nowi', 'olivia', 'cherche', 'miriel', 'tharja']
			},
			maxStatMod: {
				str: +1,
				mag: 0,
				skl: +1,
				spd: -2,
				lck: -2,
				def: +3,
				res: 0
			},
			children: []
		},
		donnel: {
			nameEN: 'Donnel',
			nameJA: 'ドニ',
			gender: 'male',
			birthday: 'June 24th',
			generation: 1,
			recruit: 'Joins permanently after Paralogue 1 if he gained a level during Paralogue 1.',
			baseClasses: ['villager', 'fighter', 'mercenary'],
			possibleSupport: {
				a: ['vaike', 'gregor'],
				s: ['lissa', 'sully', 'maribelle', 'cordelia', 'panne', 'nowi', 'olivia', 'cherche', 'miriel', 'tharja']
			},
			maxStatMod: {
				str: +1,
				mag: -1,
				skl: -1,
				spd: -1,
				lck: +3,
				def: +1,
				res: -1
			},
			children: []
		},
		lon_qu: {
			nameEN: 'Lon\'qu',
			nameJA: 'ロンク',
			gender: 'male',
			birthday: 'October 10th',
			generation: 1,
			recruit: 'Joins automatically at the end of Chapter 4.',
			baseClasses: ['myrmidon', 'thief', 'wyvern_rider'],
			possibleSupport: {
				a: ['vaike', 'gregor'],
				s: ['lissa', 'sully', 'maribelle', 'cordelia', 'panne', 'nowi', 'olivia', 'cherche', 'miriel', 'tharja']
			},
			maxStatMod: {
				str: 0,
				mag: 0,
				skl: +3,
				spd: +3,
				lck: 0,
				def: -2,
				res: -2
			},
			children: []
		},
		ricken: {
			nameEN: 'Ricken',
			nameJA: 'リヒト',
			gender: 'male',
			birthday: 'May 23rd',
			generation: 1,
			recruit: 'Joins automatically in Chapter 5.',
			baseClasses: ['mage', 'calavier', 'archer'],
			possibleSupport: {
				a: ['gregor', 'henry'],
				s: ['lissa', 'sully', 'maribelle', 'cordelia', 'panne', 'nowi', 'olivia', 'cherche', 'miriel', 'tharja']
			},
			maxStatMod: {
				str: -1,
				mag: +2,
				skl: 0,
				spd: 0,
				lck: +1,
				def: -1,
				res: 0
			},
			children: []
		},
		maribelle: {
			nameEN: 'Maribelle',
			nameJA: 'マリアベル',
			gender: 'female',
			birthday: 'April 14th',
			generation: 1,
			recruit: 'Joins automatically in Chapter 5.',
			baseClasses: ['mage', 'troubadour', 'pegasus_knight'],
			possibleSupport: {
				a: ['lissa', 'olivia'],
				s: ['chrom', 'kellam', 'donnel', 'frederick', 'gaius', 'gregor', 'henry', 'libra', 'ricken', 'lon_qu', 'stahl', 'vaike', 'virion']
			},
			maxStatMod: {
				str: -3,
				mag: +2,
				skl: +1,
				spd: 0,
				lck: +3,
				def: -3,
				res: +2
			},
			children: ['brady']
		},
		panne: {
			nameEN: 'Panne',
			nameJA: 'ベルベット',
			gender: 'female',
			birthday: 'November 18th',
			generation: 1,
			recruit: 'Joins automatically on turn 2 of Chapter 6.',
			baseClasses: ['taguel', 'thief', 'wyvern_rider'],
			possibleSupport: {
				a: ['cordelia', 'olivia'],
				s: ['kellam', 'donnel', 'frederick', 'gaius', 'gregor', 'henry', 'libra', 'ricken', 'lon_qu', 'stahl', 'vaike', 'virion']
			},
			maxStatMod: {
				str: +2,
				mag: -1,
				skl: +1,
				spd: 0,
				lck: +3,
				def: -2,
				res: +2
			},
			children: ['yarne']
		},
		gaius: {
			nameEN: 'Gaius',
			nameJA: 'ガイア',
			gender: 'male',
			birthday: 'January 2nd',
			generation: 1,
			recruit: 'Talk to him with Chrom in Chapter 6. He appears as an enemy.',
			baseClasses: ['fighter', 'thief', 'myrmidon'],
			possibleSupport: {
				a: ['libra', 'chrom'],
				s: ['sumia', 'lissa', 'sully', 'maribelle', 'cordelia', 'panne', 'nowi', 'olivia', 'cherche', 'miriel', 'tharja']
			},
			maxStatMod: {
				str: +1,
				mag: -1,
				skl: +2,
				spd: +3,
				lck: -1,
				def: +1,
				res: -1
			},
			children: []
		},
		cordelia: {
			nameEN: 'Cordelia',
			nameJA: 'ティアモ',
			gender: 'female',
			birthday: 'July 7th',
			generation: 1,
			recruit: 'Joins automatically on turn 3 of Chapter 7.',
			baseClasses: ['pegasus_knight', 'mercenary', 'dark_mage'],
			possibleSupport: {
				a: ['panne', 'sumia'],
				s: ['kellam', 'donnel', 'frederick', 'gaius', 'gregor', 'henry', 'libra', 'ricken', 'lon_qu', 'stahl', 'vaike', 'virion']
			},
			maxStatMod: {
				str: +1,
				mag: -1,
				skl: +2,
				spd: +2,
				lck: -1,
				def: +1,
				res: -2
			},
			children: ['severa']
		},
		gregor: {
			nameEN: 'Gregor',
			nameJA: '',
			gender: 'male',
			birthday: 'January 27th',
			generation: 1,
			recruit: 'Joins automatically in Chapter 8.',
			baseClasses: ['barbarian', 'mercenary', 'myrmidon'],
			possibleSupport: {
				a: ['ricken', 'lon_qu'],
				s: ['lissa', 'sully', 'maribelle', 'cordelia', 'panne', 'nowi', 'olivia', 'cherche', 'miriel', 'tharja']
			},
			maxStatMod: {
				str: +2,
				mag: -1,
				skl: +2,
				spd: 0,
				lck: -1,
				def: +1,
				res: -2
			},
			children: []
		},
		nowi: {
			nameEN: 'Nowi',
			nameJA: '',
			gender: 'female',
			birthday: 'September 21st',
			generation: 1,
			recruit: 'Joins automatically in Chapter 8.',
			baseClasses: ['manakete', 'make', 'wyvern_rider'],
			possibleSupport: {
				a: ['cherche', 'tharja'],
				s: ['kellam', 'donnel', 'frederick', 'gaius', 'gregor', 'henry', 'libra', 'ricken', 'lon_qu', 'stahl', 'vaike', 'virion']
			},
			maxStatMod: {
				str: +1,
				mag: +1,
				skl: -1,
				spd: -2,
				lck: +1,
				def: +3,
				res: +2
			},
			children: ['nah']
		},
		libra: {
			nameEN: 'Libra',
			nameJA: '',
			gender: 'male',
			birthday: 'July 1st',
			generation: 1,
			recruit: 'Talk to him with Chrom in Chapter 9.',
			baseClasses: ['priest', 'mage', 'dark_mage'],
			possibleSupport: {
				a: ['gaius', 'virion'],
				s: ['lissa', 'sully', 'maribelle', 'cordelia', 'panne', 'nowi', 'olivia', 'cherche', 'miriel', 'tharja']
			},
			maxStatMod: {
				str: 0,
				mag: +1,
				skl: +1,
				spd: 0,
				lck: -1,
				def: 0,
				res: +1
			},
			children: []
		},
		tharja: {
			nameEN: 'Tharja',
			nameJA: 'サーリャ',
			gender: 'female',
			birthday: 'April 2nd',
			generation: 1,
			recruit: 'Talk to her with Chrom in Chapter 9. She appears as an enemy.',
			baseClasses: ['dark_mage', 'knight', 'archer'],
			possibleSupport: {
				a: ['nowi'],
				s: ['kellam', 'donnel', 'frederick', 'gaius', 'gregor', 'henry', 'libra', 'ricken', 'lon_qu', 'stahl', 'vaike', 'virion']
			},
			maxStatMod: {
				str: 0,
				mag: +3,
				skl: -1,
				spd: +1,
				lck: -3,
				def: +1,
				res: 0
			},
			children: ['noire']
		},
		anna: {
			nameEN: 'Anna',
			nameJA: 'アンナ',
			gender: 'female',
			birthday: 'June 11th',
			generation: 1,
			recruit: 'Talk to her with Chrom in Paralogue 4.',
			baseClasses: ['thief', 'mage', 'archer'],
			possibleSupport: {
				a: ['tiki']
			},
			maxStatMod: {
				str: -1,
				mag: 0,
				skl: +1,
				spd: 0,
				lck: +3,
				def: -1,
				res: 0
			},
			children: []
		},
		olivia: {
			nameEN: 'Olivia',
			nameJA: '',
			gender: 'female',
			birthday: 'August 20th',
			generation: 1,
			recruit: 'Joins automatically in Chapter 11.',
			baseClasses: ['dancer', 'myrmidon', 'pegasus_knight'],
			possibleSupport: {
				a: ['maribelle', 'panne'],
				s: ['chrom', 'kellam', 'donnel', 'frederick', 'gaius', 'gregor', 'henry', 'libra', 'ricken', 'lon_qu', 'stahl', 'vaike', 'virion']
			},
			maxStatMod: {
				str: 0,
				mag: 0,
				skl: +1,
				spd: +1,
				lck: 0,
				def: -1,
				res: -1
			},
			children: ['inigo']
		},
		cherche: {
			nameEN: 'Cherche',
			nameJA: 'フレデリク',
			gender: 'female',
			birthday: 'October 17th',
			generation: 1,
			recruit: 'Joins automatically in Chapter 12.',
			baseClasses: ['wyvern_rider', 'troubadour', 'cleric'],
			possibleSupport: {
				a: ['nowi', 'miriel'],
				s: ['kellam', 'donnel', 'frederick', 'gaius', 'gregor', 'henry', 'libra', 'ricken', 'lon_qu', 'stahl', 'vaike', 'virion']
			},
			maxStatMod: {
				str: +3,
				mag: 0,
				skl: -1,
				spd: -1,
				lck: 0,
				def: +2,
				res: -2
			},
			children: ['gerome']
		},
		henry: {
			nameEN: 'Henry',
			nameJA: 'フレデリク',
			gender: 'male',
			birthday: 'November 13rd',
			generation: 1,
			recruit: 'Joins automatically in Chapter 13.',
			baseClasses: ['dark_mage', 'barbarian', 'thief'],
			possibleSupport: {
				a: ['ricken', 'frederick'],
				s: ['sumia', 'lissa', 'sully', 'maribelle', 'cordelia', 'panne', 'nowi', 'olivia', 'cherche', 'miriel', 'tharja']
			},
			maxStatMod: {
				str: +1,
				mag: +1,
				skl: +2,
				spd: 0,
				lck: -2,
				def: +1,
				res: -1
			},
			children: []
		},
		say_ri: {
			nameEN: 'Say\'ri',
			nameJA: 'サイリ',
			gender: 'female',
			birthday: 'January 11nd',
			generation: 1,
			recruit: 'Talk to her in Chapter 15 with Chrom.',
			baseClasses: ['myrmidon', 'pegasus_knight', 'wyvern_rider'],
			possibleSupport: {
				a: ['tiki']
			},
			maxStatMod: {
				str: +1,
				mag: -1,
				skl: +1,
				spd: +1,
				lck: -1,
				def: 0,
				res: +1
			},
			children: []
		},
		tiki: {
			nameEN: 'Tiki',
			nameJA: 'チキ',
			gender: 'female',
			birthday: 'February 28th',
			generation: 1,
			recruit: 'Joins automatically after completing Paralogue 17.',
			baseClasses: ['manakete', 'wyvern_rider', 'mage'],
			possibleSupport: {
				a: ['lucina', 'anna', 'say_ri', 'nah']
			},
			maxStatMod: {
				str: 0,
				mag: -1,
				skl: 0,
				spd: +1,
				lck: +2,
				def: +1,
				res: +2
			},
			children: []
		},
		basilio: {
			nameEN: 'Basilio',
			nameJA: 'バジーリオ',
			gender: 'male',
			birthday: 'August 13th',
			generation: 1,
			recruit: 'Joins automatically in Chapter 23 after defeating Validar.',
			baseClasses: ['fighter', 'barbarian', 'mage'],
			possibleSupport: {
				a: ['flavia']
			},
			maxStatMod: {
				str: +3,
				mag: -2,
				skl: +1,
				spd: +1,
				lck: -1,
				def: +1,
				res: -1
			},
			children: []
		},
		flavia: {
			nameEN: 'Flavia',
			nameJA: 'フラヴィア',
			gender: 'female',
			birthday: 'October 28th',
			generation: 1,
			recruit: 'Joins automatically in Chapter 23 after defeating Validar.',
			baseClasses: ['mercenary', 'thief', 'knight'],
			possibleSupport: {
				a: ['basilio']
			},
			maxStatMod: {
				str: +1,
				mag: -1,
				skl: +1,
				spd: +1,
				lck: 0,
				def: -1,
				res: 0
			},
			children: []
		},
	},
	gen2: {
		lucina: {
			nameEN: 'Lucina',
			nameJA: 'フレデリク',
			gender: 'female',
			birthday: 'April 20th',
			generation: 2,
			recruit: 'Joins automatically after completing Chapter 13.',
			baseClasses: ['lord', 'calavier', 'archer'],
			possibleSupport: {
				a: ['kjelle', 'tiki', 'cynthia'],
				s: ['owain', 'inigo', 'brady', 'yarne', 'laurent', 'gerome', 'morgan_m']
			},
			maxStatMod: {},
			parents: ['chrom']
		},
		owain: {
			nameEN: 'Owain',
			nameJA: 'フレデリク',
			gender: 'male',
			birthday: 'July 15th',
			generation: 2,
			recruit: 'Talk to him with Chrom or Lissa in Paralogue 5.',
			baseClasses: ['myrmidon', 'priest', 'barbarian'],
			possibleSupport: {
				a: ['inigo', 'brady'],
				s: ['morgan_f', 'lucina', 'kjelle', 'cynthia', 'severa', 'noire', 'nah']
			},
			maxStatMod: {},
			parents: ['lissa']
		},
		inigo: {
			nameEN: 'Inigo',
			nameJA: 'フレデリク',
			gender: 'male',
			birthday: 'August 7th',
			generation: 2,
			recruit: 'Talk to him with Chrom or Olivia in Paralogue 7.',
			baseClasses: ['myrmidon', 'mercenary', 'barbarian'],
			possibleSupport: {
				a: ['gerome', 'owain', 'brady'],
				s: ['lucina', 'kjelle', 'cynthia', 'severa', 'noire', 'nah', 'morgan_m']
			},
			maxStatMod: {},
			parents: ['olivia']
		},
		brady: {
			nameEN: 'Brady',
			nameJA: 'フレデリク',
			gender: 'male',
			birthday: 'February 22nd',
			generation: 2,
			recruit: 'Talk to him with Chrom or Maribelle in Paralogue 7.',
			baseClasses: ['priest', 'cavalier', 'mage'],
			possibleSupport: {
				a: ['yarne', 'owain', 'inigo'],
				s: ['lucina', 'kjelle', 'cynthia', 'severa', 'noire', 'nah', 'morgan_f']
			},
			maxStatMod: {},
			parents: ['maribelle']
		},
		kjelle: {
			nameEN: 'Kjelle',
			nameJA: 'フレデリク',
			gender: 'female',
			birthday: 'September 29nd',
			generation: 2,
			recruit: 'Talk to her with Chrom or Sully in Paralogue 9.',
			baseClasses: ['knight', 'cavalier', 'myrmidon'],
			possibleSupport: {
				a: ['lucina', 'severa'],
				s: ['gerome', 'owain', 'inigo', 'brady', 'yarne', 'laurent', 'morgan_m']
			},
			maxStatMod: {},
			parents: ['sully']
		},
		cynthia: {
			nameEN: 'Cynthia',
			nameJA: 'フレデリク',
			gender: 'female',
			birthday: 'May 14th',
			generation: 2,
			recruit: 'Talk to her with Chrom or Sumia in Paralogue 9. She appears as an enemy.',
			baseClasses: ['knight', 'pegasus_knight', 'cleric'],
			possibleSupport: {
				a: ['lucina', 'severa', 'nah'],
				s: ['gerome', 'owain', 'inigo', 'brady', 'yarne', 'laurent', 'morgan_f']
			},
			maxStatMod: {},
			parents: ['sumia']
		},
		severa: {
			nameEN: 'Severa',
			nameJA: 'フレデリク',
			gender: 'female',
			birthday: 'May 14th',
			generation: 2,
			recruit: 'She appears as an NPC in Paralogue 10. Clear a path for her to go talk to Holland, who appears as an enemy villager in the upper-right. After she talks to Holland, she will join you. Holland will not attack, but the other enemies will.',
			baseClasses: ['mercenary', 'pegasus_knight', 'dark_mage'],
			possibleSupport: {
				a: ['kjelle', 'cynthia', 'noire'],
				s: ['gerome', 'owain', 'inigo', 'brady', 'yarne', 'laurent', 'morgan_m']
			},
			maxStatMod: {},
			parents: ['cordelia']
		},
		gerome: {
			nameEN: 'Gerome',
			nameJA: 'フレデリク',
			gender: 'male',
			birthday: 'September 1st',
			generation: 2,
			recruit: 'Talk to him with Chrom or Cherche in Paralogue 11.',
			baseClasses: ['wyvern_rider', 'fighter', 'priest'],
			possibleSupport: {
				a: ['laurent', 'inigo'],
				s: ['lucina', 'kjelle', 'cynthia', 'severa', 'noire', 'nah', 'morgan_f']
			},
			maxStatMod: {},
			parents: ['cherche']
		},
		yarne: {
			nameEN: 'Yarne',
			nameJA: 'フレデリク',
			gender: 'male',
			birthday: 'March 14th',
			generation: 2,
			recruit: 'Talk to him With Chrom or Panne in Paralogue 13. He appears as an enemy.',
			baseClasses: ['taguel', 'barbarian', 'thief'],
			possibleSupport: {
				a: ['brady', 'morgan_m', 'laurent'],
				s: ['lucina', 'kjelle', 'cynthia', 'severa', 'noire', 'nah', 'morgan_f']
			},
			maxStatMod: {},
			parents: ['panne']
		},
		laurent: {
			nameEN: 'Laurent',
			nameJA: 'フレデリク',
			gender: 'male',
			birthday: 'April 25th',
			generation: 2,
			recruit: 'Have Chrom or Miriel visit the southwestern village in Paralouge 14.',
			baseClasses: ['mage', 'barbarian', 'dark_mage'],
			possibleSupport: {
				a: ['gerome', 'morgan_m', 'yarne'],
				s: ['lucina', 'kjelle', 'cynthia', 'severa', 'noire', 'nah', 'morgan_f']
			},
			maxStatMod: {},
			parents: ['miriel']
		},
		noire: {
			nameEN: 'Noire',
			nameJA: 'フレデリク',
			gender: 'male',
			birthday: 'October 7th',
			generation: 2,
			recruit: 'Automatically joins on turn 2 of Paralogue 15.',
			baseClasses: ['archer', 'knight', 'dark_mage'],
			possibleSupport: {
				a: ['severa', 'morgan_f'],
				s: ['gerome', 'owain', 'inigo', 'brady', 'yarne', 'laurent', 'morgan_m']
			},
			maxStatMod: {},
			parents: ['tharja']
		},
		nah: {
			nameEN: 'Nah',
			nameJA: 'フレデリク',
			gender: 'female',
			birthday: 'March 29th',
			generation: 2,
			recruit: 'Talk to her with Chrom or Nowi in Paralogue 16.',
			baseClasses: ['manakete', 'wyvern_rider', 'mage'],
			possibleSupport: {
				a: ['tiki', 'morgan_f', 'cynthia'],
				s: ['gerome', 'owain', 'inigo', 'brady', 'yarne', 'laurent', 'morgan_m']
			},
			maxStatMod: {},
			parents: ['tharja']
		},
		morgan: {
			nameEN: 'Morgan',
			nameJA: 'フレデリク',
			gender: '',
			birthday: 'March 29th',
			generation: 2,
			recruit: 'Talk to her with Chrom or Nowi in Paralogue 16.',
			baseClasses: ['tatician'],
			possibleSupport: {
				a: ['noire', 'nah'],
				s: ['gerome', 'owain', 'inigo', 'brady', 'yarne', 'laurent']
			},
			maxStatMod: {},
			parents: ['tharja']
		},
	}
};

module.exports = characters;
