#!/bin/bash

read -p "Crawler :
1 - playwright (Recommended)
2 - puppeteer
" crawler_id

case "$crawler_id" in
    1)
        name="playwright";
        rm -rf ./src/puppeteer.sample.ts;
        mv ./src/playwright.sample.ts ./src/index.ts;;
    2)
        name="puppeteer";
        rm -rf ./src/playwright.sample.ts;
        mv ./src/puppeteer.sample.ts ./src/index.ts;;
    *) echo "Invalid type"; exit;;
esac

yarn add "$name"
sed -i "s/playwright/$name/g" ./\@types/Page.d.ts
