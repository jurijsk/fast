import { parseColorHexRGB } from "@microsoft/fast-colors";
import { expect } from "chai";
import { PaletteRGB } from "../color-vNext/palette";
import { SwatchRGB } from "../color-vNext/swatch";
import { FASTDesignSystem, fastDesignSystemDefaults } from "../fast-design-system";
import {
    accentPalette as getAccentPalette,
    neutralPalette as getNeutralPalette,
} from "../fast-design-system";
import { neutralBaseColor } from "./color-constants";
import { clamp, FillSwatchFamily, Swatch } from "./common";
import {
    neutralFillInput_DEPRECATED,
    neutralFillInputActive_DEPRECATED,
    neutralFillInputFocus_DEPRECATED,
    neutralFillInputHover_DEPRECATED,
    neutralFillInputRest_DEPRECATED,
    neutralFillInputSelected_DEPRECATED,
} from "./neutral-fill-input";
import { isDarkMode, Palette } from "./palette";
import { neutralFillInput as neutralFillInputNew } from "../color-vNext/recipes/neutral-fill-input";

describe("neutralFillInput", (): void => {
    const neutralPalette: Palette = getNeutralPalette(fastDesignSystemDefaults);
    const accentPalette: Palette = getAccentPalette(fastDesignSystemDefaults);

    it("should operate on design system defaults", (): void => {
        [
            neutralFillInputActive_DEPRECATED,
            neutralFillInputFocus_DEPRECATED,
            neutralFillInputHover_DEPRECATED,
            neutralFillInputRest_DEPRECATED,
            neutralFillInputSelected_DEPRECATED,
        ].forEach(fn => {
            expect(neutralPalette).to.include(fn({} as FASTDesignSystem));
        });
    });

    it("should always be lighter than the background by the delta in light mode and darker in dark mode", (): void => {
        neutralPalette.forEach((swatch: Swatch, index: number): void => {
            const designSystem: FASTDesignSystem = {
                backgroundColor: neutralPalette[index],
            } as FASTDesignSystem;

            expect(neutralFillInputSelected_DEPRECATED(designSystem)).to.equal(
                neutralPalette[
                    clamp(
                        index -
                            fastDesignSystemDefaults.neutralFillInputRestDelta *
                                (isDarkMode(designSystem) ? -1 : 1),
                        0,
                        neutralPalette.length - 1
                    )
                ]
            );
        });
    });

    it("should return the same color from both implementations", (): void => {
        neutralPalette.concat(accentPalette).forEach((swatch: Swatch): void => {
            expect(neutralFillInputRest_DEPRECATED(() => swatch)(fastDesignSystemDefaults)).to.equal(
                neutralFillInputRest_DEPRECATED(
                    Object.assign({}, fastDesignSystemDefaults, {
                        backgroundColor: swatch,
                    })
                )
            );
            expect(
                neutralFillInputHover_DEPRECATED(() => swatch)(fastDesignSystemDefaults)
            ).to.equal(
                neutralFillInputHover_DEPRECATED(
                    Object.assign({}, fastDesignSystemDefaults, {
                        backgroundColor: swatch,
                    })
                )
            );
            expect(
                neutralFillInputActive_DEPRECATED(() => swatch)(fastDesignSystemDefaults)
            ).to.equal(
                neutralFillInputActive_DEPRECATED(
                    Object.assign({}, fastDesignSystemDefaults, {
                        backgroundColor: swatch,
                    })
                )
            );
            expect(
                neutralFillInputFocus_DEPRECATED(() => swatch)(fastDesignSystemDefaults)
            ).to.equal(
                neutralFillInputFocus_DEPRECATED(
                    Object.assign({}, fastDesignSystemDefaults, {
                        backgroundColor: swatch,
                    })
                )
            );
            expect(
                neutralFillInputSelected_DEPRECATED(() => swatch)(fastDesignSystemDefaults)
            ).to.equal(
                neutralFillInputSelected_DEPRECATED(
                    Object.assign({}, fastDesignSystemDefaults, {
                        backgroundColor: swatch,
                    })
                )
            );
        });
    });

    it("should have consistent return values", (): void => {
        neutralPalette.concat(accentPalette).forEach((swatch: Swatch): void => {
            const backplates: FillSwatchFamily = neutralFillInput_DEPRECATED(() => swatch)(
                fastDesignSystemDefaults
            );
            const rest: Swatch = neutralFillInputRest_DEPRECATED(() => swatch)(
                fastDesignSystemDefaults
            );
            const hover: Swatch = neutralFillInputHover_DEPRECATED(() => swatch)(
                fastDesignSystemDefaults
            );
            const active: Swatch = neutralFillInputActive_DEPRECATED(() => swatch)(
                fastDesignSystemDefaults
            );
            const focus: Swatch = neutralFillInputFocus_DEPRECATED(() => swatch)(
                fastDesignSystemDefaults
            );
            const selected: Swatch = neutralFillInputSelected_DEPRECATED(() => swatch)(
                fastDesignSystemDefaults
            );

            expect(backplates.rest).to.equal(rest);
            expect(backplates.hover).to.equal(hover);
            expect(backplates.active).to.equal(active);
            expect(backplates.focus).to.equal(focus);
            expect(backplates.selected).to.equal(selected);
        });
    });
});
describe("ensure parity between old and new recipe implementation", () => {
    const color = (parseColorHexRGB(neutralBaseColor)!)
    const palette = PaletteRGB.create(SwatchRGB.create(color.r, color.g, color.b));
    palette.swatches.forEach(( newSwatch, index ) => {
        const {
            neutralFillInputRestDelta,
            neutralFillInputHoverDelta,
            neutralFillInputActiveDelta,
            neutralFillInputFocusDelta,
            neutralFillInputSelectedDelta
        } = fastDesignSystemDefaults;
        const oldValues = neutralFillInput_DEPRECATED({...fastDesignSystemDefaults, backgroundColor: fastDesignSystemDefaults.neutralPalette[index]});
        const newValues = neutralFillInputNew(
            palette,
            newSwatch,
            neutralFillInputRestDelta,
            neutralFillInputHoverDelta,
            neutralFillInputActiveDelta,
            neutralFillInputFocusDelta,
            neutralFillInputSelectedDelta
        );
            it(`should be the same for ${newSwatch}`, () => {
                for (let key in oldValues) {
                    expect(oldValues[key]).to.equal(newValues[key].toColorString().toUpperCase())
                }
        });
    })
})