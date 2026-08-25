import { i as __toESM } from "../_runtime.mjs";
import { R as require_react, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/snowline-listing-BUpAznmq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var S = 10;
var OX = 56;
var OY = 48;
function FloorPlan({ floor }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 640 470",
		role: "img",
		"aria-label": `The Snowline Chalet ${floor === "main" ? "Main floor" : "Upper floor"} schematic, 48 feet by 34 feet`,
		className: "h-auto w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "640",
				height: "470",
				fill: "var(--color-cream)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: `translate(${OX} ${OY}) scale(${S})`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Poche, {}),
					floor === "main" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MainRooms, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpperRooms, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Windows, {}),
					floor === "main" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MainFurniture, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpperFurniture, {}),
					floor === "main" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MainDoors, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpperDoors, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stairs, { up: floor === "main" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dimensions, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleBlock, { floor }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaleBar, {})
		]
	});
}
function Poche() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: 0,
		y: 0,
		width: 48,
		height: 34,
		fill: "var(--color-ink)"
	});
}
function MainRooms() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: .5,
			y: .5,
			width: 13,
			height: 17,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 14,
			y: .5,
			width: 33.5,
			height: 17,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: .5,
			y: 18,
			width: 13,
			height: 15.5,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 14,
			y: 18,
			width: 7.5,
			height: 7.4,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 14,
			y: 26,
			width: 7.5,
			height: 7.5,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 22,
			y: 18,
			width: 7.5,
			height: 15.5,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 30,
			y: 18,
			width: 17.5,
			height: 15.5,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 13.35,
			y: 9,
			width: .9,
			height: 7,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 23,
			y: 17.35,
			width: 4.5,
			height: .9,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 29.35,
			y: 24,
			width: .9,
			height: 4,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 13.5,
			y: 2.6,
			width: 2.2,
			height: 5.2,
			fill: "var(--color-ink)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 15.4,
			y: 3.4,
			width: .55,
			height: 3.6,
			fill: "var(--color-paper-deep)"
		})
	] });
}
function UpperRooms() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: .5,
			y: .5,
			width: 13,
			height: 17,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 14,
			y: .5,
			width: 33.5,
			height: 17,
			fill: "var(--color-paper-deep)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: .5,
			y: 18,
			width: 13,
			height: 15.5,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 14,
			y: 18,
			width: 7.5,
			height: 15.5,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 22,
			y: 18,
			width: 7.5,
			height: 15.5,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 30,
			y: 18,
			width: 17.5,
			height: 15.5,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 22,
			y: 13,
			width: 16,
			height: 5,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 23,
			y: 17.35,
			width: 4.5,
			height: .9,
			fill: "var(--color-cream)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M14.2 0.7 H47.3 V12.8 H38 V13 H22 V17.3 H14.2 Z",
			fill: "none",
			stroke: "var(--color-mute)",
			strokeWidth: .08,
			strokeDasharray: "0.45 0.28"
		})
	] });
}
function Windows() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		stroke: "var(--color-ink)",
		fill: "var(--color-cream)",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowNS, {
				x: 15.2,
				w: 7.4
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowNS, {
				x: 23.2,
				w: 7.4
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowNS, {
				x: 31.2,
				w: 7.4
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowNS, {
				x: 39.2,
				w: 7.4
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowNS, {
				x: 2.2,
				w: 5.2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowNS, {
				x: 8,
				w: 4.2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowWE, {
				x: 0,
				y: 3.2,
				h: 5.5
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowWE, {
				x: 0,
				y: 20.5,
				h: 6
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowWE, {
				x: 0,
				y: 27.5,
				h: 4.5
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowWE, {
				x: 47.5,
				y: 3.2,
				h: 6
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowWE, {
				x: 47.5,
				y: 20.5,
				h: 5
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowWE, {
				x: 47.5,
				y: 27,
				h: 4.5
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowSN, {
				x: 2.2,
				w: 5
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowSN, {
				x: 8,
				w: 4.2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowSN, {
				x: 32.2,
				w: 4
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WindowSN, {
				x: 42.5,
				w: 4
			})
		]
	});
}
function WindowNS({ x, w }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x,
			y: -.02,
			width: w,
			height: .54
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: x,
			y1: .14,
			x2: x + w,
			y2: .14,
			strokeWidth: .06
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: x,
			y1: .34,
			x2: x + w,
			y2: .34,
			strokeWidth: .06
		})
	] });
}
function WindowSN({ x, w }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x,
			y: 33.48,
			width: w,
			height: .54
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: x,
			y1: 33.64,
			x2: x + w,
			y2: 33.64,
			strokeWidth: .06
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: x,
			y1: 33.84,
			x2: x + w,
			y2: 33.84,
			strokeWidth: .06
		})
	] });
}
function WindowWE({ x, y, h }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: x - .02,
			y,
			width: .54,
			height: h
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: x + .14,
			y1: y,
			x2: x + .14,
			y2: y + h,
			strokeWidth: .06
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: x + .34,
			y1: y,
			x2: x + .34,
			y2: y + h,
			strokeWidth: .06
		})
	] });
}
function MainFurniture() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomName, {
			x: 7,
			y: 4.2,
			children: "Kitchen"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomName, {
			x: 32.5,
			y: 3.6,
			sub: "Two story · glass gable",
			children: "Great room"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomName, {
			x: 7,
			y: 20.2,
			children: "Primary suite"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomName, {
			x: 17.75,
			y: 20.6,
			size: "sm",
			children: "Bath"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomName, {
			x: 17.75,
			y: 28.8,
			size: "sm",
			children: "Closet"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomName, {
			x: 25.75,
			y: 19.8,
			size: "sm",
			children: "Stair"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomName, {
			x: 38.75,
			y: 20.4,
			children: "Mud"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 1.2,
			y: 1.2,
			w: 11.6,
			h: 2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 5.4,
			y: 9.6,
			w: 6,
			h: 2.8
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 17.2,
			y: 11.8,
			w: 6.4,
			h: 3
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 24.2,
			y: 12.6,
			w: 9.4,
			h: 3
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 27,
			y: 9.8,
			w: 3.6,
			h: 2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 3.2,
			y: 24.8,
			w: 5.4,
			h: 7
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: 3.4,
			y1: 24.8,
			x2: 8.4,
			y2: 24.8,
			stroke: "var(--color-mute)",
			strokeWidth: .1
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 14.7,
			y: 18.8,
			w: 3.6,
			h: 3.6
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 18.8,
			y: 19,
			w: 1.5,
			h: 2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 14.7,
			y: 23.2,
			w: 6.2,
			h: 1.6
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: 14.8,
			y1: 27.6,
			x2: 20.6,
			y2: 27.6,
			stroke: "var(--color-mute)",
			strokeWidth: .08
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: 14.8,
			y1: 32,
			x2: 20.6,
			y2: 32,
			stroke: "var(--color-mute)",
			strokeWidth: .08
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 31.4,
			y: 18.8,
			w: 15.4,
			h: 1.6
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 45.6,
			y: 22.4,
			w: 1.4,
			h: 8
		})
	] });
}
function UpperFurniture() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomName, {
			x: 7,
			y: 3.8,
			children: "Bedroom 2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomName, {
			x: 31.5,
			y: 5.6,
			sub: "Open to great room below",
			children: "Void"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomName, {
			x: 30,
			y: 15.2,
			size: "sm",
			children: "Loft"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomName, {
			x: 7,
			y: 20.2,
			children: "Bedroom 3"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomName, {
			x: 17.75,
			y: 20.4,
			size: "sm",
			children: "Bath"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomName, {
			x: 25.75,
			y: 19.8,
			size: "sm",
			children: "Stair"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomName, {
			x: 38.75,
			y: 20.2,
			children: "Bedroom 4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 4,
			y: 8.2,
			w: 5.4,
			h: 7
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 1.4,
			y: 14.8,
			w: 3.2,
			h: 2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: 22,
			y1: 13,
			x2: 38,
			y2: 13,
			stroke: "var(--color-ink)",
			strokeWidth: .12
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: 22,
			y1: 13,
			x2: 22,
			y2: 17.5,
			stroke: "var(--color-ink)",
			strokeWidth: .12
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: 38,
			y1: 13,
			x2: 38,
			y2: 17.5,
			stroke: "var(--color-ink)",
			strokeWidth: .12
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 25.2,
			y: 14.2,
			w: 8.4,
			h: 2.2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 4,
			y: 24.6,
			w: 5.4,
			h: 7
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 14.7,
			y: 22.4,
			w: 3.6,
			h: 3.6
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 18.8,
			y: 22.6,
			w: 1.5,
			h: 2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 14.7,
			y: 30.4,
			w: 6.2,
			h: 1.6
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furn, {
			x: 35.2,
			y: 24.6,
			w: 7,
			h: 5.4
		})
	] });
}
function Furn({ x, y, w, h }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x,
		y,
		width: w,
		height: h,
		fill: "var(--color-paper-deep)",
		stroke: "var(--color-mute)",
		strokeWidth: .07
	});
}
function MainDoors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		stroke: "var(--color-mute)",
		strokeWidth: .08,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 14 20.4 A 2.4 2.4 0 0 1 16.4 22.8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 14,
				y1: 20.4,
				x2: 16.4,
				y2: 20.4,
				strokeWidth: .1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 14.4 26 A 2.2 2.2 0 0 0 16.6 28.2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 14.4,
				y1: 26,
				x2: 14.4,
				y2: 28.2,
				strokeWidth: .1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 13.5 30.6 A 2.4 2.4 0 0 0 15.9 28.2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 13.5,
				y1: 30.6,
				x2: 13.5,
				y2: 28.2,
				strokeWidth: .1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 36.2 33.5 A 2.6 2.6 0 0 1 38.8 30.9" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 36.2,
				y1: 33.5,
				x2: 36.2,
				y2: 30.9,
				strokeWidth: .1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 41.6 33.5 A 2.6 2.6 0 0 0 39 30.9" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 41.6,
				y1: 33.5,
				x2: 41.6,
				y2: 30.9,
				strokeWidth: .1
			})
		]
	});
}
function UpperDoors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		stroke: "var(--color-mute)",
		strokeWidth: .08,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 13.5 9.2 A 2.4 2.4 0 0 1 15.9 11.6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 13.5,
				y1: 9.2,
				x2: 13.5,
				y2: 11.6,
				strokeWidth: .1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 13.5 24.2 A 2.4 2.4 0 0 1 15.9 26.6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 13.5,
				y1: 24.2,
				x2: 13.5,
				y2: 26.6,
				strokeWidth: .1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 21.5 24.2 A 2.4 2.4 0 0 0 19.1 26.6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 21.5,
				y1: 24.2,
				x2: 21.5,
				y2: 26.6,
				strokeWidth: .1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 30 24.2 A 2.4 2.4 0 0 1 32.4 26.6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 30,
				y1: 24.2,
				x2: 30,
				y2: 26.6,
				strokeWidth: .1
			})
		]
	});
}
function Stairs({ up }) {
	const treads = Array.from({ length: 7 }, (_, i) => i);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		treads.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: 22.4,
			y1: 19.2 + i * .95,
			x2: 29.1,
			y2: 19.2 + i * .95,
			stroke: "var(--color-mute)",
			strokeWidth: .07
		}, i)),
		treads.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: 22.4,
			y1: 26.6 + i * .95,
			x2: 29.1,
			y2: 26.6 + i * .95,
			stroke: "var(--color-mute)",
			strokeWidth: .07
		}, `b${i}`)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: up ? "25.75,32.4 26.45,31.2 25.05,31.2" : "25.75,19.4 26.45,20.6 25.05,20.6",
			fill: "var(--color-ink)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: 25.75,
			y: up ? 30.6 : 21.8,
			textAnchor: "middle",
			fill: "var(--color-ink)",
			fontSize: .85,
			fontFamily: "var(--font-sans)",
			letterSpacing: .08,
			children: up ? "UP" : "DN"
		})
	] });
}
function RoomName({ x, y, children, sub, size = "md" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
		x,
		y,
		textAnchor: "middle",
		fill: "var(--color-ink-soft)",
		fontSize: size === "sm" ? .95 : 1.15,
		fontFamily: "var(--font-sans)",
		fontWeight: 500,
		letterSpacing: .14,
		style: { textTransform: "uppercase" },
		children: [children, sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tspan", {
			x,
			dy: 1.35,
			fontSize: .78,
			letterSpacing: .04,
			fill: "var(--color-mute)",
			fontWeight: 400,
			style: { textTransform: "none" },
			children: sub
		}) : null]
	});
}
function Dimensions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		stroke: "var(--color-ink)",
		fill: "var(--color-ink)",
		strokeWidth: .05,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 0,
				y1: -1.8,
				x2: 48,
				y2: -1.8
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 0,
				y1: -2.25,
				x2: 0,
				y2: -1.35
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: 48,
				y1: -2.25,
				x2: 48,
				y2: -1.35
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: 24,
				y: -2.35,
				textAnchor: "middle",
				stroke: "none",
				fontSize: 1,
				fontFamily: "var(--font-sans)",
				letterSpacing: .08,
				children: "48'-0\""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: -2.2,
				y1: 0,
				x2: -2.2,
				y2: 34
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: -2.6500000000000004,
				y1: 0,
				x2: -1.7500000000000002,
				y2: 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: -2.6500000000000004,
				y1: 34,
				x2: -1.7500000000000002,
				y2: 34
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: -3.3,
				y: 17.3,
				textAnchor: "middle",
				stroke: "none",
				fontSize: 1,
				fontFamily: "var(--font-sans)",
				letterSpacing: .08,
				transform: "rotate(-90 -3.3 17.3)",
				children: "34'-0\""
			})
		]
	});
}
function TitleBlock({ floor }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fontFamily: "var(--font-sans)",
		fill: "var(--color-ink)",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: 56,
			y: 448,
			fontSize: 11,
			fontWeight: 500,
			letterSpacing: 1.8,
			style: { textTransform: "uppercase" },
			children: "The Snowline Chalet"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
			x: 56,
			y: 464,
			fontSize: 11,
			fill: "var(--color-mute)",
			letterSpacing: 1.2,
			style: { textTransform: "uppercase" },
			children: [floor === "main" ? "Main floor" : "Upper floor", " · 1/8\" = 1'-0\" · North to the range"]
		})]
	});
}
function Compass() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		transform: "translate(590 42)",
		fill: "var(--color-ink)",
		fontFamily: "var(--font-sans)",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				r: 16,
				fill: "none",
				stroke: "var(--color-ink)",
				strokeWidth: 1.1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "0,-11 3.2,6 -3.2,6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				y: -20,
				textAnchor: "middle",
				fontSize: 11,
				fontWeight: 500,
				letterSpacing: 1.4,
				children: "N"
			})
		]
	});
}
function ScaleBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		transform: "translate(430 448)",
		fill: "var(--color-ink)",
		fontFamily: "var(--font-sans)",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: 0,
				y: 0,
				width: 20,
				height: 6
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: 20,
				y: 0,
				width: 20,
				height: 6,
				fill: "none",
				stroke: "var(--color-ink)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: 40,
				y: 0,
				width: 20,
				height: 6
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: 60,
				y: 0,
				width: 20,
				height: 6,
				fill: "none",
				stroke: "var(--color-ink)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				y: 18,
				fontSize: 9,
				fill: "var(--color-mute)",
				children: "0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: 38,
				y: 18,
				fontSize: 9,
				fill: "var(--color-mute)",
				textAnchor: "middle",
				children: "8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: 80,
				y: 18,
				fontSize: 9,
				fill: "var(--color-mute)",
				textAnchor: "end",
				children: "16 ft"
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t-2 border-walnut bg-ink text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-16 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://www.forte1design.com",
					target: "_blank",
					rel: "noopener noreferrer",
					"aria-label": "Forte 1 Design",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/logo.jpg",
						alt: "Forte 1 Design",
						width: 486,
						height: 560,
						className: "h-24 w-auto sm:h-36"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-sm text-sm leading-relaxed text-cream/70",
					children: "Conceptual architecture for cabins, family homes, and custom house plans — from a studio with one bath to four bedrooms and 2.5 baths."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-2xs tracking-wide text-cream/40 uppercase",
					children: "© 2026 Forte 1 Design · Unlisted listing"
				})
			]
		})
	});
}
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-0 z-50 bg-paper/92 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-header max-w-7xl items-center justify-between border-b-2 border-walnut px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "flex min-w-0 items-center",
				href: "https://www.forte1design.com",
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": "Forte 1 Design",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/logo-header.jpg",
					alt: "Forte 1 Design",
					width: 638,
					height: 232,
					className: "h-12 w-auto sm:h-16"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "inline-flex h-11 items-center justify-center bg-ink px-4 text-xs font-medium tracking-nav text-cream uppercase hover:bg-walnut",
				href: "https://www.forte1design.com/contact",
				children: "Get a Quote"
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var CONTACT = "https://www.forte1design.com/contact";
function SnowlineListing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingGallery, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpecSet, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanSection, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/snowline-dusk.jpg",
				alt: "The Snowline Chalet",
				width: 1500,
				height: 844,
				decoding: "async",
				className: "absolute inset-0 size-full object-cover object-hero"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-ink/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex min-h-hero flex-col justify-end px-5 pt-36 pb-16 sm:px-8 sm:pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xs font-medium tracking-label text-cream/70 uppercase",
							children: "Professional Design"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 max-w-3xl font-display text-5xl leading-display font-normal text-cream sm:text-6xl lg:text-7xl",
							children: ["The Snowline", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic",
								children: " Chalet."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-sm leading-relaxed text-cream/85 sm:text-base",
							children: "4 bedroom · 2 bath · two-story alpine house. A professional design listing — photograph, line drawing, interiors, and to-scale floor plans."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "inline-flex h-12 items-center justify-center bg-cream px-7 text-sm font-medium text-ink hover:bg-paper",
								href: "#listing",
								children: "View the listing"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "inline-flex h-12 items-center justify-center border border-cream/40 px-7 text-sm font-medium text-cream hover:bg-cream/10",
								href: CONTACT,
								children: "Get a Quote"
							})]
						})
					]
				})
			})
		]
	});
}
function ListingGallery() {
	const [view, setView] = (0, import_react.useState)("photo");
	const drawing = view === "drawing";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "listing",
		className: "scroll-mt-24 border-b border-line bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xs font-medium tracking-label text-mute uppercase",
					children: "Listing"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl leading-title font-normal sm:text-5xl",
					children: "4 bedroom, 2 bath chalet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft",
					children: "A mountain chalet drawn as a professional design set: warm cedar, black steel, and a stone chimney. The great room is a two-story glass gable facing the range; a primary suite sits on the main floor; three bedrooms and a second bath occupy the upper wings. Four bedrooms, two baths — the upper end of the Forte range, built for snow country."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-4 lg:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col border border-line bg-cream",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden bg-paper-deep",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: drawing ? "/images/snowline-ink.jpg" : "/images/snowline-dusk.jpg",
										alt: drawing ? "The Snowline Chalet line drawing" : "The Snowline Chalet exterior",
										width: 1500,
										height: 844,
										decoding: "async",
										className: "aspect-photo w-full object-cover"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex border-t border-line",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
										active: !drawing,
										onClick: () => setView("photo"),
										children: "Photograph"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
										active: drawing,
										onClick: () => setView("drawing"),
										children: "Line drawing"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "px-5 py-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-2xs font-medium tracking-nav text-mute uppercase",
											children: "4 bed · 2 bath · 2,180 sf · Two story"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-2xl leading-snug italic",
											children: "The Snowline Chalet"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-relaxed text-ink-soft",
											children: "A four-bedroom, two-bath alpine house with a two-story glass gable."
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col border border-line bg-cream",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden bg-paper-deep",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/snowline-great-room.jpg",
									alt: "The Snowline Chalet interior — great room",
									width: 1057,
									height: 1920,
									decoding: "async",
									className: "aspect-photo w-full object-cover object-great-room"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-5 py-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-2xs font-medium tracking-nav text-mute uppercase",
										children: "Interior"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-2xl leading-snug italic",
										children: "Great room"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-ink-soft",
										children: "Two-story cedar, black steel, and a hearth. The gable glass opens the living floor to the snow and the range."
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col border border-line bg-cream lg:col-span-2 lg:grid lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden bg-paper-deep",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/snowline-kitchen.jpg",
									alt: "The Snowline Chalet kitchen and dining",
									width: 1048,
									height: 1920,
									decoding: "async",
									className: "aspect-interior w-full object-cover object-kitchen lg:aspect-auto lg:min-h-96 lg:h-full"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-center px-5 py-5 sm:px-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-2xs font-medium tracking-nav text-mute uppercase",
										children: "Interior"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 font-display text-2xl leading-snug italic",
										children: "Kitchen and dining"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-md text-sm leading-relaxed text-ink-soft",
										children: "Cedar, black millwork, and a stacked-stone fireplace. The kitchen island and dining table sit in one room — the chalet cooked and eaten by the hearth, looking toward the snow."
									})
								]
							})]
						})
					]
				})
			]
		})
	});
}
function TabButton({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-pressed": active,
		className: cn("flex-1 px-4 py-3 text-xs font-medium tracking-nav uppercase transition-colors duration-150", active ? "bg-ink text-cream" : "bg-cream text-ink-soft hover:bg-paper hover:text-ink"),
		children
	});
}
function SpecSet() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-line bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xs font-medium tracking-label text-mute uppercase",
					children: "Professional set"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl leading-title font-normal italic sm:text-5xl",
					children: "Drawn to be built."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-sm leading-relaxed text-ink-soft",
					children: "Primary suite on the main floor; three bedrooms and the second bath on the upper wings, with a loft looking into the great room. Cedar rain-screen, black steel, stone chimney, standing-seam roof."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 flex flex-wrap gap-2",
					children: [
						"Cedar rain-screen",
						"Black steel",
						"Stone chimney",
						"Standing-seam metal"
					].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border border-line bg-cream px-3 py-1 text-xs tracking-nav text-ink-soft uppercase",
						children: item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "mt-8 inline-flex h-12 items-center justify-center bg-ink px-7 text-sm font-medium text-cream hover:bg-walnut",
					href: CONTACT,
					children: "Quote this chalet"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid grid-cols-2 gap-px overflow-hidden border border-line bg-line",
				children: [
					["Bedrooms", "4 bed"],
					["Baths", "2"],
					["Stories", "Two"],
					["Heated area", "2,180 sf"],
					["Garage", "None — snow court"],
					["Width × depth", "48' × 34'"]
				].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-cream p-4 sm:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-2xs font-medium tracking-label text-mute uppercase",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-display text-xl italic sm:text-2xl",
						children: value
					})]
				}, label))
			})]
		})
	});
}
function PlanSection() {
	const [floor, setFloor] = (0, import_react.useState)("main");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-line bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xs font-medium tracking-label text-mute uppercase",
					children: "To-scale schematic"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl leading-title font-normal italic sm:text-5xl",
					children: "Floor plans"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft",
					children: "Main floor: great room, kitchen, dining, primary suite, and mud. Upper: loft, three bedrooms, and the second bath."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 min-h-96 border border-line bg-paper p-3 sm:p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanTab, {
							active: floor === "main",
							onClick: () => setFloor("main"),
							children: "Main"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanTab, {
							active: floor === "upper",
							onClick: () => setFloor("upper"),
							children: "Upper"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-w-72",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloorPlan, { floor })
						})
					})]
				})
			]
		})
	});
}
function PlanTab({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		"aria-pressed": active,
		className: cn("h-10 px-4 text-xs font-medium tracking-nav uppercase transition-colors duration-150", active ? "bg-ink text-cream" : "bg-ink/5 text-ink hover:bg-ink/10"),
		children
	});
}
//#endregion
export { SnowlineListing as t };
