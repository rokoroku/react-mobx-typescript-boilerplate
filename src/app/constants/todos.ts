export enum TodoFilter {
  ALL = 0,
  ACTIVE,
  COMPLETED,
}

export const TODO_FILTER_TYPES = [
  TodoFilter.ALL,
  TodoFilter.ACTIVE,
  TodoFilter.COMPLETED,
];

export const TODO_FILTER_TITLES = {
  [TodoFilter.ALL]: 'All',
  [TodoFilter.ACTIVE]: 'Active',
  [TodoFilter.COMPLETED]: 'Completed',
};

export const TODO_FILTER_LOCATION_HASH = {
  [TodoFilter.ALL]: '#',
  [TodoFilter.ACTIVE]: '#active',
  [TodoFilter.COMPLETED]: '#completed',
};
