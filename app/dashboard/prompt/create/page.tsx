"use client";
import React, { useState, useEffect } from "react";
import ComponentDisplay from "@/components/flow/ComponentDisplay";
import { aiStepTypes } from "@/globals/global";
import { updateComponentInFlow } from "@/lib/components/flowComponentsHelpers";
import { hardCopyObject } from "@/utils/globalFunctions";

export default function CreatePrompt() {
	const [flow, setFlow] = useState<Component[]>([]);

	const [activeComponent, setActiveComponent] = useState<Component>({
		id: -1,
		title: "",
		type: "",
		nextComponentsIds: [],
	});

	/*
	 * Flow and flow components functions.
	 * TODO: Move flow functions to it's own service moddule - appComponentsHelpers.ts.
	 */
	const addComponentToFlow = (newComponent: Component) => {
		// Update newComponent id to match insertion index.
		const updatedComponent = { ...newComponent, id: flow.length };

		//* Add newComponent id in lastComponent nextComponentsIds.
		let lastComponentNextComponentsIds: number[] = [];

		if (flow.length > 0) {
			const lastComponent = flow[flow.length - 1];
			lastComponentNextComponentsIds = lastComponent.nextComponentsIds;
			lastComponentNextComponentsIds.push(updatedComponent.id);
		}

		const updatedFlow: Component[] = setNextComponentsIdsForComponentAtIndexInFlow(
			flow,
			flow.length - 1,
			lastComponentNextComponentsIds
		);

		// Add to the end of flow.
		setFlow([...updatedFlow, hardCopyObject(updatedComponent)]);
	};

	// TODO: Add docs.
	const setNextComponentsIdsForComponentAtIndexInFlow = (
		flow: Component[],
		index: number,
		nextComponentsIds: number[]
	): Component[] => {
		if (index < 0 || index >= flow.length) {
			// Invalid index, do nothing
			return flow;
		}

		console.log(index);

		const updatedComponent = { ...flow[index], nextComponentsIds };

		return flow.map((component, i) => (i === index ? updatedComponent : component));
	};

	/*
	 * UI functions.
	 */
	// TODO: Add docs.
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		// Update component property.
		setActiveComponent({ ...activeComponent, [name]: value });

		// Update component in flow.
		setFlow(updateComponentInFlow(flow, activeComponent));
	};

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		const index = parseInt(value);

		const updatedNextComponents = activeComponent.nextComponentsIds.includes(index)
			? activeComponent.nextComponentsIds.filter((id) => id !== index)
			: [...activeComponent.nextComponentsIds, index];

		setActiveComponent({ ...activeComponent, nextComponentsIds: updatedNextComponents });
	};

	/*
	 * Effects.
	 */
	useEffect(() => {
		// console.log(flow);
	}, [flow]);

	useEffect(() => {
		console.log(activeComponent);
	}, [activeComponent]);

	return (
		<>
			<div className="flex">
				{/*AISteps Types */}
				<div className="flex-shrink-0 w-64">
					<h1>Components.</h1>

					{aiStepTypes.map((component: Component, index: number) => (
						<ComponentDisplay key={index} component={component} addComponentToFlow={addComponentToFlow} />
					))}
				</div>

				<div className="flex-1">
					<h1>Flow.</h1>

					<ul>
						{flow.map((component: Component, index: number) => (
							<li
								key={index}
								onClick={() => {
									setActiveComponent(component);
								}}
							>
								{component.id}. {component.type}.
								<br />
								title: {component.title}.
								<br />
								nextComponentsIds: {component.nextComponentsIds[0]}.
							</li>
						))}
					</ul>
				</div>

				<div className="flex-shrink-0 w-64">
					<h1>Component properties.</h1>

					<div>
						Title:
						<br />
						<input name="title" value={activeComponent.title} onChange={handleChange} className="text-black" />
					</div>

					<div>
						Next Component Ids:
						<br />
						{flow.map((component: Component, index: number) => (
							<div key={index}>
								<label htmlFor={`checkbox-${component.id}`}>
									<input
										type="checkbox"
										id={`checkbox-${component.id}`}
										value={component.id}
										checked={activeComponent.nextComponentsIds.includes(component.id)}
										onChange={(e) => {
											handleCheckboxChange(e, component.id);
										}}
									/>
								</label>
								{component.id}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
