# Insta Share

The Insta Share extension allows you to quickly share screenshots of your renderings with the world.

Press <span class="keyseq"><kbd>Alt</kbd><kbd>I</kbd></span> to open it.

When open, it intercepts any screenshot you make and allows you to post it to a common [madewithvvvv](https://pixelfed.social/p/madewithvvvv/) account. In addition you can configure Insta Share to post to one of your own [Pixelfed](https://pixelfed.org/) or [Mastdon](https://joinmastodon.org/) accounts and thus build a beautiful portfolio of your work. 

## Configuring Accounts

Press the `gear` button to open the configuration page. 

### The common "madewithvvvv" account
This is the default account that anyone can always post to. If you want your images to be associated with your user name, provide your vvvv.org login credentials instead of guest/guest.

> [!NOTE]
> Currently the password is not saved, so you'll have to provide it once per session.

### Custom Account
If you have either a [Mastdon](https://joinmastodon.org/) or [Pixelfed](https://pixelfed.org/) account, you can also post to those. 

Press the `Add Account` button and specify:
* A name that identifies the account for you
* The instance (without http://, e.g.: pixelfed.de)
* The access token

> [!NOTE]
> Currently the access token is not saved, so you'll have to provide it once per session.

#### Pixelfed access token

In your Pixelfed account, go to Settings > Developers > Create New Client

Fill out the form, make sure to enable the `Write` scope and press `Create`. This will prompt you with an access token that you copy-paste into the Insta Share account configuration. 

#### Mastodon access token

In your Mastodon account, go to Preferences > Development > New Application

Fill out the form, make sure to enable the `Write` scope and press `Submit`. This will prompt you with an access token that you copy-paste into the Insta Share account configuration. 

## Why Pixelfed and Mastodon?

Pixelfed (for image sharing) and Mastodon (for microblogging) are part of the larger [Fediverse](https://en.wikipedia.org/wiki/Fediverse), a federation of decentralized social networks. Instead of comparable old-school walled-gardens, those work more like Email: Anyone can run their own instance of a Pixelfed or Mastodon server and still communicate with anyone else. Any public posts are truly public and can be viewed by anyone without having to register to another user-exploiting service. How normal does that sound for a change?!
