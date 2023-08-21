/**
 * Represents a step in an AI process.
 */
enum StepType {
	Prompt,
	Input,
}

class AIStep {
	id: number;
	title: string;
	value: string;

	/**
	 * Create a new AIStep instance.
	 * @param {number} id - The ID of the step.
	 * @param {string} title - The title of the step.
	 * @param {string} value - The value associated with the step.
	 */
	constructor(id: number, title: string, value: string) {
		this.id = id;
		this.title = title;
		this.value = value;
	}

	/**
	 * Returns a string representation of the AIStep instance.
	 * @returns {string} A string representation of the AIStep.
	 */
	toString(): string {
		return `AIStep(id: ${this.id}, title: "${this.title}", value: "${this.value}")`;
	}
}

/**
 * Represents an input step in an AI process.
 * @extends AIStep
 */
class InputAIStep extends AIStep {
	saveValue?: string;

	/**
	 * Create a new InputAIStep instance.
	 * @param {number} id - The ID of the step.
	 * @param {string} title - The title of the step.
	 * @param {string} value - The value associated with the step.
	 * @param {string} [saveValue] - The value to be saved.
	 */
	constructor(id: number, title: string, value: string, saveValue?: string) {
		super(id, title, value);
		this.saveValue = saveValue;
	}

	/**
	 * Returns a string representation of the InputAIStep instance.
	 * @returns {string} A string representation of the InputAIStep.
	 */
	toString(): string {
		return `InputAIStep(id: ${this.id}, title: "${this.title}", value: "${this.value}", ` +
			`saveValue: "${this.saveValue}")`;
	}
}


/**
 * Represents a prompt step in an AI process.
 * @extends AIStep
 */
class PromptAIStep extends AIStep {}

/**
 * Represents a command step in an AI process.
 * @extends AIStep
 */
class CommandAIStep extends AIStep {}

/**
 * Represents an output step in an AI process.
 * @extends AIStep
 */
class OutputAIStep extends AIStep {}


export { AIStep, InputAIStep, PromptAIStep, CommandAIStep, OutputAIStep };
