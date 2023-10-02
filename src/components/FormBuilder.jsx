import { useState } from "react";
import Edit from "../assets/edit.svg";

const FormBuilder = () => {
	const [isDropdownVisible, setDropdownVisible] = useState(false);
	const [isParagraphSelected, setIsParagraphSelected] = useState(false);
	const [isDateSelected, setIsDateSelected] = useState(false);
	const [isNumberSelected, setIsNumberSelected] = useState(false);
	const [isYesNoSelected, setIsYesNoSelected] = useState(false);
	const [isShortAnsSelected, setIsShortAnsSelected] = useState(false);
	const [isFileUploadSelected, setIsFileUploadSelected] = useState(false);
	const [isVideoSelected, setIsVieoSelected] = useState(false);
	const [isMCQSelected, setIsMCQSelected] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const [inputFields, setInputFields] = useState([""]);

	const handleAddInputField = () => {
		setInputFields([...inputFields, ""]);
	};

	const handleMCQInputChange = (index, value) => {
		const updatedFields = [...inputFields];
		updatedFields[index] = value;
		setInputFields(updatedFields);
	};

	const handleAddQuestion = () => {
		setDropdownVisible(true);
	};

	const handleDropdownChange = (e) => {
		const selectedOption = e.target.value;

		if (selectedOption === "paragraph") {
			setIsParagraphSelected(true);
			setIsShortAnsSelected(false);
			setIsFileUploadSelected(false);
			setIsYesNoSelected(false);
			setIsDateSelected(false);
			setIsNumberSelected(false);
			setIsVieoSelected(false);
			setIsMCQSelected(false);
		} else if (selectedOption === "short-answer") {
			setIsShortAnsSelected(true);
			setIsParagraphSelected(false);
			setIsFileUploadSelected(false);
			setIsYesNoSelected(false);
			setIsDateSelected(false);
			setIsNumberSelected(false);
			setIsVieoSelected(false);
			setIsMCQSelected(false);
		} else if (selectedOption === "file-upload") {
			setIsFileUploadSelected(true);
			setIsShortAnsSelected(false);
			setIsParagraphSelected(false);
			setIsYesNoSelected(false);
			setIsDateSelected(false);
			setIsNumberSelected(false);
			setIsVieoSelected(false);
			setIsMCQSelected(false);
		} else if (selectedOption === "yes-no") {
			setIsYesNoSelected(true);
			setIsFileUploadSelected(false);
			setIsShortAnsSelected(false);
			setIsParagraphSelected(false);
			setIsDateSelected(false);
			setIsNumberSelected(false);
			setIsVieoSelected(false);
			setIsMCQSelected(false);
		} else if (selectedOption === "date") {
			setIsYesNoSelected(false);
			setIsFileUploadSelected(false);
			setIsShortAnsSelected(false);
			setIsParagraphSelected(false);
			setIsDateSelected(true);
			setIsNumberSelected(false);
			setIsVieoSelected(false);
			setIsMCQSelected(false);
		} else if (selectedOption === "number") {
			setIsYesNoSelected(false);
			setIsFileUploadSelected(false);
			setIsShortAnsSelected(false);
			setIsParagraphSelected(false);
			setIsDateSelected(false);
			setIsNumberSelected(true);
			setIsVieoSelected(false);
			setIsMCQSelected(false);
		} else if (selectedOption === "video") {
			setIsYesNoSelected(false);
			setIsFileUploadSelected(false);
			setIsShortAnsSelected(false);
			setIsParagraphSelected(false);
			setIsDateSelected(false);
			setIsNumberSelected(false);
			setIsVieoSelected(true);
			setIsMCQSelected(false);
		} else if (selectedOption === "mcq") {
			setIsYesNoSelected(false);
			setIsFileUploadSelected(false);
			setIsShortAnsSelected(false);
			setIsParagraphSelected(false);
			setIsDateSelected(false);
			setIsNumberSelected(false);
			setIsVieoSelected(false);
			setIsMCQSelected(true);
		} else {
			setIsParagraphSelected(false);
			setDropdownVisible(false);
		}
	};

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSaveParagraphQuestion = () => {
		if (inputValue.trim() !== "") {
			setQuestions([...questions, { category: "Paragraph", text: inputValue }]);
			setInputValue("");
			setIsParagraphSelected(false);
			setDropdownVisible(false);
		}
	};

	const handleSaveShortAnsQuestion = () => {
		if (inputValue.trim() !== "") {
			setQuestions([
				...questions,
				{ category: "Short Answer", text: inputValue },
			]);
			setInputValue("");
			setIsShortAnsSelected(false);
			setDropdownVisible(false);
		}
	};

	const handleSaveFileUploadAnsQuestion = () => {
		if (inputValue.trim() !== "") {
			setQuestions([
				...questions,
				{ category: "File Upload", text: inputValue },
			]);
			setInputValue("");
			setIsFileUploadSelected(false);
			setDropdownVisible(false);
		}
	};

	const handleSaveYesNoQuestion = () => {
		if (inputValue.trim() !== "") {
			setQuestions([...questions, { category: "Yes/No", text: inputValue }]);
			setInputValue("");
			setIsYesNoSelected(false);
			setDropdownVisible(false);
		}
	};

	const handleSaveDateQuestion = () => {
		if (inputValue.trim() !== "") {
			setQuestions([...questions, { category: "Date", text: inputValue }]);
			setInputValue("");
			setIsDateSelected(false);
			setDropdownVisible(false);
		}
	};

	const handleSaveNumberQuestion = () => {
		if (inputValue.trim() !== "") {
			setQuestions([...questions, { category: "Number", text: inputValue }]);
			setInputValue("");
			setIsNumberSelected(false);
			setDropdownVisible(false);
		}
	};

	const handleSaveVideoQuestion = () => {
		if (inputValue.trim() !== "") {
			setQuestions([...questions, { category: "Video", text: inputValue }]);
			setInputValue("");
			setIsVieoSelected(false);
			setDropdownVisible(false);
		}
	};

	const handleSaveMCQQuestion = () => {
		if (inputValue.trim() !== "") {
			setQuestions([
				...questions,
				{ category: "Multiple Choice", text: inputValue },
			]);
			setInputValue("");
			setIsMCQSelected(false);
			setDropdownVisible(false);
		}
	};

	const handleDeleteQuestion = () => {
		setDropdownVisible(false);
		setIsYesNoSelected(false);
		setIsFileUploadSelected(false);
		setIsShortAnsSelected(false);
		setIsParagraphSelected(false);
		setIsDateSelected(false);
		setIsNumberSelected(false);
		setIsVieoSelected(false);
		setIsMCQSelected(false);
		setInputFields([""]);
	};

	return (
		<div className="w-full">
			<ul className="mt-2 ml-5">
				{questions.map((question, index) => (
					<li key={index} className="mb-2">
						<div className="flex flex-col items-start justify-center">
							<span className="font-semibold text-gray-500 text-[14px]">
								{question.category}
							</span>
							<div className="flex justify-start items-center gap-2">
								<span className="font-semibold text-black text-xl -mt-1.5">
									{question.text}
								</span>
								<button>
									<img className="w-3.5 -mt-1" src={Edit} alt="edit-icon" />
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
			{!isDropdownVisible && (
				<div
					className="flex gap-2 justify-start items-center cursor-pointer mt-1"
					onClick={handleAddQuestion}
				>
					<span className="text-4xl font-semibold text-emerald-600">+</span>
					<span className="text-base mt-2.5 font-semibold text-emerald-600">
						Add a question
					</span>
				</div>
			)}
			{isDropdownVisible && (
				<div>
					<div className="form-control  mb-2 w-full">
						<label className="label">
							<span className="label-text">Type</span>
						</label>
						<select
							className="select select-bordered"
							onChange={handleDropdownChange}
						>
							<option disabled selected>
								Pick one
							</option>
							<option value="paragraph">Paragraph</option>
							<option value="short-answer">Short Answer</option>
							<option value="yes-no">Yes/No</option>
							<option>Dropdown</option>
							<option value="mcq">Multiple Choice</option>
							<option value="date">Date</option>
							<option value="number">Number</option>
							<option value="file-upload">File Upload</option>
							<option value="video">Video</option>
						</select>
					</div>
					{isParagraphSelected && (
						<div className="flex flex-col gap-7">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Question</span>
								</label>
								<input
									type="text"
									placeholder="Type here"
									className="input input-bordered w-full "
									value={inputValue}
									onChange={handleInputChange}
								/>
							</div>
							<div className="flex justify-between items-center">
								<button
									className="btn btn-error btn-outline border-2 hover:text-black"
									onClick={handleDeleteQuestion}
								>
									<span className="font-bold text-[22px]">X</span>
									<span className="font-bold text-[15px] mt-0.5">
										Delete Question
									</span>
								</button>
								<button
									className="btn btn-success btn-outline text-bold border-2"
									onClick={handleSaveParagraphQuestion}
								>
									<span className="font-bold text-[15px] ">Save</span>
								</button>
							</div>
						</div>
					)}
					{isShortAnsSelected && (
						<div className="flex flex-col gap-7">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Question</span>
								</label>
								<input
									type="text"
									placeholder="Type here"
									className="input input-bordered w-full "
									value={inputValue}
									onChange={handleInputChange}
								/>
							</div>
							<div className="flex justify-between items-center">
								<button
									className="btn btn-error btn-outline border-2 hover:text-black"
									onClick={handleDeleteQuestion}
								>
									<span className="font-bold text-[22px]">X</span>
									<span className="font-bold text-[15px] mt-0.5">
										Delete Question
									</span>
								</button>
								<button
									className="btn btn-success btn-outline text-bold border-2"
									onClick={handleSaveShortAnsQuestion}
								>
									<span className="font-bold text-[15px] ">Save</span>
								</button>
							</div>
						</div>
					)}
					{isFileUploadSelected && (
						<div className="flex flex-col gap-7">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Question</span>
								</label>
								<input
									type="text"
									placeholder="Type here"
									className="input input-bordered w-full "
									value={inputValue}
									onChange={handleInputChange}
								/>
							</div>
							<div className="flex justify-between items-center">
								<button
									className="btn btn-error btn-outline border-2 hover:text-black"
									onClick={handleDeleteQuestion}
								>
									<span className="font-bold text-[22px]">X</span>
									<span className="font-bold text-[15px] mt-0.5">
										Delete Question
									</span>
								</button>
								<button
									className="btn btn-success btn-outline text-bold border-2"
									onClick={handleSaveFileUploadAnsQuestion}
								>
									<span className="font-bold text-[15px] ">Save</span>
								</button>
							</div>
						</div>
					)}
					{isYesNoSelected && (
						<div className="flex flex-col gap-5">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Question</span>
								</label>
								<input
									type="text"
									placeholder="Type here"
									className="input input-bordered w-full "
									value={inputValue}
									onChange={handleInputChange}
								/>
							</div>
							<div className="form-control w-fit ml-2">
								<label className="cursor-pointer label">
									<input
										type="checkbox"
										className="checkbox checkbox-success checkbox-sm rounded-md"
									/>
									<span className="label-text ml-2 text-[14px]">
										Disqualify candidate if the answer is no
									</span>
								</label>
							</div>
							<div className="flex justify-between items-center">
								<button
									className="btn btn-error btn-outline border-2 hover:text-black"
									onClick={handleDeleteQuestion}
								>
									<span className="font-bold text-[22px]">X</span>
									<span className="font-bold text-[15px] mt-0.5">
										Delete Question
									</span>
								</button>
								<button
									className="btn btn-success btn-outline text-bold border-2"
									onClick={handleSaveYesNoQuestion}
								>
									<span className="font-bold text-[15px] ">Save</span>
								</button>
							</div>
						</div>
					)}
					{isDateSelected && (
						<div className="flex flex-col gap-7">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Question</span>
								</label>
								<input
									type="text"
									placeholder="Type here"
									className="input input-bordered w-full "
									value={inputValue}
									onChange={handleInputChange}
								/>
							</div>
							<div className="flex justify-between items-center">
								<button
									className="btn btn-error btn-outline border-2 hover:text-black"
									onClick={handleDeleteQuestion}
								>
									<span className="font-bold text-[22px]">X</span>
									<span className="font-bold text-[15px] mt-0.5">
										Delete Question
									</span>
								</button>
								<button
									className="btn btn-success btn-outline text-bold border-2"
									onClick={handleSaveDateQuestion}
								>
									<span className="font-bold text-[15px] ">Save</span>
								</button>
							</div>
						</div>
					)}
					{isNumberSelected && (
						<div className="flex flex-col gap-7">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Question</span>
								</label>
								<input
									type="text"
									placeholder="Type here"
									className="input input-bordered w-full "
									value={inputValue}
									onChange={handleInputChange}
								/>
							</div>
							<div className="flex justify-between items-center">
								<button
									className="btn btn-error btn-outline border-2 hover:text-black"
									onClick={handleDeleteQuestion}
								>
									<span className="font-bold text-[22px]">X</span>
									<span className="font-bold text-[15px] mt-0.5">
										Delete Question
									</span>
								</button>
								<button
									className="btn btn-success btn-outline text-bold border-2"
									onClick={handleSaveNumberQuestion}
								>
									<span className="font-bold text-[15px] ">Save</span>
								</button>
							</div>
						</div>
					)}
					{isVideoSelected && (
						<div className="flex flex-col gap-7">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Question</span>
								</label>
								<input
									type="text"
									placeholder="Type here"
									className="input input-bordered w-full "
									value={inputValue}
									onChange={handleInputChange}
								/>
								<input
									type="text"
									placeholder="Additional Information"
									className="input input-bordered w-full mt-4"
								/>
								<div className="flex mt-4 justify-between items-center gap-4">
									<input
										type="number"
										placeholder="Max duration of video"
										className="input input-bordered w-full"
									/>

									<select className="select select-bordered w-full">
										<option disabled selected>
											in (sec/min)
										</option>
										<option>Seconds</option>
										<option>Minutes</option>
									</select>
								</div>
							</div>
							<div className="flex justify-between items-center">
								<button
									className="btn btn-error btn-outline border-2 hover:text-black"
									onClick={handleDeleteQuestion}
								>
									<span className="font-bold text-[22px]">X</span>
									<span className="font-bold text-[15px] mt-0.5">
										Delete Question
									</span>
								</button>
								<button
									className="btn btn-success btn-outline text-bold border-2"
									onClick={handleSaveVideoQuestion}
								>
									<span className="font-bold text-[15px] ">Save</span>
								</button>
							</div>
						</div>
					)}
					{isMCQSelected && (
						<div className="flex flex-col gap-5">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Question</span>
								</label>
								<input
									type="text"
									placeholder="Type here"
									className="input input-bordered w-full "
									value={inputValue}
									onChange={handleInputChange}
								/>
							</div>
							<div className="form-control w-full ">
								<label className="label">
									<span className="label-text">Choice</span>
								</label>
								<div className="flex flex-col gap-4 ">
									{inputFields.map((input, index) => (
										<div
											key={index}
											className="flex justify-start items-center gap-4"
										>
											<input
												type="text"
												placeholder="Type here"
												className="input input-bordered w-full "
												value={input}
												onChange={(e) =>
													handleMCQInputChange(index, e.target.value)
												}
											/>
											<button
												onClick={handleAddInputField}
												className="text-2xl font-bold"
											>
												+
											</button>
										</div>
									))}
								</div>
							</div>
							<div className="form-control w-fit ">
								<label className="cursor-pointer label">
									<input
										type="checkbox"
										className="checkbox border-2 checkbox-sm rounded-md"
									/>
									<span className="label-text ml-2 text-[14px]">
										Enable `Other` option
									</span>
								</label>
							</div>
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text">Max choice allowed</span>
								</label>
								<input
									type="number"
									className="input input-bordered w-full "
									defaultValue="0"
								/>
							</div>
							<div className="flex justify-between items-center">
								<button
									className="btn btn-error btn-outline border-2 hover:text-black"
									onClick={handleDeleteQuestion}
								>
									<span className="font-bold text-[22px]">X</span>
									<span className="font-bold text-[15px] mt-0.5">
										Delete Question
									</span>
								</button>
								<button
									className="btn btn-success btn-outline text-bold border-2"
									onClick={handleSaveMCQQuestion}
								>
									<span className="font-bold text-[15px] ">Save</span>
								</button>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default FormBuilder;
