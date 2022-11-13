import "./App.css";
import memoriesImg from "./Images/memories.png";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
function App() {
	return (
		<div className="App container">
			<div className="app-bar static text-inherit ">
				<h2 className="font-Source-Sans-Pro font-[600] text-[2rem]  text-center text-[#00b7ff]">
					Memories
				</h2>
				<img
					src={memoriesImg}
					alt="memories"
					className="h-[60px] w-auto ml-[15px]"
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-12 items-stretch justify-between  gap-3">
				<div className="md:col-span-7">
					<Posts />
				</div>
				<div className="md:col-span-5">
					<Form />
				</div>
			</div>
		</div>
	);
}

export default App;
