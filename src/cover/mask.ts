import { CoverInfo } from "../cover-info";

export const mask: CoverInfo[] = [
  { style: "mask-size",
    values: "auto|{length}|contain|cover|initial|inherit"
  },
  { style: "mask-repeat",
    values: "repeat|repeat-x|repeat-y|space|round|no-repeat|initial|inherit"
  },
  { style: "mask-position",
    values: "{lenght2}|left top|left center|left bottom|right top|right center|right bottom|center top|center center|center bottom|initial|inherit"
  },
  { style: "mask-origin",
    values: "border-box|content-box|padding-box|margin-box|fill-box|stroke-box|view-box|initial|inherit"
  },
  { style: "mask-mode",
    values: "match-source|luminance|alpha|initial|inherit"
  },
  { style: "mask-image",
    values: "none|{image}|{url}|initial|inherit",
    skip: true,
    note: "It will be covered when URL is supported."
  }
]