---
id: fast-colors.saturatevialch
title: saturateViaLCH() function
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@microsoft/fast-colors](./fast-colors.md) &gt; [saturateViaLCH](./fast-colors.saturatevialch.md)

## saturateViaLCH() function

Saturate a color using LCH color space

<b>Signature:</b>

```typescript
export declare function saturateViaLCH(input: ColorRGBA64, saturation: number, saturationConstant?: number): ColorRGBA64;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  input | [ColorRGBA64](./fast-colors.colorrgba64.md) |  |
|  saturation | number |  |
|  saturationConstant | number |  |

<b>Returns:</b>

[ColorRGBA64](./fast-colors.colorrgba64.md)

## Remarks

The alpha channel of the input is ignored