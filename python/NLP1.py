import spacy
# Need line 8 the first time: Then comment it out after the first time you run it:
#nlp = spacy.cli.download("en_core_web_sm")
nlp = spacy.load('en_core_web_sm')

whitedress = open('chatgptwhitedressAll.txt', 'r', encoding='utf8')
words = whitedress.read()
wordstrings = str(words)
print(wordstrings)

whitedress = nlp(wordstrings)
for token in whitedress:
    if token.pos_ == "NOUN":
        print(token.text, "---->", token.pos_, ":::::", token.lemma_)