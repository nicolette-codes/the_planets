export interface Planet {
	name: string;
	overview: Info;
	internal: Info;
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
	overview: string;
	internal: string;
	geology: string;
}
