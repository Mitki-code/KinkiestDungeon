/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */


AddModel({
	Name: "ShacklesWristLeft",
	Folder: "Cuffs",
	TopLevel: false,
	Parent: "ShacklesWrists",
	Categories: ["Restraints","Cuffs"],
	AddPose: ["WristLeft"],
	Layers: ToLayerMap([
		{ Name: "WristLeft", Layer: "BindWristLeft", Pri: 1,
			Poses: ToMapSubtract([...ARMPOSES], [...WRISTHIDELEFT]),
			SwapLayerPose: {Front: "BindForeWristLeft"},
			DisplacementSprite: "CuffLeft",
			DisplaceLayers: ToMap(["Yoke"]),
			DisplaceAmount: 40,
		},
	])
});
AddModel({
	Name: "ShacklesWristRight",
	Folder: "Cuffs",
	TopLevel: false,
	Parent: "ShacklesWrists",
	Categories: ["Restraints","Cuffs"],
	AddPose: ["WristRight"],
	Layers: ToLayerMap([
		{ Name: "WristRight", Layer: "BindWristRight", Pri: 1,
			Poses: ToMapSubtract([...ARMPOSES], [...WRISTHIDERIGHT]),
			SwapLayerPose: {Front: "BindForeWristRight"},
			DisplacementSprite: "CuffRight",
			DisplaceLayers: ToMap(["Yoke"]),
			DisplaceAmount: 50,
		},
	])
});

AddModel({
	Name: "ShacklesWrists",
	Folder: "Cuffs",
	TopLevel: true,
	Parent: "Shackles",
	Categories: ["Restraints","Cuffs"],
	AddPose: ["WristLeft", "WristRight"],
	Layers: ToLayerMap([
		...GetModelLayers("ShacklesWristLeft"),
		...GetModelLayers("ShacklesWristRight"),
	])
});


AddModel({
	Name: "ShacklesAnklesLeft",
	Folder: "Cuffs",
	TopLevel: false,
	Parent: "ShacklesAnkles",
	Categories: ["Restraints","Cuffs"],
	AddPose: ["AnkleLeft"],
	Layers: ToLayerMap([
		{ Name: "AnkleLeft", Layer: "AnkleLeft", Pri: 30,
			Poses: ToMap([...FOOTLEFTPOSES]),
			DisplacementSprite: "AnkleCuffLeft",
			DisplaceLayers: ToMap(["LegCuffs"]),
			DisplaceAmount: 50,
		},
	])
});

AddModel({
	Name: "ShacklesAnklesRight",
	Folder: "Cuffs",
	TopLevel: false,
	Parent: "ShacklesAnkles",
	Categories: ["Restraints","Cuffs"],
	AddPose: ["AnkleRight"],
	Layers: ToLayerMap([
		{ Name: "AnkleRight", Layer: "AnkleRight", Pri: 30,
			Poses: ToMap([...FOOTRIGHTPOSES]),
			DisplacementSprite: "AnkleCuffRight",
			DisplaceLayers: ToMap(["LegCuffs"]),
			DisplaceAmount: 50,
		},
	])
});


AddModel({
	Name: "ShacklesAnkles",
	Folder: "Cuffs",
	TopLevel: true,
	Categories: ["Restraints","Cuffs"],
	AddPose: ["AnkleRight", "AnkleLeft"],
	Layers: ToLayerMap([
		...GetModelLayers("ShacklesAnklesRight"),
		...GetModelLayers("ShacklesAnklesLeft"),
	])
});