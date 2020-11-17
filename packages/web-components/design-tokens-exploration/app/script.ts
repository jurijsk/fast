import { ConfigurationImpl } from "@microsoft/fast-foundation";
import { FASTCard } from "../src/card";

const MyAppConfig = new ConfigurationImpl();

MyAppConfig.register(FASTCard())
    .registerDesignToken({
        key: "backgroundColor",
        customProperty: "background-color",
        attribute: "background-color",
        value: "#F7F7F7",
    })
    .attachDesignTokensTo(document);
