export const configSchema = {
  properties: {
    source: {
      type: "object",
      patternProperties: {
        ".+": {
          oneOf: [
            {
              type: "string"
            },
            {
              type: "array",
              items: {
                type: "string"
              }
            },
            {
              type: "object",
              properties: {
                regexp: { type: "string" },
                path: { type: "string" }
              }
            }
          ]
        }
      }
    },
    output: { type: "string" },
    medias: {
      type: "object",
      patternProperties: {
        ".+": { type: "string" }
      }
    },
    lengthType: {
      type: "string",
      enum: [ "mm", "cm", "in", "px", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "p" ]
    },
    fonts: {
      type: "object",
      patternProperties: {
        ".+": { type: "string" }
      }
    },
    colors: {
      type: "object",
      patternProperties: {
        ".+": { type: "string" }
      }
    },
    shadows: {
      type: "object",
      patternProperties: {
        ".+": { type: "string" }
      }
    },
    classes: {
      type: "object",
      patternProperties: {
        ".+": { type: "string" }
      }
    },
    aliases: {
      type: "object",
      patternProperties: {
        ".+": { type: "string" }
      }
    },
    components: {
      type: "object",
      patternProperties: {
        ".+": { type: "string" }
      }
    },
    items: {
      type: "object",
      patternProperties: {
        ".+": {
          type: "object",
          patternProperties: {
            ".+": { type: "string" }
          }
        }
      }
    },
    include: { type: "string" },
    exclude: { type: "string" },
    cssBefore: { type: "string" },
    cssAfter: { type: "string" }
  },
  additionalProperties: false
};