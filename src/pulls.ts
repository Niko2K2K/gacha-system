// ============================
// Imports and Setup
// ============================
import { bannerCharacterData, standardCharacterData } from "./data/characterList";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}

// ============================
// Types
// ============================
export type quality = "5 Star" | "4 Star";
export type elemType = "Pyro" | "Hydro" | "Electro" | "Cryo" | "Anemo" | "Geo" | "Dendro";

type user = {
    inventory: character[];
    primos: number;
    moneySpent: number;
};

type character = {
    name: string;
    rarity: quality;
    constelation: number;
    element: elemType;
};

type pities = {
    fourStar: number;
    fiveStar: number;
};

// ============================
// Global Variables
// ============================
let talentedGambler: user = {
    inventory: [],
    primos: 1600,
    moneySpent: 0
};

export let bannerChars: character[] = [];
export let stdChar: character[] = [];

let banner = 0;
let guaranteed: boolean = false;

// ============================
// Character Data Initialization
// ============================
export function fillCharInfo(inv: character[], name: string, raity: quality, element: elemType) {
    let i = 0;
    while (inv[i] !== undefined) i++;

    inv[i] = {
        name: name,
        rarity: raity,
        element: element,
        constelation: 0
    };
}

for (const [name, rarity, element] of bannerCharacterData) {
    fillCharInfo(bannerChars, name, rarity, element);
}

for (const [name, rarity, element] of standardCharacterData) {
    fillCharInfo(stdChar, name, rarity, element);
}

// ============================
// Main Menu
// ============================
async function mainMenu() {
    let page = "";

    while (page !== "5") {
        console.log("\nWhere would you like to go?");
        console.log("1 - Home");
        console.log("2 - Wishing");
        console.log("3 - Inventory");
        console.log("4 - Top Up");
        console.log("5 - Exit");

        page = await ask("Enter number: ");

        switch (page) {
            case "1":
                console.log("\nYou are on the Home Page.");
                break;
            case "2":
                console.log("\nYou are in the Wishing section.");
                await wishingPage();
                break;
            case "3":
                console.log("\nYou opened your Inventory.");
                await inventoryPage();
                break;
            case "4":
                console.log("\nYou opened the Top Up page.");
                await topUpPage();
                break;
            case "5":
                console.log("\nExiting...");
                rl.close();
                return;
            default:
                console.log("\nInvalid option. Please enter a number 1-5.");
        }
    }
}

mainMenu();

// ============================
// Wishing Page
// ============================
async function wishingPage() {
    let action = "1";
    let pities = { fourStar: 10, fiveStar: 90 };

    while (true) {
        console.log("\n\n\nPrimos: ", talentedGambler.primos);
        console.log("\nCurrent banner: ", bannerChars[banner]);
        console.log("\n", pities);

        console.log("\nWhat would you like to do?");
        console.log("1 - 1 Wish");
        console.log("2 - 10 Wishes");
        console.log("3 - Switch Banners");
        console.log("4 - Top Up");
        console.log("5 - Main Menu");

        action = await ask("Enter Number: ");

        switch (action) {
            case "1":
                if (talentedGambler.primos >= 160) {
                    talentedGambler.primos -= 160;
                    wishSystem(1, pities);
                } else {
                    console.log("\nNot enough primos");
                }
                break;
            case "2":
                if (talentedGambler.primos >= 1600) {
                    talentedGambler.primos -= 1600;
                    wishSystem(10, pities);
                } else {
                    console.log("\nNot enough primos");
                }
                break;
            case "3":
                banner = banner === 0 ? 1 : 0;
                break;
            case "4":
                console.log("\nYou opened the Top Up page.");
                await topUpPage();
                break;
            case "5":
                console.log("\nYou are now on the Home Page.");
                return;
            default:
                console.log("\nInvalid input. Please enter a number 1-5.");
                break;
        }
    }
}

