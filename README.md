Join us in #rice on irc.rizon.net (https://qchat.rizon.net/?channels=rice)

[Pull requests](https://github.com/TheReverend403/rice-stuff) for contributions are more than welcome.

# Table of contents
- [A quick summary](#how?)
- [Window managers](#window-managers)
- [Tiling](#tiling)

# How?
First of all; ricing won't be an easy task. I mean, sure you can copy the config
files from someone else and live with that. But that kind of ruins the fun of it all. 

**You encounter an problem or error and don't know how to continue?**

## Google it!
This solves literally 90% of all the problems people ever have. I can't push
this enough. The problem you're encountering is most likely not unique. You're
probably not the first to struggle with it. By looking online you will nearly
always find your (or a similar) question that will help you get going again.

* [duckduckgo](https://duckduckgo/)
* [google](https://google.com/) 

## Manual
*"How do I do **x** in **y**?"*, *"Is it possible to do **x** with **y**?"*. *"What does **x** do?"*.

These are all way to common questions, especially for people who are starting
with linux. 99% of the applications/binaries you're using have some kind of
manual through either `$ man NAME_OF_APPLICATION` or `$ NAME_OF_APPLICATION
--help`. This will very likely contain the solution one way or another.

# Window managers
## Linux
* [X11](https://wiki.archlinux.org/index.php/Xorg)
  * [Openbox](https://wiki.archlinux.org/index.php/Openbox)
  * [Awesome](https://wiki.archlinux.org/index.php/Awesome)
    * [Awesome spaceless](https://github.com/copycat-killer/lain)
  * [I3](https://wiki.archlinux.org/index.php/I3)
    * [I3 spaceless](https://github.com/Airblader/i3)
  * [Qtile](http://www.qtile.org/)
  * [Herbstluftwm](http://www.herbstluftwm.org/)
  * [Bspwm](https://wiki.archlinux.org/index.php/Bspwm)
  * [Dwm](https://wiki.archlinux.org/index.php/Dwm)
  * [Xmonad](https://wiki.archlinux.org/index.php/Xmonad)
* [Wayland](https://wiki.archlinux.org/index.php/Wayland)
  * [Velox](https://github.com/michaelforney/velox)
  * [Sway](https://github.com/SirCmpwn/sway)
  * [Orbment](https://github.com/Cloudef/orbment)

## Windows
* [Blackbox](http://blackbox4windows.com/)
* [Windawesome](https://windawesome.codeplex.com)
* [Bugn](https://code.google.com/p/bugn/wiki/bugn)
* [Qt](https://github.com/Vibex/qt.pi)
* [Tilde++](https://github.com/ragesalmon/TildePlusPlus)

## OSX
*Placeholder*

# Tiling
## Linux  
* [PyTyle2](https://code.google.com/p/pytyle/)
* [PyTyle3](https://github.com/BurntSushi/pytyle3)
The [Difference](https://bbs.archlinux.org/viewtopic.php?pid=1058199#p1058199).

## Windows
* [WinSplit](http://download.cnet.com/WinSplit-Revolution/3000-2072_4-10971915.html) 
* [Gridmove](http://jgpaiva.dcmembers.com/gridmove.html)

## OSX
*Placeholder*
### BARS
## Linux
* [Dzen](https://wiki.archlinux.org/index.php/Dzen)
* [Lemonbar](https://github.com/LemonBoy/bar)
* [Tint](https://wiki.archlinux.org/index.php/Tint2)

## Windows
* None.

### Terminal emulators
## Linux
* [Termite](https://github.com/thestinger/termite)
* [Urxvt](https://wiki.archlinux.org/index.php/Rxvt-unicode)
* [St](http://st.suckless.org/)
* [Terminator](https://wiki.archlinux.org/index.php/Terminator)

## Windows
* [Console](http://sourceforge.net/projects/console/)
* [Mintty](https://code.google.com/p/mintty/) <i class="fa fa-windows"></i>
* [Conemu](https://conemu.github.io/)
* [Babun](https://babun.github.io/)

## Apple
* [Iterm2](https://www.iterm2.com)

### Color schemes
* http://terminal.sexy
* http://coolors.co
* http://paletton.com/
* http://www.xcolors.net
* http://www.colourlovers.com
* http://www.materialpalette.com
* http://www.transparenttextures.com
* http://daylerees.github.io/

### Wallpapers
* http://alpha.wallhaven.cc
* http://simpledesktops.com
* http://subtlepatterns.com
* https://unsplash.com
* https://nik.bot.nu/browse.html
* http://4walled.cc
* http://www.stripegenerator.com
* http://www.tartanmaker.com

### Fonts
* http://www.dafont.com
* http://fontawesome.io/
* http://ionicons.com/
* https://github.com/chrissimpkins/codeface
* https://github.com/Tecate/bitmap-fonts

On Debian/Ubuntu you need to enable bitmap fonts first:

```bash
sudo rm /etc/fonts/conf.d/70-no-bitmaps.conf
sudo fc-cache -f -v
```

### Firefox
* [XML](chrome://browser/content/browser.xul) 
* [Nightly](https://nightly.mozilla.org)
* [Stylish](https://addons.mozilla.org/en-US/firefox/addon/stylish)
* [LINC](http://www.logicalincrements.com/firefox/)

Examples 
* http://noha-ra.deviantart.com/art/Tinycss-476413072
* http://noha-ra.deviantart.com/art/Konbanwa-homepage-450787545
* https://github.com/yukisuki/startpage
* http://twily.info/firefox/stylish/firefox-css#view

### IMAGE VIEWERS
* https://github.com/lucy/sxiv <i class="fa fa-linux"></i>
* http://feh.finalrewind.org/ <i class="fa fa-linux"></i>
* http://www.johnhawthorn.com/meh/ <i class="fa fa-linux"></i>
* http://www.bandisoft.com/honeyview/ <i class="fa fa-windows"></i>
* https://github.com/nothings/stb-imv/ <i class="fa fa-windows"></i>
* https://github.com/kyubiko/n30f <i class="fa fa-linux"></i> <i class="fa fa-apple"></i>

### AUDIO
* http://www.musicpd.org
  * http://ncmpcpp.rybczak.net <i class="fa fa-linux"></i>
  * http://karlstav.github.io/cava (standalone console visualizer) <i class="fa fa-linux"></i>
  * https://github.com/lucy/mpdviz (standalone console visualizer) <i class="fa fa-linux"></i>
  * https://github.com/ViktorNova/nausea (standalone console visualizer) <i class="fa fa-linux"></i>
* http://www.aimp.ru <i class="fa fa-windows"></i>
* http://www.foobar2000.org <i class="fa fa-windows"></i>

### VIDEO
* https://github.com/mpv-player/mpv
* https://github.com/mpv-player/mpv/wiki/User-Scripts
* http://sourceforge.net/projects/mpcbe <i class="fa fa-windows"></i>
* https://mpc-hc.org <i class="fa fa-windows"></i>

### IRC
* https://hexchat.github.io/
* https://weechat.org/ <i class="fa fa-linux"></i> <i class="fa fa-apple"></i>
* http://www.irssi.org/ <i class="fa fa-linux"></i> <i class="fa fa-apple"></i>

### SYSTEM INFO
* https://github.com/hal-ullr/cmdfetch <i class="fa fa-windows"></i>
* https://github.com/KittyKatt/screenFetch <i class="fa fa-linux"></i> <i class="fa fa-apple"></i>
* https://github.com/djmelik/archey <i class="fa fa-linux"></i>
* https://github.com/trizen/alsi <i class="fa fa-linux"></i>
* https://github.com/jschx/ufetch <i class="fa fa-linux"></i>

### SHARING YOUR RICE
* File Hosts
  * https://u.teknik.io
  * https://mixtape.moe
  * http://1339.cf
  * https://maxfile.ro
  * http://puush.me/
  * https://transfer.sh
* Upload Tools
  * https://github.com/6c37/gone
  * https://getsharex.com/ <i class="fa fa-windows"></i>
  * https://github.com/jschx/uguush <i class="fa fa-linux"></i>
  * http://puush.me/ <i class="fa fa-windows"></i> <i class="fa fa-apple"></i>
* Screenshot Tools
  * https://github.com/naelstrof/maim <i class="fa fa-linux"></i>
  * http://www.imagemagick.org/script/import.php
  * http://freecode.com/projects/scrot <i class="fa fa-linux"></i>
* Pastebins
  * https://p.teknik.io
  * https://spit.mixtape.moe
  * http://ix.io
  * http://sprunge.us
