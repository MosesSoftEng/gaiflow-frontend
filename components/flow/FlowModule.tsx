import { hardCopyObject } from "@/utils/globalFunctions";
import { useState } from "react";


/**
 * Module for managing the flow of AI steps.
 * @module FlowModule
 */
export function FlowModule() {
	const [flow, setFlow] = useState<AIStep[]>([]);
	const [activeStep, setActiveStep] = useState<AIStep | null>(null);

	/**
	 * Adds a new step to the flow array.
	 * @param {AIStep} newStep - The new step to be added.
	 */
	const addStepToFlow = (newStep: AIStep): void => {
		// Update newComponent id to match insertion index.
		const updatedStep = { ...newStep, id: flow.length };

		// Add to the end of flow.
		setFlow([...flow, hardCopyObject(updatedStep)]);
	};

	/**
	 * Removes the last step from the flow array.
	 */
	const removeLastStepFromFlow = (): void => {
		if (flow.length === 0) return;

		const updatedFlow = flow.slice(0, -1); // Remove the last element
		setFlow(updatedFlow);
	};

	/**
	 * Updates a component in the flow array with the properties of the updated
	 *  component.
	 * If the component is not found in the flow array, the original flow array
	 *  is returned.
	 *
	 * @param {AIStep[]} flow - The current flow array containing components.
	 * @param {AIStep} updatedComponent - The updated component with the new
	 *  properties.
	 * @returns {AIStep[]} The updated flow array with the modified component,
	 *  or the original flow array if the component is not found.
	 */
	const updateStepInFlow = (flow: AIStep[], updatedComponent: AIStep): AIStep[] => {
		const updatedFlow = flow.map((component) =>
			component.id === updatedComponent.id ? { ...component, ...updatedComponent } : component
		);

		return updatedFlow;
	};

	return {
		flow,
		setFlow,
		activeStep,
		setActiveStep,
		addStepToFlow,
		removeLastStepFromFlow,
		updateStepInFlow,
	};
}