// ============================
// Top Up Page
// ============================
async function topUpPage() {
    let action = "";

    while (true) {
        console.log("\nHow many primos would you like to add?");
        console.log("1 - 300 primos (+30 bonus) for $4.99");
        console.log("2 - 980 primos (+110 bonus) for $14.99");
        console.log("3 - 1980 primos (+260 bonus) for $29.99");
        console.log("4 - 3280 primos (+600 bonus) for $49.99");
        console.log("5 - 6480 primos (+1600bonus) for $99.99");
        console.log("6 - Go Back");

        action = await ask("Enter number: ");

        switch (action) {
            case "1":
                talentedGambler.primos += 330;
                talentedGambler.moneySpent += 4.99;
                break;
            case "2":
                talentedGambler.primos += 1090;
                talentedGambler.moneySpent += 14.99;
                break;
            case "3":
                talentedGambler.primos += 2240;
                talentedGambler.moneySpent += 29.99;
                break;
            case "4":
                talentedGambler.primos += 3880;
                talentedGambler.moneySpent += 49.99;
                break;
            case "5":
                talentedGambler.primos += 8080;
                talentedGambler.moneySpent += 99.99;
                break;
            case "6":
                console.log("\nReturning to previous menu...");
                return;
            default:
                console.log("\nInvalid input. Please enter a number 1-6.");
                break;
        }

        console.log("\nPrimos: ", talentedGambler.primos);
        console.log("Total money spent: $", talentedGambler.moneySpent);
    }
}
// ============================
// Inventory Page
// ============================
async function inventoryPage() {
    if (talentedGambler.inventory.length === 0) {
        console.log("\nYou don't have any characters yet.");
        return;
    }

    console.log("\nYour Characters:");

    for (const char of talentedGambler.inventory) {
        const name = chalk.bold(char.name);
        const element = colorElement(char.element);
        const constellation = chalk.gray(`C${char.constelation}`);
        const rarityColor =
            char.rarity === "5 Star"
                ? chalk.hex("#FFD700") // Gold
                : chalk.hex("#AA6FFF"); // Purple

        const rarityStars = char.rarity === "5 Star" ? "★★★★★" : "★★★★";

        console.log(`${rarityColor(rarityStars)} ${name} - ${element} - ${constellation}`);
    }
}


// ============================
// Utility Functions
// ============================
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function colorElement(element: elemType): string {
    switch (element) {
        case "Pyro": return chalk.red(element);
        case "Hydro": return chalk.cyan(element);
        case "Electro": return chalk.magenta(element);
        case "Cryo": return chalk.white(element);
        case "Anemo": return chalk.green(element);
        case "Geo": return chalk.yellow(element);
        case "Dendro": return chalk.hex("#44ff44")(element);
        default: return element;
    }
}

// ============================
// Wish System
// ============================
function wishSystem(wishes: number, pities: pities) {
    for (let i = 0; i < wishes; i++) {
        let gacha = getRandomInt(1, 1000);
        let num: number;

        pities.fiveStar--;
        pities.fourStar--;

        if (gacha <= 6 || pities.fiveStar === 0) {
            num = getRandomInt(0, 1);
            let c: character;

            if (num === 0 || guaranteed) {
                c = bannerChars[banner];
                guaranteed = false;
                addToInv(banner, true);
            } else {
                num = getRandomInt(0, 6);
                c = stdChar[num];
                guaranteed = true;
                addToInv(num, false);
            }

            console.log(
                "\n--",
                chalk.hex("#FFD700").bold(c.name),
                colorElement(c.element),
                chalk.hex("#FFD700")(c.rarity),
                "--"
            );

            pities.fiveStar = 90;
            if (pities.fourStar === 0) pities.fourStar++;
        }

        else if ((gacha >= 7 && gacha <= 57) || pities.fourStar === 0) {
            pities.fourStar = 10;
            num = getRandomInt(7, 33);
            let c = stdChar[num];

            console.log(
                "\n",
                chalk.hex("#AA6FFF").bold(c.name),
                colorElement(c.element),
                chalk.hex("#AA6FFF")(c.rarity)
            );

            addToInv(num, false);
        }

        else {
            console.log("\nYou got a 3 star");
        }
    }
}

// ============================
// Inventory System
// ============================
function addToInv(num: number, event: boolean) {
    for (let i = 0; i < talentedGambler.inventory.length; i++) {
        if (event && talentedGambler.inventory[i].name === bannerChars[banner].name) {
            if (talentedGambler.inventory[i].constelation !== 6) talentedGambler.inventory[i].constelation++;
            return;
        }
        if (!event && talentedGambler.inventory[i].name === stdChar[num].name) {
            if (talentedGambler.inventory[i].constelation !== 6) talentedGambler.inventory[i].constelation++;
            return;
        }
    }

    // If not found, add new character
    talentedGambler.inventory.push(event ? bannerChars[banner] : stdChar[num]);
}