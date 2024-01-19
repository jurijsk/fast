import { expect, test } from "@playwright/test";
import type { FASTDataGridCell } from "./data-grid-cell.js";
import { DataGridCellTypes } from "./data-grid.options.js";

declare const FAST: any;

test.describe("Data grid cell", () => {
    test('should set the `role` attribute to "gridcell" by default', async ({ page }) => {
        await page.goto("http://localhost:6006");

        const element = page.locator("fast-data-grid-cell");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-data-grid-cell></fast-data-grid-cell>
            `;
        });

        await expect(element).toHaveAttribute("role", "gridcell");
    });

    test("should have a tabIndex of -1 by default", async ({ page }) => {
        await page.goto("http://localhost:6006");

        const element = page.locator("fast-data-grid-cell");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-data-grid-cell></fast-data-grid-cell>
            `;
        });

        await expect(element).toHaveAttribute("tabindex", "-1");
    });

    test('should set the `role` attribute to "columnheader" when the `cell-type` attribute is "columnheader"', async ({
        page,
    }) => {
        await page.goto("http://localhost:6006");

        const element = page.locator("fast-data-grid-cell");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-data-grid-cell cell-type="columnheader"></fast-data-grid-cell>
            `;
        });

        await expect(element).toHaveAttribute("role", "columnheader");
    });

    test('should set the `role` attribute to "rowheader" when the `cell-type` attribute is "rowheader"', async ({
        page,
    }) => {
        await page.goto("http://localhost:6006");

        const element = page.locator("fast-data-grid-cell");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-data-grid-cell cell-type="rowheader"></fast-data-grid-cell>
            `;
        });

        await expect(element).toHaveAttribute("role", "rowheader");
    });

    test("should set the `grid-column` CSS property to match the `grid-column` attribute", async ({
        page,
    }) => {
        await page.goto("http://localhost:6006");

        const element = page.locator("fast-data-grid-cell");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-data-grid-cell grid-column="2"></fast-data-grid-cell>
            `;
        });

        await expect(element).toHaveCSS("grid-column-start", "2");

        await expect(element).toHaveCSS("grid-column-end", "auto");
    });

    test("should not render data if no columndefinition provided", async ({ page }) => {
        await page.goto("http://localhost:6006");

        const element = page.locator("fast-data-grid-cell");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-data-grid-cell></fast-data-grid-cell>
            `;
        });

        await element.evaluate((el: FASTDataGridCell) => {
            el.rowData = {
                item1: "data grid cell value 1",
                item2: "data grid cell value 2",
                item3: "data grid cell value 3",
                item4: "data grid cell value 4",
            };
        });

        await expect(element).toBeEmpty();
    });

    test("should render data when a column definition is provided", async ({ page }) => {
        await page.goto("http://localhost:6006");

        const element = page.locator("fast-data-grid-cell");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-data-grid-cell></fast-data-grid-cell>
            `;
        });

        await element.evaluate((el: FASTDataGridCell) => {
            el.columnDefinition = { columnDataKey: "item1" };
            el.rowData = {
                item1: "data grid cell value 1",
                item2: "data grid cell value 2",
                item3: "data grid cell value 3",
                item4: "data grid cell value 4",
            };
        });

        await expect(element).toHaveText("data grid cell value 1");
    });

    test("should render a custom cell template when provided", async ({ page }) => {
        await page.goto("http://localhost:6006");

        const element = page.locator("fast-data-grid-cell");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-data-grid-cell></fast-data-grid-cell>
            `;
        });

        await element.evaluate((node: FASTDataGridCell) => {
            node.columnDefinition = {
                columnDataKey: "item2",
                cellTemplate: FAST.html`custom cell template`,
            };
        });

        await expect(element).toHaveText("custom cell template");
    });

    test("should render a custom header cell template if provided", async ({ page }) => {
        await page.goto("http://localhost:6006");

        const element = page.locator("fast-data-grid-cell");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-data-grid-cell cell-type="columnheader"></fast-data-grid-cell>
            `;
        });

        await element.evaluate((node: FASTDataGridCell) => {
            node.columnDefinition = {
                columnDataKey: "item2",
                headerCellTemplate: FAST.html`custom header cell template`,
            };
        });

        await expect(element).toHaveText("custom header cell template");
    });

    test(`should fire a "cell-focused" event when focused`, async ({ page }) => {
        await page.goto("http://localhost:6006");

        const element = page.locator("fast-data-grid-cell");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-data-grid-cell></fast-data-grid-cell>
            `;
        });

        const wasInvoked = await Promise.all([
            element.evaluate(node => node.addEventListener("cell-focused", () => true)),
            element.focus(),
        ]);

        expect(wasInvoked).toBeTruthy();

        expect(
            await element.evaluate(node => document.activeElement?.isSameNode(node))
        ).toBeTruthy();
    });

    test("should focus on custom cell template when a focus target callback is provided", async ({
        page,
    }) => {
        await page.goto("http://localhost:6006");

        const element = page.locator("fast-data-grid-cell");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-data-grid-cell></fast-data-grid-cell>
            `;
        });

        await element.evaluate((node: FASTDataGridCell) => {
            node.columnDefinition = {
                columnDataKey: "item2",
                cellFocusTargetCallback: cell =>
                    cell.querySelector("button") as HTMLButtonElement,
                cellTemplate: FAST.html`<button>test button</button>`,
            };
        });

        await element.focus();

        expect(await page.evaluate(() => document.activeElement?.textContent)).toBe(
            "test button"
        );
    });

    test("should focus on custom header cell template when a focus target callback is provided", async ({
        page,
    }) => {
        await page.goto("http://localhost:6006");

        const element = page.locator("fast-data-grid-cell");

        await page.locator("#root").evaluate(node => {
            node.innerHTML = /* html */ `
                <fast-data-grid-cell cell-type="columnheader"></fast-data-grid-cell>
            `;
        });

        await element.evaluate((node: FASTDataGridCell, DataGridCellTypes) => {
            node.cellType = DataGridCellTypes.columnHeader;
            node.columnDefinition = {
                columnDataKey: "item2",
                headerCellTemplate: FAST.html`<button>test header button</button>`,
                headerCellFocusTargetCallback: cell =>
                    cell.querySelector("button") as HTMLButtonElement,
            };
        }, DataGridCellTypes);

        await element.focus();

        expect(await page.evaluate(() => document.activeElement?.textContent)).toBe(
            "test header button"
        );
    });
});
