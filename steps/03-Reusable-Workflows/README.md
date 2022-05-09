# TO DO :

Update the workflow that will test the Node application to make it reusable

**Goal** : Use the reusable workflows in a other GA

Update the trigger
Create a new GA with a manual workflow that call our reusable workflows
Run the GA with the manual trigger

# Steps
 
Add a new step that will get the Sha-1 to the sort format
    Use `${GITHUB_SHA::7}`</code>` to get the short Sha-1

Add a new step that will print the shrot Sha-1 from the previous step

# Bonus

Use both the GITHUB_ENV and the Steps outputs