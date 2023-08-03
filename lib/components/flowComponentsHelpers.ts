/*
 * Module containing functions to help in managing app components.
 */

/**
 * Updates a component in the flow array with the properties of the updated
 *  component.
 * If the component is not found in the flow array, the original flow array
 *  is returned.
 *
 * @param {Component[]} flow - The current flow array containing components.
 * @param {Component} updatedComponent - The updated component with the new
 *  properties.
 * @returns {Component[]} The updated flow array with the modified component,
 *  or the original flow array if the component is not found.
 */
export function updateComponentInFlow(
  flow: Component[],
  updatedComponent: Component
): Component[] {
  const updatedFlow = flow.map((component) =>
    component.id === updatedComponent.id
      ? { ...component, ...updatedComponent }
      : component
  );

  return updatedFlow;
}
