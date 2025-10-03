---
title: Configuration
type: docs
prev: docs/nextannouncers/introduction
next: docs/nextannouncers/markdown
weight: 2
---

You can configure the plugin in the `config.yml` file. according to your needs! And it's very customizeable from the blacklist server to even adding more broadcast!

## Configuration Section

```yaml {filename="config.yaml"}
# You can set the interval of every announcers in seconds
# Default: 10 seconds
announcer-interval: 10

# Blacklist a list of servers that's players should not see the announcers
# Default: []
blacklist-servers: []

# You can disable the announcers by setting this to false
# Default: true
announcers-enabled: true

# You can add as many announcers as you want
# Just add a new section with a unique id
announcers:
  1: # This must be a unique id and it must be a number!
    # You can add as many messages as you want
    # Just add a new line with a message
    # You can use color codes and hex colors
    # Example: &aHello World! or &#RRGGBBHello World!
    messages:
      - "&aHello World!"
      - "&aThis is a test!"
    # You can add as many sounds as you want
    # Just add a new line with a sound
    # You can use any sound from the minecraft namespace
    # Example: minecraft:block.note_block.pling;0.5;1.0
    # delimiter are ;
    sounds:
      - "minecraft:block.note_block.pling;0.5;1.0"

```

You can also change the language of the plugin in the `lang.yml` file. Everything is customizable from the prefix to the messages!

## Language Section

```yaml {filename="lang.yaml"}
messages:
  prefix: " &a[&bNextAnnouncers&a]"
  reload: "{prefix} &aThe announcers has been reloaded!"
  help: "{prefix} &a/nextannouncers reload &7- &fReload the announcers"
```
