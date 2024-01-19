import { expect, test } from "@playwright/test";
import type { FASTProgress } from "./progress.js";

test.describe("Progress", () => {
    test("should include a role of progressbar", async ({ page }) => {
        const element = page.locator("fast-progress");

        await page.goto("http://localhost:6006");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-progress></fast-progress>
            `;
        });

        await expect(element).toHaveAttribute("role", "progressbar");
    });

    test("should set the `aria-valuenow` attribute with the `value` property when provided", async ({
        page,
    }) => {
        const element = page.locator("fast-progress");

        await page.goto("http://localhost:6006");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-progress value="50"></fast-progress>
            `;
        });

        await expect(element).toHaveAttribute("aria-valuenow", "50");
    });

    test("should set the `aria-valuemin` attribute with the `min` property when provided", async ({
        page,
    }) => {
        const element = page.locator("fast-progress");

        await page.goto("http://localhost:6006");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-progress min="50"></fast-progress>
            `;
        });

        await expect(element).toHaveAttribute("aria-valuemin", "50");
    });

    test("should set the `aria-valuemax` attribute with the `max` property when provided", async ({
        page,
    }) => {
        const element = page.locator("fast-progress");

        await page.goto("http://localhost:6006");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-progress max="50"></fast-progress>
            `;
        });

        await expect(element).toHaveAttribute("aria-valuemax", "50");
    });

    test("should render an element with a `determinate` slot when a value is provided", async ({
        page,
    }) => {
        const element = page.locator("fast-progress");

        await page.goto("http://localhost:6006");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-progress value="50"></fast-progress>
            `;
        });

        const progress = element.locator(".progress");

        await expect(progress).toHaveAttribute("slot", "determinate");
    });

    test("should render an element with an `indeterminate` slot when no value is provided", async ({
        page,
    }) => {
        const element = page.locator("fast-progress");

        await page.goto("http://localhost:6006");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-progress></fast-progress>
            `;
        });

        const progress = element.locator(".progress");

        await expect(progress).toHaveAttribute("slot", "indeterminate");
    });

    test("should return the `percentComplete` property as a value between 0 and 100 when `min` and `max` are unset", async ({
        page,
    }) => {
        const element = page.locator("fast-progress");

        await page.goto("http://localhost:6006");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-progress value="50"></fast-progress>
            `;
        });

        await expect(element).toHaveJSProperty("percentComplete", 50);
    });

    test("should set the `percentComplete` property to match the current `value` in the range of `min` and `max`", async ({
        page,
    }) => {
        const element = page.locator("fast-progress");

        await page.goto("http://localhost:6006");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-progress value="0"></fast-progress>
            `;
        });

        await expect(element).toHaveJSProperty("percentComplete", 0);

        await element.evaluate((node: FASTProgress) => {
            node.value = 50;
        });

        await expect(element).toHaveJSProperty("percentComplete", 50);

        await element.evaluate((node: FASTProgress) => {
            node.value = 100;
        });

        await expect(element).toHaveJSProperty("percentComplete", 100);

        await element.evaluate((node: FASTProgress) => {
            node.max = 200;
        });

        await expect(element).toHaveJSProperty("percentComplete", 50);

        await element.evaluate((node: FASTProgress) => {
            node.min = 100;
        });

        await expect(element).toHaveJSProperty("percentComplete", 0);
    });
});
