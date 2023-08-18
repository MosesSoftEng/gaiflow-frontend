
/**
 * Props for the StepTypeComponent.
 */
interface StepTypeUIProps {
	step: AIStep;
	addStepToFlow: (component: AIStep) => void;
}

/**
 * Component for displaying a step type.
 * @param {StepTypeUIProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
export default function StepTypeComponent({ step: step, addStepToFlow: addStepToFlow }: StepTypeUIProps) {
	return (
		<div className="border-2 m-2 p-2 rounded">
			<b>{step.type}</b>
			<p>{step.title}</p>

			<button
				onClick={() =>
					addStepToFlow({
						id: step.id,
						title: step.title,
						type: step.type,
						value: step.value,
					})
				}
			>
				add
			</button>
		</div>
	);
}
