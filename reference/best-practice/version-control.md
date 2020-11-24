# Version Control with Git

As soon as you're working on something that is more than a quick sketch, you should consider putting your .vl documents under version control using Git There are other version control systems, but Git is by far the most widely used. It takes some getting used to, but once you get the hang of it, there is no turning back.

So instead of saving your progress under files with incremental names, like foo_1.vl, then foo_2.vl, then foo_3.vl,... where you pile up endless versions of your work but you can't remember which was which, version control allows you to:
- save the state of your work (even spanning multiple .vl documents) in one "commit"
- add a human readable message to each commit
- view your history of commit messages
- revisit any step of your work that you commited earlier

And all this, without being confused by multiple versions of the same file in one folder. As a bonus you can push your work to a cloud service for these additional benefits:
- backup
- access your work from another PC
- share it with co-workers
  
If you need some further convincing you may want to watch some [introductory videos](https://git-scm.com/doc).

## Prerequisites

### Software
Essentially what you need is:
- Git itself
- A Git UI client 

You can use Git via the commandline, ie. without a GUI client (some people prefer so) in which case it is enough to just [download Git](https://git-scm.com/downloads). In the case you decide to go with a [GUI client](https://git-scm.com/downloads/guis), most of them probably also install Git for you, ie. you won't need to download Git extra. 

Which GUI client to choose? In the end you may want to try different ones and see which you prefer. The vvvv development team has been happy with [GitExtensions](https://gitextensions.github.io/) for many years. The best diff/merge tool we found is [P4Merge](https://www.perforce.com/downloads/visual-merge-tool) which you can choose to use as diff/merge tool with GitExtensions (and maybe also other GUI clients).

TODO: "Checkout as is - commit as is"

### Cloud Service
If you want to backup your git repositories in the cloud, which also allows you to easily share them with others, sign up with one of these git cloud providers:

- [GitHub](http://github.com)
- [Bitbucket](http://bitbucket.org)
- [GitLab](http://gitlab.com)
- [Codeberg](http://codeberg.org)

Most of [vvvv's library repositories are on GitHub](https://github.com/vvvv), so if you want to contribute to those at some point, you'll need a GitHub account.

### Terminology

- Each project is stored in a **repository**
- To mirror a local repository to a cloud service, you give it a **remote**, ie. a URL to the remote repository
- Whenever you feel like having your work in a good state, you save it in a **commit** to the repository
- A repository stores your history of **commits**
- The last commit in a repository is referred to as **HEAD**
- To upload your commits to a remote repository, you run the **push** command
- **Cloning** is the act of making an initial local copy of a remote repository
- To download commits from a remote repository, you run the **pull** command
- To revisit a particular state of your work you **checkout** the respective commit

## Getting Started

### Creating a new repository

TODO

### Forking and/or Cloning an existing repository

TODO

### Commiting

Here are some general thoughts regarding commits:
- Try to commit changes that you can describe well in a commit message
- Avoid commiting changes that involve multiple "tasks"
- One commit per task/fix/change is recommended. 
- Never commit changes to a file you did not intentionally change (files can get changed while working on something else by accident, or you may forget about something you tried somewhere but did not intend to commit)
- Always check the changes you are about to commit to make sure they match what you are intending to change

## Working on your own
As long as you're working on a project on your own, everything is mostly straight forward. A typical workflow will look like this:

- Create a new repository for a new project
- Commit the initial state of work
- Make changes, make a new commit
- Make changes, make a new commit
- Make changes, make a new commit
- At the end of the day push your commits to remote, to have it backed up
- In case you have to move to another PC, just clone the repository on there
- Make changes, make a new commit
- Make changes, make a new commit
- Push your commits to remote
- Get back to the first PC, pull the remote commits you pushed from PC 2, and continue working

Now, what git allows you to do, is to switch to any state of your work without having worry about loosing your latest state. You do this by runnig a **checkout** of any particular commit of your history. When you're done looking at the older state, you can go back to your latest state easily by checking it out again. 

There is much more to git, but the above should give you an idea of the most simple workflow. Practice this on your own projects, before moving on to work with a team, where things can get a bit more juicy.

## Working with a team

When working with a team, depending on everyone's git expertise, it may help if you're agree on one Git client to use. So in case there are problems you can help each other out more easily. 

Now the obvious problem that may arise in a team, is that people may be working on the same .vl document independent of each other:

Say you have your local changes to a file in a commit which you try to push, but before you can, git tells you, you need to pull in remote changes. As long as the file you changed locally is not touched in any of the remote commits you're pulling in, all will be fine. Otherwise git will now try to merge the changes of the remote commit into your local file. And here is where things can go wrong!

You'll see three scenarios:
- Best case: the merge goes through fine
- Worst case: git claims the merge went fine, when it actually didn't
- Fine case: git tells you it cannot do an automatic merge and asks for your help
  
The thing is that git is made for textual programming languages. vvvv is storing its .vl documents in XML format which luckily is text. But unfortunately git doesn't understand the structure of XML, ie. treats it as normal text and may in some situations corrupt your .vl files in case of a merge.

So the key really is to avoid merge conflicts as good as you can. Remember, as long as work is happening simultaneously but in different files, there will be no conflicts, therefore: 

### Split a project into multiple .vl documents

While with vvvv you can create an entire project in just one .vl document, it is good practice to split projects into multiple documents following these guidelines:

- Have one master .vl document that does not have any definitions, but only applications
- Have multiple topical .vl documents that hold all the definitions but have an empty application
  - Examples could be: InputHandling.vl, Scene1Logic.vl, Scene2Logic.vl, LightControls.vl, Audio.vl, Rendering.vl,...
- Define owners for the individual files, ie. only an owner is allowed to commit a change to a file
- Reference the definition documents as dependencies in the master document and build the master application there

Obviously the master .vl document is a classic point of conflict because everyone needs to work on it to see their changes working. But try this: Instead of building 
  
### Communicate

There will be times where changes need to touch many documents at once. In those cases make sure that everyone is aware this is going to happen. Make everyone commit and push there latest state. Then one team member makes the changes touching multiple documents. If in doubt, do these changes together, while screensharing, so everyone knows whats going on. 

## Branching

Branching is not something you should start with. 

## Merging

https://discourse.vvvv.org/t/mergevldocs/18414/16