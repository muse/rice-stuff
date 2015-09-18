Join us in #rice on irc.rizon.net (https://qchat.rizon.net/?channels=rice)

[Pull requests](https://github.com/TheReverend403/rice-stuff) for contributions are more than welcome.

# Table of contents
- [A quick summary](#how?)
- [Window managers](#window-managers)
- [Tiling](#tiling)
- [Bars](#bars)
- [Terminal emulators](#terminal-emulators)
- [Color schemes](#color-schemes)
- [Wallpapers](#wallpapers)
- [Fonts](#fonts)
- [Firefox](#firefox)
- [Image viewers](#image-viewers)
- [Audio](#audio)
- [Video](#video)
- [IRC](#IRC)
- [System](#system-info)
- [Sharing it!](#sharing-it)


# How?
First of all; ricing won't be an easy task. I mean, sure you can copy the config
files from someone else and live with that. But that kind of ruins the fun of it all. 

**You encounter a problem or error and don't know how to continue?**

#### Google it
This solves literally 90% of all the problems people ever have. I can't push
this enough. The problem you're encountering is most likely not unique. You're
probably not the first to struggle with it. By looking online you will nearly
always find your (or a similar) question that will help you get going again.

* [duckduckgo](https://duckduckgo/)
* [google](https://google.com/) 

#### Manual
"How do I do x in y?", "Is it possible to do x with y?". "What does x do?".

These are all way to common questions, especially for people who are starting
with linux. 99% of the applications/binaries you're using have some kind of
manual through either `$ man NAME_OF_APPLICATION` or `$ NAME_OF_APPLICATION
--help`. This will very likely contain the solution one way or another.

# Window managers
A window manager (WM) is system software that controls the placement and 
appearance of windows within a windowing system in a graphical user interface (GUI). 
It can be part of a desktop environment (DE) or be used standalone. 

#### Linux
- [X11](https://wiki.archlinux.org/index.php/Xorg)
  - [Openbox](https://wiki.archlinux.org/index.php/Openbox)
  - [Awesome](https://wiki.archlinux.org/index.php/Awesome)
    - [Awesome gaps](https://github.com/copycat-killer/lain)
  - [i3](https://wiki.archlinux.org/index.php/I3)
    - [i3 gaps](https://github.com/Airblader/i3)
  - [Qtile](http://www.qtile.org/)
  - [Herbstluftwm](http://www.herbstluftwm.org/)
  - [Bspwm](https://wiki.archlinux.org/index.php/Bspwm)
  - [Dwm](https://wiki.archlinux.org/index.php/Dwm)
  - [Xmonad](https://wiki.archlinux.org/index.php/Xmonad)
- [Wayland](https://wiki.archlinux.org/index.php/Wayland)
  - [Velox](https://github.com/michaelforney/velox)
  - [Sway](https://github.com/SirCmpwn/sway)
  - [Orbment](https://github.com/Cloudef/orbment)

#### Windows
- [Blackbox](http://blackbox4windows.com/)
- [Windawesome](https://windawesome.codeplex.com)
- [Bugn](https://code.google.com/p/bugn/wiki/bugn)
- [Qt](https://github.com/Vibex/qt.pi)
- [Tilde++](https://github.com/ragesalmon/TildePlusPlus)

#### OSX
*Placeholder*

# Tiling
The following applications are purely created for tiling. They bring nothing
else to the table. If you're looking for something more complete consider
looking at [window managers](#window-managers).

#### Linux  
- [PyTyle2](https://code.google.com/p/pytyle/)
- [PyTyle3](https://github.com/BurntSushi/pytyle3)
- The [Difference](https://bbs.archlinux.org/viewtopic.php?pid=1058199#p1058199).

#### Windows
- [WinSplit](http://download.cnet.com/WinSplit-Revolution/3000-2072_4-10971915.html) 
- [Gridmove](http://jgpaiva.dcmembers.com/gridmove.html)

#### OSX
*Placeholder*

# Bars
Bars are used to display everything from current desktops to active windows to
system informaton. They have very similiar behaviour to the bar you would expect
on Windows and OSX.  
#### Linux
- [Dzen](https://wiki.archlinux.org/index.php/Dzen)
- [Lemonbar](https://github.com/LemonBoy/bar)
- [Tint](https://wiki.archlinux.org/index.php/Tint2)

#### Windows
*Placeholder*

#### OSX
*Placeholder*

# Terminal emulators
A terminal emulator, terminal application, term, or tty for short, is a program 
that emulates a video terminal within some other display architecture. 
Though typically synonymous with a shell or text terminal, the term terminal 
covers all remote terminals, including graphical interfaces. A terminal emulator 
inside a graphical user interface is often called a terminal window.
#### Linux
- [Termite](https://github.com/thestinger/termite)
- [Urxvt](https://wiki.archlinux.org/index.php/Rxvt-unicode)
- [St](http://st.suckless.org/)
- [Terminator](https://wiki.archlinux.org/index.php/Terminator)

#### Windows
- [Console](http://sourceforge.net/projects/console/)
- [Mintty](https://code.google.com/p/mintty/)
- [Conemu](https://conemu.github.io/)
- [Babun](https://babun.github.io/)

#### OSX
- [Iterm2](https://www.iterm2.com)

# Color schemes
- http://terminal.sexy
- http://coolors.co
- http://paletton.com/
- http://www.xcolors.net
- http://www.colourlovers.com
- http://www.materialpalette.com
- http://www.transparenttextures.com
- http://daylerees.github.io/

# Wallpapers
- http://alpha.wallhaven.cc
- http://simpledesktops.com
- http://subtlepatterns.com
- https://unsplash.com
- https://nik.bot.nu/browse.html
- http://4walled.cc
- http://www.stripegenerator.com
- http://www.tartanmaker.com

# Fonts
- http://www.dafont.com
- http://fontawesome.io/
- http://ionicons.com/
- https://github.com/chrissimpkins/codeface
- https://github.com/Tecate/bitmap-fonts

On Debian/Ubuntu you need to enable bitmap fonts first:

```bash
sudo rm /etc/fonts/conf.d/70-no-bitmaps.conf
sudo fc-cache -f -v
```

# Firefox
- chrome://browser/content/browser.xul
- [Nightly](https://nightly.mozilla.org)
- [Stylish](https://addons.mozilla.org/en-US/firefox/addon/stylish)
- [LINC](http://www.logicalincrements.com/firefox/)

# Image viewers
#### Linux
- [sxiv](https://github.com/lucy/sxiv) 
- [feh](http://feh.finalrewind.org/)
- [meh](http://www.johnhawthorn.com/meh/)

#### Windows
- [Honeyview](http://www.bandisoft.com/honeyview/)
- [stb](https://github.com/nothings/stb-imv/)

#### OSX
- [N30F](https://github.com/kyubiko/n30f)

# Audio
#### Linux
- [mpd](http://www.musicpd.org)
  - [ncmpcpp](http://ncmpcpp.rybczak.net)
  - [cava](http://karlstav.github.io/cava) 
  - [mpdviz](https://github.com/lucy/mpdviz)
  - [mausea](https://github.com/ViktorNova/nausea)

#### Windows
- [Aimp](http://www.aimp.ru)
- [Foobar](http://www.foobar2000.org)

#### OSX
- [Vox](http://coppertino.com/)

# Video
#### Linux
- [mpv](https://github.com/mpv-player/mpv)

#### Windows
- [mpcbe](http://sourceforge.net/projects/mpcbe)
- [mpc-hc](https://mpc-hc.org)

#### OSX
- [mpv](https://github.com/mpv-player/mpv)

# IRC
- [Hexchat](https://hexchat.github.io/)
- [Weechat](https://weechat.org/) 
- [Irssi](http://www.irssi.org/)

# System info
#### Linux
- [Screenfetch](https://github.com/KittyKatt/screenFetch)
- [Archey](https://github.com/djmelik/archey)
- [Alsi](https://github.com/trizen/alsi)
- [Ufetch](https://github.com/jschx/ufetch)

#### Windows
- [Cmdfetch](https://github.com/hal-ullr/cmdfetch)

#### OSX
- [screenfetch](https://github.com/KittyKatt/screenFetch)

# Sharing it
- File Hosts
  - https://mixtape.moe
  - https://catbox.moe
  - https://u.teknik.io
  - https://mixtape.moe
  - http://1339.cf
  - https://maxfile.ro
  - http://puush.me/
  - https://transfer.sh
- Upload Tools
  - [Moe](https://github.com/Imakethings/Moe)
  - [ShareX](https://getsharex.com/)
  - [uguush](https://github.com/jschx/uguush)
  - [puush](http://puush.me/)
- Screenshot Tools
  - [maim](https://github.com/naelstrof/maim)
  - [Import](http://www.imagemagick.org/script/import.php)
  - [scrot](http://freecode.com/projects/scrot)
- Pastebins
  - https://p.teknik.io
  - https://spit.mixtape.moe
  - http://ix.io
  - http://sprunge.us
