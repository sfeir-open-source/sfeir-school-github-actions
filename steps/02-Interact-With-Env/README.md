# TO DO :

Update the previous workflow to use the environment variable.

**Goal** : Use the environment varable to print the shor Sha-1 



# Steps
 
Add a new step that will get the Sha-1 to the sort format
    Use `${GITHUB_SHA::7}`</code>` to get the short Sha-1

Add a new step that will print the shrot Sha-1 from the previous step

# Bonus

Use both the GITHUB_ENV and the Steps outputs