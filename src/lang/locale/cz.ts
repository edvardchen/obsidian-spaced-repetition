// čeština

export default {
    // flashcard-modal.tsx
    DECKS: "Balíčky",
    DUE_CARDS: "Kartičky po termínu",
    NEW_CARDS: "Nové kartičky",
    TOTAL_CARDS: "Kartiček celkem",
    EDIT_LATER: "Upravit později",
    RESET_CARD_PROGRESS: "Vynulovat pokrok kartičky",
    HARD: "Težké",
    GOOD: "Dobré",
    EASY: "Jednoduché",
    SHOW_ANSWER: "Ukázat odpověď",
    CARD_PROGRESS_RESET: "Pokrok kartičky byl vynulován.",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "Otevřít poznámku k revizi",
    REVIEW_CARDS: "Poznámek k revizi",
    REVIEW_EASY_FILE_MENU: "Revize: Jednoduché",
    REVIEW_GOOD_FILE_MENU: "Revize: Dobré",
    REVIEW_HARD_FILE_MENU: "Revize: Těžké",
    REVIEW_NOTE_EASY_CMD: "Označit poznámku jako jednoduchou",
    REVIEW_NOTE_GOOD_CMD: "Označit poznámku jako dobrou",
    REVIEW_NOTE_HARD_CMD: "Označit poznámku jako težkou",
    REVIEW_CARDS_IN_NOTE: "Revidovat kartičky v této poznámce.",
    CRAM_CARDS_IN_NOTE: "Cram kartičky v této poznámce.",
    REVIEW_ALL_CARDS: "Revidovat kartičky ve všech poznámkách",
    VIEW_STATS: "Ukázat statistiky",
    STATUS_BAR: "Revize: ${dueNotesCount} poznámek, ${dueFlashcardsCount} kartiček po termínu",
    SYNC_TIME_TAKEN: "Synchronizace trvala ${t}ms",
    NOTE_IN_IGNORED_FOLDER: "Poznámka je uložena v ignorované složce (zkontrolujte nastavení).",
    PLEASE_TAG_NOTE: "Prosím označne poznámku odpovídajícím tagem pro revizi (v nastavení).",
    RESPONSE_RECEIVED: "Odpověď přijata.",
    NO_DECK_EXISTS: "Neexistuje žádný balíček pro ${deckName}",
    ALL_CAUGHT_UP: "Vše zrevidováno",

    // scheduling.ts
    DAYS_STR_IVL: "${interval} den/dní",
    MONTHS_STR_IVL: "${interval} měsíc(ů)",
    YEARS_STR_IVL: "${interval} rok(ů)",
    DAYS_STR_IVL_MOBILE: "${interval}d",
    MONTHS_STR_IVL_MOBILE: "${interval}m",
    YEARS_STR_IVL_MOBILE: "${interval}r",

    // settings.ts
    SETTINGS_HEADER: "Spaced Repetition Plugin - Nastavení",
    CHECK_WIKI: 'Pro více informací jděte na <a href="${wiki_url}">wiki</a>.',
    FOLDERS_TO_IGNORE: "Ignorované složky",
    FOLDERS_TO_IGNORE_DESC:
        "Zadejte cesty ke složkám oddělené odřádkováním napříkad. Šablony Meta/Scripts",
    FLASHCARDS: "Kartičky",
    FLASHCARD_EASY_LABEL: "Easy Button Text",
    FLASHCARD_GOOD_LABEL: "Good Button Text",
    FLASHCARD_HARD_LABEL: "Hard Button Text",
    FLASHCARD_EASY_DESC: 'Customize the label for the "Easy" Button',
    FLASHCARD_GOOD_DESC: 'Customize the label for the "Good" Button',
    FLASHCARD_HARD_DESC: 'Customize the label for the "Hard" Button',
    FLASHCARD_TAGS: "Tag pro kartičky",
    FLASHCARD_TAGS_DESC:
        "Zadete tagy oodělené mezerou nebo odřádkováním například. #kartičky #balíčke2 #balíček3.",
    CONVERT_FOLDERS_TO_DECKS: "Převést složky na balíčky a podbalíčky?",
    CONVERT_FOLDERS_TO_DECKS_DESC: "Toto je alternativa k tagům kartiček viz nastavení výše.",
    INLINE_SCHEDULING_COMMENTS:
        "Uložit plánovací komentář na stejný řádek jako poslední položka kartičky?",
    INLINE_SCHEDULING_COMMENTS_DESC:
        "Zapnutí této volby způsobí, že HTML komentáře nebudou rozbíjet formátování listů.",
    BURY_SIBLINGS_TILL_NEXT_DAY: "Odložit příbuzné kartičky na další den?",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Příbuzné kartičky jsou kartičky generované z textu stejné poznámky například cloze smazání",
    SHOW_CARD_CONTEXT: "Ukázat kontext v kartičce?",
    SHOW_CARD_CONTEXT_DESC: "například Titulek > Nadpis1 > Podnadpis > ... > Podnadpis",
    CARD_MODAL_HEIGHT_PERCENT: "Výška kartiček v procentech",
    CARD_MODAL_SIZE_PERCENT_DESC:
        "Mělo by být nastaveno na 100% na mobilu nebo když používáte velké obrázky",
    RESET_DEFAULT: "Resetovat výchozí nastavení",
    CARD_MODAL_WIDTH_PERCENT: "Šířka kartiček v procentech",
    FILENAME_OR_OPEN_FILE: "Zobrazit jméno souboru místo 'Změnit později' v revizi kartičky?",
    RANDOMIZE_CARD_ORDER: "Náhodně změnit pořadí kartiček během revize?",
    DISABLE_CLOZE_CARDS: "Vypnout cloze kartičky?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "Převést ==zvýraznění== na clozes?",
    CONVERT_BOLD_TEXT_TO_CLOZES: "Převést **tučný text** na clozes?",
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "Převést {{složené závorky}} na clozes?",
    INLINE_CARDS_SEPARATOR: "Oddělovač pro inline kartičky",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "Pozor. Jakmile toto změníte, budete muset ručně upravit všechny existující kartičky.",
    INLINE_REVERSED_CARDS_SEPARATOR: "Oddělovač pro otočené inline kartičky",
    MULTILINE_CARDS_SEPARATOR: "Oddělovač pro víceřádkové kartičky",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "Oddělovač pro víceřádkove otočené kartičky",
    NOTES: "Poznámky",
    TAGS_TO_REVIEW: "Tag pro revizi",
    TAGS_TO_REVIEW_DESC:
        "Zadejte tagy oddělené mezerami nebo odřádkováním například #review #tag2 #tag3.",
    OPEN_RANDOM_NOTE: "Otevřít náhodnou poznámku pro revizi",
    OPEN_RANDOM_NOTE_DESC: "Pokud toto vypnete, poznámky budou řazeny dle důležitosti (PageRank).",
    AUTO_NEXT_NOTE: "Otevřít automaticky další poznámku po dokončení revize",
    DISABLE_FILE_MENU_REVIEW_OPTIONS:
        "Vypnout volby revize v menu souboru například 'Revize: Jednoduché'",
    DISABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "Po vypnutí můžete používat klávesové zkratky. Restartujte Obsidian po změně nastavení.",
    MAX_N_DAYS_REVIEW_QUEUE: "Maximální počet dní zobrazených v pravém panelu",
    MIN_ONE_DAY: "Počet dní musí být minimálně 1.",
    VALID_NUMBER_WARNING: "Prosím zadejte validní číslo.",
    ALGORITHM: "Algoritmus",
    CHECK_ALGORITHM_WIKI: 'Pro více informací jděte na <a href="${algo_url}">popis algoritmu</a>.',
    BASE_EASE: "Základní složitost",
    BASE_EASE_DESC: "minimum = 130, nejlépe přibližně 250.",
    BASE_EASE_MIN_WARNING: "Základní složitost musí být minimálně 130.",
    LAPSE_INTERVAL_CHANGE: "Změna intervalu pokud kartičku/poznámku označíte jako složitou",
    LAPSE_INTERVAL_CHANGE_DESC: "nový_inteval = starý_interval * změna_intevalu / 100.",
    EASY_BONUS: "Bonus pro jednoduché",
    EASY_BONUS_DESC:
        "Tento bonus umožňuje nastavit rozdíl intervalu mezi jednoduchými a dobrými kartičkami/poznámkami (minimum = 100%).",
    EASY_BONUS_MIN_WARNING: "Bonus pro jednoduchost musí být minimálně 100.",
    MAX_INTERVAL: "Maximální interval",
    MAX_INTERVAL_DESC: "Umožňuje nastavit horní limit pro interval (defaultně = 100 let).",
    MAX_INTERVAL_MIN_WARNING: "Maximální interval musí být alespoň 1 den.",
    MAX_LINK_CONTRIB: "Maximální příspěvěk prolinkování",
    MAX_LINK_CONTRIB_DESC:
        "Maximální příspěvek vážené složitosti prolinkovaných poznámek použitý pro určení počáteční složitosti.",
    LOGGING: "Zaznamenávám",
    DISPLAY_DEBUG_INFO: "Zobrazit informace pro ladění na vývojářské konzoli?",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "Fronta poznámek k revizi",
    CLOSE: "Uzavřené",
    NEW: "Nové",
    YESTERDAY: "Včera",
    TODAY: "Dnes",
    TOMORROW: "Zítra",

    // stats-modal.tsx
    STATS_TITLE: "Statistiky",
    MONTH: "Měsíc",
    QUARTER: "Čtvrtletí",
    YEAR: "Rok",
    LIFETIME: "Celkově",
    FORECAST: "Předpověď",
    FORECAST_DESC: "Celkový počet kartiček, kterým vyprší termín",
    SCHEDULED: "Naplánováno",
    DAYS: "Dní",
    NUMBER_OF_CARDS: "Počet kartiček",
    REVIEWS_PER_DAY: "Průměr: ${avg} revize/den",
    INTERVALS: "Intervaly",
    INTERVALS_DESC: "Doba, za kterou bude znovu zobrazeno k revize",
    COUNT: "Počet",
    INTERVALS_SUMMARY: "Průměrný interval: ${avg}, Nejdelší interval: ${longest}",
    EASES: "Složitost",
    EASES_SUMMARY: "Průměrná složitost: ${avgEase}",
    CARD_TYPES: "Typy kartiček",
    CARD_TYPES_DESC: "Obsahuje i odložené kartičky (pokud existují)",
    CARD_TYPE_NEW: "Nová",
    CARD_TYPE_YOUNG: "Mladá",
    CARD_TYPE_MATURE: "Dospělá",
    CARD_TYPES_SUMMARY: "Kartiček celkem: ${totalCardsCount}",
};
