import { writable } from 'svelte/store';

export const costChoice = writable('')
export const stepCount = writable(1);
export const stepProgress = writable(['LightGray', 'LightGray', 'LightGray', 'LightGray']);
export const graphicDesignDetailsChoice = writable('threeColors');
export const artworkStyleChoice = writable('graphic')
export const bodyChoice = writable('');
export const shadowChoice = writable('')
export const backgroundChoice = writable('');
export const additionalInfoChoice = writable('');
