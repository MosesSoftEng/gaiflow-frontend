"use client";
import React from "react";
import StepTypeComponent from "@/components/flow/step-type-component";
import { aiStepsTypes } from "@/globals/global";
import { FlowModule } from "@/components/flow/flow-module";

export default function CreatePrompt() {
	const { flow, setFlow, activeStep, setActiveStep, addStepToFlow, updateStepInFlow, removeLastStepFromFlow } =
		FlowModule();

	/**
	 * Handles the change event when an input value is modified.
	 * Updates the active step's property, then updates the step in the flow.
	 * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
	 */
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (activeStep === null) return;

		const { name, value } = e.target;

		// Update active step property.
		setActiveStep({ ...activeStep, [name]: value });

		// Update step in flow.
		setFlow(updateStepInFlow(flow, activeStep));
	};

	return (
		<div className="flex">
			<div className="flex-shrink-0 w-64">
				<h1>AI Steps Types.</h1>

				{aiStepsTypes.map((step: AIStep, index: number) => (
					<StepTypeComponent key={index} step={step} addStepToFlow={addStepToFlow} />
				))}
			</div>

			<div className="flex-1">
				<h1>Steps Flow.</h1>

				<ul>
					{flow.map((step: AIStep, index: number) => (
						// TODO: Create step UI component.
						<li
							key={index}
							onClick={() => {
								setActiveStep(step);
							}}
						>
							{step.id}. {step.type}.
							<br />
							title: {step.title}.
						</li>
					))}

					<li>
						{/* TODO: Style button */}
						{flow.length > 0 ? <button onClick={removeLastStepFromFlow}> Remove last step</button> : ""}
					</li>
				</ul>
			</div>

			<div className="flex-shrink-0 w-64">
				<h1>Step properties.</h1>

				<ul className="w-96">
					{activeStep ? (
						<>
							{/* TODO: Convert li to a resusable UI component */}
							<li
								className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4
										dark:border-opacity-50"
							>
								ID:
								<br />
								{activeStep.id}
							</li>

							<li
								className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4
										dark:border-opacity-50"
							>
								Type:
								<br />
								{activeStep.type}
							</li>

							<li
								className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4
										dark:border-opacity-50"
							>
								Title:
								<br />
								<input name="title" value={activeStep.title} onChange={handleChange} className="text-black" />
							</li>

							<li
								className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4
										dark:border-opacity-50"
							>
								Value:
								<br />
								<input name="value" value={activeStep.value} onChange={handleChange} className="text-black" />
							</li>
						</>
					) : (
						<div className="text-center py-4">No active step selected.</div>
					)}
				</ul>
			</div>
		</div>
	);
}
