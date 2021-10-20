import { attr, nullableNumberConverter, observable } from "@microsoft/fast-element";
import {
    keyArrowDown,
    keyArrowUp,
    keyEnd,
    keyEnter,
    keyEscape,
    keyHome,
    keySpace,
    keyTab,
} from "@microsoft/fast-web-utilities";
import inRange from "lodash-es/inRange";
import type { ListboxOption } from "../listbox-option/listbox-option";
import { Listbox } from "./listbox";

/**
 * A Listbox Custom HTML Element.
 * Implements the {@link https://w3c.github.io/aria/#listbox | ARIA listbox }.
 *
 * @public
 */
export class ListboxElement extends Listbox {
    /**
     * The index of the most recently checked option.
     *
     * @internal
     * @remarks
     * Multiple-selection mode only.
     */
    @observable
    private activeIndex: number = -1;

    /**
     * Updates the `ariaActiveDescendant` property when the active index changes.
     *
     * @param prev - the previous active index
     * @param next - the next active index
     *
     * @internal
     */
    protected activeIndexChanged(prev: unknown, next: number): void {
        this.ariaActiveDescendant = this.options[next]?.id ?? "";
        this.focusAndScrollOptionIntoView();
    }

    /**
     * Returns the last checked option.
     *
     * @internal
     */
    public get activeOption(): ListboxOption | null {
        return this.options[this.activeIndex];
    }

    /**
     * Returns the list of checked options.
     *
     * @internal
     */
    private get checkedOptions(): ListboxOption[] {
        return this.options?.filter(o => o.checked);
    }

    /**
     * Returns the index of the first selected option.
     *
     * @internal
     */
    public get firstSelectedOptionIndex(): number {
        return this.options.indexOf(this.firstSelectedOption);
    }

    /**
     * Indicates if the listbox is in multi-selection mode.
     *
     * @remarks
     * HTML Attribute: `multiple`
     *
     * @public
     */
    @attr({ mode: "boolean" })
    public multiple: boolean;

    /**
     * Switches between single-selection and multi-selection mode.
     *
     * @param prev - the previous value of the `multiple` attribute
     * @param next - the next value of the `multiple` attribute
     *
     * @internal
     */
    public multipleChanged(prev: unknown, next: boolean): void {
        this.options?.forEach(o => {
            o.checked = next ? false : undefined;
        });

        this.ariaMultiselectable = next ? "true" : undefined;

        this.setSelectedOptions();
        this.updateDefaultSize();
    }

    /**
     * The start index when checking a range of options.
     *
     * @internal
     */
    private rangeStartIndex: number = -1;

    /**
     * The attribute to set the size property.
     *
     * @remarks
     * HTML Attribute: `size`.
     *
     * The value of the `size` attribute is reflected by the `size` property.
     *
     * @public
     */
    @attr({
        attribute: "size",
        converter: nullableNumberConverter,
        mode: "fromView",
    })
    public sizeAttribute: number;
    public sizeAttributeChanged(prev: unknown, next: number): void {
        this.size = next;
    }

    /**
     * The number of options to display.
     *
     * @remarks
     * Setting `size` property does not change the value via the `size` attribute.
     *
     * Any value above zero will force the component to display as a listbox.
     *
     * @public
     */
    @observable
    public size: number = 0;
    protected sizeChanged(prev: unknown, next: number): void {
        if (next < 0) {
            this.size = 0;
            return;
        }

        this.updateDimensions();
    }

    /**
     * Toggles the checked state for the currently active option.
     *
     * @remarks
     * Multiple-selection mode only.
     *
     * @internal
     */
    private checkActiveIndex(): void {
        const activeItem = this.options[this.activeIndex];
        if (activeItem) {
            activeItem.checked = true;
        }
    }

    /**
     * Sets the active index to the first option and marks it as checked.
     *
     * @remarks
     * Multi-selection mode only.
     *
     * @param preserveChecked - mark all options unchecked before changing the active index
     *
     * @internal
     */
    protected checkFirstOption(preserveChecked: boolean = false): void {
        if (preserveChecked) {
            if (this.rangeStartIndex === -1) {
                this.rangeStartIndex = this.activeIndex;
            }

            this.options.forEach((o, i) => {
                o.checked = inRange(i, this.rangeStartIndex + 1);
            });
        } else {
            this.uncheckAllOptions();
        }

        this.activeIndex = 0;
        this.checkActiveIndex();
    }

