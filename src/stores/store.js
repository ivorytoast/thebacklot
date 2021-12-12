import { writable } from 'svelte/store';

export const stepCount = writable(1);
export const stepProgress = writable(['LightGray', 'LightGray', 'LightGray', 'LightGray']);
export const graphicDesignDetailsChoice = writable('');