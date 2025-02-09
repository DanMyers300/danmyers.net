#!/bin/sh

bun run build.ts || exit 1
bunx serve out