    /**
     * Decrements the active index and sets the matching option as checked.
     *
     * @remarks
     * Multi-selection mode only.
     *
     * @param preserveChecked - mark all options unchecked before changing the active index
     *
     * @internal
     */
    protected checkLastOption(preserveChecked: boolean = false): void {
        if (preserveChecked) {
            if (this.rangeStartIndex === -1) {
                this.rangeStartIndex = this.activeIndex;
            }

            this.options.forEach((o, i) => {
                o.checked = inRange(
                    i,
                    ...([this.rangeStartIndex, this.options.length].sort() as [
                        number,
                        number
                    ])
                );
            });
        } else {
            this.uncheckAllOptions();
        }

        this.activeIndex = this.options.length - 1;
        this.checkActiveIndex();
    }

    /**
     * Increments the active index and marks the matching option as checked.
     *
     * @remarks
     * Multiple-selection mode only.
     *
     * @param preserveChecked - mark all options unchecked before changing the active index
     *
     * @internal
     */
    protected checkNextOption(preserveChecked: boolean = false): void {
        if (preserveChecked) {
            if (this.rangeStartIndex === -1) {
                this.rangeStartIndex = this.activeIndex;
            }

            this.options.forEach((o, i) => {
                o.checked = inRange(
                    i,
                    ...([this.rangeStartIndex, this.activeIndex + 1].sort() as [
                        number,
                        number
                    ])
                );
            });
        } else {
            this.uncheckAllOptions();
        }

        this.activeIndex += this.activeIndex < this.options.length - 1 ? 1 : 0;
        this.checkActiveIndex();
    }

    /**
     * Decrements the active index and marks the matching option as checked.
     *
     * @remarks
     * Multiple-selection mode only.
     *
     * @param preserveChecked - mark all options unchecked before changing the active index
     *
     * @internal
     */
    protected checkPreviousOption(preserveChecked: boolean = false): void {
        if (preserveChecked) {
            if (this.rangeStartIndex === -1) {
                this.rangeStartIndex = this.activeIndex;
            }

            if (this.checkedOptions.length === 1) {
                this.rangeStartIndex += 1;
            }

            this.options.forEach((o, i) => {
                o.checked = inRange(
                    i,
                    ...([this.activeIndex, this.rangeStartIndex].sort() as [
                        number,
                        number
                    ])
                );
            });
        } else {
            this.uncheckAllOptions();
        }

        this.activeIndex -= this.activeIndex > 0 ? 1 : 0;
        this.checkActiveIndex();
    }

    /**
     * Handles click events for listbox options.
     *
     * @param e - the event object
     *
     * @override
     * @internal
     */
    public clickHandler(e: MouseEvent): boolean | void {
        if (!this.multiple) {
            return super.clickHandler(e);
        }

        const captured = (e.target as Element | null)?.closest<ListboxOption>(
            `[role=option]`
        );

        if (!captured || captured.disabled) {
            return;
        }

        this.uncheckAllOptions();
        this.activeIndex = this.options.indexOf(captured);
        this.checkActiveIndex();
        this.toggleSelectedForAllCheckedOptions();

        return true;
    }

    /**
     * @override
     * @internal
     */
    public connectedCallback(): void {
        super.connectedCallback();
        this.addEventListener("focusout", this.focusoutHandler);
    }

    /**
     * @override
     * @internal
     */
    public disconnectedCallback(): void {
        this.removeEventListener("focusout", this.focusoutHandler);
        super.disconnectedCallback();
    }

    /**
     * @override
     * @internal
     */
    protected focusAndScrollOptionIntoView(): void {
        super.focusAndScrollOptionIntoView(this.activeOption);
    }

    /**
     * In multiple-selection mode:
     * If any options are selected, the first selected option is checked when
     * the listbox receives focus. If no options are selected, the first
     * selectable option is checked.
     *
     * @override
     * @internal
     */
    public focusinHandler(e: FocusEvent): boolean | void {
        if (!this.multiple) {
            return super.focusinHandler(e);
        }

        if (!this.shouldSkipFocus && e.target === e.currentTarget) {
            this.uncheckAllOptions();

            if (this.activeIndex === -1) {
                this.activeIndex =
                    this.firstSelectedOptionIndex !== -1
                        ? this.firstSelectedOptionIndex
                        : 0;
            }

            this.checkActiveIndex();
            this.setSelectedOptions();
            this.focusAndScrollOptionIntoView();
        }

        this.shouldSkipFocus = false;
    }

    /**
     * Unchecks all options when the listbox loses focus.
     *
     * @internal
     */
    public focusoutHandler(e: FocusEvent): void {
        if (this.multiple) {
            this.uncheckAllOptions();
        }
    }

