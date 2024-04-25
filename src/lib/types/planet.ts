export interface Planet {
	name: string;
	overview: Info;
	structure: Info;
	geology: Info;
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
	images: Images;
}

export interface Info {
	content: string;
	source: string;
}

export interface Images {
	planet: string;
	internal: string;
	geology: string;
}
