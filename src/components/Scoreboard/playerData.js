const squads = {
    "ODI": {
        "2022": {},
        "2023": {},
        "2024": {}
    },
    "T20": {
        "2022": {},
        "2023": {},
        "2024": {}
    }
};

// Define shared squad data with roles
const commonOdiSquads = {
    "India vs Sri Lanka": {
        "India": {
            "Batters": ["Rohit Sharma (C)", "Virat Kohli", "Shubman Gill", "Suryakumar Yadav", "KL Rahul"],
            "AllRounders": ["Hardik Pandya", "Ravindra Jadeja"],
            "Bowlers": ["Mohammed Shami", "Jasprit Bumrah", "Yuzvendra Chahal", "Kuldeep Yadav"]
        },
        "Sri Lanka": {
            "Batters": ["Dasun Shanaka (C)", "Kusal Mendis", "Pathum Nissanka", "Charith Asalanka", "Dhananjaya de Silva"],
            "AllRounders": ["Wanindu Hasaranga", "Chamika Karunaratne"],
            "Bowlers": ["Maheesh Theekshana", "Kasun Rajitha", "Lahiru Kumara", "Dunith Wellalage"]
        }
    },
    "India vs Australia": {
        "India": {
            "Batters": ["Rohit Sharma (C)", "Virat Kohli", "Shubman Gill", "Shreyas Iyer", "KL Rahul"],
            "AllRounders": ["Hardik Pandya", "Ravindra Jadeja"],
            "Bowlers": ["Mohammed Siraj", "Jasprit Bumrah", "Yuzvendra Chahal", "Kuldeep Yadav"]
        },
        "Australia": {
            "Batters": ["David Warner", "Steve Smith", "Marnus Labuschagne"],
            "AllRounders": ["Glenn Maxwell", "Marcus Stoinis", "Cameron Green"],
            "Bowlers": ["Pat Cummins (C)", "Josh Hazlewood", "Mitchell Starc", "Adam Zampa", "Alex Carey"]
        }
    },
    "Australia vs England": {
        "Australia": {
            "Batters": ["David Warner", "Steve Smith", "Marnus Labuschagne"],
            "AllRounders": ["Glenn Maxwell", "Marcus Stoinis", "Cameron Green"],
            "Bowlers": ["Pat Cummins (C)", "Josh Hazlewood", "Mitchell Starc", "Adam Zampa", "Alex Carey"]
        },
        "England": {
            "Batters": ["Jos Buttler (C)", "Jonny Bairstow", "Joe Root", "Ben Stokes", "Harry Brook"],
            "AllRounders": ["Moeen Ali", "Chris Woakes"],
            "Bowlers": ["Jofra Archer", "Adil Rashid", "Mark Wood", "Sam Curran"]
        }
    }
};

const commonT20Squads = {
    "Pakistan vs Bangladesh": {
        "Pakistan": {
            "Batters": ["Babar Azam (C)", "Mohammad Rizwan", "Fakhar Zaman"],
            "AllRounders": ["Shadab Khan", "Iftikhar Ahmed", "Mohammad Nawaz"],
            "Bowlers": ["Shaheen Afridi", "Haris Rauf", "Naseem Shah", "Imad Wasim", "Mohammad Hasnain"]
        },
        "Bangladesh": {
            "Batters": ["Shakib Al Hasan (C)", "Litton Das", "Najmul Hossain Shanto", "Afif Hossain", "Mahmudullah"],
            "AllRounders": ["Mehidy Hasan"],
            "Bowlers": ["Taskin Ahmed", "Mustafizur Rahman", "Hasan Mahmud", "Nasum Ahmed", "Ebadot Hossain"]
        }
    },
    "South Africa vs West Indies": {
        "South Africa": {
            "Batters": ["Temba Bavuma (C)", "Quinton de Kock", "Rassie van der Dussen", "Aiden Markram", "David Miller"],
            "AllRounders": ["Marco Jansen", "Keshav Maharaj"],
            "Bowlers": ["Kagiso Rabada", "Anrich Nortje", "Lungi Ngidi", "Tabraiz Shamsi"]
        },
        "West Indies": {
            "Batters": ["Rovman Powell (C)", "Brandon King", "Kyle Mayers", "Nicholas Pooran", "Shimron Hetmyer"],
            "AllRounders": ["Jason Holder", "Romario Shepherd"],
            "Bowlers": ["Alzarri Joseph", "Akeal Hosein", "Gudakesh Motie", "Obed McCoy"]
        }
    },
    "New Zealand vs England": {
        "New Zealand": {
            "Batters": ["Kane Williamson (C)", "Devon Conway", "Finn Allen", "Glenn Phillips", "Daryl Mitchell"],
            "AllRounders": ["James Neesham", "Mitchell Santner"],
            "Bowlers": ["Tim Southee", "Trent Boult", "Ish Sodhi", "Lockie Ferguson"]
        },
        "England": {
            "Batters": ["Jos Buttler (C)", "Phil Salt", "Dawid Malan", "Ben Duckett", "Harry Brook"],
            "AllRounders": ["Liam Livingstone", "Sam Curran"],
            "Bowlers": ["Chris Jordan", "Mark Wood", "Adil Rashid", "Jofra Archer"]
        }
    }
};

// Assign squads to all required years
["2022", "2023", "2024"].forEach(year => {
    squads["ODI"][year] = commonOdiSquads;
    squads["T20"][year] = commonT20Squads;
});

export default squads;