/*
 * Place all typpes here.
 */

/*
 * Global types for flow components.
 */
interface Component {
    id: number; // TODO: Rename to index.
    title: string;
    type: string;
    nextComponentsIds: number[];
}
