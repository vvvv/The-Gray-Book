# Show & Tell

The Show & Tell extension allows you to quickly share screenshots of your renderings with the world.

Press <span class="keyseq"><kbd>Alt</kbd><kbd>I</kbd></span> to open it.

When open, it intercepts any screenshot you make. Use either:
- <span class="keyseq"><kbd>Win</kbd><kbd>Shift</kbd><kbd>S</kbd></span>:  The default windows shortcut to take a screenshot
- <span class="keyseq"><kbd>Ctrl</kbd><kbd>2</kbd></span>: Works on Skia and Stride windows
- <span class="keyseq"><kbd>S</kbd> + Marquee Selection</span>: Works in the patch editor

Screenshots augmented with some text can then be posted to our common [madewithvvvv](https://pixelfed.social/p/madewithvvvv/) account. In addition you can configure ShowAndTell to post to one of your own [Pixelfed](https://pixelfed.org/) or [Mastdon](https://joinmastodon.org/) accounts and thus build a beautiful portfolio of your work. 

## Configuring Accounts

Press the `gear` button to open the configuration page. 

### The common "madewithvvvv" account
This is the default account that anyone can always post to. If you want your images to be associated with your user name, provide your vvvv.org login credentials instead of guest/guest.

### Custom Accounts
If you have either a [Pixelfed](https://pixelfed.org/) or [Mastdon](https://joinmastodon.org/) account, you can also post to those. 

![Pixelfed & Mastodon](../../images/reference/hde/fediverse.png)

Press the `Add Account` button and specify:
* A name that identifies the account for you
* The instance (without http://, e.g.: pixelfed.de)
* The access token

#### Pixelfed access token

> [!NOTE]
> For issues we're still investigating, this does currently not work with the pixelfed.social instance! There are many [other instances](https://fedidb.org/software/pixelfed) to choose from.


In your Pixelfed account, go to `Settings > Applications > Create New Token`

Fill out the form, make sure to enable the `Write` scope and press `Create`. This will prompt you with an access token that you copy-paste into the account configuration. 

#### Mastodon access token

In your Mastodon account, go to `Preferences > Development > New Application`

Fill out the form, make sure to enable the `Write` scope and press `Submit`. This will prompt you with an access token that you copy-paste into the account configuration. 

## What the Pixelfed and Mastodon?

Pixelfed and Mastodon are part of the larger [Fediverse](https://en.wikipedia.org/wiki/Fediverse), a federation of decentralized social networks. Instead of the comparable legacy walled-gardens, those work more like Email: Anyone can run their own instance of a Pixelfed or Mastodon server and still communicate with anyone else, because the fediverse shares a common communications protocol: [ActivityPub](https://en.wikipedia.org/wiki/ActivityPub). No ads, no tracking, just the actual functionality!
