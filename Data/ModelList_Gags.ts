/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */

AddModel({
	Name: "MaidGag",
	Folder: "GagFrilly",
	TopLevel: true,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth", "FaceGag", "StuffMouth"],
	Layers: ToLayerMap([
		{ Name: "FrillyPanel", Layer: "Gag", Pri: 13,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			InheritColor: "Panel",
		},
		{ Name: "FrillyStraps", Layer: "GagStraps", Pri: 16,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			InheritColor: "Straps",
		},
		{ Name: "FrillyHardware", Layer: "GagStraps", Pri: 14,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			InheritColor: "Hardware",
		},
		{ Name: "FrillyHighlights", Layer: "GagStraps", Pri: 14,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			InheritColor: "Highlights",
		},
	])
});
AddModel({
	Name: "DusterGag",
	Folder: "GagFrilly",
	TopLevel: false,
	Group: "Mouth",
	Parent: "MaidGag",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth", "FaceGag", "StuffMouth"],
	Layers: ToLayerMap([
		...GetModelLayers("MaidGag"),
		{ Name: "Duster", Layer: "MouthProp", Pri: 15,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
	])
});

AddModel({
	Name: "BallGag",
	Folder: "GagLeather",
	TopLevel: true,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth", "FaceGag", "StuffMouth"],
	Layers: ToLayerMap([
		{ Name: "Ball", Layer: "Gag", Pri: 1,
			Sprite: "Ball",
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			MorphPoses: {MouthNeutral: "_TeethDeep", MouthSurprised: "_Teeth", MouthPout: "_TeethDeep", MouthDistracted: "_Teeth"},
		},
		{ Name: "Strap", Layer: "GagStraps", Pri: 15,
			Sprite: "BallStrap",
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
	])
});
AddModel(GetModelWithExtraLayers("BallGagHarness", "BallGag", [
	{ Name: "Harness", Layer: "GagStraps", Pri: 10,
		Sprite: "BallHarness",
		OffsetX: 942,
		OffsetY: 200,
		Invariant: true,
	},
], "BallGag", false));
AddModel(GetModelWithExtraLayers("BallGagHarnessSecure", "BallGagHarness", [
	{ Name: "SideStrap", Layer: "GagStraps", Pri: 20,
		Sprite: "BallSideStrap",
		OffsetX: 942,
		OffsetY: 200,
		Invariant: true,
	},
], "BallGag", false));



AddModel({
	Name: "LargeBallGag",
	Folder: "GagLeather",
	TopLevel: true,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth", "FaceBigGag", "StuffMouth"],
	Layers: ToLayerMap([
		{ Name: "Ball", Layer: "Gag", Pri: 1,
			Sprite: "BigBall",
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{ Name: "Strap", Layer: "GagStraps", Pri: 13,
			Sprite: "BigBallStrap",
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
	])
});
AddModel(GetModelWithExtraLayers("LargeBallGagHarness", "LargeBallGag", [
	{ Name: "Harness", Layer: "GagStraps", Pri: 15,
		Sprite: "BallHarness",
		OffsetX: 942,
		OffsetY: 200,
		Invariant: true,
	},
], "LargeBallGag", false));
AddModel(GetModelWithExtraLayers("LargeBallGagHarnessSecure", "LargeBallGagHarness", [
	{ Name: "SideStrap", Layer: "GagStraps", Pri: 20,
		Sprite: "BallSideStrap",
		OffsetX: 942,
		OffsetY: 200,
		Invariant: true,
	},
], "LargeBallGag", false));

AddModel({
	Name: "PanelGag",
	Folder: "GagLeather",
	TopLevel: true,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth", "FaceCoverGag", "StuffMouth"],
	Layers: ToLayerMap([
		{ Name: "Panel", Layer: "GagFlat", Pri: 5,
			Sprite: "Panel",
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{ Name: "Strap", Layer: "GagStraps", Pri: 17,
			Sprite: "BallStrap",
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
	])
});
AddModel(GetModelWithExtraLayers("PanelGagHarness", "PanelGag", [
	{ Name: "Harness", Layer: "GagFlatStraps", Pri: 19,
		Sprite: "PanelHarness",
		OffsetX: 942,
		OffsetY: 200,
		Invariant: true,
	},
], "PanelGag", false));
AddModel(GetModelWithExtraLayers("PanelGagHarnessSecure", "PanelGagHarness", [
	{ Name: "SideStrap", Layer: "GagFlatStraps", Pri: 21,
		Sprite: "PanelSideStrap",
		OffsetX: 942,
		OffsetY: 200,
		Invariant: true,
	},
], "PanelGag", false));



AddModel({
	Name: "MuzzleGag",
	Folder: "GagLeather",
	TopLevel: true,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth", "FaceCoverGag", "StuffMouth"],
	Layers: ToLayerMap([
		{ Name: "Muzzle", Layer: "GagMuzzle", Pri: 3,
			Sprite: "Muzzle",
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
		{ Name: "Strap", Layer: "GagMuzzleStraps", Pri: 15,
			Sprite: "MuzzleStrap",
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
	])
});

AddModel(GetModelWithExtraLayers("MuzzleGagHarness", "MuzzleGag", [
	{ Name: "Harness", Layer: "GagMuzzleStraps", Pri: 18,
		Sprite: "MuzzleHarness",
		OffsetX: 942,
		OffsetY: 200,
		Invariant: true,
	},
], "MuzzleGag", false));
AddModel(GetModelWithExtraLayers("MuzzleGagHarnessSecure", "MuzzleGagHarness", [
	{ Name: "SideStrap", Layer: "GagMuzzleStraps", Pri: 22,
		Sprite: "MuzzleSideStrap",
		OffsetX: 942,
		OffsetY: 200,
		Invariant: true,
	},
], "MuzzleGag", false));



AddModel({
	Name: "PlugGagPlug",
	Folder: "Dummy",
	TopLevel: true,
	Group: "Mouth",
	Restraint: true,
	Categories: [],
	Layers: ToLayerMap([
		{ Name: "Plug", Layer: "GagMuzzle", Pri: 14,
			Sprite: "Plug",
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
	])
});

AddModel(GetModelWithExtraLayers("PlugMuzzleGag", "MuzzleGag", [
	...GetModelLayers("PlugGagPlug"),
], "MuzzleGag", false));
AddModel(GetModelWithExtraLayers("PlugMuzzleGagHarness", "MuzzleGagHarness", [
	...GetModelLayers("PlugGagPlug"),
], "MuzzleGag", false));
AddModel(GetModelWithExtraLayers("PlugMuzzleGagHarnessSecure", "MuzzleGagHarnessSecure", [
	...GetModelLayers("PlugGagPlug"),
], "MuzzleGag", false));


AddModel(GetModelWithExtraLayers("PlugPanelGag", "PanelGag", [
	...GetModelLayers("PlugGagPlug"),
], "PanelGag", false));
AddModel(GetModelWithExtraLayers("PlugPanelGagHarness", "PanelGagHarness", [
	...GetModelLayers("PlugGagPlug"),
], "PanelGag", false));
AddModel(GetModelWithExtraLayers("PlugPanelGagHarnessSecure", "PanelGagHarnessSecure", [
	...GetModelLayers("PlugGagPlug"),
], "PanelGag", false));




AddModel({
	Name: "Stuffing",
	Folder: "GagTape",
	TopLevel: true,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth", "StuffMouth", "FaceGag"],
	Layers: ToLayerMap([
		{ Name: "Stuffing", Layer: "GagUnder", Pri: -100,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
		},
	])
});


AddModel({
	Name: "TapeFull",
	Folder: "GagTape",
	TopLevel: true,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth", "FaceCoverGag"],
	Layers: ToLayerMap([
		{ Name: "Full", Layer: "GagMuzzle", Pri: -50,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			InheritColor: "Tape",
		},
	])
});

AddModel({
	Name: "TapeWrap",
	Folder: "GagTape",
	TopLevel: false,
	Parent: "TapeFull",
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth"],
	Layers: ToLayerMap([
		{ Name: "Wrap", Layer: "GagFlat", Pri: -50,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			InheritColor: "Tape",
		},
	])
});


AddModel({
	Name: "TapeFullOver",
	Folder: "GagTape",
	TopLevel: true,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth", "FaceCoverGag"],
	Layers: ToLayerMap([
		{ Name: "Full", Layer: "GagOver", Pri: -50,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			InheritColor: "Tape",
		},
	])
});

AddModel({
	Name: "TapeWrapOver",
	Folder: "GagTape",
	TopLevel: false,
	Parent: "TapeFull",
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth", "Mouth"],
	Layers: ToLayerMap([
		{ Name: "Wrap", Layer: "GagOver", Pri: -45,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			InheritColor: "Tape",
		},
	])
});

AddModel({
	Name: "TapeCleave",
	Folder: "GagTape",
	TopLevel: false,
	Parent: "TapeFull",
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth"],
	Layers: ToLayerMap([
		{ Name: "Cleave", Layer: "Gag", Pri: -100,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			InheritColor: "Tape",
		},
	])
});



AddModel({
	Name: "ClothCleave",
	Folder: "GagCloth",
	TopLevel: true,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth"],
	Layers: ToLayerMap([
		{ Name: "Cleave", Layer: "Gag", Pri: -25,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			HideWhenOverridden: true,
			InheritColor: "Cloth",
		},
	])
});
AddModel({
	Name: "ClothCleaveThick",
	Folder: "GagCloth",
	TopLevel: false,
	Parent: "ClothCleave",
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth", "StuffMouth", "FaceGag"],
	Layers: ToLayerMap([
		{ Name: "CleaveThick", Layer: "Gag", Pri: -20,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			HideWhenOverridden: true,
			InheritColor: "Cloth",
		},
	])
});

AddModel({
	Name: "ClothKnot",
	Folder: "GagCloth",
	TopLevel: false,
	Parent: "ClothCleave",
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth", "StuffMouth", "FaceGag"],
	Layers: ToLayerMap([
		{ Name: "Knot", Layer: "Gag", Pri: 0,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			HideWhenOverridden: true,
			InheritColor: "Cloth",
		},
	])
});

AddModel({
	Name: "ClothOTN",
	Folder: "GagCloth",
	TopLevel: false,
	Parent: "ClothCleave",
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth", "FaceCoverGag"],
	Layers: ToLayerMap([
		{ Name: "OTN", Layer: "GagMuzzle", Pri: -30,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			HideWhenOverridden: true,
			InheritColor: "Cloth",
		},
	])
});

AddModel({
	Name: "ClothOTM",
	Folder: "GagCloth",
	TopLevel: false,
	Parent: "ClothCleave",
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags"],
	AddPose: ["HideMouth", "FaceCoverGag"],
	Layers: ToLayerMap([
		{ Name: "OTM", Layer: "GagFlat", Pri: -1,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			HideWhenOverridden: true,
			InheritColor: "Cloth",
		},
	])
});

AddModel({
	Name: "GagLatex",
	Folder: "GagLatex",
	TopLevel: true,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags","Latex"],
	AddPose: ["HideMouth", "FaceCoverGag"],
	Layers: ToLayerMap([
		{ Name: "OTN", Layer: "GagFlat", Pri: 20,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			HideWhenOverridden: true,
			InheritColor: "Latex",
			AppendPose: {StuffMouth: "Flat"}
		},
	])
});


AddModel({
	Name: "GagLatexFlat",
	Folder: "GagLatex",
	Parent: "GagLatex",
	TopLevel: false,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags","Latex"],
	AddPose: ["HideMouth", "FaceCoverGag"],
	Layers: ToLayerMap([
		{ Name: "OTNFlat", Layer: "GagFlat", Pri: 30,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			HideWhenOverridden: true,
			InheritColor: "Latex",
		},
	])
});


AddModel({
	Name: "GagMetal",
	Folder: "GagMetal",
	TopLevel: true,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags","Metal"],
	AddPose: ["HideMouth", "FaceCoverGag"],
	Layers: ToLayerMap([
		{ Name: "OTN", Layer: "GagFlat", Pri: 30,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			HideWhenOverridden: true,
			InheritColor: "Metal",
		},
	])
});

AddModel({
	Name: "GagFabric",
	Folder: "GagLeather",
	TopLevel: true,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags","Fabric"],
	AddPose: ["HideMouth", "FaceCoverGag"],
	Layers: ToLayerMap([
		{ Name: "FabricMuzzle", Layer: "GagFlat", Pri: 45,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			NoOverride: true,
			InheritColor: "Fabric",
		},
	])
});
AddModel({
	Name: "KittyMuzzle",
	Folder: "GagLeather",
	TopLevel: false,
	Group: "Mouth",
	Restraint: true,
	Parent: "GagFabric",
	Categories: ["Restraints","Gags","Fabric"],
	AddPose: ["HideMouth", "FaceCoverGag"],
	Layers: ToLayerMap([
		...GetModelLayers("GagFabric"),
		{ Name: "KittyMouth", Layer: "GagFlat", Pri: 45.1,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			NoOverride: true,
			TieToLayer: "FabricMuzzle",
		},
		{ Name: "Whiskers", Layer: "GagFlat", Pri: 45.1,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			NoOverride: true,
			TieToLayer: "FabricMuzzle",
		},
	])
});
AddModel({
	Name: "KittyHarnessPanelGag",
	Folder: "GagLeather",
	TopLevel: false,
	Group: "Mouth",
	Restraint: true,
	Parent: "GagFabric",
	Categories: ["Restraints","Gags","Fabric"],
	AddPose: ["HideMouth", "FaceCoverGag", "StuffMouth"],
	Filters: {
		Panel: {"gamma":0.9833333333333333,"saturation":1,"contrast":0.8,"brightness":3.1,"red":1,"green":1,"blue":1,"alpha":1},
		Strap: {"gamma":0.8,"saturation":1,"contrast":0.9666666666666667,"brightness":2.7666666666666666,"red":1,"green":1,"blue":1,"alpha":1},
		Harness: {"gamma":0.8,"saturation":1,"contrast":0.9666666666666667,"brightness":2.7666666666666666,"red":1,"green":1,"blue":1,"alpha":1},
		SideStrap: {"gamma":0.8,"saturation":1,"contrast":0.9666666666666667,"brightness":2.7666666666666666,"red":1,"green":1,"blue":1,"alpha":1},
	},
	Layers: ToLayerMap([
		...GetModelLayers("PanelGagHarnessSecure"),
		{ Name: "KittyMouth", Layer: "GagFlat", Pri: 45.1,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			NoOverride: true,
			TieToLayer: "FabricMuzzle",
		},
	])
});


AddModel({
	Name: "GagComfy",
	Folder: "GagLeather",
	TopLevel: false,
	Group: "Mouth",
	Parent: "GagFabric",
	Restraint: true,
	Categories: ["Restraints","Gags","Fabric"],
	AddPose: ["FaceCoverGag"],
	Layers: ToLayerMap([
		{ Name: "FabricMuzzle", Layer: "GagFlat", Pri: 45,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			NoOverride: true,
			InheritColor: "Fabric",
		},
	])
});



AddModel({
	Name: "GagMetalRiveted",
	Folder: "GagMetal",
	Parent: "GagMetal",
	TopLevel: false,
	Group: "Mouth",
	Restraint: true,
	Categories: ["Restraints","Gags","Metal"],
	AddPose: ["HideMouth", "FaceCoverGag"],
	Layers: ToLayerMap([
		...GetModelLayers("GagMetal"),
		{ Name: "OTNRivets", Layer: "GagFlat", Pri: 30.1,
			OffsetX: 942,
			OffsetY: 200,
			Invariant: true,
			HideWhenOverridden: true,
			InheritColor: "Rivets",
			TieToLayer: "OTN",
			NoOverride: true,
		},
	])
});

