import { Swatch } from "../swatch.js";
import { Palette, PaletteDirection } from "../palette.js";
import { directionByIsDark } from "../utilities/direction-by-is-dark.js";
import { swatchAsOverlay } from "../utilities/opacity.js";

/**
 * Color algorithm to get the Swatch a specified position away from the reference color.
 *
 * @param palette - The Palette used to find the Swatch
 * @param reference - The reference color
 * @param delta - The offset from the `reference`
 * @param asOverlay - True to return a semitransparent swatch relative to `reference`
 * @param direction - The direction the delta moves on the `palette`, defaults to {@link directionByIsDark} based on `reference`
 * @returns The Swatch
 *
 * @public
 */
export function deltaSwatch(
    palette: Palette,
    reference: Swatch,
    delta: number,
    asOverlay: boolean = false,
    direction: PaletteDirection = directionByIsDark(reference)
): Swatch {
    return swatchAsOverlay(
        palette.delta(reference, delta, direction),
        reference,
        asOverlay
    );
}
