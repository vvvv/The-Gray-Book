# The running System

This may sound like cheating, but think of the whole running system as a process node. It once gets created and then updated repeatedly.

#### A Root Patch

The root patch defines the process.

*vvvv user: When cloning the vl template from within vvvv you create a new root patch. In this case the vvvv node contains and manages on instance of the process you just created.*

#### Create And Update

Within the root patch you define what's happening for when the system starts and when the system runs. For that you may place nodes onto "Create" and onto "Update". 