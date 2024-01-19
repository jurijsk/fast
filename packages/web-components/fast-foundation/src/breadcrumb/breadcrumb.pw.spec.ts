import { expect, test } from "@playwright/test";
import type { FASTBreadcrumb } from "./breadcrumb.js";

test.describe("Breadcrumb", () => {
    test("should have a role of 'navigation'", async ({ page }) => {
        const element = page.locator("fast-breadcrumb");

        await page.goto("http://localhost:6006");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-breadcrumb></fast-breadcrumb>
            `;
        });

        await expect(element).toHaveAttribute("role", "navigation");
    });

    test("should include an internal element with a `role` of `list`", async ({
        page,
    }) => {
        const element = page.locator("fast-breadcrumb");

        await page.goto("http://localhost:6006");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-breadcrumb></fast-breadcrumb>
            `;
        });

        await expect(element.locator(".list")).toHaveAttribute("role", "list");
    });

    test("should not render a separator on last item", async ({ page }) => {
        const element = page.locator("fast-breadcrumb");
        const items = element.locator("fast-breadcrumb-item");

        await page.goto("http://localhost:6006");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-breadcrumb>
                    <fast-breadcrumb-item>Item 1</fast-breadcrumb-item>
                    <fast-breadcrumb-item>Item 2</fast-breadcrumb-item>
                    <fast-breadcrumb-item>Item 3</fast-breadcrumb-item>
                </fast-breadcrumb>
            `;
        });

        await expect(items).toHaveCount(3);

        await expect(items.last()).toHaveJSProperty("separator", false);
    });

    test("should set `aria-current` on the internal anchor of the last node when `href` is present", async ({
        page,
    }) => {
        const element = page.locator("fast-breadcrumb");

        await page.goto("http://localhost:6006");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-breadcrumb>
                    <fast-breadcrumb-item>Item 1</fast-breadcrumb-item>
                    <fast-breadcrumb-item>Item 2</fast-breadcrumb-item>
                    <fast-breadcrumb-item href="#">Item 3</fast-breadcrumb-item>
                </fast-breadcrumb>
            `;
        });

        await expect(
            element.locator("fast-breadcrumb-item:last-of-type a")
        ).toHaveAttribute("aria-current", "page");
    });

    test("should remove `aria-current` from any prior breadcrumb item children with child anchors when a new node is appended", async ({
        page,
    }) => {
        const element = page.locator("fast-breadcrumb");

        await page.goto("http://localhost:6006");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-breadcrumb>
                    <fast-breadcrumb-item>Item 1</fast-breadcrumb-item>
                    <fast-breadcrumb-item>Item 2</fast-breadcrumb-item>
                    <fast-breadcrumb-item href="#">Item 3</fast-breadcrumb-item>
                </fast-breadcrumb>
            `;
        });

        await expect(
            element.locator("fast-breadcrumb-item:last-of-type a")
        ).toHaveAttribute("aria-current", "page");

        await element.evaluate<void, FASTBreadcrumb>(node => {
            node.append(document.createElement("fast-breadcrumb-item"));
        });

        await expect(
            element.locator("fast-breadcrumb-item:nth-of-type(2) a")
        ).not.hasAttribute("aria-current");
    });
});