    /**
     * Handles keydown actions for listbox navigation and typeahead
     *
     * @override
     * @internal
     */
    public keydownHandler(e: KeyboardEvent): boolean | void {
        if (!this.multiple) {
            return super.keydownHandler(e);
        }

        if (this.disabled) {
            return true;
        }

        const { key, shiftKey } = e;

        this.shouldSkipFocus = false;

        switch (key) {
            // Select the first available option
            case keyHome: {
                this.checkFirstOption(shiftKey);
                return;
            }

            // Select the next selectable option
            case keyArrowDown: {
                this.checkNextOption(shiftKey);
                return;
            }

            // Select the previous selectable option
            case keyArrowUp: {
                this.checkPreviousOption(shiftKey);
                return;
            }

            // Select the last available option
            case keyEnd: {
                this.checkLastOption(shiftKey);
                return;
            }

            case keyTab: {
                this.focusAndScrollOptionIntoView();
                return true;
            }

            case keyEnter:
            case keyEscape: {
                return true;
            }

            case keySpace: {
                e.preventDefault();
                if (this.typeAheadExpired) {
                    this.toggleSelectedForAllCheckedOptions();
                    return;
                }
            }

            // Send key to Typeahead handler
            default: {
                if (key.length === 1) {
                    this.handleTypeAhead(`${key}`);
                }
                return true;
            }
        }
    }

    /**
     * Prevents `focusin` events from firing before `click` events when the
     * element is unfocused.
     *
     * @override
     * @internal
     */
    public mousedownHandler(e: MouseEvent): boolean | void {
        if (e.offsetX >= 0 && e.offsetX <= this.scrollWidth) {
            return super.mousedownHandler(e);
        }
    }

    /**
     * Sets an option as selected and gives it focus.
     *
     * @override
     * @public
     */
    protected setSelectedOptions() {
        if (!this.multiple) {
            super.setSelectedOptions();
            return;
        }

        if (this.$fastController.isConnected && this.options) {
            this.selectedOptions = this.options.filter(o => o.selected);
            this.focusAndScrollOptionIntoView();
        }
    }

    /**
     * Toggles the selected state of the provided options. If any provided items
     * are in an unselected state, all items are set to selected. If every
     * provided item is selected, they are all unselected.
     *
     * @internal
     */
    public toggleSelectedForAllCheckedOptions(): void {
        const enabledCheckedOptions = this.checkedOptions.filter(o => !o.disabled);
        const force = !enabledCheckedOptions.every(o => o.selected);
        enabledCheckedOptions.forEach(o => (o.selected = force));
        this.selectedIndex = this.options.indexOf(
            enabledCheckedOptions[enabledCheckedOptions.length - 1]
        );

        this.setSelectedOptions();
    }

    /**
     * @override
     * @internal
     */
    public typeaheadBufferChanged(prev: string, next: string): void {
        if (!this.multiple) {
            super.typeaheadBufferChanged(prev, next);
            return;
        }

        if (this.$fastController.isConnected) {
            const filteredOptions = this.getFilteredOptions();
            if (filteredOptions.length) {
                const activeIndex = this.options.indexOf(filteredOptions[0]);
                if (activeIndex > -1) {
                    this.activeIndex = activeIndex;
                    this.uncheckAllOptions();
                    this.checkActiveIndex();
                }
            }

            this.typeAheadExpired = false;
        }
    }

    /**
     * Unchecks all options.
     *
     * @remarks
     * Multiple-selection mode only.
     *
     * @param preserveChecked - reset the rangeStartIndex
     *
     * @internal
     */
    protected uncheckAllOptions(preserveChecked: boolean = false): void {
        this.options.forEach(o => (o.checked = false));
        if (!preserveChecked) {
            this.rangeStartIndex = -1;
        }
    }

    /**
     * Sets the the size property to either the size attribute or 0.
     *
     * @internal
     */
    protected updateDefaultSize(): void {
        this.size = this.sizeAttribute ?? 0;
    }

    /**
     * Sets the max-height based on the height of the first option and the `size` attribute.
     *
     * @internal
     */
    protected updateDimensions() {
        requestAnimationFrame(() => {
            const originalOverflow = this.style.getPropertyValue("overflow");
            const originalWidth = this.style.getPropertyValue("width");
            this.style.setProperty("overflow", "auto");
            this.style.setProperty("width", "auto");

            const firstOptionHeight = this.options?.[0]?.offsetHeight * this.size;

            if (originalOverflow) {
                this.style.setProperty("overflow", originalOverflow);
            } else {
                this.style.removeProperty("overflow");
            }

            if (originalWidth) {
                this.style.setProperty("width", originalWidth);
            } else {
                this.style.removeProperty("width");
            }

            if (!isNaN(firstOptionHeight) && firstOptionHeight > 0) {
                this.style.setProperty("--max-height", `${firstOptionHeight}px`);
            }
        });
    }
}
