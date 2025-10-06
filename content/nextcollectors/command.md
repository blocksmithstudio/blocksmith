---
title: Commands
type: docs
prev: docs/nextcollectors/permission
weight: 4
---

You can use these commands to manage your chunk collectors!

## Commands

> <> = Required [] = Optional

- /nextcollectors
- /nextcollector
- /chunkcollectors
- /chunkcollector
- /collectors
- /collector

| Subcommand | Description | isAdmin |
| :--------- | :---------- | :------ |
| trust      | trust certain member to access your chunk collector | false |
| untrust    | untrust certain member from accessing your chunk collector | false |
| pickupall [player] | pickup all of your chunk collectors | true/false |
| give <player> [amount] | give chunk collector to player | true |
| addmax <player> [amount] | add max chunk collectors to player | true |
| removemax <player> [amount] | remove max chunk collectors from player | true |
| setmax <player> [amount] | set max chunk collectors for player | true |
| reload | reload the configuration | true |
