# jquery-multi-select-paragraph
 JQuery plugin allow turning a list of `<p>` paragraphs into a multiselect list. 
## Usages:
 - Put your paragraphs in a div element. Currently we only support single list of paragraph (no nesting)
 - Call `$("#div").pselect();`
 - To fetching list of selected paragraph, call `$("#div").pselect("selected")`. You can continue to chaining on its return.
 - To simply return a list of raw text, call `$("#div").pselect("selectedValues")`
