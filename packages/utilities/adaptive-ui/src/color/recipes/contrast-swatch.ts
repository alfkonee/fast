import { Palette, PaletteDirection } from "../palette.js";
import { Swatch } from "../swatch.js";
import { directionByIsDark } from "../utilities/direction-by-is-dark.js";
import { swatchAsOverlay } from "../utilities/opacity.js";

/**
 * Gets a Swatch meeting the minimum contrast from the reference color.
 *
 * @param palette - The Palette used to find the Swatch
 * @param reference - The reference color
 * @param minContrast - The desired minimum contrast
 * @param asOverlay - True to return a semitransparent swatch relative to `reference`
 * @param direction - The direction the delta moves on the `palette`, defaults to {@link directionByIsDark} based on `reference`
 * @returns The Swatch
 *
 * @public
 */
export function contrastSwatch(
    palette: Palette,
    reference: Swatch,
    minContrast: number,
    asOverlay: boolean = false,
    direction: PaletteDirection = directionByIsDark(reference)
): Swatch {
    return swatchAsOverlay(
        palette.colorContrast(reference, minContrast, undefined, direction),
        reference,
        asOverlay
    );
}
