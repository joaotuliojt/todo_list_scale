import { FilterType } from "../../global/types/filter.types";

export interface IFilterProps {
	filter: FilterType;
	setFilter: (filter: FilterType) => void;
	sortByTitle: () => void;
}

export interface IFilterStyleProps {
	active?: boolean;
}
