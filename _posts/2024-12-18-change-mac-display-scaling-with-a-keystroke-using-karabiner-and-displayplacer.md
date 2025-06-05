---
layout: post
title: Change Mac Display Scaling With a Keystroke Using Karabiner and displayplacer
date: 2022-04-09 12:00 +0100
cover: /assets/images/displayplacer/cover.png
---

I’m changing Retina scaling on my MacBook really often. The default scaling is suitable for usual tasks, but sometimes you need more space for things like code review, or the ability to open two windows side by side. Yet opening preferences to find this particular option each time was a bit cumbersome. I knew this task can be automated, it’s just a matter of right tools.

At first I wanted to change preferences using AppleScript. Turns out it is possible by opening preferences window and automating exact sequence of clicks. It takes too long though, and doesn’t sound like a good solution. There has to be a better way.

Luckily, I found [displayplacer](https://github.com/jakehilborn/displayplacer) — a command line utility for display settings management. It has so many options! I recommend checking them all, it allows you to easily switch between many display configurations, including Retina screen scaling. Let’s use that.

## Installing displayplacer

Install displayplacer using Homebrew. If you haven’t got Homebrew, check the [installation guide](https://brew.sh/).

```bash
brew tap jakehilborn/jakehilborn
brew install displayplacer
```

Now check all possible configurations:

```bash
displayplacer list
```

Look for two things: your MacBook screen ID, and display modes you want to use.

<figure>
<img src="/assets/images/displayplacer/image.png" alt="" />
<figcaption>Write down <b>persistent screen id</b> and <b>mode ids</b> you want to use.</figcaption>
</figure>

By running this command, you should be able to change the display configuration:

```bash
displayplacer "id:YOUR-SCREEN-ID mode:MODE_ID"
# e.g.
displayplacer "id:37D8832A-2D66-02CA-B9F7-8F30A301B230 mode:11"
```

In my case I wanted to switch between those two values of mode (numbers might be different on your machine):

- Mode 8: “Default” (looks like 1440 x 900)
- Mode 11: “More Space” (looks like 1680 x 1050)

<figure>
<img src="/assets/images/displayplacer/modes.png" alt="" />
<figcaption>We will be switching between those modes.</figcaption>
</figure>

So if you want to change your screen scaling to “More Space”, you run `displayplacer "id:YOUR-SCREEN_ID mode:11"`.

---

Now, as we know the commands we want to run, let’s create a key mapping in Karabiner.

## Creating key mappings in Karabiner

Download and install [Karabiner-Elements](https://karabiner-elements.pqrs.org/).

Then open `~/.config/karabiner/karabiner.json` with your favorite editor.

Find `"rules": []` section and add our command:

```json
"rules": [
  {
    "description": "Change retina scaling on ⌘ + control + 1 and ⌘ + control + 2",
    "manipulators": [
      {
        "from": {
          "key_code": "1",
          "modifiers": {
            "mandatory": ["left_command", "left_control"]
          }
        },
        "to": [
          {
            "shell_command": "/opt/homebrew/bin/displayplacer 'id:37D8832A-2D66-02CA-B9F7-8F30A301B230 mode:8'"
          }
        ],
        "type": "basic"
      },
      {
        "from": {
          "key_code": "2",
          "modifiers": {
            "mandatory": ["left_command", "left_control", "left_option"]
          }
        },
        "to": [
          {
            "shell_command": "/opt/homebrew/bin/displayplacer 'id:37D8832A-2D66-02CA-B9F7-8F30A301B230 mode:11'"
          }
        ],
        "type": "basic"
      }
    ]
  }
]
```

<!-- https://gist.github.com/Wowu/067d8d8b809e181cf1cbe2b87f00865e -->

Remember to change screen ID to yours. This will map <kbd>⌘</kbd>+<kbd>option</kbd>+<kbd>ctrl</kbd>+<kbd>1</kbd> and <kbd>⌘</kbd>+<kbd>options</kbd>+<kbd>ctrl</kbd>+<kbd>2</kbd> to two scaling modes.

---

If you want to learn how to use Karabiner Elements, check the [official documentation](https://karabiner-elements.pqrs.org/docs/).
