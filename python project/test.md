# Python Test Markdown

First we must import all needed modules for  language recognition and training such as spacy and saxonche
```
import os
import spacy
from spacy.pipeline import EntityRuler
import re as regex
from saxonche import PySaxonProcessor
```
After this we assign the variable nlp to the large language model from spacy

```
nlp = spacy.load('en_core_web_lg')
```
Next the directories that we are working with are assigned to variables
```
CollPath = '../xml'
TargetPath = '../nameTagged-xml'
cleanUpPath = '../nameTaggedClean-xml'
```
We then create the entityruler but specify that our preset rules always take importance of default
Next the directories that we are working with are assigned to variables
```
config = {"spans_key": None, "annotate_ents": True, "overwrite": True, "validate": True}
ruler = nlp.add_pipe("span_ruler", before="ner", config=config)
```
Then we specify our patterns that need to be followed by creating several dictionaries. In this example I have only included 2
```
patterns = [

    {"label": "PERSON", "pattern": "ARTOO"},
    {"label": "PERSON", "pattern": "DARTH VADER"},
]
ruler.add_patterns(patterns)    

```
The function, readTextFiles is a large fucntion that loops through each xml document and turns specified text into strings that become  output. Regex is included in this functin that cleans the specified strings. This is where NLP processing will occur

The entityCollector function returns a list of named entities after tokenizing them

assembleAllNames creates a dictionary of all entities that we can view

writeSortedEntries takes the dictionary being created and writes it out for viewing

xmlTagger adds all of the new tagged elements to the output xml in the specified folder.

xsltCleaner follows the rules of a specified xsl document to make sure that there are no new tagged elements within another element.