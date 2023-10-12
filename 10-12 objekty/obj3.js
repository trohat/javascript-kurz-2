const pes = {
    jmeno: "Alík",
    steka: true,
    kouse: false,
    rasa: "bernardýn",
    "delka srsti": 20,
    "pocet nohou": 4
};

const pes2 = {
    jmeno: "Rex",
    steka: false,
    kouse: true,
    rasa: "vlčák",
    "delka srsti": 5,
    "pocet nohou": 4
};

const pes3 = {
    jmeno: "Rafík",
    steka: false,
    kouse: false,
    rasa: "dalmatin",
    "delka srsti": 2,
    "pocet nohou": 4
};

const pole = [pes, pes2, pes3];

const jinePole = [
    {
        jmeno: "Alík",
        steka: true,
        kouse: false,
        rasa: "bernardýn",
        "delka srsti": 20,
        "pocet nohou": 4,
        majitel: {
            jmeno: "Anička",
            pohlavi: "žena",
            vyska: 173,
            "barva vlasů": "žlutá"
        },
        kamaradi: [
            {
                jmeno: "Maxipes",
                steka: true,
                kouse: false,
                rasa: "velký pes",
                "delka srsti": 40,
                "pocet nohou": 4
            },
            {
                jmeno: "Ben",
                steka: true,
                kouse: true,
                rasa: "jezevčík",
                "delka srsti": 5,
                "pocet nohou": 4
            }
        ]
    },
    {
        jmeno: "Rex",
        steka: false,
        kouse: true,
        rasa: "vlčák",
        "delka srsti": 5,
        "pocet nohou": 4
    },
    {
        jmeno: "Rafík",
        steka: false,
        kouse: false,
        rasa: "dalmatin",
        "delka srsti": 2,
        "pocet nohou": 4,
        kamaradi: [
            {
                jmeno: "Alík",
                steka: true,
                kouse: false,
                rasa: "bernardýn",
                "delka srsti": 20,
                "pocet nohou": 4
            },
            {
                jmeno: "Rex",
                steka: false,
                kouse: true,
                rasa: "vlčák",
                "delka srsti": 5,
                "pocet nohou": 4
            }
        ]
    }
];